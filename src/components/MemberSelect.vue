<template>
    <ion-item>
      <ion-input label="First name" labelPlacement="floating" v-model="newFirstName" />
      <ion-input label="Last name" labelPlacement="floating" v-model="newLastName" />
      <ion-input label="Email" labelPlacement="floating" v-model="newEmail" />
    </ion-item>  
    <ion-list>
      <ion-item v-show="!customMemberEmpty">
        <ion-label v-if="customMemberInTeam" :disabled="true">
        Already part of team
      </ion-label>
      <ion-label v-else-if="!customMemberInOrganization" :disabled=!customMemberValidEntry @click="addMemberCustom">
        Add {{ newFirstName }} {{ newLastName }} - {{ newEmail }}
      </ion-label>
        <ion-icon :icon="closeOutline" @click="clearMemberCustom()"></ion-icon>
      </ion-item>

      <ion-item v-for="organizatonMember in filteredOrganizationMembers" @click="addMemberFromList(organizatonMember)">
        Add {{ organizatonMember.first_name }} {{ organizatonMember.last_name }} - {{ organizatonMember.email }}
      </ion-item>
    </ion-list>

  </template>

  <script setup lang="ts">
  import { ref, computed, PropType } from "vue";
  import { 
    IonLabel,
    IonItem,
    IonIcon,
    IonInput,
    IonList,
  } from '@ionic/vue';
  import { closeOutline } from 'ionicons/icons'
  import _ from 'lodash'
  import { validateEmail } from '@/utils/validation'
  import { useUserStore, INetworkMember } from "@/stores/user";
  import { ITeamMember } from "@/stores/teams";
  const userStore = useUserStore()
  
  const props = defineProps({
    currentMembers: {
      type: Array as PropType<ITeamMember[]>,
      default: [],
    },

    addedMembers: {
      type: Array as PropType<ITeamMember[]>,
      default: [],
    }
  })
  const emit = defineEmits(['memberSelected'])

  // ===============================================================
  // New member
  // ===============================================================

  const newFirstName = ref("")
  const newLastName = ref("")
  const newEmail = ref("")


  // -----------------------------------------------
  // Validation
  // -----------------------------------------------

  const customMemberValidEmail = computed(() => {
    return validateEmail(newEmail.value)
  })

  const customMemberValidEntry = computed(() => {
    if (
      customMemberValidEmail.value
      && newFirstName.value.length > 0
      && newLastName.value.length > 0
    ) {
      return true
    }
    return false
  })

  const customMemberEmpty = computed(() => {
    return (
      newFirstName.value == ""
      && newLastName.value == ""
      && newEmail.value == ""
    )
  })

  // -----------------------------------------------
  // Checking group
  // -----------------------------------------------


  const customMemberInTeam = computed(() => {
    let membersTeam = props.currentMembers.concat(props.addedMembers)
    return (
      membersTeam.filter(
        mt => mt.email.toLowerCase() == newEmail.value
      ).length > 0
      && customMemberValidEmail.value
    )
  })

  const customMemberInOrganization = computed(() => {
    return userStore.organizationMembers.value.filter((mo: INetworkMember) => mo.email.toLowerCase() == newEmail.value).length > 0
  })


  // -----------------------------------------------
  // Find member in organization
  // -----------------------------------------------

  const filteredOrganizationMembers = computed(() =>{
    if (customMemberInTeam.value){
      return []
    }

    if (customMemberInOrganization.value) {
      return userStore.organizationMembers.value.filter((mo: INetworkMember) => mo.email.toLowerCase() == newEmail.value)
    }

    let membersTeam = props.currentMembers.concat(props.addedMembers)

    let membersPotential = JSON.parse(JSON.stringify(userStore.organizationMembers))
    membersPotential = membersPotential.filter((mn: INetworkMember) => !membersTeam.some(mt => (
      mt.email == mn.email
    )))

    let membersMailMatch = JSON.parse(JSON.stringify(membersPotential)).filter((member: INetworkMember) => member.email.toLowerCase() == newEmail.value.toLowerCase())

    let membersBeginMatch = JSON.parse(JSON.stringify(membersPotential))
    membersBeginMatch = membersBeginMatch.filter((member: INetworkMember) => member.first_name.toLowerCase().slice(0, newFirstName.value.length) == newFirstName.value.toLowerCase())
    membersBeginMatch = membersBeginMatch.filter((member: INetworkMember) => member.last_name.toLowerCase().slice(0, newLastName.value.length) == newLastName.value.toLowerCase())
    membersBeginMatch = membersBeginMatch.filter((member: INetworkMember) => member.email.toLowerCase().slice(0, newEmail.value.length) == newEmail.value.toLowerCase())

    let membersInMatch = JSON.parse(JSON.stringify(membersPotential))
    membersInMatch = membersInMatch.filter((member: INetworkMember) => member.first_name.toLowerCase().includes(newFirstName.value.toLowerCase()))
    membersInMatch = membersInMatch.filter((member: INetworkMember) => member.last_name.toLowerCase().includes(newLastName.value.toLowerCase()))
    membersInMatch = membersInMatch.filter((member: INetworkMember) => member.email.toLowerCase().includes(newEmail.value.toLowerCase()))

    let membersFiltered = membersMailMatch

 

    membersFiltered = membersFiltered.concat(
      membersInMatch.filter((m: INetworkMember) => !membersFiltered.some((mf: INetworkMember) => _.isEqual(m, mf)))
    )

    return membersFiltered
  })


  // -----------------------------------------------
  // Adding member
  // -----------------------------------------------

  function clearMemberCustom() {
    newFirstName.value = ""
    newLastName.value = ""
    newEmail.value = ""
  }

  function addMemberFromList(member: ITeamMember) {
    emit('memberSelected', member)
    clearMemberCustom()
  }

  function addMemberCustom() {
    if (customMemberValidEntry.value){
      let member = {
        first_name: newFirstName.value,
        last_name: newLastName.value,
        email: newEmail.value,
      }
      emit('memberSelected', member)
      clearMemberCustom()
    }
  }
  </script>
  