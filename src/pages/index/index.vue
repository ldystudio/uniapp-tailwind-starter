<template>
    <view class="flex flex-col items-center justify-center gap-10">
        <!-- tailwindcss 动画 -->
        <image
            class="mt-40 size-24 duration-1000 animate-in fade-in zoom-in"
            src="/static/logo.png"
        />
        <view class="flex justify-center">
            <!-- tailwindcss 条件渲染 -->
            <text :class="cn('text-xl', counter.count % 2 === 0 && 'text-blue-500')">
                {{ title }}
            </text>
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
    import { cn } from "@/utils"

    const title = ref("Hello Tailwind CSS")
    const counter = useCounterStore()
</script>
