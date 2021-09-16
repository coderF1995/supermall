import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state:{
    cartList:[]
  },
  getters:{
    cartLength(state){
      return state.cartList.length
    }
  },
  mutations:{
    addCounter(state,payload){
      payload.count++
    },
    addToCart(state,payload){
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions:{
    addCart(context,payload){
      return new Promise((resolve,reject)=>{
        //新添加的商品
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

        if(oldProduct){
          // oldProduct.count += 1
          context.commit('addCounter',oldProduct)
          resolve('当前商品数量+1')
        } else {
          payload.count =1
          // context.state.cartList.push(payload)
          context.commit('addToCart',payload)
          resolve('添加新的商品')
        }
      })
    }
  }

})

export default store
