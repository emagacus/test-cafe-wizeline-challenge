
export class Product {
    
    constructor(name,price)
    {
        this.name = name;
        this.price = parseFloat(price.replace('$', ''));
    }

    getName(){
        return this.name;
    }

    getPrice()
    {
        return this.price;
    }

 }

 export function productsAreEqual(x, y) {
    let match = true;

    for(let i = 0;i < x.length ; i++)
    {   
        if(x[i].getName().toString() == y[i].getName().toString() 
        && x[i].getPrice().toString() == y[i].getPrice().toString())
        {
           continue 
        }
        else
        {
            match = false
            break
        }
    }
    return match
 }
