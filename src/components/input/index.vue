<template>
  <div class="input_box">
    <input :type="type" class="input_" />
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from "vue";
defineProps({
  type: {
    type: String,
    default: "text",
  },
});
defineOptions({
    name:"po-input"
})
</script>
<style scoped>
  input{
    border: 1px solid #000;
  }

</style>