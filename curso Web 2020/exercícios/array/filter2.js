Array.prototype.filter2 = function(callback) {

    let newArray = []

    for (let i = 0; i < this.length; i++){
        if (callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome : "notebook", preco: 2499, fragil: true},
    { nome : "iPad", preco: 4199, fragil: true},
    { nome : "copo de vidro", preco: 12.49, fragil: true},
    { nome : "copo de plástico", preco: 18.99, fragil: false }
]

console.log(produtos.filter2((p) => {
    return p.fragil && p.preco >= 500 //retorna os elementos onde o retorno for true
}))