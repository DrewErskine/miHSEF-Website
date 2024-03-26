<template>
  <a href="#header" class="scroll-to-top" @click.prevent="scrollToTop" title="Scroll to Top">
    <!-- Scroll to top icon -->
  </a>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>
