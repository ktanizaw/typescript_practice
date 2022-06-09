export { };

let profile1: object = { name: 'Kenta' };
profile1 = { birthYear: 1993 }

let profile2: {
  name: string;
} = { name: 'Kenta' };

// profile2 = { birthYear: 1993 }

console.log(profile1);