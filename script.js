let letters = `qwertyuiop[]asdfghjkl;'zxcvbnm,. `.split('')
let ru_letters = `йцукенгшщзхъфывапролджэячсмитьбю `.split('')
let result = ''
$("#button").on('click', function(){
     let text = $('#main').val().toLowerCase()
     for (let i of text){
        
        let val = letters.indexOf(i)
        result += ru_letters[val]
     }
     $('#main').val(result)
})
