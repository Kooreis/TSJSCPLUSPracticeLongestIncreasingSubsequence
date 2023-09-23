Here is a TypeScript solution for finding the longest increasing subsequence in an array:

```typescript
class LongestIncreasingSubsequence {
    private static longestIncreasingSubsequence(arr: number[]): number[] {
        let n = arr.length;
        let tailIndexes = new Array(n).fill(0);
        let prevIndices = new Array(n).fill(-1);
        let length = 1;

        for (let i = 1; i < n; i++) {
            if (arr[i] < arr[tailIndexes[0]]) {
                tailIndexes[0] = i;
            } else if (arr[i] > arr[tailIndexes[length - 1]]) {
                prevIndices[i] = tailIndexes[length - 1];
                tailIndexes[length++] = i;
            } else {
                let l = -1;
                let r = length - 1;
                while (r - l > 1) {
                    let m = l + (r - l) / 2;
                    if (arr[tailIndexes[m]] >= arr[i]) r = m;
                    else l = m;
                }
                let pos = r;
                prevIndices[i] = tailIndexes[pos - 1];
                tailIndexes[pos] = i;
            }
        }

        let i = tailIndexes[length - 1];
        let res = new Array(length);
        for (let j = length - 1; j >= 0; j--) {
            res[j] = arr[i];
            i = prevIndices[i];
        }

        return res;
    }

    public static main() {
        let arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
        let result = LongestIncreasingSubsequence.longestIncreasingSubsequence(arr);
        console.log(result);
    }
}

LongestIncreasingSubsequence.main();
```

This program finds the longest increasing subsequence in an array using dynamic programming and binary search. The `main` function is the entry point of the program, which calls the `longestIncreasingSubsequence` function with a sample array. The result is then printed to the console.