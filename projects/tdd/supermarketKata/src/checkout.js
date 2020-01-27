module.exports = class Checkout {

    constructor(){
        this.prices = new Object();
        this.items = new Object();
        this.discountRule = new Object();
    }
    addItemPrice(item, price) {
        this.prices[item] = price;
    }

    addItem(item){
        if( this.prices[item] === undefined)
            throw("Item price is missing");

        if(this.items[item] === undefined )
            this.items[item] = 1;
        else
            this.items[item]++;
    }

    calculateTotal() {
        return this.applyDiscountRule();
    }

    addDiscountRule(item, noOfPurchase, discountedPrice){
        this.discountRule[item]= {'qty': noOfPurchase, 'price':discountedPrice};
    }

    applyDiscountRule() {
        var totalPrice = 0;
        
        for(var item in this.items){
            console.log(`item ==> ${item}`);
            if(this.discountRule[item] !== undefined && this.items[item] >= this.discountRule[item].qty) {
                totalPrice += this.items[item]* this.discountRule[item].price;
            } 
            else {
                console.log(`${item}, ${this.items[item]}, ${this.prices[item]}`)
                totalPrice += this.items[item] * this.prices[item];
            }   
        }
        return totalPrice;
    }

}
