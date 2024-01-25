// // document.getElementsByTagName('div').addEventListener('click', function(){
// //     console.log('click for card');
// // })
// // card 01
// document.getElementById('Card-01').addEventListener('click', function (event) {
//     // This is the click handler for the whole card
//     // console.log('click for card');
    
//     const price1Value = document.getElementById('price-1').textContent;
//     const priceValue1 = parseFloat(price1Value);
//     const price = document.createElement('p');
//     price.innerHTML = `<p class="text-center font-medium">Keatchin: ${priceValue1}tk</p>`
//     // console.log(priceValue1);
//     const totalBox = document.getElementById('total-box');
//     // totalBox.innerText = priceValue1;
//     totalBox.appendChild(price);


// });
// // card 02
// document.getElementById('Card-02').addEventListener('click', function (event) {
//     // This is the click handler for the whole card
//     // console.log('click for card');
    
//     const price2Value = document.getElementById('price-2').textContent;
//     const priceValue2 = parseFloat(price2Value);
//     const price = document.createElement('p');
//     price.innerHTML = `<p class="text-center font-medium">K. Accessories: ${priceValue2}tk</p>`
//     // console.log(priceValue1);
//     const total2Box = document.getElementById('total-box');
//     total2Box.appendChild(price);
//     // totalBox.innerText = priceValue1;
//     // const price = total2Box.innerHTML = `<p class="text-center font-medium">Keatchin: ${priceValue2}tk</p>` 

   
// });
// // card 03
// document.getElementById('Card-03').addEventListener('click', function (event) {
//     // This is the click handler for the whole card
//     // console.log('click for card');
    
//     const price3Value = document.getElementById('price-3').textContent;
//     const priceValue3 = parseFloat(price3Value);
//     const price = document.createElement('p');
//     price.innerHTML = `<p class="text-center font-medium">Home Cooker: ${priceValue3}tk</p>`
//     // console.log(priceValue1);
//     const total2Box = document.getElementById('total-box');
//     total2Box.appendChild(price);
//     // totalBox.innerText = priceValue1;
//     // const price = total2Box.innerHTML = `<p class="text-center font-medium">Keatchin: ${priceValue2}tk</p>` 

   
// });
// function addCardEventListener(cardId, priceId, productName) {
//     document.getElementById(cardId).addEventListener('click', function (event) {
//         const priceValue = parseFloat(document.getElementById(priceId).textContent);
//         const priceElement = document.createElement('p');
//         priceElement.innerHTML = `<p class="text-center font-medium">${productName}: ${priceValue}tk</p>`;
//         document.getElementById('total-box').appendChild(priceElement);
//     });
// }

// addCardEventListener('Card-01', 'price-1', 'Keatchin');
// addCardEventListener('Card-02', 'price-2', 'K. Accessories');
// addCardEventListener('Card-03', 'price-3', 'Home Cooker');


// // function to calculate the total
//     function calculateTotal() {
//         let total = 0;

//     }

//     // Function to calculate the discount (20% off for purchases above TK 200)
//     function calculateDiscount(total) {
//         const couponValue = couponInput.value;
//         const couponDiscount = (couponValue === 'SELL200' && total >= 200) ? 0.2 * total : 0;
//         return couponDiscount;
//     }

//     // Event listener for the APPLY button
//     applyButton.addEventListener('click', function () {
//         updateTotalAndDiscount();
//     });











document.addEventListener('DOMContentLoaded', function () {
    const applyButton = document.querySelector('button');
    const couponInput = document.querySelector('input');
    const totalBox = document.getElementById('total-box');
    const totalSection = document.getElementById('total');

    const products = [
        { cardId: 'Card-01', priceId: 'price-1', name: 'Keatchin' },
        { cardId: 'Card-02', priceId: 'price-2', name: 'K. Accessories' },
        { cardId: 'Card-03', priceId: 'price-3', name: 'Home Cooker' }
    ];

    const prices = {};

    // Function to add event listener to each card
    function addCardEventListener(cardId, priceId, productName) {
        document.getElementById(cardId).addEventListener('click', function (event) {
            const priceValue = parseFloat(document.getElementById(priceId).textContent);
            const priceElement = document.createElement('p');
            priceElement.innerHTML = `<p class="text-center font-medium">${productName}: ${priceValue}tk</p>`;
            totalBox.appendChild(priceElement);

            // Store the selected prices in the 'prices' object
            prices[productName] = priceValue;

            updateTotalAndDiscount();
        });
    }

    // Add event listeners for each card
    products.forEach(product => {
        addCardEventListener(product.cardId, product.priceId, product.name);
    });

    // Function to calculate total and discount
    function updateTotalAndDiscount() {
        const totalAmount = calculateTotal();
        const discountAmount = calculateDiscount(totalAmount);

        totalSection.innerHTML = `
            <h2 class="font-medium">Total: ${totalAmount}tk</h2>
            <h2 class="font-medium">Discount: ${discountAmount}tk</h2>
        `;
    }

    // Function to calculate the total
    function calculateTotal() {
        let total = 0;
        for (const productName in prices) {
            total += prices[productName];
            if(total >= 200){
                function calculateDiscount(total) {
                    const couponValue = couponInput.value;
                    const couponDiscount = (couponValue === 'SELL200' && total >= 200) ? 0.2 * total : 0;
                    return couponDiscount;
                }
            }
        }
        return total;
    
    }

    // Function to calculate the discount (20% off for purchases above TK 200)
    function calculateDiscount(total) {
        const couponValue = couponInput.value;
        const couponDiscount = (couponValue === 'SELL200' && total >= 200) ? 0.2 * total : 0;
        return couponDiscount;
    }

    // Event listener for the APPLY button
    applyButton.addEventListener('click', function () {
        updateTotalAndDiscount();
    });
});

