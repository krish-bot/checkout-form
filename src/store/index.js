import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        data:[]
    },
    getters:{
        getData(state){
            return state.data
        }
    },
    mutations:{
        fetchData(state,{form}){ 

        }
    }

})