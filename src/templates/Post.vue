<template>
  <Layout>
    <div class="container">
      <article class="card post">
        <div class="card-image" v-if="$page.post.cover_image">
          <g-image :src="$page.post.cover_image" :alt="$page.post.title" />
        </div>
        <div class="card-header">
          <h1 class="title">{{ $page.post.title }}</h1>
          <div class="metainfo">
            <span>{{ $page.post.date }}</span>
            <span>{{ $page.post.timeToRead }} min read</span>
          </div>
        </div>
        <div class="card-body">
          <div v-html="$page.post.content" />
        </div>
      </article>
    </div>
  </Layout>
</template>

<script>
export default {
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
    date (format: "D MMM YYYY")
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

<style lang="scss">
.card.post {
  margin-bottom: 16px;
  .card-body {
    padding: 16px 32px;
    img {
      border-radius: var(--radius);
    }
  }
  .card-header {
    text-align: center;
    box-shadow: none;
    margin-bottom: 16px;
    .title {
      font-size: 32px;
      font-weight: bolder;
      margin: 0 auto;
      max-width: 70%;
      margin-bottom: 1rem;

      @media (min-width: 360px) and (max-width: 720px) {
        max-width: 100%;
      }
    }
    .metainfo {
      font-size: 14px;
      font-weight: 400;
      color: var(--color-gray-04);
      span {
        text-transform: uppercase;
        &:not(:last-child)::after {
          content: "\2022";
          display: inline-block;
          margin: 0 4px;
          color: var(--color-gray-01);
        }
      }
    }
  }
}
</style>