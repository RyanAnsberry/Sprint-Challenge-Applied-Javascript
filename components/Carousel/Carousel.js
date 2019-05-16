class Carousel {
    constructor(element){
        this.element = element;
        this.rButton = element.querySelector('.right-button');
        this.lButton = element.querySelector('.left-button');
        this.images = element.querySelectorAll('img');
        Array.from(this.images);
        //starting index
        this.index = 0;
        //image on load
        this.images[this.index].style.display = 'inline';

        this.rButton.addEventListener('click', () => this.rSlide());
        this.lButton.addEventListener('click', () => this.lSlide());
    }
    rSlide(){
        if( this.index < this.images.length - 1) {
            this.index++;
            this.images[this.index - 1].style.display = 'none';
            this.images[this.index].style.display = 'inline';
        } else {
            this.images[this.index].style.display = 'none';
            this.index = 0;
            this.images[this.index].style.display = 'inline';
        }
    }
    lSlide(){
        if( this.index > 0 ) {
            this.index--;
            this.images[this.index + 1].style.display = 'none';
            this.images[this.index].style.display = 'inline';
        } else {
            this.images[this.index ].style.display = 'none';
            this.index = this.images.length - 1;
            this.images[this.index].style.display = 'inline';
        }
    }
}

let carousel = document.querySelectorAll('.carousel').forEach(elem => new Carousel(elem));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
