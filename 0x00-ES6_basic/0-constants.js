export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();
  return combination;
}

// Call both taskFirst() and taskNext(), and concatenate the results to print the desired string
console.log(taskFirst() + ' ' + taskNext());

