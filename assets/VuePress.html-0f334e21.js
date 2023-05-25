import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as p,a as s,b as e,d as n,w as r,e as t}from"./app-093ff4d2.js";const d={},u={href:"https://v2.vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://stackblitz.com/",target:"_blank",rel:"noopener noreferrer"},h=s("code",null,"https://stackblitz.com/github/用户名/仓库名",-1),m={href:"https://theme-hope.vuejs.press/zh/guide/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87",target:"_blank",rel:"noopener noreferrer"},v={href:"https://theme-hope.vuejs.press/zh/config/style.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/vuepress/awesome-vuepress/blob/main/v2.md",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.npmjs.com/package/vuepress-plugin-helper-live2d",target:"_blank",rel:"noopener noreferrer"},g=s("h2",{id:"初始配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#初始配置","aria-hidden":"true"},"#"),e(" 初始配置")],-1),x=s("li",null,[e("新建文件夹，然后在该路径下运行命令 "),s("code",null,"pnpm create vuepress-theme-hope@next docs"),e("。vuepress-theme-hope 主题的样例文件会存储在该路径下。有时因版本问题，样例运行会报错，此时须用固定版本号来安装依赖环境，终端中输入 "),s("code",null,"pnpm add vuepress@2.0.0-beta.60 @vuepress/client@2.0.0-beta.60 vuepress-theme-hope@2.0.0-beta.155 && pnpm docs:dev"),e("。")],-1),y=s("li",null,[e("执行命令 "),s("code",null,"pnpm docs:dev"),e(" 启动样例网站。")],-1),E=s("code",null,"docs\\.vuepress",-1),q={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/docs/theme/src/.vuepress",target:"_blank",rel:"noopener noreferrer"},w=s("ul",null,[s("li",null,"config.ts：配置网站环境依赖和网站属性。"),s("li",null,"sidebar.ts：侧边栏，集合所有文档的目录。"),s("li",null,"navbar.ts：导航栏，放最常用的文档链接。"),s("li",null,"theme.ts：对主题和插件进行设置。")],-1),B=s("li",null,[e("如果遇到报错，执行命令 "),s("code",null,"pnpm add vuepress@next vuepress-theme-hope@next && pnpm i && pnpm up"),e(" 修复并升级相关依赖包。如果依然有问题，则删除 node_modules 和 lock 文件，执行 "),s("code",null,"npm install && pnpm i && pnpm up"),e(" 重置依赖包文件。")],-1),A=t('<p>如果遇到错误 <code>[ERR_MODULE_NOT_FOUND]: Cannot find package</code>，则将 package.json 放在 demo project 中生成 lock 文件，比对 lock 文件是否为正确生成依赖树，将正确的 lock 文件复制到项目下。</p><p>每个插件和主题版本只支持一个 VuePress 版本，因此要稳定的话，需用固定版本号的环境依赖才可以，比如主题 <code>vuepress-theme-hope@2.0.0-beta.155</code> 仅支持 <code>vuepress@2.0.0-beta.60</code>。如果要测试最新的环境配置，可使用 <code>pnpm add vuepress@next vuepress-theme-hope@next @vuepress/plugin-google-analytics@next @vuepress/plugin-search@next @vuepress/plugin-docsearch@next &amp;&amp; pnpm i &amp;&amp; pnpm up</code>。</p><h2 id="搜索插件" tabindex="-1"><a class="header-anchor" href="#搜索插件" aria-hidden="true">#</a> 搜索插件</h2>',3),j={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},V={href:"https://crawler.algolia.com/admin/crawlers/bd9cfb06-0346-4a64-9a1a-8a513f0b7fce/overview",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.algolia.com/apps/M4EXXEZIEG/dashboard",target:"_blank",rel:"noopener noreferrer"},D=s("h2",{id:"webpack-打包",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#webpack-打包","aria-hidden":"true"},"#"),e(" Webpack 打包")],-1),M=s("p",null,"VuePress v2 默认使用 Vite，打包时会引入时间戳和 hash 对文件重命名，导致网站大部分的文件发生更改。即使你并没有更新文章，生成的静态文件也会改变。比如我的笔记网站用的 VuePress 默认配置，每次服务器部署需要 5-15 分钟。",-1),W={href:"https://github.com/rockbenben/LearnData/tree/nohashname",target:"_blank",rel:"noopener noreferrer"},U={href:"https://v2.vuepress.vuejs.org/zh/guide/bundler.html",target:"_blank",rel:"noopener noreferrer"},R=t(`<li><p>修改 config.ts 的导入设置，将 <code>import { defineUserConfig } from &quot;vuepress&quot;</code> 替换为 <code>import { defineUserConfig } from &quot;@vuepress/cli&quot;</code>，将 <code>import { viteBundler } from &quot;@vuepress/bundler-vite&quot;</code> 替换为 <code>import { webpackBundler } from &quot;@vuepress/bundler-webpack&quot;</code>。</p></li><li><p>Webpack 环境依赖包安装，并运行服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#组合命令，打包使用 Webpack</span>
<span class="token function">pnpm</span> <span class="token function">add</span> vuepress@next vuepress-theme-hope@next <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> remove vuepress <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> <span class="token function">add</span> vuepress-webpack@next sass-loader <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> up

<span class="token comment">#运行在本地服务器</span>
<span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组合命令也能<strong>解决报错</strong>，升级相关依赖包。相关命令的分步解释见下方。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#确保你正在使用最新的 vuepress 和 vuepress-theme-hope 版本</span>
<span class="token function">pnpm</span> <span class="token function">add</span> vuepress@next vuepress-theme-hope@next

<span class="token comment">#更换打包工具，Webpack 需手动下载 sass-loader</span>
<span class="token function">pnpm</span> remove vuepress
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-webpack@next sass-loader

<span class="token comment">#常用插件：google-analytics，search</span>
<span class="token function">pnpm</span> <span class="token function">add</span> @vuepress/plugin-google-analytics@next @vuepress/plugin-search@next

<span class="token comment">#升级当前目录的依赖以确保你的项目只包含单个版本的相关包</span>
<span class="token function">pnpm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),C={href:"https://github.com/Yatoo2018/webpack-chain/tree/zh-cmn-Hans",target:"_blank",rel:"noopener noreferrer"},H=s("sup",{class:"footnote-ref"},[s("a",{href:"#footnote1"},"[1]"),s("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),L=s("code",null,".filename",-1),N=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">webpackBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">chainWebpack</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// do not use chunk hash in js</span>
      <span class="token comment">//参照案例：https://github.com/vuepress/vuepress-plugin-named-chunks/blob/b9fb5a1d3475530b1d74b6616f92a6e3bf14a7ed/__tests__/docs/.vuepress/config.js</span>
      config<span class="token punctuation">.</span>output
        <span class="token punctuation">.</span><span class="token function">filename</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[name].js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">chunkFilename</span><span class="token punctuation">(</span><span class="token string">&quot;assets/chunks/[name].js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S={href:"https://cli.vuejs.org/config/#vue-config-js",target:"_blank",rel:"noopener noreferrer"},F=s("code",null,"filenameHashing: false",-1),I=s("h2",{id:"关闭-prefetch",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#关闭-prefetch","aria-hidden":"true"},"#"),e(" 关闭 prefetch")],-1),G=s("p",null,"preload 是一种声明式的资源获取请求方式，用于提前加载一些需要的依赖，并且不会影响页面的 onload 事件。prefetch 是一种利用浏览器的空闲时间加载页面将来可能用到的资源的一种机制；通常可以用于加载非首页的其他页面所需要的资源，以便加快后续页面的首屏速度。preload 主要用于预加载当前页面需要的资源；而 prefetch 主要用于加载将来页面可能需要的资源。",-1),O={href:"https://vuepress.github.io/zh/reference/config.html#build-%E9%85%8D%E7%BD%AE%E9%A1%B9",target:"_blank",rel:"noopener noreferrer"},T=t(`<p><code>docs\\.vuepress</code> 路径下的 config.ts 配置中插入 <code>shouldPrefetch: false,</code>，即可关闭 prefetch。</p><h2 id="页面模板" tabindex="-1"><a class="header-anchor" href="#页面模板" aria-hidden="true">#</a> 页面模板</h2><p>VuePress 页面生成规则基于主题模板，如果修改全站 html 内容，最简单的方式就是修改模板。</p><p>我的主题模板文件是 <code>@vuepress-theme-hope/templates/index.build.html</code>，将其下载到本地后，修改为你想要的样式，放入 .vuepress 文件夹内。最后在 config.ts 中添加代码，即可启用修改模板。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/utils&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  templateBuild<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;index.build.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除修改页面模板外，也可以通过修改 config.ts 配置来添加自定义标签。插入下方代码后，网站所有页面都会在 header 前添入对应代码，其效用等同于 <code>&lt;meta name=&quot;keywords&quot; content=&quot;关键词，内容标签，相关词&quot;&gt;</code> 和 <code>&lt;img referrerpolicy=&quot;no-referrer-when-downgrade&quot; src=&quot;https://tongji.newzone.top/matomo.php?idsite=7&amp;amp;rec=1&quot; style=&quot;border:0&quot; alt=&quot;&quot; /&gt;</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>head<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>
    <span class="token string">&quot;meta&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&quot;keywords&quot;</span><span class="token punctuation">,</span>
      content<span class="token operator">:</span> <span class="token string">&quot;关键词，内容标签，相关词&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token string">&quot;img&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      referrerpolicy<span class="token operator">:</span> <span class="token string">&quot;no-referrer-when-downgrade&quot;</span><span class="token punctuation">,</span>
      src<span class="token operator">:</span> <span class="token string">&quot;https://tongji.newzone.top/matomo.php?idsite=7&amp;amp;rec=1&quot;</span><span class="token punctuation">,</span>
      style<span class="token operator">:</span> <span class="token string">&quot;border:0&quot;</span><span class="token punctuation">,</span>
      alt<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="时间参数" tabindex="-1"><a class="header-anchor" href="#时间参数" aria-hidden="true">#</a> 时间参数</h2>`,8),X={href:"https://plugin-seo2.vuejs.press/zh/guide.html",target:"_blank",rel:"noopener noreferrer"},Y=s("code",null,"og:updated_time",-1),Z=s("code",null,"article:modified_time",-1),J=s("code",null,"page.git.updatedTime",-1),K=s("code",null,"theme.ts",-1),Q=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> seoPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-seo2&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">seoPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      hostname<span class="token operator">:</span> <span class="token string">&quot;https://vuepress-theme-hope.github.io&quot;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">ogp</span><span class="token operator">:</span> <span class="token punctuation">(</span>ogp<span class="token punctuation">,</span> page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token operator">...</span>ogp<span class="token punctuation">,</span>
        <span class="token string-property property">&quot;og:updated_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;og:modified_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，如果想停止向页面导入 lastUpdated 参数，在 <code>theme.ts</code> 中插入 <code>lastUpdated: false</code> 即可。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  lastUpdated<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义主题" tabindex="-1"><a class="header-anchor" href="#自定义主题" aria-hidden="true">#</a> 自定义主题</h2>`,4),$={class:"task-list-container"},ss={class:"task-list-item"},es=s("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-0",checked:"checked",disabled:"disabled"},null,-1),ns={class:"task-list-item-label",for:"task-item-0"},as={href:"https://vuepress-theme-hope.github.io/v2/components/zh/guide/",target:"_blank",rel:"noopener noreferrer"},ts={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/demo/components/src/.vuepress/config.ts",target:"_blank",rel:"noopener noreferrer"},os={class:"task-list-item"},ls=s("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-1",checked:"checked",disabled:"disabled"},null,-1),is={class:"task-list-item-label",for:"task-item-1"},cs={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},ps={class:"task-list-item"},rs=s("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-2",checked:"checked",disabled:"disabled"},null,-1),ds={class:"task-list-item-label",for:"task-item-2"},us={href:"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html#%E9%80%9A%E8%BF%87%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90",target:"_blank",rel:"noopener noreferrer"},ks=s("li",{class:"task-list-item"},[s("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-3",checked:"checked",disabled:"disabled"}),s("label",{class:"task-list-item-label",for:"task-item-3"},[s("s",null,"去 meta 标签，测试并未成功，不再尝试")])],-1),hs={class:"task-list-item"},ms=s("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-4",checked:"checked",disabled:"disabled"},null,-1),bs={class:"task-list-item-label",for:"task-item-4"},vs={href:"https://theme-hope.vuejs.press/zh/guide/feature/comment.html#waline",target:"_blank",rel:"noopener noreferrer"},_s=t('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"><s>google analytics 没反应，实际已经包含在 js 中了</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"><s>不用自动开启一堆的网站，关闭 prefetch</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"><s>生成文件名固定化，chainWebpack</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"><s>网页更新时，有时会打不开链接，需要使用缓存。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"><s>VuePress 博客页面：frontmatter 中添加 order 参数让最新的文章往上排，无法按文件名倒序排列</s></label></li>',5),fs={class:"task-list-item"},gs=s("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-10",checked:"checked",disabled:"disabled"},null,-1),xs={class:"task-list-item-label",for:"task-item-10"},ys={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},Es=t('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> 独立设置页面标题。未成功，所有页面都会加入默认标题。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> 侧边栏显示客服图片。icon 位置直接放链接也没用。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> 指定页面子标题不被目录页识别。但页面中取消 toc 的话，网页位置会出现偏移。</label></li>',3),qs={class:"task-list-item"},ws=s("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-14",checked:"checked",disabled:"disabled"},null,-1),Bs={class:"task-list-item-label",for:"task-item-14"},As={href:"https://theme-hope.vuejs.press/zh/cookbook/advanced/replace.html#%E6%8F%92%E6%A7%BD%E5%88%A9%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},js={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/theme/src/client/module/navbar/components/NavbarBrand.ts",target:"_blank",rel:"noopener noreferrer"},zs=t('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-15"><s>子域名中部署 blog 和 note，分别使用不同路径。这方案可以与 WordPress 共存，但未了避免后续出错，还是取消了。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-16"><s>Giscus 评论区设置</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-17"><s>导航栏添加 repo 位置</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-18"><s>页面统计，插件只支持 Google、百度，然后用图片标签方式植入统计。直接修改页面模板，放入统计链接。备用方法：将统计代码直接放在侧边栏。</s></label></li>',4),Vs={class:"task-list-item"},Ps=s("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-19",checked:"checked",disabled:"disabled"},null,-1),Ds={class:"task-list-item-label",for:"task-item-19"},Ms={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/docs/theme/src/.vuepress/config.ts",target:"_blank",rel:"noopener noreferrer"},Ws={href:"https://vuepress-theme-hope.github.io/v2/seo/zh/guide.html#%E7%9B%B4%E6%8E%A5%E6%B7%BB%E5%8A%A0-head-%E6%A0%87%E7%AD%BE",target:"_blank",rel:"noopener noreferrer"},Us={class:"task-list-item"},Rs=s("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-20",checked:"checked",disabled:"disabled"},null,-1),Cs={class:"task-list-item-label",for:"task-item-20"},Hs={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},Ls=t('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-21" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-21"><s>打开页面链接，侧边栏焦点能不能也移动过去。侧边栏标题需要能在首屏出现，才能激活焦点。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-22" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-22"><s>默认主题颜色为白天，虽然不能切换，但发稿用白色就行。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-23" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-23"><s>设置导航栏自动隐藏</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-24" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-24"><s>隐藏编辑时间和贡献者</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-25" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-25"><s>用 md 控制图片是，图片不能显示。这可能是因为主题默认的 lazy 加载，改用七牛云的图片属性控制尺寸。</s></label></li>',5),Ns=s("hr",{class:"footnotes-sep"},null,-1),Ss={class:"footnotes"},Fs={class:"footnotes-list"},Is={id:"footnote1",class:"footnote-item"},Gs={href:"https://blog.csdn.net/song854601134/article/details/121340077",target:"_blank",rel:"noopener noreferrer"},Os=s("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function Ts(Xs,Ys){const a=o("ExternalLinkIcon"),l=o("RouterLink");return c(),p("div",null,[s("p",null,[s("a",u,[e("VuePress"),n(a)]),e(" 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。如果你已经有了 docsify/Hexo 等 Markdown 架构网站，简单就能切换到 VuePress。")]),s("p",null,[e("不过，VuePress 网站需要依赖包环境，生成的静态文件在本地运行会缺少组件，需要服务器或其他云服务上运行。如果本地部署中出现未知 bug，推荐使用 "),s("a",k,[e("StackBlitz"),n(a)]),e(" 在线 IDE 工具测试，打开 "),h,e(" 即可将对应 GitHub 仓库导入 StackBlitz。开发时，建议用 dev 命令测试，这样可以查看打包前的动态代码，发现组件间的内部链接。")]),s("p",null,[e("LearnData 的主题为 "),s("a",m,[e("vuepress-theme-hope"),n(a)]),e("，图标为 "),s("a",b,[e("Iconfont 精选图标"),n(a)]),e("，页面修改查看 "),s("a",v,[e("样式配置"),n(a)]),e("，其他主题和插件参考 "),s("a",_,[e("Awesome VuePress V2"),n(a)]),e(" 和 "),s("a",f,[e("看板娘"),n(a)]),e("。")]),g,s("ol",null,[s("li",null,[e("环境配置：安装 pnpm，也支持 npm 和 yarn，可参考"),n(l,{to:"/deploy/VPS.html#%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2"},{default:r(()=>[e("环境部署教程")]),_:1}),e("。")]),x,y,s("li",null,[E,e(" 路径下的 config.ts，navbar.ts，sidebar.ts，theme.ts 可以修改页面属性，设置方法参考 "),s("a",q,[e("官方案例"),n(a)]),e("。 "),w]),B]),A,s("p",null,[e("本地搜索插件："),s("a",j,[e("search"),n(a)]),e(" 根据你的页面，在本地生成搜索索引，然后在用户访问站点时加载搜索索引文件。默认情况下，该插件会将页面标题和小标题作为搜索索引。")]),s("p",null,[e("在线搜索插件："),s("a",z,[e("algolia DocSearch"),n(a)]),e(" 使用在线爬虫抓取全站，并提供网站搜索索引，抓取周期为一周。开源文档可以申请官方爬虫支持，商业化内容需要自己设置爬虫。")]),s("p",null,[e("在 "),s("a",V,[e("algolia 爬虫管理页"),n(a)]),e(" 修改爬虫抓取规则，然后手动触发爬虫进行全站搜索。之后，"),s("a",P,[e("algolia 搜索数据库"),n(a)]),e(" 可以查看搜索次数与数据。")]),D,M,s("p",null,[e("如果不想每次架构都重命名文件，可以复制「"),s("a",W,[e("nohashname"),n(a)]),e("」branch。我把 nohashname 分支的打包工具换成了 "),s("a",U,[e("Webpack"),n(a)]),e("，并用 chainWebpack 设置文件命名规则，避免文件非必要重命名。")]),s("ol",null,[R,s("li",null,[s("p",null,[e("修改文件命名规则：打开 config.ts，使用 "),s("a",C,[e("webpack-chain"),n(a)]),e(" 修改 webpack 输出文件名规则，停止对 js 文件 hashname。"),H,e(),L,e(" 加路径容易报错，这里只把 chunk 文件放入子文件夹。")]),N,s("p",null,[e("在查找 chainWebpack 配置前，我依照 "),s("a",S,[e("vue.config.js"),n(a)]),e(" 的指引添加了 "),F,e("，但是 VuePress 并未停止 hashname。事实上，我理解错了。根据 @Mister-Hope 的说明，「这里的 filenameHasing 是 vue-cli 自己加的一个属性。拿到这里当例子很奇怪。就好比你按照 iOS 使用手册去设置 Android 结果无效，本不应该有效。另外本身为了防止应用程序出错，你也从不应该移除 hash。」")])])]),I,G,s("p",null,[e("VuePress "),s("a",O,[e("Build 配置项"),n(a)]),e("默认开启了 preload 和 prefetch。但是，开启了 prefetch，所有其它页面所需的文件都会被预拉取。页面较多或服务器宽带后付费的话，建议关闭 prefetch。")]),T,s("p",null,[s("a",X,[e("vuepress-plugin-seo2"),n(a)]),e(" 在网页中插入 "),Y,e(" 和 "),Z,e("，这两个参数都引用自 "),J,e("。"),K,e(" 中无法设置 ogp。你需要打开 config.ts，使用 vuepress-plugin-seo2 的 ogp 参数重新设置 meta，并删除你不想要的参数。根据 @Mister-Hope 的说明:「API 的设计很容易理解，就是给你个自动生成的对象然后等你返回。所以你只需要在原对象上把属性删掉，返回这个对象就是了。」")]),Q,s("ul",$,[s("li",ss,[es,s("label",ns,[s("s",null,[e("插入 Bilibili 或第三方视频，可使用专用 "),s("a",as,[e("组件库"),n(a)]),e("，配置参考 "),s("a",ts,[e("组件案例 config.ts"),n(a)]),e(".")])])]),s("li",os,[ls,s("label",is,[s("s",null,[e("插件"),s("a",cs,[e("docsearch"),n(a)]),e("：将 Algolia DocSearch 集成到 VuePress 中，为你的文档网站提供搜索功能。")])])]),s("li",ps,[rs,s("label",ds,[s("s",null,[e("README 页面如何隐藏，使用 index: false，参考"),s("a",us,[e("主题设置"),n(a)])])])]),ks,s("li",hs,[ms,s("label",bs,[s("s",null,[s("a",vs,[e("waline"),n(a)]),e(" 评论插件，无需账户，更适合大众。")])])]),_s,s("li",fs,[gs,s("label",xs,[e(" 全局路径需要给子目录添加 "),s("a",ys,[e("README.md"),n(a)]),e("，没那么多内容填，暂时放弃。")])]),Es,s("li",qs,[ws,s("label",Bs,[s("a",As,[e("修改导航栏 brand 链接"),n(a)]),e("，需用本地文件替代 "),s("a",js,[e("主题默认设置"),n(a)]),e("。设置的 ts 未生效，暂时放弃。")])]),zs,s("li",Vs,[Ps,s("label",Ds,[s("s",null,[e("定制页面标签：config.ts 中添加全局 "),s("a",Ms,[e("head 标签"),n(a)]),e("，或在页面中添加 "),s("a",Ws,[e("独立 head 标签"),n(a)]),e("，支持图片统计代码。")])])]),s("li",Us,[Rs,s("label",Cs,[s("s",null,[e("将 docs 里的 "),s("a",Hs,[e("README.md"),n(a)]),e(" 转移到主目录中，保持 github 项目页的同步。")])])]),Ls]),Ns,s("section",Ss,[s("ol",Fs,[s("li",Is,[s("p",null,[s("a",Gs,[e("chainWebpack 常用配置方式"),n(a)]),e(),Os])])])])])}const Ks=i(d,[["render",Ts],["__file","VuePress.html.vue"]]);export{Ks as default};
