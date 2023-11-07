function twoSum(nums: number[], target: number): number[] {
  // let numToIndex ={}
  // for(let i = 0; i< nums.length  ; i++){
  //     const num = nums[i];
  //     let compliment:any = target - num;
  //     if( compliment in numToIndex){
  //        return [ numToIndex[compliment] , i]
  //     }
  //     numToIndex[num] = i

  // }
  //  return []

  const numToIndex = {}; // A map to store numbers and their corresponding indices

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    console.log(`Loop ${i}: num=${num}, complement=${complement}`);

    if (complement in numToIndex) {
      console.log(
        `Found a pair: num[${numToIndex[complement]}] + num[${i}] = ${target}`
      );
      return [numToIndex[complement], i];
    }

    numToIndex[num] = i;
    console.log(numToIndex, "ffff");
  }

  // If no solution is found, return an empty array or handle the error as needed
  return [];
}
