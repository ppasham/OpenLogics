/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.

import { iEnvironment } from '@environment/type';
import { environment as defaultEnvironment } from '@environment/common';
import { Configuration } from './environments.constants';


export const environment: iEnvironment = {
  name: 'LOCAL',
  production: false,
  stage: false,
  test: false,
  development: true,
  commonSettings: defaultEnvironment,
  settings: [Configuration.zaikaAnalyticsApi, Configuration.zaikaApiVerifyApi, Configuration.GoogleReCaptchaKey]
};
