<template>
    <b-container class="form-container">
        <form novalidate @submit.prevent="submitForm()" class="form-wrapper">
            <div class="field">
                <div class="input-box">
                    <label for="name">Name : </label>
                    <input id="name" type="text" v-model="user.name" placeholder="Enter your name" @blur="$v.user.name.$touch()">
                </div>
                <div class="error text-danger" v-show="$v.user.name.$error">
                    <p v-show="!$v.user.name.required">Name is a required field*</p>
                    <p v-show="!$v.user.name.minLength">Name should be minimum 3 characters long*</p>
                    <p v-show="!$v.user.name.maxLength">Name should be within 30 characters*</p>
                </div>
            </div>
            <div class="field">
                <div>
                    <label for="email">Email : </label>
                    <input id="email" type="" v-model="user.email" placeholder="Enter your email" @blur="$v.user.email.$touch()">
                </div>
                <div class="error text-danger" v-show="$v.user.email.$error">
                    <p v-show="!$v.user.email.required">Email is a required field*</p>
                    <p v-show="!$v.user.email.email">Invalid email*</p>
                </div>
            </div>
            <div class="field">
                <div>
                    <label for="location">Location :  </label>
                    <input id="location" v-model="user.location" placeholder="Enter your location" @blur="$v.user.location.$touch()">
                </div>
                <div class="error text-danger" v-show="$v.user.location.$error">
                    <p v-show="!$v.user.location.required">Location is a required field*</p>                    
                </div>
            </div>
            <div class=field>
                <div>
                    <label for="contact" >Contact Number : </label>
                    <input  id="contact" v-model="user.contact" placeholder="Enter your phone number" @blur="$v.user.contact.$touch()">
                </div>
                <div class="error text-danger" v-show="$v.user.contact.$error">
                    <p v-show="!$v.user.contact.required">Contact is a required field*</p>
                    <p v-show="!$v.user.contact.numeric">Contact number should be numeric*</p>                    
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <button class="bg-primary border border-0 px-3 py-1 text-white" type="submit" :disabled="$v.$invalid">Submit</button>
            </div>
        </form>
    </b-container>
</template>

<script>
import {required, email, minLength, maxLength, numeric} from 'vuelidate/lib/validators'
export default{
    name: "formValidation",
    data(){
        return{
            user : {
                name : "",
                email : "",
                location : "",
                contact : ""
            },
            feedback : ""
        }
    },

    validations: { 
        user : {
            name : { required, minLength : minLength(3), maxLength : maxLength(30)},
            email : {required, email},
            location : {required},
            contact : {required, numeric}
        }
    },

    methods:{
        submitForm(){
            this.$v.$touch()
            if(!this.$v.$invalid){
                console.log(this.user)
                this.$emit('customEvent',this.user)
                this.$bvModal.hide('modal-1')
            }
        }
    }
}

</script>

<style scoped>
    .form-container{
        display: flex;
        justify-content: center;
        align-items: center;     
        min-height: 50vh;   
    }

    .form-wrapper{
        background-position: cover;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .field{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin: 1rem ;
        flex-direction: column;
    }

    

    .field input{
        min-width: 15rem;
        margin-left: 0.3rem;
        border: 0;
        border-bottom: 1px solid blue;
    }

     input:focus{
        outline: none;
        border-bottom: 1px solid yellow;
    }

    .field label{
        margin: 0;
    }

    
</style>