<template>
  
  <div class="main grid place-items-center py-10 bg-black">
    <PacemanLoader v-if="loading === true"/>
      <div class="body flex flex-col w-3/5  h-full pb-3" v-if="loading === false">
        <Nav @fireNav="showNav"/>

            <div class="top-tab flex flex-row items-center justify-end text-xs mt-7">
                <div class="font-semibold">Home</div>
                <div style="background: rgba(48, 211, 139, 0.1); color: #F8C616;" class="rounded h-9 w-20 grid place-items-center font-semibold">{{storePic}}S</div>
                <div class="font-semibold">Bid Shop</div>
                <div class="font-semibold" v-if="$store.state.user[0].sellerId == storeDetails.id"><a :href="$router.currentRoute.value.path + '/admin'">View as Admin</a></div>
                <div class="font-semibold" v-else>Products</div>
            </div>

            <div class="store-details row-flex items-center p-5 sm:p-12 rounded-lg justify-between mt-7 max-h-fit">
                <div class="store-img w-full sm:w-1/2  grid-center w-full h-full rounded-lg" style="background: #8BACC0">
                <img v-if="storeDetails.logo" :src="storeDetails.logo" class="w-full h-full">
                    <p class="text-3xl text-black font-bold" v-else>{{storePic}}S</p>
                </div>
                <div class="store-info h-full rounded col-flex p-6 content-center">
                    <div class="top row-flex items-center justify-between">
                        <div class="left">
                            <p class="heading-sm">{{storeDetails.name}}</p>
                            <p class="products-sold text-sm mt-1" style="font-family: 'Rubik';">0 sales.</p>
                        </div>
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                    </div>
                    
                    <div class="desc mt-5">
                        <p class="store-head">Trader Quote</p>
                        <p class="mt-2 text-sm leading-5">{{storeDetails.quote}}.</p>
                    </div>

                    <div class="others col-flex mt-5">
                        <div class="store-id row-flex items-center justify-between">
                            <p class="store-head">Trader ID</p>
                            <p class="uppercase text-xs" style="font-family: 'Rubik';">{{storeDetails.id}}</p>
                        </div>
                        <div class="store-location row-flex items-center justify-between">
                            <p class="store-head">Trader Location</p>
                            <p class="uppercase text-xs" style="font-family: 'Rubik';">{{storeDetails.location}}</p>
                        </div>
                        <div class="store-no row-flex items-center justify-between">
                            <p class="store-head">Mobile no</p>
                            <p class="uppercase text-xs row-flex" style="font-family: 'Rubik';">{{storeDetails.phone}} <img class="ml-2 w-4/5 h-4/5" src="../assets/img/phone.svg" alt=""></p>
                        </div>
                    </div>
                    <button class="self-center text-sm font-semibold w-4/5 h-12 rounded-lg mt-4 row-flex items-center justify-center" style="background: #F8C616;" @click="startChat">
                        <p v-if="processing === false">Create order</p>
                        <img src="../assets/img/rolling.gif" class="w-6 h-6" v-else alt="">
                    </button>
                </div>   
            </div>

            <div class="shop-bid row-flex items-center mt-7 rounded-lg p-10">
                <div class="bid-info h-3/5 col-flex items-start w-3/5">
                    <p class="font-bold text-xl leading-4 rubik">BID SHOP</p>
                    <p class="text-xs mt-2">Enjoy beautiful offers from my bid shop. Your money matters</p>

                    <p class="timer mt-5 font-bold">23h  15m  12s</p>
                </div>
                <div class="bid-img p-5 w-1/2 h-full">
                    <div class="img w-full h-full" style="">
                        <img src="../assets/img/bid.svg" alt="">
                    </div>
                </div>
            </div>


            <div class="products col-flex items-center mt-7 w-full">
                <div class="featured w-full col-flex  mt-3">
                    <div class="info row-flex items-center justify-between w-full">
                        <p class="title font-bold">Featured Products</p>
                        <button><div class="grid place-items-center btn-2">View All</div></button>
                    </div>
                    <div class="products-g row-flex w-full h-full items-center mt-5">
                        <div class="product w-full h-full text-center mx-3" v-for="product in products.slice(0, 3)" :key="product">
                            <div class="product-img rounded-lg grid place-items-center">
                                   <img :src="product.product.productImg" alt="" class="img h-full w-full">
                            </div>
                            <p class="product-name mt-3">{{product.product.productName}}</p>
                            <p class="price mt-1">N{{product.product.productPrice}}</p>
                        </div>
                        <p v-if="products.length < 1" class="text-center">There are no products in this store!</p>
                    </div>
                </div>
            </div>
      </div>

      <Nav2 class="fixed top-0 min-w-screen min-h-screen" ref="navShow" style="display: none !important;"/>

      
  </div>
  
