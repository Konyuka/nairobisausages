import { basename } from "node:path";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, renderToString } from "vue/server-renderer";
import { useSSRContext, mergeProps, unref, createSSRApp } from "vue";
import { RouterView, createRouter as createRouter$1, createMemoryHistory } from "vue-router";
const main = "";
const HelloWorld_vue_vue_type_style_index_0_scoped_531db362_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  __name: "HelloWorld",
  __ssrInlineRender: true,
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "greetings" }, _attrs))} data-v-531db362><h1 class="green" data-v-531db362>${ssrInterpolate(__props.msg)}</h1><h3 data-v-531db362> You’ve successfully created a project with <a href="https://vitejs.dev/" target="_blank" rel="noopener" data-v-531db362>Vite</a> + <a href="https://vuejs.org/" target="_blank" rel="noopener" data-v-531db362>Vue 3</a>. </h3></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HelloWorld.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const App_vue_vue_type_style_index_0_scoped_3406630b_lang = "";
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[360px] h-[800px] m-auto" }, _attrs))} data-v-3406630b>`);
      _push(ssrRenderComponent(unref(RouterView), null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3406630b"]]);
const routes = [
  {
    path: "/",
    component: () => import("./assets/HomeView-59375a13.js")
  },
  {
    path: "/dashboard",
    component: () => import("./assets/DashboardView-d80d86c5.js")
  },
  {
    path: "/submit_batch",
    component: () => import("./assets/BatchView-cb648d46.js")
  }
];
const createRouter = () => createRouter$1({
  history: createMemoryHistory("/"),
  routes
});
function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();
  app.use(router);
  return { app, router };
}
async function render(url, manifest) {
  const { app, router } = createApp();
  await router.push(url);
  await router.isReady();
  const ctx = {};
  const html = await renderToString(app, ctx);
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
  return [html, preloadLinks];
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          const filename = basename(file);
          if (manifest[filename]) {
            for (const depFile of manifest[filename]) {
              links += renderPreloadLink(depFile);
              seen.add(depFile);
            }
          }
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith(".gif")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith(".png")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else {
    return "";
  }
}
export {
  _export_sfc as _,
  render
};
