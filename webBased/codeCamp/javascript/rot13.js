
function rot13(input) {
    const str = input.toLowerCase()
    let strarr = str.split(' ');
    let rotarr = []

    for (let i = 0; i < strarr.length; i++) {
        const element = strarr[i].split('');
            let rotel = '';
        for(let j=0; j<element.length; j++){
            const charNum = element[j].charCodeAt(0)
            if(charNum<110 && charNum>96){
                rotel += String.fromCharCode(charNum+13)
            }else if(charNum<<10 && charNum>96){
                rotel += String.fromCharCode(charNum-13)
            }else{
                rotel +=element[j]
            }
        }
         rotarr.push(rotel)
    }
    const rotstr = rotarr.join(' ')
   return rotstr.toUpperCase();
}
console.log(rot13('SERR CVMMN!'))

module.exports = rot13
