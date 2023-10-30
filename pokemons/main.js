const elGeneralPokemonList = document.querySelector('.pokemons__list');

function pokemonRender(item) {
    for(let item of pokemons) {
        let pokemonItem = document.createElement('li');
        pokemonItem.classList.add('pokemons__item');
        
        let pokemonImg = document.createElement('img');
        pokemonImg.classList.add('pokemons__list-img')
        pokemonImg.src = item.img
        pokemonImg.setAttribute('width', '250');
        pokemonImg.setAttribute('height', '250');
        
        let pokemonName = document.createElement('h3');
        pokemonName.classList.add('pokemons__list-title');
        pokemonName.textContent = item.name;
        
        let BasicPokemonListWrapper = document.createElement('div')
        BasicPokemonListWrapper.classList.add('pokemons__list-body')
        let pokemonBasicDetailList = document.createElement('ul');
        pokemonBasicDetailList.classList.add('basic-details__list');
        
        
        let pokemonType = document.createElement('li');
        pokemonType.classList.add('basic-details__item');
        pokemonType.innerHTML = `<strong>Type: </strong>${item.type}`
        
        let pokemonHeight = document.createElement('li');
        pokemonHeight.classList.add('basic-details__item');
        pokemonHeight.innerHTML = `<strong>Height: </strong>${item.height}`;
        
        let pokemonWeight = document.createElement('li');
        pokemonWeight.classList.add('basic-details__item');
        pokemonWeight.innerHTML = `<strong>Weight: </strong>${item.weight}`
        
        let pokemonEgg = document.createElement('li');
        pokemonEgg.classList.add('basic-details__item');
        pokemonEgg.innerHTML = `<strong>Egg: </strong> ${item.egg}`
        
        let secondaryDetailsList = document.createElement('ul');
        secondaryDetailsList.classList.add('secondary-details__list');
        
        let candyCount = document.createElement('li');
        candyCount.classList.add('secondary-details__item');
        candyCount.innerHTML = `<strong>Candy count: </strong> ${item.candy_count}`
        
        let spawnChance = document.createElement('li');
        spawnChance.classList.add('secondary-details__item');
        spawnChance.innerHTML = `<strong>Spawn chance: </strong> ${item.spawn_chance}`
        
        let avgSpawns = document.createElement('li');
        avgSpawns.classList.add('secondary-details__item');
        avgSpawns.innerHTML = `<strong>Average spawns: </strong> ${item.avg_spawns}`
        
        let spawnTime = document.createElement('li');
        spawnTime.classList.add('secondary-details__item');
        spawnTime.innerHTML = `<strong>Spawn time: </strong>: ${item.spawn_time}`
        
        let followingDetailsList = document.createElement('ul');
        followingDetailsList.classList.add('following-details__list');
        
        
        let pokemonWeekness = document.createElement('li');
        pokemonWeekness.classList.add('following-details__item');
        pokemonWeekness.innerHTML = `<strong>Weakness: </strong>: ${item.weaknesses}`
        
        let pokemonNextEvolution = document.createElement('li');
        pokemonNextEvolution.classList.add('following-details__item');
        
        if (item.next_evolution && item.next_evolution.length > 0) {
            const evolutionNames = item.next_evolution.map(evolution => evolution.name).join(', ');
            pokemonNextEvolution.innerHTML = `<strong>Next evolution: </strong> ${evolutionNames}`;
        } else {
            pokemonNextEvolution.textContent = "No Evolutions";
        }
        
        elGeneralPokemonList.appendChild(pokemonItem);
        pokemonItem.append(pokemonImg,pokemonName, BasicPokemonListWrapper, followingDetailsList);
        BasicPokemonListWrapper.append(pokemonBasicDetailList, secondaryDetailsList);
        pokemonBasicDetailList.append(pokemonType, pokemonHeight, pokemonWeight, pokemonEgg);
        secondaryDetailsList.append(candyCount, spawnChance, avgSpawns, spawnTime);
        followingDetailsList.append(pokemonWeekness, pokemonNextEvolution);
    }
}

pokemonRender();

