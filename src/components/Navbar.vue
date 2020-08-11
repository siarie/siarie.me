<template>
  <div class="container">
    <nav class="navbar">
      <div class="flex space-between items-center">
        <div class="navbar-left">
          <a href="/" class="logo">siarie</a>
        </div>
        <div class="navbar-right">
          <a href="#" class="item-menu">home</a>
          <a href="#project" class="item-menu">project</a>
          <a href="#posts" class="item-menu">blog</a>
          <a href="#contact" class="item-menu">contact</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
.navbar {
  width: 100%;
  background-color: var(--bg-content-color);
  font-size: 16px;
  border-radius: calc(var(--radius) / 2);
  overflow: hidden;
  box-shadow: var(--shadow);

  a {
    text-decoration: none;
    padding: 12px;
    display: inline-block;
  }

  .logo {
    font-weight: 700;
    color: var(--primary-color);
    &:hover {
      color: var(--body-color);
      text-decoration: none;
    }
  }

  .item-menu {
    color: var(--primary-color);
    font-weight: 600;
    &:hover {
      color: #e9e9fb;
      opacity: 1;
      background-color: var(--primary-color);
      text-decoration: none;
    }
  }
}
</style>