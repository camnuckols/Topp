import React, { Component } from 'react';
import Topp from '../Topp/Topp';
import ToppIt from '../ToppIt/ToppIt';

const styles = {
    container: {
        height: '80vh',
        border: '1px solid black',
        width: 500,
        margin: '0 auto',
        marginTop: 64
    },
    date: {
        textAlign: 'center',
        marginTop: 35,
        fontWeight: 100
    }
}

export default class ToppContainer extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            topps: []
        }
    }
    addTopp = ( topp ) => {
        this.setState( { topps: this.state.topps.concat( topp ) } );
        console.log( this.state );
    }
    render() {
        return (
            <div style={ styles.container }>
                <h4 style={ styles.date }>{ Date() }</h4>
                { this.state.topps.map( ( topp, id ) => {
                    return <Topp key={ id } topp={ topp } />;
                } ) }
                <ToppIt addTopp={ this.addTopp.bind( this ) } />
            </div>
        );
    }
}