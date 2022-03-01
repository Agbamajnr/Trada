<template>
  <div class="main flex flex-row items-center justify-center bg-black">
      <div class="form-container bg-black grid place-items-center p-5">
          <div class="flex flex-col justify-center">
                <div class="top flex flex-col items-center justify-between h-36 mb-6">
                <div class="logo w-3/5 flex flex-row justify-center items-center pt-5">
                    <Logo/>
                </div>
                <p class="text-lg font-bold font-normal leading-7">Add Product to your store</p>
                </div> 
                
                <div class="form flex flex-col items-center justify-center">
                    <form @submit.prevent="submit">
                        <div class="previewImg">
                            <img :src="imageData" class="h-full w-full" alt="" v-if="imageData.length > 1">
                        </div>
                        <form enctype="multipart/form-data" class="grid-center">
                            <input type="file" name="Logo" id="chooseImg"  ref="logo" @change="previewImg">
                        </form>
                        <div class="name flex flex-row w-full">
                            <input type="text" placeholder="Product name" class="w-full" v-model="data.name" required>
                        </div>
                        <input type="text" name="price" id="" placeholder="Product Price" class="w-full" v-model="data.price" required>
                        <textarea name="quote" id="" cols="30" rows="10" v-model="data.desc" placeholder="Describe your product in a nice way" required></textarea>
                        
                        
                        <button class="gradient-btn h-12 w-full mt-4 rounded-xl submit-btn self-center flex items-center justify-center" type="submit" ref="submitBtn">
                            <p v-if="processProduct === false">Add Product</p>
                            <img src="../assets/img/rolling.gif" class="w-6 h-6" v-else alt="">

                        </button>
                    </form>
                    
                </div>
                
          </div>
      </div>
  </div>
</template>


<script>
import Logo from "../components/Logo.vue";
import axios from 'axios'
import { ref } from 'vue';
import PacemanLoader from 'vue-spinner/src/PulseLoader.vue';
import {reactive } from "vue"
import {useStore} from "vuex";
import { nanoid } from 'nanoid'
import {useRouter, useRoute} from "vue-router";

export default {
    name: 'ProductForm',
    components : { Logo, PacemanLoader },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const store = useStore();
        const logo = ref(null);
        const url = 'https://trada-market.herokuapp.com/';

        const submitBtn = ref()
        const processProduct = ref(false)

        const imageData = ref("");


        const data = reactive({
           name: '',
           desc:'',
           price: '',
           storeId: route.params.storeId,
           category: 'tech'

        });

        const previewImg = async (event) => {
            // Reference to the DOM input element
            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    imageData.value = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
            }
        }
        
      
      



      const submit = async () => {
          processProduct.value = true;
          const img = await logo._value.files[0]
          console.log('img:', img, "logo:", logo.value);
          const formData = new FormData();
          formData.append('photo', img)
          

            const logoDetails = await axios.post(url + `api/product/${nanoid(10)}/productImg`, formData, {
                headers: {'Content-Type': 'multipart/form-data'},
            });


            const response = await axios.post(url + 'api/product/new-product', data);


        router.push('/store/' + route.params.storeId + '/admin');
      
    }

    return {data, submit,logo, previewImg, imageData, submitBtn, processProduct}
    }
}
</script>



<style scoped>
    .main {
        width: 100vw;
        overflow-y: scroll;
        height: 100vh;
    }
    .form-container {
        width: 100%;
        
        height: 100%;
    }
    .form div {
        width: 389px;
    }
    input {
        background-color: black;
        border-radius: 10px;
        border: 1px solid #fff;
        height: 50px;
        width: 100%;
        display: grid;
        place-items: center;
        padding-left: 15px;
        margin-top: 25px;
    }
    textarea{
        background-color: black;
        border-radius: 10px;
        border: 1px solid #fff;
        height: 200px;
        width: 100%;
        display: grid;
        color: white;
        place-items: center;
        padding: 15px;
        margin-top: 25px;
    }
    .others-details a {
        color: #F8C616;
        text-decoration: underline;
    }
    .previewImg {
        height: 200px !important;
        width: 400px !important;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0.5px 0.7px 4px 0.9px rgb(92, 83, 30) !important;
    }
    #chooseImg {
        width: 180px;
        height: 40px;
        background-color: #c3c533;
        overflow: hidden;
        border-radius: 5px;
    }
    input[type=file]::file-selector-button {
        border: 2px solid #c3c533;
        background-color: #c3c533;
        transition: 3s;
        width: 180px;
        height: 40px;
    }
    .submit-btn {
        transition: all 5s  linear;
        animation-name: processProduct;
        animation-iteration-count: infinite;
    }


    @keyframes processProduct {
        5% {
            transition:all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
            width: 100%;
            float: right;
        }
        25% {
            transition:all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
            width: 70%; 
        }
        50% {
            transition:all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
            width: 85%;
        }
        75% {
            transition:all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
            width: 100%;
        }
        100% {
            transition:all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
            float: left;
        }

    }
    

</style>