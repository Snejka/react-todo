module.exports = {
    setTodos: function(todos){
        if( Object.prototype.toString.call( todos ) === '[object Array]' ){
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

        return (Object.prototype.toString.call( todos ) === '[object Array]' ) ? todos : [];
    }
};
