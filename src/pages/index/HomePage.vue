<template>
    <view class="flex flex-col items-center justify-center">
        <image
            class="mx-auto mb-[50rpx] mt-[200rpx] size-[200rpx]"
            src="/static/logo.png"
        />
        <view class="flex justify-center">
            <text class="text-[36px] text-[#8f8f94]">{{ title }}</text>
        </view>
        <view class="flex h-[100px] w-full items-center justify-center bg-red-500">
            <text>Hello Tailwind CSS</text>
        </view>
        <view class="mt-10 w-20 bg-green-500">
            <uv-button type="primary" text="uv-ui按钮" />
        </view>
        <view class="h-10 w-full bg-slate-600">aaaaaaaaaaaaaaaaaa</view>
    </view>
</template>

<script setup lang="ts">
    import { ref } from "vue"

    const title = ref("Hello")
</script>
