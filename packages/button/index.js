import KmButton from './src/button.vue';

KmButton.install = function (Vue) {
    // 提供给按需加载能力
    Vue.component(KmButton.name, KmButton);
};

export default KmButton;
