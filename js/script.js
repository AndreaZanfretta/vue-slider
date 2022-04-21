const app = new Vue({
    el: '#root',
    data: {
        activeIndex: 0,
        filter: "filter",
        border: "border",
        timer: null,
        carousel: [
            {
                image: 'img/01.jpg',
                title: 'Austria',
                subtitle:'lorem ipsum',
            },
            {
                image: 'img/02.jpg',
                title: 'Italia',
                subtitle:'lorem ipsum',
            },
            {
                image: 'img/03.jpg',
                title: 'Svizzera',
                subtitle:'lorem ipsum',
            },
            {
                image: 'img/04.jpg',
                title: 'Congo',
                subtitle:'lorem ipsum',
            },
            {
                image: 'img/05.jpg',
                title: 'Marocco',
                subtitle:'lorem ipsum',
            },
        
        ],
    },
    methods: {
        next(){
            this.activeIndex >= 4 ? this.activeIndex = 0 : this.activeIndex++;
        },
        prev(){
            this.activeIndex <= 0 ? this.activeIndex = 4 : this.activeIndex--;
        },
        clickImgindex(){
            console.log(this.activeIndex)
        },
        autoScroll(){
            this.timer = setInterval(()=>{
                this.next();
            }, 3000);
        },
        stopAutoScroll(){
            clearInterval(this.timer);
            this.timer = null;
        }

    },
    mounted() {
        this.autoScroll();
    }, 
})