<template>
  <button
    class="bg-[#64CCC5] hover:bg-[#176B87] text-white px-5 py-2 m-4 rounded-md border-none"
    @click="centerDialogVisible = true"
  >
    <slot></slot>
  </button>
</template>
  
<script>
export default {
  props: ["centerDialogVisible"],
};
</script>
  