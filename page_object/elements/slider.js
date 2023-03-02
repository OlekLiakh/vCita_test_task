const ariaValue = {
    1: '-2',
    2: '-1',
    3: '0',
    4: '1',
    5: '2'
}

const dynamicSelector = {
    fieldSliderPointerXPATH: (fieldName) => ({
        selector: `//div[div[normalize-space(text())='${fieldName}']]//div[@role='slider']`,
        locateStrategy: 'xpath'
    }),
    fieldSliderPointMoveToXPATH: (fieldName, pointMoveTo) => ({
        selector: `//div[div[normalize-space(text())='${fieldName}']]//div[@class='vue-slider-marks']/div[${pointMoveTo}]`,
        locateStrategy: "xpath"
    })
}

async function verifySliderPointerPosition(fieldName, expectedPoint) {
    const sliderPointerSelector = dynamicSelector.fieldSliderPointerXPATH(fieldName).selector
    browser.useXpath()
    await browser.expect.element(sliderPointerSelector).to.have.attribute("aria-valuenow")
            .that.equal(`${ariaValue[expectedPoint]}`)
    browser.useCss()
}

async function movePointer(fieldName, pointMoveTo) {
    const pointMoveToSelector = dynamicSelector.fieldSliderPointMoveToXPATH(fieldName, pointMoveTo)
    await this.waitForElementPresent(pointMoveToSelector)
        .click(pointMoveToSelector)
    await this.verifySliderPointerPosition(fieldName, pointMoveTo)
    browser.pause(3000)
}

module.exports = {
    selector: ".vue-slider",
    commands: [{verifySliderPointerPosition, movePointer}],
    elements: {}
}
