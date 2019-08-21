import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import RaiseIncidents, {mapStateToProps,mapDispatchToProps} from './raiseincidents';
import * as userAction from '../../action/action';


const mockStore = configureMockStore();
const store = mockStore({});

describe('RaiseIncidents Incidents Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<RaiseIncidents store={store} />);
    });
    
    it('should render', () => {
        expect(wrapper).toHaveLength(1);
      });
    
});