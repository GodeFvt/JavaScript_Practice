<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'sm'
  },
  variant: {
    validator(value) {
      return ['flat', 'outlined', 'tonal'].includes(value)
    },
    default: 'outlined'
  }

   
})
</script>

<template>
  <div
    class="flex flex-col p-3"
    :class="[
      size === 'sm' ? 'w-44 h-36' : size === 'md' ? 'w-60 h-52' : 'w-80 h-72',
      variant === 'outlined'
        ? 'border border-slate-300'
        : variant === 'tonal'
        ? 'bg-slate-50'
        : 'shadow-md'
    ]"
  >
    <div
      class="font-bold"
      :class="
        size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'
      "
    >
      <slot name="title">Untitled</slot>
    </div>
    <div
      class="font-semibold"
      :class="size === 'sm' ? 'text-md' : size === 'md' ? 'text-lg' : 'text-xl'"
    >
      <slot name="subtitle">replace your subtitle here</slot>
    </div>
    <div
      class="pt-2"
      :class="size === 'sm' ? 'text-sm' : size === 'md' ? 'text-md' : 'text-lg'"
    >
      <slot name="content">
        Lorem ipsum dolor sit amet elit. Fugit consectetur eaque voluptatem
        omnis aspernatur, accusamus unde repellat dolorum, necessitatibus quo
        suscipit qui neque cupiditate atque ratione sed aliquid, blanditiis
        tempore! qui neque cupiditate atqu
      </slot>
    </div>
    <div class="flex justify-end gap-3 pt-3">
      <slot name="action"> </slot>
    </div>
  </div>
</template>

<style scoped></style>
