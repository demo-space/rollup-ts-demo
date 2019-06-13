import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from "rollup-plugin-uglify"
import typescript from 'rollup-plugin-typescript2';

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
    uglify()
  ]
}