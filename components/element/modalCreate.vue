<template>
  <button
    class="bg-[#64CCC5] hover:bg-[#176B87] text-white px-5 py-2 m-4 rounded-md border-none"
    @click="centerDialogVisible = true"
  >
    <slot name="button"></slot>
  </button>

  <el-dialog v-model="centerDialogVisible" width="70%" align-center>
    <template v-slot:title> <slot name="title"></slot> </template>
    <form action="" method="post">
      <slot name="form"></slot>
      <div class="flex justify-end">
        <button
          type="button"
          @click="centerDialogVisible = false"
          class="bg-transparent mx-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Tutup
        </button>
        <button
          type="submit"
          class="bg-blue-500 mx-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Simpan
        </button>
      </div>
    </form>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const centerDialogVisible = ref(false);
</script>
  <style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
  