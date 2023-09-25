int longestIncreasingSubsequence(std::vector<int> arr) {
    if (arr.empty()) {
        return 0;
    }

    std::vector<int> dp(arr.size(), 1);
    for (int i = 1; i < arr.size(); i++) {
        for (int j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = std::max(dp[i], dp[j] + 1);
            }
        }
    }

    return *std::max_element(dp.begin(), dp.end());
}