</template>

<script>
import Nav from "../components/Nav.vue";
import Nav2 from "../components/NavShow.vue";

import axios from 'axios';
import PacemanLoader from 'vue-spinner/src/PulseLoader.vue';
import { useRouter, useRoute } from 'vue-router'
import {reactive, ref} from 'vue';
import {useStore} from "vuex";

export default {
    components: {Nav, Nav2, PacemanLoader},
    setup() {
        const loading = ref(false);
        const navShow = ref();
        const storeDetails = reactive({
            name: '',
            quote: '',
            location: '',
            phone: '',
            products: [],
            logo: '',
            id: ''
        });

        const showNav = () => {
            navShow._value.main.style.display = 'block';
        }

        const store = useStore();

        const products = ref([]);
        const processing = ref(false)

        const storePic = ref();

        const router = useRouter();
        const route = useRoute();
        const url = 'https://trada-market.herokuapp.com/api/store/' + route.params.id;

        const getStoreDetails = async () => {
            loading.value = true;
            const response = await axios.get(url);


            storeDetails.name = response.data.storeName;
            storeDetails.quote = response.data.storeQuote;
            storeDetails.location = response.data.storeLocation;
            storeDetails.phone = response.data.storePhone;
            storeDetails.logo = response.data.storeLogo;
            storeDetails.id = response.data.storeId;

            for (let i = 0; i < response.data.storeProducts.length; i++) {
                const element = response.data.storeProducts[i];

                storeDetails.products.push(element);
                
            }

            let img = storeDetails.name.split('')[0].toUpperCase();
            storePic.value = img;
            

            getProducts();
            loading.value = false;
        }

        async function getProducts() {
            storeDetails.products.forEach(async (product) => {
                const response = await axios.get('https://trada-market.herokuapp.com/api/product/' + product);

                products.value.push({product: response.data})
                
                
            })
        }

        const startChat = async () => {
            processing.value = true;
            const data = await axios.post('https://trada-market.herokuapp.com/api/chatting/room', {
                "sellerId": storeDetails.id,
                "buyerId": store.state.user[0]._id,
            })

            router.push('/messages')
        }

        
        getStoreDetails();

        return {storeDetails, storePic, loading, products, startChat, showNav, navShow, processing}
    }
}
</script>

<style scoped>
    .main {
            min-height: 100vh;  
    }
    .main .body .top-tab div {
        margin-left: 13px;
    }
    .store-details {
        max-height: 120% !important;
        height: 100% !important;
        background: #1C1C1C;
    }
    .store-img {
        width: 49%;
    }
    .store-info {
        background: #333333;
        width: 49%;
    }
    .store-info .others div {
        margin-top: 10px;
    }

    .shop-bid  {
        height: 248px;
        background: #1C1C1C;
    }


    .products {
        height: 120% !important
    }

    .products .featured .products-g .product {
        width: 32% !important;
    }
    .products .featured .products-g .product .product-img {
        height: 250px;
        padding: 20px !important;
        background: #333333;
    }

    .product-img .img {
        border-radius: 6px;
        object-fit: center;
    }

    @media screen and (max-width: 1024px) {
        
        .store-details {
            flex-direction: column;
            height: 100% !important;
            width: 100%;
        }
        .store-img {
            width: 90%;
        }
        .store-info {
            background: #333333;
            width: 90%;
        }
    }


    @media screen and (max-width: 640px) {
        .body {
            width: 100% !important;
            overflow-x: hidden;
            padding: 5px;
        }
        .top-tab {
            margin-right: 5px;
        }
        .store-img {
            width: 100% !important;
            height: 300px !important;
        }
        .store-info {
            margin-top: 20px;
            width: 100% !important;
        }

        .shop-bid .bid-img {
            display: none !important;
        }
        .shop-bid .bid-info {
            width: 100% !important;
        }

        .products .featured .products-g {
            flex-direction: column !important;
        }
        .products .featured .products-g .product {
            width: 100% !important;
        }
        .products .featured .products-g .product {
            margin-top: 20px !important;
        }
    }
</style>