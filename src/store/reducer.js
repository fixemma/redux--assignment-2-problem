import * as actions from './actions';

const initState = {
    persons: []
}

export default (state = initState, action) => {
    switch(action.type){
        case actions.ADD_PERSON:
            {
                const newPersons = state.persons.concat(action.payload);
                return {...state, persons: newPersons}
            }
        case actions.DEL_PERSON:
            {
                const newPersons = state.persons.filter(el => el.id !== action.payload);
                return {...state, persons: newPersons}
            }
        default:
            return state;
    }
}