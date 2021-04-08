// export type IPolaFormularza<T> = {
//   [K in keyof T]?: Extract<K, string>;
// };

// import { Maybe } from "graphql/jsutils/Maybe";
// export type IPolaFormularza<T> = {
//     [K in keyof T as T[K] extends Maybe<number, string, boolean>
//       ? K
//       : never]?: T[K] extends Maybe<number, string, boolean>
//       ? Extract<K, string>
//       : never;
//   };

export type Maybe<T, U = void, W = void, X = void, Y = void, Z = void> =
  | null
  | undefined
  | T
  | U
  | W
  | X
  | Y
  | Z;

export type IPolaFormularza<Type> = {
  [Key in keyof Required<Type> as Type[Key] extends Maybe<
    number,
    string,
    boolean
  >
    ? Key
    : never]: Extract<Key, string>;
};

export type IPolaFormularzaPrefixed<Type, Name> = {
  [Key in keyof Required<Type> as Type[Key] extends Maybe<
    number,
    string,
    boolean
  >
    ? `${Extract<Name, string>}.${Extract<Key, string>}`
    : never]: `${Extract<Name, string>}.${Extract<Key, string>}`;
};

export type IPropertiesFlatter<T, Name = ""> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? IPropertiesFlatter<T[K], `${Extract<Name, string>}${Extract<K, string>}.`>
    : `${Extract<Name, string>}${Extract<K, string>}`;
};

export type IPropertiesFlatterWithPrefix<
  T,
  Name extends string = "",
  Prefix extends string = ""
> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? IPropertiesFlatter<T[K], `${Extract<Name, string>}${Extract<K, string>}.`>
    : `${Prefix}${Extract<Name, string>}${Extract<K, string>}`;
};
