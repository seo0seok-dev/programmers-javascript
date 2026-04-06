// repeat
function solution(my_string, k) {
    var answer = my_string.repeat(k);
    
    return answer
}

// 반복문
// function solution(my_string, k) {
//     var answer = '';
//     for(i=0;i<k;i++){
//         answer += my_string;
//     }
//     var answer = Array(k).fill(my_string).join("");
    
//     return answer;
// }

// 배열
// function solution(my_string, k) {
//     var answer = Array(k).fill(my_string).join("");
    
//     return answer;
// }