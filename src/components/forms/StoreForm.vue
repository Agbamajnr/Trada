<template>
  <div class="main flex flex-row items-center justify-center bg-black">
      <div class="form-container bg-black grid place-items-center p-5">
          <div class="flex flex-col justify-center">
                <div class="top flex flex-col items-center justify-between h-36 mb-6">
                <div class="logo w-3/5 flex flex-row justify-center items-center pt-5">
                    <Logo/>
                </div>
                <p class="text-lg font-bold font-normal leading-7">Become a seller in Trada</p>
                </div> 
                
                <div class="form flex flex-col items-center justify-center">
                    <form @submit.prevent="submit">
                        <div class="previewImg">
                            <img :src="imageData" class="h-full w-full" alt="" v-if="imageData.length > 1">
                        </div>
                        <form enctype="multipart/form-data">
                            <input type="file" name="Logo" id="Logo" ref="logo" @change="previewImg" required />
                        </form>
                        <div class="name flex flex-row w-full">
                            <input type="text" placeholder="Store name" class="w-full" v-model="data.name" required>
                        </div>
                        <textarea name="quote" id="" cols="30" rows="10" v-model="data.quote" placeholder="Describe your store in an enticing waay to the buyers" required></textarea>
                        <input type="text" name="location" id="" placeholder="Store location" class="w-full" v-model="data.location" required>
                        <input type="text" name="location" id="" placeholder="Store Category" class="w-full" v-model="data.category" required>
                        <input type="number" name="phone" id="" placeholder="Store Phone" class="w-full" v-model="data.phone" maxlength="11" required />
                        <button class="gradient-btn h-12 w-3/5 mt-4 rounded-xl self-center flex justify-center items-center submit-btn" type="submit" ref="submitBtn">
                            <p v-if="creatingStore === false">Create Store</p>
                            <p v-else>{{processInfo}}</p>
                        </button>
                    </form>
                    <p v-if="error">{{ error}}</p>
                    
                </div>
                
          </div>
      </div>
  </div>
</template>


<script>
import Logo from "../Logo.vue";
import axios from 'axios'
import PacemanLoader from 'vue-spinner/src/PulseLoader.vue';
import {reactive, computed, ref } from "vue"
import {useStore} from "vuex";
import { nanoid } from 'nanoid'
import {useRouter} from "vue-router";

export default {
    name: 'StoreForm',
    components : { Logo, PacemanLoader },
    setup() {

        const url = 'https://trada.vercel.app/';

        const store = useStore();
        let id = nanoid();
        const imageData = ref("");
        const logo = ref(null)
        const error = ref('')
        const processInfo = ref('')
        const creatingStore = ref(false)
        const submitBtn = ref()


        const data = reactive({
           name: '',
           quote:'',
           location: '',
           storeId: id,
           phone: null,
           category: ''

        });

        
        
      const router = useRouter();

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
      

     async function makeUserSeller (sellerId) {
         
         const checkUser = await  axios.get(url + 'api/auth/user', { withCredentials: true});
         
         if (checkUser.data) {
             let id = await checkUser.data._id;

             const result = await axios.put(url + `api/auth/${id}`,{sellerId: sellerId})
         } else {
             alert('Error in creating store, Please make sure to authenticate');
         }


     }



      const submit = async () => {
          if (imageData.value.length < 1 && typeof(data.phone) === 'string') {
              alert('Some input field are still invalid')
          } else {
            processInfo.value = 'Processing Image';
            submitBtn.value.style.animationDuration = '10s';
            creatingStore.value  = true;
            const img = await logo._value.files[0];
            const formData = new FormData();
            formData.append('photo', img)
            const logoDetails = await axios.post(url + `api/store/${data.storeId}/storeLogo`, formData, {
                headers: {'Content-Type': 'multipart/form-data'},
            });
            processInfo.value = 'Creating Store';
            const response = await axios.post(url + 'api/newStore', data);

            makeUserSeller(response.data.storeId);

            processInfo.value = 'Redirecting to created store';
            setTimeout(() => {
                
                router.push('/store/' + data.storeId);
            }, 1000);
          }
      
    }

    return {data, submit, processInfo, logo, previewImg, imageData, creatingStore, error, submitBtn}
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
    .previewImg {
        height: 200px !important;
        width: 400px !important;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0.5px 0.7px 4px 0.9px rgb(92, 83, 30) !important;
    }
    #chooseImg {
        width: 180px !important;
        height: 40px !important;
        background-color: #c3c533;
        overflow: hidden;
        border-radius: 5px;
    }
    input[type=file]::file-selector-button {
        border: 2px solid #c3c533;
        background-color: #c3c533;
        transition: 3s;
        width: 180px !important;
        height: 40px !important;
    }
    .others-details a {
        color: #F8C616;
        text-decoration: underline;
    }
    .submit-btn {
        transition: all 5s  linear;
        animation-name: storeProcessing;
        animation-iteration-count: infinite;
    }
    
    @keyframes storeProcessing {
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