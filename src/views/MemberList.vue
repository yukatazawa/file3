<template>
    <div>
        <h2>メンバー一覧</h2>
        <div v-if="store.members.length === 0">読み込み中...</div>
        <div v-else>
            <div v-for="m in store.members" :key="m.login.uuid" style="margin:10px;">
                <img :src="m.picture.medium" />
                <p>{{ m.name.first }} {{ m.name.last }}</p>
                <button @click="store.addLike(m.login.uuid)">
                    いいね({{ store.likes[m.login.uuid] }})
                </button>
            </div>
            <router-link to="/confirm"><button>確認画面へ</button></router-link>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMemberStore } from '../stores/memberStore'

const store = useMemberStore()

onMounted(() => {
    if (store.members.length === 0) {
        store.fetchMembers()
    }
})
</script>