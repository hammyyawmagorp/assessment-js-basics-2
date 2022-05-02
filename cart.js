///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.map(cart => cart.price).reduce((a, c) => (a + c))

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice (cartTotal, couponValue, tax){
    const finalPrice = (cartTotal * (tax + 1) - couponValue);
    return `Your total after tax and coupons is $${finalPrice}`
  }
  console.log(calcFinalPrice(100, 10, 0.08))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*

A restaurant would need to know what their customers name, order and if they have any food allergies. If they are over 21 and their hunger level.

Customer, name, order & allergies will be Strings.
Over 21 will be a Boolean.
Hunger level will be a Number.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/
const customer = {
    'name': 'Karan',
    'order': 'Chicken Curry',
    'allergies': 'Soy',
    'over21': false,
    'hunger': 80,
};

const customer2 = {
    'name': 'Bilal',
    'order': 'Beef Biryani',
    'allergies': null,
    'over21': true,
    'hunger': 55,
};

//CODE HERE
