<template>
<div class="wrapper">
  <div class="user">
    <h2 class="user__name">Leanne Graham</h2>
    <h3 class="user__username">username :Bret</h3>
    <span class="user__id">id: {{}}</span>
    <span class="user__phone">phone: {{}}</span>
    <span class="user__email">email: {{}}</span>
    <span class="user__website">website: {{}}</span>
  </div>
</div>

</template>

<style scoped>
.wrapper {
  position: absolute;
  top: 100px;
  right: 100px;
  border: 1px solid #c0c4ccc5;
  border-radius: 10px;
  padding: 20px;
}
.user {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
