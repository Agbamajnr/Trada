<template>
  <router-view/>
  
</template>
<script>
import { ref } from 'vue';
import {reactive } from "vue"
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import axios from "axios"


export default{
  setup() {
    const store = useStore();
      const getUser = async () => {
        try {
          const cookies = await axios.get('https://trada-market.herokuapp.com/api/auth/checkCookies', { withCredentials: true });
          console.log(cookies.data);
          if(cookies.data === true) {
            const res = await axios.get('https://trada-market.herokuapp.com/api/auth/user', { withCredentials: true })

            await store.dispatch('setAuth', {authState: true, userDetails: res.data});
          } else  await store.dispatch('setAuth', false);

        } catch (error) {
          await store.dispatch('setAuth', false);
        }
      }

      getUser();
  }
};
</script>

<style>
  *{
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
