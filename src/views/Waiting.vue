<template>
  <div class="main flex flex-col justify-between" style="background: #000; color: #fff;">

      <Navbar />

    <!-- hero section starts -->
      <div class="hero w-full flex flex-row items-center mt-1" style="height: 380px;">
          <div class="hero-details h-full w-1/2 flex flex-col justify-center items-start lg:ml-16 md:pl-16">
            <p class="hero-text text-5xl font-bold leading-snug ">The TRADA  MARKET <span class="text-black md:break-words" style="-webkit-text-stroke: 2px rgb(203 213 225);">TOKEN</span></p>
            <p class="hero-p mt-5">With TRADA token you'll get the most out of TRADA. You can use it for payments and it comes with a wide range of benefits.</p>
            <div ref="mail_input" class="mail-input h-10 relative w-5/6 mt-5">
                <input v-model="email" type="text" placeholder="Enter your email" class="h-full  text-black pl-3" style="width: 98.5%; border-radius: 10px;">
                <button @click="handleReq" class="gradient-btn absolute w-32 h-8 right-16 p-1 rounded  mb-1" style="border-radius: 5px; font-size: 14px; margin-top: 4px;">Join the Waitlist</button>
            </div>
          </div>
          <div class="hero-img w-1/2 h-full mb-14">
            <img src="../assets/img/hero-img.png" class="h-full w-3/5 ml-20" alt="hero-img">
          </div>
      </div>
    <!-- hero section ends -->

    <Footer />

  </div>
</template>

<script>
    import { ref } from "vue";
    import Footer from "../components/Footer.vue";
    import Navbar from "../components/Navbar.vue";
    import addEmail from "../composables/waitlistRequest";
    
    export default {
        name: 'Waiting',
        components : { Navbar, Footer },

        setup() {
            const email = ref('');
            
            const nav_btn = ref(null);
            const mobile_nav = ref(null);
            const close_nav = ref(null);
            const mail_input = ref(null);

            const showNav = () => {
                nav_btn.value.classList.add('hidden');
                nav_btn.value.style.color = '#000';
                mobile_nav.value.style.left = "0px";
                close_nav.value.classList.remove('hidden');
                mail_input.value.style.paddingTop = '30px';
            }


            const hideNav = () => {
                nav_btn.value.classList.remove('hidden');
                mobile_nav.value.style.left = "-120%";
                nav_btn.value.style.color = '#fff';
                close_nav.value.classList.add('hidden');
                mail_input.value.style.paddingTop = '5px';

            }


            const {data, error, handleReq} = addEmail(email);




            return {mobile_nav, showNav, nav_btn, close_nav, hideNav, mail_input, email, data, error,  handleReq}
        }
    }
</script>



<style scoped>

    .gradient-btn {
        background: linear-gradient(183.54deg, #F8C616 -31.44%, #880492 16.39%, #FF4510 107.97%);
        font-family: "Rubik";
        font-size: 16px;
        font-weight: 500;
    }

    
    .mail-input button {
        right: 13px;
    }


    /* responsiveness */
    @media screen and (max-width: 1200px) {
        
        .mail-input {
            display: flex;
            width: 90% !important;
            height: 100px !important;
            position: static;
            margin-top: 12px !important;
            flex-direction: column;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
            background: #fff !important;
        }
        .mail-input input {
            height: 40px !important;
            padding-left: 10px;
            width: 90%;
        }
        .mail-input button {
            position: static;
            width: 88%;
            margin-left: 0;
            height: 40px;
        }

    }

    @media screen and (max-width: 1024px) {
        .hero {
            height: 230px;
        }
        .hero-details {
            width: 100%;
            align-items: center;
            text-align: center;
        }
        .hero-img {
            display: none;
        }
    }


    @media screen and (max-width: 870px) {
        .hero {
            justify-content: space-between !important;
            height: 600px;
        }

        .hero-p {
            font-size: 16px;
        }

    }

    @media screen and (max-width: 640px) {
        .hero {
            height: 50vh !important;
            padding: 1px !important;
        }

        .hero-details {
            width: 100%;
            padding-bottom: 30px;;
        }
        .hero-details .hero-text {
            font-size: 30px !important;
        }
        .hero-p {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 380px) {
        .hero {
            margin-top: 20px !important;
            justify-content: space-between !important;
            height: 130% !important;
        }
    }


</style>