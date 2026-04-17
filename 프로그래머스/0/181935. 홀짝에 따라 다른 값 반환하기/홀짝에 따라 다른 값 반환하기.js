function solution(n) {
    nType = n % 2 === 0;
    result = 0;
    
    while(n > 0) {
        if (nType){
            result += n ** 2;     
        } else {
            result += n;
        }
        n -= 2;
    }
    return result;
}