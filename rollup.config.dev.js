import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'src/main.ts',
  output: {
    file: 'example/bundle.js',
    format: 'umd',
    name: 'FISH', // script 脚本引用的话需要一个全局变量，然后 FISH.xxx 这样使用
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**', // Default: undefined
    }),
    typescript(),
    serve({
      contentBase: 'example',
      open: true
    }),
    livereload(),
  ]
}