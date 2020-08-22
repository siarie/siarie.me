<template>
  <Layout>
    <div class="container">
      <article class="post">
        <div class="post-cover">
          <g-image alt="Cover Image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
        </div>
        <div class="post-header">
          <h1 class="post-header-title">{{ $page.post.title }}</h1>
        </div>
        <div class="post-body">
          <div class="post__content" v-html="$page.post.content" />

          <div class="post__footer">
            <PostTags :post="$page.post" />
          </div>
        </div>
      </article>

      <div class="post-comments">
        <!-- Add comment widgets here -->
      </div>

      <Author class="post-author" />
    </div>
  </Layout>
</template>

<script>
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";

export default {
  components: {
    Author,
    PostTags,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description,
        },
      ],
    };
  },
};
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, height: 360, blur: 10)
  }
}
</page-query>

<style lang="scss" scoped>
.post {
  background: var(--bg-content-color);
  border-radius: var(--radius);
  overflow: hidden;

  &-header {
    padding: 16px;
  }

  &-body {
    padding: 16px;
  }
}
</style>
