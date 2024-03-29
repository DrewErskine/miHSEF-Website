<template>
  <form class="space-y-6 bg-white p-6 rounded-lg shadow-md">
    <label for="email" class="block text-secondary font-bold">Email:</label>
    <input type="email" id="email" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary" />

    <label for="password" class="block text-secondary font-bold">Password:</label>
    <input type="password" id="password" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary" />

    <button type="submit" class="w-full bg-primary hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-300">
      Sign Up
    </button>
  </form>
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
