(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.PoUi = {}, global.vue));
})(this, function(exports2, vue) {
  "use strict";
  const _withScopeId = (n) => (vue.pushScopeId("data-v-68d99869"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("button", { class: "btn" }, [
    /* @__PURE__ */ vue.createElementVNode("span", null, "button")
  ], -1));
  const _hoisted_2 = [
    _hoisted_1$1
  ];
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
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
      vue.useCssVars((_ctx) => ({
        "2a47ced6": props.color
      }));
      const props = __props;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, _hoisted_2);
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
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createElementVNode("input", { type: __props.type }, null, 8, _hoisted_1)
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
  exports2.PoButton = PoButton;
  exports2.PoInput = _sfc_main;
  exports2.default = index;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
