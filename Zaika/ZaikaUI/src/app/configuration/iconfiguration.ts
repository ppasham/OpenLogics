
export interface IConfiguration {
  name: string;
  setting: Array<Setting>;
}

class
Setting{
  key: string;
  value: string;
}
