<template>
  <div class="main flex flex-col">
      <!--navivigation menu starts-->
      <div class="nav flex flex-row justify-between items-center">
          <div class="left  flex flex-row justify-between items-center p-4" style="width: 40%;">
              <div class="w-40 flex flex-row justify-between items-center">
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
          <div class="right w-44 flex flex-row justify-between items-center pt-4">
              <a href="#">Signup</a>
              <a href="#" class="login-btn w-24 h-9 rounded flex justify-center items-center">Login</a>
          </div>
      </div>
      <!--navivigation menu ends-->


      <div class="hero h-2/3 w-full flex flex-row items-center mt-10 p-12">
          <div class="hero-details h-full w-1/2 flex flex-col justify-between items-center">
            <img src="../assets/img/ttmt.svg">
            <img src="../assets/img/ttmt-p.svg" class="pl-10">
            <div class="ml-6 pr-14 h-10 relative w-5/6">
                <input type="text" placeholder="Enter your email" class="h-full rounded-sm text-black pl-3" style="width: 98.5%;">
                <button class="gradient-btn absolute w-32 h-8 right-16 rounded mt-1 mr-1 text-sm">Join the Waitlist</button>
            </div>
          </div>
          <div class="hero-img w-1/2 h-full">
            <img src="../assets/img/Icosahedron.png" class="h-full w-3/5 float-right" alt="hero-img">
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    /* utilities */
    .gradient-btn {
        background: linear-gradient(183.54deg, #F8C616 -31.44%, #880492 16.39%, #FF4510 107.97%);
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
    }
    .main .nav {
        width: 95%;
        padding: 40px;
        padding-left: 90px;
        padding-top: 40px;
        height: 10%;
        font-size: 14px;
    }
</style>