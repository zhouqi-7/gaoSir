<template>
  <nav class="breadcrumb">
    <div class="container">
      <div class="breadcrumb-content">
        <span>现在位置:</span>
        <router-link to="/">首页</router-link>
        <template v-for="(item, index) in items" :key="index">
          <span>&gt;</span>
          <router-link v-if="item.path" :to="item.path">{{ item.name }}</router-link>
          <span v-else>{{ item.name }}</span>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped>
.breadcrumb {
  background: #f5f5f5;
  padding: 12px 0;
  border-bottom: 1px solid #e0e0e0;
}

.breadcrumb-content {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;

  span:first-child {
    color: #999;
  }

  a {
    color: #666;

    &:hover {
      color: #1565c0;
    }
  }
}
</style>
