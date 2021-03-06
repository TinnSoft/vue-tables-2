
module.exports = function(row, column, h) {

  if (this.templatesKeys.indexOf(column)==-1)
    return row[column];

  var template = this.opts.templates[column];

  template = typeof template=='function'?
            template.apply(this.$root, [h, row]):
            h(template,{
              attrs:{
                data: row
            }
          });

  return <span class='VueTables__template'>{template}</span>

}

