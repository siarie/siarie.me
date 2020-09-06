<template>
  <div class="card" style="margin-top: 32px;">
    <div class="card-header">
      Technology that I use or learning on
    </div>
    <div class="card-body">
      <div class="row" v-for="(skills, key ) in resume.skills" :key="skills.key">
        <div class="col mobile:4 tablet:3 desktop:2">
          <div class="capitalize key">{{ key }}</div>
        </div>
        <div class="col mobile:8 tablet:9 desktop:10">
          <span class="skill" v-for="skill in skills" :key="skill">{{ skill }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resume from "~/data/resume.json";
export default {
  data() {
    return {
      resume: resume,
    };
  },
};
</script>

<style scoped>
.col {
  padding-bottom: 8px;
}

.key::before {
  content: '\00BB';
  display: inline-block;
  margin-right: 8px;
  color: var(--primary-color);
}

.skill:not(:last-child):after {
  content: ', ';
}
</style>>
