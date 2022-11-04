function groupby(list, by) {
  return list.reduce((prev, current) => {
    current;
    const key = current[by];
    key;
    if (!key in prev) {
      prev[key].push(current);
    } else {
      prev[key] = [current];
    }
    return prev;
  }, {});
}
// list = [
//   { name: "test1", age: 30 },
//   { name: "test2", age: 30 },
//   { name: "test3", age: 20 },
//   { name: "test3", age: 40 },
//   { name: "test5", age: 30 },
//   { name: "test6", age: 40 },
//   { name: "test6", age: 40 },
// ];
// console.log(groupby(list, "age"));

function twoSum(list, k) {
  // for (let i = 0; i < list.length; i++) {
  //   for (let j = i + 1; j < list.length; j++) {
  //     if (list[i] + list[j] === k) {
  //       return [list[i], list[j]];
  //     }
  //   }
  // }
  const obj = {};
  for (let i = 0; i < list.length; i++) {
    const n = list[i];
    const key = k - n;
    if (obj.hasOwnProperty(key)) {
      return [key, n];
    }
    obj[n] = i;
  }
}
// const list = [5, 2, 12, -1, 18, 1, 4, -3, 9];
// console.log(twoSum(list, 17));

function findMissingNumber(list) {
  let res = [];
  for (let i = 0; i < list.length; i++) {
    const a = list[i];
    const b = list[i + 1];
    if (b && b - a === 2) {
      res.push(a + 1);
    }
  }
  return res;
}
// const list = [1,2,3,5,6,8,9,10]
// console.log(findMissingNumber(list));

function getDuplicates(list) {
  let res = [];
  let obj = {};
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (element in obj) {
      if (!obj[element]) {
        res.push(element);
        obj[element] = true;
      }
    } else {
      obj[element] = false;
    }
  }

  return res;
}
// const list = [1, 3, 4, 5, 6, 1, 5, 8, 1];
// console.log(getDuplicates(list));

function getBookCollection(list) {
  return list.reduce((prev, curre) => {
    prev.push(...curre.books);
    return prev;
  }, []);
}
// const list =[
//     {
//         name:"ali",
//         books:["b","c","d"],
//         age:21
//     },
//     {
//         name:"nima",
//         books:["e","f","g"],
//         age:21
//     },
//     {
//         name:"reza",
//         books:["h","i"],
//         age:21
//     }
// ]

// console.log(getBookCollection(list));

