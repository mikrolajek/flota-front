export interface IOptionSelect {
  label: string;
  value: string | boolean | any;
  key?: any;
}
export default IOptionSelect;

export type IGetOptions<T> = (data: Partial<T>[]) => IOptionSelect[];
