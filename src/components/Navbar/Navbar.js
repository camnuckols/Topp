import React, { Component } from 'react';
import { Link } from 'react-router';
// import logo from '../../img/appicon.png';

const styles = {
    logo: {
        textTransform: 'uppercase',
        color: '#00d6bb',
        marginLeft: 45,
        display: 'inline-block'
    },
    pic: {
        height: 64
    },
    container: {
        height: 64,
        position: 'absolute',
        width: '100%',
        top: 0
    },
    login: {
        position: 'absolute',
        display: 'inline-block',
        right: 0,
        marginRight: 50,
        marginTop: 35,
        fontSize: 14,
        color: '#00d6bb'
    },
    rules: {
        position: 'absolute',
        display: 'inline-block',
        right: 0,
        fontSize: 14,
        marginRight: 250,
        marginTop: 35,
        color: '#00d6bb'
    }
}

export default class Navbar extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            hover: false
        }
    }

    toggleHover = () => {
        this.setState( { hover: !this.state.hover } );
    };
    render() {
        let hover;
        if ( this.state.hover ) {
            hover = { color: 'black', cursor: 'pointer' };
        }
        return (
            <div style={ styles.container }>
                { /* <img style= { styles.pic } src={ logo } /> */ }
                <a href="http://localhost:3000"><h1 style={ styles.logo }>Topp</h1></a>
                <p 
                    style={ styles.rules }
                >Rules</p>
                <Link to="http://192.168.1.155:8080/auth/twitter"><p 
                    style={ Object.assign( {}, styles.login, hover ) }
                    onClick={ this.props.logIn }
                    onMouseEnter={ this.toggleHover }
                    onMouseLeave={ this.toggleHover }
                >Sign In With Twitter</p></Link>
            </div>
        );
    }
}