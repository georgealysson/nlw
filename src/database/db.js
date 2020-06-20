//Importa dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()


//Cria objeto no sqlite3 para fazer operações no banco
const db = new sqlite3.Database("./src/database/database.db")

//Exporta BD
module.exports = db


//Utilizar o objeto do banco de dados, para nossa operações
/*db.serialize(() =>{
    //Com comando sql eu vou...

    //1 Criar tabelas
    db.run(`CREATE TABLE IF NOT EXISTS places(
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               image TEXT,
               name TEXT,
               address TEXT,
               address2 TEXT,
               state TEXT,
               city TEXT,
               items TEXT
          );
    
    `) 
    //2 inserir dados na tabela
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
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "Papersider",
        "Guilherme Gamballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Papéis e Papelão"
]

function afterInsertData(err){
        if(err){
            return console.log(err)
        }
        console.log('Cadastrado com sucesso')
        console.log(this)
    
}

 //Insere dados nas tabelas do db   
db.run( query, values, afterInsertData)



 //3 Consultar dados na tabela
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }
        console.log('Aqui estão seus registros')
        console.log(rows)
    } )
  
  


    //4 Deletar um dado na tabela
       // db.run(`DELETE FROM places WHERE id =?`,[8], function(err){
           // if(err){
              //  return console.log(err)
           // }
            //console.log('Registro deletado com sucesso!')  
       // })
    
   

   


})
*/

