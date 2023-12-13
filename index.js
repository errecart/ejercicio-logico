function findN(arrN){
    const numb = []

    for(let i = 0; i < arrN.length; i++){
        const number = arrN[i]
        if (number >= 3) {
            if (!numb.includes(number)) {
                numb.push(number);
            } else {
                const index = numb.indexOf(number);
                numb.splice(index, 1);
            }
        } else {
            console.log("Numbers not found", number);
        }
    }
    return numb
}

const arrayN = [1, 3, 2, 4, 2, 1, 3];
const result = findN(arrayN);

const arr = document.getElementById("array")
const container = document.getElementById("container")
const button = document.getElementById('button')

button.addEventListener('click', () =>{
    const containerArr = result.map(num => `<p>${num}</p>`).join("");
    container.innerHTML = containerArr;
})

const contenidoAr2 = arrayN.map(numb => `<p>${numb}</p>`).join("");
arr.innerHTML = contenidoAr2;
