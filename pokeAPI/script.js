async function fetchAllPokemonNames() {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500');
        const data = await res.json();
        const names = data.results.map(p => p.name);
        const namesElement = document.getElementById("names");
        namesElement.textContent = names.join(", ");
    } catch (err) {
        console.error("Failed to fetch Pokémon names:", err);
    }
}

fetchAllPokemonNames();
document.getElementById('btn').addEventListener('click', async () => {
    const input = document.getElementById('inp').value.toLowerCase().trim();
    if (!input) {
        alert("Please enter a Pokémon name");
        return;
    }

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        if (!res.ok) throw new Error("Pokémon not found");
        
        const data = await res.json();
        document.getElementById('img').src = data.sprites.front_default;
        document.getElementById('name').textContent = `Name: ${data.name}`;
        document.getElementById('height').textContent = `Height: ${data.height*10}cm`;
        document.getElementById('weight').textContent = `Weight: ${data.weight*100}g`;
        const formNames = data.forms.map(f => f.name).join(", ");
        document.getElementById('forms').textContent = `Forms: ${formNames}`;
        const locRes = await fetch(data.location_area_encounters);
        const locations = await locRes.json();
        const locationNames = locations.map(l => l.location_area.name).slice(0, 5).join(", ");
        document.getElementById('location_area').textContent = `Location Areas: ${locationNames || 'Unknown'}`;

    } catch (err) {
        console.error(err);
        alert("Error: Pokémon not found. Please check the name.");
    }
});