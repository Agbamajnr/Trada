<template>
  <div class="main flex flex-col justify-between">
      <!--navivigation menu starts-->
      <div class="nav flex flex-col relative">
          <div class="normal-nav flex flex-row justify-between">
              <div class="left flex flex-row justify-between items-center p-4 " style="width: 50%;">
                <div class="logo w-36 flex flex-row justify-between items-center ">
                    <div class="logo-box flex flex-row items-center justify-center">
                        <img src="../assets/img/logo.svg" class="w-5 h-5">
                        <img src="../assets/img/logo3.svg" class="w-2 h-2">
                    </div>
                    <img src="../assets/img/logo2.svg" alt="">
                </div>
                <div class="links w-1/2 flex justify-between items-center pt-1"  style="font-family: Montserrat;">
                    <a href="#">Products</a>
                    <a href="#" style="color: #F8C616;">Our Token</a>
                    <a href="#">Support</a>
                </div>
            </div>
            <div class="right w-44 flex flex-row justify-between items-center pt-2 bg-cyan">
                <div class="flex flex-row justify-between items-center w-full">
                    <a href="#">Signup</a>
                    <a href="#" class="login-btn w-24 h-9 rounded flex justify-center items-center">Login</a>
                </div>
                <svg @click="showNav" ref="nav_btn" class="nav-btn hidden w-6 h-6 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                <svg @click="hideNav" ref="close_nav" class="cl0se-nav w-6 h-6 hidden lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
          </div>

          <div ref="mobile_nav" class="mobile-nav flex flex-col justify-center items-center ">
              <div class="links w-1/2 flex flex-col items-center justify-between pt-1 h-2/4"  style="font-family: Montserrat;">
                    <a href="#">Products</a>
                    <a href="#" style="color: #F8C616;">Our Token</a>
                    <a href="#">Support</a>
                    <div class="flex flex-row  items-center justify-between w-44">
                    <a href="#">Signup</a>
                    <a href="#" class="login-btn w-24 h-9 rounded flex justify-center items-center">Login</a>
                </div>
                </div>
          </div>
      </div>
      <!--navivigation menu ends-->




    <!-- hero section starts -->
      <div class="hero w-full flex flex-row items-center mt-1" style="height: 380px;">
          <div class="hero-details h-full w-1/2 flex flex-col justify-center items-start md:pl-16">
            <p class="hero-text text-5xl font-bold leading-snug ">The TRADA  MARKET <span class="text-black md:break-words" style="-webkit-text-stroke: 2px rgb(203 213 225);">TOKEN</span></p>
            <p class="hero-p mt-5">With TRADA token you'll get the most out of TRADA. You can use it for payments and it comes with a wide range of benefits.</p>
            <div ref="mail_input" class="mail-input h-10 relative w-5/6 mt-5">
                <input type="text" placeholder="Enter your email" class="h-full  text-black pl-3" style="width: 98.5%; border-radius: 10px;">
                <button class="gradient-btn absolute w-32 h-8 right-16 p-1 rounded  mb-2" style="border-radius: 5px; font-size: 14px; margin-top: 2px;">Join the Waitlist</button>
            </div>
          </div>
          <div class="hero-img w-1/2 h-full mb-14">
            <img src="../assets/img/hero-img.png" class="h-full w-3/5 ml-20" alt="hero-img">
          </div>
      </div>
    <!-- hero section ends -->




    <!-- footer section starts -->
        <footer class="mt-20 p-16 flex flex-row justify-between items-center">
            <!--footer first container(left) -->
            <div class="footer-info h-full  flex flex-col items-start w-1/3">
                    <div class="w-3/5 flex flex-row items-center">
                        <div class="logo-box flex flex-row items-center justify-center">
                            <img src="../assets/img/logo.svg" class="w-5 h-5">
                            <img src="../assets/img/logo3.svg" class="w-2 h-2">
                        </div>
                        <img class="ml-4" src="../assets/img/logo2.svg" alt="">
                </div>
                <p style="font-family: 'Rubik'; font-size: 16px; font-weight: 400;">
                    Trada offers a simple interfaces where anyone can buy and sell goods and services for free 
                </p>
                <div class="footer-socials flex flex-row w-3/5">
                    <a class="w-8 h-8 border rounded-lg border-white grid place-items-center">
                        <img src="../assets/img/facebook.svg" alt="">
                    </a>
                    <a class="w-8 h-8 border rounded-lg border-white grid place-items-center">
                        <img src="../assets/img/twitter.svg" alt="">
                    </a>
                    <a class="w-8 h-8 border rounded-lg border-white grid place-items-center">
                        <img src="../assets/img/linkedin.svg" alt="">
                    </a>
                    <a class="w-8 h-8 border rounded-lg border-white grid place-items-center">
                        <img src="../assets/img/instagram.svg" alt="">
                    </a>
                </div>
            </div>


            <!--footer second container(left) -->
            <div class="footer-tab flex flex-col items-start h-full">
                <span class="ml-2" style="font-weight: 600; font-size: 16px; font-famaily: 'Rubik';">Products</span>
                <div class="footer-links mt-6 flex flex-col  h-3/5" >
                    <a href="#" class="flex flex-row items-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="pl-2">Trada Markets</span>
                    </a>
                    <a href="#" class="flex flex-row items-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="pl-2">MK Bot</span>
                    </a>
                    <a href="#" class="flex flex-row  items-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="pl-2">Bidding markets</span>
                    </a>
                    <a href="#" class="flex flex-row  items-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="pl-2">Logistics</span>
                    </a>
                    <a href="#" class="flex flex-row  items-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="pl-2">Mobile App</span>
                    </a>
                </div>
            </div>

            <!--footer third container(right) -->
            <div class="footer-tab flex flex-col items-start h-full">
                <span class="ml-2" style="font-weight: 600; font-size: 16px; font-famaily: 'Rubik';">Ecosystem</span>
                <div class="footer-links mt-6 flex flex-col h-3/5" >
                    <a href="#" class="flex flex-row items-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="pl-2">Trada technology</span>
                    </a>
                    <a href="#" class="flex flex-row  items-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="pl-2">Roadmap</span>
                    </a>
                    <a href="#" class="flex flex-row  items-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="pl-2">Payment system</span>
                    </a>
                    <a href="#" class="flex flex-row  items-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="pl-2">Blockchain</span>
                    </a>
                </div>
            </div>

            <!--footer fourth container(right) -->
            <div class="footer-tab flex flex-col items-start h-full">
                <span class="ml-2" style="font-weight: 600; font-size: 16px; font-famaily: 'Rubik';">Company</span>
                <div class="footer-links mt-6 flex flex-col h-3/5" >
                    <a href="#" class="flex flex-row items-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="pl-2">FAQs</span>
                    </a>
                    <a href="#" class="flex flex-row  items-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="pl-2">Careers</span>
                    </a>
                    <a href="#" class="flex flex-row  items-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="pl-2">Legal</span>
                    </a>
                </div>
            </div>
        </footer>

    <!-- footer section ends -->
  </div>
