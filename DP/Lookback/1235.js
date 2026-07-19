function binarySearch(jobs, i, target) {
    let lo = 0, hi = i;
    let result = 0;
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (jobs[mid][1] <= target) {
            result = mid + 1;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return result;
}

var jobScheduling = function (startTime, endTime, profit) {

    let jobs = [];
    for (let i = 0; i < startTime.length; i++) {
        jobs.push([startTime[i], endTime[i], profit[i]]);
    }

    jobs.sort((a, b) => a[1] - b[1]);
    let dp = new Array(jobs.length + 1).fill(0);

    dp[0] = 0;

    for (let i = 1; i <= jobs.length; i++) {
        let [start, end, p] = jobs[i - 1];
        let lastNonOverlap = binarySearch(jobs, i - 1, start); // i-1 tak search karo

        let skip = dp[i - 1];
        let include = p + dp[lastNonOverlap];

        dp[i] = Math.max(skip, include);
    }

    return dp[jobs.length];
};

let startTime = [1, 2, 3, 3], endTime = [3, 4, 5, 6], profit = [50, 10, 40, 70];
console.log(jobScheduling(startTime, endTime, profit))
