# rollup-ts-demo

请先参考 [rollup-demo](https://github.com/demo-space/rollup-demo)，本 demo 在其基础上改造

## step 0

安装 ts 以及插件 [rollup-plugin-typescript2](https://www.npmjs.com/package/rollup-plugin-typescript2)

```bash
$ npm install rollup-plugin-typescript2 typescript --save-dev
```

## step 1

生成 tsconfig.json 文件，并适当修改默认配置

```bash
$ npx tsc --init
```

## step 2

修改 rollup.config.js 的入口文件为 ts 文件，并修改文件为 ts 语法

## step 3

为第三方模块引入 ts 声明文件（比如文件中引入了第三方模块 js-cookie）

```bash
$ npm install @types/js-cookie -D
```

## step 4

配置 tslint（官网说 TSLint will be deprecated some time in 2019，将会和 ESLint 合并，喜大普奔）

```bash
# 安装
$ npm install tslint -D

# 初始化配置文件
$ npx tslint --init
```
