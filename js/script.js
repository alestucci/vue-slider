const app = new Vue({
	el: "#root",
	data: {
		activeSlide: 0,
		interval: null,
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
			};
            this.stopTimer();
            this.startTimer();
		},
		prevSlide() {
            if (this.activeSlide == 0) {
                this.activeSlide = this.slidesArray.length - 1;
			} else {
                this.activeSlide--;
			}
            this.stopTimer();
            this.startTimer();
		},
		startTimer() {
			this.interval = setInterval(this.nextSlide, 3000);
		},
		stopTimer() {
			clearInterval(this.interval);
			this.interval = null;
		},
		cLog() {
			console.log(this.hover);
		},
	},
	mounted: function () {
		this.startTimer();
	},
});
