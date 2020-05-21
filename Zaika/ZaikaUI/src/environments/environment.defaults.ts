import appinfo from '../../package.json';

export const environment = {
    version: appinfo.version,
    log: true,
    flags: {
       readFromJson: true
    }
 };
