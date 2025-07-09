async function fetchAllPokemonNames() {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const data = await res.json();
        const names = data.results.map(p => p.name);

        // Display the names in the page
        const namesElement = document.getElementById("names");
        namesElement.textContent = names.join(", ");
    } catch (err) {
        console.error("Failed to fetch Pokémon names:", err);
    }
}

fetchAllPokemonNames();