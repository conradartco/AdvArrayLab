"use strict";

//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

// function filterExample(){
//     //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
//     let results;
//     results = dishes.filter(function(el){
//         console.log("el inside filterExample's filter: ", el)
//         if(el.cuisine === "Mexican"){
//             return true;
//         }
//         else{
//             return false;
//         }})

//     return results;
// }

// let mexicanFood = filterExample();
// console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

// function getVegetarians(dishesArray)){

//     let results = dishesArray.filter(
//         function(el){
//             return (el.cuisine === "Vegetarian");
//         }
//     );
//     return results;
// }

// console.log(getVegetarians(dishes));

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter

// function getCuisineTypes(dishesArray) {
//     let userCuisine = prompt("Enter a cuisine type: Mexican, Italian, Vegetarian, Hungarian, French, Irish, Vietnamese");
//     let results = dishesArray.filter(function(el){
//         return (el.cuisine === userCuisine);
//     });
//     return results
// }

// console.log(getCuisineTypes(dishes));

//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

// function getItaliano(dishesArray) {
//     let results = dishesArray.filter(function(el){
//         return (el.cuisine === "Italian" && el.servings > 5)
//     });
//     return results
// }

// console.log(getItaliano(dishes));

//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter

// function getIdMatches(dishesArray) {
//     let results = dishesArray.filter(function(el){
//         return (el.id === el.servings);
//     });
//     return results
// }

// console.log(getIdMatches(dishes));

//5. Create a function that will return only dishes whose serving count is even.
//Filter

// function getEvenDishes(dishesArray) {
//     let results = dishesArray.filter(function(el){
//         return (el.servings %2 == 0);
//     });
//     return results;
// }

// console.log(getEvenDishes(dishes));

//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter

// function getAllChickpeas(dishesArray) {
//     let results = dishesArray.filter(function(el){
//         return (el.ingredients.includes('chickpea'));
//     });
//     return results;
// }

// console.log(getAllChickpeas(dishes));

//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter

// function getIngredient(dishesArray) {
//     let userIngredientSelect = prompt("Please enter an ingredient: tomato, cheese, corn, flour, sugar, chickpea, parsley, beef, ginger")
//     let results = dishesArray.filter(function(el){
//         return (el.ingredients.includes(userIngredientSelect));
//     });
//     return results;
// }

// console.log(getIngredient(dishes));

//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map

// function getAllCuisines(dishesArray) {
//     let results = dishesArray.map(function(el){

//         return el.cuisine;
//     });
//     return results;
// }

// console.log(getAllCuisines(dishes));

//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 

// function getCuisineType(dishesArray) {
//     let results = dishesArray.map(function(el){
//         return el.cuisine + " " + el.name;
//     });
//     return results
// }

// console.log(getCuisineType(dishes))

//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]

// function getVegetarianOnly(dishesArray) {
//     let vegMeals = dishesArray.filter(function(el){
//         return (el.cuisine === "Vegetarian");
//     });
//     let results = vegMeals.map(function(el){
//         return el.cuisine + " " + el.name;
//     });
//     return results
// }

// console.log(getVegetarianOnly(dishes))



//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.

// function getCuisineStr(dishesArray) {
//     let results = dishesArray.map(function(el){
//         return el.cuisine;
//     });
//     let newResult = removeDupes(results)
//     return newResult;
// }

// function removeDupes(myArray) {
//     var uniqueArray = [];
//     myArray.forEach(el => {
//         if (!uniqueArray.includes(el)) {
//             uniqueArray.push(el);
//         }
//     });
//     return uniqueArray;
// }

// console.log(getCuisineStr(dishes));

//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

// function findSpecific(dishesArray) {
//     let results = dishesArray.filter(function(el){
//         return (el.ingredients.includes('tomato') || el.ingredients.includes('cheese'));
//     });
//     return results;
// }

// console.log(findSpecific(dishes));

//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

// function getServingCount(dishesArray) {
//     let servingTotal = dishesArray.map(function(el){
//         return el.servings 
//     })
//     let sum = servingTotal.reduce(function(total, el){
//         return total + el;
//     })
//     return sum;
// }

// console.log(getServingCount(dishes));

//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

// function findSoloCuisineType(dishesArray) {
//     let results = dishesArray.map(function(el){
//         return el.cuisine;
//     })
//     /* recieve array with singular cuisine types and translate to objects in original array */
//     let newResult = findCuisineType(results);
//     return newResult;
// }

// function findCuisineType(results) {
//     var newArray = [];
//     results.forEach(el => {
//         /* this needs to only add non-repeated cuisine types to the newArray */
//         if (!newArray.includes(el)) {
//             newArray.push(el);
//         }
//     });
//     return newArray;
// }

// console.log(findSoloCuisineType(dishes));