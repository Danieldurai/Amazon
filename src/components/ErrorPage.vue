<template>
    <div id="error-page">
        <div class="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1>{{ error}}</h1>
            <h1>Sorry for the inconvenience. Please try again later.</h1>
        </div>
    </div>
</template>

<script>

export default{
    name: "errorPage",
    data(){
        return{
            error : this.$route.params
        }
    }
}

</script>