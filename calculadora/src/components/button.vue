<script setup>
let props = defineProps({
  textButton:{
    required:true,
    type:String
  }
});
</script>

<template>
<div>
  <button>{{props.textButton}}</button>
</div>
</template>

<style scoped>

</style>