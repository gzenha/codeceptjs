const { I } = inject();

module.exports = {

  create: function(taskName){
    I.amOnPage('/')
    I.fillField('#newTask', taskName)
    I.click('Create')
  },

  popUp: function(text){
    I.see(text, '.swal2-html-container')
  },

  haveTask: function(taskName){
    I.see(taskName)
  }
}
