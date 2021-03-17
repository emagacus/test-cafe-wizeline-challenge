import {Selector,t} from 'testcafe'

export class BasePage
{
    constructor()
    {    
        this.hamburguerButton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
    }

    async logout()
    {
        await t.click(this.hamburguerButton)
        await t.click(this.logoutButton)
    }
}

