<template>
  <div class="col mobile-12 tablet-6 desktop-4">
    <div class="post-card">
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

        <PostMeta class="post-card__meta" :post="post" />
      </div>
      <g-link class="post-card--link" :to="post.path" />
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
  overflow: hidden;
  position: relative;

  &--body {
    padding: 16px;
    padding-top: 8px;
  }

  &--title {
    margin: 0;
  }

  &--link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    overflow: hidden;
    z-index: 0;
  }
}
</style>
