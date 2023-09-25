let i = tailIndexes[length - 1];
        let res = new Array(length);
        for (let j = length - 1; j >= 0; j--) {
            res[j] = arr[i];
            i = prevIndices[i];
        }

        return res;