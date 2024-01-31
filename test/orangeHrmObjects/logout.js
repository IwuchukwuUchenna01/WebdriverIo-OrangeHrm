const { $ } = require('@wdio/globals')

class Logout{
    get btnLogoutDropdown(){
        return $('span[class="oxd-userdropdown-tab"]')
    }
    get btnLogout(){
        return $('a[href="/web/index.php/auth/logout"]')
    }

    async logout(){
        await this.btnLogoutDropdown.click()
        await this.btnLogout.click()
    }
} 
module.exports = new Logout()