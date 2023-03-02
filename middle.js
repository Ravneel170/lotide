function middle(arr) {
  const length = arr.length;
  const midIndex = Math.floor(length / 2);

  // If the length of the array is odd, return the middle element
  if (length % 2 !== 0) {
    return arr[midIndex];
  }
  // If the length of the array is even, return the middle two elements
  else {
    return [arr[midIndex - 1], arr[midIndex]];
  }
}
