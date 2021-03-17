import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import UserInfoPage from  '../pages/UserInfoPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import OverviewPage from '../pages/OverviewPage'
import {CREDENTIALS,USER_DATA,URL} from '../data/Constants'


fixture('Purchase info feature testing')
    .page(URL)
    .beforeEach(async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
        await ProductsPage.addProductTocart(0)
        await ProductsPage.clickShoppingCart()
        await ShoppingCartPage.clickCheckout()
     })


test('Error message when user info is incomplete', async t => {
    await UserInfoPage.enterFirstName(USER_DATA.FIRST_NAME)
    await UserInfoPage.enterLastName(USER_DATA.LAST_NAME)
    await UserInfoPage.clickContinue()
    await t.expect(UserInfoPage.errorMessage.innerText).eql('Error: Postal Code is required')

})

test('User continues to overview page after filling data', async t => {

    await UserInfoPage.enterFirstName(USER_DATA.FIRST_NAME)
    await UserInfoPage.enterLastName(USER_DATA.LAST_NAME)
    await UserInfoPage.enterZipCode(USER_DATA.POSTAL_CODE)
    await UserInfoPage.clickContinue()
    await t.expect(OverviewPage.overviewHeader.exists).ok() 

})