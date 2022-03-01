<template>
  <div class="main flex flex-col justify-between" style="background: #000;">
    <div class="body">
      <Navbar />
      
      <div class="intro-text w-full p-5 flex flex-col justify-center items-center">
      <p class="text-6xl text-center">Local Decentralised Markets</p>
      <p class="text-6xl" @click="logAuthState">Easy Buy. Easy Sell</p>
      <p class="text-xl">Do what you do in your local markets. Translating your market experience</p>
      <button class="gradient-btn w-40 h-9 grid place-items-center rounded-xl text-sm font-bold md:mt-1" v-if="$store.state.authenticated !== true">Get Started</button>
      <button class="gradient-btn w-40 h-9 grid place-items-center rounded-xl text-sm font-bold md:mt-1" v-if="$store.state.authenticated === true"><a href="/dashboard"> Go to Dashboard</a></button>
    </div>

    <div class="intro-img grid place-items-center">
      <div class="container w-4/5 rounded-xl flex flex-row items-center justify-center p-2" style="background: #333333; height: 520px;">
        <img class="w-full m-3" src="../assets/img/home1.svg" style="height: 83%;" alt=""> 
        <img class="w-full m-3" src="../assets/img/home2.svg" style="height: 83%;" alt="">
      </div>
      <img class="hidden w-4/5 h-full" src="../assets/img/home1-sm.svg" alt="">
    </div>

    <div class="buyers-tab flex flex-row justify-center items-center w-full md:p-12" style="height: 110%;">
      <div class="details flex flex-col justify-center items-start h-full">
        <p class="md:pl-1" style="color: #F8C616;font-weight: 500;font-size: 14px;line-height: 17px;">BUYERS</p>
        <p class="text-5xl font-bold mt-3" style="line-height: 60.95px;">Purchase anything with comfort.</p>
        <p class="font-normal leading-7 mt-3" style="font-size: 22px; font-family: 'Rubik'; color: #C4C4C4;">Stay from the comfort of your home to buy whatever you want from the local markets. No stress. No cost in delivery</p>
        <button class="btn mt-7">Start now</button>
      </div>
      <div class="container w-4/5 rounded-xl md:ml-6" style="background: #333333; height: 487px;"></div>
    </div>

    <div class="vendors-tab flex flex-row-reverse justify-center items-center w-full md:p-12" style="height: 110%;">
      <div class="details flex flex-col justify-center items-start h-full md:ml-12">
        <p class="md:pl-1" style="color: #F8C616;font-weight: 500;font-size: 14px;line-height: 17px;">VENDORS</p>
        <p class="text-5xl font-bold mt-3" style="line-height: 60.95px;">Sell anything with no cost.</p>
        <p class="font-normal leading-7 mt-3" style="font-size: 22px; font-family: 'Rubik'; color: #C4C4C4;">Stay from the comfort of your home to buy whatever you want from the local markets. No stress. No cost in delivery</p>
        <button class="btn mt-7">Start now</button>
      </div>
      <div class="container w-full rounded-xl" style="background: #333333; height: 487px;"></div>
    </div>

    <div class="mid-info grid place-items-center">
      <img src="../assets/img/mid-intro.svg" alt="">
      <div class="media flex flex-col items-center w-full h-full relative hidden">
        <p class="text-xl font-bold">Create multiple with Zero Tax .</p>
        <p class="text-sm w-4/5 p-2 text-center"  style="color: #C4C4C4C;">Create as many shop thay you can sell can from the comfort of your home . Zero Tax. Zero Rent</p>
        <img src="../assets/img/mid-intro-sm.svg" class="w-4/5 absolute" alt="">
      </div>
    </div>

    <div class="tax-sm hidden flex flex-col items-center">
      <p class="text-xl font-bold w-4/5 text-center">Create multiple with Zero Tax .</p>
      <p class="font-normal leading-7 mt-3 w-4/5 text-center" style="font-size: 14px; font-family: 'Rubik'; color: #C4C4C4;">Create as many shop that you can sell can from the comfort of your home . Zero Tax. Zero Rent</p>
      <button class="btn mt-7">Start now</button>

    </div>

    <div class="loan-tab flex flex-row justify-center  w-full p-12" style="height: 110%;">
      <div class="details flex flex-col justify-start items-start h-full ml-12 w-3/5">
        <p class="text-5xl font-bold mt-1" style="line-height: 60.95px;">Buy on Credits Pay later.</p>
        <p class="text-5xl font-bold mt-1" style="line-height: 60.95px;">No loan rates</p>
        <p class="font-normal leading-7 mt-3" style="font-size: 22px; font-family: 'Rubik'; color: #C4C4C4;">No money. No problem. Get goods on credits and pay later. No loan commission attached. The only limit is you. Our credit system is here for you</p>
        <button class="btn mt-7">Start now</button>
      </div>
      <div class="container w-4/5 rounded-xl mr-10" style="background: #333333; height: 460px;"></div>
    </div>

    <div class="download-tab grid place-items-center">
      <div class="container w-4/5 rounded-xl flex flex-row items-center  md:p-16 md:relative" style="background: #1C1C1C; height: 432px;">
        <div class="details flex flex-col items-start " style="width: 50%;">
          <p class="text-5xl font-bold" style="line-height: 60.95px;">Digital markets at your fingertips</p>
          <p class="font-normal leading-7 mt-5" style="font-size: 22px; font-family: 'Rubik'; color: #C4C4C4;">Our mobile app is coming soon to App store and Google Playstore.</p>
          <div class="download-btn flex flex-row items-center p-0 mt-3">
            <button class="md:mr-3"><img src="../assets/img/apple-download.svg" alt=""></button>
            <button class="md:ml-3"><img src="../assets/img/google-download.svg" alt=""></button>
          </div>
        </div>
        <div class="container-bt rounded-xl absolute right-12 top-12" style="background: #333333; height: 422px; width: 40%;"></div>
      </div>
    </div>

    <div class="w-full flex flex-row items-end justify-end md:pt-24 relative cursor-pointer">
      <div class="grid place-items-center fixed right-3 bottom-4" style="background: #C4C4C4; height: 50px; width: 50px; border-radius: 50%;">
      <img src="../assets/img/support.svg" alt="">
    </div>
    </div>

    <Footer />
    </div>
    

    
      
    
  </div>
  
