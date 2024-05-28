<template>
  <div class="container">
    <h1>Our Employees</h1>
    <EmployeeList />
  </div>
</template>

<script>
import EmployeeList from '@/components/EmployeeList.vue';

export default {
  name: 'App',
  components: {
    EmployeeList
  }
};
</script>

<style scoped>
@import '@/assets/css/index.css';
</style>
