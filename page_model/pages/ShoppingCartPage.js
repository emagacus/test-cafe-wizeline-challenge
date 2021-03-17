import {Selector,t} from 'testcafe'
import {Product,productsAreEqual} from '../data/Models'
const {BasePage} = require('./BasePage')

class ShoppingCartPage extends BasePage
{
    constructor()
    {
        super()
        this.cartHeader = Selector('.subheader').withExactText('Your Cart')
        this.checkoutButton = Selector('.btn_action.checkout_button')
    }

    async clickCheckout()
    {
        await t.click(this.checkoutButton)
    }

    async getCartProducts()
    {
        let productList = []
        const productItems = await Selector('.cart_item')
        const productsCount = await productItems.count
        for(let i = 0; i < await productsCount; i++){
            productList.push(new Product(await productItems.nth(i).find('.inventory_item_name').innerText,
            await productItems.nth(i).find('.inventory_item_price').innerText))
        }
        
        return productList

    }

    async verifyAddedProducts(...products)
    {
        let cartProducts = await this.getCartProducts();
        
        //make one-dimensional
        if(products[0].constructor === Array)
        {
        products = [].concat(...products)
        }
        return  productsAreEqual(products,cartProducts)
    }

}

export default new ShoppingCartPage()