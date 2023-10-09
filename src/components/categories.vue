<template>
    <div class="product-container">
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
                <button @click="addToCart(details.id)" style="background-color: lightgreen;"  class="option-button">Add to cart</button>
                <button @click="removeFromCart(details.id)" v-show="details.selected" class="option-button">Remove from cart</button>
            </div>
            <div v-show="details.selected">
                <button class="quantity-modifier" @click="reduce(details)">-</button>
                <span v-for="cartItem in cart" :key="cartItem.id">
                    <span v-if="details.id == cartItem.id">
                        {{cartItem.quantity}}
                    </span>
                </span>   
                <button class="quantity-modifier"  @click="add(details)">+</button>
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
            getFullPath : function(imagePath){
                console.log(imagePath)
                return `/images/${imagePath}`
            },
            addToCart : function(payload){
                console.log(payload)
                this.$store.dispatch('addToCart', payload)
                this.$store.dispatch('calculateAmount')
                
            },
            removeFromCart : function(payload){
                this.$store.dispatch('removeFromCart', payload)
                this.$store.dispatch('calculateAmount')
            },
            add : function(cartItem){
                this.$store.dispatch('increaseQuantity', cartItem)
                this.$store.dispatch('calculateAmount')
            },
            reduce : function(cartItem){
                this.$store.dispatch('reduceQuantity', cartItem)
                this.$store.dispatch('calculateAmount')
            }
        },
        computed:{
            cart(){
                return this.$store.state.cartItems
            }
        }
    }
</script>

<style scoped>
    .product-container{
        padding: 1em;
        background: #fff;
        line-height: 1.5rem;
    }
    .image-container{
        max-width: 30rem;
        text-align: center;
        margin: 0 auto;
    }
    
    .image{
        max-width: 50%;
        background-color: #fff;
    }

    .product-description{
        padding: 1em;
        width: 50%;
        margin: 0 auto;
    }

    .quantity-modifier{
        cursor: pointer;
        margin: 0 1em;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 0;
        outline: 0;
        background-color: #FF5733;
        font-weight: 400;
    }

    .option-button{
        cursor: pointer;
        margin: 1em 0;
        padding: 0.5rem 0.5rem;
        background-color: #FF5733;
        border: 0;
        outline: 0;
        border-radius: 0.5rem;
    }
    
</style>