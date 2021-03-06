import React, { Component } from 'react'

import TodoListTemplate from '../Components/to_do_list/to_do_list_template'
import Form from '../Components/to_do_list/form';
import TodoItemList from '../Components/to_do_list/to_do_list_item'
import Palette from '../Components/to_do_list/palette'

const colors = ['black', 'red', 'green', 'blue'];

function create_list() {
    var todos = [];
    for(var i = 0; i < 2500; i++){
        todos.push({id : i, text: `할일 ${i}`, checkec: false});
    }

    return todos;
}

export class to_do_list extends Component {
    constructor(props){
        super(props);

        this.state = {
            input: '',
            todos: create_list(),
            color : 'black',
        }
    }

    handleOnChange = (e) => {
        this.setState({
            input : e.target.value
        })
    }

    handleOnKeyPress = (e) => {
        if(e.key == 'Enter'){
            this.handleOnCreate();
        }
    }

    handleOnCreate = () => {
        const { input, todos, color } = this.state;

        var _id = 0;

        if (todos.length < 1) {
            _id = 0;
        } else {
            var temp = Array.from(todos);
            _id = temp[temp.length - 1].id + 1;
        }

        this.setState({
            input: '',
            todos : todos.concat({
                id : _id,
                text : input,
                checked : false,
                color
            }),
        })
    }

    handleOnToggle = (id) => {
        const { todos } = this.state;

        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];

        const tempTodos = [...todos];

        tempTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: tempTodos
        });
    }

    handleOnRemove = (id) => {
        const { todos } = this.state;

        this.setState({
            todos : todos.filter(todo => todo.id !== id)
        });
    }

    handleSelectColor = (color) => {
        this.setState({
            color
        })
    }

    render() {
        const { input, todos, color } = this.state;
        return (
            <TodoListTemplate 
                form={
                    <Form
                        value = {input}
                        onChange = {this.handleOnChange}
                        onKeyPress = {this.handleOnKeyPress}
                        onCreate = {this.handleOnCreate}
                        color = {color}
                    />
                }
                palette={
                    <Palette colors={colors} selected={color} onSelect={this.handleSelectColor}/>
                }
            >
                <TodoItemList 
                    todos = {todos}
                    onToggle = {this.handleOnToggle}
                    onRemove = {this.handleOnRemove}
                />
            </TodoListTemplate>
        )
    }
}

export default to_do_list
