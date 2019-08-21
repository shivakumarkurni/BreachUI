import * as userActions from './action';

describe('Gievn User Action: ', () => {
    describe('When getloginUser() called and success', () => {
        it('should create action object', () => {
            let user = {
                username: 'dhivakar',
                userType: 'admin1'
            };
            let actionObj = {
                type: 'LOGIN',
                user
            };
            let response = userActions.getloginUser(user);
            expect(response).toEqual(actionObj);
        });
    });
});