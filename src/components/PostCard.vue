<template>
  <div class="col mobile:12 tablet:6 desktop:4">
    <div class="post-card" for="post-link">
      <div class="post-card--header">
        <g-image
          alt="Cover Image"
          v-if="post.cover_image"
          class="post-card--image"
          :src="post.cover_image"
        />
      </div>
      <div class="post-card--body">
        <h2 class="post-card--title" v-html="post.title" />
        <p class="post-card--desc" v-if="!post.cover_image">{{ post.description }}</p>
      </div>
      <div class="post-card--footer">
        <PostMeta :post="post" />
      </div>
      <g-link class="post-card--link" id="post-link" :to="post.path" />
    </div>
  </div>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";

export default {
  components: {
    PostMeta,
    PostTags,
  },
  props: ["post"],
};
</script>

<style lang="scss">
.post-card {
  background: var(--bg-content-color);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 250px;
  max-height: 250px;

  &--link:hover + .post-card {
    transform: scale(2);
  }

  &--body {
    flex: 1;
    padding: 16px;
    padding-bottom: 0;
  }

  &--footer {
    padding: 16px;
    margin-top: 0;
  }

  &--title {
    margin: 0;
    font-size: 1.5em;
  }

  &--desc {
    margin-top: 16px;
    margin-bottom: 0;
  }
  // &--link {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: transparent;
  //   overflow: hidden;
  //   z-index: 0;
  // }
}
</style>
