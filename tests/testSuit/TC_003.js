const testData = require('./TC_003_testData.json')

describe('Test suit', function() {
    const fieldName = 'Font size'
    const mainPage = browser.page.mainPage.mainPage()
    beforeEach(async () => {
        await mainPage.navigate()
        await mainPage.section.popOver.closePopOver()
        await mainPage.section.editorTabMenu.clickOnTab('Design')
    })
    afterEach(() => browser.end())
  
    test('[Signature Editor - Design Tab] Change font size on Preview Pane', async () => {

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

    test('[Signature Editor - Design Tab] Select different colors', async () => {

        //   Select color on FONT & COLOR part
        await mainPage.section.editorTabMenu
            .section.colorPicker.verifyColorPickerFieldIsPresent("Template color")
        await mainPage.section.editorTabMenu
            .section.colorPicker.selectColor("Template color", "#48A1E5")
        await mainPage.section.editorTabMenu
            .section.colorPicker.selectColor("Template color", "#191C2B")
        await mainPage.section.editorTabMenu
            .section.colorPicker.selectColor("Template color", "#EE6A2F")
        await mainPage.section.editorTabMenu
            .section.colorPicker.selectColor("Template color", "#45668E")

        //    Select color on DETAILS part
        await mainPage.section.editorTabMenu
            .section.colorPicker.verifyColorPickerFieldIsPresent("Text color")
        await mainPage.section.editorTabMenu
            .section.colorPicker.selectColor("Text color", "#9E9E9E")
        await mainPage.section.editorTabMenu
            .section.colorPicker.selectColor("Text color", "#616161")
        await mainPage.section.editorTabMenu
            .section.colorPicker.selectColor("Text color", "#BDBDBD")

        //    Select color on DECORATIVE LINE part
        await mainPage.section.editorTabMenu
            .section.colorPicker.verifyColorPickerFieldIsPresent("Color")
        await mainPage.section.editorTabMenu
            .section.colorPicker.selectColor("Color", "#9E9E9E")
        await mainPage.section.editorTabMenu
            .section.colorPicker.selectColor("Color", "#616161")
        await mainPage.section.editorTabMenu
            .section.colorPicker.selectColor("Color", "#BDBDBD")
    })
  })
  