import {Selector,t} from 'testcafe'
import {Product} from '../data/Models'
const {BasePage} = require('./BasePage')

class ProductsPage extends BasePage
{
    constructor()
    {
        super()
        this.productTitle = Selector('.product_label')
        this.shoppingCartButton = Selector('#shopping_cart_container')
       
    }

    async clickShoppingCart()
    {
        await t.click(this.shoppingCartButton)
    }

    async getProducts()
    {
        let productList = []
        const productItems = await Selector('.inventory_item')
        const productsCount = await productItems.count
        for(let i = 0; i < await productsCount; i++){
            productList.push(new Product(await productItems.nth(i).find('.inventory_item_name').innerText,
            await productItems.nth(i).find('.inventory_item_price').innerText))
        }
        
        return productList
        
    }

    async addProductTocart(index)
    {   
        const productAddToCartButtons = await Selector('.pricebar > button') 
        await t.click(productAddToCartButtons.nth(index))
    }

}

export default new ProductsPage()