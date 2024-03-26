<template>
    <div :id="id" class="container mx-auto flex flex-col items-center justify-center min-h-screen">
      {{ content }}
    </div>
</template>
  
<script>
  export default {
    name: 'PageContent',
    props: {
      id: String,
      content: String
    }
  };
</script>
  
<style scoped>
  /* Scoped styles for PageContent */
</style>
  