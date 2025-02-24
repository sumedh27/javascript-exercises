const fibonacci = function(num) {
 //F(n) = F(n-1) + F(n-2);
 //F(4) = F(4-1) + F(4-2);
 //F(4) = F(3) + F(2)
 //   1 1 2 3 5 8 13 
    
//1+0,1,1 \\ 1 + 1 = 2,1,2 \\ 2 + 1 = 3,2,3 \\ break 

    if(num == 0) return 0;
    if(num < 0) return `OOPS`;
    

    let first = 1;
    let second = 0;

    for(let i = 2; i <= num; i++){
        let current = first + second;
        second = first;
        first = current;
    }

    return first;
};

// Do not edit below this line
module.exports = fibonacci;
