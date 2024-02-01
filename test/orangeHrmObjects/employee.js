const { $, browser } = require('@wdio/globals')

require('dotenv').config()

const employeeFirstName = process.env.EMPLOYEEFIRSTNAME
const employeeLastName = process.env.EMPLOYEELASTNAME
const employeeMiddleName = process.env.EMPLOYEEMIDDLENAME
const createdPassword= process.env.CREATEDPASSWORD
const confirmPassword = process.env.CONFIRMPASSWORD
const userLoginName = process.env.USERLOGINNAME
class CreateEmployee{
    get btnPim(){
        return $('a[href="/web/index.php/pim/viewPimModule"]')
    } 
    get btnAdd(){
        return $('i[class="oxd-icon bi-plus oxd-button-icon"]')
    }
    get firstName(){
        return $('input[name="firstName"]')
    }
    get lastName(){
        return $('input[name="lastName"]')
    }
    get middleNAme(){
        return $('input[name="middleName"]')
    }
    get btnSave(){
        return $("//button[@type='submit']")
    }
    get addPhoto(){
        return $('i[class="oxd-icon bi-plus"]')
    }
    get createAccountLogin(){
        return $('span[class="oxd-switch-input oxd-switch-input--active --label-right"]')
    }
    get userLoginName(){
        return $("/html//div[@id='app']//form[@class='oxd-form']//div[@class='orangehrm-employee-form']/div[3]/div/div[1]/div//input")
    }
    get status(){
        //disable status feature 
        return $('span[class="oxd-radio-input oxd-radio-input--active --label-right oxd-radio-input"]')
    }
    get createPassword(){
        return $("/html//div[@id='app']//form[@class='oxd-form']//div[@class='oxd-form-row user-password-row']/div/div[@class='oxd-grid-item oxd-grid-item--gutters user-password-cell']/div//input[@type='password']")
    }
    get confirmCreatedPassword(){
        return $("/html//div[@id='app']//form[@class='oxd-form']//div[@class='oxd-form-row user-password-row']/div/div[@class='oxd-grid-item oxd-grid-item--gutters']/div//input[@type='password']")
    }

    async CreateEmployee(){
        await this.btnPim.click()
        await this.btnAdd.click()
        await this.firstName.setValue(employeeFirstName)
        await this.lastName.setValue(employeeLastName)
        await this.middleNAme.setValue(employeeMiddleName)
        //await this.addPhoto.click()
        await this.createAccountLogin.click()
        await this.status.click()
        await this.userLoginName.setValue(userLoginName)
        await this.createPassword.setValue(createdPassword)
        await this.confirmCreatedPassword.setValue(confirmPassword)
        await this.btnSave.click()
        await $('h6[class="oxd-text oxd-text--h6 --strong"]').isEqual(`${employeeFirstName} ${employeeLastName}`)
        browser.pause(6000)
    }
} 
module.exports = new CreateEmployee();




