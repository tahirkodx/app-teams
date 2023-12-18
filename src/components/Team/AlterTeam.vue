<template>
    <ion-item>
      <ion-input labelPlacement="floating" label="Team name" v-model="team.name"></ion-input>
    </ion-item>

    <br>
    <ion-header>Team members</ion-header>
    <ion-list>
      <ion-item v-for="[index, member] in team.members.entries()">
        <ion-label>
          {{ member.first_name }} {{ member.last_name }}
        </ion-label>
        <div>
          <ion-select v-model="member.role" :aria-label="'select' + member.first_name + member.last_name ">
            <ion-select-option :value=1>Member</ion-select-option>
            <ion-select-option :value=2>Leader</ion-select-option>
            <ion-select-option :value=3>Coach</ion-select-option>
            <ion-select-option :value=0>Visitor</ion-select-option>
          </ion-select>
          <ion-icon :icon="trashOutline" size="large" @click="team.members.splice(index, 1)" v-show="member.email !== userStore.user.email"/>
        </div>
        <ion-item-options>
          <ion-item-option color="danger">Delete</ion-item-option>
        </ion-item-options>
      </ion-item>
    </ion-list>

    <h1>
      New member
    </h1>

    <ion-item>
      <ion-input label="First name" labelPlacement="floating" v-model="newFirstName" />
      <ion-input label="Last name" labelPlacement="floating" v-model="newLastName" />
      <ion-input label="Email" labelPlacement="floating" v-model="newEmail" />
      <ion-button @click="addMemberCustom" :disabled=!customMemberValidEntry>Add</ion-button>
    </ion-item>  

    <ion-list>
      <ion-item v-show="!customMemberEmpty">
        <ion-label v-if="customMemberInTeam" :disabled="true">
        Already part of team
      </ion-label>
      <ion-label v-else-if="!customMemberInOrganization" :disabled=!customMemberValidEntry @click="addMemberCustom">
        Add {{ newFirstName }} {{ newLastName }} - {{ newEmail }} {{ customMemberValidEntry }}
      </ion-label>
        <ion-icon :icon="closeOutline" @click="clearMemberCustom()"></ion-icon>
      </ion-item>

      <ion-item v-for="organizatonMember in filteredOrganizationMembers" @click="addMemberFromList(organizatonMember)">
        Add {{ organizatonMember.first_name }} {{ organizatonMember.last_name }} - {{ organizatonMember.email }}
      </ion-item>
    </ion-list>
    <p><i>New members will receive an invite to join on your behalf</i></p>
    
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-button expand="block" @click="cancel" :disabled="!customMemberEmpty">Cancel</ion-button>       
        </ion-col>
        <ion-col>
          <ion-button expand="block" @click="confirm" :disabled="!customMemberEmpty">Confirm</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </template>

  <script setup lang="ts">
  import { ref, computed } from "vue";
  import { 
    IonHeader,
    IonLabel,
    IonItem,
    IonIcon,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonModal,
    IonList,
    IonItemOption,
    IonItemOptions,
    IonCol,
    IonRow,
    IonGrid,
  } from '@ionic/vue';
  import { createOutline, trashOutline, closeOutline } from 'ionicons/icons'
  import _ from 'lodash'
  import { validateEmail } from "@/utils/validation";
  import { useUserStore } from "@/stores/user";
  import { useTeamStore } from "@/stores/teams";
  import { ITeam, ITeamMember } from "@/stores/teams";

  const props = defineProps<{
    team: ITeam
  }>()

  const userStore = useUserStore()
  const teamStore = useTeamStore()

  const team = ref(props.team)
  console.log(team.value)
  const emit = defineEmits(['cancel', 'confirm'])

  const isOpen = ref(false)
  function setOpen(isOpen_: boolean) {
    isOpen.value = isOpen_;
  }

  // ===============================================================
  // New member
  // ===============================================================
  const newFirstName = ref("")
  const newLastName = ref("")
  const newEmail = ref("")

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

  const customMemberInTeam = computed(() => {
    return (
      team.value.members.filter(
        mt => mt.email.toLowerCase() == newEmail.value
      ).length > 0
      && customMemberValidEmail.value
    )
  })

  const customMemberInOrganization = computed(() => {
    return userStore.organizationMembers.list.filter(mo => mo.email.toLowerCase() == newEmail.value).length > 0
  })

  const filteredOrganizationMembers = computed(() =>{
    if (customMemberInTeam.value){
      return []
    }

    if (customMemberInOrganization.value) {
      return userStore.organizationMembers.list.filter(mo => mo.email.toLowerCase() == newEmail.value)
    }

    let membersTeam = JSON.parse(JSON.stringify(team.value.members))
    let membersNew = JSON.parse(JSON.stringify(userStore.organizationMembers.list))
    membersNew = membersNew.filter((mn: ITeamMember) => !membersTeam.some((mt: ITeamMember) => (
      mt.first_name == mn.first_name
      && mt.last_name == mn.last_name
      && mt.email == mn.email 
    )))

    let membersExact = JSON.parse(JSON.stringify(membersNew))
    let membersPartially = JSON.parse(JSON.stringify(membersNew))
    
    membersExact = membersExact.filter((member: ITeamMember) => member.first_name.toLowerCase().slice(0, newFirstName.value.length) == newFirstName.value.toLowerCase())
    membersExact = membersExact.filter((member: ITeamMember) => member.last_name.toLowerCase().slice(0, newLastName.value.length) == newLastName.value.toLowerCase())
    membersExact = membersExact.filter((member: ITeamMember) => member.email.toLowerCase().slice(0, newEmail.value.length) == newEmail.value.toLowerCase())

    membersPartially = membersPartially.filter((member: ITeamMember) => member.first_name.toLowerCase().includes(newFirstName.value.toLowerCase()))
    membersPartially = membersPartially.filter((member: ITeamMember) => member.last_name.toLowerCase().includes(newLastName.value.toLowerCase()))
    membersPartially = membersPartially.filter((member: ITeamMember) => member.email.toLowerCase().includes(newEmail.value.toLowerCase()))

    membersPartially = membersPartially.filter((mp: ITeamMember) => !membersExact.some((me: ITeamMember) => _.isEqual(mp, me)))

    return membersExact.concat(membersPartially)
  })

  function addMemberFromList(member: ITeamMember) {
    member.role = 1
    team.value.members.push(member)

    newFirstName.value = ""
    newLastName.value = ""
    newEmail.value = ""
  }

  function addMemberCustom() {
    if (customMemberValidEntry.value){
      let member = {
        first_name: newFirstName.value,
        last_name: newLastName.value,
        email: newEmail.value,
        role: 1
      }

      team.value.members.push(member)

      newFirstName.value = ""
      newLastName.value = ""
      newEmail.value = ""
    }
  }

  function clearMemberCustom() {
    newFirstName.value = ""
    newLastName.value = ""
    newEmail.value = ""
  }

  const customMemberEmpty = computed(() => {
    return (
      newFirstName.value == ""
      && newLastName.value == ""
      && newEmail.value == ""
    )
  })

  // ===============================================================
  // Screen settings
  // ===============================================================

  function cancel() {
    emit('cancel')
  }

  function confirm() {
      emit('confirm', JSON.parse(JSON.stringify(team.value)))    
  }
  </script>
  