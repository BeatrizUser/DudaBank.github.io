import { openDb } from '../configDB.js'

export async function createTable(){
    openDb()
        .then(db=>{
            db.exec(`CREATE TABLE IF NOT EXISTS Pessoa (id INTEGER PRIMARY KEY,nome TEXT,login TEXT,senha INTEGER,conta INTEGER,agencia INTEGER,saldo INTEGER)`)
        })
}
export async function insertPessoa(pessoa){
    openDb()
        .then(db=>{
            db.run(`INSERT INTO Pessoa (nome, login, senha, conta, agencia, saldo)VALUES(?,?,?,?,?,0)`, [pessoa.nome,pessoa.login,pessoa.senha,pessoa.conta,pessoa.agencia,pessoa.saldo])
        })
}
export async function updatePessoa(pessoa){
    openDb()
        .then(db=>{
            db.run(`UPDATE Pessoa SET
            nome="${pessoa.nome}", 
            login="${pessoa.login}", 
            senha="${pessoa.senha}",
            conta="${pessoa.conta}", 
            agencia="${pessoa.agencia}", 
            saldo="${pessoa.saldo}" 
            WHERE id="${pessoa.id}"`
            )
        })
}
export async function selectPessoas(){
    return openDb()
        .then(db=>{
            return db.all(`SELECT * FROM Pessoa`)
            .then(res=>res)
        })
}
export async function selectPessoa(id){
    return openDb()
        .then(db=>{
            return db.get(`SELECT * FROM Pessoa WHERE id=?`,[id])
            .then(res=>res)
        })
}
export async function deletePessoa(id){
    return openDb()
        .then(db=>{
            return db.get(`DELETE FROM Pessoa WHERE id=?`,[id])
            .then(res=>res)
        })
}
