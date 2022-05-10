import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import autoprefixer from 'autoprefixer'
import sass from 'node-sass'

const packageJson = require('./package.json');

export default [{
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            name: 'react-lib'
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        terser(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
        }),
        postcss({
            preprocessor: (content, id) => new Promise((res) => {
                const result = sass.renderSync({ file: id })

                res({ code: result.css.toString() })
            }),
            plugins: [autoprefixer],
            modules: {
                scopeBehaviour: 'global',
            },
            sourceMap: true,
            extract: true,
        })
    ]
},
    {    //새로 추가
        input: 'dist/esm/types/index.d.ts', //새로 추가
        output: [{ file: 'dist/index.d.ts', format: "esm" }], //새로 추가
        external: [/\.css$/],//새로 추가
        plugins: [dts()],//새로 추가
    },//새로 추가
]
