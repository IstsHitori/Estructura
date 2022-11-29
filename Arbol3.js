class Arbol{
    constructor(){
        this.raiz = null;
    }

    Add(value){
        let nodo = new Nodo(value);
        if(this.raiz == null){
            this.raiz = nodo;
        }else{
            this.Validar(this.raiz,nodo);
        }
    }
    Validar(raiz,nodo){
        if(nodo.value < raiz.value){
            if(raiz.izquierda == null) raiz.izquierda = nodo;
            else{
                this.Validar(raiz.izquierda,nodo);
            }
        }else{
            if(raiz.derecha == null) raiz.derecha = nodo;
            else{
                this.Validar(raiz.derecha,nodo);
            }
        }
    }

    Inorder(nodo){
        if(nodo != null){
            this.Inorder(nodo.izquierda);

            console.log(nodo.value);

            this.Inorder(nodo.derecha);
        }
    }
    Preorder(nodo){
        if(nodo != null){
            console.log(nodo.value);
            this.Preorder(nodo.izquierda);
            this.Preorder(nodo.derecha);
        }
    }

    Postorder(nodo){
        if(nodo != null){
            this.Postorder(nodo.izquierda);
            this.Postorder(nodo.derecha);
            console.log(nodo.value);
        }
    }

    Buscar(nodo,value){
        if(nodo == null) return null;
        else if(value < nodo.value) return this.Buscar(nodo.izquierda,value);
        else if(value > nodo.value) return this.Buscar(nodo.derecha,value);
        else return nodo;
    }

    Eliminar(value){
        this.raiz = this.Proceso(this.raiz,value);
    }

    Proceso(aux,value){
        if(aux == null) return "Nodo no encontrado";
        else if(value < aux.value) {
            //Recorremos el arbol por las ramas izquierdas
            let iz = this.Proceso(aux.izquierda,value);
            aux.izquierda  = iz;
        }else if(value > aux.value) {
            let der = this.Proceso(aux.derecha,value);
            aux.derecha = der;
        }else{
            let p = aux;
            if(p.derecha == null){
                aux = p.izquierda;
            }else if(p.izquierda == null){
                aux = p.derecha;
            }else{
                p = Cambiar(p);
            }
            p = null;
        }
    
        return aux;
    }

    Cambiar(aux){
        let p = aux;
        let a = aux.izquierda;
        while(a.derecha != null){
            p = a;
            a = a.derecha;
        }

        aux.value = a.value;
        if(p == aux){
            p.izquierda = a.izquierda;
        }else{
            p.derecha = a.izquierda;
        }
        return a;
    }
}

class Nodo{
    constructor(value){
        this.value = value;
        this.izquierda = null;
        this.derecha = null;
    }
}

const arbol = new Arbol();

arbol.Add(5);
arbol.Add(4);
arbol.Add(6);
arbol.Add(7);
arbol.Add(8);
arbol.Add(9);
arbol.Add(10);

arbol
console.log(arbol.Eliminar(4));
console.log(arbol.Buscar(arbol.raiz,4));

arbol
