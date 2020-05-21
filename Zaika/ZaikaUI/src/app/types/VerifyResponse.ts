import { IVerifyResponse } from './IVerifyResponse';

export class VerifyResponse implements IVerifyResponse {
    error: any;
    isValid: boolean;
}
