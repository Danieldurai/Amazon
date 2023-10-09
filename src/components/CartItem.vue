<template>
    <b-container id="cartItem">
        <b-row class="no-gutters my-4">
            <b-col class="col-md-12 d-flex justify-content-between">
                <div class="item-left col-4 d-flex justify-content-start align-items-center">
                    <div class="image-container col-5">
                        <img :src="item.image" class="cartItem-image img-fluid">
                    </div>
                    <div class="item-details">
                        <div class="details-wrapper">
                            <h6 class="ellipsis-text"> {{ item.title }}</h6>
                        </div>
                            <h6><b>Price:</b> ${{ item.price }}</h6>
                        <div class="quantity-container">
                            <button @click="reduceQuantity(item)" class="quantity-button">-</button>
                            <span>{{ item.quantity }}</span>
                            <button @click="increaseQuantity(item.id)" class="quantity-button">+</button>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h1>${{ item.quantityPrice }}</h1>
                    <button @click="removeFromCart(item.id)" class="border-0 remove-button p-2"><b>X</b> Remove from cart</button>
                </div>
            </b-col>
        </b-row>
        
    </b-container>
</template>

<script>

export default{
    name: 'cartItem',
    props:{
        item : Object
    },
    methods:{
        increaseQuantity(payload){
            
            this.$store.dispatch("increaseQuantity", payload)
            this.$store.dispatch("totalAmount")
            

        },
        
        reduceQuantity(payload){
            
            this.$store.dispatch("reduceQuantity", payload)
            this.$store.dispatch("totalAmount")
        },

        removeFromCart(payload){
            this.$store.dispatch('removeFromCart', payload)
            this.$store.dispatch('totalAmount')
        }
    },

    

}

</script>

