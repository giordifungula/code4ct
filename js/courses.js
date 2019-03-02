'use strict';



let totalAmount;
let cartNumber = 0;

// Store Cart Heading and CardContent
let cartHeading = document.getElementById('cartHeading');//$('#cartHeading');
let cartContent = document.getElementById('cart');

// Show and Hide the Cart
cartHeading.addEventListener('click', function(){
    cartContent.classList.toggle('displayCart');
    // console.log(cartContent);
});

// Store cart Buttons
let cartbtn = document.querySelectorAll('.cartItem');


cartbtn.forEach(function(btn){
    // when clicked on any button
    // let cartItemtext = btn.childNodes[0].textContent;
    //    let name = btn.target.parentElement.children[0].textContent;
    //     let price = btn.target.parentElement.children[3].textContent;
    btn.addEventListener('click', function(e){
        alert('item added');
        // Empty Object
        let item = {

        };
        // Grabs the Name of Course
        let name = e.target.parentElement.children[0].textContent;
        item.name = name;
        // Grabs the price of course
        let price = e.target.parentElement.children[3].textContent;
        item.price = price;
        // Extracts the string characters

        let finalPrice = price.slice(6).trim();
        item.price = finalPrice;

        // Create Cart Item

        let cartItem = document.createElement('div');
        // adds the cartItem class to created div
        cartItem.classList.add('cartItem');
        // adds template HTML content

        cartItem.innerHTML = 
        `
                       <div class="cartItemText">
                        <p id="cartItemName" class="">${item.name}</p>
                        <span>R</span>
                        <span id="cartItemPrice" class="cartItemPrice">${item.price}</span>
                    </div>
                    <div class="updateBtn">
                        <a href="#" id="cartItemRemove" class="cartItemRemove">
                                <i class="fas fa-trash">Remove</i>   
                        </a>
                    </div>
        `
        let updatedCart = document.getElementById('cart');
        let total = document.getElementById('cartTotalPrice');
        console.log(total);
        alert('the total value is ');
        console.log(total);
        // Total is grabbing element only is adding the new item to cart 
        cartContent.appendChild(cartItem, total);
        // Stores the newly addedItem to the cart Content
        let dynamicCartContent = document.getElementById('cart');
                // Store the cartItems inside the cart Contents
        let newCartItem = dynamicCartContent.querySelectorAll('.cartItem');
        
        // Loop through the array and check if something is removed
        for(let i = 0;i < newCartItem.length;i++){
            let cartItemsTotal = newCartItem.length;
            if(cartItemsTotal != newCartItem.length){
                alert('The length has been changed');
            }
        }
               
        console.log('Stored Item Carts', newCartItem);
        displayTotals();
        let deleteBtn = document.querySelectorAll('.cartItemRemove');
        deleteBtn.forEach(function(btn){
            btn.addEventListener('click',function(e){
                // The dynamically added cart 
                //  Going to add this to the create button 
                let dynamicCartContent = document.getElementById('cart');
                // // Store the cartItems inside the cart Contents
                let newCartItem = dynamicCartContent.querySelectorAll('.cartItem');

                // Loop through the Items
                

               
                // console.log('Stored Item Carts', newCartItem);
                let removeItem = e.target.parentElement.parentElement.parentElement.remove();

                if(newCartItem){
                    newCartItem.querySelectorAll('cartItemPrice');
                    console.log('The Left over things are', newCartItem);
                // Update the removed Items
                let total = document.getElementById('cartTotalPrice');
                // Locate the second cartTotal Price
                let totalSecond = document.getElementById('allTotalCost');
                
                // Make the ID Total's display to the actual amount
                // total.textContent = ;
                // Store the second Total content and display    
                totalSecond.textContent = finalMone;
                }

                console.log('Something removed total left is  ', newCartItem);
                
                let updatePrices = document.getElementById('cartTotalPrice');

                alert('Your Cart is cleared','Please add another Item !');
                // document.getElementById('cartTotalPrice').innerHTML = 0;

                // let previousAmount = document.getElementById('cartTotalPrice').innerText.remove();
                let itemRow = e.target.parentElement.parentElement.parentElement;
                let itemRowPrices = itemRow.getElementsByClassName('cartItemPrice')[0];
                // Capture the Prices Container

                // for(let i =0;i<itemRowPrices.length;i++){
                //     let updatePrice = document.getElementById('cartTotalPrice');
                //     // updatePrice.textContent = '';
                //     // Loop through all the Newly added content 
                //     // let total = 0;
                //     let updateOrder = document.getElementsByClassName('cartUpdate')[0];
                //     // let updateOrderValue = updateOrder.value;
                //     console.log(updatePrice.textContent*updateOrder.value);
                //     let itemRowPrice = itemRowPrices[i];
                //     let priceTag = itemRowPrice.getElementsByClassName('cartItemPrice')[0].textContent[0];
                //     // let priceNumber=parseInt(priceTag.innerHTML);
                //     // if(itemRowPrice + itemRowPrice === updatePrice){
                //     //     console.log('Thery are the same')
                //     // } else {
                //     //     updatePrice.textContent = itemRowPrice;
                //     // }
                //     // console.log(priceTag.innerHTML, 'first');
                //     // console.log(updatePrice.innerHTML);
                //     // let price = parseInt(priceTag.innerText = i);

                // }
                console.log(itemRow);
                console.log(itemRowPrices);

            });
        });
        console.log(deleteBtn);


        console.log(cartItem);

        console.log(finalPrice);
        // let numberText = parseInt(price);
        // price.splice(1);
        
        console.log(name);
        console.log(price);
        // addCart(name, price);
        
    });
        // alert('Item added')
        // Will show how many items are inside the array
        function displayTotals(){
            console.log('total');
            let totalPrices = [];
            let items = document.querySelectorAll('.cartItemPrice');
            // items.pop();
            console.log(items, 'Is the cartItemPrice Storage');
            items.forEach(function(item){
                // Makes sure its a Number and not string
                if(item === 0){
                    item.remove();
                }
                totalPrices.push(parseInt(item.textContent));
            });
            console.log(totalPrices);
            let finalMoney = totalPrices.reduce(function(totalPrices, item){
                totalPrices += item;
                return totalPrices;
                // Updates the total Price and returns the answer
            });
            console.log(finalMoney, 'is the finalMoney');
            // Locate the first cartTotal Price
            let total = document.getElementById('cartTotalPrice');
            // Locate the second cartTotal Price
            let totalSecond = document.getElementById('allTotalCost');
            
            // Make the ID Total's display to the actual amount
       total.textContent = finalMoney;
            // Store the second Total content and display    
       totalSecond.textContent = finalMoney;

    //    Grabs the first UpdateCart Content
       let updateOrder = document.querySelectorAll('.cartUpdate');
            console.log('The first update content is ', updateOrder);
       let cartItemToCheck = document.getElementsByClassName('cartItem');
       console.log('The amount of cart items to check will be ',cartItemToCheck);
       for(let i=0;i <= cartItemToCheck.length;i++){
        // updateOrder.addEventListener('change',function(e){
        //     // Check to see if item is updated
        //     let input = e.target;
        //     if(isNaN(input.value) || input.value <= 0){
        //         input.value = 1;
        //     }
        //     let updateOrderValue = e.target.value;  // get the value of input that user will increase to 
        //     total.textContent = finalMoney * updateOrderValue;  //Update total amount value to final Amount
        //     if(cartItemToCheck.length > 1){
        //         // alert('More Items added');
        //         let cartItemprice = cartItemToCheck[i];
        //         console.log(cartItemprice);
        //         console.log('The Items are', cartItemToCheck[i])

        //     } 
        //     console.log('Number of Cart Items now is', cartContent);
        //     // if()
        //     console.log(e.target.value)

            
        //     // console.log(input);
        // });
       }
        console.log(updateOrder.value)
       
    //    Dynamic update on cart
       let cartHeading = document.getElementsByClassName('cartInfo')[0];
       let itemCount = document.getElementById('itemCount');
       itemCount.textContent = totalPrices.length;
        for(let i= 0;i<totalPrices.length;i++){
            // add the total of array to check
            let counter = 0,sum = 0;
            totalPrices[i] += counter;
            // if numbers are not the same make them the same
            if(counter != itemCount.textContent){
                counter = itemCount.textContent;
            }

        }
    //    cartHeading.children //.document.getElementById('itemCount');
        console.log(itemCount); //= totalPrices.length;
    
    }
    function updateTotalPrices(){
        // let 
    }
        // l


});


