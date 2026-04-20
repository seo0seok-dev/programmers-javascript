function solution(n)
{
    let answer = 0;
    let nArray = Array(...String(n));
    
    for (const i of nArray){
        answer += parseInt(i);
    }
    
    return answer;
}