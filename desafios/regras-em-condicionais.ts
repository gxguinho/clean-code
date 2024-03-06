// O código em que que você vai praticar esses conceitos contém uma 
// função que verifica se um aluno irá ou não ser aprovado 
// ao final do ano escolar.

//Exemplo: regras_em_condicionais


const necessaryGradeToBeApproved = 7
const studentGrade = 10

const numberOfAbsensesToFailSchool = 100
const studentNumberOfAbsenses = 109

function checkIfStudentPassedTheSchoolYear() {
  const studentIsApproved = studentGrade < necessaryGradeToBeApproved;
  if (studentIsApproved) {
    return { error: true, message: 'Student was not approved because his grade was below the necessary.'}
  }
  const studentHasMinimumAttendance = studentNumberOfAbsenses > numberOfAbsensesToFailSchool;
  if(studentHasMinimumAttendance) {
    return { error: true, message: 'Student was not approved because of his absenses'}
  }
  return { error: false, message: 'Student was approved :)'}
}

console.log(checkIfStudentPassedTheSchoolYear())