<template>   
        <ul class="nav-list d-flex justify-content-between align-items-stretch bg-dark mb-0">
            <li class="d-flex align-items-center">
                <h2 class="mr-3 text-light">Amazon</h2>
                <div class="text-light">
                    <h6>Home</h6>
                    <h6><i class="fa-solid fa-location-dot"></i> Select your location</h6>
                </div>
            </li>
            <li class="d-flex p-2 col-6">
                <div class="row w-100">
                    <div class="col-12 w-100 d-flex">
                        <select class="rounded-left border-0 bg-secondary">
                        <option>All</option>
                    </select>
                    <input type="text" class="border-0 w-100 px-2" placeholder="Search Amazon.in"/>
                    <button class="rounded-right border-0 bg-warning px-3"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                </div>
                
            </li>
           <li class="d-flex">
            <div class=" d-flex">
                <button class="px-2 border-0 bg-dark text-light">EN</button>
            </div>
            <div>
                <button class="border-0 bg-dark text-light px-2">
                    <h6>Hello, sign in</h6>
                    <h5>Account & Lists</h5>
                </button>
            </div>
            <div>
                <button class="border-0 bg-dark text-light px-2">
                    <h6>Returns</h6>
                    <h5>& Orders</h5>
                </button>        
            </div>
            <div class="d-flex align-items-center">
                <router-link exact to="/cart" ><button class="border-0 bg-dark text-light px-2 d-flex"><i class="fa-solid fa-cart-shopping"></i><span class="d-block translate-middle badge rounded-pill bg-danger">{{ cart.length }}</span></button></router-link>
            </div>
           </li>
        </ul>
    
</template>

<script>
export default{
    name:'navBar',
    computed:{
        cart(){
            return this.$store.state.cartItems
        }
    }

}
</script>

<style scoped>
.nav-list{
    list-style-type: none;
}
</style>