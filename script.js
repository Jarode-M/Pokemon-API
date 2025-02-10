function fetchAPI() {
    fetch('https://tyradex.vercel.app/api/v1/pokemon')
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('list')
            data.forEach(pokemon => {
                if (pokemon.pokedex_id === 0) return; // Skip if pokedex_id is 0
                console.log(pokemon)
                const item = document.createElement('div')
                item.classList.add('block', 'rounded-lg', 'p-4', 'shadow-sm', 'shadow-indigo-100', 'bg-zinc-300');
                const url = `https://tyradex.vercel.app/api/v1/pokemon/${pokemon.pokedex_id}`
                fetch(url).then(response => response.json()).then(data => {
                    item.innerHTML = `
                        <div class="flex items-center justify-center ">
                            <img alt="Image ${data.name.fr}" src="${data.sprites.regular}" class="w-40 h-full rounded-md object-cover" draggable=false/>
                        </div>
                        <div class="mt-2">
                            <dl>
                                <div>
                                    <dt class="sr-only">Address</dt>
                                    <dd class="font-bold text-black">${data.name.fr} (N°${data.pokedex_id})</dd>
                                </div>
                            </dl>
                            <div class="mt-1 flex items-center gap-3 text-xs">
                                <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    <svg class="size-4 text-teal-600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" height="800px" width="800px" version="1.1" id="Capa_1" viewBox="0 0 297 297" xml:space="preserve"><g><path d="M225.982,119.09C237.179,106.511,244,89.955,244,71.83v-0.66C244,31.927,212.407,0,173.164,0h-49.662   C84.259,0,52,31.927,52,71.17v0.66c0,18.373,6.999,35.142,18.47,47.781C59.117,130.206,52,145.284,52,162v77   c0,31.981,26.352,58,58.333,58h77C219.314,297,245,270.981,245,239v-77C245,145.012,237.659,129.707,225.982,119.09z M196,221.069   c-2,2.281-4.784,4.29-8.438,6.026s-8.282,2.604-13.802,2.604c-6.998,0-12.762-2.151-17.129-6.454   c-4.368-4.302-6.632-9.888-6.632-16.756v-11.819c0-6.816,2.193-12.389,6.456-16.718c4.264-4.328,9.782-6.492,16.494-6.492   c7.283,0,12.755,1.685,16.383,5.054c3.629,3.37,5.698,8.194,6.19,14.026L195.453,191h-12.324c-0.44-3-1.406-5.447-2.896-6.951   c-1.49-1.502-3.765-2.367-6.823-2.367c-3.059,0-5.632,1.156-7.499,3.579c-1.866,2.424-2.911,5.497-2.911,9.332v11.897   c0,3.939,1.032,7.108,2.872,9.506c1.841,2.398,4.475,3.596,7.793,3.596c2.41,0,3.998-0.194,5.373-0.583   c1.373-0.389,2.962-0.907,2.962-1.556V209h-9v-9h23V221.069z M100,172h14v22h4.475l12.44-22h16.329l-17.534,25.816L148.761,229   h-16.018l-12.675-23H114v23h-14V172z M68,71.83v-0.66C68,40.749,93.082,16,123.502,16h49.662C203.584,16,228,40.749,228,71.17v0.66   c0,14.795-5.698,28.237-15.211,38.154c-7.732-3.824-16.261-5.984-25.456-5.984h-77c-9.463,0-18.562,2.293-26.46,6.329   C74.164,100.38,68,86.796,68,71.83z"/></g></svg>
                                    <div class="mt-1.5 sm:mt-0">
                                        <p class="text-black">Poids :</p>
                                        <p class="font-medium text-black">${data.weight}</p>
                                    </div>
                                </div>
                                <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    <svg class="size-4 text-teal-600" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"><path d="M6 10V5M6 5L4 7M6 5L8 7M6 14V19M6 19L8 17M6 19L4 17M12 7H20M20 12H12M12 17H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                                    <div class="mt-1.5 sm:mt-0">
                                        <p class="text-black">Taille :</p>
                                        <p class="font-medium text-black">${data.height}</p>
                                    </div>
                                </div>
                                <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    <div class="mt-1.5 sm:mt-0">
                                        <p class="text-black">Types :</p>
                                        <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
                                            ${data.types.map(type => `<img src="${type.image}" alt="Image du type : ${type.name}" class="mt-0.5 w-4" title="${type.name}" draggable=false />`).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-end">
                                <div class="mt-3 flex items-center gap-3 text-xs">
                                    <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <button class="mt-1.5 sm:mt-0 bg-blue-500 text-white font-bold py-2 px-4 rounded" onclick="showDetails(${data.pokedex_id})">Voir plus</button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                    }).catch(error => console.error(error))
                    list.appendChild(item)
            })
        })
        .catch(error => console.error(error))
    }

function showDetails(pokedex_id) {
    const url = `https://tyradex.vercel.app/api/v1/pokemon/${pokedex_id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const modal = document.createElement('div');
            modal.classList.add('fixed', 'inset-0', 'bg-black/50', 'flex', 'items-center', 'justify-center');
            modal.innerHTML = `
                <div class="relative flex justify-center w-[50rem] h-[55rem] py-4 m-auto bg-white shadow-2xl">
                    <span class="absolute top-0 right-0 block w-10 h-5 -mt-2 -mr-4 text-xs text-center text-gray-600 transform rotate-45 bg-white rounded shadow-md cursor-pointer hover:bg-gray-100 hover:text-red-500" onclick="closeModal()">Fermer</span>
                    <div class="ml-4 flex flex-col w-1/2 space-y-4 justify-center">
                        <img src="${data.sprites.regular}" alt="Image ${data.name.fr}" class="w-full h-auto object-contain" draggable=false>
                        ${data.sprites.shiny ? `<img src="${data.sprites.shiny}" alt="Image shiny ${data.name.fr}" class="w-full h-auto object-contain" draggable=false>` : ''}
                    </div>
                    <div class="flex flex-col justify-between w-1/2 px-4 space-y-16">
                        <div>
                            <h1 class="mb-2 text-2xl font-bold leading-tight">${data.name.fr} (N°${data.pokedex_id})</h1>
                            <p class="text-sm text-gray-700"><strong>Poids:</strong> ${data.weight}</p>
                            <p class="text-sm text-gray-700"><strong>Taille:</strong> ${data.height}</p>
                            <p class="text-sm text-gray-700 mt-2"><strong>Types:</strong></p>
                            <div class="grid grid-cols-1 md:grid-cols-12 gap-1">
                                ${data.types.map(type => `<img src="${type.image}" alt="Image du type : ${type.name}" class="mt-0.5 w-6" title="${type.name}" draggable=false />`).join('')}
                            </div>
                            <p class="text-sm text-gray-700 mt-2"><strong>Résistances:</strong></p>
                            <div class="grid grid-cols-2 row-span-3 gap-8">
                                <ul class="list-disc pl-5 columns-2">
                                    ${data.resistances.map(resistance => `<li>${resistance.name}</li>`).join('')}
                                </ul>
                            </div>
                            <p class="text-sm text-gray-700 mt-2"><strong>Statistiques:</strong></p>
                            <ul class="list-disc pl-5">
                                <li><strong>HP:</strong> ${data.stats.hp}</li>
                                <li><strong>Attaque:</strong> ${data.stats.atk}</li>
                                <li><strong>Défense:</strong> ${data.stats.def}</li>
                                <li><strong>Attaque Spéciale:</strong> ${data.stats.spe_atk}</li>
                                <li><strong>Défense Spéciale:</strong> ${data.stats.spe_def}</li>
                                <li><strong>Vitesse:</strong> ${data.stats.vit}</li>
                            </ul>
                            <p class="text-sm text-gray-700 mt-2"><strong>Talents:</strong></p>
                            <div class="grid grid-cols-2 row-span-3 gap-8">
                                <ul class="list-disc pl-5 columns-2">
                                    ${data.talents.map(talent => `<li>${talent.name}</li>`).join('')}
                                </ul>
                            </div>
                            <p class="text-sm text-gray-700 mt-2"><strong>Groupes d'œufs:</strong> ${data.egg_groups.join(', ')}</p>
                            <p class="text-sm text-gray-700"><strong>Sexe:</strong> ♂ ${data.sexe.male}% / ♀ ${data.sexe.female}%</p>
                            <p class="text-sm text-gray-700"><strong>Taux de capture:</strong> ${data.catch_rate} %</p>
                            <p class="text-sm text-gray-700"><strong>Expérience au niveau 100:</strong> ${data.level_100}</p>
                            ${data.evolution && data.evolution.next && data.evolution.next.length > 0 ? `
                                <p class="text-sm text-gray-700 mt-2"><strong>Évolutions:</strong></p>
                                <div class="grid grid-cols-1 md:grid-cols-2">
                                    ${data.evolution.next.map(evo => `
                                        <div class="flex flex-row items-center space-y-1 space-x-4">
                                            <img src="https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/${evo.pokedex_id}/regular.png" alt="Image ${evo.name.fr}" class="w-12 h-12 object-contain" draggable=false>
                                            ${data.sprites.shiny ? `<img src="https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/${evo.pokedex_id}/shiny.png" alt="Image shiny ${evo.name.fr}" class="-mt-2 w-12 h-12 object-contain" draggable=false>` : ''}
                                            </div>
                                            <div class="text-center">
                                                <p class="text-sm text-gray-700">${evo.name}</p>
                                                <p class="text-xs text-gray-500">${evo.condition}</p>
                                            </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        })
        .catch(error => console.error(error));
}

function closeModal() {
    const modal = document.querySelector('.fixed.inset-0.bg-black\\/50');
    if (modal) {
        modal.remove();
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    fetchAPI();
});