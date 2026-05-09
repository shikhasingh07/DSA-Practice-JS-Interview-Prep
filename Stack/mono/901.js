var StockSpanner = function() {
    this.stack = [];
};

StockSpanner.prototype.next = function(price) {
    let span = 1;
    let top = this.stack[this.stack.length - 1];
    while(this.stack.length > 0 && top[0] <= price){
        span += top[1]; 
        this.stack.pop(); 
        top = this.stack[this.stack.length - 1];
    }
     this.stack.push([price,span]); 
        return span;
};
StockSpanner stockSpanner = new StockSpanner();
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]];

stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85);  // return 6
