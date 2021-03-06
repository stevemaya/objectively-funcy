// Your code here.

const getFirstName = function (person) {
  return person.firstName;
};

const getLastName = function (person) {
  return person.lastName; 
};

const getFullName = function (person) {
  return person.firstName + ' ' + person.lastName;
};

const setFirstName = function (person, name) {
  return person.firstName == name;
};

const setAge = function (person, age) {
  return person.age == age;
};

const giveBirthday = function (person){
  if ("age" in person){
    person.age++;
  } else {
    person.age = 1;
  }
};

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
