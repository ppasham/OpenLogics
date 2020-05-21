import { IConfiguration } from '@app/configuration/type';

export interface iEnvironment {
    commonSettings: any;
    name: string;
    production: boolean;
    stage: boolean;
    test: boolean;
    development: boolean;
    settings: Array<IConfiguration>;
}
