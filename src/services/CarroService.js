const  db = require('../db');

module.exports = {
    getall: () => {
        return new Promise((accept,denied)=>{
            db.query('SELECT * FROM carros',(error,results)=>{
                if (error) {
                    denied(error);
                     return;
                }accept(results);
            })
        })
    },
    getById: (codigo)=> {
        return new Promise((accept,denied)=>{
            db.query('SELECT * FROM carros WHERE codigo = ?',[codigo],(error,results)=>{
                if (error) {
                    denied(error); return;
                }
                if (results.length > 0){
                    accept(results[0]);
                }else{
                    accept(false);
                }
            })

        })
    },
    insert: (modelo,placa)=> {
        return new Promise((accept,denied)=>{
            db.query('INSERT INTO carros (modelo,placa) VALUES (?, ?)',
            [modelo,placa],
            (error,results)=>{
                if (error) {
                    denied(error); return;
                }
                accept(results.insertId)
                
            })

        })
    },
    update: (codigo,modelo,placa)=> {
        return new Promise((accept,denied)=>{
            db.query('UPDATE carros SET modelo = ?, placa =? where codigo = ?',
            [modelo,placa,codigo],
            (error,results)=>{
                if (error) {
                    denied(error); return;
                }
                accept(results.insertId)
                
            })

        })
    },
    delete:(id) => {
     return new Promise((accept,denied)=>{
        db.query('DELETE FROM carros WHERE codigo=? ',[id],
        (error,results)=>{
            if(error){
                denied(error);return;
            }
            accept(results)
        })
     })
    } 
};