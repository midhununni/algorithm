/* Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.

Examples : 

Input : arr[] = {0, -1, 2, -3, 1}
Output : (0 -1 1), (2 -3 1)

Explanation : The triplets with zero sum are
0 + -1 + 1 = 0 and 2 + -3 + 1 = 0  */

const problem = array => {
    const n = array.length;
    const triplets = [];
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (array[i] + array[j] + array[k] === 0) {
                    triplets.push([array[i], array[j], array[k]])
                }

            }
        }
    }
    console.log(triplets)
}

problem([0, -1, 2, -3, 1])