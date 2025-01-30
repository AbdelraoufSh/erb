<template>
  <div>
    <v-row >
      <v-col class="pl-9 first--text pt-4" cols="3">
        <p class="text-h6 font-weight-light">Dashboard</p>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center first--text">
      <v-col cols="10" class="px-0 pb-16 pt-2">
        <v-row>
          <v-col cols="6" class="d-flex align-center pb-4">
            <v-btn class="d-flex transparent text-capitalize first--text" outlined @click="$store.state.projects=$store.state.projectsbytitle">
              <v-icon>mdi-folder</v-icon>
              <p class="ma-0 ml-3" >{{$store.state.dashboard[1]}}</p>
            </v-btn>
            <v-btn class="d-flex ml-10 transparent text-capitalize first--text" outlined @click="$store.state.projects=$store.state.projectsbyperson">
              <v-icon>mdi-account</v-icon>
              <p class="ma-0 ml-3" >{{$store.state.dashboard[2]}}</p>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-row class="white ma-0 mb-1" v-for="(project,i) in $store.state.projects" :key="i">
              
              <v-col cols="6" class="pa-0">
                  <v-row>
                    <v-col cols="auto" class="pr-3"><v-sheet height="100%" width="4px" :class="project.statue===0?'orange':project.statue===1?'cyan accent-2':'red'"> </v-sheet></v-col>
                    <v-col cols="11" class="d-flex flex-column px-0 py-4">
                      <p class="mt-4 mb-0 text-body-2">Project Title</p>
                      <p class="black--text">{{project.ProjectTitle}}</p>
                    </v-col >
             
                  </v-row>
              </v-col>
              <v-col class="d-flex flex-column pa-0 justify-center" cols="2">
                <p class="mt-4 mb-0 text-body-2">Person</p>
                <p class="black--text">{{project.person}}</p>
              </v-col>
              <v-col cols="2" class="d-flex flex-column pa-0 justify-center">
                <p class="mt-4 mb-0 text-body-2">Due by</p>
                <p class="black--text">{{project.Date}}</p>
              </v-col>
              <v-col cols="2" class="d-flex align-center flex-row-reverse pr-8 " >
                <v-btn v-if="project.statue===0" color="orange" class="rounded-xxl text-capitalize">
                  Ongiong
                </v-btn>
                <v-btn v-else-if="project.statue===1" color="cyan accent-2" class="rounded-xxl text-capitalize">
                  Complete
                </v-btn>
                <v-btn v-else color="red" class="rounded-xxl text-capitalize">
                  Overtime
                </v-btn>
              </v-col>
            </v-row>  
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  components: {
    },
    data (){
      return{
      }
    }
}
</script>
