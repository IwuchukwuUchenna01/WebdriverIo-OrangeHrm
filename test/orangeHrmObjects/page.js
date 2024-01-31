const { browser } = require('@wdio/globals')

module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open () {
        return browser.url(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`),browser.maximizeWindow()
        
    }
}
