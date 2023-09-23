Here is a JavaScript solution for finding the longest increasing subsequence in an array:

```javascript
function longestIncreasingSubsequence(arr) {
    if (arr.length === 0) return 0;
    let dp = Array(arr.length).fill(1);
    let max = 1;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
}

console.log(longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]));
console.log(longestIncreasingSubsequence([3, 4, 5, 10, 2, 1]));
console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));
```

This solution uses dynamic programming to solve the problem. The `dp` array is used to store the length of the longest increasing subsequence ending at each index. For each element in the array, we check all previous elements that are smaller. If a smaller element is found, we update the `dp` value for the current element. The maximum value in the `dp` array is the length of the longest increasing subsequence.