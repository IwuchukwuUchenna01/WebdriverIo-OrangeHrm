const { $ } = require('@wdio/globals')
require('dotenv').config()

const password = process.env.PASSWORD
//maintenance 
class Maintenance{
    get btnMaintenance(){
        return $('a[href="/web/index.php/maintenance/viewMaintenanceModule"]')
    }
    get enterPassword(){
        return $('input[name="password"]')
    }
    get btnConfirm(){
        return $('button[type="submit"]')
    }
    async selectMaintenance(){
        await this.btnMaintenance.click()
        await this.enterPassword.setValue(password)
        await this.btnConfirm.click()
    }

}

module.exports = new Maintenance()