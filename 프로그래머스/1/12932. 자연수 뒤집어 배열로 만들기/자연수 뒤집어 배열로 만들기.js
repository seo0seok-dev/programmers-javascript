function solution(n) {
    var answer = [];
    let list = n.toString().split('');
    for (i=0; i<n.toString().length; i++){
        answer.push(parseInt(list.pop()));
    }
    
    return answer;
}