
let getStore = () => {
    let getItem = localStorage.getItem('card')
    if(getItem){
       return JSON.parse(getItem)
    }
    return []
}

let saveData = (saveBottle) => {
    let saveAsAString = JSON.stringify(saveBottle)
    localStorage.setItem("card",saveAsAString)
}

let getDataToStore = (id) => {
    let card = getStore()
    card.push(id)
    saveData(card)
}
export {getDataToStore,getStore}