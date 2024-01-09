/*
 * @Author: poro poroone@163.com
 * @Date: 2024-01-04 17:59:18
 * @LastEditors: poro poroone@163.com
 * @LastEditTime: 2024-01-04 18:12:34
 * @FilePath: \poroone-ui\dist\po-ui.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, useCssVars, openBlock, createElementBlock, pushScopeId, popScopeId, createElementVNode } from "./vue/dist/vue.esm-browser.prod.js";
const _withScopeId = (n) => (pushScopeId("data-v-68d99869"), n = n(), popScopeId(), n);
const _hoisted_1$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("button", { class: "btn" }, [
  /* @__PURE__ */ createElementVNode("span", null, "button")
], -1));
const _hoisted_2 = [
  _hoisted_1$1
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    name: "po-button"
  },
  __name: "index",
  props: {
    color: {
      type: String,
      default: "red"
    }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "2a47ced6": props.color
    }));
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, _hoisted_2);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const PoButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-68d99869"]]);
const _hoisted_1 = ["type"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "po-input"
  },
  __name: "index",
  props: {
    type: {
      type: String,
      default: "text"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createElementVNode("input", { type: __props.type }, null, 8, _hoisted_1)
      ]);
    };
  }
});
console.log(PoButton.name);
const index = {
  install(app) {
    app.component(PoButton.name, PoButton);
    app.component(_sfc_main.name, _sfc_main);
  }
};
export {
  PoButton,
  _sfc_main as PoInput,
  index as default
};
