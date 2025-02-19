<template>
    <app-header/>
    <article-one/>
    <div v-for="datum in data" :key="datum">
      <comment class="message" :data="datum"/>
    </div>
    <comment-box  @createNewComment="updateData($event)"/>
</template>

<script>
// import articles from '@/data/articles'
import { defineComponent } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import ArticleOne from '@/components/ArticleOne.vue'
import CommentBox from '@/components/CommentBox.vue'
import Comment from '@/components/Comment.vue'

export default defineComponent({
  components: {
    AppHeader,
    ArticleOne,
    Comment,
    CommentBox
  },
  data () {
    return {
      data: []
    }
  },
  created () {
    // console.log(this.articles[0].comments)
    window.scrollTo(0, 0)
    // this.fetchComments()
  },
  methods: {
    updateData (newComment) {
      this.data.push(newComment)
      console.log('updated')
    }
  }
})
// import AppHeader from '@/components/AppHeader.vue'
// import { DATABASE_ID, COLLECTION_ID, db } from '@/utils'
// import ArticleOne from '@/components/ArticleOne.vue'
// import CommentBox from '@/components/CommentBox.vue'
// import Comment from '@/components/Comment.vue'

// export default {
//   name: 'ArticleOneView',
//   components: {
//     AppHeader,
//     ArticleOne,
//     CommentBox,
//     Comment
//   },
//   created () {
//     this.fetchComments()
//   },
//   data () {
//     return {
//       comments: []
//     }
//   },
//   methods: {
//     fetchComments () {
//       // eslint-disable-next-line prefer-const
//       let promise = db.listDocuments(DATABASE_ID, COLLECTION_ID)
//       promise.then(
//         (res) => {
//           console.log(res)
//           // let comments: Document[] = []
//           this.comments = res.documents
//         },
//         (err) => {
//           console.log(err)
//         }
//       )
//     }
//   }
// }
</script>

<style>
#comment {
  display:block;
  margin-top: .5rem;
  margin-left:20rem;
  margin-bottom:1rem;
  font-weight: 30px;

}
</style>
