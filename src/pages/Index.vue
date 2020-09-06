<template>
  <Layout>
    <div class="container">
      <Author />
      <SkillSet />
      <!-- List Projects -->
      <div class="projects" id="project">
        <div class="section-sp">
          <h3>Latest Project</h3>
          <g-link class="button button-small button-primary" :to="'/project'">More</g-link>
        </div>

        <div class="row">
          <ProjectCard
            v-for="edge in $page.project.edges"
            :key="edge.node.id"
            :project="edge.node"
          />
        </div>
      </div>

      <!-- List posts -->
      <div class="posts" id="posts">
        <div class="section-sp">
          <h3>Latest Posts</h3>
          <g-link class="button button-small button-primary" :to="'/post'">More</g-link>
        </div>
        <div class="row">
          <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
        </div>
      </div>

      <div class="contact" id="contact">
        <h1>Get In Touch</h1>
        <p>If you want to get in touch with me you can send me an email. I try to respond as quickly as possible.</p>
        <a href="mailto:sriaspari@gmail.com" class="button button-large button-outline">Say Hello</a>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(perPage: 6, filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "YYYYMMDD")
        timeToRead
        description
        cover_image (width:720, height: 360, blur: 15)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
  project: allProject {
    edges {
      node {
        id
        path
        title
        description
        screenshot (width: 720, height: 480, blur: 10)
        tech {
          id
          title
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";
import ProjectCard from "~/components/ProjectCard.vue";
import SkillSet from "~/components/SkillSet.vue";

export default {
  components: {
    Author,
    PostCard,
    ProjectCard,
    SkillSet,
  },
  metaInfo: {
    title: "Home",
    meta: [
      {
        name: "author",
        content: "Sri Aspari",
      },
    ],
  },
};
</script>

<style lang="scss">
.section-sp {
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  h3 {
    margin: 0;
  }
}

.posts,
.contact {
  margin-top: 16px;
}

.projects {
  margin-top: 48px;
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