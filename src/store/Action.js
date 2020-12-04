import {ADD_COUNT ,ADD_TO_CART}  from './mutation-types'

export default {
  addCar(context,payload){
     
    // payload是新添加的商品
    // 数组常用的方法有那些
    // join/unshift/pop/shift/sort/reverse/filter/reduce/push/map/find
    // let oldProduct =null;
    // for(let item of state.cartList) {
    //   if(item.iid === payload.iid){
    //     oldProduct = item
    //   }
    // }
    // 添加购物车的弹窗  Action可以返回一个Promise   和mapActions的映射关系1  
   return new Promise((resolve, reject)=>{
    let oldProduct =context.state.cartList.find(item=> item.iid === payload.iid)
    if(oldProduct){
      // oldProduct.count+=1
      context.commit(ADD_COUNT,oldProduct)
      resolve('当前的商品数量加1')
    } else {
      payload.count=1
      // state.cartList.push(payload)
      context.commit(ADD_TO_CART,payload)
     resolve('添加了新的商品')
    }
   })
  }
}