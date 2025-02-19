<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="comment">
    <div class="comment__flex">
      <span class="comment">{{data}}</span>
      <div class="comment__flex-btn">
        <button class="edit btn">Edit</button>
        <button class="del btn">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Comment',
  props: ['data']
}

// import { DATABASE_ID, db } from '@/utils'
// export default {
//   // eslint-disable-next-line vue/multi-word-component-names
//   name: 'Comment',
//   props: ['data'],
//   data () {
//     return {
//       openB: false,
//       displayedComment: ''
//     }
//   },
//   methods: {
//     updateComment () {
//       this.openB = !this.openB
//     },
//     updateCommentMethod () {
//       // eslint-disable-next-line prefer-const
//       let promise = db.updateDocument(DATABASE_ID, this.data.$collection, this.data.$id, {
//         comment: this.displayedComment
//       })
//       this.openB = false
//       promise.then(
//         () => {
//           this.$emit('refreshData')
//         },
//         (err) => {
//           console.log(err)
//         }
//       )
//       console.log('comment updated')
//     },
//     deleteComment () {
//       // eslint-disable-next-line prefer-const
//       let promise = db.deleteDocument(DATABASE_ID, this.data.$collection, this.data.$id)
//       promise.then(
//         () => {
//           this.$emit('refreshData')
//         },
//         (err) => {
//           console.log('error occured', err)
//         }
//       )
//     }
//   }
// }
</script>
