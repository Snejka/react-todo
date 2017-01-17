module.exports = {
    setTodos: function(todos){
        if( todos.constructor === Array){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },

    getTodos: function(){
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try{
            todos = JSON.parse(stringTodos);
        } catch (e) {
            console.log(e);
        }

        return (todos.constructor === Array) ? todos : [];
    }
};
