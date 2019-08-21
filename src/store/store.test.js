import { createStore } from "redux";
import rootReducer from "../reducer/reducer";
import configureStore from './store';
import * as userAction from '../action/action';

describe('When store is given', () => {
const initialState = [];
    it("should handle user details", () => {
        //const store = createStore(rootReducer, initialState);
        const store = configureStore(initialState);
        const user = {
            username: 'dhivakar',
            userType: 'admin1'
        };
        const action = userAction.getloginUser(user);
        store.dispatch(action);
        const actual = store.getState();
        console.log(actual);
        expect(actual.user).toEqual([item]);
    });

});