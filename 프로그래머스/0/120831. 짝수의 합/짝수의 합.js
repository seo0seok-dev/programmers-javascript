function solution(n) {
    var answer = 0;
    
    if(n % 2 !== 0){
        n = n - 1;
    } 
    for (let i = n; i > 0; i -= 2){
        answer += i;
    }
    
    return answer;
}