<template>
  <base-dialog v-if="showErr" title="Invalid Input" @close="toggleDialog">
    <template #body>
      <p>Please check all inputs and resubmit. No input can be left blank.</p>
    </template>
    <template #actions>
      <base-button @click="toggleDialog">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          rows="3"
          id="description"
          name="description"
          ref="descInput"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" name="link" ref="linkInput" />
      </div>
      <div><base-button type="submit">Add Resource</base-button></div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseDialog, BaseButton },
  inject: ['addResource'],
  data() {
    return {
      showErr: false,
    };
  },
  methods: {
    submitForm() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;
      //if check gatekeeper
      if (
        enteredTitle.trim() === '' ||
        enteredDesc.trim() === '' ||
        enteredLink.trim() === ''
      ) {
        //toggle error modal
        this.showErr = true;
        return;
      }

      //Running the injected method
      this.addResource(enteredTitle, enteredDesc, enteredLink);
    },
    toggleDialog() {
      this.showErr = false;
    },
  },
};
</script>


<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>