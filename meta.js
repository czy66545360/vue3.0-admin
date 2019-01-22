module.exports = {
    "helpers": {
      "if_or": function (v1, v2, options) {
        if (v1 || v2) {
          return options.fn(this);
        }

        return options.inverse(this);
      },
    },

  'prompts': {
    'name': {
      'type': 'input',
      'required': true,
      'message': '项目名'
    },
    'author': {
      'type': 'input',
      'message': '作者'
    },
    'iviewColor': {
      'type': 'input',
      'message': 'iview 的主题色',
      'default': '#ff7300'
    }
  },

  filters: {//根据命令行交互的结果过滤将要渲染的项目文件
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'build/webpack.test.conf.js': 'unit && runner === \'karma\'',
    'test/unit/**/*': 'unit',
    'test/unit/index.js': 'unit && runner === \'karma\'',
    'test/unit/jest.conf.js': 'unit && runner === \'jest\'',
    'test/unit/karma.conf.js': 'unit && runner === \'karma\'',
    'test/unit/specs/index.js': 'unit && runner === \'karma\'',
    'test/unit/setup.js': 'unit && runner === \'jest\'',
    'test/e2e/**/*': 'e2e',
    'src/router/**/*': 'router'
  }
}
