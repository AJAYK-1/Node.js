// program to get the current date in dd/mm/yyyy format...

const DateFormat = (date = new Date()) => {
    const days = date.getDate()
    const months = date.getMonth() + 1
    const years = date.getFullYear()
    return `${days}/${months}/${years}`
}
console.log(DateFormat());
