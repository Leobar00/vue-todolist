const app = new Vue({
    el:'#root',
    data:{
        arrayInput:[],
        inputUtente: '',
    },
    methods:{
        clickInput: function(){
            this.arrayInput.push(this.inputUtente)
        },
        deleteElement: function(){
            this.inputUtente.splice(index,1)
        }
    }
})