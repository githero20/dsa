class Student {
  firstName: string;
  lastName: string;
  year: number;
  scores: number[];

  constructor(firstName: string, lastName: string, year: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
  }

  addScores(score: number) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAvg() {
    if (this.scores.length < 1) return 0;
    let sum = this.scores.reduce((prev, curr) => prev + curr);
    return sum / this.scores.length;
  }

  //Static methods in JS classes are only called by the parent class not the instances of the class.
  //So this is for utility methods that are required by the class but can’t be used by instances of it.

  static EnrollStudents() {
    return "Enrolling Students!";
  }
}
