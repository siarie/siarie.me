<template>
  <Layout>
    <div class="container">
      <div class="row">
        <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "YYYYMMDD")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "~/components/PostCard";

export default {
  components: { PostCard },

  metaInfo: {
    title: 'Blog'
  }
};
</script>

<style>
</style>