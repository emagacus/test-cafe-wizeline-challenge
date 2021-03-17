import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import {CREDENTIALS,URL} from '../data/Constants'


fixture('Shopping Cart feature testing')
    .page(URL)
    .beforeEach(async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
     })

test('Users can navigate to shopping cart', async t => {
    
    await ProductsPage.clickShoppingCart();
    await t.expect(ShoppingCartPage.cartHeader.exists).ok()
        
})

test('Users can add a single product to shopping cart', async t => {
    
    let products = await ProductsPage.getProducts()
    let product = products[0]
    await ProductsPage.addProductTocart(0)
    await ProductsPage.clickShoppingCart();
    let itemsAdded = await ShoppingCartPage.verifyAddedProducts(product)
    await t.expect(itemsAdded).ok()
    
})


test('Users can add multiple products to shopping cart', async t => {
    let products = await ProductsPage.getProducts();
   
    for (var i = 0; i < products.length; i++)
    {
        await ProductsPage.addProductTocart(i)
       
    }

    await ProductsPage.clickShoppingCart();
    let itemsAdded = await ShoppingCartPage.verifyAddedProducts(products)
    await t.expect(itemsAdded).ok()

})