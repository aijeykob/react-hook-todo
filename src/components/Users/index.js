import React from 'react';
import {connect} from "react-redux";

import './index.scss'

// import {NavLink} from "react-router-dom";
// import {logOut} from "../../actions";

const Users = (props) => {

    return (
<div>Users</div>
    );
}

const mapStateToProps = state => ({
    // currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
    // logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users)
