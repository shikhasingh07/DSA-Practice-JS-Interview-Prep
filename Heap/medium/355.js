var Twitter = function () {
  this.tweets = new Map();
  this.follows = new Map();
  this.time = 0;
};

Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.tweets.has(userId)) {
    this.tweets.set(userId, []);
  }
  this.tweets.get(userId).push([tweetId, this.time++]);
};

Twitter.prototype.getNewsFeed = function (userId) {
  const users = new Set([userId]);
  if (this.follows.has(userId)) {
    this.follows.get(userId).forEach(f => users.add(f));
  }

  const allTweets = [];
  users.forEach(uid => {
    if (this.tweets.has(uid)) {
      allTweets.push(...this.tweets.get(uid));
    }
  });

  allTweets.sort((a, b) => b[1] - a[1]);
  return allTweets.slice(0, 10).map(t => t[0]);
};

Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.follows.has(followerId)) {
    this.follows.set(followerId, new Set());
  }
  this.follows.get(followerId).add(followeeId);
};

Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (this.follows.has(followerId)) {
    this.follows.get(followerId).delete(followeeId);
  }
};

twitter = new Twitter()
twitter.postTweet(1, 5)   // user 1 posts tweet 5, time=0
twitter.postTweet(1, 3)   // user 1 posts tweet 3, time=1
twitter.postTweet(2, 8)   // user 2 posts tweet 8, time=2
twitter.follow(1, 2)      // user 1 follows user 2
console.log(twitter.getNewsFeed(1))  // [8, 3, 5]