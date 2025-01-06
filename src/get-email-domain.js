const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const preRender = email.split('@'); 
    const render = preRender.slice(1);
    const result = render.toString();
    const finalResult = result.slice(1, result.length);
  console.log(finalResult);
}

module.exports = {
  getEmailDomain
};
