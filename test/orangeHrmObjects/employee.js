const { $, browser } = require('@wdio/globals')

require('dotenv').config()

const employeeFirstName = process.env.EMPLOYEEFIRSTNAME
const employeeLastName = process.env.EMPLOYEELASTNAME
const employeeMiddleName = process.env.EMPLOYEEMIDDLENAME

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
        return $('button[type="submit"]')
    }
    get addPhoto(){
        return $('i[class="oxd-icon bi-plus"]')
    }

    async CreateEmployee(){
        await this.btnPim.click()
        await this.btnAdd.click()
        await this.firstName.setValue(employeeFirstName)
        await this.lastName.setValue(employeeLastName)
        await this.middleNAme.setValue(employeeMiddleName)
        await this.addPhoto.click()
        await this.btnSave.click()
    }
} 
module.exports = new CreateEmployee();

// C:\Users\Support\Desktop\WebdriverIo-CuraHealth\\test\images


