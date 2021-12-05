<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps.anotherItem }}</p>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import UserInfo from "./components/UserInfo.vue";
import BadgeList from "./components/BadgeList.vue";
import CourseGoals from "./components/CourseGoals.vue";

export default {
  //Localizing components
  components: {
    TheHeader,
    UserInfo,
    BadgeList,
    CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Bently Bentleson",
        description: "Mac Daddy Supreme",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>