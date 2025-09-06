// Given an integer array nums, return an array answer such that answer[i] is equal to 
// the product of all the elements of nums except nums[i]...

const ProductofArrayExceptSelf = nums => {
    let answer = [1]
    let pre = 1
    for (let i = 1; i < nums.length; i++) {
        answer[i] = pre * (answer[i - 1])
        pre = nums[i]
    }

    let post = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * post
        post = nums[i] * post
    }

    return answer
}

const arr1 = [1, 2, 3, 4]
console.log(ProductofArrayExceptSelf(arr1));
const arr2 = [1, 2, 3, 4, 5]
console.log(ProductofArrayExceptSelf(arr2));

