module.exports = {

    fileterTodos: function(todos, showCompleted, searchText){
        var filteredTodos = todos;
        //console.log(todos, showCompleted, searchText);
        //console.log(filteredTodos);                           //Returns an array with todos

        //filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        //Filter by Search text
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            //console.log(searchText, text);
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        //Filter by non-completed first
        filteredTodos = filteredTodos.sort((a, b) => {
            if(!a.completed && b.completed){
                return -1;
            } else if (a.completed && !b.completed){
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
};
