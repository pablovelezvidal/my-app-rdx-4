import React from 'react';
import { connect } from 'react-redux';

function Lister (props) {
    return (
        <div>
            <form onSubmit={ props.submit }>
                <input value={ props.inputText } onChange={ props.inputChange } />
            </form>
            <ul>
                { props.items.map((item, index) => {
                    return <li key={ index }>{ item }</li>
                }) }
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        inputText: state.inputText,
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange: (evt) => {
            const action = { type: 'CHANGE_INPUT_TEXT', inputText: evt.target.value };
            dispatch(action);
        },
        submit: (evt) => {
            evt.preventDefault();
            const action = { type: 'ADD_ITEM' };
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Lister);