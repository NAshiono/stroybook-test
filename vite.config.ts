// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { resolve } from 'path'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   root: 'src',
//   build: {
//     outDir: 'dist',

//     lib: {
//       entry: resolve(__dirname, 'src/index.ts'),
//       name: 'dist',
//       fileName: (format) => `index.${format}.js`,
//     },
//     rollupOptions: {
//       external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
//       output: {
//         globals: {
//           react: 'React',
//           'react-dom': 'ReactDOM',
//           '@emotion/react': 'emotionReact',
//           '@emotion/styled': 'emotionStyled',
//         },
//       },
//     },
//   },
// })

import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Storybook Test',
      formats: ['es', 'umd'],
      fileName: (format) => `sicon-dev-storybook-test.${format}.ts`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@emotion/styled'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@emotion/styled': 'styled',
        },
      },
    },
  },
})
