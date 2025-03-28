export const formateDate = (date) => {
    const optionsDateObject = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return date.toLocaleDateString('en-US', optionsDateObject)
}