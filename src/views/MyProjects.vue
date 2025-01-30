<template>
  <v-row>
    <v-col>
      <v-row >
        <v-col class="pl-9 first--text pt-4" cols="3">
          <p class="text-h6 font-weight-light">Projects</p>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center pb-10">
        <v-col cols="11">
          <v-sheet min-height="70vh" class="grey lighten-4 d-flex flex-column justify-center">
            <v-expansion-panels>
              <v-expansion-panel v-for="(project,i) in $store.state.myprojects" :key="i"
              >
                <v-expansion-panel-header class="py-5">
                  {{project.title }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col>
                      {{ project.detail }}

                    </v-col>
                  </v-row>
                  <v-row class="d-flex justify-center" >
                      <v-col cols="11" class="d-flex flex-row-reverse" >
                        <p>modified by : {{ project.date }}</p> 
                      </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-sheet>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
