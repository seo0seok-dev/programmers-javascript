function solution(my_string, n) {
    let answer = '';
    let list = my_string.split('');
    
    for (const i of list){
        for (let j=0; j < n; j++){
            answer += i;
        }
    }
    
    return answer;
}