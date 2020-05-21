import { IVerifyRequest } from './IVerifyRequest';

export class VerifyRequest implements IVerifyRequest {
  username: string;
  password: string;
  token: string;

}
