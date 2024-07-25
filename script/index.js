let idResPrincipal = 'respuestas__txt__principal';
let idResVidas = 'respuestas__txt__vidas';
let preguntas = 'preguntas__usuario';
let emoji = 'emoji';
let idvidas = 'vidas';
let elegir = 'eleccion';




// De aqui arriba id de elementos html
let pregunta__uno = 'Fecha de nacimiento.  -Formato:dia-mes-año  -Ejemplo:01-01-2000';
let pregunta__dos = 'Cual es el primer nombre de la hermana con mas edad que tiene. -Solo primer nombre -Primera letra MAYUSCULA -Ejemplo:Karla'
let pregunta__tres ='Lugar donde estoy viviendo actualmente -Primera Letra MAYUSCULA -Ejemplo:Magangue';
let pregunta__cuatro ='Como aparezco en facebook. -Primer nombre -Primera Letra MAYUSCULA -Ejemplo:Jumex';
let pregunta__cinco ='Toca o dar clic en la @  de este juego.';

let pregunta__cuatro_apodo = 'El apodo mas popular que tengo. --Primera letra MAYUSCULA';





// Preguntas

let variableGlobal = 0;
let condicionPreguntas =0;
let vidas = 3;

// 

let acertaste = 'Felicidades acertaste la pregunta'
let campoVacio = 'Campo Vacio, Intentalo';
let respuestaIncorrecta = 'Respuesta incorrecta'




function personajeSergio() {
    
    variableGlobal=1;
    congelarBtnPersonajes();
    document.getElementById('section__funcionalidad').style.display='block';
    agregarTexto(elegir,'Elegiste a Sergio Ardila')
    agregarTexto(idResPrincipal,'Sergio Ardila');
    agregarTexto(idResVidas,'Responde las preguntas relacionada a tu elección. Familiarízate con tu personaje ante de saber su secreto, Ojo con tus vidas.');

 


    

    


}
function personajeJimmy() {
    variableGlobal=2;
    congelarBtnPersonajes();
    document.getElementById('section__funcionalidad').style.display='block';
    agregarTexto(elegir,'Elegiste a Jimmy Gutierrez')
    agregarTexto(idResPrincipal,'Jimmy Gutierrez');
    agregarTexto(idResVidas,'Responde las preguntas relacionada a tu elección. Familiarízate con tu personaje ante de saber su secreto, Ojo con tus vidas.');

   

   
    

    


}
function personajeChope() {
    variableGlobal=3;
    congelarBtnPersonajes();
    document.getElementById('section__funcionalidad').style.display='block';
    agregarTexto(elegir,'Elegiste a Jhon Florez')
    agregarTexto(idResPrincipal,'Jhon Florez');
    agregarTexto(idResVidas,'Responde las preguntas relacionada a tu elección. Familiarízate con tu personaje ante de saber su secreto, Ojo con tus vidas.');

   

   
    

    


}

function personajePapo() {
    variableGlobal=4;
    congelarBtnPersonajes();
    document.getElementById('section__funcionalidad').style.display='block';
    agregarTexto(elegir,'Elegiste a Jose Fernando ')
    agregarTexto(idResPrincipal,'Jose Fernando');
    agregarTexto(idResVidas,'Responde las preguntas relacionada a tu elección. Familiarízate con tu personaje ante de saber su secreto, Ojo con tus vidas.');

   

   
    

    


}

