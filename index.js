const path = require('path')

module.exports = {
  extend: '@vuepress/theme-default',
  extendMarkdown: md => {
    md.use(require('markdown-it-imsize'))
    md.use(require('markdown-it-attrs'))
  },
  plugins: [
    ['tabs'],
    ['container', {
      type: 'section',
      before: info => `<section class="section ${info}"><div class="SectionArea-divider"/>`,
      after: '</section>',
      marker: '!'
    }],
    ['container', {
      type: 'sub-section',
      before: info => `<div class="custom-block sub-section  ${info}">`,
      after: '</div>',
      marker: '!'
    }],
    ['container', {
      type: 'section-notes',
      before: info => `<div class="section-item-container section-notes"><div class="section-topbar">${info}</div>`,
      after: '</div>',
      defaultTitle: '&nbsp;',
      marker: '+'
    }],
    ['container', {
      type: 'section-codes',
      before: info => `<div class="section-item-container section-codes"><div class="section-topbar">${info}</div>`,
      after: '</div>',
      defaultTitle: '&nbsp;',
      marker: '+'
    }],
    ['container', {
      type: 'sub-section-wrapper',
      before: info => `<details class="section-details-wrapper"><summary onclick="this.parentNode.parentNode.classList.remove('closed')"> SHOW </summary><div>`,
      after: '</div></details>',
      defaultTitle: '&nbsp;',
      marker: '='
    }]
  ]
}
