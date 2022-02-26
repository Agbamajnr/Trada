<template>
    <div class="chat h-full w-full col-flex relative ">
        <div class="top h-16 row-flex items-center justify-between px-3">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" id="view-grid" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            
            <div class="roomDetails text-center" v-if="roomInfo.roomMain.sellerRoom.name == $store.state.user[0].fname">
                <p class="roomTitle font-bold">{{roomInfo.roomMain.buyerRoom.name}}</p>
                <p class="roomCategory text-xs font-bold">{{roomInfo.roomMain.buyerRoom.category}}</p>
            </div>
            <div class="roomDetails text-center" v-else>
                <p class="roomTitle font-semibold">{{roomInfo.roomMain.sellerRoom.name}}</p>
                <p class="roomTitle font-lg">{{roomInfo.roomMain.sellerRoom.email}}</p>
            </div>
            <div class="others row-flex items-center justify-between w-16">
                <a :href="'/chat/videochat/' + roomInfo.id"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> </a>
            </div>
        </div>

        <div class="w-full grid-center mt-4">
            <p class="text-xs text-center font-semibold w-3/5" style=" color: #F8C616;">This chat is protected. Do well to create your order by clicking the cart icon or call your vendor with the call icon</p>
        </div>

        <div class="messages mb-3 w-full" id="messages" ref="chatDiv">
            <p v-if="messages.length < 1" class="text-center mt-6">There are no chats in this room</p>
            <div v-for="mesg in messages" :key="mesg" class="col-flex items-center mt-5 px-6 relative w-full">
                <div class="w-full">
                    <div class="msg col-flex my-msg float-right" v-if="mesg.username === user.fname">
                        <h1>{{mesg.username}}</h1>
                        <p>{{mesg.message}}</p>
                    </div>
                </div>
                
                <div class="w-full">
                    <div class="msg col-flex float-left other-msg" v-if="mesg.username !== user.fname">
                        <h3 class="font-bold">{{mesg.username}}</h3>
                        <p>{{mesg.message}}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="chatbox w-full h-14 bg-gray-600 rounded-lg row-flex items-center justify-between">
            <div class="left row-flex pl-6">
                <svg fill="none" viewBox="0 0 24 24" stroke="#adadad" id="document-text" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <svg fill="none" viewBox="0 0 24 24" stroke="#adadad" class="w-7 h-7 pl-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div class="message h-4/5 w-3/5">
                <form class="h-full" @submit.prevent="sendMsg">
                    <input type="text" name="message" id="message" placeholder="Reply..." v-model="msg" class="w-full bg-gray-500 h-full rounded-2xl pl-3">
                </form>
            </div>
            <div class="right pr-6">
                <svg @click="sendMsg" fill="none" viewBox="0 0 24 24" stroke="white" class="cursor-pointer w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </div>
        </div>
        
    </div>
  
</template>

<script>
import { inject, onMounted, ref, reactive, onUpdated, onBeforeUpdate, watch} from 'vue';
import axios from "axios"
import { useRouter, useRoute } from 'vue-router'
import Pusher from 'pusher-js';

export default {
    name: "Chatbox",
    props: ["roomInfo"],
    setup(props, ctx) {
        
        const roomInfo = ref(props.roomInfo);
        const user = inject('userDetails')
        const messages = ref([])

        const getMsg = async (room) => {
            room.roomChats.forEach(async chat => {
                const fetchedMsg = await axios.get('https://trada.vercel.app/vapi/chatting/chat/' + chat);

                const data = {
                    username: fetchedMsg.data.username,
                    message: fetchedMsg.data.msg
                }

                messages.value.push(data);



            })
        }


        watch(roomInfo.value, (currentValue) => {
            messages.value = [];
             getMsg(currentValue);
        })


        const msg = ref("")

        onMounted(() => {
            const pusher = new Pusher('ffee3717072b57ebe156', {
            cluster: 'mt1'
            });

            const channel = pusher.subscribe('chat');
            channel.bind('message', (data) => {
                if (data.username !== user.value.fname && data.username !== roomInfo.value.roomMain.sellerRoom.name) {
                } else {
                    messages.value.push(data);
                    }
            });


            roomInfo.value.roomChats.forEach(async chat => {
                const fetchedMsg = await axios.get('https://trada.vercel.app/api/chatting/chat/' + chat);

                const data = {
                    username: fetchedMsg.data.username,
                    message: fetchedMsg.data.msg
                }

                messages.value.push(data);



            })

        })
        


        const sendMsg = async () => {
            await fetch('https://trada.vercel.app/api/chatting/message/' + roomInfo.value.id, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                username: user.value.fname,
                msg: msg.value
                })
            })

            msg.value = '';
        }





        return {roomInfo, msg, messages, sendMsg, user}
    }
}
</script>

<style scoped>
    #messages {
        overflow-y: auto;
        height: 350px;
        scroll-behavior: unset;
    }
    #messages::-webkit-scrollbar {
        background-color: black !important;
        width: 8px;
        border-radius: 8px;
        
    }
    #messages::-webkit-scrollbar-thumb {
        background-color: #F8C616;
        border-radius: 8px;
    }
    .msg {
        border-radius: 10px;
    }
    .my-msg {
        float: right !important;
        background-color: #68571B;
        max-width: max-content;
        padding: 8px;
        max-height: fit-content;
        color: white;
    }
    .other-msg {
        float: left !important;
        background-color: #333333;
        max-width: max-content;
        padding: 5px;
        max-height: fit-content;
        color: white;
    }
    .chat .top {
        border-bottom: 0.01px ridge #745b0d;
    }
    .chatRooms::-webkit-scrollbar {
        background-color: black !important;
        width: 8px;
        cursor: pointer;
        border-radius: 8px;
        
    }
    .chatRooms::-webkit-scrollbar-thumb {
        background-color: #F8C616;
        border-radius: 8px;
        cursor: pointer;
    }
</style>
