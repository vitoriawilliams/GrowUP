fetch('https://api.meuapp.com.br/v1/usuarios', {
    method: 'GET'
}).then(response => { 
    //Faz alguma coisa
}).catch(error => {
    //trata o erro
})

meuapp.get('/', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', 'https://www.meuapp.com.br')
    res.send('Lista de usuários')
})