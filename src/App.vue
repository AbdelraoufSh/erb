<template>
    <v-app >
      <!-- App Bar -->
      <bar />
      <nave />
      <!-- Navigation Drawer -->

  
      <!-- Main Content -->
      <v-main class="grey lighten-4">
          <router-view></router-view>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import bar from '@/components/app-bar.vue'
  import nave from '@/components/app-nav.vue'
  export default {
    components:{bar,nave},
    data() {
      return {// Controls the visibility of the drawer
        items: [
          { title: "Home", icon: "mdi-home" },
          { title: "About", icon: "mdi-information" },
          { title: "Contact", icon: "mdi-phone" },
        ],
      };
    },
    created(){
      this.$store.commit('get');
      this.$store.commit('fetchImages');
    }
  };
  </script>
  <style>
  </style>