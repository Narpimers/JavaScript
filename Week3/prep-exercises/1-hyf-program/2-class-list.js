import { modules, students, mentors, classes} from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 * 
 * 
 */

// const mentorsCanTeach = mentors
// .filter(methods => methods.canTeach.some(method => method === moduleName)) 
// .map(mentor => mentor.name);
// return mentorsCanTeach;

const getPeopleOfClass = (className) => {

  const studentsInClass = students.filter(student => student.class === className)
  .map(student => student.name);

  const moduleName = classes.filter(whatClassIs => whatClassIs.name === className)
  .map(module => module.currentModule)[0];
  
  const mentorName =  mentors.filter(mod => mod.nowTeaching === moduleName)
  .map(TeacherName => TeacherName.name)[0];

  const listOfNames = [
    {
      name: studentsInClass[0],
      role: 'student'
    },
    {
      name: mentorName,
      role: 'mentor'

    },
  ];
  return listOfNames;
};
// You can uncomment out this line to try your function
// console.log(getPeopleOfClass('class34'));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */

const getActiveClasses = () => {
  const activeClasses = classes.filter(cls => cls.active);

  const result = {};
  
  activeClasses.forEach(element => {
    result[element.name] = getPeopleOfClass(element.name);
  });

  return result; 
};
console.log(getActiveClasses());