function validarPreguntas() {
   
    let entradaInput = document.getElementById('entrada').value; 
  

   // -------sergio--------------------------------------------
   
    while (variableGlobal==1) {

        
        
        
        if (vidas>0) {
            
            
            if (condicionPreguntas==0) {
              
                preguntasGlobales(entradaInput,'19-04-2005');
                
                break
                
            }else if (condicionPreguntas==1){
               
                preguntasGlobales(entradaInput,'Laura');
                break
            }else if (condicionPreguntas==2){
                preguntasGlobales(entradaInput,'Barrancabermeja');
                break
            }else if (condicionPreguntas==3){
                preguntasGlobales(entradaInput,'David');
                break
            }else if (condicionPreguntas==4){
                preguntasGlobales(entradaInput,'Jfonseca');
                break
            }else{
          
                
                break
            }
            
            
            
        }else{
            
            alert ('Tienes cero vida fin del juego');
            agregarTexto(emoji,'😔');
            agregarTexto(idResPrincipal,'Fin Del Juego');
            agregarTexto(idResVidas,`  `);
            break;
        }
    }
// -------jimmy--------------------------------------------
    while (variableGlobal==2) {
        if (vidas>0) {
            
            
            if (condicionPreguntas==0) {
              
                preguntasGlobales(entradaInput,'18-09-2004');
                break
                
            }else if (condicionPreguntas==1){
                
                preguntasGlobales(entradaInput,'Isabela');
                break
            }else if (condicionPreguntas==2){
                preguntasGlobales(entradaInput,'Albania');
                break
            }else if (condicionPreguntas==3){
                preguntasGlobales(entradaInput,'Viky');
                break
            }else if (condicionPreguntas==4){
                preguntasGlobales(entradaInput,'Jfonseca');
                break
            }else{
          
                
                break
            }
            
            
            
        }else{
            
            alert ('Tienes cero vida fin del juego');
            agregarTexto(emoji,'😔');
            agregarTexto(idResPrincipal,'Fin Del Juego');
            agregarTexto(idResVidas,`  `);
            break;
        }
       
    }

    // -------chope--------------------------------------------
    while (variableGlobal==3) {
        if (vidas>0) {
            
            
            if (condicionPreguntas==0) {
              
                preguntasGlobales(entradaInput,'20-06-2003');
                break
                
            }else if (condicionPreguntas==1){
                
                preguntasGlobales(entradaInput,'Luzyeni');
                break
            }else if (condicionPreguntas==2){
                preguntasGlobales(entradaInput,'Casanare');
                break
            }else if (condicionPreguntas==3){
                preguntasGlobales(entradaInput,'Chope');
                break
            }else if (condicionPreguntas==4){
                preguntasGlobales(entradaInput,'Jfonseca');
                break
            }else{
          
                
                break
            }
            
            
            
        }else{
            
            alert ('Tienes cero vida fin del juego');
            agregarTexto(emoji,'😔');
            agregarTexto(idResPrincipal,'Fin Del Juego');
            agregarTexto(idResVidas,`  `);
            break;
        }
       
    }

     // -------papo--------------------------------------------
     while (variableGlobal==4) {
        if (vidas>0) {
            
            
            if (condicionPreguntas==0) {
              
                preguntasGlobales(entradaInput,'26-03-2003');
                break
                
            }else if (condicionPreguntas==1){
                
                preguntasGlobales(entradaInput,'Mayerlin');
                break
            }else if (condicionPreguntas==2){
                preguntasGlobales(entradaInput,'Bogota');
                break
            }else if (condicionPreguntas==3){
                preguntasGlobales(entradaInput,'Papo');
                break
            }else if (condicionPreguntas==4){
                preguntasGlobales(entradaInput,'Jfonseca');
                break
            }else{
          
                
                break
            }
            
            
            
        }else{
            
            alert ('Tienes cero vida fin del juego');
            agregarTexto(emoji,'😔');
            agregarTexto(idResPrincipal,'Fin Del Juego');
            agregarTexto(idResVidas,`  `);
            break;
        }
       
    }


    limpiarCaja();



// ----------sesion condiciones ----------
    if (variableGlobal==1) {
        condicionSergio()
        
    } else if (variableGlobal==2) {
        condicionJimmy()
    }else if (variableGlobal==3) {
        condicionChope()
    }else if (variableGlobal==4) {
        condicionPapo()
    } else {
       
    }
   
    
    
   
    
   
 


    
}

function agregarTexto (idHtml,texto){
    let elementoHtml = document.getElementById(idHtml);
    elementoHtml.innerHTML = texto;
}

function congelarBtnPersonajes() {

    if (variableGlobal==1) {
        document.getElementById('persona_numero_dos').setAttribute('disabled',true);
        document.getElementById('persona_numero_tres').setAttribute('disabled',true);
        document.getElementById('persona_numero_cuatro').setAttribute('disabled',true);

    }

    if (variableGlobal==2) {
        document.getElementById('persona_numero_uno').setAttribute('disabled',true);
        document.getElementById('persona_numero_tres').setAttribute('disabled',true);
        document.getElementById('persona_numero_cuatro').setAttribute('disabled',true);

    }

    if (variableGlobal==3) {
        document.getElementById('persona_numero_uno').setAttribute('disabled',true);
        document.getElementById('persona_numero_dos').setAttribute('disabled',true);
        document.getElementById('persona_numero_cuatro').setAttribute('disabled',true);
    }

    if (variableGlobal==4) {
        document.getElementById('persona_numero_uno').setAttribute('disabled',true);
        document.getElementById('persona_numero_dos').setAttribute('disabled',true);
        document.getElementById('persona_numero_tres').setAttribute('disabled',true);
    }




    
    
}


agregarTexto(preguntas,pregunta__uno);


function preguntasGlobales (entrada,respuesta) {

    let revision = entrada;
    let respuestavalida = respuesta;

    

    if (revision==respuestavalida){
        agregarTexto(emoji,'👍');
        agregarTexto(idResPrincipal,acertaste);
        agregarTexto(idResVidas,'Responde la siguiente pregunta, sigue asi ');
        condicionPreguntas++;



    }else if (revision=='') {
        agregarTexto(emoji,'😢');
        agregarTexto(idResPrincipal,campoVacio);
        agregarTexto(idResVidas,'');
       
    }else {
        agregarTexto(emoji,'😡');
        agregarTexto(idResPrincipal,respuestaIncorrecta);
        agregarTexto(idResVidas,` '${revision}' , vamos que  tu puedes, ojo con tus vidas  `);
        
        vidas--
        agregarTexto(idvidas,`${vidas}`)
        
    }

    
    
}

