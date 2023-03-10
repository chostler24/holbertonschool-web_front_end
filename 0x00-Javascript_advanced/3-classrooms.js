function createClassroom(numbersOfStudents) {

    function studentSeat(seat) {
        return seat;
    };

    const students = [];

    for (let num = 0; num < numbersOfStudents; num++) {
        students.push(studentSeat(num + 1));
    };

    return students;
};

{
const classRoom = createClassroom(10);
}

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
