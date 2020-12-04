import {ADD_COUNT ,ADD_TO_CART}  from './mutation-types'


export default {
   // mutation唯一的目的是修改state中的状态
      // mutation中的每个方法是尽可能完成比较单一
      [ADD_COUNT](state,payload){
        payload.count+=1
      },
      [ADD_TO_CART](state,payload){
        payload.checked=true
        state.cartList.push(payload)
      }
    
}