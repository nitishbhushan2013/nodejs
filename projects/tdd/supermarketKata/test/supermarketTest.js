const Checkout = require('../src/checkout.js');

var expect = require('chai').expect;
var checkout;
describe('supermarket', ()=>{

beforeEach("instantiate the Checkout class", ()=>{
     checkout = new Checkout();
})

    // test 1: can instantiate checkout class
    it('can instantiate checkout class', ()=>{
        
    })

    // test 2: can add an item price to the Checkout class
    it('can add an item price', ()=>{
        checkout.addItemPrice('item1', 1);
    })


    // test 3: can add an item to checkout list
    it('can add an item', ()=>{
        checkout.addItemPrice('item1', 1);
        checkout.addItem('item1');
    })

    // test 4: can calulate total price 
    it('can calculate current total price', ()=>{
        checkout.addItemPrice('item1', 1);
        
        checkout.addItem('item1');
        
        expect(checkout.calculateTotal()).to.equal(1);
    })

    // test 5: can add multiple items and calculate total price
    it('can add multiple items and calculate total price', ()=>{
        checkout.addItemPrice('item1', 1);
        checkout.addItemPrice('item2', 2);
        checkout.addItem('item1');
        checkout.addItem('item2');
        
        expect(checkout.calculateTotal()).to.equal(3);
    })

    //test 6: can add discount rule 
    it('can add discount rule', ()=>{
        checkout.addDiscountRule('item1', 3, 1); // item, noOfPurchase, DiscountedPrice 
    })

    // test7: can apply discount rule and re calculate total price
    it('can apply discount rule and re calculate total price', ()=>{
        checkout.addItemPrice('item1', 2);
        checkout.addItemPrice('item2', 2);

        checkout.addItem('item1');
        checkout.addItem('item1');
        checkout.addItem('item1');
        
        checkout.addDiscountRule('item1', 3, 1);

        expect(checkout.applyDiscountRule()).to.equal(3);

    })

    // item 8 : can throw error whern item is added with out price 
    it('can throw error whern item is added with out price ', ()=>{
        expect(function(){checkout.addItem('item3')}).to.throw();
    })
})