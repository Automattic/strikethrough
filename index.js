
/**
 * Module exports.
 */

module.exports = st;

/**
 * Returns the strikethrough string.
 *
 * @param {String} str
 * @api public
 */

function st(str){
  return str.replace(/./g, function(chr){
    return chr + '\u0336';
  });
}
