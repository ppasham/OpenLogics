import { iEnvironment } from '@environment/type';
import { IConfiguration } from '@app/configuration/type';
import { environment as CommonSettings } from '@environment/common';

const ZaikaAnalyticsApi: IConfiguration = {
  name: 'IdnycAnalytics',
  setting: [
    { key: 'AnalyticsApi', value: 'TBD' },
    { key: 'AnalyticsApiToken', value: 'TBD' }
  ]
};
const ZaikaVerifyApi: IConfiguration = {
  name: 'Zaika',
  setting: [
    {
      key: 'VerifyApi',
      value: 'TBD'
    }
  ]
};
const GoogleReCaptchaKey: IConfiguration = {
  name: 'GoogleReCaptcha',
  setting: [
    {
      key: 'GoogleReCaptchaKey',
      value: 'TBD'
    }
  ]
};
export const environment: iEnvironment = {
  name: 'PRODUCTION',
  commonSettings: CommonSettings,
  production: true,
  stage: false,
  test: false,
  development: false,
  settings: [ZaikaVerifyApi, ZaikaAnalyticsApi, GoogleReCaptchaKey]
};
