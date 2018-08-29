import { logIn, logOut } from '../../actions/auth';

test('should trigger login', () => {
    const uid = 'abc123';
    const action = logIn(uid);

    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should trigger logout', () => {
    const action = logOut();

    expect(action).toEqual({
        type: 'LOGOUT'
    });
});
