let calcularCuil = {

    multiplicar: function(numero1, numero2){
        return numero1 * numero2;
    },

    agregarCeros: function(documento){
        let datoDni = String(documento)
        let cantidad = datoDni.length
        let respuesta = ""
        switch(cantidad){
            case 9:
            case 10:
            case 11:
                respuesta = 'Documento tiene más de 8 dígitos';
                datoDni = 0
            break;
            case 7:
                datoDni = '0' + datoDni;
            break;
            case 6:
                datoDni = '00' + datoDni;
            break;
            case 5:
                datoDni = '000' + datoDni;
            break;
            case 4:
            case 3:
            case 2:
            case 1:
                respuesta = 'Documento informado tiene pocos dígitos';
                datoDni = 0;
            break;
                
            }
            return datoDni;
    },

    respuestaSinDni: function(req, res){
        if (req.params.sexo == 'm' || req.params.sexo == 'M' || req.params.sexo == 'f' || req.params.sexo == 'F') {
            res.send('Siempre debe enviar el numero de Documento despues del /género/')
        } else {
            res.send('Siempre debe enviar el numero de Documento despues del /género/, adicionalmente, tenga en cuenta que los géneros posibles son M o F')
        }
        
    },
    respuestaInicial: function(req, res){
        res.send('Hola! con esta app podrás calcular el CUIL de cualquier persona, solo debes cargar despues del localhost:3000, /calcular-cuil/, luego el género como /F/ o /M/, y continuando el numero de documento')
    },
    respuestaGenero: function(req, res){
        res.send('Recuerda que despues del localhost:3000/calcular-cuil/, debes escribir el género como /F/ o /M/, y continuando el numero de documento')
    },
    calcular: function(req, res){
        let dniTexto = String(calcularCuil.agregarCeros(req.params.dni));

        if(dniTexto == undefined){
            this.respuestaSinDni
        }

        if (dniTexto == 0){
            res.send('Con ese documento no se puede procesar');
        } else {
        let sex = req.params.sexo;
        if (sex == 'M' || sex == 'm'|| sex == 'F' || sex == 'f'){
            let numeroTexto;
            let arrayNumero = [];
            if (sex == 'M' || sex == 'm'){
                numeroTexto = 20;
                arrayNumero = [2, 0];
            } else {
                numeroTexto = 27;
                arrayNumero = [2, 7];
            }
            let largoDniTexto = dniTexto.length;
            let arrayDni = [];
            if (largoDniTexto == 8){
                let fin = 1
            for (let i = 0; i < 8; i++){
                arrayDni.push(Number(dniTexto.slice(i,fin)));
                fin = fin + 1;
            }
            }
            let suma = 0;
            let contador = [5,4,3,2,7,6,5,4,3,2];
            for (let i = 0; i < 2; i++){
                suma = suma + calcularCuil.multiplicar(arrayNumero[i],contador[i]);
            }
            contador = [3,2,7,6,5,4,3,2]
            for (let i = 0; i < 8; i++){
                suma = suma + calcularCuil.multiplicar(arrayDni[i],contador[i]);
            }
            let verificador = suma % 11;
            let final = 0
            if (verificador == 0){
                final = 0;
            } else if (verificador == 1 && sex == 'M'){
                final = 9;
                numeroTexto = 23;
            } else if (verificador == 1 && sex == 'F'){
                final = 4;
                numeroTexto = 23;
            } else {
                final = 11 - verificador;
            }

            res.send(numeroTexto + '-' + dniTexto + '-' + final);

        } else {
            res.send('El primer parámetro debe ser M (masculino) o F (femenino)');
        }
    }
    }    
}

module.exports = calcularCuil