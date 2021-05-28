export const goTo = (history, path, toggleMiniMenu) => {
    history.push(path)
    if(toggleMiniMenu) toggleMiniMenu(false)
}

export const goToBack = (history, toggleMiniMenu) => {
    history.goBack()
    if(toggleMiniMenu) toggleMiniMenu(false)
}