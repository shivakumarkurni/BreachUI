import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import Header, {mapStateToProps,mapDispatchToProps} from './header';
import * as userAction from '../../action/action';


const mockStore = configureMockStore();
const store = mockStore({});

describe('Header Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header store={store} />);
    });
    
});