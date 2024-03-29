<template>
  <div class="p-4">
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <button @click="closeModal" class="absolute top-0 right-0 m-4">Close</button>

      </div>
    </div>
    
    <button @click="openModal" class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Sign Up</button>

    <form @submit.prevent="validateForm" class="mt-4">
      <input type="email" v-model="email" class="border-2 border-gray-300 rounded p-2 w-full" />
      <button type="submit" class="mt-2 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700">Submit</button>
    </form>


    <div v-if="currentStep === 1" class="mt-4">
      Step 1 Content
      <button @click="nextStep" class="mt-2 py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-700">Next</button>
    </div>
    <div v-if="currentStep === 2" class="mt-4">
      Step 2 Content
      <button @click="previousStep" class="mt-2 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      email: '',
      currentStep: 1,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    validateForm() {
      if (this.email === '') {
        alert('Please enter a valid email address.');
      }
    },
    nextStep() {
      this.currentStep += 1;
    },
    previousStep() {
      this.currentStep = Math.max(1, this.currentStep - 1);
    },
  },
};
</script>

<style scoped>
.model-content {
  text-align: center;
}
.model {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  width: 80%;
  max-width: 400px;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #aaaaaa;
}

.close:hover {
  color: #555555;
}
</style>

