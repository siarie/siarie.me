<template>
  <Layout :show-logo="false">
    <div class="container">
      <Author />

      <!-- List Projects -->
      <div class="projects" id="project">
        <h3>Latest Project</h3>
        <div class="row">
          <div class="col tablet-6">
            <div class="card card-1">Card 1</div>
          </div>
          <div class="col tablet-6">
            <div class="card card-2">Card 2</div>
          </div>
          <div class="col tablet-6">
            <div class="card card-2">Card 3</div>
          </div>
        </div>
      </div>

      <!-- List posts -->
      <div class="posts" id="posts">
        <h3>Latest Posts</h3>
        <div class="row">
          <div class="col tablet-6 desktop-4">
            <div class="card card-1">Card 1</div>
          </div>
          <div class="col tablet-6 desktop-4">
            <div class="card card-2">Card 2</div>
          </div>
          <div class="col tablet-6 desktop-4">
            <div class="card card-2">Card 3</div>
          </div>
          <div class="col tablet-6 desktop-4">
            <div class="card card-1">Card 1</div>
          </div>
          <div class="col tablet-6 desktop-4">
            <div class="card card-2">Card 2</div>
          </div>
          <div class="col tablet-6 desktop-4">
            <div class="card card-2">Card 3</div>
          </div>
        </div>
        <!-- <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/> -->
      </div>

      <div class="contact" id="contact">
        <h1>Get In Touch</h1>
        <p>If you want to get in touch with me you can send me an email. I try to respond as quickly as possible.</p>
        <a href="mailto:sriaspari@gmail.com" class="btn btn-outline">Say Hello</a>
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
        date (format: "D. MMMM YYYY")
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
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Author,
    PostCard,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style lang="scss">
.projects,
.posts,
.contact {
  margin-top: 64px;
}

.contact {
  padding: 32px;
  background-color: var(--bg-content-color);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  text-align: center;
  h1 {
    color: var(--primary-color);
    font-weight: 700;
    margin: 0;
  }
  p {
    width: 100%;
    max-width: 540px;
    margin: 24px auto;
  }
}
</style>