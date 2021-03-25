function resolver() {
        //  Obtenemos los límites
        if(document.querySelector('.separador')){
            document.querySelector('.separador').innerHTML = "<br>";
        }
        var a = document.getElementById('limA').value;
        var b = document.getElementById('limB').value;

        //  Validamos que los límites sean diferentes de vacío o nulos
        if (a == '' || a == null) {
            alert("Ingresa un valor para a");
            return false;
        }
        if (b == '' || b == null) {
            alert("Ingresa un valor para b");
            return false;
        }

        //  Obtenemos el valor absoluto
        //var val_abs = ((b - a)/2);// sería h
        var h = ((b-a)/3);
        //var val_abs = Math.abs(Number(a) + Number(b));
        //var d = Number((val_abs / 3));

        //  Obtenemos punto medio 1
        var punto_medio1 = eval(Number(a)+Number(h));

        //  Obtenemos punto medio 1
        var punto_medio2 = eval(Number(punto_medio1)+Number(h));

        //  Obtenemos valor de ña función a evaluar
        var txt_funciones = document.getElementById('txt_funcion').value;

        console.log("valor de H: " + h);
        console.log("valor de a: " + a);
        //console.log("valor abs: " + val_abs);
        //console.log("d: " + d);
        console.log("punto 1: " + punto_medio1);
        console.log("punto 2: " + punto_medio2);
        //return false;
        document.getElementById('gif').style.display = "block";
        
        setTimeout(() => {
                    document.getElementById('gif').style.display = "none";
            document.getElementById('resultado_funciones').style.display="block";
                }, 1500);
        
        //alert(txt_funciones);
        //var buscar_sen = txt_funciones;

        //  Sustituimos los limites calculados en la funcion a evaluar
        var fn0 = txt_funciones.replace(/x/gi, "*(" + b + ")");
        fn0 = fn0.replace(/sen/gi, 'Math.sin');//Buscamos sen y sustituimos
        fn0 = fn0.replace(/cos/gi, 'Math.cos');//Buscamos cos y sustituimos
        fn0 = fn0.replace(/tan/gi, 'Math.tan');//Buscamos tan y sustituimos
        document.getElementById('muestra_fn_eval0').innerHTML = fn0;
        document.getElementById('puntoinferior').innerHTML = a;
        //console.log("El valor de fn0 es:" + fn0);

        var fn1 = txt_funciones.replace(/x/gi, "*(" + punto_medio1 + ")");
        fn1 = fn1.replace(/sen/gi, 'Math.sin');//Buscamos sen y sustituimos
        fn1 = fn1.replace(/cos/gi, 'Math.cos');//Buscamos cos y sustituimos
        fn1 = fn1.replace(/tan/gi, 'Math.tan');//Buscamos tan y sustituimos
        document.getElementById('muestra_fn_eval1').innerHTML = fn1;
        document.getElementById('puntomedio1').innerHTML = punto_medio1;
        //console.log("El valor de fn1 es:" + fn1);

        var fn2 = txt_funciones.replace(/x/gi, "*(" + punto_medio2 + ")");
        fn2 = fn2.replace(/sen/gi, 'Math.sin');//Buscamos sen y sustituimos
        fn2 = fn2.replace(/cos/gi, 'Math.cos');//Buscamos cos y sustituimos
        fn2 = fn2.replace(/tan/gi, 'Math.tan');//Buscamos tan y sustituimos
        document.getElementById('muestra_fn_eval2').innerHTML = fn2;
        document.getElementById('puntomedio2').innerHTML = punto_medio2;
        //console.log("El valor de fn2 es:" + fn2);

        var fn3 = txt_funciones.replace(/x/gi, "*(" + a + ")");
        fn3 = fn3.replace(/sen/gi, 'Math.sin');//Buscamos sen y sustituimos
        fn3 = fn3.replace(/cos/gi, 'Math.cos');//Buscamos cos y sustituimos
        fn3 = fn3.replace(/tan/gi, 'Math.tan');//Buscamos tan y sustituimos
        document.getElementById('muestra_fn_eval3').innerHTML = fn3;
        document.getElementById('puntosuperior').innerHTML = b;
        //console.log("El valor de fn3 es:" + fn3);

        try {
            fn0 = eval(fn0);
            //dato1(eval(fn0));
        } catch (e) {
            //dato1('Error');
            return false;
        }
        try {
            fn1 = eval(fn1);
            //dato2(eval(fn1));
        } catch (e) {
            return false;
        }
        try {
            fn2 = eval(fn2);
            //dato3(eval(fn2));
        } catch (e) {
            return false;
        }
        try {
            fn3 = eval(fn3);
            //dato4(eval(fn3));
        } catch (e) {
            return false;
        }

        
        
        document.querySelector('.separador').innerHTML = "<br>";
        document.getElementById('nueva').disabled = false;
        
        document.getElementById('fn0').innerHTML = fn0.toFixed(4);
        document.getElementById('fn1').innerHTML = fn1.toFixed(4);
        document.getElementById('fn2').innerHTML = fn2.toFixed(4);
        document.getElementById('fn3').innerHTML = fn3.toFixed(4);

        var resultado = (b - a) * ((fn0 + (3 * fn1) + (3 * fn2) + fn3) / 8);

        document.getElementById('resultado').innerHTML = resultado.toFixed(4);

        /*
        (b-a)*((fn0+(3*fn1)+(3*fn2)+fn3)/8)
        
        */

    }