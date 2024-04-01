<template>
  <div id="app">
    <!-- Navigation bar -->
    <nav class="navbar">
      <router-link to="/" class="navbar-brand">MyApp</router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/signup" class="nav-link">Sign Up</router-link>
        </li>
      </ul>
    </nav>

    <!-- Main content -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
  /* General styling */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
  }

  .navbar-brand,
  .nav-link {
    color: #fff;
    text-decoration: none;
  }

  .navbar-nav {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  .nav-item {
    margin-left: 1rem;
  }

  /* Active link styling */
  .router-link-active {
    font-weight: bold;
  }
</style>
