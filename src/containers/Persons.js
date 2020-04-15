import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux'
import * as actions from '../store/actions';

class Persons extends Component {
   

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.props.onAddPerson(newPerson);
    }

    personDeletedHandler = (personId) => {
        
        this.props.onDelPerson(personId);
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    persons: state.persons
})

const mapDispatchToProps = (dispatch) => ({
    onAddPerson: (person) => dispatch({type:actions.ADD_PERSON,payload:person}),
    onDelPerson: (personId) => dispatch({type:actions.DEL_PERSON,payload:personId}) 
})

export default connect(mapStateToProps,mapDispatchToProps)(Persons);