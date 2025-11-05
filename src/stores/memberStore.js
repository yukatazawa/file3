import { defineStore } from 'pinia'
import axios from 'axios'

export const useMemberStore = defineStore('memberStore', {
    state: () => ({
        members:[],
        likes:[],
        resultMessage:''
    }),

    getters: {
        totalLikes: (state) => Object.values(state.likes).reduce((a, b) => a + b, 0)
    },

    actions: {
        async fetchMembers() {
            const res = await axios.get('https://randomuser.me/api/?results=3')
            this.members = res.data.results
            this.likes = {}
            res.data.results.forEach(m => {
                this.likes[m.login.uuid] = 0
            })
        },
        addLike(id) {
            this.likes[id]++
        },
        sendResult(ok) {
            this.resultMessage = ok ? '送信しました!' : '送信を取り消しました!'

            if (ok) {
                setTimeout(() => {
                    this.fetchMembers()
                    this.resultMessage = ''
                }, 1000)
            }
        }
    }
})