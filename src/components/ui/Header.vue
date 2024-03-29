<template>
  <header class="header">
    <nav class="navbar">
      <a href="#section-one" class="nav-link">Section 1</a>
      <a href="#section-two" class="nav-link">Section 2</a>
      <a href="#section-three" class="nav-link">Section 3</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  background-color: #ffffff;
  padding: 1rem;
  z-index: 1000;
}

.navbar {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>

