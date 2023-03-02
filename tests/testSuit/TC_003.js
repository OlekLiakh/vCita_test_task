const testData = require('./TC_003_testData.json')

describe('Test suit', function() {
    const fieldName = 'Font size'
    const mainPage = browser.page.mainPage.mainPage()
    before(async () => {
        await mainPage.navigate()
    })
    after(browser => browser.end())
  
    test('[Signature Editor - Design Tab] Change font size on Preview Pane', async () => {
        await mainPage.section.popOver.closePopOver()
        await mainPage.section.editorTabMenu.clickOnTab('Design')
        await mainPage.section.editorTabMenu
                        .section.slider.verifySliderPointerPosition(fieldName, 2)
        await mainPage.section.previewPan.verifyPreviewPanFontSize('name', '16px')
        await mainPage.section.previewPan.verifyPreviewPanFontSize('title', '13px')
        await mainPage.section.previewPan.verifyPreviewPanFontSize('phone', '11px')


        await testData.reduce((promise, data) => promise
            .then(() => mainPage.section.editorTabMenu
                        .section.slider.movePointer('Font size', data.point)
            )
            .then(() => {
                    Object.entries(data.fontSize).map(([fieldName, fontSize]) => mainPage
                    .section.previewPan.verifyPreviewPanFontSize(fieldName, fontSize)
                    .catch((error) => console.log(error))
                )
            }), Promise.resolve())
    })
  })
  