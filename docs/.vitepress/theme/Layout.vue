<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #sidebar-top>
      <div class="sidebar-top">
        <h3>Using the  Base Layout! ✏️</h3>
        <p>Template checking ✨</p>
      </div>
     
    </template>
  </Layout>
</template>

<style scoped>
  .sidebar-top{
    padding: 3%;
  }
</style>