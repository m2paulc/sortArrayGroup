const sortNumAlpha = require('./sortArrayThenGroup');

test('Output new Array', () => {
  const array2 = [1,1,1,1,2,2,2,2,3,'a','b'];
  var newArray = sortNumAlpha(array2);
  expect(newArray).toEqual([ [ 1, 1, 1, 1 ], [ 2, 2, 2, 2 ], 3, [ 'a', 'b' ] ]);
});

test('Output new Array no.2', () => {
  const array1 = [1,2,3,3,3,7,9,5,4,4,4,1,1,1,34,23,55,44,11,3,4,8,'a','c','b','cat','e','dog'];
  var newArray = sortNumAlpha(array1);
  expect(newArray).toEqual([ [ 1, 1, 1, 1 ],2,[ 3, 3, 3, 3 ],[ 4, 4, 4, 4 ],5,7,8,9,11,23,34,44,55,
  [ 'a', 'b', 'c', 'cat', 'dog', 'e' ] ]);
});