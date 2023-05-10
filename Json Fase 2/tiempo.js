fetch('https://www.el-tiempo.net/api/json/v2/provincias')
	.then(response => response.json())
	.then(data => {
		const dataContainer = document.getElementById('data');

		data.provincias.forEach(provincia => {
			const card = document.createElement('div');
			card.classList.add('card');

			const title = document.createElement('h2');
			title.innerText = provincia.NOMBRE_PROVINCIA;
			card.appendChild(title);

			const subtitle = document.createElement('p');
			subtitle.innerText = `ID: ${provincia.CODPROV}`;
			card.appendChild(subtitle);

			const population = document.createElement('p');
			population.innerText = `Población: ${provincia.Poblacion}`;
			card.appendChild(population);

			dataContainer.appendChild(card);
		});
	})
	.catch(error => console.error(error));
