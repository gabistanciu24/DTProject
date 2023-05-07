<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods:{
    redirecttoLogin(){
      this.$router.push('login');
    }
  }
}
</script>

<style>

</style>
