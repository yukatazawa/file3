<template>
    <div>
        <h2>結果画面</h2>
        <p>{{ store.resultMessage }}</p>
        <router-link to="/"><button>最初に戻る</button></router-link>
    </div>
</template>

<script setup>
import { useMemberStore } from '../stores/memberStore'

const store = useMemberStore()
</script>