<template>
<div class="main grid-center w-full h-full py-8" ref="main">
      <div class="body col-flex w-full px-10 sm:px-16 h-full">
          <div class="row-flex items-center justify-between">
              <Logo/>
              <img src="../assets/img/navClose.svg" class="cursor-pointer" alt="" @click="closeNav">
          </div>
          <div class="details flex flex-col sm:flex-row h-full sm:items-center justify-between  sm:justify-between sm:pt-15 lg:pt-20 mt-10 sm:mt-0">
              <div class="links col-flex h-full pr-4 w-full sm:w-3/6">
                <div class="group1 flex flex-col sm:flex-row justify-between w-full">
                    <div class="section">
                        <p class="title font-bold text-xl">Menu</p>
                        <p class="pt-3">Home</p>
                        <p class="pt-1 ">Bid Shop</p>
                        <p class="pt-1">Products</p>
                    </div>
                    <div class="section">
                        <p class="title font-bold text-xl">Profile</p>
                        <p class="pt-3">Overview</p>
                        <p class="pt-1 ">Account</p>
                        <p class="pt-1">Settings</p>
                    </div>
                    <div class="section">
                        <p class="title font-bold text-xl">General</p>
                        <p class="pt-3">FAQ</p>
                        <p class="pt-1 ">Vendors Account</p>
                        <p class="pt-1">Order Creation</p>
                        <p class="pt-1">Seller's Invoice</p>
                        <p class="pt-1">Roadmap</p>
                    </div>
                </div>
                <div class="group2 flex flex-col sm:flex-row justify-between sm:w-1/2">
                    <div class="section">
                    <p class="title font-bold text-xl">Loans</p>
                    <p class="pt-3">Buyers Loans</p>
                    <p class="pt-1 ">Seller Loans</p>
                    <p class="pt-1">Bid Loans</p>
                    </div>
                    <div class="section">
                        <p class="title font-bold text-xl">Support</p>
                        <p class="pt-3">Payments</p>
                        <p class="pt-1 ">Logistics</p>
                        <p class="pt-1">Customer Care</p>
                    </div>
                </div>
              </div>
              <div class="quickService h-full flex flex-col justify-between text-black sm:gap-3 sm:w-4/6 mt-40 sm:mt-0">
                    <p class="font-bold">Quick Service</p>
                    <div class="top flex sm:flex-row flex-col sm:h-2/5 w-full mt-3 justify-between sm:gap-4 ">
                        <div class="card h-full w-full">
                            <p class="title font-bold text-lg">Logistics</p>
                            <p class="sub">N500 per Kg</p>
                        </div>
                        <div class="card h-full w-full mt-4 sm:mt-0">
                            <p class="title font-bold text-lg">Logistics</p>
                            <p class="sub">N500 per Kg</p>
                        </div>
                        <div class="card w-full h-full mt-4 sm:mt-0">
                            <p class="title font-bold text-lg">Logistics</p>
                            <p class="sub">N500 per Kg</p>
                        </div>
                    </div>
                    <div class="bottom sm:h-3/5 w-full flex sm:flex-row flex-col text-black gap-x-3">
                        <div class="left w-full sm:w-4/5 col-flex gap-y-3">
                            <div class="top w-full bg-blue-300 grid place-items-center rounded mt-4 sm:mt-0" style="height: 48%;">
                                <p>Payment Methods</p>
                            </div>
                            <div class="bottom w-full rounded flex sm:flex-row flex-col gap-x-3" style="height: 48%;">
                                <div class="card h-full w-full sm:w-1/2 bg-green-200 rounded "></div>
                                <div class="card h-full w-full sm:w-1/2 bg-green-500 rounded mt-4 sm:mt-0"></div>
                            </div>
                        </div>
                        <!-- <div class="right h-full w-2/5 col-flex justify-between text-black rounded overflow-hidden" style="background: #F6F1FC;">
                            <div class="grid-center text-black h-1/2">
                                <p class="font-bold  text-black">Quick support</p>
                                <p class="text-black">Single click support team</p>
                            </div>
                            <img src="../assets/img/character.svg" alt="">
                        </div> -->
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Logo from "./Logo2.vue"
import {ref} from 'vue'
export default {
    components: {Logo},
    setup() {
        const navClose = ref()
        const main = ref()

        const closeNav = () => {
            main._value.style.display = "none";
        }

        return {navClose, closeNav, main}
    }
}
</script>

<style scoped>
    .main {
        background-color: #000;
        height: 100%;
        overflow: auto
    }
    .section p {
        font-size: 14px;
    }
    .card {
        background-color: rgb(69, 170, 209);
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 5px;
    }
    @media (max-width: 768px) {
        .card {
            min-height: 140px;
        }
    }
</style>