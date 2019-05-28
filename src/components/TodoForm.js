import React, { Component } from 'react';

class TodoForm extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddTodo(this.state);
    }

    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            onChange={this.handleInput}
                            name="title"
                            className="form-control"
                            placeholder="Titulo" />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            onChange={this.handleInput}
                            name="responsible"
                            className="form-control"
                            placeholder="Responsable" />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            onChange={this.handleInput}
                            name="description"
                            className="form-control"
                            placeholder="Descripcion" />
                    </div>
                    <div className="form-group">
                        <select
                            name="priority"
                            onChange={this.handleInput}
                            className="form-control">
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary">
                        Guardar
                        </button>
                </form>
            </div>
        )
    }
}

export default TodoForm;