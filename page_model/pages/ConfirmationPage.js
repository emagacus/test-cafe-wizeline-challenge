import {Selector,t} from 'testcafe'
const {BasePage} = require('./BasePage')

class ConfirmationPage extends BasePage
{
    constructor()
    {
        super()
        this.completeHeader = Selector('.complete-header')
        this.completeText = Selector('.complete-text')
    }


}

export default new ConfirmationPage()