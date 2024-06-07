function fetchAPI() {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const results = data.results
            console.log(results)
            const list = document.getElementById('list')
            results.forEach(pokemon => {
                const item = document.createElement('div')

                const url = pokemon.url
                console.log(url)
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        const types = data.types

                        const div = document.createElement('div')
                        item.appendChild(div)
                        item.classList.add('flex-shrink-0', 'm-6', 'relative', 'overflow-hidden', 'bg-teal-500', 'rounded-lg', 'max-w-xs', 'shadow-lg')

                        const svg = document.createElement('svg')
                        item.innerHTML = '<svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;"> <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" /> <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" /> </svg>'

                        const div2 = document.createElement('div')
                        item.appendChild(div2)
                        div2.classList.add('relative', 'pt-10', 'px-10', 'flex', 'items-center', 'justify-center')

                        const div3 = document.createElement('div')
                        item.appendChild(div3)
                        div3.classList.add('lock', 'absolute', 'w-48', 'h-48', 'bottom-0', 'left-0', '-mb-24', 'ml-3')

                        const img = data.sprites.front_default
                        const imgMarker = document.createElement('img')
                        imgMarker.src = `${img}`
                        item.appendChild(imgMarker)
                        item.classList.add('relative', 'w-40')

                        const div4 = document.createElement('div')
                        item.appendChild(div4)
                        div4.classList.add('relative', 'text-white', 'px-6', 'pb-6', 'mt-6')

                        const newElement = document.createElement('li')
                        newElement.innerText = `${pokemon.name}`
                        item.appendChild(newElement)
                        types.map(type => {
                            const toto = document.createElement('p')
                            toto.innerText = `${type.type.name}`
                            item.appendChild(toto)
                        })
                    })
                    .catch(error => console.error(error))
                list.appendChild(item)
            })
        })
        .catch(error => console.error(error))
}
fetchAPI()
