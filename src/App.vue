<template>
  <div class="main-container">
    <h1>Our Employees</h1>
    <EmployeeList />
  </div>
</template>

<script>
import EmployeeList from '@/components/EmployeeList.vue';

export default {
  name: 'App',
  components: {
    EmployeeList,
  },
};
</script>

<style scoped>
@import './styles/App.css';
</style>