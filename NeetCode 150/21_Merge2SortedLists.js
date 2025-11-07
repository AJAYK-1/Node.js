// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

const MergeTwoLists = (list1, list2) => {
    if (list1.length === 0) return list2
    if (list2.length === 0) return list1

    let output = new Array()
    let list1Pointer = 0
    let list2Pointer = 0

    while (list1Pointer < list1.length && list2Pointer < list2.length) {
        if (list1[list1Pointer] === list2[list2Pointer]) {
            output.push(list1[list1Pointer], list2[list2Pointer])
            list1Pointer++
            list2Pointer++
        }
        if (list1[list1Pointer] > list2[list2Pointer]) {
            output.push(list2[list2Pointer])
            list2Pointer++
        }
        if (list1[list1Pointer] < list2[list2Pointer]) {
            output.push(list1[list1Pointer])
            list1Pointer++
        }
    }

    return output
}

const list1 = [1, 2, 4]
const list2 = [1, 3, 4]

console.log(MergeTwoLists(list1, list2));
console.log(MergeTwoLists([], []));
console.log(MergeTwoLists([], [0]));
console.log(MergeTwoLists([1,3,5], [2,4,6,7,8]));
