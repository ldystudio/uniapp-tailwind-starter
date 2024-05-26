<template>
    <view class="flex flex-col items-center justify-center gap-10">
        <image class="mt-40 size-24" src="/static/logo.png" />
        <view class="flex justify-center">
            <text class="text-xl text-blue-500">{{ title }}</text>
        </view>
        <uv-button
            type="primary"
            :text="'按下' + counter.count + '次'"
            @click="counter.increment"
            plain
        />
    </view>
</template>

<script setup lang="ts">
    import { ref } from "vue"

    import { useCounterStore } from "@/stores/counter"

    const title = ref("Hello Tailwind CSS")
    const counter = useCounterStore()
</script>
