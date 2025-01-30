import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images:[],logo:[],drawer:false,projectsbytitle:[],projectsbyperson:[],dashboard:[],team:[],myprojects:[],title:'',detail:'',date:'',projects:[]
  },
  getters: {
  },
  mutations: {
    get(state){
      axios.get('/api/hello').then(response =>{
        state.logo=response.data.logo;
        state.projectsbytitle=response.data.projectsbytitle;
        state.projectsbyperson=response.data.projectsbyperson;
        state.dashboard=response.data.dashboard;
        state.team=response.data.team;
      state.myprojects=response.data.myprojects;
      state.projects=state.projectsbytitle;
      })
    },
    async fetchImages(state) {
      try {
        const response = await axios.get('/api/images');
        state.images = response.data;
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    },
    post(state){
      axios.post('/api/hello',{title:state.title,detail:state.detail,date:state.date},{headers:{'Content-Type':'application/json'}}).then(response =>{
        console.log(response.data);
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
