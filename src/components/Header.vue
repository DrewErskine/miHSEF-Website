<template>
  <header class="bg-blue-900 p-4 text-center flex justify-between items-center text-white text-xl">
    <h1>My Vue App</h1>
    <nav>
      <ul class="flex">
        <li class="mr-4"><router-link to="/secondPage">Second Page</router-link></li>
        <li class="mr-4"><router-link to="/thirdPage">Third Page</router-link></li>
        <li><router-link to="/fourthPage">Fourth Page</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
/* Adjust styles as needed to ensure the header is prominent */
</style>
