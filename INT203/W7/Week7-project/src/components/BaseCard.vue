<script setup>
const props = defineProps({
  size: { type: String, default: "sm" },
  variant: { type: String, default: "outline" },
});
function stlyeClass(size, variant) {
  let style = "";

  switch (size) {
    case "sm":
      style = "w-44 h-36";
      break;
    case "md":
      style = "w-60 h-52";
      break;
    case "lg":
      style = "w-80 h-72";
      break;
    default:
      style = "w-80 h-72";
      break;
  }

  switch (variant) {
    case "outline":
      style += " border border-slate-300";
      break;
    case "tonal":
      style += " border-slate-50";
      break;
    case "flat":
      style += " shadow-md";
      break;
    default:
      style += " shadow-md";
      break;
  }
  return style;
}
</script>

<template>
  <div
    class="flex flex-col rounded-lg bg-gray-100 p-6 h-full"
    :class="stlyeClass(size, variant)"
  >
    <div class="flex items-center">
      <div>
        <h5 class="mb-2 text-xl font-medium leading-tight">
          <slot name="title"> Component </slot>
        </h5>
        <p class="font-medium leading-tight">
          <slot name="subtitle">Play and Learn</slot>
        </p>
      </div>
    </div>
    <div class="flex mb-6 mt-4">
      <p class="text-base">
        <slot name="content"></slot>
      </p>
    </div>
    <div class="flex justify-end gap-3 pt-3">
      <slot name="action"
        ><button
          type="button"
          class="inline-block rounded bg-primary px-2 pb-2 pt-2.5 text-xs font-medium uppercase text-white"
        >
          Button
        </button></slot
      >
    </div>
  </div>
</template>

<style scoped></style>
