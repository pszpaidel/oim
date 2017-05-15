import { fetchCookbook } from '../api/api';

const fetch = callback => fetchCookbook(callback);

export default fetch;
