<template>    
        <div id="navBar">
        <b-container-fluid>
            <b-navbar toggleable="lg" type="dark" variant="dark" class="col-md-12">
            <b-navbar-brand href="#">Amazon</b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" is-nav>
                <b-navbar-nav class="col-md-8">
                    <b-nav-item class="d-flex flex-column">
                        <div class="hello-nav">
                            <h6 class="text-light">Hello</h6>
                        </div>
                        <div class="hello-nav d-flex align-items-center">
                            <span><i class="fa-solid fa-location-dot mr-1"></i></span>
                            <h6 class="mb-0">Select your location</h6>
                        </div>
                    </b-nav-item>
                    <b-nav-item class=" p-0 m-0 col-md-10">
                        <div class="search-box-container d-flex col-md-12">
                            <select class=" p-md-3 rounded-left text-center border-0 bg-secondary text-light col-md-2">
        
                                    <option>All</option>
                                    <option>Alexa</option>
                                    <option>Amazon web services</option>
                                    <option>Hostlinger</option>
                            
                            </select>
                            <input type="text" class="rounded-0 border-0 px-1 col-md-11" placeholder="Search...">
                            <button class="rounded-right border-0 bg-warning  d-flex justify-center align-items-center col-md-1"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                    </b-nav-item>
                    <b-nav-item>
                        <select>
                            <option>EN</option>
                        </select>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        </b-container-fluid>
        
    </div>

    
   
</template>

<script>

export default{
    name: 'navBar',
    data(){
        return{

        }
    },

}
</script>

<style scoped>
    .hello-nav{
        color:#fff;
        font-size:0.9em;
    }

    .hello-nav > h6{
        font-size:0.9em ;
    }
</style>