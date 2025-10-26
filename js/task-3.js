function getElementWidth(content, padding, border) {
    const contentNumber = parseFloat(content)
    const paddingNumber = parseFloat(padding)
    const borderNumber = parseFloat(border)
    return contentNumber + (2 * paddingNumber) + (2 * borderNumber)
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 