<template>

</template>

<script lang="ts" setup>
  import router from '@/router/index'
  import { useUserStore } from '@/stores/user'

  const userStore = useUserStore()

  if (!userStore.logged_in){
    router.push({name: 'authentication'})
  } else {
    router.push({name: 'team'})
  }

</script>