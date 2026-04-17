function solution(a, b) {
    var answer = 0;
    aa = String(a) + String(b);
    bb = 2 * a * b;
    
    answer = Number(aa) > Number(bb) ? Number(aa) : Number(bb)
    
    return answer;
}