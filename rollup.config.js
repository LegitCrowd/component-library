import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'named'
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        exports: 'named'
      }
    ],
    plugins: [
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist'
      }),
      babel({
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-react', 
          '@babel/preset-typescript'
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }),
      commonjs()
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime']
  },
  {
    input: 'src/ComponentA.tsx',
    output: [
      {
        file: 'dist/ComponentA.js',
        format: 'cjs'
      },
      {
        file: 'dist/ComponentA.esm.js',
        format: 'esm'
      }
    ],
    plugins: [
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true
      }),
      babel({
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-react', 
          '@babel/preset-typescript'
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      })
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime']
  }
];