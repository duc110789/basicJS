function markTotal(marks) {
    if (marks >= 90 && marks <= 100) {
        return true;
    }
    else {
        return false;
    }
}
console.log(markTotal(95));