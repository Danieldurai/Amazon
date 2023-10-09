// DeleteButtonRenderer.vue
<template>
  <button @click="onDeleteClick"><i class="fa fa-trash" aria-hidden="true"></i></button>
</template>

<script>
export default {
  props: ['onDeleteClick'],
};
</script>