// 入口文件（src/index.js）的工作就是引入注册所有组件，并对外提供 install() 方法，供给 Vue.use() 方法使用。

import Button from "../packages/button/index.js";

const components = [Button];

const install = (Vue) => {
    components.forEach((component) => {
        Vue.component(component.name, component); // 每个组件需提供 name 属性
    });
};

export default {
    install,
    Button,
};
