<template>
  <li>
    <h2>{{ name }} {{ friendIsFav ? "(Favorite)" : "" }}</h2>
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
  data() {
    return {
      detailsAreVisible: false,
      // Reassigning an item to avoid redeclaring a prop passed through
      friendIsFav: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFav = !this.friendIsFav;

      // if (this.friendIsFav === "1") {
      //   this.friendIsFav = "0";
      // } else {
      //   this.friendIsFav = "1";
      // }
    },
  },
};
</script>
