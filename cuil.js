let calcularCuil = {

    multiplicar: function(numero1, numero2){
        return numero1 * numero2;
    },

    agregarCeros: function(documento){
        let datoDni = String(documento)
        let cantidad = datoDni.length
        switch(cantidad){
            case 9:
            case 10:
            case 11:
                console.log('Documento tiene más de 8 dígitos');
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
                console.log('Documento informado tiene pocos dígitos');
                datoDni = 0;
            break;
                
            }
            return datoDni;
    },

    cuil: function(sexo, dni){
        let dniTexto = String(calcularCuil.agregarCeros(dni));
        if (dniTexto == 0){
            return 'Con ese documento no se puede procesar';
        } else {
        let sex = sexo;
        if (sex == 'M' || sex == 'F'){
            let numeroTexto;
            let arrayNumero = [];
            if (sex == 'M'){
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

            return numeroTexto + '-' + dniTexto + '-' + final;

        } else {
            return 'El primer parámetro puede ser M (masculino) o F (femenino)';
        }
    }
    }
}
//console.log(cuil('F',23292686))

module.exports = calcularCuil;