const app = new Vue({
    el:'#root',
    data:{
        arrayInput:[],
        inputUtente: '',
    },
    methods:{
        clickInput: function(){
            this.arrayInput.push(this.inputUtente);
            this.inputUtente='';
        },
        
        
        
    }
})