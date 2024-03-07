function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const valueToFind = target - nums[i];
        
        if (map.has(valueToFind)) {
            return [map.get(valueToFind), i]
        }
        else
            map.set(nums[i], i)
    };
};

const inputArr: number[] = [2,2,4];
const targetValue: number = 4;

twoSum(inputArr, targetValue)
