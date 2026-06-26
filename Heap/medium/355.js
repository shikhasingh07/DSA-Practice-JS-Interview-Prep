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

Twitter.prototype.getNewsFeed = function (userId) {};

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
