<template>
    <b-container>
        <div class="row no-gutters">
            <product  v-for="product in products" :key="product.id" :product="product" class="col-3 d-flex flex-column p-2"></product>
        </div>
    </b-container>
</template>

<script>
    import product from './productcomponent.vue'
    export default{
        name : 'electronicsComponent',
        data(){
            return{

            }
        },
        computed:{
            products(){
                return this.$store.getters.electronics
            }
        },
        components:{
            product
        }
    }
</script>

<style scoped>

</style>