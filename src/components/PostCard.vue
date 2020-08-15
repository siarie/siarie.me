<template>
  <div class="col mobile:12 tablet:6 desktop:4">
    <article class="post-card">
      <g-link :to="post.path" class="post-card--header">
        <g-image
          alt="Cover Image"
          v-if="post.cover_image"
          class="post-card--image"
          :src="post.cover_image"
        />
      </g-link>
      <g-link :to="post.path" class="post-card--body">
        <h2 class="post-card--title" v-html="post.title" />
        <p class="post-card--desc" v-if="!post.cover_image">{{ post.description }}</p>
      </g-link>
      <div class="post-card--footer">
        <PostMeta :post="post" />
      </div>
    </article>
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
a.post-card--body {
  color: var(--body-color);
  &:hover {
    text-decoration: none;
  }
}
.post-card {
  background: var(--bg-content-color);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 280px;
  max-height: 280px;
  transition: transform .2s;

  &:hover {
    transform: scale(1.02);
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
    font-size: 1.250em;
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
