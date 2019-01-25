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
  it('should insert the given value to the head (modulo len) of the circular array', () => {
    const circularArray = {
      array: [-1, -1, -1, -1, -1, -1, -1],
      tail: 0,
      head: 0,
      len: 7,
    };
    expect(sortingArray.insertSmallest(1, circularArray)).toEqual({
      array: [1, -1, -1, -1, -1, -1, -1],
      tail: 0,
      head: 0,
      len: 7,
    });
  });
});

describe('insertLargest', () => {
  it('should insert the given value to the tail (modulo len) of the circular array', () => {
    const circularArray = {
      array: [1, 2, 3, 4, -1, -1],
      tail: 3,
      head: 0,
      len: 6,
    };
    expect(sortingArray.insertLargest(7, circularArray)).toEqual({
      array: [1, 2, 3, 4, 7, -1],
      tail: 4,
      head: 0,
      len: 6,
    });
  });
  it('should insert the given value to the tail (modulo len) of the circular array', () => {
    const circularArray = {
      array: [3, 4, 5, 6, 7, -1, 2],
      tail: 4,
      head: 6,
      len: 7,
    };
    expect(sortingArray.insertLargest(8, circularArray)).toEqual({
      array: [3, 4, 5, 6, 7, 8, 2],
      tail: 5,
      head: 6,
      len: 7,
    });
  });

  it('should insert the given value to the tail (modulo len) of the circular array', () => {
    const circularArray = {
      array: [-1, 4, 5, 6, 7, 8, 10],
      tail: 6,
      head: 1,
      len: 7,
    };
    expect(sortingArray.insertLargest(11, circularArray)).toEqual({
      array: [11, 4, 5, 6, 7, 8, 10],
      tail: 0,
      head: 1,
      len: 7,
    });
  });
});
