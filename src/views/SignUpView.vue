<template>
  <div class="sign-up-container">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" v-model="formData.email" type="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" v-model="formData.password" type="password" required>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    handleSubmit(){

      console.log(this.formData);
    },
  },
};
</script>

<style>
.sign-up-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}
</style>
