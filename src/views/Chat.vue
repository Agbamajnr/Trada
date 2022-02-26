<template>
  <div class="main grid place-items-center py-10 bg-black w-full relative">
      <PacemanLoader v-if="loading === true"/>
      <div class="body flex flex-col w-4/5 h-full" v-else>
        <Nav @fireNav="showNav"/>

        <div class="top-tab flex flex-row items-center justify-end text-xs mt-7">
            <div style="background: rgba(48, 211, 139, 0.1); color: #F8C616;" class="rounded h-10 w-24 grid place-items-center font-semibold">Market</div>
        </div>


        <div class="main-chat w-full h-full row-flex items-center gap-x-4 mt-6">
            <div class="chatRooms h-full w-2/5 w-full rounded p-5 overflow-y-auto">
                <!--search tab -->
                <div class="search-input mt-4 relative grid-center">
                    <input type="text" class="bg-gray-900 h-12 w-full rounded-lg pl-9" placeholder="Search vendors">
                    <svg class="w-4 h-4 absolute top-4 left-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>

                <p class="room-fallback" v-if="rooms.length < 1">There are no chat rooms here</p>
                <div class="rooms mt-3 col-flex gap-y-3" v-else  v-for="room in rooms" :key="room" @click="loadRoom(room)">
                    <div class="room row-flex gap-x-4" v-if="room.roomDetails.roomName.sellerRoom.name === user.fname">
                        <img :src="room.roomDetails.roomName.buyerRoom.img" alt="" class="logo rounded w-12 h-12">
                        <div class="details col-flex">
                            <p class="roomTitle font-bold">{{room.roomDetails.roomName.buyerRoom.name}}</p>

                            <p class="roomCategory text-xs font-bold">{{room.roomDetails.roomName.buyerRoom.category}}</p>
                        </div>
                    </div>
                    <div class="room row-flex gap-x-4" v-else>
                        <div class="details col-flex">
                            <p class="roomTitle font-bold">{{room.roomDetails.roomName.sellerRoom.name}}</p>

                            <p class="roomCategory text-xs font-bold">{{room.roomDetails.roomName.sellerRoom.email}}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div v-if="roomInfo.roomMain.buyerRoom || roomInfo.roomMain.sellerRoom" class=" w-full rounded-lg h-full chatRoom">
                <ChatBox :roomInfo="roomInfo" v-show="roomChange"/>
            </div>
            <div class="grid-center h-full w-full rounded-lg" v-if="!roomInfo.roomMain.buyerRoom || !roomInfo.roomMain.sellerRoom">
                <h1 class="font-bold text-2xl">Start a chat or select a chat room</h1>
            </div>
        </div>
    </div>

      <Nav2 class="fixed top-0 min-w-screen min-h-screen" ref="navShow" style="display: none !important;"/>

  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Nav2 from "../components/NavShow.vue";

import ChatBox from "../components/ChatBox.vue";
import PacemanLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from "axios"
import {reactive, ref, provide} from 'vue';
export default {
    components: {Nav, Nav2, ChatBox, PacemanLoader},

    setup(){
        const loading = ref(true);
        const user = ref('')
        const rooms = ref([])
        const roomChange = ref(false)
        const navShow = ref();

        const roomInfo = reactive({
            id: '',
            roomMain: [],
            roomChats: []
        })

        const showNav = () => {
            navShow._value.main.style.display = 'block';
        }

        const getUser = async () => {
            const res = await axios.get('http://localhost:8080/api/auth/user', { withCredentials: true })
            user.value = res.data;

            let chatRooms = res.data.chatRooms;
            chatRooms.forEach(async roomId => {
                const response = await axios.get('http://localhost:8080/api/chatting/room/' + roomId)

                rooms.value.push({roomDetails: response.data})
            })

      }

      const loadRoom = async (room) => {
          roomInfo.id = room.roomDetails._id
          roomInfo.roomMain = room.roomDetails.roomName
          roomInfo.roomChats = room.roomDetails.roomChats

          roomChange.value = true;
      }

      getUser();

      setTimeout(() => {
            loading.value = false;
        }, 700);

        setTimeout(() => {
            roomChange.value = false;
        }, 1000);

        provide('roomData', roomInfo)
        provide('userDetails', user)

      return {rooms, roomInfo, loadRoom, loading, roomChange, user, showNav, navShow}
        
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
    .main .body .top-tab div {
        margin-left: 12px;
    }


    @media screen and (max-width: 640px) {
        .body {
            width: 97% !important;
        }
        .main-chat {
            flex-direction: column !important;
        }
        .chatRooms {
            width: 100% !important
        }
        .room-fallback {
            display: none !important;
        }
    }
    .search-input input::placeholder {
        font-size: 12px !important;
        font-weight: 700 !important;
    }
    .main-chat {
        height: 500px;
    }
    .main-chat > div  {
        background-color: #1C1C1C;
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

    .rooms .room {
        padding: 16px !important;
        border-radius: 12px !important;
    }

    .rooms .room:hover {
        background-color: #666666;
        cursor: pointer;
    }
</style>