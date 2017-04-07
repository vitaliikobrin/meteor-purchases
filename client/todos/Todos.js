Meteor.subscribe('todos');

Template.Todos.helpers({
    todos: () => {
        return Todos.find({});
    }
});
