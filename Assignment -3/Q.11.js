const studentsData = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};
const result = Object.fromEntries(
    Object.entries(studentsData).map(([student, subjects]) => [
        student,
        { average: Math.round(Object.values(subjects).reduce((a, b) => a + b) / Object.values(subjects).length) }
    ])
);
console.log(result);