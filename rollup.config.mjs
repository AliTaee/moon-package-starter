import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import svgr from '@svgr/rollup'
import path from 'path'
import del from 'rollup-plugin-delete'
import { dts } from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import url from 'rollup-plugin-url'
import { visualizer } from 'rollup-plugin-visualizer'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  {
    input: ['./src/index.ts'],
    output: [
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      alias({
        entries: [
          { find: '~', replacement: path.resolve(__dirname, 'src') },
          {
            find: '~/components',
            replacement: path.resolve(__dirname, 'src/components'),
          },
          {
            find: '~/hooks',
            replacement: path.resolve(__dirname, 'src/hooks'),
          },
          {
            find: '~/assets',
            replacement: path.resolve(__dirname, 'src/assets'),
          },
        ],
      }),
      json(),
      svgr(),
      url({
        include: ['**/*.svg', '**/*.png', '**/*.jpg'],
        limit: 8192, // Files smaller than 8KB will be base64 inlined
        emitFiles: true,
      }),
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist',
      }),
      postcss({
        modules: true,
      }),
      terser(),
      visualizer({
        filename: 'bundle-analysis.html',
        open: true,
      }),
    ],
  },
  {
    input: './src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]
