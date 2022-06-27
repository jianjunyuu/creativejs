import path from 'path'
import chokidar from 'chokidar'
import { execa } from 'execa'

const dist = path.resolve(process.cwd(), 'dist/creativejs.mjs')
/**
 * @param bin {string}
 * @param args {string}
 * @param opts {import('execa').CommonOptions<string>}
 * @returns
 */
const run = (bin, args, opts = {}) =>
  execa(bin, args, { stdio: 'inherit', ...opts })

// One-liner for current directory
chokidar.watch(dist).on('all', (event) => {
  if (event === 'change')
    run('pnpm', ['run', 'build:dts'])
})
