/* eslint-env node */

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        // 使用最新版 ES 语法
        ecmaVersion: 'latest',
        // 使用 ESLint TS 解析器
        parser: '@typescript-eslint/parser',
        // 使用 ES 模块化规范
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        project: ['./tsconfig.app.json', './tsconfig.node.json']
    },
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            argsIgnorePattern: '^_'
        }],
        'vue/multi-word-component-names': 'off',
        'vue/html-self-closing': 'off',
        'vue/no-multiple-template-root': 'off',
        "object-curly-spacing": ["error", "never"],
        'vue/comma-dangle': 'off',
        // 多行对象字面量中要求拖尾逗号
        'comma-dangle': [2, 'never'],
        // 要求在注释周围有空行 (要求在块级注释之前有一空行)
        'lines-around-comment': [
            'error',
            {
                beforeBlockComment: true
            }
        ],
        // 禁止或强制在单行代码块中使用空格
        'block-spacing': ['warn', 'never'],
        // if-else 中的 else 语句, 要求在右括号后另起一行
        'brace-style': ['error', 'stroustrup'],
        // 强制使用一致的换行风格
        'linebreak-style': ['error', 'unix'],
        // 单行允许多个属性，多行每行一个属性
        'vue/max-attributes-per-line': ['error', {
            'singleline': 4, // 单行最多允许4个属性，可以根据需要调整
            'multiline': {
                'max': 1
            }
        }]
    },
    plugins: ['vue'],
    globals: {
        NodeJS: true
    }
};
