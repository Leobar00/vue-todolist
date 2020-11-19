const app = new Vue({
    el:'#root',
    data:{
        arrayInput:[],
        inputUtente: '',
        clickArray: []
        
    },
    methods:{
        clickInput: function(){
            if(this.inputUtente === ''){
                inputUtente = ''
            }else {
                this.arrayInput.push(this.inputUtente);
                this.clickArray.push(false)               
            }
            this.inputUtente=''
        },
        deleteEl(index){
            this.arrayInput.splice(index,1)
            this.clickArray.splice(index,1)
        },                
        toggleIsClicked(index){
            // mettiamo come primo l'array che deve cambiare,indice che deve cambiare
            Vue.set(this.clickArray, index , !this.clickArray[index])
        } 
        
            // if(this.click == false){
                // this.click = true

            // }else{
                // this.click = false
            // }
        
        
    }
})