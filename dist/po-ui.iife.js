var PoUi = function(exports, vue2) {
  "use strict";
  const _withScopeId = (n) => (vue2.pushScopeId("data-v-68d99869"), n = n(), vue2.popScopeId(), n);
  const _hoisted_1$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue2.createElementVNode("button", { class: "btn" }, [
    /* @__PURE__ */ vue2.createElementVNode("span", null, "button")
  ], -1));
  const _hoisted_2 = [
    _hoisted_1$1
  ];
  const _sfc_main$1 = /* @__PURE__ */ vue2.defineComponent({
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
      vue2.useCssVars((_ctx) => ({
        "2a47ced6": props.color
      }));
      const props = __props;
      return (_ctx, _cache) => {
        return vue2.openBlock(), vue2.createElementBlock("div", null, _hoisted_2);
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
  const _sfc_main = /* @__PURE__ */ vue2.defineComponent({
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
        return vue2.openBlock(), vue2.createElementBlock("div", null, [
          vue2.createElementVNode("input", { type: __props.type }, null, 8, _hoisted_1)
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
  exports.PoButton = PoButton;
  exports.PoInput = _sfc_main;
  exports.default = index;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, vue);
