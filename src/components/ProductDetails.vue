<template>
    <div id="product-details" class="product-container">
        <div class="image-container">
            <img class="image" :src="details.image">
            <h2>{{ details.title }}</h2>
        </div>
        <div class="product-description">
            <h3>Product Name : {{ details.title}}</h3>
            <h3>Price :${{ details.price }}</h3>
            <div class="description-text-container">
                <h3>Description:</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa molestias illo inventore necessitatibus. Eum corrupti assumenda nam, tenetur pariatur saepe delectus velit. Optio, eius quia vitae, eos et dolorum sequi autem reiciendis error enim maxime commodi officia consectetur. Praesentium optio repudiandae dolor voluptatum mollitia nihil architecto facilis aliquam impedit cumque.</p>
            </div>
            <div>
                <button @click="addToCart(details)" v-show="!inCart" style="background-color: lightgreen;"  class="option-button">Add to cart</button>
                <button @click="removeFromCart(details.id)" v-show="inCart" class="option-button">Remove from cart</button>
            </div>
            <div v-show="inCart">
                <button class="quantity-modifier" @click="reduceQuantity(details)">-</button>
                <span v-for="cartItem in cart" :key="cartItem.id">
                    <span v-if="details.id == cartItem.id">
                        {{cartItem.quantity}}
                    </span>
                </span>   
                <button class="quantity-modifier"  @click="increaseQuantity(details.id)">+</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'productDetails',
        data(){
            return{
                details : this.$route.params
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

            increaseQuantity(payload){

                this.$store.dispatch("increaseQuantity", payload)
                this.$store.dispatch("totalAmount")
            },
        
            reduceQuantity(payload){
                    console.log(payload)
                    if(payload.quantity == 1){
                        alert("Can't reduce beyond this")
                        return
                }
                this.$store.dispatch("reduceQuantity", payload)
                this.$store.dispatch("totalAmount")
             }
        },
        computed:{
            cart(){
                return this.$store.state.cartItems
            },
            inCart(){
                return this.$store.state.cartItems.some(cartItem => cartItem.id == this.details.id)
            }
        }
    }
</script>

<style scoped>
   
    
</style>