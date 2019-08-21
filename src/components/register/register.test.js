import React from 'react';
import {shallow} from 'enzyme';
import Register from './register';

describe('Register Component',  () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Register />);
      });
      it('should render', () => {
        expect(wrapper).toHaveLength(1);
      });
      it('should render firstName field', () => {
        expect(wrapper.find('.first-name')).toHaveLength(1);
      });
    
      it('should render lastName field', () => {
        expect(wrapper.find('.last-name')).toHaveLength(1);
      });

      it('should render mobile-number field', () => {
        expect(wrapper.find('.mobile-number')).toHaveLength(1);
      });

      it('should render email field', () => {
        expect(wrapper.find('.email')).toHaveLength(1);
      });

      it('should render user-name field', () => {
        expect(wrapper.find('.user-name')).toHaveLength(1);
      });

      it('should render password field', () => {
        expect(wrapper.find('.password')).toHaveLength(1);
      });
      
      it('should render confirm-password field', () => {
        expect(wrapper.find('.confirm-password')).toHaveLength(1);
      });

      it('should render button field', () => {
        expect(wrapper.find('button')).toHaveLength(1);
      });
      
  describe('When onChange event is not triggered on firstName field', () => {
    it('should have empty state', () => {
      expect(wrapper.state().formData.firstName).toEqual('');
    });
  });
  describe('When onChange event is not triggered on lastName field', () => {
    it('should have empty state', () => {
      expect(wrapper.state().formData.lastName).toEqual('');
    });
  });
  describe('When onChange event is not triggered on firstName mobileNumber', () => {
    it('should have empty state', () => {
      expect(wrapper.state().formData.mobileNumber).toEqual('');
    });
  });
  describe('When onChange event is not triggered on firstName email', () => {
    it('should have empty state', () => {
      expect(wrapper.state().formData.email).toEqual('');
    });
  });
  describe('When onChange event is not triggered on userName field', () => {
    it('should have empty state', () => {
      expect(wrapper.state().formData.userName).toEqual('');
    });
  });
  describe('When onChange event is not triggered on password field', () => {
    it('should have empty state', () => {
      expect(wrapper.state().formData.password).toEqual('');
    });
  });
  describe('When onChange event is not triggered on userType field', () => {
    it('should have empty state', () => {
      expect(wrapper.state().formData.userType).toEqual('user');
    });
  });
  
  describe('When onChange event triggered on firstName field', () => {
    beforeEach(() => {
      wrapper.find('input[type="text"]').simulate('change', {target: {name: 'firstName', value: 'Appala'}});
    })
    it('should have update the state', () => {
      expect(wrapper.state().formData.firstName).toEqual('Anil');
    })
  });
  describe('When onChange event triggered on LastName field', () => {
    beforeEach(() => {
      wrapper.find('input[type="text"]').simulate('change', {target: {name: 'lastName', value: 'Pavan'}});
    })
    it('should have update the state', () => {
      expect(wrapper.state().formData.lastName).toEqual('Kumar');
    })
  });
  
  describe('When onChange event triggered on Mobile field', () => {
    beforeEach(() => {
      wrapper.find('input[type="text"]').simulate('change', {target: {name: 'mobileNumber', value: '378568377'}});
    })
    it('should have update the state', () => {
      expect(wrapper.state().formData.mobileNumber).toEqual('9655868486');
    })
  });
  describe('When onChange event triggered on Email field', () => {
    beforeEach(() => {
      wrapper.find('input[type="text"]').simulate('change', {target: {name: 'email', value: 'appala_p@hcl.com'}});
    })
    it('should have update the state', () => {
      expect(wrapper.state().formData.email).toEqual('anil@hcl.com');
    })
  });
  describe('When onChange event triggered on Username field', () => {
    beforeEach(() => {
      wrapper.find('input[type="text"]').simulate('change', {target: {name: 'userName', value: 'appala_p'}});
    })
    it('should have update the state', () => {
      expect(wrapper.state().formData.userName).toEqual('anil_b');
    })
  });
  describe('When onChange event triggered on password field', () => {
    beforeEach(() => {
      wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: '12345'}});
    })
    it('should have update the state', () => {
      expect(wrapper.state().formData.password).toEqual('12345');
    })
  });
  describe('When submit button is clicked', () => {
    beforeEach(() => {

      wrapper.find('input[type="text"]').simulate('change', {target: {name: 'firstName', value: 'Appala'}});
      wrapper.find('input[type="text"]').simulate('change', {target: {name: 'lastName', value: 'Pavan'}});
      wrapper.find('input[type="text"]').simulate('change', {target: {name: 'mobileNumber', value: '378568377'}});
      wrapper.find('input[type="text"]').simulate('change', {target: {name: 'email', value: 'appala_p@hcl.com'}});
      wrapper.find('input[type="text"]').simulate('change', {target: {name: 'userName', value: 'appala_p'}});
      wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: '12345'}});

      const fakeEvent = { preventDefault: () => console.log('preventDefault') };
      const submit = wrapper.find('button');
      submit.simulate('click', fakeEvent);
    });
    
    it('should have excepted FirstName', () => {
      expect(wrapper.state().formData.userName).toEqual('Appala');
    });

    it('should have excepted Lastname', () => {
      expect(wrapper.state().formData.lastName).toEqual('Pavan');
    });
    
    it('should have excepted email', () => {
      expect(wrapper.state().formData.email).toEqual('appala_p@hcl.com');
    });

    it('should have excepted mobileNumber', () => {
      expect(wrapper.state().formData.mobileNumber).toEqual('378568377');
    });

    it('should have excepted userName', () => {
      expect(wrapper.state().formData.userName).toEqual('appala_p');
    });

    it('should have excepted Password', () => {
      expect(wrapper.state().formData.password).toEqual('12345');
    });
  });
})