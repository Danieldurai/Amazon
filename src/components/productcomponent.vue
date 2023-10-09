<template>
    
        <div id="product-component" class="d-flex flex-column justify-content-between">
            <div class="d-flex justify-content-center p-2">
                <b-img :src="product.image" class="img-fluid product-image" @click="productDetails(product)"></b-img>
            </div>
            <div class="description-container p-1 d-flex flex-column">
                <h6 class="ellipsis-text">{{ product.title }}</h6>
                <h6>Price: ${{ product.price }}</h6>
                <button @click="addToCart(product)" v-show="!inCart" class="border border-0 cart-button"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                <button @click="removeFromCart(product.id)" v-show="inCart" class="border border-0 remove-button"> Remove from cart</button>
            </div>
            
        </div>

</template>

<script>
export default{
    name: 'productComponent',
    props: {
        product : Object
    },
    computed:{
        inCart(){
            return this.$store.state.cartItems.some(cartItem => cartItem.id == this.product.id)
        }
    },
    methods:{
        addToCart(payload){
            payload = {...payload, quantity : 1, quantityPrice : payload.price}
            this.$store.commit('addToCart',payload)
            this.$store.dispatch('totalAmount')
        },
        removeFromCart(payload){
            this.$store.dispatch('removeFromCart', payload)
            this.$store.dispatch('totalAmount')
        },
        
        productDetails(payload){
            this.$router.push({name: 'productDetails', params: payload})
        }
        
    },

    
}
</script>

<style scoped>
 
  

</style>