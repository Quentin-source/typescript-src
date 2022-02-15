type NumberOrString = number | string;

// la on précise de façon générique que la fonction peut retourner un string ou un nombre
function combine(a : NumberOrString, b : NumberOrString) : number | string {
    if(typeof a === 'string' || typeof b === 'string' ){
        return a.toString() + b.toString();
    } else {
        return a + b;
    }
}

console.log(combine(50, 2));

// ici on prédétermine tous les retours possibles de la fonction 
// ce qu'on appel une fonction overload
function combine2(a : number, b : number) : number 
function combine2(a : number, b : string) : string 
function combine2(a : string, b : number) : string 
function combine2(a : string, b : string) : string 
function combine2(a : NumberOrString, b : NumberOrString) {
    if(typeof a === 'string' || typeof b === 'string' ){
        return a.toString() + b.toString();
    } else {
        return a + b;
    }
}

console.log(combine2(50, 2));