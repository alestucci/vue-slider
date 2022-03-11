/*
Descrizione:
Partendo dai file nello starter implementare la funzione dei bottoni (next e previous) dello slider usando Vue (prima però create la struttura dati).
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consiglio del giorno:
- regola d'oro: riciclare ovunque possibile! E il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
Buon lavoro e buon divertimento!
*/

const app = new Vue({
	el: "#root",
	data: {
		activeSlide: 0,
		slidesArray: [
			{
				title: "Svezia",
				image: "img/01.jpg",
				content:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
			},
			{
				title: "Svizzera",
				image: "img/02.jpg",
				content: "Lorem ipsum",
			},
			{
				title: "Gran Bretagna",
				image: "img/03.jpg",
				content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
			},
			{
				title: "Germania",
				image: "img/04.jpg",
				content:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam",
			},
			{
				title: "Paradise",
				image: "img/05.jpg",
				content:
					"Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam",
			},
		],
	},
	methods: {
		nextSlide() {
			if (this.activeSlide == this.slidesArray.length - 1) {
				this.activeSlide = 0;
			} else {
				this.activeSlide++;
			}
		},
		prevSlide() {
			if (this.activeSlide == 0) {
				this.activeSlide = this.slidesArray.length -1;
			} else {
				this.activeSlide--;
			}
		},
	},
});
