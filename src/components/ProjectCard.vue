<template>
  <div class="col mobile:12 tablet:6 desktop:6">
    <div class="card card-project">
      <g-image class="card-project--preview" alt="Project Preview" :src="project.screenshot" />
      <div class="card-project--overlay">
        <span class="card-project--label">Web Design</span>
        <g-link class="card-project--title" :to="project.path">{{ project.title }}</g-link>
        <p class="card-project--description">{{ project.description }}</p>
        <div class="card-project--tags">
          <li v-for="tc in project.tech" :key="tc.id"> <g-link :to="tc.path">{{ tc.title }}</g-link></li>
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