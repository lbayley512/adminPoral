
// Your Code Here
async function admin() {
    let response = await fetch('http//:localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(renderBook)
}

function renderBook(book){
    let root = document.querySelector('#root')
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    let.textContent = book.title
    let input = document.createElement('input')
    input.value = book.quantity
    let button = document.createElement('button')
    button.textContent = 'Save'
    button.addEventListener('click', () => {
        fetch('http//:localhost:3001/updateBook', {
        method: 'PATCH',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: book.id,
            quantity: input.value
        })
      }).catch(error => console.log(error))
    })
    li.append(input, button)
    ul.append(li)
    root.append(ul)
}
admin();



