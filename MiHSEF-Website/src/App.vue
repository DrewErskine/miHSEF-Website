<script setup>
import Header from './components/Header.vue'
import SignUpModal from './components/SignUpModal.vue'
import PageContent from './components/PageContent.vue'
import ScrollToTop from './components/ScrollToTop.vue'
import Footer from './components/Footer.vue' // Assuming you've created a Footer component
</script>

<template>
  <div id="app">
    <Header />
    <SignUpModal />
    <div id="mainContent">
      <PageContent id="secondPage" title="Second Page Content" />
      <PageContent id="thirdPage" title="Third Page Content" />
      <PageContent id="fourthPage" title="Fourth Page Content" />
    </div>
    <ScrollToTop />
    <Footer />
  </div>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
