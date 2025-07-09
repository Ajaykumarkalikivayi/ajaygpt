const mainDiv = document.getElementById('main');
const cars = [
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",
		title: "Mazda MX-5",
		start_production: 1989,
		class: "Sports car Roadster",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Kuebelwagen_1.jpg/400px-VW_Kuebelwagen_1.jpg",
		title: "Volkswagen Kübelwagen",
		class: "Military vehicle",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg",
		title: "Porsche Cayenne",
		start_production: 2002,
		class: "Mid-size luxury crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG",
		title: "Vauxhall Chevette",
		start_production: 1975,
		class: "Supermini",
	},

]
function displayCars ()
{
    cars.forEach(function (ele, ind)
    {
        const div = document.createElement('div');
        div.classList.add('car')
        const image = document.createElement('img');
        image.src = ele.image;
        const button = document.createElement('button');
        button.textContent = ele.title;
        div.append(image, button);
        mainDiv.appendChild(div)
    })
}
displayCars();