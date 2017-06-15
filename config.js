// local backend: http://localhost:8080/roamt/rest/v1

export const BASE_URL = process.env.NODE_ENV === 'production' ?
'http://localhost:9002' :
'http://localhost:9001';
export const GENERAL_SERVER_ERROR_CODE_404 = 'Backend server not available at the moment. Please contact our support line support line: bcs.itp.java@bics.com';
export const GENERAL_SERVER_ERROR_CODE_500 = 'Internal error occurs with backend server. Please contact our support line support line: bcs.itp.java@bics.com';
