const logMessage = require("../../static/logMessages/verifyMessage")

const dynamicSelector = {
    colorPickerFieldXPATH: (fieldName) => ({
        selector: `//div[div[contains(text(),'${fieldName}')]]`,
        locateStrategy: 'xpath'
    }),
    colorSelectorXPATH: (fieldName, colorRGBPresentation) => ({
        selector: `//div[div[contains(text(),'${fieldName}')]]//div[@ke='${colorRGBPresentation}']`,
        locateStrategy: 'xpath'
    })
}

async function verifyColorPickerFieldIsPresent(fieldName) {
    const colorSelectorField = dynamicSelector.colorPickerFieldXPATH(fieldName)
    await browser.waitForElementPresent(colorSelectorField, logMessage.verifyElementPresent("color picker field", fieldName))
}

async function selectColor(fieldName, RGBColorPresentation) {
    const colorSelector = dynamicSelector.colorSelectorXPATH(fieldName, RGBColorPresentation)
    await browser.waitForElementPresent(
        "xpath",
        colorSelector,
        logMessage.verifyElementPresent("color selector")
    )
    await browser.click(colorSelector)
}

module.exports = {
    selector: "ws-color-picker-container",
    commands: [{verifyColorPickerFieldIsPresent, selectColor}],
    elements: {}
}