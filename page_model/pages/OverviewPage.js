import {Selector,t} from 'testcafe'
import {Product,productsAreEqual} from '../data/Models'
const {BasePage} = require('./BasePage')

class OverviewPage extends BasePage
{
    constructor()
    {
        super()
        this.overviewHeader = Selector('.subheader').withExactText('Checkout: Overview')
        this.finishButton = Selector('.btn_action.cart_button')
        
    }

    async getOverviewProducts()
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
        let overviewProducts = await this.getOverviewProducts();
        
        //make one-dimensional
        if(products[0].constructor === Array)
        {
        products = [].concat(...products)
        }
        return  productsAreEqual(products,overviewProducts)
    }

    async clickFinish()
    {
        await t.click(this.finishButton)
    }

}

export default new OverviewPage()