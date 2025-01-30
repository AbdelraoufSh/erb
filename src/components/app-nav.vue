<template>
    <v-navigation-drawer class="deep-purple accent-2" width="23vw" v-model="$store.state.drawer" app hide-overlay>
        <v-row class="d-flex justify-center pt-12 pb-2">
          <v-col cols="8" class="d-flex flex-column align-center">
              <v-avatar width="120px" height="120px">
                <v-img :src="$store.state.images[0]" width="120px" height="120px">
                </v-img>
              </v-avatar>
            <p class="white--text mt-2 font-weight-medium">{{ $store.state.logo[0] }} </p>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col cols="10">
                    <div class="text-center">
                      <v-dialog
                        v-model="dialog"
                        width="700"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="cyan accent-4"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            
                          >
                            Add New Project
                          </v-btn>
                        </template>
                  
                        <v-card>
                          <v-card-title class="text-h5 ">
                            Add a New Project
                          </v-card-title>
                  
                          <v-card-text>
                            <v-row class="d-flex justify-center">
                                <v-col cols="11">
                                  <v-form ref="form" v-model="valid" >
                                      <v-row class="d-flex pt-10">
                                        <v-text-field v-model="$store.state.title" maxlength="20" :rules="[rules.required,rules.counter]" counter prepend-icon="mdi-folder" label="Title"></v-text-field>
                                    </v-row>
                                    <v-row class="d-flex align-start pt-3">
                                        <v-textarea v-model="$store.state.detail"  prepend-icon="mdi-pen" class="" label="Information"></v-textarea>
                                    </v-row>    
                                    <v-row class="d-flex ">
                                        <v-col cols="6" class="pa-0">
                                          <v-text-field   validate-on-blur v-model="$store.state.date" :rules="[rules.date]" prepend-icon="mdi-book" label="Due date"  ></v-text-field>
                                        </v-col>
                                    </v-row>
                                  </v-form>
                                </v-col>
                            </v-row>
                        </v-card-text>
                          <v-card-actions>
                            <v-row class="d-flex justify-center pb-4">
                                <v-col cols="11">
                                    <v-btn color="cyan accent-4" :disabled="!valid" class="white--text" @click="poste">
                                      ADD PROJECT
                                   </v-btn>
                                </v-col>
                            </v-row>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                      
                    </div>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
           <v-col cols="11">
              <v-card
                class="mx-auto deep-purple accent-2"
                max-width="300"
                tile
                flat
              >
                <v-list flat>
                  <v-list-item-group  v-model="selectedItem"           >
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      active-class="cyan--text"
                      class="white--text"
                      :to="item.root"
                      @click="selectedItem=i"
                    >
                      <v-list-item-icon>
                        <v-icon class="white--text" :class="{'cyan--text':selectedItem==i}" v-text="item.icon"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.text">
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
           </v-col>
        </v-row>
    </v-navigation-drawer>
</template>
<script>
export default{
    data(){
        return {
            dialog:false,selectedItem:0,valid:0,
      items: [
        { text: 'Dashboard', icon: 'mdi-view-dashboard',root:'/' },
        { text: 'My Projects', icon: 'mdi-folder',root:'/projects' },
        { text: 'Team', icon: 'mdi-account',root:'/team' },
      ],
      rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          date: value => {
            if(!value) return 'Date is required';
            const datePattern =/^\d{4}\/\d{1,2}\/\d{1,2}$/;
            if(!datePattern.test(value)) return 'Invalid Format';
            const date =new Date(value);
            if(isNaN(date.getDate())) return 'Invalid Date'
            return true
          }
        }
    }
  },
    methods:{
      poste(){
        this.$refs.form.validate();
        if(this.valid){
        this.$store.commit('post');
        this.$store.state.title='',this.$store.state.detail='',this.$store.state.date='';
        this.$refs.form.resetValidation();
        this.$store.commit('get');
        this.$store.commit('get');
        this.dialog=false;
      }
      }
    }
}
</script>