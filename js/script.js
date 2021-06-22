// Descrizione: Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus: Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

const app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        photos: [
            'https://cdn.pixabay.com/photo/2014/03/03/16/12/village-279013_1280.jpg',
            'https://cdn.pixabay.com/photo/2019/10/03/19/57/japan-4524260_1280.jpg',
            'https://cdn.pixabay.com/photo/2015/09/18/11/47/london-bridge-945499_1280.jpg',
            'https://cdn.pixabay.com/photo/2015/11/07/11/11/taj-mahal-1030894_1280.jpg',
        ]
    },


    methods: {
        leftBtn : function(){
            this.counter--
            if(this.counter < 0){
                this.counter = 3
            }
        },
        rightBtn : function(){
            this.counter++
            if(this.counter > 3){
                this.counter = 0
            }
        }

    }
}); 