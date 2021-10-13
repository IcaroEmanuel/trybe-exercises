const students = require("./students-data");

// Retornar o nome completo de todas as pessoas estudantes de um turno específico

const filterStudentsByTurn = (students, studentTurn) => students.filter((turn) => turn.turno === studentTurn);

const returnNameAndLastname = (students) => students.map((student) => `${student.nome} ${student.sobrenome}`);

const returnAllStudentsByTurn = (students, turn) => {
  const studentsByTurn = filterStudentsByTurn(students, turn);
  return returnNameAndLastname(studentsByTurn);
}

// Encontra uma pessoa estudante pelo nome e sobrenome
const findStudentByNameAndLastname = (listOfStudents, nameOfStudent, lastNameOfStudent) => 
  listOfStudents.find((studant) => 
    studant.nome === nameOfStudent && 
    studant.sobrenome === lastNameOfStudent);

// Verificar qual a maior nota de uma pessoa estudante
const checkTheHighestScore = (listOfStudents, nameOfStudent, lastNameOfStudent) => {
  let bigger = {rate: 0, matter: ''};
  const studentInfo = findStudentByNameAndLastname(listOfStudents, nameOfStudent, lastNameOfStudent);
  const matters = studentInfo.materias.map((matter) => {
    const objMatters = {
      notas: matter.nota,
      materias: matter.name,
    };
    return objMatters;
  });
  matters.forEach(score => {
    if (score.notas >= bigger.rate) {
      bigger.rate = score.notas;
      bigger.matter = score.materias;
    }
  });
  return `Maior nota de ${nameOfStudent} ${lastNameOfStudent} = ${bigger.matter} : ${bigger.rate} pontos`;
}

// Retornar a maior nota de cada pessoa estudante
const returnHighestScoreAllStudents = () => {
  let score = [];
  const studentsFullNames = returnNameAndLastname(students);
  students.forEach((item) => {
    score.push(checkTheHighestScore(students, item.nome, item.sobrenome));
  })
  return score;
}
console.log(returnHighestScoreAllStudents());
