const express = require("express")
const server = express()

//pegar o banco de dados
const db = require('./database/db.js')

//Configurar Pasta Públicas
server.use(express.static("public"))

//habilitar o uso do req.body
server.use(express.urlencoded({extended: true}))

//Utilizando tamplete engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", { 
    express: server,
    noCache: true
})

//Configuração do caminho da pagina Inicial
server.get("/", (req,res) => {

    
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    //console.log(req.query)
    return res.render("create-point.html")
})

server.post("/saveponit", (req,res) => {
    //req.body: o corpo do nosso formulário
    //console.log(req.body)

    //Inserir dados no banco de dados
    const query = `
    INSERT INTO places(
        image,
        name,
        address,
        address2,
        state,
        city,
        items

    ) VALUES(?,?,?,?,?,?,?);
    
`


const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body. state,
    req.body.city,
    req.body.items
    
        
]

function afterInsertData(err){
        if(err){
            return console.log(err)
        }
        console.log('Cadastrado com sucesso')
        console.log(this)

        return res.render('create-point.html', {saved: true} )
    
}

 //Insere dados nas tabelas do db   
db.run( query, values, afterInsertData)

    
    
})

server.get("/search-results", (req, res) => {

    //Pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }
        
        console.log(rows)
        const total = rows.length

        //Mostra a pagina html com os dados do banco de dados
        return res.render("search-results.html", {places:rows,total})
    } )
    

    
})


//Ligando o servidor
server.listen(3000)