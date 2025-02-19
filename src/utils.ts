import { Client, Account, Databases } from 'appwrite'

const client = new Client()
const account = new Account(client)
client
  .setEndpoint('http://localhost/v1')
  .setProject('641bb9e015ab612854fb')

account.createAnonymousSession().then(
  (response) => {
    console.log(response)
  },
  (error) => {
    console.log(error)
  }
)

export const db = new Databases(client)
export const COLLECTION_ID = '641c6006283f901d0238'
export const DATABASE_ID = '641c5ffcc5a21a7a9a12'
