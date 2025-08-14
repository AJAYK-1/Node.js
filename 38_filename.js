// program to get the extension of a filename...

const Extension = str => str.slice(str.lastIndexOf('.'))
console.log(Extension('java.html'))
console.log(Extension('webpack.config.js'))