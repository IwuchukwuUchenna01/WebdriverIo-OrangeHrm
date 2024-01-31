const {$} = require('@wdio/globals')

require('dotenv').config()

const userName = process.env.USERNAME1

class ForgotPassword{
    get btnFpw(){
        return $('p[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]')
    }
    get enterUserNAme(){
        return $('input[name="username"]')
    }
    get btnResetPassword(){
        return $('button[type="submit"]')
    }
    get responseText(){
        return $('h6[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]')
    }

    async forgotPassword(){
        await this.btnFpw.click()
        await this.enterUserNAme.setValue(userName)
        await this.btnResetPassword.click()
        await this.responseText.isEqual('Reset Password link sent successfully')
    }
}

module.exports = new ForgotPassword();