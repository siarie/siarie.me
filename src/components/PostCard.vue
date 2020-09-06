<template>
  <div class="col mobile:12 tablet:6 desktop:4">
    <article class="card card-post">
      <g-link :to="post.path" class="card-post--header" v-if="post.cover_image">
        <g-image
          alt="Cover Image"
          v-if="post.cover_image"
          class="card-post--image"
          :src="post.cover_image"
        />
      </g-link>
      <g-link :to="post.path" class="card-post--body">
        <h4 class="card-post--title" v-html="post.title" />
        <p class="card-post--desc" v-if="!post.cover_image">{{ post.description }}</p>
        <div class="card-post--metainfo">
          <span>{{ post.date | fromNow }}</span>
          <span>{{ post.timeToRead }} min read</span>
        </div>
      </g-link>
    </article>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss">
a.card-post--body,
a.card-post--header {
  color: var(--body-color);
  &:hover {
    text-decoration: none;
  }
}
</style>
