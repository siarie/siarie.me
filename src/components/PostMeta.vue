<template>
   <div class="post-meta">
      <span>{{ post.date | fromNow }}</span>
      <template v-if="post.timeToRead">
        <span>{{ post.timeToRead }} min read</span>
      </template>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-meta {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: .6em;
  opacity: .6;
  margin-top: 16px;
}
</style>