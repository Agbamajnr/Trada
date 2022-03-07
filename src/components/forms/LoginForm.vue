
<template>
  <div class="main flex flex-row items-center">
      <div class="form-container bg-black grid place-items-center sm:p-5">
          <div class="flex flex-col justify-center">
                <div class="top flex flex-col items-center justify-between h-36 mb-6">
                <div class="logo w-4/5 flex flex-row justify-center items-center">
                    <Logo/>
                </div>
                <p class="text-lg font-bold font-normal leading-7">Login to your account</p>
                </div>
                <div class="form flex flex-col items-center justify-center ">
                    <form @submit.prevent="submit">
                        <input type="email" name="email" placeholder="Email Address" class="w-full" v-model="data.email">
                        <input type="password" name="pwd" placeholder="Your passcode" class="w-full" v-model="data.password">
                        <p>{{message}}</p>
                        <button class="gradient-btn h-12 w-4/5 mt-4 rounded-xl submit-btn cursor-pointer flex items-center justify-center" type="submit" ref="submitBtn">
                            <p v-if="processing === false">Login</p>
                            <img src="../../assets/img/rolling.gif" class="w-6 h-6" v-else alt="">
                        </button>
                    </form>
                </div>

                <div class="others-details flex flex-col items-center justify-between mt-4 h-24">
                    <p class="text-sm leading-6 w-4/5 font-semibold">Don't have an account? <a href="/register">Sign up</a></p>
                </div>
          </div>
      </div>
      <div class="form-info flex flex-col items-center justify-center hidden lg:flex" style="background: #1C1C1C;">
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
import { ref } from 'vue';
import {reactive } from "vue"
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import axios from "axios"

export default {
    name: 'Login',
    components : { Logo },
    setup() {

    const data = reactive({
      email: '',
      password: ''
    });


    const submitBtn = ref()
    const processing = ref(false)
    const message = ref('')

    const router = useRouter();
    let finalData = JSON.stringify(data);

    const submit = async () => {
        message.value = '';
        processing.value = true;
        submitBtn.value.style.animationDuration = '10s';
        const response = await axios.post('https://trada-server.onrender.com/api/auth/login', data, {withCredentials: true})
        console.log(response);
        console.log(response.data);
        if (response.data.message == 'success') {
            setTimeout(() => {      
                router.push('/dashboard');
            }, 3000);
        } else {
            message.value = response.data.message;
            processing.value = false;
            submitBtn.value.style.animationDuration = '0s';
        }
    }



    return {
      data,
      submit,
      submitBtn,
      processing,
      message
    }
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
        animation-name: userOnboarding;
        animation-iteration-count: infinite;
    }

    @keyframes userOnboarding {
        5% {
            transition:all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
            background-color: #fff !important;
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