function createClassRoom(numbersOfStudents) {

    function studentSeat(seat) {
        return () => {return (seat);}           /* return () => seat */
    };

    let students = [];

    for (let num = 0; num < numbersOfStudents; num++) {
        students.push(studentSeat(num + 1));
    };

    return students;
};

let classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
