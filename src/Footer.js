import React from 'react';
import { connect } from 'react-redux';

function Footer(props) {
    return (
        <footer>
            Total count: { props.count }
        </footer>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.items.length
    }
}

export default connect(mapStateToProps)(Footer);