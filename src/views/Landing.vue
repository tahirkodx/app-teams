<template>

</template>

<script lang="ts" setup>
  import router from '@/router/index'
  const token = localStorage.getItem('user:token');

  if (token){
      router.push({name: 'team'})
    } else {
      router.push({name: 'login'})
  }

</script>