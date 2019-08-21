import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import Login, {mapStateToProps,mapDispatchToProps} from './login';
import * as userAction from '../../action/action';


const mockStore = configureMockStore();
const store = mockStore({});

describe('Login Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Login store={store} />);
    });
    
    it('should render', () => {
        expect(wrapper.dive()).toHaveLength(1);
    });

      it('should have empty formData', () => {
        expect(wrapper.dive().state().formData.userName).toBe('');
    });

    
  describe('When submit button is clicked', () => {
    beforeEach(() => {
        wrapper.dive().find('.userName').simulate('change', { target: { value: 'appala_p' } });
        wrapper.dive().find('.password').simulate('change', { target: { value: '12345' } });

      const fakeEvent = { preventDefault: () => console.log('preventDefault') };
      const submit = wrapper.dive().find('button');
      submit.simulate('click', fakeEvent);
    });

    it('should have excepted userName', () => {
      expect(wrapper.dive().state().formData.userName).toEqual('appala_p');
    });

    it('should have excepted Password', () => {
      expect(wrapper.dive().state().formData.password).toEqual('12345');
    });
  });
});