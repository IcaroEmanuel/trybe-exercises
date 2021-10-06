const students = require("./students-data");

// Retornar o nome completo de todas as pessoas estudantes de um turno específico

const filterStudentsByTurn = (students, studentTurn) => students.filter((turn) => turn.turno === studentTurn);

const returnNameAndLastname = (students) => students.map((student) => `${student.nome} ${student.sobrenome}`);

const returnAllStudentsByTurn = (students, turn) => {
  const studentsByTurn = filterStudentsByTurn(students, turn);
  return returnNameAndLastname(studentsByTurn);
}

console.log(returnAllStudentsByTurn(students, 'Tarde'));
