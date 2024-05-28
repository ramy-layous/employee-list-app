<template>
  <div>
    <ul>
      <li v-for="employee in employees" :key="employee.id">
        <img :src="employee.avatar" alt="Profile Picture" class="profile-pic" />
        <span>{{ employee.first_name }} {{ employee.last_name }}</span>
        <a :href="'mailto:' + employee.email">Contact</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      employees: [],
    };
  },
  created() {
    this.fetchEmployees();
  },
  methods: {
    async fetchEmployees() {
      try {
        const response = await axios.get('https://reqres.in/api/users');
        this.employees = response.data.data;
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    },
  },
};
</script>

<style scoped>
.profile-pic {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
</style>
