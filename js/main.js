const app = new Vue({
    el:'#root',
    data:{
        arrayInput:[],
        inputUtente: '',
        click: false,
        
    },
    methods:{
        clickInput: function(){
            if(this.inputUtente === ''){
                inputUtente = ''
            }else {
                this.arrayInput.push(this.inputUtente)
            }
            this.inputUtente=''
        },
        checkClick: function(){
             if(this.click == false){
                return this.click = true
             }
                 console.log(this.click)
        },
        greenClick: function(){
            this.click 
            console.log(this.click)
        }
        
    }
})