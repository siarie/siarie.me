<template>
  <div class="author">
    <div class="author-image-wrapper">
      <g-image
        alt="Author image"
        class="author-image"
        src="~/assets/images/author.png"
        width="250"
        height="250"
        blur="5"
      />
    </div>
    <div class="author-info">
      <div class="author-name">Sri Aspari</div>
      <div class="author-title">Web Developer</div>
      <div
        class="author-intro"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae ducimus non quam. Deserunt pariatur rem, non hic neque culpa error dicta deleniti optio dolorum voluptatem fugit delectus recusandae in?</div>
      <a href="/#contact" class="button button-large button-primary">Get In Touch</a>
      <a href="#" class="button button-large button-outline">Resume</a>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  props: ["showTitle"],
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
    width: 250px;
    height: 250px;
    @media (min-width: 360px) {
      margin: 0 auto;
    }
  }
  &-image {
    border-radius: 100%;
    width: 250px;
    height: 250px;
    box-shadow: 4px -4px 0 4px #cccbff, -4px 4px 0 4px var(--primary-color),
      -4px -4px 0 4px #cccbff, 4px 4px 0 4px var(--primary-color);
  }

  &-info {
    margin-left: 32px;
    @media (min-width: 360px) and (max-width: 720px) {
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
