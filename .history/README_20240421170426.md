# cypressCamp 

Semana 4

Se realiza simulación de datos con un archivo Mock, en el cual se intercepta el servicio y se rellena con datos Faker en un archivo .JSON desde el cual se lee la información y posteriormente se muestra en reemplazo del servisio anteriormente llamado.

Para ellos se utiliza el comando cy.intercept

- "testIsolation: false"  en cypress.config.js = Quita 

- Faker Plugin: install --save-dev @faker-js/faker

- fakeData.json =  contiene los registros en detalle que se mostrará en reemplazo del servicio,  este archivo se encuentra en la carpeta Cypress/fixture.