function wordCount(list) {
  return list.reduce((prev, curr) => {
    if (curr in prev) {
      prev[curr] += 1;
    } else {
      prev[curr] = 1;
    }
    return prev;
  }, {});
}
// const list = [1,2,2,8]
// console.log(wordCount(list));
function unique(list) {
  let obj = {};
  let result = [];
  for (let i = 0; i < list.length; i++) {
    let node = list[i];
    node;
    if (!obj.hasOwnProperty(node)) {
      obj[node] = i;
    }
  }
  obj;
  result.push(...Object.keys(obj));
  return result;
}
// const list = [1, 2, 3, 1, 4, 5,4,4,5,4,];
// console.log(unique(list));
let obj2 = {
  name: "ali",
  age: 20,
};
// console.log(Object.keys(obj2))
class SuperMap {
  #map = {};
  #size = 0;
  constructor() {}
  set(key, value) {
    this.#map[key] = value;
    this.#size++;

    return this;
  }
  get(key) {
    return this.#map[key];
  }
  delete(key) {
    delete this.#map[key];
    this.#size--;

    return this;
  }
  get size() {
    return this.#size;
  }
  clear() {
    this.#map = {};
    return this;
  }
  keys() {
    return [...Object.keys(this.#map)];
  }
  values() {
    return [...Object.values(this.#map)];
  }
  has(key) {
    return this.#map.hasOwnProperty(key);
  }
  forEach(func) {
    this.entries().forEach(([key, value]) => {
      func(value, key, this.#map);
    });
  }
  entries() {
    let res = [];
    for (const key in this.#map) {
      let value = this.#map[key];
      res.push([key, value]);
    }
    return res;
  }
}
function a() {
  console.log(name);
  console.log(age);
  var name = "ali";
  let age = 22;
}
for (var a = 0; a < 3; a++) {
  // setTimeout(() => console.log(a), 1);
}
for (let a = 0; a < 3; a++) {
  // setTimeout(() => console.log(a), 1);
}

const obj = {
  a: 10,
  b() {
    return this.a * 2;
  },
  d: () => 2* Math.PI * this.a,
};
// console.log(obj.b());
// console.log(obj.d());

// console.log(new Number(4));
// function alie() {
//   console.log("aliealkwdshfasiuhd");
// }
// alie.dark = "aljfh"
// console.log(alie);
// let khiar = 10
// console.log(khiar++);
// console.log(++khiar);
// console.log(khiar);
// function alireza(data) {
//   if(date=={age:18}){
//     console.log("a");
//   }else if(date==={age:18}){
//     console.log("b");
//   }else{
//     console.log("c");
//   }
// }
// let date = {age:18}
// alireza(date)




// const $a =  {}
// const $b = {key:" b"}
// const $c = {key:" c"}
// $a[$b] =123
// console.log($a);

// $a[$c]=456
// console.log($a);

// console.log($a);



(()=>{
  let x , y;
  try{
    throw new Error
  }catch(x){
    (y=2)
    // console.log(x);
  }
  // console.log(x);
  // console.log(y);
})()

function countBy(list,by) {
  let callback = (node)=>(typeof by === "function"?by(node):node[by])
  return list.reduce((prev,curr)=>{
    let res = callback(curr)
    prev.push(res)
    return prev
  },[])
}
// console.log(countBy(["alireza","mohammad","nima"],"length"));


function groupByPro(list,by) {
  const callback = (node)=>(typeof by ==="function")?by(node):node[by]
  return list.reduce((prev,curr)=>{
    let res = callback(curr)
    if(res in prev){
      prev[res]+=1
    }else{
      prev[res]= 1
    }
    return prev
  },{})
}
// console.log(groupByPro([6.2,4.3,6.8],Math.floor));
function deepClone(obj) {
  return Object.keys(obj).reduce((prev,key)=>{
    let value = obj[key]
    prev[key]=typeof value === "object"?deepClone(value):obj[key]
    return prev
  },{})
}
// console.log(deepClone({a:3,b:{c:4}}));

function findMissingNumber(list) {
  for (let i = 0; i < list.length; i++) {
    // let befor = list[i]
    // let next = list[i+1]
    // if(next-befor===2){
    //   return befor+1
    // }
    if(list[i]+1!==list[i+1]){
      return list[i] +1
    }
  }
}
console.log(findMissingNumber([1,2,3,4,5,7,8,9,10]));

function findMaxMin(list) {
  // list.sort()
  // let min = list[0]
  // let max = list[list.length-1]
  // return{min,max}
  let min = list[0]
  let max = list[0]
  for (let i = 0; i < list.length; i++) {
    if(min>list[i]){
      min= list[i]
    }else if(max<list[i]){
      max = list[i]
    }
  }
  return{min,max}
}
// console.log(findMaxMin([2,4,6,5,9,1,8,6,]));

function sumArray(list) {
  let res = [list[0]]
  for (let i = 1; i < list.length; i++) {
    res.push(list[i]+list[i-1])    
  }
  return res
}
// console.log(sumArray([1,2,5,8]));

function duplicate(list) {
  const obj = {}
  return list.reduce((prev,node)=>{
    if(obj[node]){
      if(obj[node]===1){
        prev.push(node)
        obj[node]++
      }
    }else{
      obj[node]=1
    } 
    return prev
  },[])
}
// console.log(duplicate([1,1,2,3,3,2,2,4,,4,6,6,6,,,8,8,8,7,7,,7,]));


function topSum(list) {
  let first = list[0]
  let second = list[1]
  for (let i = 0; i < list.length; i++) {
    if(list[i]>first){
      second = first
      first=list[i]
    }else if (list[i]>second){
      second = list[i]
    }    
  }
  return first+second
}
console.log(topSum([1,2,3,6,4,3,8]));


var e = {
  c:"jksdf"
}
var e1= Object.create(e)
delete e.c
 
// console.log(e.c)
// console.log(true+true);
// var z = 1, z  = typeof z;
// console.log(z);


let myobj = {
  a:22
} 
let $o = Object.create(myobj)
var bar = true;
console.log(bar + 0);   
console.log(bar + "xyz");  
console.log(bar + true);  
console.log(bar + false);
var salary = "1000$";
console.log(salary);
(function () {
  salary
  console.log("Original salary was " + salary);

  var salary = "5000$";

  console.log("My New Salary " + salary);
})();



console.log(!null);