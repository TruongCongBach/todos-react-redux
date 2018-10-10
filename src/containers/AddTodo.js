import React       from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


const mapStateToProps = (store, state) => {
    console.log(store);
    return {
        ...state
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        addTodoComponent: (text) => {
            dispatch(addTodo(text))
        }
    }
};

class AddTodo extends React.Component {

    state = {
        value: ''
    };

    onSubmitAddTodo(e) {
        e.preventDefault();
        this.props.addTodoComponent(this.state.value);
        this.setState({value: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitAddTodo.bind(this)}>
                    <input name='todo' value={this.state.value} onChange={(e) => this.setState({value: e.target.value})}/>
                    <button type="submit">
                        Add to do
                    </button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
