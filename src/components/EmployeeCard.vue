<template>
  <div class="employee-card">
    <div class="profile-pic">
      <img :src="employee.avatar" alt="Profile" />
    </div>
    <p>{{ fullName }}</p>
    <a :href="`mailto:${employee.email}`">Contact</a>
  </div>
</template>

<script>
export default {
  name: "EmployeeCard",
  props: {
    employee: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fullName() {
      return `${this.employee.first_name} ${this.employee.last_name}`;
    },
  },
};
</script>

<style scoped>
@import "@/Styles/EmployeeCard.css";
</style>
