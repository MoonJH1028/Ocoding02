// let user={
//     name: 'youn',
//     age: 18,
// };

// let fruits = ['사과', '오렌지','자두'];

// alert(user.name);
// alert(user["name"]);
// const a = 'name';
// alert(fruits[0]);
// alert(user[a])


// let user = {};
//  user.name='john';
//  user.surname = 'smith';
// //  user.name ='pete';
// //  delete user.name;

// let slaaries = {
//     John : 100,
//     Ann : 160,
//     Pete: 130
// };

// let sum = 0;
// for(let key in slaaries){
//     sum +=slaaries[key];
// }

// alert(sum);


// let menu={
//     width : 200,
//     height: 300,
//     title: 'my menu'
// };
// function multiplyNumeric(obj) {
//     for (let key in obj){
//         if(typeof obj[key] == 'number'){
//             obj[key] *= 2;
//         }
//     }
// }
// alert(menu);

// const user = {
//     name: 'John'
// };

// user.name = "pete"

// let user = { name:'john'};
// let admin = {name : 'admin'};

// function sayHi(){
//     alert(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();

let ladder = {
    step: 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep(){
        alert(this.step);
        return this;
    }
};

ladder.up().up().up().down().showStep()