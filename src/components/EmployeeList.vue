<template>
  <div>
    <div class="list-container">
      <EmployeeCard
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
      />
    </div>
    <p class="page-number">{{ page }} / {{ totalPages }}</p>
    <div class="pagination">
      <PaginationButton @click="prevPage" :disabled="page === 1"
        >Previous Page</PaginationButton
      >
      <PaginationButton @click="nextPage" :disabled="page === totalPages"
        >Next Page</PaginationButton
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import EmployeeCard from "@/components/EmployeeCard.vue";
import PaginationButton from "@/components/PaginationButton.vue";

export default {
  name: "EmployeeList",
  components: {
    EmployeeCard,
    PaginationButton,
  },
  data() {
    return {
      employees: [],
      page: 1,
      totalPages: 1,
    };
  },
  created() {
    this.fetchEmployees();
  },
  watch: {
    page() {
      this.fetchEmployees();
    },
  },
  methods: {
    async fetchEmployees() {
      try {
        const response = await axios.get(
          `https://reqres.in/api/users?page=${this.page}`
        );
        this.employees = response.data.data;
        this.totalPages = response.data.total_pages;
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
      }
    },
  },
};
</script>

<style scoped>
@import "@/styles/EmployeeList.css";
</style>
