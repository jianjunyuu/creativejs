// @ts-check
import path from 'path'
import ts from 'rollup-plugin-typescript2'

const TARGET = 'creativejs'
const packagesDir = path.resolve(__dirname, 'packages')
const packageDir = path.resolve(packagesDir, TARGET)

const pkg = require(path.resolve(packageDir, 'package.json'))
// const name = pkg.name

const outputConfigs = {
  // each file name has the format: `dist/${name}.${format}.js`
  // format being a key of this object
  mjs: {
    file: pkg.module,
    format: 'es',
  },
  // cjs: {
  //   file: pkg.module.replace('mjs', 'cjs'),
  //   format: 'cjs',
  // },
  // global: {
  //   file: pkg.unpkg,
  //   format: 'iife',
  // },
  // browser: {
  //   file: 'dist/creativejs.esm-browser.js',
  //   format: 'es',
  // },
}

const tsPlugin = ts({
  check: true,
  tsconfig: path.resolve(__dirname, './tsconfig.json'),
  cacheRoot: path.resolve(__dirname, './node_modules/.rts2_cache'),
  tsconfigOverride: {
    compilerOptions: {
      sourceMap: false,
      declaration: true,
      declarationMap: false,
    },
    exclude: ['packages/*/__tests__', 'packages/*/test-dts'],
  },
})

const packageConfigs = Object.entries(outputConfigs).map(([format, output]) =>
  createConfig(format, output, format === 'mjs' ? [tsPlugin] : []),
)

function createConfig(buildName, output, plugins = []) {
  return {
    input: 'src/index.ts',
    output,
    // Global and Browser ESM builds inlines everything so that they can be
    // used alone.
    // external,
    plugins: [
      // tsPlugin,
      // createReplacePlugin(
      //   isProductionBuild,
      //   isBundlerESMBuild,
      //   // isBrowserBuild?
      //   isGlobalBuild || isRawESMBuild || isBundlerESMBuild,
      //   isGlobalBuild,
      //   isNodeBuild
      // ),
      // ...nodePlugins,
      ...plugins,
    ],
    // onwarn: (msg, warn) => {
    //   if (!/Circular/.test(msg)) {
    //     warn(msg)
    //   }
    // },
  }
}
export default packageConfigs
