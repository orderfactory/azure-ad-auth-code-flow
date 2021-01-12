export const environment = {
  production: true,
  apiBaseUrl: 'http://<front-end-url>/api/',
  auth: {
    clientId: '<client-id-guid>',
    authority: 'https://login.microsoftonline.com/<authority-id-guid>',
    redirectUri: 'http://<front-end-url>',
    postLogoutRedirectUri: 'http://<front-end-url>',
  },
  resources: {
    backendApi: {
      resourceUri: 'https://<backend-api-url>',
      resourceScope: '/user_impersonation',
    },
  },
};
