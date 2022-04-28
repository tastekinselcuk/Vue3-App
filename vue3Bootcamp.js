const app = Vue.createApp({
    data(){
        return{
            //
            inp: {
                type:"text",
                id:"vueInput",
                name:"vue",
            },
            input:"vue girdisi",
            coords:{
                x:0,
                y:0,
            },
            //
            counter:0,
            counter2:0,
            //
            search:"",
            itemList: ["elma","armut","kiraz","çilek"],
            //
            showBorder: false,
            showRed: false,
            showGreen:false,
            //
            bgcolor:"cyan",
            //
            showText: false,
            //
            sayac:0,
            //
            todoList: [
                {id:1,text:"Vue Bootcamp Hafta 1", completed:false},
                {id:2,text:"Vue Bootcamp Hafta 2", completed:false},
                {id:3,text:"Vue Bootcamp Hafta 3", completed:false},
                {id:4,text:"Vue Bootcamp Hafta 4", completed:false},
                {id:5,text:"Vue Bootcamp Hafta 5", completed:false},
                {id:6,text:"Vue Bootcamp Hafta 6", completed:false},
                {id:7,text:"Vue Bootcamp Hafta 7", completed:false},
            ],
        };
    },
    methods:{  //metodlar yazmak için kullanılır
        changeLabel(text="fvfbfbfb"){
            this.input = text;
        },
        searchKeys(key){
            this.input=key;
            console.log(input);
        },
        updateCordinats(mesaj,event){
            console.log(mesaj,event.x,event.y);
            this.coords = {
                x:event.x,
                y:event.y,
            }
        },
        addTodo(event) {
            this.todoList.push({
                id: new Date().getTime(),
                text: event.target.value,
                completed: false,
            });
        },
        //  searchList(){
        //     this.filteredList= filteredList = this.itemList.filter(i=>i.includes(this.search));
        //     console.log("filteredList:>>",filteredList);
        // }
        removeItem(todoItem){
            this.todoList = this.todoList.filter(todo=>todo!=todoItem);
        },
    },
    //computed reactivity sağladığı için anlık kontrol mekanizmasına sahiptir.Methodlardaki gibi v-on(@) kullanmaya gerek yoktur
    computed:{ //bir method gibi çalışan değişkenlerdir(geriye return ile değer döndürmesi gerekir)
        getConuterResult(){
            console.log("counter 1 çalıştı"); //normalde method yerine bu logları yazsaydık virtual dom oluşturulduğu için her iki counter da çalışacak ve iki log mesajı da çalışacaktı.(bu daha büyük çaplı projeler için sorun oluşturur)
            return this.counter>5 ? "BÜYÜK" : "KÜÇÜK";
        },
        getConuter2Result(){
            console.log("counter 2 çalıştı");
            return this.counter2>5 ? "BÜYÜK" : "KÜÇÜK";
        },
        filteredList(){
            return this.itemList.filter((i) => i.includes(this.search));
        },
        boxClasses(){
            return {bordernone:this.showBorder, red: this.showRed, green:this.showGreen};
        },
        colorClasses(){
            return{green:this.sayac>0, red:this.sayac<0, blue:this.sayac==0};
        },
        completedItemCount(){
            return this.todoList.filter((t)=> t.completed).length;
        },
        uncompletedItemCount(){
            return this.todoList.filter((t)=> !t.completed).length;
        },
    },
    watch: { //geriye bir değer dödürmek zorunda değildir
        counter(newValue, oldValue){ //yandaki kalıp olarak yazılır ve istenilen elemanların eski ve yeni değerlerini izlememizi sağlar
            console.log(oldValue, "=>",newValue);
        },
        counter2(newValue, oldValue){
            console.log(oldValue, "=>",newValue);
        },
        getConuterResult(newValue, oldValue){
            console.log(oldValue, "=>",newValue);
        },
    },
    beforeCreate(){
        console.log("Vue oluşturulmadan önce beforeCreate çalışır")
    },
    created(){
        console.log("Vue oluluşturulduğunda created çalışır")
    },
    beforemount(){
        console.log("Vue oluşturulup Dom'a bağlanmadan hemen önce beforemount çalışır ")
    },
    mounted(){
        console.log("Vue oluşturulup Dom'a bağlandıktan sonra mounted çalışır")
    },
    beforeUpdate(){
        console.log("Elementler üzerinde herhangi bir değişiklik yapıldığında dom güncellenmeden hemen önce beforeUpdate çalışır")
    },
    updated(){
        console.log("Elementler üzerinde herhangi bir değişiklik yapılıp dom güncellendikten sonra update çalışır")
    },
    beforeDestroy(){
        console.log("Vue instance'i yok edilmeden önce beforeDestroy çalışır")
    },
    destroyed(){
        console.log("Vue instance'i yok edildikten sonra destroyed çalışır")
    },
}).mount("#app")