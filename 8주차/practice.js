class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName; // constructor 내의 this는 인스턴스를 가리킨다.
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'you are expelled';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
  static EnrollStudents() {
    return 'Enrolling Students';
  }
}

let firstStudent = new Student('john', 'Park', 6);

firstStudent.addScore(30);
firstStudent.addScore(90);
console.log(firstStudent);

console.log(firstStudent.calculateAverage());
firstStudent.EnrollStudents();
