function get3largest(arr) {
    let fst = -Infinity, sec = -Infinity, thd = -Infinity;

    arr.forEach(x => {
        // If current element is greater than fst
        if (x > fst) {
            thd = sec;
            sec = fst;
            fst = x;
        }
        // If x is between fst and sec
        else if (x > sec && x !== fst) {
            thd = sec;
            sec = x;
        }
        // If x is between sec and thd
        else if (x > thd && x !== sec && x !== fst) {
            thd = x;
        }
    });

    let res = [];
    if (fst !== -Infinity) res.push(fst);
    if (sec !== -Infinity) res.push(sec);
    if (thd !== -Infinity) res.push(thd);

    return res;
}

// Driver code
let arr = [12, 13, 1, 10, 34, 1];
let res = get3largest(arr);
console.log(res.join(' '));