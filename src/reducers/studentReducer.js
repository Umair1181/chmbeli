import { ADD_ITEM,UPDATE_ITEM,COUNT,COUNT1} from '../actions/types';




const state={
    studentList:[], 
    count: 0,
    num:0
}

function studentReducer(mState ={...state}, action)
{
    switch(action.type)
    {
        case ADD_ITEM:
            mState.studentList.push(action.value);
            mState.count++;
            return {...mState};
        

         case UPDATE_ITEM:
           console.log('Heloo');
            //mState.count++;
            return {...mState};

        case COUNT:
             mState.num++;
             return {...mState};
       
        case COUNT1:    
             mState.num--;
             return {...mState};     


        default:
         return {...mState};
    }
}
export default studentReducer;