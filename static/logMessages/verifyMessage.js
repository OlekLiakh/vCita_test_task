module.exports = {
    verifyElementPresent: (elementType, elementName) => {
        let message = `Verify that "${elementType}" is presented`
        if(elementName){
            message = `Verify that "${elementType}" with "${elementName}" name is presented`
        }
        return message
    },
    verifyElementNotPresent: (elementType, elementName) => {
        let message = `Verify that "${elementType}" is not presented`
        if(elementName){
            message = `Verify that "${elementType}" with "${elementName}" name is not presented`
        }
        return message
    },
    verifyElementSelected: (elementType, elementName) => {
        let message = `Verify that "${elementType}" is selected`
        if(elementName){
            message = `Verify that "${elementType}" with "${elementName}" name is selected`
        }
        return message
    }
}
