<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <!-- Gotcha won't work as Vue router chaches vs. destroying a component -->
    <router-link to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem,
  },
  data() {
    return {
      // Setting up my empty state
      teamName: '',
      members: [],

      // teamName: 'Test',
      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      // ],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      // const teamId = route.params.teamId;
      //Accessing the team in the array and then the members...
      const selectedTeam = this.teams.find((team) => team.id === teamId);

      const members = selectedTeam.members;

      const selectedMembers = [];

      //Getting full team member information from the users list passed through on the teams
      //Looping through the members arraay
      for (const member of members) {
        //Matching the member with the user.id
        const selectedUser = this.users.find((user) => user.id === member);
        //Adding this new information to my array above so I have just the objects for this group
        selectedMembers.push(selectedUser);
      }
      // Loading relevant info up into state
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  // accessing data before it's shown on the screen but once it's available
  created() {
    // this.$route.path; // /teams/teamId
    // Just get the parameters
    this.loadTeamMembers(this.teamId);
    //Query params are only accessable through this $route
    console.log(this.$route.query);
  },
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>