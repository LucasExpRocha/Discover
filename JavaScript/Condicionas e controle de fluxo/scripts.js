// throw

function sayMyName(name){
   if (name === ''){
      throw 'Nome é obrigatório'
   }
   console.log(name)
}

// try..catch
// sayMyName()
try{
   sayMyName()
}
catch(e){
   console.log(e)
}

console.log('Após o erro')

