function receivesAFunction(cb){
    cb()
}
function returnsANamedFunction(){
    function named(){

    }
    return named
}

function returnsAnAnonymousFunction(){
    return ()=>{
        
    }
}