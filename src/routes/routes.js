import Home from '../views/Home.vue'
import Cart from '../components/CartComponent.vue'
import ProductDetails from '../components/ProductDetails.vue'
import Jewelery from '../components/JeweleryComponent.vue'
import Electronics from '../components/ElectronicsComponent.vue'
import MensWear from '../components/MensComponent.vue'
import WomensWear from '../components/WomensComponent.vue'
import CategoryPage from '../components/CategoryPage.vue'
import ErrorPage from '../components/ErrorPage.vue'
import FormComponent from '../components/FormComponent.vue'

export default [
    {path:'/', name :'home', component: Home},
    {path: '/cart', name : 'cart', component: Cart},
    {path: '/productDetails', name: 'productDetails', component: ProductDetails},
    {path: '/mens', name: 'mensComponent', component: MensWear},
    {path: '/womens', name: 'womensComponent', component: WomensWear},
    {path: '/electronics', name: 'electronicsComponent', component: Electronics},
    {path: '/jewelery', name: 'jeweleryComponent', component: Jewelery},
    {path: '/categories', component: CategoryPage,
        children: [
            {path: "jewelery", component: Jewelery},
            {path: "mens", component: MensWear},
            {path: "womens", component: WomensWear},
            {path: "electronics", component: Electronics}
        ]},
    {path: '/error', name: "errorPage", component: ErrorPage},
    {path: '/form', name:"formComponent", component : FormComponent}
]