module.exports = {
  
    "helpers": {
      "if_or": function (v1, v2, options) {
        if (v1 || v2) {
          return options.fn(this);
        }
  
        return options.inverse(this);
      },
      template_version() {
        return templateVersion
      },
    },
  
    "prompts": {
      "name": {
        "type": "input",
        "required": true,
        "message": "项目名"
      },
      "author": {
        "type": "input",
        "message": "作者"
      },
    }
  }