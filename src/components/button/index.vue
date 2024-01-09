<template>
  <div>
    <button class="btn">
      <span>button</span>
    </button>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from "vue";
const props = defineProps({
  color: {
    type: String,
    default: "red",
  },
});
defineOptions({
    name:"po-button"
})
</script>
<style scoped >
.btn {
  padding: 10px;
  color:white;
  background-color: v-bind("props.color");
}
</style>