<template>
    <b-container id="allComponent">
        <div class="row no-gutters">
            <product  v-for="product in products" :key="product.id" :product="product" class="col-3 d-flex flex-column p-2"></product>
        </div>
    </b-container>
</template>

<script>
    import api from '../api';
    import product from './productcomponent.vue'
    export default{
        name : 'allComponent',
        data(){
            return{

            }
        },
        computed:{
            products(){
                return this.$store.state.products
            }
        },
        components:{
            product
        },
        async mounted(){
    // this.$store.dispatch('getData')
    try{
                const response = await api.get("https://fakestoreapi.com/products")
            console.log('response',response);
                if(response.status < 200 && response.status > 300){
                    throw new Error("Request failed with status" + response.status)
                }
                
                this.$store.commit('setData', response.data)
           }
           catch(error){
                console.error('error',error)
                console.log(error.message, typeof(error.message))
               this.$router.push({ name: 'errorPage', params: { error:error.message} });
                
           }
  },
    }
</script>

<style scoped>

</style>