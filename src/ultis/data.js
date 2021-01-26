export function makeData() {
    const back = 'https://upload.wikimedia.org/wikipedia/vi/3/3b/Pokemon_Trading_Card_Game_cardback.jpg'
    const finish = 'https://media.istockphoto.com/illustrations/cartoon-finish-sign-illustration-id478290143'
    let pokemon_data = [
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
    ]
    pokemon_data = [].concat(pokemon_data, pokemon_data)
    pokemon_data = pokemon_data.map(img => {
        return {
            front: img,
            back: back,
            finish: finish,
            isFlip: 0,
            isFinish: false,
            isSelected:false
        }
    })
    pokemon_data.sort((a, b) => Math.random() - Math.random())
    return pokemon_data
}

