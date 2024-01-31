const { $ } = require('@wdio/globals')

//const searches = Admin //'Dashboard', 'PIM', 'Leave', 'Time', 'Recruitment', 'Performance', 'Directory', 'Maintenance', 'Claim', 'Buzz']
class SearchFeaturesOnSidebar{
    get enterInput(){
        return $('input[placeholder="Search"]')
    }
    get btnSearched(){
        return $('.oxd-main-menu-item')
        // for (i in searches){
        //     return $(`a[href="/web/index.php/${searches[i]}/view${searches[i]}Module"]`)
        // }
        
    }

    async getFeatures(){
        //searches.forEach(async (x)=>{
        await this.enterInput.setValue('Admin')
        await this.btnSearched.click()
       // })

    }
}

module.exports = new SearchFeaturesOnSidebar()