# kaimo-ui

自己的ui库

## 过程

初始化项目以及安装依赖

```bash
npm init -y
git init
git remote add origin https://github.com/kaimo313/kaimo-ui.git
npm install webpack@4.14.0 webpack-cli@3.0.8 -D
npm install vue-loader@15.7.0 vue-template-compiler@2.6.14 -D
```

执行 `npm pack` 命令，生成 `.tgz` 包

```bash
npm run build
npm pack
```

初始化一个 Vue 项目，然后下载本地的 npm 包到实际项目中使用

```bash
vue create examples
cd examples
npm install E:\MyGithub\kaimo-ui\kaimo-ui-1.0.0.tgz
npm run serve
```

