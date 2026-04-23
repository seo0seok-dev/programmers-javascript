function solution(array) {
    var answer = [0, 0];
    array.forEach((a, index) => {
        if(a === Math.max(...array)){
        answer[0] = a;
        answer[1] = index;
        }
    }
    );
    return answer;
}