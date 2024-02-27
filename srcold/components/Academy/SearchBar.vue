 <template>
   <ion-searchbar
        v-model="searchValue"
        placeholder="Search here"
        class="custom-searchbar"
        @keyup="searchAcademys"
      >
      </ion-searchbar>
  
</template>

<script setup lang="ts">
  import { IonSearchbar,IonIcon } from '@ionic/vue';
  import { defineComponent,ref } from 'vue';
  import { useAcademyStore } from '@/store';
  const academyStore = useAcademyStore()
  const searchValue : any =  ref(null)
 const searchAcademys =() =>{
  console.log('Search Value:', searchValue.value);
  academyStore.searchAcademys(searchValue.value)

 }
</script>

<style scoped>
 
.custom-searchbar {
  --background: #ffffff;
  --border-radius: 30px;
  --box-shadow: 0 4px 6px rgba(30, 26, 26, 0.1);
  --placeholder-color: #49454f;
  --placeholder-opacity: 1;
  --clear-icon-color: #49454f;
  position: relative;

  color: var(--M3-sys-light-on-surface-variant, #49454f);
  /* Body large */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  /* 150% */
  letter-spacing: 0.5px;
}

</style>