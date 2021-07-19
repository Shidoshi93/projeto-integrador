export const goTo = (history, path) => {
    history.push(path)
    //if(toggleMiniMenu) toggleMiniMenu(false)
}

export const goToBack = (history) => {
    history.goBack()
    //if(toggleMiniMenu) toggleMiniMenu(false)
}