<template>
  <div>
    <Header />
    <PageContent />
    <Footer />
  </div>
</template>

<script>
// Import UI components
import Header from '../components/ui/Header.vue';
import PageContent from '../components/ui/PageContent.vue';
import Footer from '../components/ui/Footer.vue';

export default {
  components: {
    Header,
    PageContent,
    Footer,
  },
};
</script>

<style>

</style>
