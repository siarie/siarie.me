<template>
  <div class="author">
    <div class="author-image-wrapper">
      <g-image
        alt="Author image"
        class="author-image"
        src="~/assets/images/author.png"
        width="250"
        blur="5"
      />
    </div>
    <div class="author-info">
      <div class="author-name">{{ resume.name }}</div>
      <div class="author-title">{{ resume.title }}</div>
      <div class="author-intro" v-html="resume.bio" />
      <a :href="`mailto:${resume.email}`" class="button button-large button-primary">Get In Touch</a>
      <a href="#" class="button button-large button-outline">Resume</a>
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

<style lang="scss">
.author {
  background: var(--bg-content-color);
  padding: 32px;
  border-radius: var(--radius);
  display: flex;
  box-shadow: var(--shadow);
  @media (min-width: 360px) and (max-width: 720px) {
    text-align: center;
    flex-direction: column;
  }
  &-image-wrapper {
    display: flex;
    justify-content: center;
    border-radius: calc(var(--radius) / 2);
    flex-shrink: 0;
    width: 250px;
    height: 340px;
    border: 4px solid var(--primary-color);
    overflow: hidden;
    @media (min-width: 360px) and (max-width: 719px){
      border-radius: 100%;
      margin: 0 auto;
      height: 250px;
    }
  }
  &-image {
    width: auto;
    height: 100%;
  }

  &-info {
    margin-left: 32px;
    @media (min-width: 360px) and (max-width: 719px) {
      margin: 0;
    }
  }
  &-name {
    font-size: 48px;
    font-weight: bolder;
    color: var(--primary-color);
  }

  &-title {
    font-size: 20px;
    color: var(--secondary-color);
    font-style: italic;
  }

  &-intro {
    margin: 16px 0;
    font-size: 20px;
  }
}
</style>
