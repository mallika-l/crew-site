<template>
    <form @submit.prevent="createNewComment">
        <div class="form-group">
            <label for="comment-box">Leave a comment</label>
            <textarea id="comment-box" v-model="newComment" placeholder="type here" rows="10" cols="50"></textarea>
            <button class="btn">Submit</button>
        </div>
    </form>
</template>

<script>
export default {
  name: 'CommentBox',
  methods: {
    createNewComment () {
      // eslint-disable-next-line no-empty
      if (this.newComment === '') {
      } else {
        console.log(this.newComment)
        this.$emit('createNewComment', this.newComment)

        // // get the id by param
        // // add to an array in the mock db by id
        // // fetchComments from mock db
        // // set the newComment to empty again
        // switch (this.id) {
        //   case '1':
        //     articles[0].comments.push(this.newComment)
        //     console.log('articles[0].comments[0]', articles[0].comments[0])
        //     break
        //   case '2':
        //     articles[1].comments.push(this.newComment)
        //     console.log('articles[1].comments[1]', articles[1].comments[1])
        //     break
        //   case '3':
        //     articles[2].comments.push(this.newComment)
        //     break
        //   default:
        // }

        // this.fetchComments()
        // this.newComment = ''
      }
    }
  }
}

// import { DATABASE_ID, COLLECTION_ID, db } from '@/utils'

// export default {
//   name: 'CommentBox',
//   props: ['fetchComments'],
//   data () {
//     return {
//       newComment: ''
//     }
//   },
//   methods: {
//     createNewComment () {
//       // eslint-disable-next-line no-empty
//       if (this.newComment === '') {
//       } else {
//         // eslint-disable-next-line prefer-const
//         let promise = db.createDocument(DATABASE_ID, COLLECTION_ID, 'unique()', {
//           comment: this.newComment, date: new Date()
//         })
//         promise.then(
//           () => {
//             this.fetchComments()
//             this.newComment = ''
//           },
//           (err) => {
//             console.log(err)
//           }
//         )
//       }
//     }
//   }
// }
</script>

<style>
.form-group > * {
    display:block;
    margin-top: .5rem;
    margin-left:20rem;
    margin-bottom:1rem;
    font-weight: 30px;
}

button {
   background-color: rgb(87, 93, 144);
   color:white;
   margin-right:1rem;
}
</style>
