import React, {useEffect} from 'react';
import Layout from "./components/Layout";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import Login from "./components/Login";
import {checkToken} from "./actions";
// import Registration from "./components/Registration/Registration";
// import Home from "./components/Home/Home";
import {connect} from "react-redux";
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Users from './components/Users'
import Registration from './components/Registration'

const MainRoutes = (props) => {
    useEffect(() => {
        props.checkToken();
    }, []);
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to='dashboard'/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/dashboard" element={<Layout content={<Dashboard/>}/>} />
            <Route path="/profile" element={<Layout content={<Profile/>}/>} />
            <Route path="/users" element={<Layout content={<Users/>}/>} />
        </Routes>
      </BrowserRouter>
    );
};

const mapStateToProps = state => ({
    currentUser: state.currentUser
});


const mapDispatchToProps = dispatch => ({
    checkToken: () => dispatch(checkToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainRoutes)