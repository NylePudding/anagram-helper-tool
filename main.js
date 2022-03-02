var tool = new Vue({
    el: '#toolApp',

    data: {
        alphabet: [
                    'A','B','C','D','E',
                    'F','G','H','I','J',
                    'K','L','M','N','O',
                    'P','Q','R','S','T',
                    'U','V','W','X','Y','Z'],
        anagram: '',
        answer: ''
    },

    methods: {
        countLetters: function(l, str){
            let count = 0;
            for (let i = 0; i < str.length; i++){
                if(str[i].toUpperCase() == l){
                    count++;
                }
            }
            return count;
        }
    },

    computed: {
        remainingLetters: function() {
            let str = '';
            for (let i = 0; i < this.alphabet.length; i++){
                let diff = this.countLetters(this.alphabet[i],this.anagram) - this.countLetters(this.alphabet[i],this.answer);
                if (diff > 0){
                    for (let ii = 0; ii < diff; ii++){
                        str += this.alphabet[i];
                    }
                }
            }
            return str;
        }
    }
});