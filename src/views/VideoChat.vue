<template>
    <div class="main col-flex items-center py-10 bg-black w-full h-full">
      <h3 class="text-white text-3xl font-bold text-center w-1/2">Redirecting to Seaera.... A third party app for Video and Audio as well as Text chat management</h3>
      <button class="gradient-btn mt-6 w-40 h-10 rounded-xl transition-all">
          <a target="_blank" :href="'https://seaera.herokuapp.com/room/' + chatId" class=" hover:text-black transition-all">Continue to Chat</a>
      </button>
      <button class="gradient-btn mt-6 w-40 h-10 rounded-xl transition-all" @click="goToChat">
          Go back to Chat
      </button>
      <p class="mt-6 text-green-500 font-bold text-lg">You might be asked to input a personal username for the meeting!</p>
    </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        const chatId = route.params.roomId;
        console.log(chatId);

        const goToChat = () => {
            router.go(-1)
        }

        return {chatId, goToChat}
    }
}
</script>

<style scoped>
    .main {
        min-height: 100vh;
    }
</style>