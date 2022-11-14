const CarroService = require('../services/CarroService');



module.exports = {
    getall: async (req,res ) => {
        let json = {error: '',result:[]};
        let cars = await CarroService.getall();

        for (let i in cars){
            json.result.push({
                codigo:cars[i].codigo,
                descricao: cars[i].modelo,
            })
        }
        res.json(json);
    },

    getById: async (req,res) =>{
        let json = {error: '',result:{}}
        let id   = req.params.id;

        let cars = await CarroService.getById(id)

        if (cars){
            json.result = cars; 
        }
        res.json(json)
    }
}