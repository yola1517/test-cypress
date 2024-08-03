
///<reference types= "Cypress"/>
import selectores, { datos_administración } from '../selectores/misselectores'

describe('Login de Usuario en Emaras', ()=>{

    beforeEach('Conectarse con la web de emaras', ()=>{
        
        //cy.viewport('samsung-s10')           // para especificar la resolución de pantalla en donde se va a probar
        cy.viewport(1000,600)
        cy.visit('/')
      })
  
    it('Escribo mi usuario y clave', ()=>{
        //Utilizando los selectores importados para la autenticación del usuario
        //cy.get(selectores.login.usuario).type('prueba')
        //cy.get(selectores.login.clave).type('12345')
        //cy.get(selectores.login.btn_ingresar).click()

        cy.mi_login()

        cy.hago_click(selectores.consorcio.nro_consorcio,1000)        //Click sobre un edificio en específico
        cy.hago_click(selectores.consorcio.menú_usuarios,1000)        //Selección menú Usuarios
        cy.hago_click(selectores.consorcio.submenú_datos_adm,0)       //Selección sub-menú Datos Administración
        
        cy.fixture('./datos_adm').then((test_adm)=>{
       
           cy.escribir(selectores.datos_administración.txt_domicilio,test_adm.domicilio,0)     //Escribo en domicilio 
           cy.esperar(2000)
        })
        cy.hago_click(selectores.datos_administración.btn_guardar,1000)                    //Guardar el cambio 
        cy.hago_click(selectores.datos_administración.link_cerrar_sesión,1000)             //Cierro la sesión
      })     
  })
  