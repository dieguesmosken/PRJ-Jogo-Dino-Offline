const dino = document.querySelector('.dino');
let isJumping = false;
//console.log(dino);
function handleKeyUp(event){
    if (event.keyCode === 32){
        console.log('pressionou espaço!');
        if(!isJumping){
            jump();   
        }
        
    }
}
function jump(){
    let position = 0;

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 200){
            clearInterval(upInterval);
            //descendo
            let downInterval = setInterval(()=>{
                if (position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                position -= 20;
        
                dino.style.bottom = position + 'px';    
                }
                
            }, 20);
            //subindo
        }else{
        position += 20;
        
        dino.style.bottom = position + 'px';    
        }
    }, 20) ;
}
document.addEventListener('keyup', handleKeyUp);