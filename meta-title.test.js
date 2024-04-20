const checkMetaTitleLength = require('./meta-title.js');

test('checks if meta title length is within the recommended limit', () => {
  const shortMetaTitle = 'Short meta title';
  const longMetaTitle = 'This is a very long meta title that exceeds the recommended limit of 60 characters';

  expect(checkMetaTitleLength(shortMetaTitle)).toBe('The meta title is within the recommended length.');
  expect(checkMetaTitleLength(longMetaTitle)).toBe('The meta title is too long. It should be no more than 60 characters.');
});