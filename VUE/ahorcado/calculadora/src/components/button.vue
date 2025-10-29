<script setup>
let props = defineProps({
  ContentButton: {
    require: true,
    type: String
  }
});
</script>

<template>
  <div>
    <button>{{ props.ContentButton }}</button>
  </div>
</template>

<style>
button {
  padding: 17px;
}
</style>