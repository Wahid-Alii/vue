<template>
  <header>
    <div class="logo">
      <img alt="Vue logo" src="../../src/assets/logo.svg" height="40" />
    </div>
    <div class="links">
      <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
      </ul>
    </div>
  </header>
</template>

<script>
</script>

<style scoped>
header {
  display: grid;
  grid-template-columns: auto auto;
  border-bottom: 2px solid #e3ebe7;
  align-items: center;
}

.logo{
    margin: 10px 10px 10px 20px;
}

ul {
  display: flex;
  list-style-type: none;
  gap: 10px;
  float: right;
  margin-right: 20px;
}
</style>