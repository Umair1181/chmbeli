
import {ADD_ITEM , UPDATE_ITEM , COUNT ,COUNT1 } from './types';

export const addStudent = (std) =>{
    const state ={
        type: ADD_ITEM, 
        value: std
    }
    return state;
}

export const updateStudent = (std1) =>{
    const state ={
        type: UPDATE_ITEM,
        value: std1
    }
    console.log("here");
    return state;
} 

export const countfun = (std1) =>{
    const state ={
        type: COUNT,
        value: std1
    }
    console.log("here");
    return state;
} 

export const countfun1 = (std1) =>{
    const state ={
        type: COUNT1,
        value: std1
    }
    console.log("here");
    return state;
} 