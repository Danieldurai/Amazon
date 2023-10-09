<template>
    <div id="home">
        <Carousel></Carousel>
        <AllComponent></AllComponent>
    </div>
</template>

<script>
import Carousel from '../components/CarouselComponent.vue'
import AllComponent from '@/components/AllComponent.vue';
export default{
    name: 'homeComponent',
    data(){
        return{

        }
    },
    components : {
    Carousel,
    AllComponent
}
}
</script>

<style>

</style>