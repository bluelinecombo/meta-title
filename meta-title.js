/**
 * Checks the length of a meta title and returns a message indicating if it is within the recommended length.
 *
 * @param {string} metaTitle - The meta title to be checked.
 * @returns {string} - A message indicating if the meta title is within the recommended length.
 */
function checkMetaTitleLength(metaTitle) {
    const maxLength = 60;
    if (metaTitle.length > maxLength) {
        return `The meta title is too long. It should be no more than ${maxLength} characters.`;
    } else {
        return `The meta title is within the recommended length.`;
    }
}

module.exports = checkMetaTitleLength;