<template>
  <div>
    <div class="list-container">
      <EmployeeCard
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import EmployeeCard from "./EmployeeCard.vue";

export default {
  components: {
    EmployeeCard,
  },
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
        const response = await axios.get("https://reqres.in/api/users");
        this.employees = response.data.data;
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    },
  },
};
</script>

<style scoped>
@import '@/styles/EmployeeList.css';
</style>
