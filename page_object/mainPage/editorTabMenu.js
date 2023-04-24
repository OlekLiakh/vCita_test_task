const slider = require("../elements/slider")
const colorPicker = require("../elements/colorPicker")
const logMessage = require("../../static/logMessages/verifyMessage")

const dynamicSelector = {
    tabSelector: (tabName) => `div[aid='page.editor.signature.tabs.${tabName.toLowerCase()}']`
}

async function clickOnTab(tabName) {
    const tabSelector = dynamicSelector.tabSelector(tabName)
    await browser
        .waitForElementPresent(tabSelector, logMessage.verifyElementPresent("tab", tabName))
        .click(tabSelector)
    await this.verifyTabIsSelected(tabName)
}

async function verifyTabIsSelected(tabName) {
    const tabSelector =  dynamicSelector.tabSelector(tabName)
    return browser.expect.element(tabSelector).to.have
            .attribute("class", logMessage.verifyElementSelected("tab", tabName))
            .which.contains(this.elements.activeTab.selector)
}

module.exports = {
    selector: "div[class='editor-tab-menu']",
    commands: [{clickOnTab, verifyTabIsSelected}],
    elements: {
        activeTab: 'editor-tab-menu-item-active'
    },
    sections: {slider, colorPicker}
}