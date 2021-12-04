<template>
  <section>
    <form @submit.prevent="submitData">
      <div>
        <input
          type="text"
          name="userName"
          placeholder="Your Name"
          v-model="enteredName"
        />
      </div>
      <div>
        <input
          type="text"
          name="userAge"
          placeholder="Your Age"
          v-model="enteredAge"
        />
      </div>
      <button>Send It!</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["set-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("set-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>

