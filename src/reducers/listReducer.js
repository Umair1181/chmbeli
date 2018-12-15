
const state={
    count: 0, 
    list:[]
}

function listReducer(mState = {...state}, action){
 
    switch(action.type)
    {
        
        
        default:
            return {...mState};
    }
}

export default listReducer;