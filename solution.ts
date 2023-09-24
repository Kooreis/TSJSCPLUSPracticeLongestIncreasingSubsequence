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