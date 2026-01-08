import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import pluginQuery from '@tanstack/eslint-plugin-query'

export default tseslint.config(
    {
        ignores: ['dist']
    },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended, ...pluginQuery.configs['flat/recommended']],
        files: ['**/*.{ts,tsx,js}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            '@stylistic': stylistic,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'newline-after-var': ['error', 'always'],
            'semi': ['error', 'never'],
            'indent': ['error', 4, { 'SwitchCase': 1 }],
            'quotes': ['error', 'single'],
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            '@stylistic/indent': ['error', 4],
            '@stylistic/jsx-first-prop-new-line': ['error', 'multiprop'],
            '@stylistic/jsx-max-props-per-line': ['error', { 'maximum': { 'single': 1, 'multi': 1 } }],
            '@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/jsx-curly-spacing': [2, { 'when': 'always', 'attributes': { 'allowMultiline': true }, 'children': true }],
            'react-hooks/exhaustive-deps': ['warn', {
                'additionalHooks': '(useDeepCompareEffect|useDeepCompareCallback|useDeepCompareMemo|useDeepCompareImperativeHandle|useDeepCompareLayoutEffect)'
            }]
        },
    },
)
