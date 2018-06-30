export const API_VERSION = 'v1';
export const API_HOST = 'http://127.0.0.1:5000';
export const API_URL_BASE = `${API_HOST}/${API_VERSION}`;

/* AUTH */
export const AUTH_ENDPOINT = `${API_URL_BASE}/auth/`;
export const REFRESH_ENDPOINT = `${API_URL_BASE}/auth-refresh/`;

/* MODEL BASED */
export const CREDIT_SUMMARIES_ENDPOINT = `${API_URL_BASE}/credit_summaries/`;
export const POWER_BREAKDOWNS_ENDPOINT = `${API_URL_BASE}/power_breakdowns/`;
export const TRANSACTIONS_ENDPOINT = `${API_URL_BASE}/transactions/`;
