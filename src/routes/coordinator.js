export const goTo = (history, path) => {
    history.push(path)
}

export const goToBack = (history) => {
    history.goBack()
}