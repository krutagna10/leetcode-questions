const intersect = (arr1: number[], arr2: number[]): number[] => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  const ans: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      ans.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return ans;
};

const arr1: number[] = [1, 2, 2, 1];
const arr2: number[] = [2, 2];
console.log(intersect(arr1, arr2));
