//const { faker } = require('@faker-js/faker') -- biblioteca, instalacao: npm i @faker-js/faker

const { dataTable } = require("codeceptjs");

Feature('tasks');

//adicionando uma grande quantidade de dados de uma unica vez
const tasksTable = new DataTable(['name'])
tasksTable.add(['Fazer Compras'])
tasksTable.add(['Organizar casa'])
tasksTable.add(['Estudar'])

Data(tasksTable).Scenario('create new task',  ({ I, taskPage, current }) => {

    //const porque e imutavel, exemplo se voce por taskname = New Task (sempre que declarar task sera New Task)
    //let - escopo de bloco, so e lida no bloco que foi definida

    //const taskName = faker.company.name() 
   // const taskName = 'Fazer Compras' 
    const taskName = current.name
    
    I.deleteByHelper(taskName)
    taskPage.create(taskName)
    taskPage.haveTask(taskName)

}).tag('create') //tag criada para usar pra rodar apenas esse scenario

//se vc quiser rodar apenas esse scenario coloque: scenario.only
Scenario('Not create page duplicated @duplicate', ({ I, taskPage }) => { 
    //voce pode colocar o @duplicate (como tag) e rodar via grep
    //npx codeceptjs run --grep '@duplicate'
    const taskDuplicated = {
        name: "Pagar fatura do cartão",
        is_done: false
    }

    I.deleteByHelper(taskDuplicated.name)
    I.postTask(taskDuplicated)
    taskPage.create(taskDuplicated.name)
    taskPage.popUp('Task already exists!')
 

})//.tag('duplicated') 
//tag criada para usar pra rodar apenas esse scenario
//npx codeceptjs run --grep 'duplicate' (roda apenas esse teste)

