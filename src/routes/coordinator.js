export const goTo = (history, path, togleMiniMenu) => {
    history.push(path)
    if(togleMiniMenu) togleMiniMenu(false)
}

export const goToBack = (history) => {
    history.goBack()
}