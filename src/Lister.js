import React from 'react';
import { connect } from 'react-redux';
import constants from './store/constants';
import Footer from './Footer';


function Lister (props) {
    return (
        <div>
            <h1>Lister</h1>
            <form onSubmit={ props.submit }>
                <input value={ props.inputText } onChange={ props.inputChange } />
            </form>
            <ul>
                { props.items.map((item, index) => {
                    return <li key={ index } onClick={ () => props.deleteRow(index) } >{ item }</li>
                }) }
            </ul>
            <Footer />
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
            const action = { type: constants.CHANGE_INPUT_TEXT, inputText: evt.target.value };
            dispatch(action);
        },
        submit: (evt) => {
            evt.preventDefault();
            const action = { type: constants.ADD_ITEM };
            dispatch(action);
        },
        deleteRow: (index) => {
            const action = {
                type: constants.DELETE_ITEM,
                index: index
            };
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Lister);