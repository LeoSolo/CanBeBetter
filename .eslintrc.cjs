module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:nuxt/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue-pug/vue3-recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        '@vue/unused-vars': 'off',
        '@typescript-eslint/semi': 'off',
        'import/no-unresolved': 'off',
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        'import/named': 'off',
  
        '@typescript-eslint/no-extraneous-class': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/member-delimiter-style': ['error', {
          'multiline': {
            'delimiter': 'semi',
            'requireLast': true,
          },
        }],
        '@typescript-eslint/consistent-type-definitions': 'off',
        'func-call-spacing': 'off',
        'no-undef': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/consistent-type-assertions': 'warn',
  
        'vue/max-attributes-per-line': ['error', {
          'singleline': {
            'max': 3,
          },      
          'multiline': {
            'max': 1,
          },
        }],
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/ban-types': ['off'],
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        'node/no-path-concat': 'off',
        '@typescript-eslint/return-await': 'off',
        'space-before-function-paren':'off',
        'max-params': ['error', 3],
        'max-len': [
          2,
          120,
          {
            'ignoreUrls': true,
            'ignoreTrailingComments': true,
            'ignoreRegExpLiterals': true,
          },
        ],
        'newline-before-return': 'error',
        'no-param-reassign': ['error', { 'props': true }],
        '@typescript-eslint/no-invalid-void-type': 'off',
        
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
    },
};