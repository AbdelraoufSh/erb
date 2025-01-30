<template>
    <v-app-bar app color="grey lighten-4 second--text" flat dark>
        <v-row class="d-flex justify-space-between">
          <v-col cols="2" class="d-flex justify-space-between px-1">
            <v-app-bar-nav-icon class="first--text" @click="$store.state.drawer = !$store.state.drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="d-flex align-center justify-center"><p class="font-weight-light ma-0">{{$store.state.logo[0]}}</p><p class="ma-0 first--text">{{ $store.state.logo[1] }} </p> </v-toolbar-title>      
          </v-col>
          <v-col class="d-flex flex-row-reverse align-center pr-6" cols="2">
            
            <v-icon class="second--text">mdi-exit-to-app</v-icon>
            <p class="ma-0 mr-3">SIGN OUT</p>
          </v-col>
        </v-row>
    </v-app-bar>
</template>
<script>
export default{
data(){
    return {
     
    }
}
}
</script>