<template>
    <div id="cartItems">
        <CartItem v-for="cartItem in cartItems" :key="cartItem.id" :item="cartItem"></CartItem>
        <b-container>
            <b-row class="no-gutters flex-row d-flex justify-content-end">
            <b-col>
                <h1 class="text-right">Total Amount: ${{ totalAmount }}</h1>
            </b-col>
        </b-row>
        </b-container>
    </div>
</template>

<script>
    import CartItem from './CartItem.vue'
    export default{
        name: 'cartComponent',
        data(){
            return{

            }
        },
        components: {
            CartItem
        },
        computed:{
            cartItems(){
               return this.$store.state.cartItems
            },
            totalAmount(){
            return this.$store.state.totalAmount
        }
        }
    }
</script>

<style scoped>

</style>