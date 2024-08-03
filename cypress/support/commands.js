
///<reference types= "Cypress"/>

import selectores, { datos_administración } from '../selectores/misselectores'

Cypress.Commands.add('escribir', (selector,texto,tiempo) => {

     cy.get(selector).clear().type(texto)
     cy.wait(tiempo)

 })

 Cypress.Commands.add('hago_click', (selector,tiempo) => {

    cy.get(selector).click()
    cy.wait(tiempo)

})

Cypress.Commands.add('esperar', (tiempo) => {

    cy.wait(tiempo)

})

Cypress.Commands.add('mi_login'),()=>{

         //Utilizando los datos del fixture login.js, cuando me conecto con el fixture (puede demorar un poquito
         //según la cantidad de datos del fixture) y los recibo en datos_login, después lo puedo utilizar
         cy.fixture('./datos_login').then((test_login)=>{

               //Utilizando los comandos creados en commands.js        
               cy.escribir(selectores.login.usuario,test_login.usuario,2000)      //ingreso usuario
               cy.escribir(selectores.login.clave,test_login.clave,1000)          //ingreso clave
               cy.hago_click(selectores.login.btn_ingresar,5000)                  //click en botón Ingresar
            }) 



}