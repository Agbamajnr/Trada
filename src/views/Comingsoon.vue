<template>
  <div class="main flex flex-col justify-between" style="background: #000; color: #fff;">
      <!--navivigation menu starts-->
      <Navbar />
      <!--navivigation menu ends-->


      <section class="coming-soon flex justify-center items-center md:p-6 w-full" style="height: 400px">
          <div class="flex justify-center items-center md:w-4/5 h-full rounded" style="background: linear-gradient(to bottom, #880492, #FF460C);">
              <p style="font-size: 60px; font-weight: 700">COMING SOON</p>
          </div>
      </section>


      <!-- footer section starts -->
        
        <Footer />
    <!-- footer section ends -->
  </div>
</template>

<script>
    import { ref } from "vue";

    import Footer from "../components/Footer.vue";
    import Navbar from "../components/Navbar.vue";
    export default {
        name: 'Comingsoon',
        components : { Navbar, Footer }
    }
</script>


<style scoped>
    .coming-soon div {
        border-radius: 13px !important;
    }
    @media screen and (max-width: 1024px){
        .coming-soon div {
            width: 80% !important;
        }
        .coming-soon div p {
            font-size: 50px !important;
        }
    }
    @media screen and (max-width: 870px){
        .coming-soon div {
            width: 90% !important;
        }
        .coming-soon div p {
            font-size: 40px !important;
        }
    }
    @media screen and (max-width: 640px){
        .coming-soon div {
            width: 95% !important;
        }
        .coming-soon div p {
            font-size: 30px !important;
        }
    }
</style>