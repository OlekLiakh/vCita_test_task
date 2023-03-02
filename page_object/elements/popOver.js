const logMessage = require("../../static/logMessages/verifyMessage")

async function verifyPopOverIsPresented(condition = true) {
    const selector = this.selector
    if (condition) {
        await browser.waitForElementPresent(
            selector,
            logMessage.verifyElementPresent("Pop over")
        )
    } else {
        await browser.waitForElementNotPresent(
            selector,
            logMessage.verifyElementNotPresent("Pop over")
        )
    }
}

async function closePopOver() {
    await this.verifyPopOverIsPresented()
    await browser.click(this.elements.closeButton)
    await this.verifyPopOverIsPresented(false)
}

module.exports = {
    selector: ".popover",
    commands: [{closePopOver, verifyPopOverIsPresented}],
    elements: {
        closeButton: "div[aid='details_rich_fields.div.close']"
    }
}