function limpiarCaja() {

    document.getElementById('entrada').value = '';
    
}

function respuestaCinco(){
    alert('Gracia Por Participar, Si quieres participar,solo debe escribirme. Respuesta de la pregunta 5 :Jfonseca');
}

function reinciarJuego (){

     variableGlobal = 0;
     condicionPreguntas =0;
     vidas = 3;
     agregarTexto(preguntas,pregunta__uno);

}

function condicionSergio() {

   
    if (variableGlobal==1){
        if (condicionPreguntas==1) {

            agregarTexto(preguntas,pregunta__dos);
            

        }else if (condicionPreguntas==2) {

            agregarTexto(preguntas,pregunta__tres);
            

        }else if (condicionPreguntas==3){
            agregarTexto(preguntas,pregunta__cuatro);
           
        }else if (condicionPreguntas==4){
            agregarTexto(preguntas,pregunta__cinco);
           
        }else if (condicionPreguntas==0){
            
           
        }else{
                alert(' DESCUBRISTE SU SECRETO FELICIDADES ')
                agregarTexto(emoji,' 😮 ');
                agregarTexto(idResPrincipal,'Me comias los bollos y las chichas a escondidas de mami Aleida');
                agregarTexto(idResVidas,'  ');
                agregarTexto(preguntas,'Reinicia la pagina y elige mas participantes ');


        }
    }
    
}

function condicionJimmy() {

    if (variableGlobal==2){
        if (condicionPreguntas==1) {
    
            agregarTexto(preguntas,pregunta__dos);
            
    
        }else if (condicionPreguntas==2) {
    
            agregarTexto(preguntas,pregunta__tres);
            
    
        }else if (condicionPreguntas==3){
            agregarTexto(preguntas,pregunta__cuatro_apodo);
           
        }else if (condicionPreguntas==4){
            agregarTexto(preguntas,pregunta__cinco);
           
        }else if (condicionPreguntas==0){
            
           
        }else{
                alert(' DESCUBRISTE SU SECRETO FELICIDADES ')
                agregarTexto(emoji,' 😮 ');
                agregarTexto(idResPrincipal,' Desde que vivo solo me baño cada tres dias  ');
                agregarTexto(idResVidas,'  ');
                agregarTexto(preguntas,'Reinicia la pagina y elige mas participantes ');
    
    
        }
    }
}

function condicionChope() {

    if (variableGlobal==3){
        if (condicionPreguntas==1) {
    
            agregarTexto(preguntas,pregunta__dos);
            
    
        }else if (condicionPreguntas==2) {
    
            agregarTexto(preguntas,pregunta__tres);
            
    
        }else if (condicionPreguntas==3){
            agregarTexto(preguntas,pregunta__cuatro_apodo);
           
        }else if (condicionPreguntas==4){
            agregarTexto(preguntas,pregunta__cinco);
           
        }else if (condicionPreguntas==0){
            
           
        }else{
                alert(' DESCUBRISTE SU SECRETO FELICIDADES ')
                agregarTexto(emoji,' 😮 ');
                agregarTexto(idResPrincipal,' Maní una vez tire paja  por  maye  y ala vez con keili');
                agregarTexto(idResVidas,'  ');
                agregarTexto(preguntas,'Reinicia la pagina y elige mas participantes ');
    
    
        }
    }
}

function condicionPapo() {

    if (variableGlobal==4){
        if (condicionPreguntas==1) {
    
            agregarTexto(preguntas,pregunta__dos);
            
    
        }else if (condicionPreguntas==2) {
    
            agregarTexto(preguntas,pregunta__tres);
            
    
        }else if (condicionPreguntas==3){
            agregarTexto(preguntas,pregunta__cuatro_apodo);
           
        }else if (condicionPreguntas==4){
            agregarTexto(preguntas,pregunta__cinco);
           
        }else if (condicionPreguntas==0){
            
           
        }else{
                alert(' DESCUBRISTE SU SECRETO FELICIDADES ')
                agregarTexto(emoji,' 😮 ');
                agregarTexto(idResPrincipal,' Me culiaba las gallinas de mi abuela, hasta una gallina que me regaló mi abuela estebena me culiaba en el cuarto cuando quedaba solo ');
                agregarTexto(idResVidas,'  ');
                agregarTexto(preguntas,'Reinicia la pagina y elige mas participantes ');
    
    
        }
    }
}