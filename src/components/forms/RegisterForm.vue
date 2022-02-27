
<template>
  <div class="main flex flex-row items-center">
      <div class="form-container bg-black grid place-items-center p-5">
          <div class="flex flex-col justify-center">
                <div class="top flex flex-col items-center justify-between h-36 mb-6">
                <div class="logo w-3/5 flex flex-row justify-center items-center pt-5">
                    <Logo/>
                </div>
                <p class="text-lg font-bold font-normal leading-7">Sign up for an account</p>
                </div>
                
                <div class="form flex flex-col items-center justify-center">
                    <form @submit.prevent="submit">
                        <div class="name flex flex-row w-full">
                            <input type="text" placeholder="First name" class="w-full" v-model="data.fname" required>
                            <input type="text" placeholder="Last name" class="w-full" v-model="data.lname" required>
                        </div>
                        <input type="text" name="phone-number" placeholder="+234" class="w-full" style="width: 100%;" v-model="data.phone" required>
                        <input type="email" name="email" placeholder="Email Address" class="w-full" style="width: 100%" v-model="data.email" required>
                        <input type="password" name="pwd" placeholder="Create passcode" class="w-full" style="width: 100%;" v-model="data.password" required minlength="8">
                        <button class="gradient-btn h-12 w-1/2 mt-4 rounded-xl submit-btn" type="submit" ref="submitBtn">
                            <p v-if="processInfo.length < 1">Register</p>
                            <p v-else>{{processInfo}}</p>
                        </button>
                    </form>
                    
                    
                    <span v-if="message == 'Regsitration Successful....Redirecting to Login'" class="text-green-500">{{message}}</span>
                    <span v-else class="text-red-600">{{message}}</span>
                </div>

                <div class="others-details flex flex-col items-center justify-between mt-4 h-24">
                    <p class="text-sm leading-6 w-4/5 font-semibold">By clicking the  “Next” button , you agree to TRADA <a href="#">terms of use</a> and <a href="#">privacy policy</a></p>
                    <p class="text-sm leading-6 w-4/5 font-semibold">Got an account? <a href="login">Sign in</a></p>
                </div>
          </div>
      </div>
      <div class="form-info  flex-col items-center justify-center hidden lg:flex" style="background: #1C1C1C;">
            <div class="flex flex-row justify-between items-center">
                  <img src="../../assets/img/form-details-yelow.svg" alt="">
                  <div class="flex flex-col">
                      <p class="text-lg leading-6 font-semibold">Purchase from anywhere with TRADA</p>
                      <p class="text-sm leading-6 font-normal mt-2">Do your local markets shopping from anywhere and at your convenience </p>
                  </div>
            </div>
            <div class="flex flex-row justify-between items-center">
                  <img src="../../assets/img/form-details-purple.svg" alt="">
                  <div class="flex flex-col">
                      <p class="text-lg leading-6 font-semibold">Create your vendor-S accounts</p>
                      <p class="text-sm leading-6 font-normal mt-2">Do your local markets shopping from anywhere and at your convenience </p>
                  </div>
            </div>
            <div class="flex flex-row justify-between items-center">
                  <img src="../../assets/img/form-details-green.svg" alt="">
                  <div class="flex flex-col">
                      <p class="text-lg leading-6 font-semibold">Earn TRADA token as you shop & bid</p>
                      <p class="text-sm leading-6 font-normal mt-2">The more you buy, sell and bid you get a free trada token for your shopping </p>
                  </div>
            </div>
      </div>
  </div>
</template>

<script>
import Logo from "../Logo.vue";
import axios from 'axios'
import { ref } from 'vue';
import {reactive } from "vue"
import {useRouter} from "vue-router";

export default {
    name: 'RegisterForm',
    components : { Logo },
    setup() {
        const submitBtn = ref()
        const processInfo = ref('')

        const data = reactive({
            fname: '',
            lname: '',
            phone: '',
            email: '',
            password: ''
        });
        
      const router = useRouter();

      const url = 'https://trada-market.netlify.app/';

      const submit = async () => {
            submitBtn.value.style.animationDuration = '10s';
            processInfo.value = 'Validating Data'

        await fetch(url + 'api/auth/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });

        processInfo.value = 'Redirecting to Login';
        setTimeout(() => {
            router.push('/login');   
        }, 2000);

    }

      return {data,submit,submitBtn, processInfo}
    }
}
</script>

<style scoped>
    .main {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
    .form-container {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
    .form-info {
        width: 100%;
        height: 100%;
    }
    .form-info div {
        width: 70%;
        margin-top: 15px;
    }
    .form div {
        width: 389px;
    }
    input {
        background-color: black;
        border-radius: 10px;
        border: 1px solid #fff;
        height: 50px;
        width: 100%;
        display: grid;
        place-items: center;
        padding-left: 15px;
        margin-top: 25px;
    }
    .others-details a {
        color: #F8C616;
        text-decoration: underline;
    }
    .submit-btn {
        transition: all 5s  linear;
        animation-name: userEntering;
        animation-iteration-count: infinite;
    }

    @keyframes userEntering {
        5% {
            transition:all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
            width: 100%;
            float: right;
        }
        25% {
            transition:all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
            width: 70%; 
        }
        50% {
            transition:all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
            width: 85%;
        }
        75% {
            transition:all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
            width: 100%;
        }
        100% {
            transition:all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
            float: left;
        }

    }

</style>