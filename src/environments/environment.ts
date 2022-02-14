// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { Formloco } from '../app/state/apps/apps-state.model'

export const environment = {
  production: false,
  kioske: false,
  designerUrl: Formloco.designerUrl,
  linkedinUrl: Formloco.linkedinUrl,
  githubUrl: Formloco.githubUrl,
  kioskeEmail: Formloco.kioskeEmail,
  kioskePassword: Formloco.kioskePassword,

  apiUrl: 'http://localhost:9001/api/',
  // authUrl: 'http://localhost:9000/auth/',
  // formUrl: 'http://localhost:9002/form/',
  // emailUrl: 'http://localhost:9003/email/',
  // assetUrl: 'http://localhost:9005/asset/',
  // notificationUrl: 'http://localhost:9004/notification/',

  // apiUrl: Formloco.apiUrl,
  authUrl: Formloco.authUrl,
  formUrl: Formloco.formUrl,
  emailUrl: Formloco.emailUrl,
  assetUrl: Formloco.assetUrl,
  notificationUrl: Formloco.notificationUrl,

  signinUrl: 'http://localhost:4200/e93f63d8e62d44da93009229f8a7f890/',
  redirectForgotPasswordUrl: 'http://localhost:4200/O451fd2702f54a00b1007f6e80b32e45/',
  messageUrl: 'http://localhost:4200/message/',
  
  tenant: { email: Formloco.email, 
            tenant_id: Formloco.tenant,
            assetTenantId: 'a0642972-e528-4071-b756-e103e85cd9f4' // fixed-asset app
  },
  logo: Formloco.logo,
  version: 'Development',
  idbName: Formloco.idbName,
  pin: Formloco.pin
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
