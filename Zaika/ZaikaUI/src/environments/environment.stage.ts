/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.
import { iEnvironment } from '@environment/type';
import { IConfiguration } from '@app/configuration/type';
import { environment as defaultEnvironment } from '@environment/common';

const ZaikaAnalyticsApi: IConfiguration = {
  name: 'ZaikaAnalytics',
  setting: [
    { key: 'AnalyticsApi', value: '' },
    { key: 'AnalyticsApiToken', value: '' }
  ]
};
const ZaikaVerifyApi: IConfiguration = {
  name: 'Zaika',
  setting: [
    {
      key: 'VerifyApi',
      value:
        'https://msdwva-hramip01.csc.nycnet:2021/IdnycGateway/Card/VerifyIdentity'
    }
  ]
};
const GoogleReCaptchaKey: IConfiguration = {
  name: 'GoogleReCaptcha',
  setting: [
    {
      key: 'GoogleReCaptchaKey',
      value: '6Lc99cMUAAAAACTmGNFFynC_eZiho05cSQv-_Jpx'
    }
  ]
};
export const environment: iEnvironment = {
  name: 'STAGE',
  production: false,
  stage: true,
  test: false,
  development: false,
  commonSettings: defaultEnvironment,
  settings: [ZaikaVerifyApi, ZaikaAnalyticsApi, GoogleReCaptchaKey]
};
