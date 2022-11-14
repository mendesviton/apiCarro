const  db = require('../db');

module.exports = {
    getall: () => {
        return new Promise((accept,denied)=>{
            db.query('SELECT * FROM carros',(error,results)=>{
                if (error) {
                    denied(error); return;
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
    } 
};