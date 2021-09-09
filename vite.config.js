import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import visualizer from 'rollup-plugin-visualizer';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    // 要用到的插件数组
    plugins: [
      vue(),
      visualizer(),
      styleImport({
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: (name) => `vant/es/${name}/style`,
          },
        ],
      }),
    ],
    // 开发或生产环境服务的公共基础路径,可以是/foo/、https://foo.com/、空字符串或./(用于开发环境) 几种类型，这个选项也可以通过命令行参数指定（例：vite build --base=/my/public/path/）
    base: loadEnv(mode, process.cwd()).VITE_APP_PUBLIC_PATH,
    // 静态资源服务的文件夹, 默认"public"
    publicDir: 'public',
    resolve: {
      //设置别名
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // 启动端口
      port: 4000,
      // 在开发服务器启动时自动在浏览器中打开应用程序
      open: true,
      proxy: {
        // 选项写法
        '/api': {
          target: 'https://xxxx.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
      // 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用
      cors: true,
    },
    build: {
      // 指定输出路径，默认'dist'
      outDir: 'dist',
      // 指定生成静态资源的存放路径(相对于build.outDir)
      assetsDir: 'assets',
      // 小于此阈值的导入或引用资源将内联为base64编码，设置为0可禁用此项。默认4096（4kb）
      assetsInlineLimit: '4096',
      // 启用/禁用CSS代码拆分，如果禁用，整个项目的所有CSS将被提取到一个CSS文件中,默认true
      cssCodeSplit: true,
      // 构建后是否生成source map文件，默认false
      sourcemap: false,
      // 为true时，会生成manifest.json文件，用于后端集成
      manifest: false,
    },
  });
};
