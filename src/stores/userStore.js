import { defineStore } from "pinia";
import { computed, ref } from "vue";
import useAuthStore from "@/stores/authStore.js"

const getFullUserName = (user) => user?.firstName + ' ' + user?.lastName;

const useUserStore = defineStore('user',  ()=> {   //'user' unique id. Can't be the same
    const user = ref({name: ''});
    const getUserName = computed(()=> user.value.name);
    const authStore = useAuthStore()

    const fetchUser =()=> {
        console.log(authStore.isAuth === false);

        authStore.setAuth(true)            //case 1   (nice)

        // authStore.$path((state)=>{      //case 2
        //     state.isAuth = true 
        // })

        // authStore.$path({isAuth: true}) //case 3
    }

    return {
        user, getUserName, fetchUser
    }
})

// *Old case
// const useUserStore = defineStore('user',   {
//     state() {            //data --> state
//         return {
//             user: {name: 'Test'}
//         }
//     },
//     getters: {           //computed --> getters
//         getUserName() {  //hook
//             return this.user.name
//         }
//     },
//     actions: {           //metods --> state
//         fetchUser() {

//         }
//     }
// })

// const userStore = useUserStore();

// userStore.user === {name: 'Test'}
// userStore.getUserName === 'Test'

// userStore.fetchUser()