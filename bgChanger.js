const buttons = document.querySelectorAll('.button')
// now select body
const body = document.querySelector('body')

buttons.forEach(function(btn){
    console.log(btn)
    btn.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey'
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = 'orange'
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'
        }
    })
})