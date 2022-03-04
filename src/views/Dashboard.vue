<template>
  <div class="main grid place-items-center py-10 bg-black w-full relative">
      <PacemanLoader v-if="loading === true"/>
      
      <div class="body flex flex-col w-3/5 h-full" v-if="loading === false">
        <Nav @fireNav="showNav"/>
            

          <div class="top-tab flex flex-row items-center justify-end text-xs mt-7">
              <div style="background: rgba(48, 211, 139, 0.1); color: #F8C616;" class="rounded h-10 w-24 grid place-items-center font-semibold">Market</div>
              <div class="font-semibold" v-if="user.seller === false"><a href="/newstore" class="no-underline ">Become a seller</a></div>
              <div class="font-semibold" v-if="user.seller === true"><a :href="'/store/' + user.sellerId + '/admin'" class="no-underline ">Go to Store</a></div>
          </div>


        <div class="main-container flex flex-col items-center p-4 mt-7 rounded-lg" style="background: #1C1C1C;">

            <!--search tab -->
            <div class="search w-full col-flex items-start justify-center p-10 rounded-lg" style="background: rgba(248, 198, 22, 0.1); height: 250px;">
                <p class="heading-sm text-center">Search vendors</p>
                <p class="sub-head-sm text-center mt-1">Get what you wants now</p>

                <div class="search-input mt-4 relative">
                    <input type="text" class="bg-black h-12 w-64 rounded-lg pl-9" placeholder="Search vendors">
                    <svg class="w-4 h-4 absolute top-4 left-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <img src="../assets/img/search-grid.svg" class="absolute right-4 top-4">
                </div>
            </div>

            <!--stores preview -->
            
            <div class="stores col-flex items-center justify-between mt-5 w-full">

                <!--Grocery shops -->
                <div class="category w-full col-flex  mt-3" >
                    <div class="category-info row-flex items-center justify-between w-full">
                        <p class="category-name">Grocery Shops</p>
                        <button><div class="grid place-items-center btn-2" v-if="stores.length > 3">View All</div></button>
                    </div>
                    <div class="store-g row-flex w-full h-full items-center justify-between mt-3" v-if="stores">
                        <div class="store h-full text-center" v-for="store in stores.slice(0, 3)" :key="store" >
                            <a :href="'/store/' + store.storeId">
                                <div class="store-img rounded-lg p-5 h-full grid place-items-center">
                                    <img :src="store.storeLogo" class="h-full" alt="">
                                </div>
                                <p class="store-name mt-3">{{ store.storeName}}</p>
                                <p class="store-location mt-1">{{store.storeLocation}}</p>
                            </a>
                        </div>
                        <div v-if="stores.length < 1" class="flex flex-row items-center justify-center"><p class="text-center">There are no stores in this category</p></div>
                    </div>
                    
                </div>


                
            </div>
        </div>
      </div>
      <Nav2 class="fixed top-0 min-w-screen min-h-screen" ref="navShow" style="display: none !important;"/>
  </div>
</template>

<script>
import Nav2 from "../components/NavShow.vue";
import Nav from "../components/Nav.vue";

import { useRouter, useRoute } from 'vue-router'
import PacemanLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';
import {reactive, ref} from 'vue';
export default {
    components: {Nav,Nav2, PacemanLoader},
    setup() {
        const navShow = ref();
        const user = ref()

        const router = useRouter();


        const showNav = () => {
            navShow._value.main.style.display = 'block';
        }

        

        const stores = ref([]);
        const loading = ref(false);

        const getUser = async () => {
          const cookies = await axios.get('http://localhost:3030/api/auth/checkCookies', { withCredentials: true });
          console.log(cookies.data);
          if(cookies.data === true) {
            const res = await axios.get('http://localhost:3030/api/auth/user', { withCredentials: true })
            user.value = res.data;
            console.log(user);
          } else {
              alert('User not Logged In')

              setTimeout(() => {
                  router.push('/login')
              }, 2000);
          }
      }

      getUser();

        

        const url = 'https://trada-market.herokuapp.com/api/store';
        const getAllStores = async () => {
            loading.value = true;
            const response = await axios.get(url);

            for (let i = 0; i < response.data.length; i++) {
                const element = response.data[i];

                stores.value.push(element)
                
            }


            
            loading.value = false;

        }


        getAllStores();

        return {stores,loading, showNav, navShow, user};
    }
}
</script>

<style scoped>
    .main {
        min-height: 100vh !important;
        height: 100% !important;
        width: 100vw !important;
        transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) .7s;
        overflow: hidden !important;
    }

    .main .body .top-tab div {
        margin-left: 12px;
    }

    .search-input input::placeholder {
        font-size: 12px !important;
        font-weight: 700 !important;
    }
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

    .stores {
        height: 120% !important
    }

    .stores .category .store-g .store {
        width: 32% !important;
    }
    .stores .category .store-g .store .store-img {
        height: 250px;
        background: #333333;
    }


    @media screen and (max-width: 1024px) {
        .body {
            width: 80% !important;
        }
    }




    @media screen and (max-width: 640px) {
        .body {
            width: 100% !important;
            padding: 5px;
        }
        .main-container {
            width: 100% !important;
            align-self: center !important;
        }

        .top-tab {
            margin-right: 5px;
        }

        
        .search {
            padding: 20px !important;
        }
        .search .search-input input {
            width: 100%;
        }
       

        .stores .category .store-g  {
            flex-direction: column;
        }
        .stores .category .store-g .store {
            width: 100% !important;
            height: 100% !important;
            margin-top: 20px !important;
        }
    }
</style>