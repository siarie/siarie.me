<template>
  <Layout>
    <div class="container">
      <div class="row">
        <ProjectCard v-for="edge in $page.project.edges" :key="edge.node.id" :project="edge.node" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  project: allProject {
    edges {
      node {
        id
        path
        title
        description
        screenshot (width: 720, height: 480, blur: 10)
      }
    }
  }
}
</page-query>

<script>
import ProjectCard from "~/components/ProjectCard";
export default {
  components: { ProjectCard },
  metaInfo: {
    title: "Project",
  },
};
</script>