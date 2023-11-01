const arrows = document.querySelectorAll('.arrow')
const gridLists = document.querySelectorAll('.grid-list')
const lists = document.querySelectorAll('.grid-list-elements')

gridLists.forEach(gridList => {
    const arrow = gridList.children[0].children[0]
    const title = gridList.children[0]
    const ul = gridList.children[1]

    title.addEventListener('click', (e) => {
        console.log('clicked')
        console.log(title.children[1])

        if(arrow.classList.contains('arrow-active')){
            arrow.classList.remove('arrow-active')
            arrow.classList.add('arrow-unactive')
            
            ul.classList.remove('ul-active')
            ul.classList.add('ul-unactive')

            return 0;
        }
        arrow.classList.remove('arrow-unactive')
        arrow.classList.add('arrow-active')

        ul.classList.remove('ul-unactive')
        ul.classList.add('ul-active')
    })
})