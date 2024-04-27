import { URLS } from '@/constants/urls';

export const Methods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
};

export class EndpointNames {
    // Auth
    static AUTH = 'auth';
    static LOGOUT = 'logout';

    // Users
    static GET_USERS_LIST = 'users-list';
    static GET_USER = 'get-user';
}

export const ENDPOINTS_MAP = new Map();

// Users
ENDPOINTS_MAP.set(EndpointNames.GET_USERS_LIST, `${URLS.API_URL}/users`);
ENDPOINTS_MAP.set(EndpointNames.GET_USER, `${URLS.API_URL}/users/:id`);
