// const villains = [
//   { name: 'Magnetto'},
//   { name: 'Spiderman'},
//   { name: 'Sauron' }
// ];

// const checkHero = (villains, name) => {
//   for (const v of villains) {
//     if (v.name === name) return true;
//   };

//   return false;
// };

// console.log(checkHero(villains, 'Spiderman'))


// 3, create an obj course

const course = {
  name: 'Music',
  teacher: 'Bonzo',
  studentsCount: '25',
  weekDay: 'Wednesday'
}

console.log(`${course.name} by ${course.teacher}.\nEvery ${course.weekDay}, expected attendance: ${course.studentsCount}`);


const createCourse = (name,teacher,weekDay,studentsCount) => {

  return {
    name,
    teacher,
    weekDay,
    studentsCount
  }
}

console.log(createCourse('History', 'Georgieva', 'Friday', 20));

const math = createCourse('Math', 'Danova', 'Monday', '100')
const getCourseLabel = (obj) => {
  return `${obj.name} by ${obj.teacher}.\nEvery ${obj.weekDay}, expected attendance: ${obj.studentsCount}`
};

const label = getCourseLabel(math);
console.log(label);