
import Vue from 'vue'
import Vuex from 'vuex'

// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        products: null,
        cartItems : [],
        totalAmount: null
    },
    mutations:{
        setData(state, payload){
            state.products = payload 
            console.log(state.products)
        },

        addToCart(state, payload){
            state.cartItems.push(payload)
            console.log(state.cartItems)
        },

        removeFromCart(state, payload){
            state.cartItems.splice(payload, 1)
        },

        increaseQuantity(state, payload){
            state.cartItems.forEach((cartItem) => {
                if(cartItem.id == payload)
                    cartItem.quantity += 1
                cartItem.quantityPrice = parseFloat((cartItem.quantity * cartItem.price).toFixed(2))
            })
        },

        reduceQuantity(state, payload){
            state.cartItems.forEach((cartItem)=>{
                if(cartItem.id == payload.id){
                    if(cartItem.quantity ==1){
                        alert("Can't reduce beyond this")
                        return
                    }
                    cartItem.quantity -= 1
                cartItem.quantityPrice = parseFloat((cartItem.quantity * cartItem.price).toFixed(2))
                }
            })
        },

        totalAmount(state, payload){
            state.totalAmount = 0
            state.totalAmount = payload            
        }

    },
    actions:{
     

        removeFromCart(context, payload){
            console.log(context.state.cartItems)
            const indexToDelete = context.state.cartItems.findIndex((cartItem) => {
                return cartItem.id === payload;
              });
            console.log(indexToDelete)
            context.commit('removeFromCart', indexToDelete)
        },

        increaseQuantity(context, payload){
            context.commit('increaseQuantity', payload)
        },

        reduceQuantity(context, payload){
            if(payload.quantity == 1){
                alert("Can't reduce beyond this")
                return
            }
            context.commit('reduceQuantity', payload)
        },

        totalAmount(context){
            let amount = 0
            context.state.cartItems.forEach((cartItem)=>{
                amount = parseFloat((amount + cartItem.quantityPrice).toFixed(2))
            })
            console.log(amount)
            context.commit('totalAmount', amount)
        }
    },

    getters: {
        electronics(state) {
            return state.products.filter(cartItem => cartItem.category == "electronics")
        },

        mensWear(state){
            return state.products.filter(cartItem => cartItem.category == "men's clothing")
        },

        womensWear(state){
            return state.products.filter(cartItem => cartItem.category == "women's clothing")
        },

        jewelery(state){
            return state.products.filter(cartItem => cartItem.category == "jewelery")
        }
        
    },
    // plugins: [
    //     createPersistedState({
    //       key: 'my-vuex-state', // The key under which your state will be stored in localStorage/sessionStorage.
    //     }),
    //   ],
})

export default store