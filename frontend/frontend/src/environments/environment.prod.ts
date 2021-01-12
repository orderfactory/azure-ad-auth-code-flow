export const environment = {
  production: true,
  apiBaseUrl: 'https://<backend-api-url>/api/',
  auth: {
    clientId: '<client-id-guid>',
    authority: 'https://login.microsoftonline.com/<authority-id-guid>',
    redirectUri: 'https://<front-end-url>',
    postLogoutRedirectUri: 'https://<front-end-url>',
  },
  resources: {
    backendApi: {
      resourceUri: 'https://<backend-api-url>',
      resourceScope: '/user_impersonation',
    },
    graphApi: {
      resourceUri: 'https://graph.microsoft.com',
      resourceScope: 'user.read',
    },
  },
};
