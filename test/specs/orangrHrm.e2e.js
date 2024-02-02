const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../orangeHrmObjects/loginPage')
const featureSearch = require('../orangeHrmObjects/search')
const maintenance = require('../orangeHrmObjects/maintenance')
const employee = require('../orangeHrmObjects/employee')
const logout = require('../orangeHrmObjects/logout')
const forgotPassword = require('../orangeHrmObjects/forgotPasword')
const buzz = require('../orangeHrmObjects/buzz')





describe('Multiple functionality Testing for OrangeHrm website', () => {
    beforeEach('should open the web application', async ()=>{
        await LoginPage.open()
        await LoginPage.login()
    })
    it('select maintenance', async () => {
        
        await maintenance.selectMaintenance()
        
    })
    it('create employee',async  ()=>{
        await employee.CreateEmployee()
    })
    it('test all side bar functionalities', async ()=>{
        await featureSearch.getFeatures();
    })
    it('test that buzz feature is able to post a comment', async ()=>{
        await buzz.buzz();
    })
    afterEach('logOut', async ()=>{
        await logout.logout()
    })
})
describe('beforeLogin', ()=>{
    it('tests if forget password works', async ()=>{
        await LoginPage.open()
        await forgotPassword.forgotPassword()
    })
})

