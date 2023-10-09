<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A : {} .

<i>Answer is {}. Becasue first of all decalred a variable called "greeting" but not assign any value.as a result the answer would be undefined.But later, because of assign an curly bracket {} in the greeting variable. the answer is empty object it means {}.</i>
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: c : 12 ?

<i>Correct answer is 12. first of all I want to say that 12 is string not a number. because 2 input values taken in sum function. input one is 1 it just a number but another one is 2 . 2 is string not number. javascript dynamically typed based language. So Since the second input is a string, that's why JavaScript concatenates it and returns 1 + "2" = 12.  </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A : ['🍕', '🍫', '🥑', '🍔'] ?

<i>Write answer is A.Because the code does not modify the food array. it change the value of info.favoriteFood to "🍝". However, this change only affects the info object; it does not modify the original food array. that's whay A is correct </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B:Hi there, undefined

<i>B is correct answer. Because a parameter is declared in the function called "sayHi" but no value is passed in the parameter.
  Because of which it shows undefined. just only return Hi there, but name is undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: c: 3 ?

<i> Result C is correct becasue I can see the base of condition, how many times forEach method has been iteratd. if condition is true then itarate forEach method. other wise not iterate. So 0 is false Then will not be able to enter the ForEach method and not iterated. 1 is ture,then iterate count 1, 2 is ture,then iterate count 2. 3 is ture,then iterate count 3. Now since there are no more values in the array then the condition ends here. And counted three times so the answer is three  </i>

</p>
</details>
