# game-hub

## Note

#### 1. tsx 最好只引入 tsx 组件，这样有利于 props 的类型判断，如果引入 Vue 单文件组件，可能会提示找不到 xxx props 类型的错误；

#### 2. 在 tsx 文件中，所有 Ref 类型数据（computed, toRefs, ref...），都需要使用.value 来访问正确的数据。


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
