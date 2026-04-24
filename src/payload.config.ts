import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

// [!code modify] ESM CLI (payload migrate) requires explicit file extensions.
import { Users } from './payload/collections/Users.ts'
import { Media } from './payload/collections/Media.ts'
import { getDatabasePoolOptions } from './payload/getDatabasePoolOptions.ts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '- HFsourcing',
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: getDatabasePoolOptions(),
    // [!code modify] Auto-sync schema in development to avoid missing table errors on first run.
    push: process.env.NODE_ENV !== 'production',
  }),
  sharp,
  plugins: [],
  cors: (process.env.PAYLOAD_PUBLIC_CORS_URLS ?? '')
    .split(',')
    .map((url) => url.trim())
    .filter(Boolean),
})
