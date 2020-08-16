<template>
  <div class="container">
    <nav class="navbar">
      <div class="flex space-between items-center">
        <div class="navbar-left">
          <g-link :to="`/`" class="logo">
            <g-image src="~/assets/images/logo.png" width="32" height="32"/>
          </g-link>
        </div>
        <div class="navbar-right">
          <g-link class="item-menu" :to="`/`">home</g-link>
          <g-link class="item-menu" :to="`/project`">project</g-link>
          <g-link class="item-menu" :to="`/post`">blog</g-link>
          <g-link class="item-menu" :to="`/#contact`">contact</g-link>
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
    padding: 0 12px;
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