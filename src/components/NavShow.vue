<template>
<div class="main grid-center w-full h-full py-8" ref="main">
      <div class="body col-flex w-full px-16 h-full">
          <div class="row-flex items-center justify-between">
              <Logo/>
              <img src="../assets/img/navClose.svg" class="cursor-pointer" alt="" @click="closeNav">
          </div>
          <div class="details row-flex h-full items-center justify-between sm:pt-15 lg:pt-20">
              <div class="links col-flex h-full pr-4" style="width: 43%">
                <div class="group1 flex flex-row justify-between w-full">
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
                <div class="group2 row-flex justify-between w-1/2">
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
              <div class="quickService h-full col-flex text-black gap-3" style="width: 57%">
                    <p class="font-bold">Quick Service</p>
                    <div class="top row-flex h-2/5 w-full mt-3 justify-between gap-4 ">
                        <div class="card h-full w-full">
                            <p class="title font-bold text-lg">Logistics</p>
                            <p class="sub">N500 per Kg</p>
                        </div>
                        <div class="card h-full w-full">
                            <p class="title font-bold text-lg">Logistics</p>
                            <p class="sub">N500 per Kg</p>
                        </div>
                        <div class="card w-full h-full">
                            <p class="title font-bold text-lg">Logistics</p>
                            <p class="sub">N500 per Kg</p>
                        </div>
                    </div>
                    <div class="bottom h-3/5 w-full row-flex text-black gap-x-3">
                        <div class="left w-4/5 col-flex gap-y-3">
                            <div class="top w-full bg-blue-300 grid place-items-center rounded" style="height: 48%;">
                                <p>Payment Methods</p>
                            </div>
                            <div class="bottom w-full rounded row-flex gap-x-3" style="height: 48%;">
                                <div class="h-full w-1/2 bg-green-200 rounded"></div>
                                <div class="h-full w-1/2 bg-green-500 rounded"></div>
                            </div>
                        </div>
                        <div class="right h-full w-2/5 col-flex justify-between text-black rounded overflow-hidden" style="background: #F6F1FC;">
                            <div class="grid-center text-black h-1/2">
                                <p class="font-bold  text-black">Quick support</p>
                                <p class="text-black">Single click support team</p>
                            </div>
                            <img src="../assets/img/character.svg" alt="">
                        </div>
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
    }
    .links {
        overflow: auto;
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
</style>