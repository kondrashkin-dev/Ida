module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-rational-order',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    // рекомендуемые правила
    'at-rule-no-unknown': null,
  },
}
