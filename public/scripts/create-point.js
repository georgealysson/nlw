function populateUfs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {

            for (state of states) {
                ufSelect.innerHTML += `<option value= "${state.id}">${state.nome}</option>`
            }


        })
}
populateUfs()



function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = '<option value>Selecione a Cidade</option>'
    citySelect.disabled = true


    fetch(url)
        .then(res => res.json())
        .then(cities => {



            for (const city of cities) {
                citySelect.innerHTML += `<option value= "${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false

        })
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

//Itens de coleta
//Pegar todos os li`s

const itensToCollect = document.querySelectorAll(".items-grid li")
for (item of itensToCollect) {

    item.addEventListener("click", handleselecteditem)

}


constcollectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleselecteditem(event) {
    const itemli = event.target

    itemli.classList.toggle("selected")

    const itemId = itemli.dataset.id
    console.log('ITEM ID:', itemId)
    // Verificar se existe items selecionado se sim,
    //pegar os items selecionados.

    //Aero function: const alreadySelected = selectedItems.findIndex (item => item == itemId)

    const alreadySelected = selectedItems.findIndex(function (item) {
        const itemFound = item == itemId
        return itemFound
    })

    if (alreadySelected >= 0) {
        const filtereItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItems = filtereItems
    } else {
        selectedItems.push(itemId)
    }

    console.log('selectedItems', selectedItems)

    constcollectedItems.value = selectedItems
}
