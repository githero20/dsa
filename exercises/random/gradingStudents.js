function gradingStudents(grades) {
  // Write your code here
  // if grade < 38, return grade
  // if grade +1 or +2, is a multiple of 5, update grade
  // else return grade
  let myGrades = [];
  for (let grade of grades) {
    if (grade < 38) {
      myGrades.push(grade);
    } else if ((grade + 1) % 5 == 0) {
      myGrades.push((grade += 1));
      // console.log(grade += 1)
    } else if ((grade + 2) % 5 == 0) {
      myGrades.push((grade += 2));
      // console.log(grade += 2)
    } else {
      myGrades.push(grade);
      // console.log(grade);
    }
  }
  return myGrades;
}

// shorter version
function gradingStudents(grades) {
  let myG = [];
  for (let g of grades) {
    myG.push(g < 38 || g % 5 < 3 ? g : g + (5 - (g % 5)));
  }
  // remember % 5 is the remainder from the last full division of 5.
  // so 69 % 5 == 4; != 1
  return myG;
  // console.log(myG);
}

function gradingStudents(grades) {
  let myG = [];
  for (let g of grades) {
    myG.push(g < 38 || g % 5 < 3 ? g : g + (5 - (g % 5)));
  }
  // ternary expression, brackets mostly unnecessary
  return myG;
}

gradingStudents([67, 36, 38, 39, 73, 71]);
