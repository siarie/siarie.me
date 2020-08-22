<template>
  <Layout>
    <div class="container">
      <article class="post">
        <div class="post-cover">
          <g-image alt="Cover Image" v-if="$page.project.screenshot" :src="$page.project.screenshot" />
        </div>
        <div class="post-header">
          <h1 class="post-header-title">{{ $page.project.title }}</h1>
        </div>
        <div class="post-body">
          <div class="post__content" v-html="$page.project.content" />

          <!-- <div class="post__footer">
            <PostTags :post="$page.project" />
          </div> -->
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
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";

export default {
  components: {
    Author,
    PostMeta,
    PostTags,
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: "description",
          content: this.$page.project.description,
        },
      ],
    };
  },
};
</script>

<page-query>
query Project ($id: ID!) {
  project: project (id: $id) {
    path
    title
    description
    content
    screenshot (blur: 10)
  }
}
</page-query>

<style lang="scss" scoped>
.post {
  background: var(--bg-content-color);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);

  &-header {
    padding: 16px;
  }

  &-body {
    padding: 16px;
  }
}
</style>
