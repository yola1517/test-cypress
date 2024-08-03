//Programación en JavaScript
//Selectores por elementos divididos por página

class selectores {

   //Página del login
   login = {
     
       "usuario":':nth-child(1) > [width="40"]',
       "clave":':nth-child(2) > [width="40"]',
       "btn_ingresar":'#btnIngresar'
   }
  
   //Página de selección del consorcio
   consorcio = {

    "nro_consorcio" : '#tableData > tbody > tr :nth-child(3) > td.evenselected > p > a',
    "menú_usuarios" : '[style="z-index: 93;"] > [href="#"] > font',
    "submenú_datos_adm" : '#tp_menu > ul > li:nth-child(8) > ul > li:nth-child(6) > font > a'
   }
   
   //Página de los datos de la administración
   datos_administración = {

     "txt_domicilio" : '#domicilio',
     "btn_guardar" : ':nth-child(2) > input',
     "link_cerrar_sesión" : '[align="right"] > :nth-child (1) > a > font'
   }
}

module.exports = new selectores();   //esto significa que este módulo es exportable y hay que llamarlo elementos