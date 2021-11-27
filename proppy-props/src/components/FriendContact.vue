<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    &nbsp;
    <button @click="toggleFavorite">Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phone", "email", "isFavorite"],
  //Less messy proptypes...
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      // can also drop a function in here instead of just a value
      default: false,
      //can also add a validator
      // validator: (value) => {
      //   return value === "1" || value === "0";
      // },
    },
  },
  emits: ["toggle-favorite"],
  //Another more detailed way
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("Id is missing");
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
      // Reassigning an item to avoid redeclaring a prop passed through
      // friendIsFav: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      //this.friendIsFav = !this.friendIsFav;
      //emit needs the function you wanna pass as well as any other arguments
      this.$emit("toggle-favorite", this.id);

      // if (this.friendIsFav === "1") {
      //   this.friendIsFav = "0";
      // } else {
      //   this.friendIsFav = "1";
      // }
    },
  },
};
</script>
