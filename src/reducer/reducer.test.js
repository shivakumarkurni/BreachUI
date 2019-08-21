import * as reducer from './reducer';

describe('Given Cart Reducer: ', () => {
    describe('When reducer is called', () => {

        describe('When state is empty', () => {
            it('should return "getUserLogin" success new state', () => {
                const user = { username: 'dhivakar', userType: 'admin1' };
                const actionObj = { type: 'LOGIN', user };
                expect(reducer.reducer([], actionObj)).toEqual([user]);
            });
        });

        describe('When state is not empty', () => {
            it('should return "getUserLogin()" success new state', () => {
                const prevUser = { username: 'dhivakar', userType: 'admin1' };
                const user = { username: 'jayanth', userType: 'admin2' };
                const actionObj = { type: 'LOGIN', item };
                expect(reducer.reducer([prevUser], actionObj)).toEqual([prevUser, user]);
            });

        });
    });
});