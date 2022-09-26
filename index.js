// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2); 
}

// function returnLastTwoDrivers() {
//     const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//     return ['Amari', 'Mo'];
// }   

const returnLastTwoDrivers = drivers => drivers.slice(2,4); 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

// function fareDoubler(fare) {
//     return fare * 2; 
// }
// let fareDoubler = fare => fare * 2;  
let fareDoubler = createFareMultiplier(2);

// let fareTripler = fare => fare * 3; 
let fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = (arrayOfDrivers,returnFirstTwoDrivers) => returnFirstTwoDrivers(arrayOfDrivers);