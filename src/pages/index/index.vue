<template>
    <view class="flex flex-col items-center justify-center gap-10">
        <!-- tailwindcss 动画 -->
        <image
            class="mt-20 size-24 duration-1000 animate-in fade-in zoom-in"
            src="/static/logo.png"
        />
        <!-- tailwindcss 条件渲染 -->
        <view
            :class="
                cn(
                    'flex flex-row items-center gap-2 text-xl',
                    counter.count % 2 === 0 && 'text-blue-500'
                )
            "
        >
            <Icon icon="streamline-emojis:rocket" height="24" :inline="true" />
            {{ title }}
        </view>
        <uv-button
            type="primary"
            :text="'按下' + counter.count + '次'"
            @click="counter.increment"
            plain
        />
        <view class="flex flex-row"> 123 </view>
        <view class="w-full text-center">
            <uv-swiper
                :list="list"
                previousMargin="30"
                nextMargin="30"
                circular
                radius="5"
                bgColor="#ffffff"
            >
            </uv-swiper>
        </view>
        <scroll-view scroll-x class="whitespace-nowrap border-2 border-gray-300">
            <view class="tw-box" v-for="i in 20" :key="i">box-{{ i }}</view>
        </scroll-view>

        <navigator
            url="/pages/demo/demo"
            open-type="navigate"
            hover-class="navigator-hover"
        >
            <uv-button>跳转到新页面</uv-button>
        </navigator>
    </view>
</template>

<script setup lang="ts">
    import { ref } from "vue"
    import { Icon } from "@iconify/vue"

    import { useCounterStore } from "@/stores/counter"
    import { cn } from "@/utils"

    const title = ref("Hello Tailwind CSS")
    const counter = useCounterStore()
    const list = ref([
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper1.png"
    ])
</script>

<style scoped>
    .tw-box {
        @apply mx-2 inline-flex size-24 items-center justify-center bg-green-300;
    }
</style>
