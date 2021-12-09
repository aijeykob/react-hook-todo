import React, {useEffect} from 'react';
import Layout from "./components/Layout";
// import {Route, Redirect} from "react-router-dom";
// import Login from "./components/Login/Login";
// import Registration from "./components/Registration/Registration";
// import Home from "./components/Home/Home";
import {connect} from "react-redux";
import './index.css'

const App = (props) => {
    // useEffect(() => {
    //     props.checkToken();
    // }, []);
    return (
        <>
            <Layout/>
            {/*{*/}
            {/*    (props.currentUser) ? <Redirect to='/home'/> : <Redirect to='/registration'/>*/}
            {/*}*/}
            {/*<Route path="/login" render={() => <Login/>}/>*/}
            {/*<Route path="/registration" render={() => <Registration/>}/>*/}
            {/*<Route path="/home" render={() => <Home/>}/>*/}
        </>
    );
};

const mapStateToProps = state => ({
    // currentUser: state.currentUser
});


const mapDispatchToProps = dispatch => ({
    // checkToken: () => dispatch(checkToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)