console.log(cartHeading);
// remove Item 

// let cartItem = document.getElementsByClassName('cartItem');

// Courses Items stored
var course1 = document.getElementById('course1');
// Buttons stored
// cartbtn.forEach(function(btn){
//     // when clicked on any button
//     btn.addEventListener('click', function(e){
//         alert('Item added');
//     let cartItemtext = btn.childNodes[0].textContent;
//        let name = e.target.parentElement.children[0].textContent;
//         let price = e.target.parentElement.children[3].textContent;
//         console.log(name);
//         console.log(price);
//         // console.log(cartItemtext);
//     });
// });





// btn.addEventListener('click', addCart(name, price))
// {
    // alert('Item added');
//    let cartItemtext = btn.childNodes[0].textContent;
//     name = e.target.parentElement.children[0].textContent;
//     price = e.target.parentElement.children[1].textContent;
//     console.log()
//     // console.log(cartItemtext);
// });
// });
// console.log(cartbtn);

// course1.addEventListener('click', addCart('Course1', 2000));
course1.addEventListener('click', function(){
    // alert('course1 added');
});
let cart = [
//     { name: name,
//     price: price,
// },
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
];

// function addCart(name, price) {
//     //create item
//     let item = {
//         name: name,
//         price: price
//     };
    
//     if(cart.length === 0 || cart.length >= 1){
//         // let check = false;
//         // for(let cartItem in cart){
//         //     if(cart[cartItem].name === item.name){
//         //         check = true;
//         //         }
//         // }
//         cart.push(item);
//     }
//     //check if array empty
//     // if (cart.length != 0) {
//     //     //search an item in an array
//     //     let check = false;
//     //     for (let cartItem in cart) {
//     //         if (cart[cartItem].name === item.name) {
//     //             check = true;
//     //         }
//     //     }

//     //     //if check returns false,  item was not found in the array.
//     //     if (!check) { cart.push(item) }

//     //     //else push to array
//     // } else {
//     //     cart.push(item);
//     // }
//     // if(cart.length === 0){
//     //     // let check = false;
//     //     // for(let cartItem in cart){
//     //     //     if(cart[cartItem].name === item.name){
//     //     //         check = true;
//     //     //      }
//     //     // }
//     //     cart.push(item); 
//     //     console.log(cart);
//     // }

//     //get cart div
//     let div = document.getElementById('cart');
//     //clear cart
//     div.innerHTML = "People";

//     //show cart with updated array
//     for (let value in cart) {

//         // Create a <li> node
//         let node = document.createElement("LI");
//         // Create a text node               
//         let textnode = document.createTextNode(cart[value].name);

//         // Append the text to <li>
//         node.appendChild(textnode);

//         // Append <li> to <ul> with id="myList"                             
//         div.appendChild(node);
//     }
// }


