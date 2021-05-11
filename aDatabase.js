const userData = {
    fullName: " ",
    city: " ",
    dob: " ",
    skills: {
        codingLang: [" ", " "],
        softSkills: [" "],
        lang: [" "," "],
    }
}
const prompt_sync = require('prompt-sync');
const input = prompt_sync();
const print= (store) => console.log(store);
const fullName = input("enter nmae:");
const city = input("enter city: ");
const dob = input("enter DoB: ");
const skills = input("enter skills: ");
const codingLang = input("enter coding languages: ");
console.log(fullName);
console.log(city);
console.log(dob);
console.log(skills);
console.log(codingLang);
console.log(codingLang[0]);
