import { defineStorage } from '@aws-amplify/backend'
import { storageBucketNames } from './storageBucketNames'

export const cvStorage = defineStorage({
    name: storageBucketNames.CV
})
