const isImageFileExtension = (fileName) => {
    if (fileName === null || fileName === undefined) {
        return false
    }
    const imageExtensions = ['jpg', 'jpeg', 'svg', 'png', 'gif']
    const fileExtension = fileName?.split('.')?.pop()
    return imageExtensions.includes(fileExtension.toLowerCase());
}

console.log(isImageFileExtension('test.jpg'));
console.log(isImageFileExtension('testjpeg'));
console.log(isImageFileExtension('hi.svg'));
console.log(isImageFileExtension(undefined));
console.log(isImageFileExtension(null));
console.log(isImageFileExtension('undefined'));
console.log(isImageFileExtension('null'));
console.log(isImageFileExtension('test.doc'));
console.log(isImageFileExtension('test.pdf'));