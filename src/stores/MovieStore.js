import {defineStore} from 'pinia' 

export const useMovieStore = defineStore('movieStore', {
    state: () => ({
        obj: [
            {
                id: 1,
                data: '1992',
                isLogin: true,
            },     
        ]
    })
})