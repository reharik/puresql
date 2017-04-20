const parser = require('./parser')

/**
* Makes a function that parses passed SQL and returns a promisified function using the passed adapter.
*/
function makeQuery (sql) {
  return function (parameters, adapter) {
    // validate adapter
    if (adapter === undefined || adapter.escape === undefined) {
      throw new Error('Missing adapter!')
    }

    // validate parameters

    // return sql
    return parser.parseQuery(parameters, sql, adapter);
  }
}

// -- EXPORT
module.exports = {
  makeQuery: makeQuery
};
