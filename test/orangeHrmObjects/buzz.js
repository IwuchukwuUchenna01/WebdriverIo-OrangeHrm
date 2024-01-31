const { $ } = require('@wdio/globals')

class BuzzFeature{
    get btnBuzz(){
        return $('a[href="/web/index.php/buzz/viewBuzz"]')
    }
    get postText(){
        return $('textarea[class="oxd-buzz-post-input"]')
    }
    get btnPost(){
        return $('button[type="submit"]')
    }

    async buzz(){
        await this.btnBuzz.click()
        await this.postText.setValue('this is just the beginning of things')
        await this.btnPost.click()
    }
}

module.exports = new BuzzFeature();