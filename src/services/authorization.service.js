export class AuthorizationService {
    constructor() { }

    // eslint-disable-next-line no-unused-vars
    signIn(login, password) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(true), 1000);
        });
    }
} 

export const instance = new AuthorizationService();
