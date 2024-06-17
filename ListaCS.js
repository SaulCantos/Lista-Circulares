class Nodo {
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

class ListaCS {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    agregarInicio(data){
        var nodo = new Nodo(data, this.head);
        if (this.head){
            let actual = this.head;
            while(actual.next != this.head){
                actual = actual.next;
            }
            actual.next = nodo;
        } else {
            nodo.next = nodo;
        }
        this.head = nodo;
        this.size++;
    }
    agregarFinal(data) {
        var nodo = new Nodo(data, null);
        if (this.head === null) {
            this.head = nodo;
            nodo.next = this.head;
        } else {
            let actual = this.head;
            while (actual.next != this.head){
                actual = actual.next;
            }
            actual.next = nodo;
            nodo.next = this.head;
        }
        this.size++;
    }
    removerFinal(){
        if(this.head){
            let actual = this.head;
            let anterior = null;
            if(this.head === this.head.next){
                this.head = null;
            } else {
                while(actual.next != this.head){
                    anterior = actual;
                    actual = actual.next;
                }
                anterior.next = this.head;
            }
            this.size--;
            return actual.data;
        } else {
            return null;
        }
    }
    removerInicio() {
        if (this.head){
            let data = this.head.data;
            if(this.head === this.head.next){
                this.head = null;
            } else {
                let actual = this.head;
                while(actual.next !== this.head){
                    actual = actual.next;
                }
                this.head = this.head.next;
                actual.next = this.head;
            }
            this.size--;
            return data;
        } else {
            return null;
        }
    }
    removerValor(data){
        let actual = this.head;
        let anterior = null;
        if(!this.head){
            return "No hay lista";
        }
        do{
            if(actual.data === data){
                if(actual === this.head){
                    return this.removerInicio();
                } else {
                    anterior.next = actual.next;
                    this.size--;
                    return actual.data;
                }
            }
            anterior = actual;
            actual = actual.next;
        } while(actual !== this.head);
        return "Valor no encontrado";
    }
    removerIndice(indice){
        if (indice < 0 || indice >= this.size) {
            return "Índice fuera de rango";
        }
        if (indice === 0) {
            return this.removerInicio();
        }
        let actual = this.head;
        let anterior = null;
        let contador = 0;
        while (contador < indice){
            anterior = actual;
            actual = actual.next;
            contador++;
        }
        anterior.next = actual.next;
        this.size--;
        return actual.data;
    }
    imprimirLista(){
        if(!this.size){
            return null;
        }
        let actual = this.head;
        let resultado = "";
        do{
            resultado += actual.data + "->";
            actual = actual.next;
        } while(actual !== this.head);
        return resultado + "cabeza";
    }
}

const circular = new ListaCS();

circular.agregarInicio(0);
circular.agregarFinal(1);
circular.agregarFinal(2);
circular.agregarFinal(3);
circular.agregarFinal(4);
circular.agregarFinal(5);
circular.removerValor(3);
circular.removerInicio();
circular.removerFinal();
circular.removerIndice(2);
console.log(circular.imprimirLista());
console.log(circular.agregarFinal(6));
console.log(circular.imprimirLista());
