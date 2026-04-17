function solution(ineq, eq, n, m) {
    let result = 0;
    
    switch (true){
        case ineq === ">" && eq === "=":
            result = n >= m ?  1 : 0;
            break;
        case ineq === "<" && eq === "=":
            result = n <= m ?  1 :  0;
            break;
        case ineq === ">" && eq === "!":
            result = n > m ?  1 :  0;
            break;
        case ineq === "<" && eq === "!":
            result = n < m ?  1 :  0;
            break;    
    }
    return result
}