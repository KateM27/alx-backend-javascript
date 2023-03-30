export default function signUpUser(firstName, lastName) {
  const details = {
    firstName,
    lastName,
  };
  return Promise.resolve(details);
}

// console.log(signUpUser("Cate", "Mamo"));