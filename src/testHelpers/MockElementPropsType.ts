import { ReactNode } from 'react'

export type MockElementPropsType<P = unknown> = P & { children?: ReactNode | undefined }
