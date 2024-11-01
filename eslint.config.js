import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue,js}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,

  // Aturan untuk mengizinkan JavaScript di dalam <script>
  {
    rules: {
      'vue/block-lang': [
        'error',
        {
          allowNoLang: true, // Izinkan tanpa lang
          allow: ['js', 'ts'], // Izinkan "js" dan "ts"
        },
      ],
    },
  },
]
