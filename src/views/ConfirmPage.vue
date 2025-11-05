<template>
    <div>
        <h2>確認画面</h2>
        <P>合計いいね数: {{ store.totalLikes }}</p>
        <div v-for="m in store.members" :key="m.login.uuid">
            {{ m.name.first }}: {{ store.likes[m.login.uuid] }} いいね
        </div>
        <p>送信しますか？</p>
        <button @click="send(true)">はい</button>
        <button @click="send(false)">いいえ</button>
    </div>
</template>

<script setup>
import { useMemberStore } from '../stores/memberStore'
import { useRouter } from 'vue-router'

const store = useMemberStore()
const router = useRouter()

function send(ok) {
    store.sendResult(ok)
    router.push('/result')
}
</script>
