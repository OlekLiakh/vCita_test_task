const dynamicSelector = {
    fieldSelector: (fieldName) => `span[data-acs='${fieldName}']`
}

async function verifyPreviewPanFontSize(fieldName, expectedFontSize) {
    const fieldSelector = dynamicSelector.fieldSelector(fieldName)
    return browser.expect.element(fieldSelector)
            .to.have.css("font-size").which.equals(expectedFontSize)
}

module.exports = {
    selector: ".preview-pane-container",
    commands: [{verifyPreviewPanFontSize}],
}