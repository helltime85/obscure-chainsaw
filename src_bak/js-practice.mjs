import { apiKey } from "./util.mjs";

// console.log("The API Key is:", apiKey);

// () => {

// }

// (function() {

// })();

// export default (username, userId) => {
//     return {
//         username: username,
//         id: userId
//     }
// }



// const hobbies = ["sport", "cooking", "reading"];
 
//  for(const hobbie of hobbies){
//     console.log(hobbie);
//     }
// console.log(hobbies[0]);
// hobbies.push("coding");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item == "sport");
// console.log(index);

// const editedHobbied = hobbies.map((item) =>({text : item}));
// console.log(editedHobbied);


// const userNameData = ["Max", "Anna", "Chris"];
// const [firstName, secondName, thirdName] = userNameData;
// console.log(firstName, secondName, thirdName);
// const user = {userName: "Max", age: 30};
// //const name = user.userName;
// //const age = user.age;
// const {userName: name, age} = user;
// console.log(name, age);

// const newHobbies = ["Readig"];
// //배열객체를 그대로 병합
// const mergeHobbies_old = [hobbies, newHobbies];
// //배열을 펼쳐서 병합
// const mergeHobbies_new = [...hobbies, ...newHobbies];
// console.log(mergeHobbies_old);
// console.log(mergeHobbies_new);

// const extendeUser = {
//     isAdmin: true,
//     ...user
// };
// console.log(extendeUser);



// function init() {
//     function greet() {
//         console.log("Hello!");
//     }

//     greet();
// }

// init();

//기존값을 수정하는게 아니라 새로운 값을 생성
// let userMessage = "Hello!";
// userMessage = userMessage.concat(" How are you?");
// //주소값을 참조하므로 수정이 가능
// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Reading");
// console.log(hobbies)