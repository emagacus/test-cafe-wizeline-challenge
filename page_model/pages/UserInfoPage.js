import {Selector,t} from 'testcafe'
const {BasePage} = require('./BasePage')

class UserInfoPage extends BasePage{

    constructor()
    {
        super()
        this.errorMessage = Selector('[data-test="error"]')
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.zipCodeField = Selector('#postal-code')
        this.continueButton = Selector('.btn_primary.cart_button')
    }

    async enterFirstName(name)
    {
        await  t.typeText(this.firstNameField,name)
    }
    
    async enterLastName(name)
    {
        await  t.typeText(this.lastNameField,name)
    }

    async enterZipCode(code)
    {
        await  t.typeText(this.zipCodeField,code)
    }

    async clickContinue()
    {
        await t.click(this.continueButton)
    }

}

export default new UserInfoPage()