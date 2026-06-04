function solution(num_list) {
    const indexes = num_list
        .filter((i) => i < 0)
        .map((i) => num_list.indexOf(i));
    return indexes.length > 0 ? indexes[0] : -1;
}