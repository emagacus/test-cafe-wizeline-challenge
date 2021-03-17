import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import UserInfoPage from  '../pages/UserInfoPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import OverviewPage from '../pages/OverviewPage'
import ConfirmationPage from '../pages/ConfirmationPage'
import {CREDENTIALS,USER_DATA,URL} from '../data/Constants'


fixture('Complete purchase feature testing')
    .page(URL)
    .beforeEach(async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
     })


test('Product items match in overview page', async t => {
    
    let products = await ProductsPage.getProducts();
   
    for (var i = 0; i < products.length; i++)
    {
        await ProductsPage.addProductTocart(i)
       
    }

    await ProductsPage.clickShoppingCart();
    await ShoppingCartPage.clickCheckout()
    await UserInfoPage.enterFirstName(USER_DATA.FIRST_NAME)
    await UserInfoPage.enterLastName(USER_DATA.LAST_NAME)
    await UserInfoPage.enterZipCode(USER_DATA.POSTAL_CODE)
    await UserInfoPage.clickContinue()

    let itemsAdded = await OverviewPage.verifyAddedProducts(products)
    await t.expect(itemsAdded).ok()

})

test('User continues to confirmation page after finishing purchase', async t => {
    
    await ProductsPage.addProductTocart(0)
    await ProductsPage.clickShoppingCart()
    await ShoppingCartPage.clickCheckout()
    await ProductsPage.clickShoppingCart();
    await ShoppingCartPage.clickCheckout()
    await UserInfoPage.enterFirstName(USER_DATA.FIRST_NAME)
    await UserInfoPage.enterLastName(USER_DATA.LAST_NAME)
    await UserInfoPage.enterZipCode(USER_DATA.POSTAL_CODE)
    await UserInfoPage.clickContinue()
    await OverviewPage.clickFinish()

    await t.expect(ConfirmationPage.completeHeader.innerText).eql('THANK YOU FOR YOUR ORDER')
    await t.expect(ConfirmationPage.completeText.innerText).eql('Your order has been dispatched, and will arrive just as fast as the pony can get there!')

})