<template>
  <div id="app">
    <Navbar />

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <p>
        Made with Love by
        <a href="/">Sri Aspari</a>
      </p>
      <p>
        Source code available on
        <a href="//github.com/siarie">Github</a>
      </p>
    </footer>
    <ToggleTheme />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import ToggleTheme from "~/components/ToggleTheme";

export default {
  props: {
    showLogo: { default: true },
  },
  components: {
    Navbar,
    ToggleTheme,
  },
};
</script>

<style lang="scss">
#app {
  min-height: calc(100vh - 32px);
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  margin: 0 auto;
  padding: 1.5vw 15px 0;
  width: 100%;
}

.footer {
  text-align: center;
  font-size: 0.8em;
  margin-top: 32px;

  p {
    margin: 0;
    line-height: 1.5;
  }
}
</style>
