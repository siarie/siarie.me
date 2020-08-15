<template>
  <div class="col mobile:12 tablet:6 desktop:6">
    <div class="project-card">
      <g-link class="project-card--link" :to="project.path" />
      <g-image class="project-card--preview" alt="Project Preview" :src="project.screenshot" />
      <div class="project-card--overlay">
        <h1 class="project-card--label">Web Design</h1>
        <h2 class="project-card--title">{{ project.title }}</h2>
        <p class="project-card--description">{{ project.description }}</p>
        <div class="project-card--tags">
          <li>Gulp.js</li>
          <li>HTML</li>
          <li>CSS/SCSS</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style lang="scss">
.project-card {
  border-radius: var(--radius);
  display: flex;
  overflow: hidden;
  width: 100%;
  height: auto;
  box-shadow: var(--shadow);
  position: relative;

  &--label {
    font-size: 0.759em;
    margin: 0;
  }

  &--title {
    margin: 0;
    font-size: 2em;
  }

  &--description {
    margin: 0;
    margin-top: 16px;
    font-size: 1em;
    flex: 1;
  }

  &--tags {
    li {
      display: inline-block;
      list-style: none;
      color: var(--primary-color);
      border-radius: 16px;
      &:not(:first-child) {
        margin-left: 8px;
      }
    }
  }

  &--overlay {
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    background: var(--bg-content-color);
    height: 60%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 16px;
    z-index: 1;
    overflow: hidden;
    transform: translateY(100%);
    transition: transform 0.2s;
  }

  &--link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    &:hover ~ .project-card--overlay {
      transform: translateY(0);
    }
  }
}
</style>