</template>

<script>
  import Footer from "../components/Footer.vue";
  import Navbar from "../components/Navbar.vue";
  import PacemanLoader from 'vue-spinner/src/PulseLoader.vue';
  import {useStore} from "vuex";
  import {useRouter} from "vue-router";
  import axios from "axios"
  export default {
    name: 'Home',
    components : { Navbar, Footer, PacemanLoader },
    setup() {
      const router = useRouter();
      const logoutUser  = async () => {
        const result = await axios.post('https://trada-market.herokuapp.com/api/auth/logout', {withCredentials: true});

        console.log(result.data);

      }

      return {logoutUser}
    }
  }
</script>

<style scoped>
  .main {
    overflow-x: hidden;
  }
  .main div {
    max-height: fit-content !important;
    height: 100%;
  }


  .intro-text p {
    line-height: 70px;
    margin: 7px;
    font-weight: bold;
  }
  .intro-text .text-xl {
    color: #C4C4C4 !important;
  }

  .buyers-tab div {
    width: 50%;
  }
  .download-tab .container-bt {
    position: absolute !important;
  }



  @media screen and (max-width: 1100px) {
    .intro-img .container {
      height: 350px !important;
      width: 80% !important;
    }
    .intro-img .container img {
      width: 95% !important;
      height: 80% !important;

    }
  }

  @media screen and (max-width: 1024px) {
    .download-tab .container .details .text-5xl {
      font-size: 45px !important;
      line-height: 50px !important;
    }
  }


  @media screen and (max-width: 871px) {
    .main div {
      margin-top: 30px;
    }

    .intro-text .text-6xl {
      font-size: 30px !important;
      font-weight: 800;
      margin-top: 0 !important;
      line-height: 42px !important;
      text-align: center !important;
    }
    .intro-text .text-xl {
      font-size: 14px !important;
      color: #C4C4C4 !important;
      text-align: center !important;
      line-height: 16.59px !important
    }
    .intro-text button {
      margin-top: 13px !important;
    }


    .intro-img .container {
      display: none !important;
    }
    .intro-img img {
      display: block !important;
    }

    .buyers-tab {
      text-align: center !important;
      flex-direction: column !important;
    }
    .buyers-tab div {
      width: 100% !important;
    }
    .buyers-tab .details {
      align-items: center !important;
      width: 90% !important;
    }
    .buyers-tab .details .text-5xl {
      font-size: 27px !important;
      line-height: 30.82px !important;
    }
    .buyers-tab .details .font-normal {
      font-size: 14px !important
    }
    .buyers-tab .container {
      width: 90% !important;
      height: 319px !important;
    }


    .vendors-tab {
      text-align: center !important;
      flex-direction: column !important;
    }
    .vendors-tab div {
      width: 100% !important;
    }
    .vendors-tab .details {
      align-items: center !important;
      width: 90% !important;
    }
    .vendors-tab .details .text-5xl {
      font-size: 27px !important;
      line-height: 30.82px !important;
    }
    .vendors-tab .details .font-normal {
      font-size: 14px !important
    }
    .vendors-tab .container {
      width: 90% !important;
      height: 319px !important;
    }

    .mid-info {
      margin-top: 30% !important;
      display: flex !important;
      flex-direction: column !important;
      width: 100% !important;
      background: #1C1C1C;
      height: 319px !important;
      border-radius: none !important;
    }
    .mid-info .media {
      display: flex;
    }
    .mid-info .media img {
      display: block;
      top: 52% !important;
    }
    .mid-info img {
      display: none;
    }
    
    .tax-sm {
      display: flex !important;
      margin-top: 22rem !important;
    }

    .loan-tab {
      display: none;
    }


    .download-tab {
      margin-top: 15% !important;
      text-align: center !important;
      height: 120% !important;
    }
    .download-tab .container-bt {
      position: static !important;
      width: 95% !important;
      height: 319px !important;
    }
    .download-tab .container {
      background: none !important;
      align-items: center !important;
      justify-content: center !important;
      flex-direction: column !important;
    }
    .download-tab .container .details {
      align-items: center !important;
    }
    .download-tab .container .details .text-5xl {
      font-size: 22px !important;
      text-align: center;
      line-height: 26.82px !important;
    }
    .download-tab .container .details .font-normal {
      font-size: 14px !important;
      line-height: 17px !important;
      text-align: center;
    }
    .download-tab .container .details .download-btn {
      height: 50px !important;
      align-items: center !important;
      justify-content: center !important;
      width: 100% !important;
    }
    .download-tab .container .details .download-btn button {
      padding: 10px !important;
    }
    .download-tab .container .details {
      text-align: center !important;
      width: 100% !important;
    }
  }

  @media screen and (max-width: 640px) {
    .tax-sm {
      margin-top: 15rem !important;
    }
    .download-tab .container .details .text-5xl {
      font-size: 22px !important;
      line-height: 20px !important;
    }
  }

  @media screen and (max-width: 500px) {
    .tax-sm {
      margin-top: 10rem !important;
    }
  }


</style>