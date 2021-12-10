import React from 'react';
import {connect} from "react-redux";
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import './index.scss'

// import {NavLink} from "react-router-dom";
// import {logOut} from "../../actions";

const Dashboard = (props) => {

    return (
<div>Dashboard</div>
    );
}

const mapStateToProps = state => ({
    // currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
    // logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
