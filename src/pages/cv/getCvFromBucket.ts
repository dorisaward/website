import { downloadData } from 'aws-amplify/storage'
import { storageBucketNames } from '../../../amplify/storage/storageBucketNames.ts'
import { CvRow } from './CvRow.ts'
import { transformCv } from './transformCv.ts'
import { CvSchema } from './CvSchema.ts'

export const getCvFromBucket = (): Promise<string | CvRow[]> =>
    downloadData({
        path: '',
        options: {
            bucket: storageBucketNames.CV
        }
    }).result.catch((e: unknown) => {
        console.error(JSON.stringify(e))
        if (e instanceof Error) {
            return e.message
        }
        return JSON.stringify(e)
    }).then(value => {
        console.warn(value)
        if (typeof value === 'string') {
            return value
        }
        return transformCv(value.body.json as unknown as CvSchema)
    })
