import { IConfiguration } from '@app/configuration/type';
import { environment } from '@environment/common';
import appsettings from '../appsettings.json';


export class Configuration {
    static zaikaAnalyticsApi: IConfiguration;
    static zaikaApiVerifyApi: IConfiguration;
    static GoogleReCaptchaKey: IConfiguration;
  /**
   *
   */
  constructor() {
      if (environment.flags.readFromJson) {
        Configuration.zaikaAnalyticsApi = {
            name: 'ZaikaAnalytics',
            // tslint:disable-next-line: max-line-length
            setting: [{ key: 'AnalyticsApi', value: appsettings.Services.zaikaAnalyticsApi }, { key: 'AnalyticsApiToken', value: appsettings.Services['zaikaAnalyticsApi-token'] }]
          };
        Configuration.zaikaApiVerifyApi = {
            name: 'Zaika',
            setting: [
              {
                key: 'VerifyApi',
                value: appsettings.Services['ZaikaApiVerifyApi']
              }
            ]
          };
        Configuration.GoogleReCaptchaKey = {
            name: 'GoogleReCaptcha',
            setting: [
              {
                key: 'GoogleReCaptchaKey',
                value: appsettings.Services['GoogleReCaptcha-key']
              }
            ]
          };
      } else {
    Configuration.zaikaAnalyticsApi = {
        name: 'ZaikaAnalytics',
        setting: [{ key: 'AnalyticsApi', value: '' }, { key: 'AnalyticsApiToken', value: '' }]
      };
    Configuration.zaikaApiVerifyApi = {
        name: 'ZaikaVerify',
        setting: [
          {
            key: 'VerifyApi',
            value: 'https://msdwva-hramip01.csc.nycnet:2021/IdnycGateway/Card/VerifyIdentity'
          }
        ]
      };
    Configuration.GoogleReCaptchaKey = {
        name: 'GoogleReCaptcha',
        setting: [
          {
            key: 'GoogleReCaptchaKey',
            value: '6Lc99cMUAAAAACTmGNFFynC_eZiho05cSQv-_Jpx'
          }
        ]
      };
    }
  }
}
