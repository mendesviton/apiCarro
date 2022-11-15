const CarroService = require('../services/CarroService');



module.exports = {
    getall: async (req,res ) => {
        let json = {carros:[]};
        let cars = await CarroService.getall();
        
            for (let i in cars){
                json.carros.push({
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
    },

    insert: async (req,res)=>{
        console.log(req.body);
       let json = {error: '',carro:{}}
       let modelo = req.body.modelo;
       let placa  = req.body.placa;
        
       if(modelo && placa){
        let CarroCodigo = await CarroService.insert(modelo,placa);
        json.carro = {
            codigo: CarroCodigo,
            modelo,
            placa
        }

       }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    
    },
    update: async (req,res)=>{
        console.log(req.body);
       let json = {error: '',carro:{}}
       let id = req.params.id;
       let modelo = req.body.modelo;
       let placa  = req.body.placa;
        
       if(id&&modelo && placa  ){
        await CarroService.udpate(id,modelo,placa);
        json.carro = {
            id,
            modelo,
            placa
        }

       }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    
    },
    delete: async(req,res) =>{
        let json = {error: '',carro:{}}
        let id = req.params.id;
        await CarroService.delete(id);
        res.json(json);
    }
}