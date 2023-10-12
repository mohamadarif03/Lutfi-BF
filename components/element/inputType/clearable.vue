<template>
  <el-input v-model="input" clearable @input="handleInput">
    <template #prefix>
      <span class="placeholder" v-if="!input"><slot name="placeholder"></slot></span>
    </template>
  </el-input>
</template>
  
<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const input = ref("");

    const handleInput = () => {
      // Tidak perlu mengganti parameter value
    };

    return {
      input,
      handleInput,
    };
  },
};
</script>
  