</template>

<script>
    import { ref } from "vue";
    
    export default {
        setup() {
        
            
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




            return {mobile_nav, showNav, nav_btn, close_nav, hideNav, mail_input}
        }
    }
</script>



<style scoped>
    /* utilities */
    .gradient-btn {
        background: linear-gradient(183.54deg, #F8C616 -31.44%, #880492 16.39%, #FF4510 107.97%);
        font-family: "Rubik";
        font-size: 16px;
        font-weight: 500;
    }
    .login-btn {
        background: 
        linear-gradient(black, black) padding-box,
        linear-gradient(to right, #F8C616, #880492, #FF460C) border-box;
        border: 1px solid transparent;
    }
    .logo-box {
        width: 40px;
        height: 40px;
        background: linear-gradient(173.36deg, #F8C616 1.92%, #880492 1.93%, #FF4510 109.19%);
        border-radius: 15px;
    }
    .footer-socials a {
        margin: 7px;
    }





    .main {
        width: 100%;
        height: 100%;
        color: #fff;
        background-color: #000;
        overflow-x: hidden;
    }
    .main .nav .normal-nav {
        width: 95%;
        padding: 40px;
        padding-left: 90px;
        padding-top: 10px;
        height: 10%;
        font-size: 14px;
        margin: 0 auto;
    }
    .main .nav .mobile-nav {
        height: 300px;
        transition: all .4s linear;
        top: 90%;
        position: absolute;
        left: -120%;
        background: black;
        opacity: 1;
        border-bottom: 1px solid #C4C4C4;
        width: 100%;
    }


    footer {
        height: 400px;
        bottom: 0;
    }
    footer .footer-info p {
        margin-top: 7%;

    }
    .footer-links {
        color: #C4C4C4; 
        font-family: 'Rubik'; 
        font-size: 14px;
    }
    .footer-links a {
        margin: 7px;

    }

    .mail-input button {
        right: 13px;
    }


    /* responsiveness */
    @media screen and (max-width: 1200px) {
        .main .nav .normal-nav {
            width: 90%;
            padding: 20px;
            justify-content: space-between;
        }
        .main .nav .normal-nav .left {
            width: 60%   !important;
            padding: 10px;
        }
        .main .nav .normal-nav  .right {
            width: 22% !important;
        }
        .main .nav .normal-nav .left .links {
            width: 40%;
        }

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
            width: 100%;
        }
        .mail-input button {
            position: static;
            width: 90%;
            margin-left: 0;
            height: 40px;
        }

    }

    @media screen and (max-width: 1024px) {
        .main .nav .normal-nav {
            width: 95%;
            padding: 10px;
        }


        .main .nav .normal-nav .left {
            width: 83.5%;;
        }
        .main .nav .normal-nav .left .links {
            width: 55%;
        }

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

    @media (min-width: 871px) {
        .main .nav .mobile-nav {
            display: none;
        }
        .nav-btn {
            display: none;
        }
        .close-nav {
            display: none;
        }
    }

    @media screen and (max-width: 870px) {
        .main .nav {
            position: sticky;
        }
        .main .nav .normal-nav {
            height: 120px;
        }
        .main .nav .normal-nav .left .links {
            display: none;
        }
        .main .nav .normal-nav .right {
            justify-content: flex-end;
        }
        .main .nav .normal-nav .right div {
            display: none;
        }


        .hero {
            justify-content: space-between !important;
            height: 600px;
        }

        .hero-p {
            font-size: 16px;
        }

        .nav-btn {
            display: initial;
        }
        
        footer {
            flex-direction: column;
            align-items: flex-start;
            height: 120%;
        }
        footer div {
            height: 120%;
        }
        .footer-info {
            width: 70%;
        }
        .footer-info p {
            width: 100%;
        }
        .footer-socials {
            margin-top: 10px;
        }
        .footer-tab {
            margin-top: 30px;
        }

        .footer-links a  {
            margin-top: 5px;
            height: 120%;
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
        .footer-info {
            width: 100%;
            height: 120%;
        }
        .footer-info p {
            width: 100%;
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