window.addEventListener('load', solve);

function solve() {
    let genreEl = document.getElementById('genre')
    let nameEl = document.getElementById('name')
    let authorEl = document.getElementById('author')
    let dateEl = document.getElementById('date')

    let addBtn = document.getElementById('add-btn')
    addBtn.addEventListener('click', add)

    let allHits = document.getElementsByClassName('all-hits-container')[0]
    let savedhits = document.getElementsByClassName('saved-container')[0]
    let totalLikes = document.querySelector('#total-likes .likes p')

    let like = 0

    function add (e) {
        e.preventDefault()
        console.log(allHits)
        let genre = genreEl.value
        let name = nameEl.value
        let author = authorEl.value
        let date = dateEl.value

        if(genre == '' || name == '' || author == '' || date == ''){
            return
        }

        let div = document.createElement('div')
        div.classList.add('hits-info')

        allHits.appendChild(div)

        let img = document.createElement('img')
        img.src = "./static/img/img.png"
        div.appendChild(img)

        let h2Genre = document.createElement('h2')
        h2Genre.textContent = `Genre: ${genre}`
        div.appendChild(h2Genre)

        let h2Name = document.createElement('h2')
        h2Name.textContent = `Name: ${name}`
        div.appendChild(h2Name)

        let h2Author = document.createElement('h2')
        h2Author.textContent = `Author: ${author}`
        div.appendChild(h2Author)

        let h3 = document.createElement('h3')
        h3.textContent = `Date: ${date}`
        div.appendChild(h3)

        let saveBtn = document.createElement('button')
        saveBtn.classList.add('save-btn')
        saveBtn.textContent = 'Save song'
        
        let likeBtn = document.createElement('button')
        likeBtn.classList.add('like-btn')
        likeBtn.textContent = 'Like song'
        
        let deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete-btn')
        deleteBtn.textContent = 'Delete'

        saveBtn.addEventListener('click', onSave)
        likeBtn.addEventListener('click', onLike)
        deleteBtn.addEventListener('click', onDeleteCollection)
        
        div.appendChild(saveBtn)
        div.appendChild(likeBtn)
        div.appendChild(deleteBtn)
        
        genreEl.value = ''
        nameEl.value = ''
        authorEl.value = ''
        dateEl.value = ''
    }

    function onSave() {
        let div = document.querySelector('.hits-info')
        div.querySelector('.save-btn').remove()
        div.querySelector('.like-btn').remove()
        div.querySelector('.delete-btn').addEventListener('click', onDeleteSave)

        savedhits.appendChild(div)
    }

    function onLike() {
        let likeBtn = document.querySelector('.like-btn')
        like += 1
        totalLikes.textContent = `Total Likes: ${like}`
        likeBtn.disabled = true

    }

    function onDeleteSave(e) {
        e.target.parentNode.remove()
    }

    function onDeleteCollection(e) {
        e.target.parentNode.remove()
    }
}