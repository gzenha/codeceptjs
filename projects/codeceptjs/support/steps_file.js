// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    deleteByHelper: function(taskName) {
    
      this.sendDeleteRequest('/helper/tasks/' + taskName) // e preciso configurar o endpoint 
      this.seeResponseCodeIsSuccessful()
    },

    postTask: function(taskDuplicated){

      this.sendPostRequest('/tasks', taskDuplicated) // isso torna o nosso teste indepedente
      this.seeResponseCodeIsSuccessful()
    }

  });
}
