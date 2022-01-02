<template>
  <!--navivigation menu starts-->
      <div class="nav flex flex-col relative" style=" color: #fff;">
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
</template>

<script>
    import { ref } from "vue";
    
    export default {
        setup() {
            
            const nav_btn = ref(null);
            const mobile_nav = ref(null);
            const close_nav = ref(null);

            const showNav = () => {
                nav_btn.value.classList.add('hidden');
                nav_btn.value.style.color = '#000';
                mobile_nav.value.style.left = "0px";
                close_nav.value.classList.remove('hidden');
            }


            const hideNav = () => {
                nav_btn.value.classList.remove('hidden');
                mobile_nav.value.style.left = "-120%";
                nav_btn.value.style.color = '#fff';
                close_nav.value.classList.add('hidden');

            }




            return {mobile_nav, showNav, nav_btn, close_nav, hideNav}
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

        .nav-btn {
            display: initial;
        }
    }
</style>