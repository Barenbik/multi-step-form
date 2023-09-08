<template>
    <div class="p-4 bg-alabaster rounded-md">
        <div class="flex justify-center">
            <span class="text-sm font-medium mr-4 text-cool-gray" :class="{ 'text-marine-blue': !isYearly }">Monthly</span>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" v-model="isYearly">
                <div class="w-9 h-5 bg-marine-blue
                peer-focus:outline-none 
                rounded-full peer 
                peer-checked:after:translate-x-full 
                peer-checked:after:border-white 
                after:content-[''] 
                after:absolute 
                after:top-[2px] 
                after:left-[2px] 
                after:bg-white 
                after:border-gray-300 
                after:border 
                after:rounded-full 
                after:h-4 
                after:w-4 
                after:transition-all 
                peer-checked:bg-marine-blue">
                </div>
            </label>
            <span class="ml-4 text-sm font-medium text-cool-gray" :class="{ 'text-marine-blue': isYearly }">Yearly</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isYearly: false
        }
    }
}
</script>