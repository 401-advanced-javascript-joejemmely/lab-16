/**
 * @module uppercaseBuffer
 * Return an uppercased buffer
 * @param {buffer} buffer
 * @returns {buffer} - uppercased buffer
 */
module.exports = buffer => {
  return Buffer.from(buffer.toString().toUpperCase());
};
