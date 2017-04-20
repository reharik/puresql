const pgFormat = require('pg-format');

function makeAdapter () {
  return {
    escape: function (parameter) {
      if (+parameter === parameter) {
        return parameter
      } else {
        return pgFormat.literal(parameter)
      }
    },
    escapeIdentifier: function (identifier) {
      return pgFormat.ident(identifier)
    }
  }
}

module.exports = makeAdapter;
