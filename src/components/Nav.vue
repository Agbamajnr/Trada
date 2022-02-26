<template>
  <div class="navbar flex flex-row justify-between items-center">
        <div class="nav flex flex-row items-center">
            <button @click="fireNav"><img src="../assets/img/buyernav.svg" alt=""></button>
            <img class="logo pl-4" src="../assets/img/buyerlogo.svg" alt="">
        </div>
        <div class="tools bg-green-500 flex flex-row  w-2/5 h-11 items-center justify-between rounded p-3" style="background: #232323">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <a href="/messages" class="cursor-pointer"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg></a>
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            <div style="background: rgba(255, 70, 12, 0.15);" class="w-6 h-6 rounded text-red-500 grid place-items-center">3</div>
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        </div>
  </div>
</template>

<script>
export default {
    setup(props, context) {
        const fireNav = () => {
            context.emit('fireNav')
        }
        return {fireNav}
    }
}
</script>

<style scoped>
    @media screen and (max-width: 640px) {
        .navbar .nav .logo {
            display: none;
        }
        .navbar .tools {
            width: 82% !important;
            justify-content: flex-start !important;
            padding: 5px !important;
        }
        .navbar .tools svg {
            width: 1.5rem !important;
            height: 1.5rem !important;
            margin: 9px;
        }
        .navbar .tools div {
            width: 1.5rem !important;
            height: 1.5rem !important;
            margin: 7px;
        }
    }
</style>