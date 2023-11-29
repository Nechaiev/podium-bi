// import {defineStore} from "pinia"
// import {ref} from "vue";
// import authStore from "@/stores/authStore.js"
// import { mockAuth } from "./authStore";

// function pushToLocalStorage(key, user) {
//     try {
//         const toJsonString = JSON.stringify(user)
//         localStorage.setItem(key, toJsonString)
//         return true;
//     } catch (error) {
//         console.error('Error save obj to localStorage:', error);
//         return false;
//     }
// }

// function pullFromLocalStorage(key) {
//     try {
//         const jsonString = localStorage.getItem(key);
//         if(jsonString){
//             const obj = JSON.parse(jsonString);
//             return obj;
//         }
//     } catch(error) {
//         console.error('error pull in localStorage:', error)
//     }
//     return null;
// }




// const useRegistrationStore = defineStore('newUser', ()=> { 
//     const isRegister = ref(false)

//     const setRegister = (register) => {
//         isRegister.value = register
//     }

//     const onRegister = async (form) => {
//         await new Promise((resolve, reject) => {
//             setTimeout(() => {
//               resolve(true) ;
//             }, 1000);
//         }) 
       
//         isRegister.value = true;
//      //   console.log(isRegister.value, form);
//         pushToLocalStorage(form.email, form)
//         // console.log("after push ", mockAuth);

//          const localStorageDate = pullFromLocalStorage(form.email);
//          console.log("after pull ", mockAuth);

//          mockAuth.push(localStorageDate);

//         // for (var i = 0; i < localStorage.length; i++) {
//         //     var key = localStorage.key(i);  
//         //     var value = localStorage.getItem(key);  
//         //     const storageDate = JSON.parse(value)
//         //     mockAuth.push(storageDate);  
//         // }
//         console.log(mockAuth);
       
//     }

    



//     // function pullFromLocalStorage(key) {
//     //     try {
//     //         const jsonString = localStorage.getItem(key);
//     //         if(jsonString){
//     //             const obj = JSON.parse(jsonString);
//     //             return obj;
//     //         }
//     //     } catch(error) {
//     //         console.error('error pull in localStorage:', error)
//     //     }
//     //     return null;
//     // }
//     // pushToLocalStorage('testObj', testObj)

//     // const pullObjectFromLocalStorage = pullFromLocalStorage('testObj');
//     // if(pullObjectFromLocalStorage) {
//     //     console.log('Получил данные из localStorage:', pullObjectFromLocalStorage);
//     // } else {
//     //     console.log('Не получил.');
//     // }

//     // mockAuth.push(pullObjectFromLocalStorage);

//     // console.log("mockAuth: ", mockAuth);

//     return {
//         isRegister, setRegister, onRegister
//     }
// })
 
// export default useRegistrationStore;






