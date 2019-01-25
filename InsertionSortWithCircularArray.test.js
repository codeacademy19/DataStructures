const sortingArray = require('./InsertionSortWithCircularArray');

describe('insertSmallest', () => {
  it('should insert the given value to the head (modulo len) of the circular array', () => {
    const circularArray = {
      array: [3, 4, 5, 6, -1, -1, -1],
      tail: 3,
      head: 0,
      len: 7,
    };
    expect(sortingArray.insertSmallest(2, circularArray)).toEqual({
      array: [3, 4, 5, 6, -1, -1, 2],
      tail: 3,
      head: 6,
      len: 7,
    });
  });
  it('should insert the given value to the head (modulo len) of the circular array', () => {
    const circularArray = {
      array: [3, 4, 5, 6, -1, -1, 2],
      tail: 3,
      head: 0,
      len: 7,
    };
    expect(sortingArray.insertSmallest(1, circularArray)).toEqual({
      array: [3, 4, 5, 6, -1, 1, 2],
      tail: 3,
      head: 5,
      len: 7,
    });
  });
});
