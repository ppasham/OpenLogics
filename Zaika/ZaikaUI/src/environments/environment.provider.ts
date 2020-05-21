import {InjectionToken} from '@angular/core';
import {iEnvironment} from '@environment/type';
import {environment} from '@environment';

export const ENV = new InjectionToken<iEnvironment>('env');

export function getEnv(): iEnvironment {
  return environment;
}
