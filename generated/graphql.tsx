import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  timestamptz: string;
};

/** columns and relationships of "Auto" */
export type Auto = {
  __typename?: 'Auto';
  /** An array relationship */
  Awaria: Array<Awaria>;
  /** An aggregate relationship */
  Awaria_aggregate: Awaria_Aggregate;
  /** An array relationship */
  Grupa_Aut_Klienta: Array<Grupa_Aut_Klienta>;
  /** An aggregate relationship */
  Grupa_Aut_Klienta_aggregate: Grupa_Aut_Klienta_Aggregate;
  /** An array relationship */
  Historia_Uzytkownik_Autos: Array<Historia_Uzytkownik_Auto>;
  /** An aggregate relationship */
  Historia_Uzytkownik_Autos_aggregate: Historia_Uzytkownik_Auto_Aggregate;
  /** An array relationship */
  Karta_Orlens: Array<Karta_Orlen>;
  /** An aggregate relationship */
  Karta_Orlens_aggregate: Karta_Orlen_Aggregate;
  /** An array relationship */
  Leasings: Array<Leasing>;
  /** An aggregate relationship */
  Leasings_aggregate: Leasing_Aggregate;
  /** An array relationship */
  Mandats: Array<Mandat>;
  /** An aggregate relationship */
  Mandats_aggregate: Mandat_Aggregate;
  /** An array relationship */
  Oponas: Array<Opona>;
  /** An aggregate relationship */
  Oponas_aggregate: Opona_Aggregate;
  /** An array relationship */
  Polisas: Array<Polisa>;
  /** An aggregate relationship */
  Polisas_aggregate: Polisa_Aggregate;
  /** An array relationship */
  Przebiegs: Array<Przebieg>;
  /** An aggregate relationship */
  Przebiegs_aggregate: Przebieg_Aggregate;
  /** An array relationship */
  Przeglads: Array<Przeglad>;
  /** An aggregate relationship */
  Przeglads_aggregate: Przeglad_Aggregate;
  gwarancja: Scalars['String'];
  id: Scalars['Int'];
  is_w_uzyciu: Scalars['Boolean'];
  marka: Scalars['String'];
  model: Scalars['String'];
  numer_rejestracyjny: Scalars['String'];
  numer_vin: Scalars['String'];
  paliwo: Scalars['String'];
  rok_produkcji: Scalars['Int'];
  stan_licznika: Scalars['Int'];
  uwagi: Scalars['String'];
};


/** columns and relationships of "Auto" */
export type AutoAwariaArgs = {
  distinct_on?: Maybe<Array<Awaria_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Awaria_Order_By>>;
  where?: Maybe<Awaria_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoAwaria_AggregateArgs = {
  distinct_on?: Maybe<Array<Awaria_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Awaria_Order_By>>;
  where?: Maybe<Awaria_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoGrupa_Aut_KlientaArgs = {
  distinct_on?: Maybe<Array<Grupa_Aut_Klienta_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grupa_Aut_Klienta_Order_By>>;
  where?: Maybe<Grupa_Aut_Klienta_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoGrupa_Aut_Klienta_AggregateArgs = {
  distinct_on?: Maybe<Array<Grupa_Aut_Klienta_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grupa_Aut_Klienta_Order_By>>;
  where?: Maybe<Grupa_Aut_Klienta_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoHistoria_Uzytkownik_AutosArgs = {
  distinct_on?: Maybe<Array<Historia_Uzytkownik_Auto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Historia_Uzytkownik_Auto_Order_By>>;
  where?: Maybe<Historia_Uzytkownik_Auto_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoHistoria_Uzytkownik_Autos_AggregateArgs = {
  distinct_on?: Maybe<Array<Historia_Uzytkownik_Auto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Historia_Uzytkownik_Auto_Order_By>>;
  where?: Maybe<Historia_Uzytkownik_Auto_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoKarta_OrlensArgs = {
  distinct_on?: Maybe<Array<Karta_Orlen_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Karta_Orlen_Order_By>>;
  where?: Maybe<Karta_Orlen_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoKarta_Orlens_AggregateArgs = {
  distinct_on?: Maybe<Array<Karta_Orlen_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Karta_Orlen_Order_By>>;
  where?: Maybe<Karta_Orlen_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoLeasingsArgs = {
  distinct_on?: Maybe<Array<Leasing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Leasing_Order_By>>;
  where?: Maybe<Leasing_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoLeasings_AggregateArgs = {
  distinct_on?: Maybe<Array<Leasing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Leasing_Order_By>>;
  where?: Maybe<Leasing_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoMandatsArgs = {
  distinct_on?: Maybe<Array<Mandat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mandat_Order_By>>;
  where?: Maybe<Mandat_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoMandats_AggregateArgs = {
  distinct_on?: Maybe<Array<Mandat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mandat_Order_By>>;
  where?: Maybe<Mandat_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoOponasArgs = {
  distinct_on?: Maybe<Array<Opona_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Opona_Order_By>>;
  where?: Maybe<Opona_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoOponas_AggregateArgs = {
  distinct_on?: Maybe<Array<Opona_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Opona_Order_By>>;
  where?: Maybe<Opona_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoPolisasArgs = {
  distinct_on?: Maybe<Array<Polisa_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Polisa_Order_By>>;
  where?: Maybe<Polisa_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoPolisas_AggregateArgs = {
  distinct_on?: Maybe<Array<Polisa_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Polisa_Order_By>>;
  where?: Maybe<Polisa_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoPrzebiegsArgs = {
  distinct_on?: Maybe<Array<Przebieg_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przebieg_Order_By>>;
  where?: Maybe<Przebieg_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoPrzebiegs_AggregateArgs = {
  distinct_on?: Maybe<Array<Przebieg_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przebieg_Order_By>>;
  where?: Maybe<Przebieg_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoPrzegladsArgs = {
  distinct_on?: Maybe<Array<Przeglad_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Order_By>>;
  where?: Maybe<Przeglad_Bool_Exp>;
};


/** columns and relationships of "Auto" */
export type AutoPrzeglads_AggregateArgs = {
  distinct_on?: Maybe<Array<Przeglad_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Order_By>>;
  where?: Maybe<Przeglad_Bool_Exp>;
};

/** aggregated selection of "Auto" */
export type Auto_Aggregate = {
  __typename?: 'Auto_aggregate';
  aggregate?: Maybe<Auto_Aggregate_Fields>;
  nodes: Array<Auto>;
};

/** aggregate fields of "Auto" */
export type Auto_Aggregate_Fields = {
  __typename?: 'Auto_aggregate_fields';
  avg?: Maybe<Auto_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auto_Max_Fields>;
  min?: Maybe<Auto_Min_Fields>;
  stddev?: Maybe<Auto_Stddev_Fields>;
  stddev_pop?: Maybe<Auto_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auto_Stddev_Samp_Fields>;
  sum?: Maybe<Auto_Sum_Fields>;
  var_pop?: Maybe<Auto_Var_Pop_Fields>;
  var_samp?: Maybe<Auto_Var_Samp_Fields>;
  variance?: Maybe<Auto_Variance_Fields>;
};


/** aggregate fields of "Auto" */
export type Auto_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auto_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Auto_Avg_Fields = {
  __typename?: 'Auto_avg_fields';
  id?: Maybe<Scalars['Float']>;
  rok_produkcji?: Maybe<Scalars['Float']>;
  stan_licznika?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Auto". All fields are combined with a logical 'AND'. */
export type Auto_Bool_Exp = {
  Awaria?: Maybe<Awaria_Bool_Exp>;
  Grupa_Aut_Klienta?: Maybe<Grupa_Aut_Klienta_Bool_Exp>;
  Historia_Uzytkownik_Autos?: Maybe<Historia_Uzytkownik_Auto_Bool_Exp>;
  Karta_Orlens?: Maybe<Karta_Orlen_Bool_Exp>;
  Leasings?: Maybe<Leasing_Bool_Exp>;
  Mandats?: Maybe<Mandat_Bool_Exp>;
  Oponas?: Maybe<Opona_Bool_Exp>;
  Polisas?: Maybe<Polisa_Bool_Exp>;
  Przebiegs?: Maybe<Przebieg_Bool_Exp>;
  Przeglads?: Maybe<Przeglad_Bool_Exp>;
  _and?: Maybe<Array<Auto_Bool_Exp>>;
  _not?: Maybe<Auto_Bool_Exp>;
  _or?: Maybe<Array<Auto_Bool_Exp>>;
  gwarancja?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_w_uzyciu?: Maybe<Boolean_Comparison_Exp>;
  marka?: Maybe<String_Comparison_Exp>;
  model?: Maybe<String_Comparison_Exp>;
  numer_rejestracyjny?: Maybe<String_Comparison_Exp>;
  numer_vin?: Maybe<String_Comparison_Exp>;
  paliwo?: Maybe<String_Comparison_Exp>;
  rok_produkcji?: Maybe<Int_Comparison_Exp>;
  stan_licznika?: Maybe<Int_Comparison_Exp>;
  uwagi?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Auto" */
export enum Auto_Constraint {
  /** unique or primary key constraint */
  AutoPkey = 'Auto_pkey'
}

/** input type for incrementing numeric columns in table "Auto" */
export type Auto_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  rok_produkcji?: Maybe<Scalars['Int']>;
  stan_licznika?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Auto" */
export type Auto_Insert_Input = {
  Awaria?: Maybe<Awaria_Arr_Rel_Insert_Input>;
  Grupa_Aut_Klienta?: Maybe<Grupa_Aut_Klienta_Arr_Rel_Insert_Input>;
  Historia_Uzytkownik_Autos?: Maybe<Historia_Uzytkownik_Auto_Arr_Rel_Insert_Input>;
  Karta_Orlens?: Maybe<Karta_Orlen_Arr_Rel_Insert_Input>;
  Leasings?: Maybe<Leasing_Arr_Rel_Insert_Input>;
  Mandats?: Maybe<Mandat_Arr_Rel_Insert_Input>;
  Oponas?: Maybe<Opona_Arr_Rel_Insert_Input>;
  Polisas?: Maybe<Polisa_Arr_Rel_Insert_Input>;
  Przebiegs?: Maybe<Przebieg_Arr_Rel_Insert_Input>;
  Przeglads?: Maybe<Przeglad_Arr_Rel_Insert_Input>;
  gwarancja?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_w_uzyciu?: Maybe<Scalars['Boolean']>;
  marka?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  numer_rejestracyjny?: Maybe<Scalars['String']>;
  numer_vin?: Maybe<Scalars['String']>;
  paliwo?: Maybe<Scalars['String']>;
  rok_produkcji?: Maybe<Scalars['Int']>;
  stan_licznika?: Maybe<Scalars['Int']>;
  uwagi?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auto_Max_Fields = {
  __typename?: 'Auto_max_fields';
  gwarancja?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  marka?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  numer_rejestracyjny?: Maybe<Scalars['String']>;
  numer_vin?: Maybe<Scalars['String']>;
  paliwo?: Maybe<Scalars['String']>;
  rok_produkcji?: Maybe<Scalars['Int']>;
  stan_licznika?: Maybe<Scalars['Int']>;
  uwagi?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auto_Min_Fields = {
  __typename?: 'Auto_min_fields';
  gwarancja?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  marka?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  numer_rejestracyjny?: Maybe<Scalars['String']>;
  numer_vin?: Maybe<Scalars['String']>;
  paliwo?: Maybe<Scalars['String']>;
  rok_produkcji?: Maybe<Scalars['Int']>;
  stan_licznika?: Maybe<Scalars['Int']>;
  uwagi?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Auto" */
export type Auto_Mutation_Response = {
  __typename?: 'Auto_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auto>;
};

/** input type for inserting object relation for remote table "Auto" */
export type Auto_Obj_Rel_Insert_Input = {
  data: Auto_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auto_On_Conflict>;
};

/** on conflict condition type for table "Auto" */
export type Auto_On_Conflict = {
  constraint: Auto_Constraint;
  update_columns: Array<Auto_Update_Column>;
  where?: Maybe<Auto_Bool_Exp>;
};

/** Ordering options when selecting data from "Auto". */
export type Auto_Order_By = {
  Awaria_aggregate?: Maybe<Awaria_Aggregate_Order_By>;
  Grupa_Aut_Klienta_aggregate?: Maybe<Grupa_Aut_Klienta_Aggregate_Order_By>;
  Historia_Uzytkownik_Autos_aggregate?: Maybe<Historia_Uzytkownik_Auto_Aggregate_Order_By>;
  Karta_Orlens_aggregate?: Maybe<Karta_Orlen_Aggregate_Order_By>;
  Leasings_aggregate?: Maybe<Leasing_Aggregate_Order_By>;
  Mandats_aggregate?: Maybe<Mandat_Aggregate_Order_By>;
  Oponas_aggregate?: Maybe<Opona_Aggregate_Order_By>;
  Polisas_aggregate?: Maybe<Polisa_Aggregate_Order_By>;
  Przebiegs_aggregate?: Maybe<Przebieg_Aggregate_Order_By>;
  Przeglads_aggregate?: Maybe<Przeglad_Aggregate_Order_By>;
  gwarancja?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_w_uzyciu?: Maybe<Order_By>;
  marka?: Maybe<Order_By>;
  model?: Maybe<Order_By>;
  numer_rejestracyjny?: Maybe<Order_By>;
  numer_vin?: Maybe<Order_By>;
  paliwo?: Maybe<Order_By>;
  rok_produkcji?: Maybe<Order_By>;
  stan_licznika?: Maybe<Order_By>;
  uwagi?: Maybe<Order_By>;
};

/** primary key columns input for table: Auto */
export type Auto_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Auto" */
export enum Auto_Select_Column {
  /** column name */
  Gwarancja = 'gwarancja',
  /** column name */
  Id = 'id',
  /** column name */
  IsWUzyciu = 'is_w_uzyciu',
  /** column name */
  Marka = 'marka',
  /** column name */
  Model = 'model',
  /** column name */
  NumerRejestracyjny = 'numer_rejestracyjny',
  /** column name */
  NumerVin = 'numer_vin',
  /** column name */
  Paliwo = 'paliwo',
  /** column name */
  RokProdukcji = 'rok_produkcji',
  /** column name */
  StanLicznika = 'stan_licznika',
  /** column name */
  Uwagi = 'uwagi'
}

/** input type for updating data in table "Auto" */
export type Auto_Set_Input = {
  gwarancja?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_w_uzyciu?: Maybe<Scalars['Boolean']>;
  marka?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  numer_rejestracyjny?: Maybe<Scalars['String']>;
  numer_vin?: Maybe<Scalars['String']>;
  paliwo?: Maybe<Scalars['String']>;
  rok_produkcji?: Maybe<Scalars['Int']>;
  stan_licznika?: Maybe<Scalars['Int']>;
  uwagi?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Auto_Stddev_Fields = {
  __typename?: 'Auto_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  rok_produkcji?: Maybe<Scalars['Float']>;
  stan_licznika?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auto_Stddev_Pop_Fields = {
  __typename?: 'Auto_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  rok_produkcji?: Maybe<Scalars['Float']>;
  stan_licznika?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auto_Stddev_Samp_Fields = {
  __typename?: 'Auto_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  rok_produkcji?: Maybe<Scalars['Float']>;
  stan_licznika?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Auto_Sum_Fields = {
  __typename?: 'Auto_sum_fields';
  id?: Maybe<Scalars['Int']>;
  rok_produkcji?: Maybe<Scalars['Int']>;
  stan_licznika?: Maybe<Scalars['Int']>;
};

/** update columns of table "Auto" */
export enum Auto_Update_Column {
  /** column name */
  Gwarancja = 'gwarancja',
  /** column name */
  Id = 'id',
  /** column name */
  IsWUzyciu = 'is_w_uzyciu',
  /** column name */
  Marka = 'marka',
  /** column name */
  Model = 'model',
  /** column name */
  NumerRejestracyjny = 'numer_rejestracyjny',
  /** column name */
  NumerVin = 'numer_vin',
  /** column name */
  Paliwo = 'paliwo',
  /** column name */
  RokProdukcji = 'rok_produkcji',
  /** column name */
  StanLicznika = 'stan_licznika',
  /** column name */
  Uwagi = 'uwagi'
}

/** aggregate var_pop on columns */
export type Auto_Var_Pop_Fields = {
  __typename?: 'Auto_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  rok_produkcji?: Maybe<Scalars['Float']>;
  stan_licznika?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auto_Var_Samp_Fields = {
  __typename?: 'Auto_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  rok_produkcji?: Maybe<Scalars['Float']>;
  stan_licznika?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auto_Variance_Fields = {
  __typename?: 'Auto_variance_fields';
  id?: Maybe<Scalars['Float']>;
  rok_produkcji?: Maybe<Scalars['Float']>;
  stan_licznika?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Awaria" */
export type Awaria = {
  __typename?: 'Awaria';
  /** An object relationship */
  Auto: Auto;
  /** An object relationship */
  Status_Awarii: Status_Awarii;
  /** An object relationship */
  Uzytkownik: Uzytkownik;
  adres: Scalars['String'];
  id: Scalars['Int'];
  id_auto: Scalars['Int'];
  id_status_awarii: Scalars['Int'];
  id_uzytkownik: Scalars['Int'];
  opis_szkody: Scalars['String'];
};

/** aggregated selection of "Awaria" */
export type Awaria_Aggregate = {
  __typename?: 'Awaria_aggregate';
  aggregate?: Maybe<Awaria_Aggregate_Fields>;
  nodes: Array<Awaria>;
};

/** aggregate fields of "Awaria" */
export type Awaria_Aggregate_Fields = {
  __typename?: 'Awaria_aggregate_fields';
  avg?: Maybe<Awaria_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Awaria_Max_Fields>;
  min?: Maybe<Awaria_Min_Fields>;
  stddev?: Maybe<Awaria_Stddev_Fields>;
  stddev_pop?: Maybe<Awaria_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Awaria_Stddev_Samp_Fields>;
  sum?: Maybe<Awaria_Sum_Fields>;
  var_pop?: Maybe<Awaria_Var_Pop_Fields>;
  var_samp?: Maybe<Awaria_Var_Samp_Fields>;
  variance?: Maybe<Awaria_Variance_Fields>;
};


/** aggregate fields of "Awaria" */
export type Awaria_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Awaria_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Awaria" */
export type Awaria_Aggregate_Order_By = {
  avg?: Maybe<Awaria_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Awaria_Max_Order_By>;
  min?: Maybe<Awaria_Min_Order_By>;
  stddev?: Maybe<Awaria_Stddev_Order_By>;
  stddev_pop?: Maybe<Awaria_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Awaria_Stddev_Samp_Order_By>;
  sum?: Maybe<Awaria_Sum_Order_By>;
  var_pop?: Maybe<Awaria_Var_Pop_Order_By>;
  var_samp?: Maybe<Awaria_Var_Samp_Order_By>;
  variance?: Maybe<Awaria_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Awaria" */
export type Awaria_Arr_Rel_Insert_Input = {
  data: Array<Awaria_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Awaria_On_Conflict>;
};

/** aggregate avg on columns */
export type Awaria_Avg_Fields = {
  __typename?: 'Awaria_avg_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_status_awarii?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Awaria" */
export type Awaria_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_awarii?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Awaria". All fields are combined with a logical 'AND'. */
export type Awaria_Bool_Exp = {
  Auto?: Maybe<Auto_Bool_Exp>;
  Status_Awarii?: Maybe<Status_Awarii_Bool_Exp>;
  Uzytkownik?: Maybe<Uzytkownik_Bool_Exp>;
  _and?: Maybe<Array<Awaria_Bool_Exp>>;
  _not?: Maybe<Awaria_Bool_Exp>;
  _or?: Maybe<Array<Awaria_Bool_Exp>>;
  adres?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_auto?: Maybe<Int_Comparison_Exp>;
  id_status_awarii?: Maybe<Int_Comparison_Exp>;
  id_uzytkownik?: Maybe<Int_Comparison_Exp>;
  opis_szkody?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Awaria" */
export enum Awaria_Constraint {
  /** unique or primary key constraint */
  AwariaPkey = 'Awaria_pkey'
}

/** input type for incrementing numeric columns in table "Awaria" */
export type Awaria_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_status_awarii?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Awaria" */
export type Awaria_Insert_Input = {
  Auto?: Maybe<Auto_Obj_Rel_Insert_Input>;
  Status_Awarii?: Maybe<Status_Awarii_Obj_Rel_Insert_Input>;
  Uzytkownik?: Maybe<Uzytkownik_Obj_Rel_Insert_Input>;
  adres?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_status_awarii?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
  opis_szkody?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Awaria_Max_Fields = {
  __typename?: 'Awaria_max_fields';
  adres?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_status_awarii?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
  opis_szkody?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Awaria" */
export type Awaria_Max_Order_By = {
  adres?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_awarii?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  opis_szkody?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Awaria_Min_Fields = {
  __typename?: 'Awaria_min_fields';
  adres?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_status_awarii?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
  opis_szkody?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Awaria" */
export type Awaria_Min_Order_By = {
  adres?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_awarii?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  opis_szkody?: Maybe<Order_By>;
};

/** response of any mutation on the table "Awaria" */
export type Awaria_Mutation_Response = {
  __typename?: 'Awaria_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Awaria>;
};

/** on conflict condition type for table "Awaria" */
export type Awaria_On_Conflict = {
  constraint: Awaria_Constraint;
  update_columns: Array<Awaria_Update_Column>;
  where?: Maybe<Awaria_Bool_Exp>;
};

/** Ordering options when selecting data from "Awaria". */
export type Awaria_Order_By = {
  Auto?: Maybe<Auto_Order_By>;
  Status_Awarii?: Maybe<Status_Awarii_Order_By>;
  Uzytkownik?: Maybe<Uzytkownik_Order_By>;
  adres?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_awarii?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  opis_szkody?: Maybe<Order_By>;
};

/** primary key columns input for table: Awaria */
export type Awaria_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Awaria" */
export enum Awaria_Select_Column {
  /** column name */
  Adres = 'adres',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  IdStatusAwarii = 'id_status_awarii',
  /** column name */
  IdUzytkownik = 'id_uzytkownik',
  /** column name */
  OpisSzkody = 'opis_szkody'
}

/** input type for updating data in table "Awaria" */
export type Awaria_Set_Input = {
  adres?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_status_awarii?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
  opis_szkody?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Awaria_Stddev_Fields = {
  __typename?: 'Awaria_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_status_awarii?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Awaria" */
export type Awaria_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_awarii?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Awaria_Stddev_Pop_Fields = {
  __typename?: 'Awaria_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_status_awarii?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Awaria" */
export type Awaria_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_awarii?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Awaria_Stddev_Samp_Fields = {
  __typename?: 'Awaria_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_status_awarii?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Awaria" */
export type Awaria_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_awarii?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Awaria_Sum_Fields = {
  __typename?: 'Awaria_sum_fields';
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_status_awarii?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Awaria" */
export type Awaria_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_awarii?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** update columns of table "Awaria" */
export enum Awaria_Update_Column {
  /** column name */
  Adres = 'adres',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  IdStatusAwarii = 'id_status_awarii',
  /** column name */
  IdUzytkownik = 'id_uzytkownik',
  /** column name */
  OpisSzkody = 'opis_szkody'
}

/** aggregate var_pop on columns */
export type Awaria_Var_Pop_Fields = {
  __typename?: 'Awaria_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_status_awarii?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Awaria" */
export type Awaria_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_awarii?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Awaria_Var_Samp_Fields = {
  __typename?: 'Awaria_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_status_awarii?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Awaria" */
export type Awaria_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_awarii?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Awaria_Variance_Fields = {
  __typename?: 'Awaria_variance_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_status_awarii?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Awaria" */
export type Awaria_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_awarii?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta = {
  __typename?: 'Grupa_Aut_Klienta';
  /** An object relationship */
  Auto: Auto;
  /** An object relationship */
  Klient: Klient;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  id_auto: Scalars['Int'];
  id_klient: Scalars['Int'];
};

/** aggregated selection of "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Aggregate = {
  __typename?: 'Grupa_Aut_Klienta_aggregate';
  aggregate?: Maybe<Grupa_Aut_Klienta_Aggregate_Fields>;
  nodes: Array<Grupa_Aut_Klienta>;
};

/** aggregate fields of "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Aggregate_Fields = {
  __typename?: 'Grupa_Aut_Klienta_aggregate_fields';
  avg?: Maybe<Grupa_Aut_Klienta_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Grupa_Aut_Klienta_Max_Fields>;
  min?: Maybe<Grupa_Aut_Klienta_Min_Fields>;
  stddev?: Maybe<Grupa_Aut_Klienta_Stddev_Fields>;
  stddev_pop?: Maybe<Grupa_Aut_Klienta_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Grupa_Aut_Klienta_Stddev_Samp_Fields>;
  sum?: Maybe<Grupa_Aut_Klienta_Sum_Fields>;
  var_pop?: Maybe<Grupa_Aut_Klienta_Var_Pop_Fields>;
  var_samp?: Maybe<Grupa_Aut_Klienta_Var_Samp_Fields>;
  variance?: Maybe<Grupa_Aut_Klienta_Variance_Fields>;
};


/** aggregate fields of "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Grupa_Aut_Klienta_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Aggregate_Order_By = {
  avg?: Maybe<Grupa_Aut_Klienta_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Grupa_Aut_Klienta_Max_Order_By>;
  min?: Maybe<Grupa_Aut_Klienta_Min_Order_By>;
  stddev?: Maybe<Grupa_Aut_Klienta_Stddev_Order_By>;
  stddev_pop?: Maybe<Grupa_Aut_Klienta_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Grupa_Aut_Klienta_Stddev_Samp_Order_By>;
  sum?: Maybe<Grupa_Aut_Klienta_Sum_Order_By>;
  var_pop?: Maybe<Grupa_Aut_Klienta_Var_Pop_Order_By>;
  var_samp?: Maybe<Grupa_Aut_Klienta_Var_Samp_Order_By>;
  variance?: Maybe<Grupa_Aut_Klienta_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Arr_Rel_Insert_Input = {
  data: Array<Grupa_Aut_Klienta_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Grupa_Aut_Klienta_On_Conflict>;
};

/** aggregate avg on columns */
export type Grupa_Aut_Klienta_Avg_Fields = {
  __typename?: 'Grupa_Aut_Klienta_avg_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_klient?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_klient?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Grupa_Aut_Klienta". All fields are combined with a logical 'AND'. */
export type Grupa_Aut_Klienta_Bool_Exp = {
  Auto?: Maybe<Auto_Bool_Exp>;
  Klient?: Maybe<Klient_Bool_Exp>;
  _and?: Maybe<Array<Grupa_Aut_Klienta_Bool_Exp>>;
  _not?: Maybe<Grupa_Aut_Klienta_Bool_Exp>;
  _or?: Maybe<Array<Grupa_Aut_Klienta_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_auto?: Maybe<Int_Comparison_Exp>;
  id_klient?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Grupa_Aut_Klienta" */
export enum Grupa_Aut_Klienta_Constraint {
  /** unique or primary key constraint */
  GrupaAutKlientaPkey = 'Grupa_Aut_Klienta_pkey'
}

/** input type for incrementing numeric columns in table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_klient?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Insert_Input = {
  Auto?: Maybe<Auto_Obj_Rel_Insert_Input>;
  Klient?: Maybe<Klient_Obj_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_klient?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Grupa_Aut_Klienta_Max_Fields = {
  __typename?: 'Grupa_Aut_Klienta_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_klient?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_klient?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Grupa_Aut_Klienta_Min_Fields = {
  __typename?: 'Grupa_Aut_Klienta_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_klient?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_klient?: Maybe<Order_By>;
};

/** response of any mutation on the table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Mutation_Response = {
  __typename?: 'Grupa_Aut_Klienta_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Grupa_Aut_Klienta>;
};

/** on conflict condition type for table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_On_Conflict = {
  constraint: Grupa_Aut_Klienta_Constraint;
  update_columns: Array<Grupa_Aut_Klienta_Update_Column>;
  where?: Maybe<Grupa_Aut_Klienta_Bool_Exp>;
};

/** Ordering options when selecting data from "Grupa_Aut_Klienta". */
export type Grupa_Aut_Klienta_Order_By = {
  Auto?: Maybe<Auto_Order_By>;
  Klient?: Maybe<Klient_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_klient?: Maybe<Order_By>;
};

/** primary key columns input for table: Grupa_Aut_Klienta */
export type Grupa_Aut_Klienta_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Grupa_Aut_Klienta" */
export enum Grupa_Aut_Klienta_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  IdKlient = 'id_klient'
}

/** input type for updating data in table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_klient?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Grupa_Aut_Klienta_Stddev_Fields = {
  __typename?: 'Grupa_Aut_Klienta_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_klient?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_klient?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Grupa_Aut_Klienta_Stddev_Pop_Fields = {
  __typename?: 'Grupa_Aut_Klienta_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_klient?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_klient?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Grupa_Aut_Klienta_Stddev_Samp_Fields = {
  __typename?: 'Grupa_Aut_Klienta_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_klient?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_klient?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Grupa_Aut_Klienta_Sum_Fields = {
  __typename?: 'Grupa_Aut_Klienta_sum_fields';
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_klient?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_klient?: Maybe<Order_By>;
};

/** update columns of table "Grupa_Aut_Klienta" */
export enum Grupa_Aut_Klienta_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  IdKlient = 'id_klient'
}

/** aggregate var_pop on columns */
export type Grupa_Aut_Klienta_Var_Pop_Fields = {
  __typename?: 'Grupa_Aut_Klienta_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_klient?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_klient?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Grupa_Aut_Klienta_Var_Samp_Fields = {
  __typename?: 'Grupa_Aut_Klienta_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_klient?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_klient?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Grupa_Aut_Klienta_Variance_Fields = {
  __typename?: 'Grupa_Aut_Klienta_variance_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_klient?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Grupa_Aut_Klienta" */
export type Grupa_Aut_Klienta_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_klient?: Maybe<Order_By>;
};

/** columns and relationships of "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto = {
  __typename?: 'Historia_Uzytkownik_Auto';
  /** An object relationship */
  Auto: Auto;
  /** An object relationship */
  Uzytkownik: Uzytkownik;
  data_dodania_wlasciciela: Scalars['date'];
  data_oddania_auta?: Maybe<Scalars['date']>;
  id: Scalars['Int'];
  id_auto: Scalars['Int'];
  id_uzytkownik: Scalars['Int'];
};

/** aggregated selection of "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Aggregate = {
  __typename?: 'Historia_Uzytkownik_Auto_aggregate';
  aggregate?: Maybe<Historia_Uzytkownik_Auto_Aggregate_Fields>;
  nodes: Array<Historia_Uzytkownik_Auto>;
};

/** aggregate fields of "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Aggregate_Fields = {
  __typename?: 'Historia_Uzytkownik_Auto_aggregate_fields';
  avg?: Maybe<Historia_Uzytkownik_Auto_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Historia_Uzytkownik_Auto_Max_Fields>;
  min?: Maybe<Historia_Uzytkownik_Auto_Min_Fields>;
  stddev?: Maybe<Historia_Uzytkownik_Auto_Stddev_Fields>;
  stddev_pop?: Maybe<Historia_Uzytkownik_Auto_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Historia_Uzytkownik_Auto_Stddev_Samp_Fields>;
  sum?: Maybe<Historia_Uzytkownik_Auto_Sum_Fields>;
  var_pop?: Maybe<Historia_Uzytkownik_Auto_Var_Pop_Fields>;
  var_samp?: Maybe<Historia_Uzytkownik_Auto_Var_Samp_Fields>;
  variance?: Maybe<Historia_Uzytkownik_Auto_Variance_Fields>;
};


/** aggregate fields of "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Historia_Uzytkownik_Auto_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Aggregate_Order_By = {
  avg?: Maybe<Historia_Uzytkownik_Auto_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Historia_Uzytkownik_Auto_Max_Order_By>;
  min?: Maybe<Historia_Uzytkownik_Auto_Min_Order_By>;
  stddev?: Maybe<Historia_Uzytkownik_Auto_Stddev_Order_By>;
  stddev_pop?: Maybe<Historia_Uzytkownik_Auto_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Historia_Uzytkownik_Auto_Stddev_Samp_Order_By>;
  sum?: Maybe<Historia_Uzytkownik_Auto_Sum_Order_By>;
  var_pop?: Maybe<Historia_Uzytkownik_Auto_Var_Pop_Order_By>;
  var_samp?: Maybe<Historia_Uzytkownik_Auto_Var_Samp_Order_By>;
  variance?: Maybe<Historia_Uzytkownik_Auto_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Arr_Rel_Insert_Input = {
  data: Array<Historia_Uzytkownik_Auto_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Historia_Uzytkownik_Auto_On_Conflict>;
};

/** aggregate avg on columns */
export type Historia_Uzytkownik_Auto_Avg_Fields = {
  __typename?: 'Historia_Uzytkownik_Auto_avg_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Historia_Uzytkownik_Auto". All fields are combined with a logical 'AND'. */
export type Historia_Uzytkownik_Auto_Bool_Exp = {
  Auto?: Maybe<Auto_Bool_Exp>;
  Uzytkownik?: Maybe<Uzytkownik_Bool_Exp>;
  _and?: Maybe<Array<Historia_Uzytkownik_Auto_Bool_Exp>>;
  _not?: Maybe<Historia_Uzytkownik_Auto_Bool_Exp>;
  _or?: Maybe<Array<Historia_Uzytkownik_Auto_Bool_Exp>>;
  data_dodania_wlasciciela?: Maybe<Date_Comparison_Exp>;
  data_oddania_auta?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_auto?: Maybe<Int_Comparison_Exp>;
  id_uzytkownik?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Historia_Uzytkownik_Auto" */
export enum Historia_Uzytkownik_Auto_Constraint {
  /** unique or primary key constraint */
  HistoriaUzytkownikAutoPkey = 'Historia_Uzytkownik_Auto_pkey'
}

/** input type for incrementing numeric columns in table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Insert_Input = {
  Auto?: Maybe<Auto_Obj_Rel_Insert_Input>;
  Uzytkownik?: Maybe<Uzytkownik_Obj_Rel_Insert_Input>;
  data_dodania_wlasciciela?: Maybe<Scalars['date']>;
  data_oddania_auta?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Historia_Uzytkownik_Auto_Max_Fields = {
  __typename?: 'Historia_Uzytkownik_Auto_max_fields';
  data_dodania_wlasciciela?: Maybe<Scalars['date']>;
  data_oddania_auta?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Max_Order_By = {
  data_dodania_wlasciciela?: Maybe<Order_By>;
  data_oddania_auta?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Historia_Uzytkownik_Auto_Min_Fields = {
  __typename?: 'Historia_Uzytkownik_Auto_min_fields';
  data_dodania_wlasciciela?: Maybe<Scalars['date']>;
  data_oddania_auta?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Min_Order_By = {
  data_dodania_wlasciciela?: Maybe<Order_By>;
  data_oddania_auta?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** response of any mutation on the table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Mutation_Response = {
  __typename?: 'Historia_Uzytkownik_Auto_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Historia_Uzytkownik_Auto>;
};

/** on conflict condition type for table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_On_Conflict = {
  constraint: Historia_Uzytkownik_Auto_Constraint;
  update_columns: Array<Historia_Uzytkownik_Auto_Update_Column>;
  where?: Maybe<Historia_Uzytkownik_Auto_Bool_Exp>;
};

/** Ordering options when selecting data from "Historia_Uzytkownik_Auto". */
export type Historia_Uzytkownik_Auto_Order_By = {
  Auto?: Maybe<Auto_Order_By>;
  Uzytkownik?: Maybe<Uzytkownik_Order_By>;
  data_dodania_wlasciciela?: Maybe<Order_By>;
  data_oddania_auta?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** primary key columns input for table: Historia_Uzytkownik_Auto */
export type Historia_Uzytkownik_Auto_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Historia_Uzytkownik_Auto" */
export enum Historia_Uzytkownik_Auto_Select_Column {
  /** column name */
  DataDodaniaWlasciciela = 'data_dodania_wlasciciela',
  /** column name */
  DataOddaniaAuta = 'data_oddania_auta',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  IdUzytkownik = 'id_uzytkownik'
}

/** input type for updating data in table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Set_Input = {
  data_dodania_wlasciciela?: Maybe<Scalars['date']>;
  data_oddania_auta?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Historia_Uzytkownik_Auto_Stddev_Fields = {
  __typename?: 'Historia_Uzytkownik_Auto_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Historia_Uzytkownik_Auto_Stddev_Pop_Fields = {
  __typename?: 'Historia_Uzytkownik_Auto_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Historia_Uzytkownik_Auto_Stddev_Samp_Fields = {
  __typename?: 'Historia_Uzytkownik_Auto_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Historia_Uzytkownik_Auto_Sum_Fields = {
  __typename?: 'Historia_Uzytkownik_Auto_sum_fields';
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** update columns of table "Historia_Uzytkownik_Auto" */
export enum Historia_Uzytkownik_Auto_Update_Column {
  /** column name */
  DataDodaniaWlasciciela = 'data_dodania_wlasciciela',
  /** column name */
  DataOddaniaAuta = 'data_oddania_auta',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  IdUzytkownik = 'id_uzytkownik'
}

/** aggregate var_pop on columns */
export type Historia_Uzytkownik_Auto_Var_Pop_Fields = {
  __typename?: 'Historia_Uzytkownik_Auto_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Historia_Uzytkownik_Auto_Var_Samp_Fields = {
  __typename?: 'Historia_Uzytkownik_Auto_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Historia_Uzytkownik_Auto_Variance_Fields = {
  __typename?: 'Historia_Uzytkownik_Auto_variance_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Historia_Uzytkownik_Auto" */
export type Historia_Uzytkownik_Auto_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Karta_Orlen" */
export type Karta_Orlen = {
  __typename?: 'Karta_Orlen';
  /** An object relationship */
  Auto: Auto;
  data_waznosci: Scalars['date'];
  id: Scalars['Int'];
  id_auto: Scalars['Int'];
  pin: Scalars['Int'];
};

/** aggregated selection of "Karta_Orlen" */
export type Karta_Orlen_Aggregate = {
  __typename?: 'Karta_Orlen_aggregate';
  aggregate?: Maybe<Karta_Orlen_Aggregate_Fields>;
  nodes: Array<Karta_Orlen>;
};

/** aggregate fields of "Karta_Orlen" */
export type Karta_Orlen_Aggregate_Fields = {
  __typename?: 'Karta_Orlen_aggregate_fields';
  avg?: Maybe<Karta_Orlen_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Karta_Orlen_Max_Fields>;
  min?: Maybe<Karta_Orlen_Min_Fields>;
  stddev?: Maybe<Karta_Orlen_Stddev_Fields>;
  stddev_pop?: Maybe<Karta_Orlen_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Karta_Orlen_Stddev_Samp_Fields>;
  sum?: Maybe<Karta_Orlen_Sum_Fields>;
  var_pop?: Maybe<Karta_Orlen_Var_Pop_Fields>;
  var_samp?: Maybe<Karta_Orlen_Var_Samp_Fields>;
  variance?: Maybe<Karta_Orlen_Variance_Fields>;
};


/** aggregate fields of "Karta_Orlen" */
export type Karta_Orlen_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Karta_Orlen_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Karta_Orlen" */
export type Karta_Orlen_Aggregate_Order_By = {
  avg?: Maybe<Karta_Orlen_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Karta_Orlen_Max_Order_By>;
  min?: Maybe<Karta_Orlen_Min_Order_By>;
  stddev?: Maybe<Karta_Orlen_Stddev_Order_By>;
  stddev_pop?: Maybe<Karta_Orlen_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Karta_Orlen_Stddev_Samp_Order_By>;
  sum?: Maybe<Karta_Orlen_Sum_Order_By>;
  var_pop?: Maybe<Karta_Orlen_Var_Pop_Order_By>;
  var_samp?: Maybe<Karta_Orlen_Var_Samp_Order_By>;
  variance?: Maybe<Karta_Orlen_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Karta_Orlen" */
export type Karta_Orlen_Arr_Rel_Insert_Input = {
  data: Array<Karta_Orlen_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Karta_Orlen_On_Conflict>;
};

/** aggregate avg on columns */
export type Karta_Orlen_Avg_Fields = {
  __typename?: 'Karta_Orlen_avg_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  pin?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Karta_Orlen" */
export type Karta_Orlen_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  pin?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Karta_Orlen". All fields are combined with a logical 'AND'. */
export type Karta_Orlen_Bool_Exp = {
  Auto?: Maybe<Auto_Bool_Exp>;
  _and?: Maybe<Array<Karta_Orlen_Bool_Exp>>;
  _not?: Maybe<Karta_Orlen_Bool_Exp>;
  _or?: Maybe<Array<Karta_Orlen_Bool_Exp>>;
  data_waznosci?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_auto?: Maybe<Int_Comparison_Exp>;
  pin?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Karta_Orlen" */
export enum Karta_Orlen_Constraint {
  /** unique or primary key constraint */
  KartaOrlenPkey = 'Karta_Orlen_pkey'
}

/** input type for incrementing numeric columns in table "Karta_Orlen" */
export type Karta_Orlen_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  pin?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Karta_Orlen" */
export type Karta_Orlen_Insert_Input = {
  Auto?: Maybe<Auto_Obj_Rel_Insert_Input>;
  data_waznosci?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  pin?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Karta_Orlen_Max_Fields = {
  __typename?: 'Karta_Orlen_max_fields';
  data_waznosci?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  pin?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Karta_Orlen" */
export type Karta_Orlen_Max_Order_By = {
  data_waznosci?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  pin?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Karta_Orlen_Min_Fields = {
  __typename?: 'Karta_Orlen_min_fields';
  data_waznosci?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  pin?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Karta_Orlen" */
export type Karta_Orlen_Min_Order_By = {
  data_waznosci?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  pin?: Maybe<Order_By>;
};

/** response of any mutation on the table "Karta_Orlen" */
export type Karta_Orlen_Mutation_Response = {
  __typename?: 'Karta_Orlen_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Karta_Orlen>;
};

/** on conflict condition type for table "Karta_Orlen" */
export type Karta_Orlen_On_Conflict = {
  constraint: Karta_Orlen_Constraint;
  update_columns: Array<Karta_Orlen_Update_Column>;
  where?: Maybe<Karta_Orlen_Bool_Exp>;
};

/** Ordering options when selecting data from "Karta_Orlen". */
export type Karta_Orlen_Order_By = {
  Auto?: Maybe<Auto_Order_By>;
  data_waznosci?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  pin?: Maybe<Order_By>;
};

/** primary key columns input for table: Karta_Orlen */
export type Karta_Orlen_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Karta_Orlen" */
export enum Karta_Orlen_Select_Column {
  /** column name */
  DataWaznosci = 'data_waznosci',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  Pin = 'pin'
}

/** input type for updating data in table "Karta_Orlen" */
export type Karta_Orlen_Set_Input = {
  data_waznosci?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  pin?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Karta_Orlen_Stddev_Fields = {
  __typename?: 'Karta_Orlen_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  pin?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Karta_Orlen" */
export type Karta_Orlen_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  pin?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Karta_Orlen_Stddev_Pop_Fields = {
  __typename?: 'Karta_Orlen_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  pin?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Karta_Orlen" */
export type Karta_Orlen_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  pin?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Karta_Orlen_Stddev_Samp_Fields = {
  __typename?: 'Karta_Orlen_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  pin?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Karta_Orlen" */
export type Karta_Orlen_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  pin?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Karta_Orlen_Sum_Fields = {
  __typename?: 'Karta_Orlen_sum_fields';
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  pin?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Karta_Orlen" */
export type Karta_Orlen_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  pin?: Maybe<Order_By>;
};

/** update columns of table "Karta_Orlen" */
export enum Karta_Orlen_Update_Column {
  /** column name */
  DataWaznosci = 'data_waznosci',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  Pin = 'pin'
}

/** aggregate var_pop on columns */
export type Karta_Orlen_Var_Pop_Fields = {
  __typename?: 'Karta_Orlen_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  pin?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Karta_Orlen" */
export type Karta_Orlen_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  pin?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Karta_Orlen_Var_Samp_Fields = {
  __typename?: 'Karta_Orlen_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  pin?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Karta_Orlen" */
export type Karta_Orlen_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  pin?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Karta_Orlen_Variance_Fields = {
  __typename?: 'Karta_Orlen_variance_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  pin?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Karta_Orlen" */
export type Karta_Orlen_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  pin?: Maybe<Order_By>;
};

/** columns and relationships of "Klient" */
export type Klient = {
  __typename?: 'Klient';
  /** An array relationship */
  Grupa_Aut_Klienta: Array<Grupa_Aut_Klienta>;
  /** An aggregate relationship */
  Grupa_Aut_Klienta_aggregate: Grupa_Aut_Klienta_Aggregate;
  id: Scalars['Int'];
  kontakt: Scalars['String'];
  nazwa: Scalars['String'];
};


/** columns and relationships of "Klient" */
export type KlientGrupa_Aut_KlientaArgs = {
  distinct_on?: Maybe<Array<Grupa_Aut_Klienta_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grupa_Aut_Klienta_Order_By>>;
  where?: Maybe<Grupa_Aut_Klienta_Bool_Exp>;
};


/** columns and relationships of "Klient" */
export type KlientGrupa_Aut_Klienta_AggregateArgs = {
  distinct_on?: Maybe<Array<Grupa_Aut_Klienta_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grupa_Aut_Klienta_Order_By>>;
  where?: Maybe<Grupa_Aut_Klienta_Bool_Exp>;
};

/** aggregated selection of "Klient" */
export type Klient_Aggregate = {
  __typename?: 'Klient_aggregate';
  aggregate?: Maybe<Klient_Aggregate_Fields>;
  nodes: Array<Klient>;
};

/** aggregate fields of "Klient" */
export type Klient_Aggregate_Fields = {
  __typename?: 'Klient_aggregate_fields';
  avg?: Maybe<Klient_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Klient_Max_Fields>;
  min?: Maybe<Klient_Min_Fields>;
  stddev?: Maybe<Klient_Stddev_Fields>;
  stddev_pop?: Maybe<Klient_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Klient_Stddev_Samp_Fields>;
  sum?: Maybe<Klient_Sum_Fields>;
  var_pop?: Maybe<Klient_Var_Pop_Fields>;
  var_samp?: Maybe<Klient_Var_Samp_Fields>;
  variance?: Maybe<Klient_Variance_Fields>;
};


/** aggregate fields of "Klient" */
export type Klient_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Klient_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Klient_Avg_Fields = {
  __typename?: 'Klient_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Klient". All fields are combined with a logical 'AND'. */
export type Klient_Bool_Exp = {
  Grupa_Aut_Klienta?: Maybe<Grupa_Aut_Klienta_Bool_Exp>;
  _and?: Maybe<Array<Klient_Bool_Exp>>;
  _not?: Maybe<Klient_Bool_Exp>;
  _or?: Maybe<Array<Klient_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  kontakt?: Maybe<String_Comparison_Exp>;
  nazwa?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Klient" */
export enum Klient_Constraint {
  /** unique or primary key constraint */
  KlientPkey = 'Klient_pkey'
}

/** input type for incrementing numeric columns in table "Klient" */
export type Klient_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Klient" */
export type Klient_Insert_Input = {
  Grupa_Aut_Klienta?: Maybe<Grupa_Aut_Klienta_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  kontakt?: Maybe<Scalars['String']>;
  nazwa?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Klient_Max_Fields = {
  __typename?: 'Klient_max_fields';
  id?: Maybe<Scalars['Int']>;
  kontakt?: Maybe<Scalars['String']>;
  nazwa?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Klient_Min_Fields = {
  __typename?: 'Klient_min_fields';
  id?: Maybe<Scalars['Int']>;
  kontakt?: Maybe<Scalars['String']>;
  nazwa?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Klient" */
export type Klient_Mutation_Response = {
  __typename?: 'Klient_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Klient>;
};

/** input type for inserting object relation for remote table "Klient" */
export type Klient_Obj_Rel_Insert_Input = {
  data: Klient_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Klient_On_Conflict>;
};

/** on conflict condition type for table "Klient" */
export type Klient_On_Conflict = {
  constraint: Klient_Constraint;
  update_columns: Array<Klient_Update_Column>;
  where?: Maybe<Klient_Bool_Exp>;
};

/** Ordering options when selecting data from "Klient". */
export type Klient_Order_By = {
  Grupa_Aut_Klienta_aggregate?: Maybe<Grupa_Aut_Klienta_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  kontakt?: Maybe<Order_By>;
  nazwa?: Maybe<Order_By>;
};

/** primary key columns input for table: Klient */
export type Klient_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Klient" */
export enum Klient_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Kontakt = 'kontakt',
  /** column name */
  Nazwa = 'nazwa'
}

/** input type for updating data in table "Klient" */
export type Klient_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  kontakt?: Maybe<Scalars['String']>;
  nazwa?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Klient_Stddev_Fields = {
  __typename?: 'Klient_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Klient_Stddev_Pop_Fields = {
  __typename?: 'Klient_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Klient_Stddev_Samp_Fields = {
  __typename?: 'Klient_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Klient_Sum_Fields = {
  __typename?: 'Klient_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "Klient" */
export enum Klient_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Kontakt = 'kontakt',
  /** column name */
  Nazwa = 'nazwa'
}

/** aggregate var_pop on columns */
export type Klient_Var_Pop_Fields = {
  __typename?: 'Klient_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Klient_Var_Samp_Fields = {
  __typename?: 'Klient_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Klient_Variance_Fields = {
  __typename?: 'Klient_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Leasing" */
export type Leasing = {
  __typename?: 'Leasing';
  /** An object relationship */
  Auto: Auto;
  data_zakonczenia: Scalars['date'];
  data_zawarcia_umowy: Scalars['date'];
  id: Scalars['Int'];
  id_auto: Scalars['Int'];
  nr_umowy_leasingu: Scalars['String'];
  okres_trwania_w_miesiacach: Scalars['Int'];
};

/** aggregated selection of "Leasing" */
export type Leasing_Aggregate = {
  __typename?: 'Leasing_aggregate';
  aggregate?: Maybe<Leasing_Aggregate_Fields>;
  nodes: Array<Leasing>;
};

/** aggregate fields of "Leasing" */
export type Leasing_Aggregate_Fields = {
  __typename?: 'Leasing_aggregate_fields';
  avg?: Maybe<Leasing_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Leasing_Max_Fields>;
  min?: Maybe<Leasing_Min_Fields>;
  stddev?: Maybe<Leasing_Stddev_Fields>;
  stddev_pop?: Maybe<Leasing_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Leasing_Stddev_Samp_Fields>;
  sum?: Maybe<Leasing_Sum_Fields>;
  var_pop?: Maybe<Leasing_Var_Pop_Fields>;
  var_samp?: Maybe<Leasing_Var_Samp_Fields>;
  variance?: Maybe<Leasing_Variance_Fields>;
};


/** aggregate fields of "Leasing" */
export type Leasing_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Leasing_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Leasing" */
export type Leasing_Aggregate_Order_By = {
  avg?: Maybe<Leasing_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Leasing_Max_Order_By>;
  min?: Maybe<Leasing_Min_Order_By>;
  stddev?: Maybe<Leasing_Stddev_Order_By>;
  stddev_pop?: Maybe<Leasing_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Leasing_Stddev_Samp_Order_By>;
  sum?: Maybe<Leasing_Sum_Order_By>;
  var_pop?: Maybe<Leasing_Var_Pop_Order_By>;
  var_samp?: Maybe<Leasing_Var_Samp_Order_By>;
  variance?: Maybe<Leasing_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Leasing" */
export type Leasing_Arr_Rel_Insert_Input = {
  data: Array<Leasing_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Leasing_On_Conflict>;
};

/** aggregate avg on columns */
export type Leasing_Avg_Fields = {
  __typename?: 'Leasing_avg_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  okres_trwania_w_miesiacach?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Leasing" */
export type Leasing_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  okres_trwania_w_miesiacach?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Leasing". All fields are combined with a logical 'AND'. */
export type Leasing_Bool_Exp = {
  Auto?: Maybe<Auto_Bool_Exp>;
  _and?: Maybe<Array<Leasing_Bool_Exp>>;
  _not?: Maybe<Leasing_Bool_Exp>;
  _or?: Maybe<Array<Leasing_Bool_Exp>>;
  data_zakonczenia?: Maybe<Date_Comparison_Exp>;
  data_zawarcia_umowy?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_auto?: Maybe<Int_Comparison_Exp>;
  nr_umowy_leasingu?: Maybe<String_Comparison_Exp>;
  okres_trwania_w_miesiacach?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Leasing" */
export enum Leasing_Constraint {
  /** unique or primary key constraint */
  LeasingPkey = 'Leasing_pkey'
}

/** input type for incrementing numeric columns in table "Leasing" */
export type Leasing_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  okres_trwania_w_miesiacach?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Leasing" */
export type Leasing_Insert_Input = {
  Auto?: Maybe<Auto_Obj_Rel_Insert_Input>;
  data_zakonczenia?: Maybe<Scalars['date']>;
  data_zawarcia_umowy?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  nr_umowy_leasingu?: Maybe<Scalars['String']>;
  okres_trwania_w_miesiacach?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Leasing_Max_Fields = {
  __typename?: 'Leasing_max_fields';
  data_zakonczenia?: Maybe<Scalars['date']>;
  data_zawarcia_umowy?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  nr_umowy_leasingu?: Maybe<Scalars['String']>;
  okres_trwania_w_miesiacach?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Leasing" */
export type Leasing_Max_Order_By = {
  data_zakonczenia?: Maybe<Order_By>;
  data_zawarcia_umowy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  nr_umowy_leasingu?: Maybe<Order_By>;
  okres_trwania_w_miesiacach?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Leasing_Min_Fields = {
  __typename?: 'Leasing_min_fields';
  data_zakonczenia?: Maybe<Scalars['date']>;
  data_zawarcia_umowy?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  nr_umowy_leasingu?: Maybe<Scalars['String']>;
  okres_trwania_w_miesiacach?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Leasing" */
export type Leasing_Min_Order_By = {
  data_zakonczenia?: Maybe<Order_By>;
  data_zawarcia_umowy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  nr_umowy_leasingu?: Maybe<Order_By>;
  okres_trwania_w_miesiacach?: Maybe<Order_By>;
};

/** response of any mutation on the table "Leasing" */
export type Leasing_Mutation_Response = {
  __typename?: 'Leasing_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Leasing>;
};

/** on conflict condition type for table "Leasing" */
export type Leasing_On_Conflict = {
  constraint: Leasing_Constraint;
  update_columns: Array<Leasing_Update_Column>;
  where?: Maybe<Leasing_Bool_Exp>;
};

/** Ordering options when selecting data from "Leasing". */
export type Leasing_Order_By = {
  Auto?: Maybe<Auto_Order_By>;
  data_zakonczenia?: Maybe<Order_By>;
  data_zawarcia_umowy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  nr_umowy_leasingu?: Maybe<Order_By>;
  okres_trwania_w_miesiacach?: Maybe<Order_By>;
};

/** primary key columns input for table: Leasing */
export type Leasing_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Leasing" */
export enum Leasing_Select_Column {
  /** column name */
  DataZakonczenia = 'data_zakonczenia',
  /** column name */
  DataZawarciaUmowy = 'data_zawarcia_umowy',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  NrUmowyLeasingu = 'nr_umowy_leasingu',
  /** column name */
  OkresTrwaniaWMiesiacach = 'okres_trwania_w_miesiacach'
}

/** input type for updating data in table "Leasing" */
export type Leasing_Set_Input = {
  data_zakonczenia?: Maybe<Scalars['date']>;
  data_zawarcia_umowy?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  nr_umowy_leasingu?: Maybe<Scalars['String']>;
  okres_trwania_w_miesiacach?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Leasing_Stddev_Fields = {
  __typename?: 'Leasing_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  okres_trwania_w_miesiacach?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Leasing" */
export type Leasing_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  okres_trwania_w_miesiacach?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Leasing_Stddev_Pop_Fields = {
  __typename?: 'Leasing_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  okres_trwania_w_miesiacach?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Leasing" */
export type Leasing_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  okres_trwania_w_miesiacach?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Leasing_Stddev_Samp_Fields = {
  __typename?: 'Leasing_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  okres_trwania_w_miesiacach?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Leasing" */
export type Leasing_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  okres_trwania_w_miesiacach?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Leasing_Sum_Fields = {
  __typename?: 'Leasing_sum_fields';
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  okres_trwania_w_miesiacach?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Leasing" */
export type Leasing_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  okres_trwania_w_miesiacach?: Maybe<Order_By>;
};

/** update columns of table "Leasing" */
export enum Leasing_Update_Column {
  /** column name */
  DataZakonczenia = 'data_zakonczenia',
  /** column name */
  DataZawarciaUmowy = 'data_zawarcia_umowy',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  NrUmowyLeasingu = 'nr_umowy_leasingu',
  /** column name */
  OkresTrwaniaWMiesiacach = 'okres_trwania_w_miesiacach'
}

/** aggregate var_pop on columns */
export type Leasing_Var_Pop_Fields = {
  __typename?: 'Leasing_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  okres_trwania_w_miesiacach?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Leasing" */
export type Leasing_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  okres_trwania_w_miesiacach?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Leasing_Var_Samp_Fields = {
  __typename?: 'Leasing_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  okres_trwania_w_miesiacach?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Leasing" */
export type Leasing_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  okres_trwania_w_miesiacach?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Leasing_Variance_Fields = {
  __typename?: 'Leasing_variance_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  okres_trwania_w_miesiacach?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Leasing" */
export type Leasing_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  okres_trwania_w_miesiacach?: Maybe<Order_By>;
};

/** columns and relationships of "Mandat" */
export type Mandat = {
  __typename?: 'Mandat';
  /** An object relationship */
  Auto: Auto;
  /** An object relationship */
  Uzytkownik: Uzytkownik;
  data_odpowiedzi: Scalars['date'];
  data_otrzymania: Scalars['date'];
  data_pisma: Scalars['date'];
  data_zdarzenia: Scalars['date'];
  dzialanie: Scalars['String'];
  id: Scalars['Int'];
  id_auto: Scalars['Int'];
  id_uzytkownik: Scalars['Int'];
  nadawca: Scalars['String'];
  nr_sprawy: Scalars['String'];
  obciazenie_za_mandat: Scalars['Int'];
  platnosc: Scalars['Int'];
  wysokosc_mandatu: Scalars['Int'];
};

/** aggregated selection of "Mandat" */
export type Mandat_Aggregate = {
  __typename?: 'Mandat_aggregate';
  aggregate?: Maybe<Mandat_Aggregate_Fields>;
  nodes: Array<Mandat>;
};

/** aggregate fields of "Mandat" */
export type Mandat_Aggregate_Fields = {
  __typename?: 'Mandat_aggregate_fields';
  avg?: Maybe<Mandat_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Mandat_Max_Fields>;
  min?: Maybe<Mandat_Min_Fields>;
  stddev?: Maybe<Mandat_Stddev_Fields>;
  stddev_pop?: Maybe<Mandat_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mandat_Stddev_Samp_Fields>;
  sum?: Maybe<Mandat_Sum_Fields>;
  var_pop?: Maybe<Mandat_Var_Pop_Fields>;
  var_samp?: Maybe<Mandat_Var_Samp_Fields>;
  variance?: Maybe<Mandat_Variance_Fields>;
};


/** aggregate fields of "Mandat" */
export type Mandat_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Mandat_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Mandat" */
export type Mandat_Aggregate_Order_By = {
  avg?: Maybe<Mandat_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Mandat_Max_Order_By>;
  min?: Maybe<Mandat_Min_Order_By>;
  stddev?: Maybe<Mandat_Stddev_Order_By>;
  stddev_pop?: Maybe<Mandat_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Mandat_Stddev_Samp_Order_By>;
  sum?: Maybe<Mandat_Sum_Order_By>;
  var_pop?: Maybe<Mandat_Var_Pop_Order_By>;
  var_samp?: Maybe<Mandat_Var_Samp_Order_By>;
  variance?: Maybe<Mandat_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Mandat" */
export type Mandat_Arr_Rel_Insert_Input = {
  data: Array<Mandat_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Mandat_On_Conflict>;
};

/** aggregate avg on columns */
export type Mandat_Avg_Fields = {
  __typename?: 'Mandat_avg_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
  obciazenie_za_mandat?: Maybe<Scalars['Float']>;
  platnosc?: Maybe<Scalars['Float']>;
  wysokosc_mandatu?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Mandat" */
export type Mandat_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  obciazenie_za_mandat?: Maybe<Order_By>;
  platnosc?: Maybe<Order_By>;
  wysokosc_mandatu?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Mandat". All fields are combined with a logical 'AND'. */
export type Mandat_Bool_Exp = {
  Auto?: Maybe<Auto_Bool_Exp>;
  Uzytkownik?: Maybe<Uzytkownik_Bool_Exp>;
  _and?: Maybe<Array<Mandat_Bool_Exp>>;
  _not?: Maybe<Mandat_Bool_Exp>;
  _or?: Maybe<Array<Mandat_Bool_Exp>>;
  data_odpowiedzi?: Maybe<Date_Comparison_Exp>;
  data_otrzymania?: Maybe<Date_Comparison_Exp>;
  data_pisma?: Maybe<Date_Comparison_Exp>;
  data_zdarzenia?: Maybe<Date_Comparison_Exp>;
  dzialanie?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_auto?: Maybe<Int_Comparison_Exp>;
  id_uzytkownik?: Maybe<Int_Comparison_Exp>;
  nadawca?: Maybe<String_Comparison_Exp>;
  nr_sprawy?: Maybe<String_Comparison_Exp>;
  obciazenie_za_mandat?: Maybe<Int_Comparison_Exp>;
  platnosc?: Maybe<Int_Comparison_Exp>;
  wysokosc_mandatu?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Mandat" */
export enum Mandat_Constraint {
  /** unique or primary key constraint */
  MandatPkey = 'Mandat_pkey'
}

/** input type for incrementing numeric columns in table "Mandat" */
export type Mandat_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
  obciazenie_za_mandat?: Maybe<Scalars['Int']>;
  platnosc?: Maybe<Scalars['Int']>;
  wysokosc_mandatu?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Mandat" */
export type Mandat_Insert_Input = {
  Auto?: Maybe<Auto_Obj_Rel_Insert_Input>;
  Uzytkownik?: Maybe<Uzytkownik_Obj_Rel_Insert_Input>;
  data_odpowiedzi?: Maybe<Scalars['date']>;
  data_otrzymania?: Maybe<Scalars['date']>;
  data_pisma?: Maybe<Scalars['date']>;
  data_zdarzenia?: Maybe<Scalars['date']>;
  dzialanie?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
  nadawca?: Maybe<Scalars['String']>;
  nr_sprawy?: Maybe<Scalars['String']>;
  obciazenie_za_mandat?: Maybe<Scalars['Int']>;
  platnosc?: Maybe<Scalars['Int']>;
  wysokosc_mandatu?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Mandat_Max_Fields = {
  __typename?: 'Mandat_max_fields';
  data_odpowiedzi?: Maybe<Scalars['date']>;
  data_otrzymania?: Maybe<Scalars['date']>;
  data_pisma?: Maybe<Scalars['date']>;
  data_zdarzenia?: Maybe<Scalars['date']>;
  dzialanie?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
  nadawca?: Maybe<Scalars['String']>;
  nr_sprawy?: Maybe<Scalars['String']>;
  obciazenie_za_mandat?: Maybe<Scalars['Int']>;
  platnosc?: Maybe<Scalars['Int']>;
  wysokosc_mandatu?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Mandat" */
export type Mandat_Max_Order_By = {
  data_odpowiedzi?: Maybe<Order_By>;
  data_otrzymania?: Maybe<Order_By>;
  data_pisma?: Maybe<Order_By>;
  data_zdarzenia?: Maybe<Order_By>;
  dzialanie?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  nadawca?: Maybe<Order_By>;
  nr_sprawy?: Maybe<Order_By>;
  obciazenie_za_mandat?: Maybe<Order_By>;
  platnosc?: Maybe<Order_By>;
  wysokosc_mandatu?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Mandat_Min_Fields = {
  __typename?: 'Mandat_min_fields';
  data_odpowiedzi?: Maybe<Scalars['date']>;
  data_otrzymania?: Maybe<Scalars['date']>;
  data_pisma?: Maybe<Scalars['date']>;
  data_zdarzenia?: Maybe<Scalars['date']>;
  dzialanie?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
  nadawca?: Maybe<Scalars['String']>;
  nr_sprawy?: Maybe<Scalars['String']>;
  obciazenie_za_mandat?: Maybe<Scalars['Int']>;
  platnosc?: Maybe<Scalars['Int']>;
  wysokosc_mandatu?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Mandat" */
export type Mandat_Min_Order_By = {
  data_odpowiedzi?: Maybe<Order_By>;
  data_otrzymania?: Maybe<Order_By>;
  data_pisma?: Maybe<Order_By>;
  data_zdarzenia?: Maybe<Order_By>;
  dzialanie?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  nadawca?: Maybe<Order_By>;
  nr_sprawy?: Maybe<Order_By>;
  obciazenie_za_mandat?: Maybe<Order_By>;
  platnosc?: Maybe<Order_By>;
  wysokosc_mandatu?: Maybe<Order_By>;
};

/** response of any mutation on the table "Mandat" */
export type Mandat_Mutation_Response = {
  __typename?: 'Mandat_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Mandat>;
};

/** on conflict condition type for table "Mandat" */
export type Mandat_On_Conflict = {
  constraint: Mandat_Constraint;
  update_columns: Array<Mandat_Update_Column>;
  where?: Maybe<Mandat_Bool_Exp>;
};

/** Ordering options when selecting data from "Mandat". */
export type Mandat_Order_By = {
  Auto?: Maybe<Auto_Order_By>;
  Uzytkownik?: Maybe<Uzytkownik_Order_By>;
  data_odpowiedzi?: Maybe<Order_By>;
  data_otrzymania?: Maybe<Order_By>;
  data_pisma?: Maybe<Order_By>;
  data_zdarzenia?: Maybe<Order_By>;
  dzialanie?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  nadawca?: Maybe<Order_By>;
  nr_sprawy?: Maybe<Order_By>;
  obciazenie_za_mandat?: Maybe<Order_By>;
  platnosc?: Maybe<Order_By>;
  wysokosc_mandatu?: Maybe<Order_By>;
};

/** primary key columns input for table: Mandat */
export type Mandat_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Mandat" */
export enum Mandat_Select_Column {
  /** column name */
  DataOdpowiedzi = 'data_odpowiedzi',
  /** column name */
  DataOtrzymania = 'data_otrzymania',
  /** column name */
  DataPisma = 'data_pisma',
  /** column name */
  DataZdarzenia = 'data_zdarzenia',
  /** column name */
  Dzialanie = 'dzialanie',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  IdUzytkownik = 'id_uzytkownik',
  /** column name */
  Nadawca = 'nadawca',
  /** column name */
  NrSprawy = 'nr_sprawy',
  /** column name */
  ObciazenieZaMandat = 'obciazenie_za_mandat',
  /** column name */
  Platnosc = 'platnosc',
  /** column name */
  WysokoscMandatu = 'wysokosc_mandatu'
}

/** input type for updating data in table "Mandat" */
export type Mandat_Set_Input = {
  data_odpowiedzi?: Maybe<Scalars['date']>;
  data_otrzymania?: Maybe<Scalars['date']>;
  data_pisma?: Maybe<Scalars['date']>;
  data_zdarzenia?: Maybe<Scalars['date']>;
  dzialanie?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
  nadawca?: Maybe<Scalars['String']>;
  nr_sprawy?: Maybe<Scalars['String']>;
  obciazenie_za_mandat?: Maybe<Scalars['Int']>;
  platnosc?: Maybe<Scalars['Int']>;
  wysokosc_mandatu?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Mandat_Stddev_Fields = {
  __typename?: 'Mandat_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
  obciazenie_za_mandat?: Maybe<Scalars['Float']>;
  platnosc?: Maybe<Scalars['Float']>;
  wysokosc_mandatu?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Mandat" */
export type Mandat_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  obciazenie_za_mandat?: Maybe<Order_By>;
  platnosc?: Maybe<Order_By>;
  wysokosc_mandatu?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Mandat_Stddev_Pop_Fields = {
  __typename?: 'Mandat_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
  obciazenie_za_mandat?: Maybe<Scalars['Float']>;
  platnosc?: Maybe<Scalars['Float']>;
  wysokosc_mandatu?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Mandat" */
export type Mandat_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  obciazenie_za_mandat?: Maybe<Order_By>;
  platnosc?: Maybe<Order_By>;
  wysokosc_mandatu?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Mandat_Stddev_Samp_Fields = {
  __typename?: 'Mandat_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
  obciazenie_za_mandat?: Maybe<Scalars['Float']>;
  platnosc?: Maybe<Scalars['Float']>;
  wysokosc_mandatu?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Mandat" */
export type Mandat_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  obciazenie_za_mandat?: Maybe<Order_By>;
  platnosc?: Maybe<Order_By>;
  wysokosc_mandatu?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Mandat_Sum_Fields = {
  __typename?: 'Mandat_sum_fields';
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
  obciazenie_za_mandat?: Maybe<Scalars['Int']>;
  platnosc?: Maybe<Scalars['Int']>;
  wysokosc_mandatu?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Mandat" */
export type Mandat_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  obciazenie_za_mandat?: Maybe<Order_By>;
  platnosc?: Maybe<Order_By>;
  wysokosc_mandatu?: Maybe<Order_By>;
};

/** update columns of table "Mandat" */
export enum Mandat_Update_Column {
  /** column name */
  DataOdpowiedzi = 'data_odpowiedzi',
  /** column name */
  DataOtrzymania = 'data_otrzymania',
  /** column name */
  DataPisma = 'data_pisma',
  /** column name */
  DataZdarzenia = 'data_zdarzenia',
  /** column name */
  Dzialanie = 'dzialanie',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  IdUzytkownik = 'id_uzytkownik',
  /** column name */
  Nadawca = 'nadawca',
  /** column name */
  NrSprawy = 'nr_sprawy',
  /** column name */
  ObciazenieZaMandat = 'obciazenie_za_mandat',
  /** column name */
  Platnosc = 'platnosc',
  /** column name */
  WysokoscMandatu = 'wysokosc_mandatu'
}

/** aggregate var_pop on columns */
export type Mandat_Var_Pop_Fields = {
  __typename?: 'Mandat_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
  obciazenie_za_mandat?: Maybe<Scalars['Float']>;
  platnosc?: Maybe<Scalars['Float']>;
  wysokosc_mandatu?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Mandat" */
export type Mandat_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  obciazenie_za_mandat?: Maybe<Order_By>;
  platnosc?: Maybe<Order_By>;
  wysokosc_mandatu?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Mandat_Var_Samp_Fields = {
  __typename?: 'Mandat_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
  obciazenie_za_mandat?: Maybe<Scalars['Float']>;
  platnosc?: Maybe<Scalars['Float']>;
  wysokosc_mandatu?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Mandat" */
export type Mandat_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  obciazenie_za_mandat?: Maybe<Order_By>;
  platnosc?: Maybe<Order_By>;
  wysokosc_mandatu?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Mandat_Variance_Fields = {
  __typename?: 'Mandat_variance_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
  obciazenie_za_mandat?: Maybe<Scalars['Float']>;
  platnosc?: Maybe<Scalars['Float']>;
  wysokosc_mandatu?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Mandat" */
export type Mandat_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  obciazenie_za_mandat?: Maybe<Order_By>;
  platnosc?: Maybe<Order_By>;
  wysokosc_mandatu?: Maybe<Order_By>;
};

/** columns and relationships of "Opona" */
export type Opona = {
  __typename?: 'Opona';
  /** An object relationship */
  Auto: Auto;
  /** An object relationship */
  Typy_Opon: Typy_Opon;
  data_zakupu: Scalars['date'];
  detale: Scalars['String'];
  firma: Scalars['String'];
  id: Scalars['Int'];
  id_auto: Scalars['Int'];
  id_typy_opon: Scalars['Int'];
  koszt: Scalars['Int'];
  rozmiar: Scalars['String'];
};

/** aggregated selection of "Opona" */
export type Opona_Aggregate = {
  __typename?: 'Opona_aggregate';
  aggregate?: Maybe<Opona_Aggregate_Fields>;
  nodes: Array<Opona>;
};

/** aggregate fields of "Opona" */
export type Opona_Aggregate_Fields = {
  __typename?: 'Opona_aggregate_fields';
  avg?: Maybe<Opona_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Opona_Max_Fields>;
  min?: Maybe<Opona_Min_Fields>;
  stddev?: Maybe<Opona_Stddev_Fields>;
  stddev_pop?: Maybe<Opona_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Opona_Stddev_Samp_Fields>;
  sum?: Maybe<Opona_Sum_Fields>;
  var_pop?: Maybe<Opona_Var_Pop_Fields>;
  var_samp?: Maybe<Opona_Var_Samp_Fields>;
  variance?: Maybe<Opona_Variance_Fields>;
};


/** aggregate fields of "Opona" */
export type Opona_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Opona_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Opona" */
export type Opona_Aggregate_Order_By = {
  avg?: Maybe<Opona_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Opona_Max_Order_By>;
  min?: Maybe<Opona_Min_Order_By>;
  stddev?: Maybe<Opona_Stddev_Order_By>;
  stddev_pop?: Maybe<Opona_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Opona_Stddev_Samp_Order_By>;
  sum?: Maybe<Opona_Sum_Order_By>;
  var_pop?: Maybe<Opona_Var_Pop_Order_By>;
  var_samp?: Maybe<Opona_Var_Samp_Order_By>;
  variance?: Maybe<Opona_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Opona" */
export type Opona_Arr_Rel_Insert_Input = {
  data: Array<Opona_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Opona_On_Conflict>;
};

/** aggregate avg on columns */
export type Opona_Avg_Fields = {
  __typename?: 'Opona_avg_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_typy_opon?: Maybe<Scalars['Float']>;
  koszt?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Opona" */
export type Opona_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_typy_opon?: Maybe<Order_By>;
  koszt?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Opona". All fields are combined with a logical 'AND'. */
export type Opona_Bool_Exp = {
  Auto?: Maybe<Auto_Bool_Exp>;
  Typy_Opon?: Maybe<Typy_Opon_Bool_Exp>;
  _and?: Maybe<Array<Opona_Bool_Exp>>;
  _not?: Maybe<Opona_Bool_Exp>;
  _or?: Maybe<Array<Opona_Bool_Exp>>;
  data_zakupu?: Maybe<Date_Comparison_Exp>;
  detale?: Maybe<String_Comparison_Exp>;
  firma?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_auto?: Maybe<Int_Comparison_Exp>;
  id_typy_opon?: Maybe<Int_Comparison_Exp>;
  koszt?: Maybe<Int_Comparison_Exp>;
  rozmiar?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Opona" */
export enum Opona_Constraint {
  /** unique or primary key constraint */
  OponaPkey = 'Opona_pkey'
}

/** input type for incrementing numeric columns in table "Opona" */
export type Opona_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_typy_opon?: Maybe<Scalars['Int']>;
  koszt?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Opona" */
export type Opona_Insert_Input = {
  Auto?: Maybe<Auto_Obj_Rel_Insert_Input>;
  Typy_Opon?: Maybe<Typy_Opon_Obj_Rel_Insert_Input>;
  data_zakupu?: Maybe<Scalars['date']>;
  detale?: Maybe<Scalars['String']>;
  firma?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_typy_opon?: Maybe<Scalars['Int']>;
  koszt?: Maybe<Scalars['Int']>;
  rozmiar?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Opona_Max_Fields = {
  __typename?: 'Opona_max_fields';
  data_zakupu?: Maybe<Scalars['date']>;
  detale?: Maybe<Scalars['String']>;
  firma?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_typy_opon?: Maybe<Scalars['Int']>;
  koszt?: Maybe<Scalars['Int']>;
  rozmiar?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Opona" */
export type Opona_Max_Order_By = {
  data_zakupu?: Maybe<Order_By>;
  detale?: Maybe<Order_By>;
  firma?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_typy_opon?: Maybe<Order_By>;
  koszt?: Maybe<Order_By>;
  rozmiar?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Opona_Min_Fields = {
  __typename?: 'Opona_min_fields';
  data_zakupu?: Maybe<Scalars['date']>;
  detale?: Maybe<Scalars['String']>;
  firma?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_typy_opon?: Maybe<Scalars['Int']>;
  koszt?: Maybe<Scalars['Int']>;
  rozmiar?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Opona" */
export type Opona_Min_Order_By = {
  data_zakupu?: Maybe<Order_By>;
  detale?: Maybe<Order_By>;
  firma?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_typy_opon?: Maybe<Order_By>;
  koszt?: Maybe<Order_By>;
  rozmiar?: Maybe<Order_By>;
};

/** response of any mutation on the table "Opona" */
export type Opona_Mutation_Response = {
  __typename?: 'Opona_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Opona>;
};

/** on conflict condition type for table "Opona" */
export type Opona_On_Conflict = {
  constraint: Opona_Constraint;
  update_columns: Array<Opona_Update_Column>;
  where?: Maybe<Opona_Bool_Exp>;
};

/** Ordering options when selecting data from "Opona". */
export type Opona_Order_By = {
  Auto?: Maybe<Auto_Order_By>;
  Typy_Opon?: Maybe<Typy_Opon_Order_By>;
  data_zakupu?: Maybe<Order_By>;
  detale?: Maybe<Order_By>;
  firma?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_typy_opon?: Maybe<Order_By>;
  koszt?: Maybe<Order_By>;
  rozmiar?: Maybe<Order_By>;
};

/** primary key columns input for table: Opona */
export type Opona_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Opona" */
export enum Opona_Select_Column {
  /** column name */
  DataZakupu = 'data_zakupu',
  /** column name */
  Detale = 'detale',
  /** column name */
  Firma = 'firma',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  IdTypyOpon = 'id_typy_opon',
  /** column name */
  Koszt = 'koszt',
  /** column name */
  Rozmiar = 'rozmiar'
}

/** input type for updating data in table "Opona" */
export type Opona_Set_Input = {
  data_zakupu?: Maybe<Scalars['date']>;
  detale?: Maybe<Scalars['String']>;
  firma?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_typy_opon?: Maybe<Scalars['Int']>;
  koszt?: Maybe<Scalars['Int']>;
  rozmiar?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Opona_Stddev_Fields = {
  __typename?: 'Opona_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_typy_opon?: Maybe<Scalars['Float']>;
  koszt?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Opona" */
export type Opona_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_typy_opon?: Maybe<Order_By>;
  koszt?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Opona_Stddev_Pop_Fields = {
  __typename?: 'Opona_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_typy_opon?: Maybe<Scalars['Float']>;
  koszt?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Opona" */
export type Opona_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_typy_opon?: Maybe<Order_By>;
  koszt?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Opona_Stddev_Samp_Fields = {
  __typename?: 'Opona_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_typy_opon?: Maybe<Scalars['Float']>;
  koszt?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Opona" */
export type Opona_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_typy_opon?: Maybe<Order_By>;
  koszt?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Opona_Sum_Fields = {
  __typename?: 'Opona_sum_fields';
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_typy_opon?: Maybe<Scalars['Int']>;
  koszt?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Opona" */
export type Opona_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_typy_opon?: Maybe<Order_By>;
  koszt?: Maybe<Order_By>;
};

/** update columns of table "Opona" */
export enum Opona_Update_Column {
  /** column name */
  DataZakupu = 'data_zakupu',
  /** column name */
  Detale = 'detale',
  /** column name */
  Firma = 'firma',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  IdTypyOpon = 'id_typy_opon',
  /** column name */
  Koszt = 'koszt',
  /** column name */
  Rozmiar = 'rozmiar'
}

/** aggregate var_pop on columns */
export type Opona_Var_Pop_Fields = {
  __typename?: 'Opona_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_typy_opon?: Maybe<Scalars['Float']>;
  koszt?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Opona" */
export type Opona_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_typy_opon?: Maybe<Order_By>;
  koszt?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Opona_Var_Samp_Fields = {
  __typename?: 'Opona_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_typy_opon?: Maybe<Scalars['Float']>;
  koszt?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Opona" */
export type Opona_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_typy_opon?: Maybe<Order_By>;
  koszt?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Opona_Variance_Fields = {
  __typename?: 'Opona_variance_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_typy_opon?: Maybe<Scalars['Float']>;
  koszt?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Opona" */
export type Opona_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_typy_opon?: Maybe<Order_By>;
  koszt?: Maybe<Order_By>;
};

/** columns and relationships of "Polisa" */
export type Polisa = {
  __typename?: 'Polisa';
  /** An object relationship */
  Auto: Auto;
  ac_oc: Scalars['String'];
  data_rozpoczecia_polisy: Scalars['date'];
  id: Scalars['Int'];
  id_auto: Scalars['Int'];
  nr_polisy: Scalars['String'];
  ubezpieczyciel: Scalars['String'];
};

/** aggregated selection of "Polisa" */
export type Polisa_Aggregate = {
  __typename?: 'Polisa_aggregate';
  aggregate?: Maybe<Polisa_Aggregate_Fields>;
  nodes: Array<Polisa>;
};

/** aggregate fields of "Polisa" */
export type Polisa_Aggregate_Fields = {
  __typename?: 'Polisa_aggregate_fields';
  avg?: Maybe<Polisa_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Polisa_Max_Fields>;
  min?: Maybe<Polisa_Min_Fields>;
  stddev?: Maybe<Polisa_Stddev_Fields>;
  stddev_pop?: Maybe<Polisa_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Polisa_Stddev_Samp_Fields>;
  sum?: Maybe<Polisa_Sum_Fields>;
  var_pop?: Maybe<Polisa_Var_Pop_Fields>;
  var_samp?: Maybe<Polisa_Var_Samp_Fields>;
  variance?: Maybe<Polisa_Variance_Fields>;
};


/** aggregate fields of "Polisa" */
export type Polisa_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Polisa_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Polisa" */
export type Polisa_Aggregate_Order_By = {
  avg?: Maybe<Polisa_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Polisa_Max_Order_By>;
  min?: Maybe<Polisa_Min_Order_By>;
  stddev?: Maybe<Polisa_Stddev_Order_By>;
  stddev_pop?: Maybe<Polisa_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Polisa_Stddev_Samp_Order_By>;
  sum?: Maybe<Polisa_Sum_Order_By>;
  var_pop?: Maybe<Polisa_Var_Pop_Order_By>;
  var_samp?: Maybe<Polisa_Var_Samp_Order_By>;
  variance?: Maybe<Polisa_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Polisa" */
export type Polisa_Arr_Rel_Insert_Input = {
  data: Array<Polisa_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Polisa_On_Conflict>;
};

/** aggregate avg on columns */
export type Polisa_Avg_Fields = {
  __typename?: 'Polisa_avg_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Polisa" */
export type Polisa_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Polisa". All fields are combined with a logical 'AND'. */
export type Polisa_Bool_Exp = {
  Auto?: Maybe<Auto_Bool_Exp>;
  _and?: Maybe<Array<Polisa_Bool_Exp>>;
  _not?: Maybe<Polisa_Bool_Exp>;
  _or?: Maybe<Array<Polisa_Bool_Exp>>;
  ac_oc?: Maybe<String_Comparison_Exp>;
  data_rozpoczecia_polisy?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_auto?: Maybe<Int_Comparison_Exp>;
  nr_polisy?: Maybe<String_Comparison_Exp>;
  ubezpieczyciel?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Polisa" */
export enum Polisa_Constraint {
  /** unique or primary key constraint */
  PolisaPkey = 'Polisa_pkey'
}

/** input type for incrementing numeric columns in table "Polisa" */
export type Polisa_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Polisa" */
export type Polisa_Insert_Input = {
  Auto?: Maybe<Auto_Obj_Rel_Insert_Input>;
  ac_oc?: Maybe<Scalars['String']>;
  data_rozpoczecia_polisy?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  nr_polisy?: Maybe<Scalars['String']>;
  ubezpieczyciel?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Polisa_Max_Fields = {
  __typename?: 'Polisa_max_fields';
  ac_oc?: Maybe<Scalars['String']>;
  data_rozpoczecia_polisy?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  nr_polisy?: Maybe<Scalars['String']>;
  ubezpieczyciel?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Polisa" */
export type Polisa_Max_Order_By = {
  ac_oc?: Maybe<Order_By>;
  data_rozpoczecia_polisy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  nr_polisy?: Maybe<Order_By>;
  ubezpieczyciel?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Polisa_Min_Fields = {
  __typename?: 'Polisa_min_fields';
  ac_oc?: Maybe<Scalars['String']>;
  data_rozpoczecia_polisy?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  nr_polisy?: Maybe<Scalars['String']>;
  ubezpieczyciel?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Polisa" */
export type Polisa_Min_Order_By = {
  ac_oc?: Maybe<Order_By>;
  data_rozpoczecia_polisy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  nr_polisy?: Maybe<Order_By>;
  ubezpieczyciel?: Maybe<Order_By>;
};

/** response of any mutation on the table "Polisa" */
export type Polisa_Mutation_Response = {
  __typename?: 'Polisa_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Polisa>;
};

/** on conflict condition type for table "Polisa" */
export type Polisa_On_Conflict = {
  constraint: Polisa_Constraint;
  update_columns: Array<Polisa_Update_Column>;
  where?: Maybe<Polisa_Bool_Exp>;
};

/** Ordering options when selecting data from "Polisa". */
export type Polisa_Order_By = {
  Auto?: Maybe<Auto_Order_By>;
  ac_oc?: Maybe<Order_By>;
  data_rozpoczecia_polisy?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  nr_polisy?: Maybe<Order_By>;
  ubezpieczyciel?: Maybe<Order_By>;
};

/** primary key columns input for table: Polisa */
export type Polisa_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Polisa" */
export enum Polisa_Select_Column {
  /** column name */
  AcOc = 'ac_oc',
  /** column name */
  DataRozpoczeciaPolisy = 'data_rozpoczecia_polisy',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  NrPolisy = 'nr_polisy',
  /** column name */
  Ubezpieczyciel = 'ubezpieczyciel'
}

/** input type for updating data in table "Polisa" */
export type Polisa_Set_Input = {
  ac_oc?: Maybe<Scalars['String']>;
  data_rozpoczecia_polisy?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  nr_polisy?: Maybe<Scalars['String']>;
  ubezpieczyciel?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Polisa_Stddev_Fields = {
  __typename?: 'Polisa_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Polisa" */
export type Polisa_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Polisa_Stddev_Pop_Fields = {
  __typename?: 'Polisa_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Polisa" */
export type Polisa_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Polisa_Stddev_Samp_Fields = {
  __typename?: 'Polisa_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Polisa" */
export type Polisa_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Polisa_Sum_Fields = {
  __typename?: 'Polisa_sum_fields';
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Polisa" */
export type Polisa_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
};

/** update columns of table "Polisa" */
export enum Polisa_Update_Column {
  /** column name */
  AcOc = 'ac_oc',
  /** column name */
  DataRozpoczeciaPolisy = 'data_rozpoczecia_polisy',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  NrPolisy = 'nr_polisy',
  /** column name */
  Ubezpieczyciel = 'ubezpieczyciel'
}

/** aggregate var_pop on columns */
export type Polisa_Var_Pop_Fields = {
  __typename?: 'Polisa_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Polisa" */
export type Polisa_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Polisa_Var_Samp_Fields = {
  __typename?: 'Polisa_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Polisa" */
export type Polisa_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Polisa_Variance_Fields = {
  __typename?: 'Polisa_variance_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Polisa" */
export type Polisa_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
};

/** columns and relationships of "Przebieg" */
export type Przebieg = {
  __typename?: 'Przebieg';
  /** An object relationship */
  Auto: Auto;
  created_at: Scalars['timestamptz'];
  data_przebiegu: Scalars['date'];
  data_przegladu?: Maybe<Scalars['date']>;
  id: Scalars['Int'];
  id_auto: Scalars['Int'];
  przebieg: Scalars['Int'];
  przebieg_z_poczatku_miesiaca?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "Przebieg" */
export type Przebieg_Aggregate = {
  __typename?: 'Przebieg_aggregate';
  aggregate?: Maybe<Przebieg_Aggregate_Fields>;
  nodes: Array<Przebieg>;
};

/** aggregate fields of "Przebieg" */
export type Przebieg_Aggregate_Fields = {
  __typename?: 'Przebieg_aggregate_fields';
  avg?: Maybe<Przebieg_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Przebieg_Max_Fields>;
  min?: Maybe<Przebieg_Min_Fields>;
  stddev?: Maybe<Przebieg_Stddev_Fields>;
  stddev_pop?: Maybe<Przebieg_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Przebieg_Stddev_Samp_Fields>;
  sum?: Maybe<Przebieg_Sum_Fields>;
  var_pop?: Maybe<Przebieg_Var_Pop_Fields>;
  var_samp?: Maybe<Przebieg_Var_Samp_Fields>;
  variance?: Maybe<Przebieg_Variance_Fields>;
};


/** aggregate fields of "Przebieg" */
export type Przebieg_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Przebieg_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Przebieg" */
export type Przebieg_Aggregate_Order_By = {
  avg?: Maybe<Przebieg_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Przebieg_Max_Order_By>;
  min?: Maybe<Przebieg_Min_Order_By>;
  stddev?: Maybe<Przebieg_Stddev_Order_By>;
  stddev_pop?: Maybe<Przebieg_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Przebieg_Stddev_Samp_Order_By>;
  sum?: Maybe<Przebieg_Sum_Order_By>;
  var_pop?: Maybe<Przebieg_Var_Pop_Order_By>;
  var_samp?: Maybe<Przebieg_Var_Samp_Order_By>;
  variance?: Maybe<Przebieg_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Przebieg" */
export type Przebieg_Arr_Rel_Insert_Input = {
  data: Array<Przebieg_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Przebieg_On_Conflict>;
};

/** aggregate avg on columns */
export type Przebieg_Avg_Fields = {
  __typename?: 'Przebieg_avg_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  przebieg?: Maybe<Scalars['Float']>;
  przebieg_z_poczatku_miesiaca?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Przebieg" */
export type Przebieg_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  przebieg?: Maybe<Order_By>;
  przebieg_z_poczatku_miesiaca?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Przebieg". All fields are combined with a logical 'AND'. */
export type Przebieg_Bool_Exp = {
  Auto?: Maybe<Auto_Bool_Exp>;
  _and?: Maybe<Array<Przebieg_Bool_Exp>>;
  _not?: Maybe<Przebieg_Bool_Exp>;
  _or?: Maybe<Array<Przebieg_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  data_przebiegu?: Maybe<Date_Comparison_Exp>;
  data_przegladu?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_auto?: Maybe<Int_Comparison_Exp>;
  przebieg?: Maybe<Int_Comparison_Exp>;
  przebieg_z_poczatku_miesiaca?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "Przebieg" */
export enum Przebieg_Constraint {
  /** unique or primary key constraint */
  PrzebiegPkey = 'Przebieg_pkey'
}

/** input type for incrementing numeric columns in table "Przebieg" */
export type Przebieg_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  przebieg?: Maybe<Scalars['Int']>;
  przebieg_z_poczatku_miesiaca?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Przebieg" */
export type Przebieg_Insert_Input = {
  Auto?: Maybe<Auto_Obj_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  data_przebiegu?: Maybe<Scalars['date']>;
  data_przegladu?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  przebieg?: Maybe<Scalars['Int']>;
  przebieg_z_poczatku_miesiaca?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Przebieg_Max_Fields = {
  __typename?: 'Przebieg_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  data_przebiegu?: Maybe<Scalars['date']>;
  data_przegladu?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  przebieg?: Maybe<Scalars['Int']>;
  przebieg_z_poczatku_miesiaca?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "Przebieg" */
export type Przebieg_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  data_przebiegu?: Maybe<Order_By>;
  data_przegladu?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  przebieg?: Maybe<Order_By>;
  przebieg_z_poczatku_miesiaca?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Przebieg_Min_Fields = {
  __typename?: 'Przebieg_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  data_przebiegu?: Maybe<Scalars['date']>;
  data_przegladu?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  przebieg?: Maybe<Scalars['Int']>;
  przebieg_z_poczatku_miesiaca?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "Przebieg" */
export type Przebieg_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  data_przebiegu?: Maybe<Order_By>;
  data_przegladu?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  przebieg?: Maybe<Order_By>;
  przebieg_z_poczatku_miesiaca?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "Przebieg" */
export type Przebieg_Mutation_Response = {
  __typename?: 'Przebieg_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Przebieg>;
};

/** on conflict condition type for table "Przebieg" */
export type Przebieg_On_Conflict = {
  constraint: Przebieg_Constraint;
  update_columns: Array<Przebieg_Update_Column>;
  where?: Maybe<Przebieg_Bool_Exp>;
};

/** Ordering options when selecting data from "Przebieg". */
export type Przebieg_Order_By = {
  Auto?: Maybe<Auto_Order_By>;
  created_at?: Maybe<Order_By>;
  data_przebiegu?: Maybe<Order_By>;
  data_przegladu?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  przebieg?: Maybe<Order_By>;
  przebieg_z_poczatku_miesiaca?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: Przebieg */
export type Przebieg_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Przebieg" */
export enum Przebieg_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataPrzebiegu = 'data_przebiegu',
  /** column name */
  DataPrzegladu = 'data_przegladu',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  Przebieg = 'przebieg',
  /** column name */
  PrzebiegZPoczatkuMiesiaca = 'przebieg_z_poczatku_miesiaca',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "Przebieg" */
export type Przebieg_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  data_przebiegu?: Maybe<Scalars['date']>;
  data_przegladu?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  przebieg?: Maybe<Scalars['Int']>;
  przebieg_z_poczatku_miesiaca?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Przebieg_Stddev_Fields = {
  __typename?: 'Przebieg_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  przebieg?: Maybe<Scalars['Float']>;
  przebieg_z_poczatku_miesiaca?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Przebieg" */
export type Przebieg_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  przebieg?: Maybe<Order_By>;
  przebieg_z_poczatku_miesiaca?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Przebieg_Stddev_Pop_Fields = {
  __typename?: 'Przebieg_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  przebieg?: Maybe<Scalars['Float']>;
  przebieg_z_poczatku_miesiaca?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Przebieg" */
export type Przebieg_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  przebieg?: Maybe<Order_By>;
  przebieg_z_poczatku_miesiaca?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Przebieg_Stddev_Samp_Fields = {
  __typename?: 'Przebieg_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  przebieg?: Maybe<Scalars['Float']>;
  przebieg_z_poczatku_miesiaca?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Przebieg" */
export type Przebieg_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  przebieg?: Maybe<Order_By>;
  przebieg_z_poczatku_miesiaca?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Przebieg_Sum_Fields = {
  __typename?: 'Przebieg_sum_fields';
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  przebieg?: Maybe<Scalars['Int']>;
  przebieg_z_poczatku_miesiaca?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Przebieg" */
export type Przebieg_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  przebieg?: Maybe<Order_By>;
  przebieg_z_poczatku_miesiaca?: Maybe<Order_By>;
};

/** update columns of table "Przebieg" */
export enum Przebieg_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataPrzebiegu = 'data_przebiegu',
  /** column name */
  DataPrzegladu = 'data_przegladu',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  Przebieg = 'przebieg',
  /** column name */
  PrzebiegZPoczatkuMiesiaca = 'przebieg_z_poczatku_miesiaca',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Przebieg_Var_Pop_Fields = {
  __typename?: 'Przebieg_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  przebieg?: Maybe<Scalars['Float']>;
  przebieg_z_poczatku_miesiaca?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Przebieg" */
export type Przebieg_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  przebieg?: Maybe<Order_By>;
  przebieg_z_poczatku_miesiaca?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Przebieg_Var_Samp_Fields = {
  __typename?: 'Przebieg_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  przebieg?: Maybe<Scalars['Float']>;
  przebieg_z_poczatku_miesiaca?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Przebieg" */
export type Przebieg_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  przebieg?: Maybe<Order_By>;
  przebieg_z_poczatku_miesiaca?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Przebieg_Variance_Fields = {
  __typename?: 'Przebieg_variance_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  przebieg?: Maybe<Scalars['Float']>;
  przebieg_z_poczatku_miesiaca?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Przebieg" */
export type Przebieg_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  przebieg?: Maybe<Order_By>;
  przebieg_z_poczatku_miesiaca?: Maybe<Order_By>;
};

/** columns and relationships of "Przeglad" */
export type Przeglad = {
  __typename?: 'Przeglad';
  /** An object relationship */
  Auto: Auto;
  /** An object relationship */
  Przeglad_Koszta_Dodatkowe: Przeglad_Koszta_Dodatkowe;
  /** An object relationship */
  Przeglad_OT_Kilometry: Przeglad_Ot_Kilometry;
  data_przegladu: Scalars['date'];
  id: Scalars['Int'];
  id_auto: Scalars['Int'];
  id_przeglad_koszta_dodatkowe: Scalars['Int'];
  id_przeglad_ot_kilometry: Scalars['Int'];
  is_wymiana_rozrzadu: Scalars['Boolean'];
};

/** columns and relationships of "Przeglad_Koszta_Dodatkowe" */
export type Przeglad_Koszta_Dodatkowe = {
  __typename?: 'Przeglad_Koszta_Dodatkowe';
  /** An array relationship */
  Przeglads: Array<Przeglad>;
  /** An aggregate relationship */
  Przeglads_aggregate: Przeglad_Aggregate;
  id: Scalars['Int'];
  koszt_MacPhersona?: Maybe<Scalars['Int']>;
  koszt_hamulce?: Maybe<Scalars['Int']>;
  koszt_klimatyzacja?: Maybe<Scalars['Int']>;
  koszt_rozrzad: Scalars['Int'];
  koszt_sprzeglo?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "Przeglad_Koszta_Dodatkowe" */
export type Przeglad_Koszta_DodatkowePrzegladsArgs = {
  distinct_on?: Maybe<Array<Przeglad_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Order_By>>;
  where?: Maybe<Przeglad_Bool_Exp>;
};


/** columns and relationships of "Przeglad_Koszta_Dodatkowe" */
export type Przeglad_Koszta_DodatkowePrzeglads_AggregateArgs = {
  distinct_on?: Maybe<Array<Przeglad_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Order_By>>;
  where?: Maybe<Przeglad_Bool_Exp>;
};

/** aggregated selection of "Przeglad_Koszta_Dodatkowe" */
export type Przeglad_Koszta_Dodatkowe_Aggregate = {
  __typename?: 'Przeglad_Koszta_Dodatkowe_aggregate';
  aggregate?: Maybe<Przeglad_Koszta_Dodatkowe_Aggregate_Fields>;
  nodes: Array<Przeglad_Koszta_Dodatkowe>;
};

/** aggregate fields of "Przeglad_Koszta_Dodatkowe" */
export type Przeglad_Koszta_Dodatkowe_Aggregate_Fields = {
  __typename?: 'Przeglad_Koszta_Dodatkowe_aggregate_fields';
  avg?: Maybe<Przeglad_Koszta_Dodatkowe_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Przeglad_Koszta_Dodatkowe_Max_Fields>;
  min?: Maybe<Przeglad_Koszta_Dodatkowe_Min_Fields>;
  stddev?: Maybe<Przeglad_Koszta_Dodatkowe_Stddev_Fields>;
  stddev_pop?: Maybe<Przeglad_Koszta_Dodatkowe_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Przeglad_Koszta_Dodatkowe_Stddev_Samp_Fields>;
  sum?: Maybe<Przeglad_Koszta_Dodatkowe_Sum_Fields>;
  var_pop?: Maybe<Przeglad_Koszta_Dodatkowe_Var_Pop_Fields>;
  var_samp?: Maybe<Przeglad_Koszta_Dodatkowe_Var_Samp_Fields>;
  variance?: Maybe<Przeglad_Koszta_Dodatkowe_Variance_Fields>;
};


/** aggregate fields of "Przeglad_Koszta_Dodatkowe" */
export type Przeglad_Koszta_Dodatkowe_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Przeglad_Koszta_Dodatkowe_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Przeglad_Koszta_Dodatkowe_Avg_Fields = {
  __typename?: 'Przeglad_Koszta_Dodatkowe_avg_fields';
  id?: Maybe<Scalars['Float']>;
  koszt_MacPhersona?: Maybe<Scalars['Float']>;
  koszt_hamulce?: Maybe<Scalars['Float']>;
  koszt_klimatyzacja?: Maybe<Scalars['Float']>;
  koszt_rozrzad?: Maybe<Scalars['Float']>;
  koszt_sprzeglo?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Przeglad_Koszta_Dodatkowe". All fields are combined with a logical 'AND'. */
export type Przeglad_Koszta_Dodatkowe_Bool_Exp = {
  Przeglads?: Maybe<Przeglad_Bool_Exp>;
  _and?: Maybe<Array<Przeglad_Koszta_Dodatkowe_Bool_Exp>>;
  _not?: Maybe<Przeglad_Koszta_Dodatkowe_Bool_Exp>;
  _or?: Maybe<Array<Przeglad_Koszta_Dodatkowe_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  koszt_MacPhersona?: Maybe<Int_Comparison_Exp>;
  koszt_hamulce?: Maybe<Int_Comparison_Exp>;
  koszt_klimatyzacja?: Maybe<Int_Comparison_Exp>;
  koszt_rozrzad?: Maybe<Int_Comparison_Exp>;
  koszt_sprzeglo?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Przeglad_Koszta_Dodatkowe" */
export enum Przeglad_Koszta_Dodatkowe_Constraint {
  /** unique or primary key constraint */
  PrzegladKosztaDodatkowePkey = 'Przeglad_Koszta_Dodatkowe_pkey'
}

/** input type for incrementing numeric columns in table "Przeglad_Koszta_Dodatkowe" */
export type Przeglad_Koszta_Dodatkowe_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  koszt_MacPhersona?: Maybe<Scalars['Int']>;
  koszt_hamulce?: Maybe<Scalars['Int']>;
  koszt_klimatyzacja?: Maybe<Scalars['Int']>;
  koszt_rozrzad?: Maybe<Scalars['Int']>;
  koszt_sprzeglo?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Przeglad_Koszta_Dodatkowe" */
export type Przeglad_Koszta_Dodatkowe_Insert_Input = {
  Przeglads?: Maybe<Przeglad_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  koszt_MacPhersona?: Maybe<Scalars['Int']>;
  koszt_hamulce?: Maybe<Scalars['Int']>;
  koszt_klimatyzacja?: Maybe<Scalars['Int']>;
  koszt_rozrzad?: Maybe<Scalars['Int']>;
  koszt_sprzeglo?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Przeglad_Koszta_Dodatkowe_Max_Fields = {
  __typename?: 'Przeglad_Koszta_Dodatkowe_max_fields';
  id?: Maybe<Scalars['Int']>;
  koszt_MacPhersona?: Maybe<Scalars['Int']>;
  koszt_hamulce?: Maybe<Scalars['Int']>;
  koszt_klimatyzacja?: Maybe<Scalars['Int']>;
  koszt_rozrzad?: Maybe<Scalars['Int']>;
  koszt_sprzeglo?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Przeglad_Koszta_Dodatkowe_Min_Fields = {
  __typename?: 'Przeglad_Koszta_Dodatkowe_min_fields';
  id?: Maybe<Scalars['Int']>;
  koszt_MacPhersona?: Maybe<Scalars['Int']>;
  koszt_hamulce?: Maybe<Scalars['Int']>;
  koszt_klimatyzacja?: Maybe<Scalars['Int']>;
  koszt_rozrzad?: Maybe<Scalars['Int']>;
  koszt_sprzeglo?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "Przeglad_Koszta_Dodatkowe" */
export type Przeglad_Koszta_Dodatkowe_Mutation_Response = {
  __typename?: 'Przeglad_Koszta_Dodatkowe_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Przeglad_Koszta_Dodatkowe>;
};

/** input type for inserting object relation for remote table "Przeglad_Koszta_Dodatkowe" */
export type Przeglad_Koszta_Dodatkowe_Obj_Rel_Insert_Input = {
  data: Przeglad_Koszta_Dodatkowe_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Przeglad_Koszta_Dodatkowe_On_Conflict>;
};

/** on conflict condition type for table "Przeglad_Koszta_Dodatkowe" */
export type Przeglad_Koszta_Dodatkowe_On_Conflict = {
  constraint: Przeglad_Koszta_Dodatkowe_Constraint;
  update_columns: Array<Przeglad_Koszta_Dodatkowe_Update_Column>;
  where?: Maybe<Przeglad_Koszta_Dodatkowe_Bool_Exp>;
};

/** Ordering options when selecting data from "Przeglad_Koszta_Dodatkowe". */
export type Przeglad_Koszta_Dodatkowe_Order_By = {
  Przeglads_aggregate?: Maybe<Przeglad_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  koszt_MacPhersona?: Maybe<Order_By>;
  koszt_hamulce?: Maybe<Order_By>;
  koszt_klimatyzacja?: Maybe<Order_By>;
  koszt_rozrzad?: Maybe<Order_By>;
  koszt_sprzeglo?: Maybe<Order_By>;
};

/** primary key columns input for table: Przeglad_Koszta_Dodatkowe */
export type Przeglad_Koszta_Dodatkowe_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Przeglad_Koszta_Dodatkowe" */
export enum Przeglad_Koszta_Dodatkowe_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  KosztMacPhersona = 'koszt_MacPhersona',
  /** column name */
  KosztHamulce = 'koszt_hamulce',
  /** column name */
  KosztKlimatyzacja = 'koszt_klimatyzacja',
  /** column name */
  KosztRozrzad = 'koszt_rozrzad',
  /** column name */
  KosztSprzeglo = 'koszt_sprzeglo'
}

/** input type for updating data in table "Przeglad_Koszta_Dodatkowe" */
export type Przeglad_Koszta_Dodatkowe_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  koszt_MacPhersona?: Maybe<Scalars['Int']>;
  koszt_hamulce?: Maybe<Scalars['Int']>;
  koszt_klimatyzacja?: Maybe<Scalars['Int']>;
  koszt_rozrzad?: Maybe<Scalars['Int']>;
  koszt_sprzeglo?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Przeglad_Koszta_Dodatkowe_Stddev_Fields = {
  __typename?: 'Przeglad_Koszta_Dodatkowe_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  koszt_MacPhersona?: Maybe<Scalars['Float']>;
  koszt_hamulce?: Maybe<Scalars['Float']>;
  koszt_klimatyzacja?: Maybe<Scalars['Float']>;
  koszt_rozrzad?: Maybe<Scalars['Float']>;
  koszt_sprzeglo?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Przeglad_Koszta_Dodatkowe_Stddev_Pop_Fields = {
  __typename?: 'Przeglad_Koszta_Dodatkowe_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  koszt_MacPhersona?: Maybe<Scalars['Float']>;
  koszt_hamulce?: Maybe<Scalars['Float']>;
  koszt_klimatyzacja?: Maybe<Scalars['Float']>;
  koszt_rozrzad?: Maybe<Scalars['Float']>;
  koszt_sprzeglo?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Przeglad_Koszta_Dodatkowe_Stddev_Samp_Fields = {
  __typename?: 'Przeglad_Koszta_Dodatkowe_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  koszt_MacPhersona?: Maybe<Scalars['Float']>;
  koszt_hamulce?: Maybe<Scalars['Float']>;
  koszt_klimatyzacja?: Maybe<Scalars['Float']>;
  koszt_rozrzad?: Maybe<Scalars['Float']>;
  koszt_sprzeglo?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Przeglad_Koszta_Dodatkowe_Sum_Fields = {
  __typename?: 'Przeglad_Koszta_Dodatkowe_sum_fields';
  id?: Maybe<Scalars['Int']>;
  koszt_MacPhersona?: Maybe<Scalars['Int']>;
  koszt_hamulce?: Maybe<Scalars['Int']>;
  koszt_klimatyzacja?: Maybe<Scalars['Int']>;
  koszt_rozrzad?: Maybe<Scalars['Int']>;
  koszt_sprzeglo?: Maybe<Scalars['Int']>;
};

/** update columns of table "Przeglad_Koszta_Dodatkowe" */
export enum Przeglad_Koszta_Dodatkowe_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  KosztMacPhersona = 'koszt_MacPhersona',
  /** column name */
  KosztHamulce = 'koszt_hamulce',
  /** column name */
  KosztKlimatyzacja = 'koszt_klimatyzacja',
  /** column name */
  KosztRozrzad = 'koszt_rozrzad',
  /** column name */
  KosztSprzeglo = 'koszt_sprzeglo'
}

/** aggregate var_pop on columns */
export type Przeglad_Koszta_Dodatkowe_Var_Pop_Fields = {
  __typename?: 'Przeglad_Koszta_Dodatkowe_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  koszt_MacPhersona?: Maybe<Scalars['Float']>;
  koszt_hamulce?: Maybe<Scalars['Float']>;
  koszt_klimatyzacja?: Maybe<Scalars['Float']>;
  koszt_rozrzad?: Maybe<Scalars['Float']>;
  koszt_sprzeglo?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Przeglad_Koszta_Dodatkowe_Var_Samp_Fields = {
  __typename?: 'Przeglad_Koszta_Dodatkowe_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  koszt_MacPhersona?: Maybe<Scalars['Float']>;
  koszt_hamulce?: Maybe<Scalars['Float']>;
  koszt_klimatyzacja?: Maybe<Scalars['Float']>;
  koszt_rozrzad?: Maybe<Scalars['Float']>;
  koszt_sprzeglo?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Przeglad_Koszta_Dodatkowe_Variance_Fields = {
  __typename?: 'Przeglad_Koszta_Dodatkowe_variance_fields';
  id?: Maybe<Scalars['Float']>;
  koszt_MacPhersona?: Maybe<Scalars['Float']>;
  koszt_hamulce?: Maybe<Scalars['Float']>;
  koszt_klimatyzacja?: Maybe<Scalars['Float']>;
  koszt_rozrzad?: Maybe<Scalars['Float']>;
  koszt_sprzeglo?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Przeglad_OT_Kilometry" */
export type Przeglad_Ot_Kilometry = {
  __typename?: 'Przeglad_OT_Kilometry';
  /** An array relationship */
  Przeglads: Array<Przeglad>;
  /** An aggregate relationship */
  Przeglads_aggregate: Przeglad_Aggregate;
  id: Scalars['Int'];
  ilosc_kilometrow_w_tysiacach: Scalars['Int'];
};


/** columns and relationships of "Przeglad_OT_Kilometry" */
export type Przeglad_Ot_KilometryPrzegladsArgs = {
  distinct_on?: Maybe<Array<Przeglad_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Order_By>>;
  where?: Maybe<Przeglad_Bool_Exp>;
};


/** columns and relationships of "Przeglad_OT_Kilometry" */
export type Przeglad_Ot_KilometryPrzeglads_AggregateArgs = {
  distinct_on?: Maybe<Array<Przeglad_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Order_By>>;
  where?: Maybe<Przeglad_Bool_Exp>;
};

/** aggregated selection of "Przeglad_OT_Kilometry" */
export type Przeglad_Ot_Kilometry_Aggregate = {
  __typename?: 'Przeglad_OT_Kilometry_aggregate';
  aggregate?: Maybe<Przeglad_Ot_Kilometry_Aggregate_Fields>;
  nodes: Array<Przeglad_Ot_Kilometry>;
};

/** aggregate fields of "Przeglad_OT_Kilometry" */
export type Przeglad_Ot_Kilometry_Aggregate_Fields = {
  __typename?: 'Przeglad_OT_Kilometry_aggregate_fields';
  avg?: Maybe<Przeglad_Ot_Kilometry_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Przeglad_Ot_Kilometry_Max_Fields>;
  min?: Maybe<Przeglad_Ot_Kilometry_Min_Fields>;
  stddev?: Maybe<Przeglad_Ot_Kilometry_Stddev_Fields>;
  stddev_pop?: Maybe<Przeglad_Ot_Kilometry_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Przeglad_Ot_Kilometry_Stddev_Samp_Fields>;
  sum?: Maybe<Przeglad_Ot_Kilometry_Sum_Fields>;
  var_pop?: Maybe<Przeglad_Ot_Kilometry_Var_Pop_Fields>;
  var_samp?: Maybe<Przeglad_Ot_Kilometry_Var_Samp_Fields>;
  variance?: Maybe<Przeglad_Ot_Kilometry_Variance_Fields>;
};


/** aggregate fields of "Przeglad_OT_Kilometry" */
export type Przeglad_Ot_Kilometry_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Przeglad_Ot_Kilometry_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Przeglad_Ot_Kilometry_Avg_Fields = {
  __typename?: 'Przeglad_OT_Kilometry_avg_fields';
  id?: Maybe<Scalars['Float']>;
  ilosc_kilometrow_w_tysiacach?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Przeglad_OT_Kilometry". All fields are combined with a logical 'AND'. */
export type Przeglad_Ot_Kilometry_Bool_Exp = {
  Przeglads?: Maybe<Przeglad_Bool_Exp>;
  _and?: Maybe<Array<Przeglad_Ot_Kilometry_Bool_Exp>>;
  _not?: Maybe<Przeglad_Ot_Kilometry_Bool_Exp>;
  _or?: Maybe<Array<Przeglad_Ot_Kilometry_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  ilosc_kilometrow_w_tysiacach?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Przeglad_OT_Kilometry" */
export enum Przeglad_Ot_Kilometry_Constraint {
  /** unique or primary key constraint */
  PrzegladOtKilometryPkey = 'Przeglad_OT_Kilometry_pkey'
}

/** input type for incrementing numeric columns in table "Przeglad_OT_Kilometry" */
export type Przeglad_Ot_Kilometry_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  ilosc_kilometrow_w_tysiacach?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Przeglad_OT_Kilometry" */
export type Przeglad_Ot_Kilometry_Insert_Input = {
  Przeglads?: Maybe<Przeglad_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  ilosc_kilometrow_w_tysiacach?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Przeglad_Ot_Kilometry_Max_Fields = {
  __typename?: 'Przeglad_OT_Kilometry_max_fields';
  id?: Maybe<Scalars['Int']>;
  ilosc_kilometrow_w_tysiacach?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Przeglad_Ot_Kilometry_Min_Fields = {
  __typename?: 'Przeglad_OT_Kilometry_min_fields';
  id?: Maybe<Scalars['Int']>;
  ilosc_kilometrow_w_tysiacach?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "Przeglad_OT_Kilometry" */
export type Przeglad_Ot_Kilometry_Mutation_Response = {
  __typename?: 'Przeglad_OT_Kilometry_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Przeglad_Ot_Kilometry>;
};

/** input type for inserting object relation for remote table "Przeglad_OT_Kilometry" */
export type Przeglad_Ot_Kilometry_Obj_Rel_Insert_Input = {
  data: Przeglad_Ot_Kilometry_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Przeglad_Ot_Kilometry_On_Conflict>;
};

/** on conflict condition type for table "Przeglad_OT_Kilometry" */
export type Przeglad_Ot_Kilometry_On_Conflict = {
  constraint: Przeglad_Ot_Kilometry_Constraint;
  update_columns: Array<Przeglad_Ot_Kilometry_Update_Column>;
  where?: Maybe<Przeglad_Ot_Kilometry_Bool_Exp>;
};

/** Ordering options when selecting data from "Przeglad_OT_Kilometry". */
export type Przeglad_Ot_Kilometry_Order_By = {
  Przeglads_aggregate?: Maybe<Przeglad_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  ilosc_kilometrow_w_tysiacach?: Maybe<Order_By>;
};

/** primary key columns input for table: Przeglad_OT_Kilometry */
export type Przeglad_Ot_Kilometry_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Przeglad_OT_Kilometry" */
export enum Przeglad_Ot_Kilometry_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IloscKilometrowWTysiacach = 'ilosc_kilometrow_w_tysiacach'
}

/** input type for updating data in table "Przeglad_OT_Kilometry" */
export type Przeglad_Ot_Kilometry_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  ilosc_kilometrow_w_tysiacach?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Przeglad_Ot_Kilometry_Stddev_Fields = {
  __typename?: 'Przeglad_OT_Kilometry_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  ilosc_kilometrow_w_tysiacach?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Przeglad_Ot_Kilometry_Stddev_Pop_Fields = {
  __typename?: 'Przeglad_OT_Kilometry_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  ilosc_kilometrow_w_tysiacach?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Przeglad_Ot_Kilometry_Stddev_Samp_Fields = {
  __typename?: 'Przeglad_OT_Kilometry_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  ilosc_kilometrow_w_tysiacach?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Przeglad_Ot_Kilometry_Sum_Fields = {
  __typename?: 'Przeglad_OT_Kilometry_sum_fields';
  id?: Maybe<Scalars['Int']>;
  ilosc_kilometrow_w_tysiacach?: Maybe<Scalars['Int']>;
};

/** update columns of table "Przeglad_OT_Kilometry" */
export enum Przeglad_Ot_Kilometry_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IloscKilometrowWTysiacach = 'ilosc_kilometrow_w_tysiacach'
}

/** aggregate var_pop on columns */
export type Przeglad_Ot_Kilometry_Var_Pop_Fields = {
  __typename?: 'Przeglad_OT_Kilometry_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  ilosc_kilometrow_w_tysiacach?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Przeglad_Ot_Kilometry_Var_Samp_Fields = {
  __typename?: 'Przeglad_OT_Kilometry_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  ilosc_kilometrow_w_tysiacach?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Przeglad_Ot_Kilometry_Variance_Fields = {
  __typename?: 'Przeglad_OT_Kilometry_variance_fields';
  id?: Maybe<Scalars['Float']>;
  ilosc_kilometrow_w_tysiacach?: Maybe<Scalars['Float']>;
};

/** aggregated selection of "Przeglad" */
export type Przeglad_Aggregate = {
  __typename?: 'Przeglad_aggregate';
  aggregate?: Maybe<Przeglad_Aggregate_Fields>;
  nodes: Array<Przeglad>;
};

/** aggregate fields of "Przeglad" */
export type Przeglad_Aggregate_Fields = {
  __typename?: 'Przeglad_aggregate_fields';
  avg?: Maybe<Przeglad_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Przeglad_Max_Fields>;
  min?: Maybe<Przeglad_Min_Fields>;
  stddev?: Maybe<Przeglad_Stddev_Fields>;
  stddev_pop?: Maybe<Przeglad_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Przeglad_Stddev_Samp_Fields>;
  sum?: Maybe<Przeglad_Sum_Fields>;
  var_pop?: Maybe<Przeglad_Var_Pop_Fields>;
  var_samp?: Maybe<Przeglad_Var_Samp_Fields>;
  variance?: Maybe<Przeglad_Variance_Fields>;
};


/** aggregate fields of "Przeglad" */
export type Przeglad_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Przeglad_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Przeglad" */
export type Przeglad_Aggregate_Order_By = {
  avg?: Maybe<Przeglad_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Przeglad_Max_Order_By>;
  min?: Maybe<Przeglad_Min_Order_By>;
  stddev?: Maybe<Przeglad_Stddev_Order_By>;
  stddev_pop?: Maybe<Przeglad_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Przeglad_Stddev_Samp_Order_By>;
  sum?: Maybe<Przeglad_Sum_Order_By>;
  var_pop?: Maybe<Przeglad_Var_Pop_Order_By>;
  var_samp?: Maybe<Przeglad_Var_Samp_Order_By>;
  variance?: Maybe<Przeglad_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Przeglad" */
export type Przeglad_Arr_Rel_Insert_Input = {
  data: Array<Przeglad_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Przeglad_On_Conflict>;
};

/** aggregate avg on columns */
export type Przeglad_Avg_Fields = {
  __typename?: 'Przeglad_avg_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_przeglad_koszta_dodatkowe?: Maybe<Scalars['Float']>;
  id_przeglad_ot_kilometry?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Przeglad" */
export type Przeglad_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_przeglad_koszta_dodatkowe?: Maybe<Order_By>;
  id_przeglad_ot_kilometry?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Przeglad". All fields are combined with a logical 'AND'. */
export type Przeglad_Bool_Exp = {
  Auto?: Maybe<Auto_Bool_Exp>;
  Przeglad_Koszta_Dodatkowe?: Maybe<Przeglad_Koszta_Dodatkowe_Bool_Exp>;
  Przeglad_OT_Kilometry?: Maybe<Przeglad_Ot_Kilometry_Bool_Exp>;
  _and?: Maybe<Array<Przeglad_Bool_Exp>>;
  _not?: Maybe<Przeglad_Bool_Exp>;
  _or?: Maybe<Array<Przeglad_Bool_Exp>>;
  data_przegladu?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_auto?: Maybe<Int_Comparison_Exp>;
  id_przeglad_koszta_dodatkowe?: Maybe<Int_Comparison_Exp>;
  id_przeglad_ot_kilometry?: Maybe<Int_Comparison_Exp>;
  is_wymiana_rozrzadu?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "Przeglad" */
export enum Przeglad_Constraint {
  /** unique or primary key constraint */
  PrzegladPkey = 'Przeglad_pkey'
}

/** input type for incrementing numeric columns in table "Przeglad" */
export type Przeglad_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_przeglad_koszta_dodatkowe?: Maybe<Scalars['Int']>;
  id_przeglad_ot_kilometry?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Przeglad" */
export type Przeglad_Insert_Input = {
  Auto?: Maybe<Auto_Obj_Rel_Insert_Input>;
  Przeglad_Koszta_Dodatkowe?: Maybe<Przeglad_Koszta_Dodatkowe_Obj_Rel_Insert_Input>;
  Przeglad_OT_Kilometry?: Maybe<Przeglad_Ot_Kilometry_Obj_Rel_Insert_Input>;
  data_przegladu?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_przeglad_koszta_dodatkowe?: Maybe<Scalars['Int']>;
  id_przeglad_ot_kilometry?: Maybe<Scalars['Int']>;
  is_wymiana_rozrzadu?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Przeglad_Max_Fields = {
  __typename?: 'Przeglad_max_fields';
  data_przegladu?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_przeglad_koszta_dodatkowe?: Maybe<Scalars['Int']>;
  id_przeglad_ot_kilometry?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Przeglad" */
export type Przeglad_Max_Order_By = {
  data_przegladu?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_przeglad_koszta_dodatkowe?: Maybe<Order_By>;
  id_przeglad_ot_kilometry?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Przeglad_Min_Fields = {
  __typename?: 'Przeglad_min_fields';
  data_przegladu?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_przeglad_koszta_dodatkowe?: Maybe<Scalars['Int']>;
  id_przeglad_ot_kilometry?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Przeglad" */
export type Przeglad_Min_Order_By = {
  data_przegladu?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_przeglad_koszta_dodatkowe?: Maybe<Order_By>;
  id_przeglad_ot_kilometry?: Maybe<Order_By>;
};

/** response of any mutation on the table "Przeglad" */
export type Przeglad_Mutation_Response = {
  __typename?: 'Przeglad_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Przeglad>;
};

/** on conflict condition type for table "Przeglad" */
export type Przeglad_On_Conflict = {
  constraint: Przeglad_Constraint;
  update_columns: Array<Przeglad_Update_Column>;
  where?: Maybe<Przeglad_Bool_Exp>;
};

/** Ordering options when selecting data from "Przeglad". */
export type Przeglad_Order_By = {
  Auto?: Maybe<Auto_Order_By>;
  Przeglad_Koszta_Dodatkowe?: Maybe<Przeglad_Koszta_Dodatkowe_Order_By>;
  Przeglad_OT_Kilometry?: Maybe<Przeglad_Ot_Kilometry_Order_By>;
  data_przegladu?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_przeglad_koszta_dodatkowe?: Maybe<Order_By>;
  id_przeglad_ot_kilometry?: Maybe<Order_By>;
  is_wymiana_rozrzadu?: Maybe<Order_By>;
};

/** primary key columns input for table: Przeglad */
export type Przeglad_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Przeglad" */
export enum Przeglad_Select_Column {
  /** column name */
  DataPrzegladu = 'data_przegladu',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  IdPrzegladKosztaDodatkowe = 'id_przeglad_koszta_dodatkowe',
  /** column name */
  IdPrzegladOtKilometry = 'id_przeglad_ot_kilometry',
  /** column name */
  IsWymianaRozrzadu = 'is_wymiana_rozrzadu'
}

/** input type for updating data in table "Przeglad" */
export type Przeglad_Set_Input = {
  data_przegladu?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_przeglad_koszta_dodatkowe?: Maybe<Scalars['Int']>;
  id_przeglad_ot_kilometry?: Maybe<Scalars['Int']>;
  is_wymiana_rozrzadu?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Przeglad_Stddev_Fields = {
  __typename?: 'Przeglad_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_przeglad_koszta_dodatkowe?: Maybe<Scalars['Float']>;
  id_przeglad_ot_kilometry?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Przeglad" */
export type Przeglad_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_przeglad_koszta_dodatkowe?: Maybe<Order_By>;
  id_przeglad_ot_kilometry?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Przeglad_Stddev_Pop_Fields = {
  __typename?: 'Przeglad_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_przeglad_koszta_dodatkowe?: Maybe<Scalars['Float']>;
  id_przeglad_ot_kilometry?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Przeglad" */
export type Przeglad_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_przeglad_koszta_dodatkowe?: Maybe<Order_By>;
  id_przeglad_ot_kilometry?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Przeglad_Stddev_Samp_Fields = {
  __typename?: 'Przeglad_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_przeglad_koszta_dodatkowe?: Maybe<Scalars['Float']>;
  id_przeglad_ot_kilometry?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Przeglad" */
export type Przeglad_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_przeglad_koszta_dodatkowe?: Maybe<Order_By>;
  id_przeglad_ot_kilometry?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Przeglad_Sum_Fields = {
  __typename?: 'Przeglad_sum_fields';
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_przeglad_koszta_dodatkowe?: Maybe<Scalars['Int']>;
  id_przeglad_ot_kilometry?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Przeglad" */
export type Przeglad_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_przeglad_koszta_dodatkowe?: Maybe<Order_By>;
  id_przeglad_ot_kilometry?: Maybe<Order_By>;
};

/** update columns of table "Przeglad" */
export enum Przeglad_Update_Column {
  /** column name */
  DataPrzegladu = 'data_przegladu',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  IdPrzegladKosztaDodatkowe = 'id_przeglad_koszta_dodatkowe',
  /** column name */
  IdPrzegladOtKilometry = 'id_przeglad_ot_kilometry',
  /** column name */
  IsWymianaRozrzadu = 'is_wymiana_rozrzadu'
}

/** aggregate var_pop on columns */
export type Przeglad_Var_Pop_Fields = {
  __typename?: 'Przeglad_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_przeglad_koszta_dodatkowe?: Maybe<Scalars['Float']>;
  id_przeglad_ot_kilometry?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Przeglad" */
export type Przeglad_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_przeglad_koszta_dodatkowe?: Maybe<Order_By>;
  id_przeglad_ot_kilometry?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Przeglad_Var_Samp_Fields = {
  __typename?: 'Przeglad_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_przeglad_koszta_dodatkowe?: Maybe<Scalars['Float']>;
  id_przeglad_ot_kilometry?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Przeglad" */
export type Przeglad_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_przeglad_koszta_dodatkowe?: Maybe<Order_By>;
  id_przeglad_ot_kilometry?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Przeglad_Variance_Fields = {
  __typename?: 'Przeglad_variance_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_przeglad_koszta_dodatkowe?: Maybe<Scalars['Float']>;
  id_przeglad_ot_kilometry?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Przeglad" */
export type Przeglad_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_przeglad_koszta_dodatkowe?: Maybe<Order_By>;
  id_przeglad_ot_kilometry?: Maybe<Order_By>;
};

/** columns and relationships of "Status_Awarii" */
export type Status_Awarii = {
  __typename?: 'Status_Awarii';
  /** An array relationship */
  Awaria: Array<Awaria>;
  /** An aggregate relationship */
  Awaria_aggregate: Awaria_Aggregate;
  id: Scalars['Int'];
  nazwa_statusu: Scalars['String'];
};


/** columns and relationships of "Status_Awarii" */
export type Status_AwariiAwariaArgs = {
  distinct_on?: Maybe<Array<Awaria_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Awaria_Order_By>>;
  where?: Maybe<Awaria_Bool_Exp>;
};


/** columns and relationships of "Status_Awarii" */
export type Status_AwariiAwaria_AggregateArgs = {
  distinct_on?: Maybe<Array<Awaria_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Awaria_Order_By>>;
  where?: Maybe<Awaria_Bool_Exp>;
};

/** aggregated selection of "Status_Awarii" */
export type Status_Awarii_Aggregate = {
  __typename?: 'Status_Awarii_aggregate';
  aggregate?: Maybe<Status_Awarii_Aggregate_Fields>;
  nodes: Array<Status_Awarii>;
};

/** aggregate fields of "Status_Awarii" */
export type Status_Awarii_Aggregate_Fields = {
  __typename?: 'Status_Awarii_aggregate_fields';
  avg?: Maybe<Status_Awarii_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Status_Awarii_Max_Fields>;
  min?: Maybe<Status_Awarii_Min_Fields>;
  stddev?: Maybe<Status_Awarii_Stddev_Fields>;
  stddev_pop?: Maybe<Status_Awarii_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Status_Awarii_Stddev_Samp_Fields>;
  sum?: Maybe<Status_Awarii_Sum_Fields>;
  var_pop?: Maybe<Status_Awarii_Var_Pop_Fields>;
  var_samp?: Maybe<Status_Awarii_Var_Samp_Fields>;
  variance?: Maybe<Status_Awarii_Variance_Fields>;
};


/** aggregate fields of "Status_Awarii" */
export type Status_Awarii_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Status_Awarii_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Status_Awarii_Avg_Fields = {
  __typename?: 'Status_Awarii_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Status_Awarii". All fields are combined with a logical 'AND'. */
export type Status_Awarii_Bool_Exp = {
  Awaria?: Maybe<Awaria_Bool_Exp>;
  _and?: Maybe<Array<Status_Awarii_Bool_Exp>>;
  _not?: Maybe<Status_Awarii_Bool_Exp>;
  _or?: Maybe<Array<Status_Awarii_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  nazwa_statusu?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Status_Awarii" */
export enum Status_Awarii_Constraint {
  /** unique or primary key constraint */
  StatusAwariiPkey = 'Status_Awarii_pkey'
}

/** input type for incrementing numeric columns in table "Status_Awarii" */
export type Status_Awarii_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Status_Awarii" */
export type Status_Awarii_Insert_Input = {
  Awaria?: Maybe<Awaria_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  nazwa_statusu?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Status_Awarii_Max_Fields = {
  __typename?: 'Status_Awarii_max_fields';
  id?: Maybe<Scalars['Int']>;
  nazwa_statusu?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Status_Awarii_Min_Fields = {
  __typename?: 'Status_Awarii_min_fields';
  id?: Maybe<Scalars['Int']>;
  nazwa_statusu?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Status_Awarii" */
export type Status_Awarii_Mutation_Response = {
  __typename?: 'Status_Awarii_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Status_Awarii>;
};

/** input type for inserting object relation for remote table "Status_Awarii" */
export type Status_Awarii_Obj_Rel_Insert_Input = {
  data: Status_Awarii_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Status_Awarii_On_Conflict>;
};

/** on conflict condition type for table "Status_Awarii" */
export type Status_Awarii_On_Conflict = {
  constraint: Status_Awarii_Constraint;
  update_columns: Array<Status_Awarii_Update_Column>;
  where?: Maybe<Status_Awarii_Bool_Exp>;
};

/** Ordering options when selecting data from "Status_Awarii". */
export type Status_Awarii_Order_By = {
  Awaria_aggregate?: Maybe<Awaria_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  nazwa_statusu?: Maybe<Order_By>;
};

/** primary key columns input for table: Status_Awarii */
export type Status_Awarii_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Status_Awarii" */
export enum Status_Awarii_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NazwaStatusu = 'nazwa_statusu'
}

/** input type for updating data in table "Status_Awarii" */
export type Status_Awarii_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  nazwa_statusu?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Status_Awarii_Stddev_Fields = {
  __typename?: 'Status_Awarii_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Status_Awarii_Stddev_Pop_Fields = {
  __typename?: 'Status_Awarii_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Status_Awarii_Stddev_Samp_Fields = {
  __typename?: 'Status_Awarii_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Status_Awarii_Sum_Fields = {
  __typename?: 'Status_Awarii_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "Status_Awarii" */
export enum Status_Awarii_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NazwaStatusu = 'nazwa_statusu'
}

/** aggregate var_pop on columns */
export type Status_Awarii_Var_Pop_Fields = {
  __typename?: 'Status_Awarii_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Status_Awarii_Var_Samp_Fields = {
  __typename?: 'Status_Awarii_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Status_Awarii_Variance_Fields = {
  __typename?: 'Status_Awarii_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Status_Szkody" */
export type Status_Szkody = {
  __typename?: 'Status_Szkody';
  /** An array relationship */
  Szkodas: Array<Szkoda>;
  /** An aggregate relationship */
  Szkodas_aggregate: Szkoda_Aggregate;
  id: Scalars['Int'];
  nazwa_statusu: Scalars['String'];
};


/** columns and relationships of "Status_Szkody" */
export type Status_SzkodySzkodasArgs = {
  distinct_on?: Maybe<Array<Szkoda_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Szkoda_Order_By>>;
  where?: Maybe<Szkoda_Bool_Exp>;
};


/** columns and relationships of "Status_Szkody" */
export type Status_SzkodySzkodas_AggregateArgs = {
  distinct_on?: Maybe<Array<Szkoda_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Szkoda_Order_By>>;
  where?: Maybe<Szkoda_Bool_Exp>;
};

/** aggregated selection of "Status_Szkody" */
export type Status_Szkody_Aggregate = {
  __typename?: 'Status_Szkody_aggregate';
  aggregate?: Maybe<Status_Szkody_Aggregate_Fields>;
  nodes: Array<Status_Szkody>;
};

/** aggregate fields of "Status_Szkody" */
export type Status_Szkody_Aggregate_Fields = {
  __typename?: 'Status_Szkody_aggregate_fields';
  avg?: Maybe<Status_Szkody_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Status_Szkody_Max_Fields>;
  min?: Maybe<Status_Szkody_Min_Fields>;
  stddev?: Maybe<Status_Szkody_Stddev_Fields>;
  stddev_pop?: Maybe<Status_Szkody_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Status_Szkody_Stddev_Samp_Fields>;
  sum?: Maybe<Status_Szkody_Sum_Fields>;
  var_pop?: Maybe<Status_Szkody_Var_Pop_Fields>;
  var_samp?: Maybe<Status_Szkody_Var_Samp_Fields>;
  variance?: Maybe<Status_Szkody_Variance_Fields>;
};


/** aggregate fields of "Status_Szkody" */
export type Status_Szkody_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Status_Szkody_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Status_Szkody_Avg_Fields = {
  __typename?: 'Status_Szkody_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Status_Szkody". All fields are combined with a logical 'AND'. */
export type Status_Szkody_Bool_Exp = {
  Szkodas?: Maybe<Szkoda_Bool_Exp>;
  _and?: Maybe<Array<Status_Szkody_Bool_Exp>>;
  _not?: Maybe<Status_Szkody_Bool_Exp>;
  _or?: Maybe<Array<Status_Szkody_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  nazwa_statusu?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Status_Szkody" */
export enum Status_Szkody_Constraint {
  /** unique or primary key constraint */
  StatusSzkodyPkey = 'Status_Szkody_pkey'
}

/** input type for incrementing numeric columns in table "Status_Szkody" */
export type Status_Szkody_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Status_Szkody" */
export type Status_Szkody_Insert_Input = {
  Szkodas?: Maybe<Szkoda_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  nazwa_statusu?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Status_Szkody_Max_Fields = {
  __typename?: 'Status_Szkody_max_fields';
  id?: Maybe<Scalars['Int']>;
  nazwa_statusu?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Status_Szkody_Min_Fields = {
  __typename?: 'Status_Szkody_min_fields';
  id?: Maybe<Scalars['Int']>;
  nazwa_statusu?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Status_Szkody" */
export type Status_Szkody_Mutation_Response = {
  __typename?: 'Status_Szkody_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Status_Szkody>;
};

/** input type for inserting object relation for remote table "Status_Szkody" */
export type Status_Szkody_Obj_Rel_Insert_Input = {
  data: Status_Szkody_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Status_Szkody_On_Conflict>;
};

/** on conflict condition type for table "Status_Szkody" */
export type Status_Szkody_On_Conflict = {
  constraint: Status_Szkody_Constraint;
  update_columns: Array<Status_Szkody_Update_Column>;
  where?: Maybe<Status_Szkody_Bool_Exp>;
};

/** Ordering options when selecting data from "Status_Szkody". */
export type Status_Szkody_Order_By = {
  Szkodas_aggregate?: Maybe<Szkoda_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  nazwa_statusu?: Maybe<Order_By>;
};

/** primary key columns input for table: Status_Szkody */
export type Status_Szkody_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Status_Szkody" */
export enum Status_Szkody_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NazwaStatusu = 'nazwa_statusu'
}

/** input type for updating data in table "Status_Szkody" */
export type Status_Szkody_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  nazwa_statusu?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Status_Szkody_Stddev_Fields = {
  __typename?: 'Status_Szkody_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Status_Szkody_Stddev_Pop_Fields = {
  __typename?: 'Status_Szkody_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Status_Szkody_Stddev_Samp_Fields = {
  __typename?: 'Status_Szkody_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Status_Szkody_Sum_Fields = {
  __typename?: 'Status_Szkody_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "Status_Szkody" */
export enum Status_Szkody_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NazwaStatusu = 'nazwa_statusu'
}

/** aggregate var_pop on columns */
export type Status_Szkody_Var_Pop_Fields = {
  __typename?: 'Status_Szkody_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Status_Szkody_Var_Samp_Fields = {
  __typename?: 'Status_Szkody_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Status_Szkody_Variance_Fields = {
  __typename?: 'Status_Szkody_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "Szkoda" */
export type Szkoda = {
  __typename?: 'Szkoda';
  /** An object relationship */
  Status_Szkody: Status_Szkody;
  /** An object relationship */
  Uzytkownik: Uzytkownik;
  adres: Scalars['String'];
  id: Scalars['Int'];
  id_auto: Scalars['Int'];
  id_status_szkody: Scalars['Int'];
  id_uzytkownik: Scalars['Int'];
  opis_szkody: Scalars['String'];
  uszkodzenia: Scalars['String'];
};

/** aggregated selection of "Szkoda" */
export type Szkoda_Aggregate = {
  __typename?: 'Szkoda_aggregate';
  aggregate?: Maybe<Szkoda_Aggregate_Fields>;
  nodes: Array<Szkoda>;
};

/** aggregate fields of "Szkoda" */
export type Szkoda_Aggregate_Fields = {
  __typename?: 'Szkoda_aggregate_fields';
  avg?: Maybe<Szkoda_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Szkoda_Max_Fields>;
  min?: Maybe<Szkoda_Min_Fields>;
  stddev?: Maybe<Szkoda_Stddev_Fields>;
  stddev_pop?: Maybe<Szkoda_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Szkoda_Stddev_Samp_Fields>;
  sum?: Maybe<Szkoda_Sum_Fields>;
  var_pop?: Maybe<Szkoda_Var_Pop_Fields>;
  var_samp?: Maybe<Szkoda_Var_Samp_Fields>;
  variance?: Maybe<Szkoda_Variance_Fields>;
};


/** aggregate fields of "Szkoda" */
export type Szkoda_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Szkoda_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Szkoda" */
export type Szkoda_Aggregate_Order_By = {
  avg?: Maybe<Szkoda_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Szkoda_Max_Order_By>;
  min?: Maybe<Szkoda_Min_Order_By>;
  stddev?: Maybe<Szkoda_Stddev_Order_By>;
  stddev_pop?: Maybe<Szkoda_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Szkoda_Stddev_Samp_Order_By>;
  sum?: Maybe<Szkoda_Sum_Order_By>;
  var_pop?: Maybe<Szkoda_Var_Pop_Order_By>;
  var_samp?: Maybe<Szkoda_Var_Samp_Order_By>;
  variance?: Maybe<Szkoda_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Szkoda" */
export type Szkoda_Arr_Rel_Insert_Input = {
  data: Array<Szkoda_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Szkoda_On_Conflict>;
};

/** aggregate avg on columns */
export type Szkoda_Avg_Fields = {
  __typename?: 'Szkoda_avg_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_status_szkody?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Szkoda" */
export type Szkoda_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_szkody?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Szkoda". All fields are combined with a logical 'AND'. */
export type Szkoda_Bool_Exp = {
  Status_Szkody?: Maybe<Status_Szkody_Bool_Exp>;
  Uzytkownik?: Maybe<Uzytkownik_Bool_Exp>;
  _and?: Maybe<Array<Szkoda_Bool_Exp>>;
  _not?: Maybe<Szkoda_Bool_Exp>;
  _or?: Maybe<Array<Szkoda_Bool_Exp>>;
  adres?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_auto?: Maybe<Int_Comparison_Exp>;
  id_status_szkody?: Maybe<Int_Comparison_Exp>;
  id_uzytkownik?: Maybe<Int_Comparison_Exp>;
  opis_szkody?: Maybe<String_Comparison_Exp>;
  uszkodzenia?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Szkoda" */
export enum Szkoda_Constraint {
  /** unique or primary key constraint */
  SzkodaPkey = 'Szkoda_pkey'
}

/** input type for incrementing numeric columns in table "Szkoda" */
export type Szkoda_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_status_szkody?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Szkoda" */
export type Szkoda_Insert_Input = {
  Status_Szkody?: Maybe<Status_Szkody_Obj_Rel_Insert_Input>;
  Uzytkownik?: Maybe<Uzytkownik_Obj_Rel_Insert_Input>;
  adres?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_status_szkody?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
  opis_szkody?: Maybe<Scalars['String']>;
  uszkodzenia?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Szkoda_Max_Fields = {
  __typename?: 'Szkoda_max_fields';
  adres?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_status_szkody?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
  opis_szkody?: Maybe<Scalars['String']>;
  uszkodzenia?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Szkoda" */
export type Szkoda_Max_Order_By = {
  adres?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_szkody?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  opis_szkody?: Maybe<Order_By>;
  uszkodzenia?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Szkoda_Min_Fields = {
  __typename?: 'Szkoda_min_fields';
  adres?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_status_szkody?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
  opis_szkody?: Maybe<Scalars['String']>;
  uszkodzenia?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Szkoda" */
export type Szkoda_Min_Order_By = {
  adres?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_szkody?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  opis_szkody?: Maybe<Order_By>;
  uszkodzenia?: Maybe<Order_By>;
};

/** response of any mutation on the table "Szkoda" */
export type Szkoda_Mutation_Response = {
  __typename?: 'Szkoda_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Szkoda>;
};

/** on conflict condition type for table "Szkoda" */
export type Szkoda_On_Conflict = {
  constraint: Szkoda_Constraint;
  update_columns: Array<Szkoda_Update_Column>;
  where?: Maybe<Szkoda_Bool_Exp>;
};

/** Ordering options when selecting data from "Szkoda". */
export type Szkoda_Order_By = {
  Status_Szkody?: Maybe<Status_Szkody_Order_By>;
  Uzytkownik?: Maybe<Uzytkownik_Order_By>;
  adres?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_szkody?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
  opis_szkody?: Maybe<Order_By>;
  uszkodzenia?: Maybe<Order_By>;
};

/** primary key columns input for table: Szkoda */
export type Szkoda_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Szkoda" */
export enum Szkoda_Select_Column {
  /** column name */
  Adres = 'adres',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  IdStatusSzkody = 'id_status_szkody',
  /** column name */
  IdUzytkownik = 'id_uzytkownik',
  /** column name */
  OpisSzkody = 'opis_szkody',
  /** column name */
  Uszkodzenia = 'uszkodzenia'
}

/** input type for updating data in table "Szkoda" */
export type Szkoda_Set_Input = {
  adres?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_status_szkody?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
  opis_szkody?: Maybe<Scalars['String']>;
  uszkodzenia?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Szkoda_Stddev_Fields = {
  __typename?: 'Szkoda_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_status_szkody?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Szkoda" */
export type Szkoda_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_szkody?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Szkoda_Stddev_Pop_Fields = {
  __typename?: 'Szkoda_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_status_szkody?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Szkoda" */
export type Szkoda_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_szkody?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Szkoda_Stddev_Samp_Fields = {
  __typename?: 'Szkoda_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_status_szkody?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Szkoda" */
export type Szkoda_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_szkody?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Szkoda_Sum_Fields = {
  __typename?: 'Szkoda_sum_fields';
  id?: Maybe<Scalars['Int']>;
  id_auto?: Maybe<Scalars['Int']>;
  id_status_szkody?: Maybe<Scalars['Int']>;
  id_uzytkownik?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Szkoda" */
export type Szkoda_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_szkody?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** update columns of table "Szkoda" */
export enum Szkoda_Update_Column {
  /** column name */
  Adres = 'adres',
  /** column name */
  Id = 'id',
  /** column name */
  IdAuto = 'id_auto',
  /** column name */
  IdStatusSzkody = 'id_status_szkody',
  /** column name */
  IdUzytkownik = 'id_uzytkownik',
  /** column name */
  OpisSzkody = 'opis_szkody',
  /** column name */
  Uszkodzenia = 'uszkodzenia'
}

/** aggregate var_pop on columns */
export type Szkoda_Var_Pop_Fields = {
  __typename?: 'Szkoda_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_status_szkody?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Szkoda" */
export type Szkoda_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_szkody?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Szkoda_Var_Samp_Fields = {
  __typename?: 'Szkoda_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_status_szkody?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Szkoda" */
export type Szkoda_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_szkody?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Szkoda_Variance_Fields = {
  __typename?: 'Szkoda_variance_fields';
  id?: Maybe<Scalars['Float']>;
  id_auto?: Maybe<Scalars['Float']>;
  id_status_szkody?: Maybe<Scalars['Float']>;
  id_uzytkownik?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Szkoda" */
export type Szkoda_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_auto?: Maybe<Order_By>;
  id_status_szkody?: Maybe<Order_By>;
  id_uzytkownik?: Maybe<Order_By>;
};

/** columns and relationships of "Typy_Opon" */
export type Typy_Opon = {
  __typename?: 'Typy_Opon';
  /** An array relationship */
  Oponas: Array<Opona>;
  /** An aggregate relationship */
  Oponas_aggregate: Opona_Aggregate;
  id: Scalars['Int'];
  nazwa_typu: Scalars['String'];
};


/** columns and relationships of "Typy_Opon" */
export type Typy_OponOponasArgs = {
  distinct_on?: Maybe<Array<Opona_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Opona_Order_By>>;
  where?: Maybe<Opona_Bool_Exp>;
};


/** columns and relationships of "Typy_Opon" */
export type Typy_OponOponas_AggregateArgs = {
  distinct_on?: Maybe<Array<Opona_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Opona_Order_By>>;
  where?: Maybe<Opona_Bool_Exp>;
};

/** aggregated selection of "Typy_Opon" */
export type Typy_Opon_Aggregate = {
  __typename?: 'Typy_Opon_aggregate';
  aggregate?: Maybe<Typy_Opon_Aggregate_Fields>;
  nodes: Array<Typy_Opon>;
};

/** aggregate fields of "Typy_Opon" */
export type Typy_Opon_Aggregate_Fields = {
  __typename?: 'Typy_Opon_aggregate_fields';
  avg?: Maybe<Typy_Opon_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Typy_Opon_Max_Fields>;
  min?: Maybe<Typy_Opon_Min_Fields>;
  stddev?: Maybe<Typy_Opon_Stddev_Fields>;
  stddev_pop?: Maybe<Typy_Opon_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Typy_Opon_Stddev_Samp_Fields>;
  sum?: Maybe<Typy_Opon_Sum_Fields>;
  var_pop?: Maybe<Typy_Opon_Var_Pop_Fields>;
  var_samp?: Maybe<Typy_Opon_Var_Samp_Fields>;
  variance?: Maybe<Typy_Opon_Variance_Fields>;
};


/** aggregate fields of "Typy_Opon" */
export type Typy_Opon_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Typy_Opon_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Typy_Opon_Avg_Fields = {
  __typename?: 'Typy_Opon_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Typy_Opon". All fields are combined with a logical 'AND'. */
export type Typy_Opon_Bool_Exp = {
  Oponas?: Maybe<Opona_Bool_Exp>;
  _and?: Maybe<Array<Typy_Opon_Bool_Exp>>;
  _not?: Maybe<Typy_Opon_Bool_Exp>;
  _or?: Maybe<Array<Typy_Opon_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  nazwa_typu?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Typy_Opon" */
export enum Typy_Opon_Constraint {
  /** unique or primary key constraint */
  TypyOponPkey = 'Typy_Opon_pkey'
}

/** input type for incrementing numeric columns in table "Typy_Opon" */
export type Typy_Opon_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Typy_Opon" */
export type Typy_Opon_Insert_Input = {
  Oponas?: Maybe<Opona_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  nazwa_typu?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Typy_Opon_Max_Fields = {
  __typename?: 'Typy_Opon_max_fields';
  id?: Maybe<Scalars['Int']>;
  nazwa_typu?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Typy_Opon_Min_Fields = {
  __typename?: 'Typy_Opon_min_fields';
  id?: Maybe<Scalars['Int']>;
  nazwa_typu?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Typy_Opon" */
export type Typy_Opon_Mutation_Response = {
  __typename?: 'Typy_Opon_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Typy_Opon>;
};

/** input type for inserting object relation for remote table "Typy_Opon" */
export type Typy_Opon_Obj_Rel_Insert_Input = {
  data: Typy_Opon_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Typy_Opon_On_Conflict>;
};

/** on conflict condition type for table "Typy_Opon" */
export type Typy_Opon_On_Conflict = {
  constraint: Typy_Opon_Constraint;
  update_columns: Array<Typy_Opon_Update_Column>;
  where?: Maybe<Typy_Opon_Bool_Exp>;
};

/** Ordering options when selecting data from "Typy_Opon". */
export type Typy_Opon_Order_By = {
  Oponas_aggregate?: Maybe<Opona_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  nazwa_typu?: Maybe<Order_By>;
};

/** primary key columns input for table: Typy_Opon */
export type Typy_Opon_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Typy_Opon" */
export enum Typy_Opon_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NazwaTypu = 'nazwa_typu'
}

/** input type for updating data in table "Typy_Opon" */
export type Typy_Opon_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  nazwa_typu?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Typy_Opon_Stddev_Fields = {
  __typename?: 'Typy_Opon_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Typy_Opon_Stddev_Pop_Fields = {
  __typename?: 'Typy_Opon_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Typy_Opon_Stddev_Samp_Fields = {
  __typename?: 'Typy_Opon_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Typy_Opon_Sum_Fields = {
  __typename?: 'Typy_Opon_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "Typy_Opon" */
export enum Typy_Opon_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NazwaTypu = 'nazwa_typu'
}

/** aggregate var_pop on columns */
export type Typy_Opon_Var_Pop_Fields = {
  __typename?: 'Typy_Opon_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Typy_Opon_Var_Samp_Fields = {
  __typename?: 'Typy_Opon_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Typy_Opon_Variance_Fields = {
  __typename?: 'Typy_Opon_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Uzytkownik" */
export type Uzytkownik = {
  __typename?: 'Uzytkownik';
  /** An array relationship */
  Awaria: Array<Awaria>;
  /** An aggregate relationship */
  Awaria_aggregate: Awaria_Aggregate;
  /** An array relationship */
  Historia_Uzytkownik_Autos: Array<Historia_Uzytkownik_Auto>;
  /** An aggregate relationship */
  Historia_Uzytkownik_Autos_aggregate: Historia_Uzytkownik_Auto_Aggregate;
  /** An array relationship */
  Mandats: Array<Mandat>;
  /** An aggregate relationship */
  Mandats_aggregate: Mandat_Aggregate;
  /** An array relationship */
  Szkodas: Array<Szkoda>;
  /** An aggregate relationship */
  Szkodas_aggregate: Szkoda_Aggregate;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imie?: Maybe<Scalars['String']>;
  miasto?: Maybe<Scalars['String']>;
  nazwisko?: Maybe<Scalars['String']>;
  numer_prawa_jazdy?: Maybe<Scalars['String']>;
  pesel?: Maybe<Scalars['bigint']>;
  telefon?: Maybe<Scalars['String']>;
};


/** columns and relationships of "Uzytkownik" */
export type UzytkownikAwariaArgs = {
  distinct_on?: Maybe<Array<Awaria_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Awaria_Order_By>>;
  where?: Maybe<Awaria_Bool_Exp>;
};


/** columns and relationships of "Uzytkownik" */
export type UzytkownikAwaria_AggregateArgs = {
  distinct_on?: Maybe<Array<Awaria_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Awaria_Order_By>>;
  where?: Maybe<Awaria_Bool_Exp>;
};


/** columns and relationships of "Uzytkownik" */
export type UzytkownikHistoria_Uzytkownik_AutosArgs = {
  distinct_on?: Maybe<Array<Historia_Uzytkownik_Auto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Historia_Uzytkownik_Auto_Order_By>>;
  where?: Maybe<Historia_Uzytkownik_Auto_Bool_Exp>;
};


/** columns and relationships of "Uzytkownik" */
export type UzytkownikHistoria_Uzytkownik_Autos_AggregateArgs = {
  distinct_on?: Maybe<Array<Historia_Uzytkownik_Auto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Historia_Uzytkownik_Auto_Order_By>>;
  where?: Maybe<Historia_Uzytkownik_Auto_Bool_Exp>;
};


/** columns and relationships of "Uzytkownik" */
export type UzytkownikMandatsArgs = {
  distinct_on?: Maybe<Array<Mandat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mandat_Order_By>>;
  where?: Maybe<Mandat_Bool_Exp>;
};


/** columns and relationships of "Uzytkownik" */
export type UzytkownikMandats_AggregateArgs = {
  distinct_on?: Maybe<Array<Mandat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mandat_Order_By>>;
  where?: Maybe<Mandat_Bool_Exp>;
};


/** columns and relationships of "Uzytkownik" */
export type UzytkownikSzkodasArgs = {
  distinct_on?: Maybe<Array<Szkoda_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Szkoda_Order_By>>;
  where?: Maybe<Szkoda_Bool_Exp>;
};


/** columns and relationships of "Uzytkownik" */
export type UzytkownikSzkodas_AggregateArgs = {
  distinct_on?: Maybe<Array<Szkoda_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Szkoda_Order_By>>;
  where?: Maybe<Szkoda_Bool_Exp>;
};

/** aggregated selection of "Uzytkownik" */
export type Uzytkownik_Aggregate = {
  __typename?: 'Uzytkownik_aggregate';
  aggregate?: Maybe<Uzytkownik_Aggregate_Fields>;
  nodes: Array<Uzytkownik>;
};

/** aggregate fields of "Uzytkownik" */
export type Uzytkownik_Aggregate_Fields = {
  __typename?: 'Uzytkownik_aggregate_fields';
  avg?: Maybe<Uzytkownik_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Uzytkownik_Max_Fields>;
  min?: Maybe<Uzytkownik_Min_Fields>;
  stddev?: Maybe<Uzytkownik_Stddev_Fields>;
  stddev_pop?: Maybe<Uzytkownik_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Uzytkownik_Stddev_Samp_Fields>;
  sum?: Maybe<Uzytkownik_Sum_Fields>;
  var_pop?: Maybe<Uzytkownik_Var_Pop_Fields>;
  var_samp?: Maybe<Uzytkownik_Var_Samp_Fields>;
  variance?: Maybe<Uzytkownik_Variance_Fields>;
};


/** aggregate fields of "Uzytkownik" */
export type Uzytkownik_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Uzytkownik_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Uzytkownik_Avg_Fields = {
  __typename?: 'Uzytkownik_avg_fields';
  id?: Maybe<Scalars['Float']>;
  pesel?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Uzytkownik". All fields are combined with a logical 'AND'. */
export type Uzytkownik_Bool_Exp = {
  Awaria?: Maybe<Awaria_Bool_Exp>;
  Historia_Uzytkownik_Autos?: Maybe<Historia_Uzytkownik_Auto_Bool_Exp>;
  Mandats?: Maybe<Mandat_Bool_Exp>;
  Szkodas?: Maybe<Szkoda_Bool_Exp>;
  _and?: Maybe<Array<Uzytkownik_Bool_Exp>>;
  _not?: Maybe<Uzytkownik_Bool_Exp>;
  _or?: Maybe<Array<Uzytkownik_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  imie?: Maybe<String_Comparison_Exp>;
  miasto?: Maybe<String_Comparison_Exp>;
  nazwisko?: Maybe<String_Comparison_Exp>;
  numer_prawa_jazdy?: Maybe<String_Comparison_Exp>;
  pesel?: Maybe<Bigint_Comparison_Exp>;
  telefon?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Uzytkownik" */
export enum Uzytkownik_Constraint {
  /** unique or primary key constraint */
  UzytkownikPkey = 'Uzytkownik_pkey'
}

/** input type for incrementing numeric columns in table "Uzytkownik" */
export type Uzytkownik_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  pesel?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "Uzytkownik" */
export type Uzytkownik_Insert_Input = {
  Awaria?: Maybe<Awaria_Arr_Rel_Insert_Input>;
  Historia_Uzytkownik_Autos?: Maybe<Historia_Uzytkownik_Auto_Arr_Rel_Insert_Input>;
  Mandats?: Maybe<Mandat_Arr_Rel_Insert_Input>;
  Szkodas?: Maybe<Szkoda_Arr_Rel_Insert_Input>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imie?: Maybe<Scalars['String']>;
  miasto?: Maybe<Scalars['String']>;
  nazwisko?: Maybe<Scalars['String']>;
  numer_prawa_jazdy?: Maybe<Scalars['String']>;
  pesel?: Maybe<Scalars['bigint']>;
  telefon?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Uzytkownik_Max_Fields = {
  __typename?: 'Uzytkownik_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imie?: Maybe<Scalars['String']>;
  miasto?: Maybe<Scalars['String']>;
  nazwisko?: Maybe<Scalars['String']>;
  numer_prawa_jazdy?: Maybe<Scalars['String']>;
  pesel?: Maybe<Scalars['bigint']>;
  telefon?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Uzytkownik_Min_Fields = {
  __typename?: 'Uzytkownik_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imie?: Maybe<Scalars['String']>;
  miasto?: Maybe<Scalars['String']>;
  nazwisko?: Maybe<Scalars['String']>;
  numer_prawa_jazdy?: Maybe<Scalars['String']>;
  pesel?: Maybe<Scalars['bigint']>;
  telefon?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Uzytkownik" */
export type Uzytkownik_Mutation_Response = {
  __typename?: 'Uzytkownik_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Uzytkownik>;
};

/** input type for inserting object relation for remote table "Uzytkownik" */
export type Uzytkownik_Obj_Rel_Insert_Input = {
  data: Uzytkownik_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Uzytkownik_On_Conflict>;
};

/** on conflict condition type for table "Uzytkownik" */
export type Uzytkownik_On_Conflict = {
  constraint: Uzytkownik_Constraint;
  update_columns: Array<Uzytkownik_Update_Column>;
  where?: Maybe<Uzytkownik_Bool_Exp>;
};

/** Ordering options when selecting data from "Uzytkownik". */
export type Uzytkownik_Order_By = {
  Awaria_aggregate?: Maybe<Awaria_Aggregate_Order_By>;
  Historia_Uzytkownik_Autos_aggregate?: Maybe<Historia_Uzytkownik_Auto_Aggregate_Order_By>;
  Mandats_aggregate?: Maybe<Mandat_Aggregate_Order_By>;
  Szkodas_aggregate?: Maybe<Szkoda_Aggregate_Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imie?: Maybe<Order_By>;
  miasto?: Maybe<Order_By>;
  nazwisko?: Maybe<Order_By>;
  numer_prawa_jazdy?: Maybe<Order_By>;
  pesel?: Maybe<Order_By>;
  telefon?: Maybe<Order_By>;
};

/** primary key columns input for table: Uzytkownik */
export type Uzytkownik_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Uzytkownik" */
export enum Uzytkownik_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Imie = 'imie',
  /** column name */
  Miasto = 'miasto',
  /** column name */
  Nazwisko = 'nazwisko',
  /** column name */
  NumerPrawaJazdy = 'numer_prawa_jazdy',
  /** column name */
  Pesel = 'pesel',
  /** column name */
  Telefon = 'telefon'
}

/** input type for updating data in table "Uzytkownik" */
export type Uzytkownik_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imie?: Maybe<Scalars['String']>;
  miasto?: Maybe<Scalars['String']>;
  nazwisko?: Maybe<Scalars['String']>;
  numer_prawa_jazdy?: Maybe<Scalars['String']>;
  pesel?: Maybe<Scalars['bigint']>;
  telefon?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Uzytkownik_Stddev_Fields = {
  __typename?: 'Uzytkownik_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  pesel?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Uzytkownik_Stddev_Pop_Fields = {
  __typename?: 'Uzytkownik_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  pesel?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Uzytkownik_Stddev_Samp_Fields = {
  __typename?: 'Uzytkownik_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  pesel?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Uzytkownik_Sum_Fields = {
  __typename?: 'Uzytkownik_sum_fields';
  id?: Maybe<Scalars['Int']>;
  pesel?: Maybe<Scalars['bigint']>;
};

/** update columns of table "Uzytkownik" */
export enum Uzytkownik_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Imie = 'imie',
  /** column name */
  Miasto = 'miasto',
  /** column name */
  Nazwisko = 'nazwisko',
  /** column name */
  NumerPrawaJazdy = 'numer_prawa_jazdy',
  /** column name */
  Pesel = 'pesel',
  /** column name */
  Telefon = 'telefon'
}

/** aggregate var_pop on columns */
export type Uzytkownik_Var_Pop_Fields = {
  __typename?: 'Uzytkownik_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  pesel?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Uzytkownik_Var_Samp_Fields = {
  __typename?: 'Uzytkownik_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  pesel?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Uzytkownik_Variance_Fields = {
  __typename?: 'Uzytkownik_variance_fields';
  id?: Maybe<Scalars['Float']>;
  pesel?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};


/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Auto" */
  delete_Auto?: Maybe<Auto_Mutation_Response>;
  /** delete single row from the table: "Auto" */
  delete_Auto_by_pk?: Maybe<Auto>;
  /** delete data from the table: "Awaria" */
  delete_Awaria?: Maybe<Awaria_Mutation_Response>;
  /** delete single row from the table: "Awaria" */
  delete_Awaria_by_pk?: Maybe<Awaria>;
  /** delete data from the table: "Grupa_Aut_Klienta" */
  delete_Grupa_Aut_Klienta?: Maybe<Grupa_Aut_Klienta_Mutation_Response>;
  /** delete single row from the table: "Grupa_Aut_Klienta" */
  delete_Grupa_Aut_Klienta_by_pk?: Maybe<Grupa_Aut_Klienta>;
  /** delete data from the table: "Historia_Uzytkownik_Auto" */
  delete_Historia_Uzytkownik_Auto?: Maybe<Historia_Uzytkownik_Auto_Mutation_Response>;
  /** delete single row from the table: "Historia_Uzytkownik_Auto" */
  delete_Historia_Uzytkownik_Auto_by_pk?: Maybe<Historia_Uzytkownik_Auto>;
  /** delete data from the table: "Karta_Orlen" */
  delete_Karta_Orlen?: Maybe<Karta_Orlen_Mutation_Response>;
  /** delete single row from the table: "Karta_Orlen" */
  delete_Karta_Orlen_by_pk?: Maybe<Karta_Orlen>;
  /** delete data from the table: "Klient" */
  delete_Klient?: Maybe<Klient_Mutation_Response>;
  /** delete single row from the table: "Klient" */
  delete_Klient_by_pk?: Maybe<Klient>;
  /** delete data from the table: "Leasing" */
  delete_Leasing?: Maybe<Leasing_Mutation_Response>;
  /** delete single row from the table: "Leasing" */
  delete_Leasing_by_pk?: Maybe<Leasing>;
  /** delete data from the table: "Mandat" */
  delete_Mandat?: Maybe<Mandat_Mutation_Response>;
  /** delete single row from the table: "Mandat" */
  delete_Mandat_by_pk?: Maybe<Mandat>;
  /** delete data from the table: "Opona" */
  delete_Opona?: Maybe<Opona_Mutation_Response>;
  /** delete single row from the table: "Opona" */
  delete_Opona_by_pk?: Maybe<Opona>;
  /** delete data from the table: "Polisa" */
  delete_Polisa?: Maybe<Polisa_Mutation_Response>;
  /** delete single row from the table: "Polisa" */
  delete_Polisa_by_pk?: Maybe<Polisa>;
  /** delete data from the table: "Przebieg" */
  delete_Przebieg?: Maybe<Przebieg_Mutation_Response>;
  /** delete single row from the table: "Przebieg" */
  delete_Przebieg_by_pk?: Maybe<Przebieg>;
  /** delete data from the table: "Przeglad" */
  delete_Przeglad?: Maybe<Przeglad_Mutation_Response>;
  /** delete data from the table: "Przeglad_Koszta_Dodatkowe" */
  delete_Przeglad_Koszta_Dodatkowe?: Maybe<Przeglad_Koszta_Dodatkowe_Mutation_Response>;
  /** delete single row from the table: "Przeglad_Koszta_Dodatkowe" */
  delete_Przeglad_Koszta_Dodatkowe_by_pk?: Maybe<Przeglad_Koszta_Dodatkowe>;
  /** delete data from the table: "Przeglad_OT_Kilometry" */
  delete_Przeglad_OT_Kilometry?: Maybe<Przeglad_Ot_Kilometry_Mutation_Response>;
  /** delete single row from the table: "Przeglad_OT_Kilometry" */
  delete_Przeglad_OT_Kilometry_by_pk?: Maybe<Przeglad_Ot_Kilometry>;
  /** delete single row from the table: "Przeglad" */
  delete_Przeglad_by_pk?: Maybe<Przeglad>;
  /** delete data from the table: "Status_Awarii" */
  delete_Status_Awarii?: Maybe<Status_Awarii_Mutation_Response>;
  /** delete single row from the table: "Status_Awarii" */
  delete_Status_Awarii_by_pk?: Maybe<Status_Awarii>;
  /** delete data from the table: "Status_Szkody" */
  delete_Status_Szkody?: Maybe<Status_Szkody_Mutation_Response>;
  /** delete single row from the table: "Status_Szkody" */
  delete_Status_Szkody_by_pk?: Maybe<Status_Szkody>;
  /** delete data from the table: "Szkoda" */
  delete_Szkoda?: Maybe<Szkoda_Mutation_Response>;
  /** delete single row from the table: "Szkoda" */
  delete_Szkoda_by_pk?: Maybe<Szkoda>;
  /** delete data from the table: "Typy_Opon" */
  delete_Typy_Opon?: Maybe<Typy_Opon_Mutation_Response>;
  /** delete single row from the table: "Typy_Opon" */
  delete_Typy_Opon_by_pk?: Maybe<Typy_Opon>;
  /** delete data from the table: "Uzytkownik" */
  delete_Uzytkownik?: Maybe<Uzytkownik_Mutation_Response>;
  /** delete single row from the table: "Uzytkownik" */
  delete_Uzytkownik_by_pk?: Maybe<Uzytkownik>;
  /** insert data into the table: "Auto" */
  insert_Auto?: Maybe<Auto_Mutation_Response>;
  /** insert a single row into the table: "Auto" */
  insert_Auto_one?: Maybe<Auto>;
  /** insert data into the table: "Awaria" */
  insert_Awaria?: Maybe<Awaria_Mutation_Response>;
  /** insert a single row into the table: "Awaria" */
  insert_Awaria_one?: Maybe<Awaria>;
  /** insert data into the table: "Grupa_Aut_Klienta" */
  insert_Grupa_Aut_Klienta?: Maybe<Grupa_Aut_Klienta_Mutation_Response>;
  /** insert a single row into the table: "Grupa_Aut_Klienta" */
  insert_Grupa_Aut_Klienta_one?: Maybe<Grupa_Aut_Klienta>;
  /** insert data into the table: "Historia_Uzytkownik_Auto" */
  insert_Historia_Uzytkownik_Auto?: Maybe<Historia_Uzytkownik_Auto_Mutation_Response>;
  /** insert a single row into the table: "Historia_Uzytkownik_Auto" */
  insert_Historia_Uzytkownik_Auto_one?: Maybe<Historia_Uzytkownik_Auto>;
  /** insert data into the table: "Karta_Orlen" */
  insert_Karta_Orlen?: Maybe<Karta_Orlen_Mutation_Response>;
  /** insert a single row into the table: "Karta_Orlen" */
  insert_Karta_Orlen_one?: Maybe<Karta_Orlen>;
  /** insert data into the table: "Klient" */
  insert_Klient?: Maybe<Klient_Mutation_Response>;
  /** insert a single row into the table: "Klient" */
  insert_Klient_one?: Maybe<Klient>;
  /** insert data into the table: "Leasing" */
  insert_Leasing?: Maybe<Leasing_Mutation_Response>;
  /** insert a single row into the table: "Leasing" */
  insert_Leasing_one?: Maybe<Leasing>;
  /** insert data into the table: "Mandat" */
  insert_Mandat?: Maybe<Mandat_Mutation_Response>;
  /** insert a single row into the table: "Mandat" */
  insert_Mandat_one?: Maybe<Mandat>;
  /** insert data into the table: "Opona" */
  insert_Opona?: Maybe<Opona_Mutation_Response>;
  /** insert a single row into the table: "Opona" */
  insert_Opona_one?: Maybe<Opona>;
  /** insert data into the table: "Polisa" */
  insert_Polisa?: Maybe<Polisa_Mutation_Response>;
  /** insert a single row into the table: "Polisa" */
  insert_Polisa_one?: Maybe<Polisa>;
  /** insert data into the table: "Przebieg" */
  insert_Przebieg?: Maybe<Przebieg_Mutation_Response>;
  /** insert a single row into the table: "Przebieg" */
  insert_Przebieg_one?: Maybe<Przebieg>;
  /** insert data into the table: "Przeglad" */
  insert_Przeglad?: Maybe<Przeglad_Mutation_Response>;
  /** insert data into the table: "Przeglad_Koszta_Dodatkowe" */
  insert_Przeglad_Koszta_Dodatkowe?: Maybe<Przeglad_Koszta_Dodatkowe_Mutation_Response>;
  /** insert a single row into the table: "Przeglad_Koszta_Dodatkowe" */
  insert_Przeglad_Koszta_Dodatkowe_one?: Maybe<Przeglad_Koszta_Dodatkowe>;
  /** insert data into the table: "Przeglad_OT_Kilometry" */
  insert_Przeglad_OT_Kilometry?: Maybe<Przeglad_Ot_Kilometry_Mutation_Response>;
  /** insert a single row into the table: "Przeglad_OT_Kilometry" */
  insert_Przeglad_OT_Kilometry_one?: Maybe<Przeglad_Ot_Kilometry>;
  /** insert a single row into the table: "Przeglad" */
  insert_Przeglad_one?: Maybe<Przeglad>;
  /** insert data into the table: "Status_Awarii" */
  insert_Status_Awarii?: Maybe<Status_Awarii_Mutation_Response>;
  /** insert a single row into the table: "Status_Awarii" */
  insert_Status_Awarii_one?: Maybe<Status_Awarii>;
  /** insert data into the table: "Status_Szkody" */
  insert_Status_Szkody?: Maybe<Status_Szkody_Mutation_Response>;
  /** insert a single row into the table: "Status_Szkody" */
  insert_Status_Szkody_one?: Maybe<Status_Szkody>;
  /** insert data into the table: "Szkoda" */
  insert_Szkoda?: Maybe<Szkoda_Mutation_Response>;
  /** insert a single row into the table: "Szkoda" */
  insert_Szkoda_one?: Maybe<Szkoda>;
  /** insert data into the table: "Typy_Opon" */
  insert_Typy_Opon?: Maybe<Typy_Opon_Mutation_Response>;
  /** insert a single row into the table: "Typy_Opon" */
  insert_Typy_Opon_one?: Maybe<Typy_Opon>;
  /** insert data into the table: "Uzytkownik" */
  insert_Uzytkownik?: Maybe<Uzytkownik_Mutation_Response>;
  /** insert a single row into the table: "Uzytkownik" */
  insert_Uzytkownik_one?: Maybe<Uzytkownik>;
  /** update data of the table: "Auto" */
  update_Auto?: Maybe<Auto_Mutation_Response>;
  /** update single row of the table: "Auto" */
  update_Auto_by_pk?: Maybe<Auto>;
  /** update data of the table: "Awaria" */
  update_Awaria?: Maybe<Awaria_Mutation_Response>;
  /** update single row of the table: "Awaria" */
  update_Awaria_by_pk?: Maybe<Awaria>;
  /** update data of the table: "Grupa_Aut_Klienta" */
  update_Grupa_Aut_Klienta?: Maybe<Grupa_Aut_Klienta_Mutation_Response>;
  /** update single row of the table: "Grupa_Aut_Klienta" */
  update_Grupa_Aut_Klienta_by_pk?: Maybe<Grupa_Aut_Klienta>;
  /** update data of the table: "Historia_Uzytkownik_Auto" */
  update_Historia_Uzytkownik_Auto?: Maybe<Historia_Uzytkownik_Auto_Mutation_Response>;
  /** update single row of the table: "Historia_Uzytkownik_Auto" */
  update_Historia_Uzytkownik_Auto_by_pk?: Maybe<Historia_Uzytkownik_Auto>;
  /** update data of the table: "Karta_Orlen" */
  update_Karta_Orlen?: Maybe<Karta_Orlen_Mutation_Response>;
  /** update single row of the table: "Karta_Orlen" */
  update_Karta_Orlen_by_pk?: Maybe<Karta_Orlen>;
  /** update data of the table: "Klient" */
  update_Klient?: Maybe<Klient_Mutation_Response>;
  /** update single row of the table: "Klient" */
  update_Klient_by_pk?: Maybe<Klient>;
  /** update data of the table: "Leasing" */
  update_Leasing?: Maybe<Leasing_Mutation_Response>;
  /** update single row of the table: "Leasing" */
  update_Leasing_by_pk?: Maybe<Leasing>;
  /** update data of the table: "Mandat" */
  update_Mandat?: Maybe<Mandat_Mutation_Response>;
  /** update single row of the table: "Mandat" */
  update_Mandat_by_pk?: Maybe<Mandat>;
  /** update data of the table: "Opona" */
  update_Opona?: Maybe<Opona_Mutation_Response>;
  /** update single row of the table: "Opona" */
  update_Opona_by_pk?: Maybe<Opona>;
  /** update data of the table: "Polisa" */
  update_Polisa?: Maybe<Polisa_Mutation_Response>;
  /** update single row of the table: "Polisa" */
  update_Polisa_by_pk?: Maybe<Polisa>;
  /** update data of the table: "Przebieg" */
  update_Przebieg?: Maybe<Przebieg_Mutation_Response>;
  /** update single row of the table: "Przebieg" */
  update_Przebieg_by_pk?: Maybe<Przebieg>;
  /** update data of the table: "Przeglad" */
  update_Przeglad?: Maybe<Przeglad_Mutation_Response>;
  /** update data of the table: "Przeglad_Koszta_Dodatkowe" */
  update_Przeglad_Koszta_Dodatkowe?: Maybe<Przeglad_Koszta_Dodatkowe_Mutation_Response>;
  /** update single row of the table: "Przeglad_Koszta_Dodatkowe" */
  update_Przeglad_Koszta_Dodatkowe_by_pk?: Maybe<Przeglad_Koszta_Dodatkowe>;
  /** update data of the table: "Przeglad_OT_Kilometry" */
  update_Przeglad_OT_Kilometry?: Maybe<Przeglad_Ot_Kilometry_Mutation_Response>;
  /** update single row of the table: "Przeglad_OT_Kilometry" */
  update_Przeglad_OT_Kilometry_by_pk?: Maybe<Przeglad_Ot_Kilometry>;
  /** update single row of the table: "Przeglad" */
  update_Przeglad_by_pk?: Maybe<Przeglad>;
  /** update data of the table: "Status_Awarii" */
  update_Status_Awarii?: Maybe<Status_Awarii_Mutation_Response>;
  /** update single row of the table: "Status_Awarii" */
  update_Status_Awarii_by_pk?: Maybe<Status_Awarii>;
  /** update data of the table: "Status_Szkody" */
  update_Status_Szkody?: Maybe<Status_Szkody_Mutation_Response>;
  /** update single row of the table: "Status_Szkody" */
  update_Status_Szkody_by_pk?: Maybe<Status_Szkody>;
  /** update data of the table: "Szkoda" */
  update_Szkoda?: Maybe<Szkoda_Mutation_Response>;
  /** update single row of the table: "Szkoda" */
  update_Szkoda_by_pk?: Maybe<Szkoda>;
  /** update data of the table: "Typy_Opon" */
  update_Typy_Opon?: Maybe<Typy_Opon_Mutation_Response>;
  /** update single row of the table: "Typy_Opon" */
  update_Typy_Opon_by_pk?: Maybe<Typy_Opon>;
  /** update data of the table: "Uzytkownik" */
  update_Uzytkownik?: Maybe<Uzytkownik_Mutation_Response>;
  /** update single row of the table: "Uzytkownik" */
  update_Uzytkownik_by_pk?: Maybe<Uzytkownik>;
};


/** mutation root */
export type Mutation_RootDelete_AutoArgs = {
  where: Auto_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auto_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_AwariaArgs = {
  where: Awaria_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Awaria_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Grupa_Aut_KlientaArgs = {
  where: Grupa_Aut_Klienta_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Grupa_Aut_Klienta_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Historia_Uzytkownik_AutoArgs = {
  where: Historia_Uzytkownik_Auto_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Historia_Uzytkownik_Auto_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Karta_OrlenArgs = {
  where: Karta_Orlen_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Karta_Orlen_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_KlientArgs = {
  where: Klient_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Klient_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_LeasingArgs = {
  where: Leasing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Leasing_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MandatArgs = {
  where: Mandat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Mandat_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OponaArgs = {
  where: Opona_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Opona_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PolisaArgs = {
  where: Polisa_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Polisa_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PrzebiegArgs = {
  where: Przebieg_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Przebieg_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PrzegladArgs = {
  where: Przeglad_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Przeglad_Koszta_DodatkoweArgs = {
  where: Przeglad_Koszta_Dodatkowe_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Przeglad_Koszta_Dodatkowe_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Przeglad_Ot_KilometryArgs = {
  where: Przeglad_Ot_Kilometry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Przeglad_Ot_Kilometry_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Przeglad_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Status_AwariiArgs = {
  where: Status_Awarii_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Status_Awarii_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Status_SzkodyArgs = {
  where: Status_Szkody_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Status_Szkody_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_SzkodaArgs = {
  where: Szkoda_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Szkoda_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Typy_OponArgs = {
  where: Typy_Opon_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Typy_Opon_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UzytkownikArgs = {
  where: Uzytkownik_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Uzytkownik_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_AutoArgs = {
  objects: Array<Auto_Insert_Input>;
  on_conflict?: Maybe<Auto_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auto_OneArgs = {
  object: Auto_Insert_Input;
  on_conflict?: Maybe<Auto_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AwariaArgs = {
  objects: Array<Awaria_Insert_Input>;
  on_conflict?: Maybe<Awaria_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Awaria_OneArgs = {
  object: Awaria_Insert_Input;
  on_conflict?: Maybe<Awaria_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Grupa_Aut_KlientaArgs = {
  objects: Array<Grupa_Aut_Klienta_Insert_Input>;
  on_conflict?: Maybe<Grupa_Aut_Klienta_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Grupa_Aut_Klienta_OneArgs = {
  object: Grupa_Aut_Klienta_Insert_Input;
  on_conflict?: Maybe<Grupa_Aut_Klienta_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Historia_Uzytkownik_AutoArgs = {
  objects: Array<Historia_Uzytkownik_Auto_Insert_Input>;
  on_conflict?: Maybe<Historia_Uzytkownik_Auto_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Historia_Uzytkownik_Auto_OneArgs = {
  object: Historia_Uzytkownik_Auto_Insert_Input;
  on_conflict?: Maybe<Historia_Uzytkownik_Auto_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Karta_OrlenArgs = {
  objects: Array<Karta_Orlen_Insert_Input>;
  on_conflict?: Maybe<Karta_Orlen_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Karta_Orlen_OneArgs = {
  object: Karta_Orlen_Insert_Input;
  on_conflict?: Maybe<Karta_Orlen_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_KlientArgs = {
  objects: Array<Klient_Insert_Input>;
  on_conflict?: Maybe<Klient_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Klient_OneArgs = {
  object: Klient_Insert_Input;
  on_conflict?: Maybe<Klient_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LeasingArgs = {
  objects: Array<Leasing_Insert_Input>;
  on_conflict?: Maybe<Leasing_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Leasing_OneArgs = {
  object: Leasing_Insert_Input;
  on_conflict?: Maybe<Leasing_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MandatArgs = {
  objects: Array<Mandat_Insert_Input>;
  on_conflict?: Maybe<Mandat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Mandat_OneArgs = {
  object: Mandat_Insert_Input;
  on_conflict?: Maybe<Mandat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OponaArgs = {
  objects: Array<Opona_Insert_Input>;
  on_conflict?: Maybe<Opona_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Opona_OneArgs = {
  object: Opona_Insert_Input;
  on_conflict?: Maybe<Opona_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PolisaArgs = {
  objects: Array<Polisa_Insert_Input>;
  on_conflict?: Maybe<Polisa_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Polisa_OneArgs = {
  object: Polisa_Insert_Input;
  on_conflict?: Maybe<Polisa_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PrzebiegArgs = {
  objects: Array<Przebieg_Insert_Input>;
  on_conflict?: Maybe<Przebieg_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Przebieg_OneArgs = {
  object: Przebieg_Insert_Input;
  on_conflict?: Maybe<Przebieg_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PrzegladArgs = {
  objects: Array<Przeglad_Insert_Input>;
  on_conflict?: Maybe<Przeglad_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Przeglad_Koszta_DodatkoweArgs = {
  objects: Array<Przeglad_Koszta_Dodatkowe_Insert_Input>;
  on_conflict?: Maybe<Przeglad_Koszta_Dodatkowe_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Przeglad_Koszta_Dodatkowe_OneArgs = {
  object: Przeglad_Koszta_Dodatkowe_Insert_Input;
  on_conflict?: Maybe<Przeglad_Koszta_Dodatkowe_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Przeglad_Ot_KilometryArgs = {
  objects: Array<Przeglad_Ot_Kilometry_Insert_Input>;
  on_conflict?: Maybe<Przeglad_Ot_Kilometry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Przeglad_Ot_Kilometry_OneArgs = {
  object: Przeglad_Ot_Kilometry_Insert_Input;
  on_conflict?: Maybe<Przeglad_Ot_Kilometry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Przeglad_OneArgs = {
  object: Przeglad_Insert_Input;
  on_conflict?: Maybe<Przeglad_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Status_AwariiArgs = {
  objects: Array<Status_Awarii_Insert_Input>;
  on_conflict?: Maybe<Status_Awarii_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Status_Awarii_OneArgs = {
  object: Status_Awarii_Insert_Input;
  on_conflict?: Maybe<Status_Awarii_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Status_SzkodyArgs = {
  objects: Array<Status_Szkody_Insert_Input>;
  on_conflict?: Maybe<Status_Szkody_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Status_Szkody_OneArgs = {
  object: Status_Szkody_Insert_Input;
  on_conflict?: Maybe<Status_Szkody_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SzkodaArgs = {
  objects: Array<Szkoda_Insert_Input>;
  on_conflict?: Maybe<Szkoda_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Szkoda_OneArgs = {
  object: Szkoda_Insert_Input;
  on_conflict?: Maybe<Szkoda_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Typy_OponArgs = {
  objects: Array<Typy_Opon_Insert_Input>;
  on_conflict?: Maybe<Typy_Opon_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Typy_Opon_OneArgs = {
  object: Typy_Opon_Insert_Input;
  on_conflict?: Maybe<Typy_Opon_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UzytkownikArgs = {
  objects: Array<Uzytkownik_Insert_Input>;
  on_conflict?: Maybe<Uzytkownik_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Uzytkownik_OneArgs = {
  object: Uzytkownik_Insert_Input;
  on_conflict?: Maybe<Uzytkownik_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AutoArgs = {
  _inc?: Maybe<Auto_Inc_Input>;
  _set?: Maybe<Auto_Set_Input>;
  where: Auto_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auto_By_PkArgs = {
  _inc?: Maybe<Auto_Inc_Input>;
  _set?: Maybe<Auto_Set_Input>;
  pk_columns: Auto_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AwariaArgs = {
  _inc?: Maybe<Awaria_Inc_Input>;
  _set?: Maybe<Awaria_Set_Input>;
  where: Awaria_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Awaria_By_PkArgs = {
  _inc?: Maybe<Awaria_Inc_Input>;
  _set?: Maybe<Awaria_Set_Input>;
  pk_columns: Awaria_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Grupa_Aut_KlientaArgs = {
  _inc?: Maybe<Grupa_Aut_Klienta_Inc_Input>;
  _set?: Maybe<Grupa_Aut_Klienta_Set_Input>;
  where: Grupa_Aut_Klienta_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Grupa_Aut_Klienta_By_PkArgs = {
  _inc?: Maybe<Grupa_Aut_Klienta_Inc_Input>;
  _set?: Maybe<Grupa_Aut_Klienta_Set_Input>;
  pk_columns: Grupa_Aut_Klienta_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Historia_Uzytkownik_AutoArgs = {
  _inc?: Maybe<Historia_Uzytkownik_Auto_Inc_Input>;
  _set?: Maybe<Historia_Uzytkownik_Auto_Set_Input>;
  where: Historia_Uzytkownik_Auto_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Historia_Uzytkownik_Auto_By_PkArgs = {
  _inc?: Maybe<Historia_Uzytkownik_Auto_Inc_Input>;
  _set?: Maybe<Historia_Uzytkownik_Auto_Set_Input>;
  pk_columns: Historia_Uzytkownik_Auto_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Karta_OrlenArgs = {
  _inc?: Maybe<Karta_Orlen_Inc_Input>;
  _set?: Maybe<Karta_Orlen_Set_Input>;
  where: Karta_Orlen_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Karta_Orlen_By_PkArgs = {
  _inc?: Maybe<Karta_Orlen_Inc_Input>;
  _set?: Maybe<Karta_Orlen_Set_Input>;
  pk_columns: Karta_Orlen_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_KlientArgs = {
  _inc?: Maybe<Klient_Inc_Input>;
  _set?: Maybe<Klient_Set_Input>;
  where: Klient_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Klient_By_PkArgs = {
  _inc?: Maybe<Klient_Inc_Input>;
  _set?: Maybe<Klient_Set_Input>;
  pk_columns: Klient_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LeasingArgs = {
  _inc?: Maybe<Leasing_Inc_Input>;
  _set?: Maybe<Leasing_Set_Input>;
  where: Leasing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Leasing_By_PkArgs = {
  _inc?: Maybe<Leasing_Inc_Input>;
  _set?: Maybe<Leasing_Set_Input>;
  pk_columns: Leasing_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MandatArgs = {
  _inc?: Maybe<Mandat_Inc_Input>;
  _set?: Maybe<Mandat_Set_Input>;
  where: Mandat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Mandat_By_PkArgs = {
  _inc?: Maybe<Mandat_Inc_Input>;
  _set?: Maybe<Mandat_Set_Input>;
  pk_columns: Mandat_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OponaArgs = {
  _inc?: Maybe<Opona_Inc_Input>;
  _set?: Maybe<Opona_Set_Input>;
  where: Opona_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Opona_By_PkArgs = {
  _inc?: Maybe<Opona_Inc_Input>;
  _set?: Maybe<Opona_Set_Input>;
  pk_columns: Opona_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PolisaArgs = {
  _inc?: Maybe<Polisa_Inc_Input>;
  _set?: Maybe<Polisa_Set_Input>;
  where: Polisa_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Polisa_By_PkArgs = {
  _inc?: Maybe<Polisa_Inc_Input>;
  _set?: Maybe<Polisa_Set_Input>;
  pk_columns: Polisa_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PrzebiegArgs = {
  _inc?: Maybe<Przebieg_Inc_Input>;
  _set?: Maybe<Przebieg_Set_Input>;
  where: Przebieg_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Przebieg_By_PkArgs = {
  _inc?: Maybe<Przebieg_Inc_Input>;
  _set?: Maybe<Przebieg_Set_Input>;
  pk_columns: Przebieg_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PrzegladArgs = {
  _inc?: Maybe<Przeglad_Inc_Input>;
  _set?: Maybe<Przeglad_Set_Input>;
  where: Przeglad_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Przeglad_Koszta_DodatkoweArgs = {
  _inc?: Maybe<Przeglad_Koszta_Dodatkowe_Inc_Input>;
  _set?: Maybe<Przeglad_Koszta_Dodatkowe_Set_Input>;
  where: Przeglad_Koszta_Dodatkowe_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Przeglad_Koszta_Dodatkowe_By_PkArgs = {
  _inc?: Maybe<Przeglad_Koszta_Dodatkowe_Inc_Input>;
  _set?: Maybe<Przeglad_Koszta_Dodatkowe_Set_Input>;
  pk_columns: Przeglad_Koszta_Dodatkowe_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Przeglad_Ot_KilometryArgs = {
  _inc?: Maybe<Przeglad_Ot_Kilometry_Inc_Input>;
  _set?: Maybe<Przeglad_Ot_Kilometry_Set_Input>;
  where: Przeglad_Ot_Kilometry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Przeglad_Ot_Kilometry_By_PkArgs = {
  _inc?: Maybe<Przeglad_Ot_Kilometry_Inc_Input>;
  _set?: Maybe<Przeglad_Ot_Kilometry_Set_Input>;
  pk_columns: Przeglad_Ot_Kilometry_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Przeglad_By_PkArgs = {
  _inc?: Maybe<Przeglad_Inc_Input>;
  _set?: Maybe<Przeglad_Set_Input>;
  pk_columns: Przeglad_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Status_AwariiArgs = {
  _inc?: Maybe<Status_Awarii_Inc_Input>;
  _set?: Maybe<Status_Awarii_Set_Input>;
  where: Status_Awarii_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Status_Awarii_By_PkArgs = {
  _inc?: Maybe<Status_Awarii_Inc_Input>;
  _set?: Maybe<Status_Awarii_Set_Input>;
  pk_columns: Status_Awarii_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Status_SzkodyArgs = {
  _inc?: Maybe<Status_Szkody_Inc_Input>;
  _set?: Maybe<Status_Szkody_Set_Input>;
  where: Status_Szkody_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Status_Szkody_By_PkArgs = {
  _inc?: Maybe<Status_Szkody_Inc_Input>;
  _set?: Maybe<Status_Szkody_Set_Input>;
  pk_columns: Status_Szkody_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SzkodaArgs = {
  _inc?: Maybe<Szkoda_Inc_Input>;
  _set?: Maybe<Szkoda_Set_Input>;
  where: Szkoda_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Szkoda_By_PkArgs = {
  _inc?: Maybe<Szkoda_Inc_Input>;
  _set?: Maybe<Szkoda_Set_Input>;
  pk_columns: Szkoda_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Typy_OponArgs = {
  _inc?: Maybe<Typy_Opon_Inc_Input>;
  _set?: Maybe<Typy_Opon_Set_Input>;
  where: Typy_Opon_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Typy_Opon_By_PkArgs = {
  _inc?: Maybe<Typy_Opon_Inc_Input>;
  _set?: Maybe<Typy_Opon_Set_Input>;
  pk_columns: Typy_Opon_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UzytkownikArgs = {
  _inc?: Maybe<Uzytkownik_Inc_Input>;
  _set?: Maybe<Uzytkownik_Set_Input>;
  where: Uzytkownik_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Uzytkownik_By_PkArgs = {
  _inc?: Maybe<Uzytkownik_Inc_Input>;
  _set?: Maybe<Uzytkownik_Set_Input>;
  pk_columns: Uzytkownik_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Auto" */
  Auto: Array<Auto>;
  /** fetch aggregated fields from the table: "Auto" */
  Auto_aggregate: Auto_Aggregate;
  /** fetch data from the table: "Auto" using primary key columns */
  Auto_by_pk?: Maybe<Auto>;
  /** fetch data from the table: "Awaria" */
  Awaria: Array<Awaria>;
  /** fetch aggregated fields from the table: "Awaria" */
  Awaria_aggregate: Awaria_Aggregate;
  /** fetch data from the table: "Awaria" using primary key columns */
  Awaria_by_pk?: Maybe<Awaria>;
  /** fetch data from the table: "Grupa_Aut_Klienta" */
  Grupa_Aut_Klienta: Array<Grupa_Aut_Klienta>;
  /** fetch aggregated fields from the table: "Grupa_Aut_Klienta" */
  Grupa_Aut_Klienta_aggregate: Grupa_Aut_Klienta_Aggregate;
  /** fetch data from the table: "Grupa_Aut_Klienta" using primary key columns */
  Grupa_Aut_Klienta_by_pk?: Maybe<Grupa_Aut_Klienta>;
  /** fetch data from the table: "Historia_Uzytkownik_Auto" */
  Historia_Uzytkownik_Auto: Array<Historia_Uzytkownik_Auto>;
  /** fetch aggregated fields from the table: "Historia_Uzytkownik_Auto" */
  Historia_Uzytkownik_Auto_aggregate: Historia_Uzytkownik_Auto_Aggregate;
  /** fetch data from the table: "Historia_Uzytkownik_Auto" using primary key columns */
  Historia_Uzytkownik_Auto_by_pk?: Maybe<Historia_Uzytkownik_Auto>;
  /** fetch data from the table: "Karta_Orlen" */
  Karta_Orlen: Array<Karta_Orlen>;
  /** fetch aggregated fields from the table: "Karta_Orlen" */
  Karta_Orlen_aggregate: Karta_Orlen_Aggregate;
  /** fetch data from the table: "Karta_Orlen" using primary key columns */
  Karta_Orlen_by_pk?: Maybe<Karta_Orlen>;
  /** fetch data from the table: "Klient" */
  Klient: Array<Klient>;
  /** fetch aggregated fields from the table: "Klient" */
  Klient_aggregate: Klient_Aggregate;
  /** fetch data from the table: "Klient" using primary key columns */
  Klient_by_pk?: Maybe<Klient>;
  /** fetch data from the table: "Leasing" */
  Leasing: Array<Leasing>;
  /** fetch aggregated fields from the table: "Leasing" */
  Leasing_aggregate: Leasing_Aggregate;
  /** fetch data from the table: "Leasing" using primary key columns */
  Leasing_by_pk?: Maybe<Leasing>;
  /** fetch data from the table: "Mandat" */
  Mandat: Array<Mandat>;
  /** fetch aggregated fields from the table: "Mandat" */
  Mandat_aggregate: Mandat_Aggregate;
  /** fetch data from the table: "Mandat" using primary key columns */
  Mandat_by_pk?: Maybe<Mandat>;
  /** fetch data from the table: "Opona" */
  Opona: Array<Opona>;
  /** fetch aggregated fields from the table: "Opona" */
  Opona_aggregate: Opona_Aggregate;
  /** fetch data from the table: "Opona" using primary key columns */
  Opona_by_pk?: Maybe<Opona>;
  /** fetch data from the table: "Polisa" */
  Polisa: Array<Polisa>;
  /** fetch aggregated fields from the table: "Polisa" */
  Polisa_aggregate: Polisa_Aggregate;
  /** fetch data from the table: "Polisa" using primary key columns */
  Polisa_by_pk?: Maybe<Polisa>;
  /** fetch data from the table: "Przebieg" */
  Przebieg: Array<Przebieg>;
  /** fetch aggregated fields from the table: "Przebieg" */
  Przebieg_aggregate: Przebieg_Aggregate;
  /** fetch data from the table: "Przebieg" using primary key columns */
  Przebieg_by_pk?: Maybe<Przebieg>;
  /** fetch data from the table: "Przeglad" */
  Przeglad: Array<Przeglad>;
  /** fetch data from the table: "Przeglad_Koszta_Dodatkowe" */
  Przeglad_Koszta_Dodatkowe: Array<Przeglad_Koszta_Dodatkowe>;
  /** fetch aggregated fields from the table: "Przeglad_Koszta_Dodatkowe" */
  Przeglad_Koszta_Dodatkowe_aggregate: Przeglad_Koszta_Dodatkowe_Aggregate;
  /** fetch data from the table: "Przeglad_Koszta_Dodatkowe" using primary key columns */
  Przeglad_Koszta_Dodatkowe_by_pk?: Maybe<Przeglad_Koszta_Dodatkowe>;
  /** fetch data from the table: "Przeglad_OT_Kilometry" */
  Przeglad_OT_Kilometry: Array<Przeglad_Ot_Kilometry>;
  /** fetch aggregated fields from the table: "Przeglad_OT_Kilometry" */
  Przeglad_OT_Kilometry_aggregate: Przeglad_Ot_Kilometry_Aggregate;
  /** fetch data from the table: "Przeglad_OT_Kilometry" using primary key columns */
  Przeglad_OT_Kilometry_by_pk?: Maybe<Przeglad_Ot_Kilometry>;
  /** fetch aggregated fields from the table: "Przeglad" */
  Przeglad_aggregate: Przeglad_Aggregate;
  /** fetch data from the table: "Przeglad" using primary key columns */
  Przeglad_by_pk?: Maybe<Przeglad>;
  /** fetch data from the table: "Status_Awarii" */
  Status_Awarii: Array<Status_Awarii>;
  /** fetch aggregated fields from the table: "Status_Awarii" */
  Status_Awarii_aggregate: Status_Awarii_Aggregate;
  /** fetch data from the table: "Status_Awarii" using primary key columns */
  Status_Awarii_by_pk?: Maybe<Status_Awarii>;
  /** fetch data from the table: "Status_Szkody" */
  Status_Szkody: Array<Status_Szkody>;
  /** fetch aggregated fields from the table: "Status_Szkody" */
  Status_Szkody_aggregate: Status_Szkody_Aggregate;
  /** fetch data from the table: "Status_Szkody" using primary key columns */
  Status_Szkody_by_pk?: Maybe<Status_Szkody>;
  /** fetch data from the table: "Szkoda" */
  Szkoda: Array<Szkoda>;
  /** fetch aggregated fields from the table: "Szkoda" */
  Szkoda_aggregate: Szkoda_Aggregate;
  /** fetch data from the table: "Szkoda" using primary key columns */
  Szkoda_by_pk?: Maybe<Szkoda>;
  /** fetch data from the table: "Typy_Opon" */
  Typy_Opon: Array<Typy_Opon>;
  /** fetch aggregated fields from the table: "Typy_Opon" */
  Typy_Opon_aggregate: Typy_Opon_Aggregate;
  /** fetch data from the table: "Typy_Opon" using primary key columns */
  Typy_Opon_by_pk?: Maybe<Typy_Opon>;
  /** fetch data from the table: "Uzytkownik" */
  Uzytkownik: Array<Uzytkownik>;
  /** fetch aggregated fields from the table: "Uzytkownik" */
  Uzytkownik_aggregate: Uzytkownik_Aggregate;
  /** fetch data from the table: "Uzytkownik" using primary key columns */
  Uzytkownik_by_pk?: Maybe<Uzytkownik>;
};


export type Query_RootAutoArgs = {
  distinct_on?: Maybe<Array<Auto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auto_Order_By>>;
  where?: Maybe<Auto_Bool_Exp>;
};


export type Query_RootAuto_AggregateArgs = {
  distinct_on?: Maybe<Array<Auto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auto_Order_By>>;
  where?: Maybe<Auto_Bool_Exp>;
};


export type Query_RootAuto_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAwariaArgs = {
  distinct_on?: Maybe<Array<Awaria_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Awaria_Order_By>>;
  where?: Maybe<Awaria_Bool_Exp>;
};


export type Query_RootAwaria_AggregateArgs = {
  distinct_on?: Maybe<Array<Awaria_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Awaria_Order_By>>;
  where?: Maybe<Awaria_Bool_Exp>;
};


export type Query_RootAwaria_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootGrupa_Aut_KlientaArgs = {
  distinct_on?: Maybe<Array<Grupa_Aut_Klienta_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grupa_Aut_Klienta_Order_By>>;
  where?: Maybe<Grupa_Aut_Klienta_Bool_Exp>;
};


export type Query_RootGrupa_Aut_Klienta_AggregateArgs = {
  distinct_on?: Maybe<Array<Grupa_Aut_Klienta_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grupa_Aut_Klienta_Order_By>>;
  where?: Maybe<Grupa_Aut_Klienta_Bool_Exp>;
};


export type Query_RootGrupa_Aut_Klienta_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootHistoria_Uzytkownik_AutoArgs = {
  distinct_on?: Maybe<Array<Historia_Uzytkownik_Auto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Historia_Uzytkownik_Auto_Order_By>>;
  where?: Maybe<Historia_Uzytkownik_Auto_Bool_Exp>;
};


export type Query_RootHistoria_Uzytkownik_Auto_AggregateArgs = {
  distinct_on?: Maybe<Array<Historia_Uzytkownik_Auto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Historia_Uzytkownik_Auto_Order_By>>;
  where?: Maybe<Historia_Uzytkownik_Auto_Bool_Exp>;
};


export type Query_RootHistoria_Uzytkownik_Auto_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootKarta_OrlenArgs = {
  distinct_on?: Maybe<Array<Karta_Orlen_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Karta_Orlen_Order_By>>;
  where?: Maybe<Karta_Orlen_Bool_Exp>;
};


export type Query_RootKarta_Orlen_AggregateArgs = {
  distinct_on?: Maybe<Array<Karta_Orlen_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Karta_Orlen_Order_By>>;
  where?: Maybe<Karta_Orlen_Bool_Exp>;
};


export type Query_RootKarta_Orlen_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootKlientArgs = {
  distinct_on?: Maybe<Array<Klient_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Klient_Order_By>>;
  where?: Maybe<Klient_Bool_Exp>;
};


export type Query_RootKlient_AggregateArgs = {
  distinct_on?: Maybe<Array<Klient_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Klient_Order_By>>;
  where?: Maybe<Klient_Bool_Exp>;
};


export type Query_RootKlient_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootLeasingArgs = {
  distinct_on?: Maybe<Array<Leasing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Leasing_Order_By>>;
  where?: Maybe<Leasing_Bool_Exp>;
};


export type Query_RootLeasing_AggregateArgs = {
  distinct_on?: Maybe<Array<Leasing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Leasing_Order_By>>;
  where?: Maybe<Leasing_Bool_Exp>;
};


export type Query_RootLeasing_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMandatArgs = {
  distinct_on?: Maybe<Array<Mandat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mandat_Order_By>>;
  where?: Maybe<Mandat_Bool_Exp>;
};


export type Query_RootMandat_AggregateArgs = {
  distinct_on?: Maybe<Array<Mandat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mandat_Order_By>>;
  where?: Maybe<Mandat_Bool_Exp>;
};


export type Query_RootMandat_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOponaArgs = {
  distinct_on?: Maybe<Array<Opona_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Opona_Order_By>>;
  where?: Maybe<Opona_Bool_Exp>;
};


export type Query_RootOpona_AggregateArgs = {
  distinct_on?: Maybe<Array<Opona_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Opona_Order_By>>;
  where?: Maybe<Opona_Bool_Exp>;
};


export type Query_RootOpona_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPolisaArgs = {
  distinct_on?: Maybe<Array<Polisa_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Polisa_Order_By>>;
  where?: Maybe<Polisa_Bool_Exp>;
};


export type Query_RootPolisa_AggregateArgs = {
  distinct_on?: Maybe<Array<Polisa_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Polisa_Order_By>>;
  where?: Maybe<Polisa_Bool_Exp>;
};


export type Query_RootPolisa_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPrzebiegArgs = {
  distinct_on?: Maybe<Array<Przebieg_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przebieg_Order_By>>;
  where?: Maybe<Przebieg_Bool_Exp>;
};


export type Query_RootPrzebieg_AggregateArgs = {
  distinct_on?: Maybe<Array<Przebieg_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przebieg_Order_By>>;
  where?: Maybe<Przebieg_Bool_Exp>;
};


export type Query_RootPrzebieg_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPrzegladArgs = {
  distinct_on?: Maybe<Array<Przeglad_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Order_By>>;
  where?: Maybe<Przeglad_Bool_Exp>;
};


export type Query_RootPrzeglad_Koszta_DodatkoweArgs = {
  distinct_on?: Maybe<Array<Przeglad_Koszta_Dodatkowe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Koszta_Dodatkowe_Order_By>>;
  where?: Maybe<Przeglad_Koszta_Dodatkowe_Bool_Exp>;
};


export type Query_RootPrzeglad_Koszta_Dodatkowe_AggregateArgs = {
  distinct_on?: Maybe<Array<Przeglad_Koszta_Dodatkowe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Koszta_Dodatkowe_Order_By>>;
  where?: Maybe<Przeglad_Koszta_Dodatkowe_Bool_Exp>;
};


export type Query_RootPrzeglad_Koszta_Dodatkowe_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPrzeglad_Ot_KilometryArgs = {
  distinct_on?: Maybe<Array<Przeglad_Ot_Kilometry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Ot_Kilometry_Order_By>>;
  where?: Maybe<Przeglad_Ot_Kilometry_Bool_Exp>;
};


export type Query_RootPrzeglad_Ot_Kilometry_AggregateArgs = {
  distinct_on?: Maybe<Array<Przeglad_Ot_Kilometry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Ot_Kilometry_Order_By>>;
  where?: Maybe<Przeglad_Ot_Kilometry_Bool_Exp>;
};


export type Query_RootPrzeglad_Ot_Kilometry_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPrzeglad_AggregateArgs = {
  distinct_on?: Maybe<Array<Przeglad_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Order_By>>;
  where?: Maybe<Przeglad_Bool_Exp>;
};


export type Query_RootPrzeglad_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootStatus_AwariiArgs = {
  distinct_on?: Maybe<Array<Status_Awarii_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Awarii_Order_By>>;
  where?: Maybe<Status_Awarii_Bool_Exp>;
};


export type Query_RootStatus_Awarii_AggregateArgs = {
  distinct_on?: Maybe<Array<Status_Awarii_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Awarii_Order_By>>;
  where?: Maybe<Status_Awarii_Bool_Exp>;
};


export type Query_RootStatus_Awarii_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootStatus_SzkodyArgs = {
  distinct_on?: Maybe<Array<Status_Szkody_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Szkody_Order_By>>;
  where?: Maybe<Status_Szkody_Bool_Exp>;
};


export type Query_RootStatus_Szkody_AggregateArgs = {
  distinct_on?: Maybe<Array<Status_Szkody_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Szkody_Order_By>>;
  where?: Maybe<Status_Szkody_Bool_Exp>;
};


export type Query_RootStatus_Szkody_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSzkodaArgs = {
  distinct_on?: Maybe<Array<Szkoda_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Szkoda_Order_By>>;
  where?: Maybe<Szkoda_Bool_Exp>;
};


export type Query_RootSzkoda_AggregateArgs = {
  distinct_on?: Maybe<Array<Szkoda_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Szkoda_Order_By>>;
  where?: Maybe<Szkoda_Bool_Exp>;
};


export type Query_RootSzkoda_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTypy_OponArgs = {
  distinct_on?: Maybe<Array<Typy_Opon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Typy_Opon_Order_By>>;
  where?: Maybe<Typy_Opon_Bool_Exp>;
};


export type Query_RootTypy_Opon_AggregateArgs = {
  distinct_on?: Maybe<Array<Typy_Opon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Typy_Opon_Order_By>>;
  where?: Maybe<Typy_Opon_Bool_Exp>;
};


export type Query_RootTypy_Opon_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUzytkownikArgs = {
  distinct_on?: Maybe<Array<Uzytkownik_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Uzytkownik_Order_By>>;
  where?: Maybe<Uzytkownik_Bool_Exp>;
};


export type Query_RootUzytkownik_AggregateArgs = {
  distinct_on?: Maybe<Array<Uzytkownik_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Uzytkownik_Order_By>>;
  where?: Maybe<Uzytkownik_Bool_Exp>;
};


export type Query_RootUzytkownik_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Auto" */
  Auto: Array<Auto>;
  /** fetch aggregated fields from the table: "Auto" */
  Auto_aggregate: Auto_Aggregate;
  /** fetch data from the table: "Auto" using primary key columns */
  Auto_by_pk?: Maybe<Auto>;
  /** fetch data from the table: "Awaria" */
  Awaria: Array<Awaria>;
  /** fetch aggregated fields from the table: "Awaria" */
  Awaria_aggregate: Awaria_Aggregate;
  /** fetch data from the table: "Awaria" using primary key columns */
  Awaria_by_pk?: Maybe<Awaria>;
  /** fetch data from the table: "Grupa_Aut_Klienta" */
  Grupa_Aut_Klienta: Array<Grupa_Aut_Klienta>;
  /** fetch aggregated fields from the table: "Grupa_Aut_Klienta" */
  Grupa_Aut_Klienta_aggregate: Grupa_Aut_Klienta_Aggregate;
  /** fetch data from the table: "Grupa_Aut_Klienta" using primary key columns */
  Grupa_Aut_Klienta_by_pk?: Maybe<Grupa_Aut_Klienta>;
  /** fetch data from the table: "Historia_Uzytkownik_Auto" */
  Historia_Uzytkownik_Auto: Array<Historia_Uzytkownik_Auto>;
  /** fetch aggregated fields from the table: "Historia_Uzytkownik_Auto" */
  Historia_Uzytkownik_Auto_aggregate: Historia_Uzytkownik_Auto_Aggregate;
  /** fetch data from the table: "Historia_Uzytkownik_Auto" using primary key columns */
  Historia_Uzytkownik_Auto_by_pk?: Maybe<Historia_Uzytkownik_Auto>;
  /** fetch data from the table: "Karta_Orlen" */
  Karta_Orlen: Array<Karta_Orlen>;
  /** fetch aggregated fields from the table: "Karta_Orlen" */
  Karta_Orlen_aggregate: Karta_Orlen_Aggregate;
  /** fetch data from the table: "Karta_Orlen" using primary key columns */
  Karta_Orlen_by_pk?: Maybe<Karta_Orlen>;
  /** fetch data from the table: "Klient" */
  Klient: Array<Klient>;
  /** fetch aggregated fields from the table: "Klient" */
  Klient_aggregate: Klient_Aggregate;
  /** fetch data from the table: "Klient" using primary key columns */
  Klient_by_pk?: Maybe<Klient>;
  /** fetch data from the table: "Leasing" */
  Leasing: Array<Leasing>;
  /** fetch aggregated fields from the table: "Leasing" */
  Leasing_aggregate: Leasing_Aggregate;
  /** fetch data from the table: "Leasing" using primary key columns */
  Leasing_by_pk?: Maybe<Leasing>;
  /** fetch data from the table: "Mandat" */
  Mandat: Array<Mandat>;
  /** fetch aggregated fields from the table: "Mandat" */
  Mandat_aggregate: Mandat_Aggregate;
  /** fetch data from the table: "Mandat" using primary key columns */
  Mandat_by_pk?: Maybe<Mandat>;
  /** fetch data from the table: "Opona" */
  Opona: Array<Opona>;
  /** fetch aggregated fields from the table: "Opona" */
  Opona_aggregate: Opona_Aggregate;
  /** fetch data from the table: "Opona" using primary key columns */
  Opona_by_pk?: Maybe<Opona>;
  /** fetch data from the table: "Polisa" */
  Polisa: Array<Polisa>;
  /** fetch aggregated fields from the table: "Polisa" */
  Polisa_aggregate: Polisa_Aggregate;
  /** fetch data from the table: "Polisa" using primary key columns */
  Polisa_by_pk?: Maybe<Polisa>;
  /** fetch data from the table: "Przebieg" */
  Przebieg: Array<Przebieg>;
  /** fetch aggregated fields from the table: "Przebieg" */
  Przebieg_aggregate: Przebieg_Aggregate;
  /** fetch data from the table: "Przebieg" using primary key columns */
  Przebieg_by_pk?: Maybe<Przebieg>;
  /** fetch data from the table: "Przeglad" */
  Przeglad: Array<Przeglad>;
  /** fetch data from the table: "Przeglad_Koszta_Dodatkowe" */
  Przeglad_Koszta_Dodatkowe: Array<Przeglad_Koszta_Dodatkowe>;
  /** fetch aggregated fields from the table: "Przeglad_Koszta_Dodatkowe" */
  Przeglad_Koszta_Dodatkowe_aggregate: Przeglad_Koszta_Dodatkowe_Aggregate;
  /** fetch data from the table: "Przeglad_Koszta_Dodatkowe" using primary key columns */
  Przeglad_Koszta_Dodatkowe_by_pk?: Maybe<Przeglad_Koszta_Dodatkowe>;
  /** fetch data from the table: "Przeglad_OT_Kilometry" */
  Przeglad_OT_Kilometry: Array<Przeglad_Ot_Kilometry>;
  /** fetch aggregated fields from the table: "Przeglad_OT_Kilometry" */
  Przeglad_OT_Kilometry_aggregate: Przeglad_Ot_Kilometry_Aggregate;
  /** fetch data from the table: "Przeglad_OT_Kilometry" using primary key columns */
  Przeglad_OT_Kilometry_by_pk?: Maybe<Przeglad_Ot_Kilometry>;
  /** fetch aggregated fields from the table: "Przeglad" */
  Przeglad_aggregate: Przeglad_Aggregate;
  /** fetch data from the table: "Przeglad" using primary key columns */
  Przeglad_by_pk?: Maybe<Przeglad>;
  /** fetch data from the table: "Status_Awarii" */
  Status_Awarii: Array<Status_Awarii>;
  /** fetch aggregated fields from the table: "Status_Awarii" */
  Status_Awarii_aggregate: Status_Awarii_Aggregate;
  /** fetch data from the table: "Status_Awarii" using primary key columns */
  Status_Awarii_by_pk?: Maybe<Status_Awarii>;
  /** fetch data from the table: "Status_Szkody" */
  Status_Szkody: Array<Status_Szkody>;
  /** fetch aggregated fields from the table: "Status_Szkody" */
  Status_Szkody_aggregate: Status_Szkody_Aggregate;
  /** fetch data from the table: "Status_Szkody" using primary key columns */
  Status_Szkody_by_pk?: Maybe<Status_Szkody>;
  /** fetch data from the table: "Szkoda" */
  Szkoda: Array<Szkoda>;
  /** fetch aggregated fields from the table: "Szkoda" */
  Szkoda_aggregate: Szkoda_Aggregate;
  /** fetch data from the table: "Szkoda" using primary key columns */
  Szkoda_by_pk?: Maybe<Szkoda>;
  /** fetch data from the table: "Typy_Opon" */
  Typy_Opon: Array<Typy_Opon>;
  /** fetch aggregated fields from the table: "Typy_Opon" */
  Typy_Opon_aggregate: Typy_Opon_Aggregate;
  /** fetch data from the table: "Typy_Opon" using primary key columns */
  Typy_Opon_by_pk?: Maybe<Typy_Opon>;
  /** fetch data from the table: "Uzytkownik" */
  Uzytkownik: Array<Uzytkownik>;
  /** fetch aggregated fields from the table: "Uzytkownik" */
  Uzytkownik_aggregate: Uzytkownik_Aggregate;
  /** fetch data from the table: "Uzytkownik" using primary key columns */
  Uzytkownik_by_pk?: Maybe<Uzytkownik>;
};


export type Subscription_RootAutoArgs = {
  distinct_on?: Maybe<Array<Auto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auto_Order_By>>;
  where?: Maybe<Auto_Bool_Exp>;
};


export type Subscription_RootAuto_AggregateArgs = {
  distinct_on?: Maybe<Array<Auto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auto_Order_By>>;
  where?: Maybe<Auto_Bool_Exp>;
};


export type Subscription_RootAuto_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAwariaArgs = {
  distinct_on?: Maybe<Array<Awaria_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Awaria_Order_By>>;
  where?: Maybe<Awaria_Bool_Exp>;
};


export type Subscription_RootAwaria_AggregateArgs = {
  distinct_on?: Maybe<Array<Awaria_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Awaria_Order_By>>;
  where?: Maybe<Awaria_Bool_Exp>;
};


export type Subscription_RootAwaria_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootGrupa_Aut_KlientaArgs = {
  distinct_on?: Maybe<Array<Grupa_Aut_Klienta_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grupa_Aut_Klienta_Order_By>>;
  where?: Maybe<Grupa_Aut_Klienta_Bool_Exp>;
};


export type Subscription_RootGrupa_Aut_Klienta_AggregateArgs = {
  distinct_on?: Maybe<Array<Grupa_Aut_Klienta_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grupa_Aut_Klienta_Order_By>>;
  where?: Maybe<Grupa_Aut_Klienta_Bool_Exp>;
};


export type Subscription_RootGrupa_Aut_Klienta_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootHistoria_Uzytkownik_AutoArgs = {
  distinct_on?: Maybe<Array<Historia_Uzytkownik_Auto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Historia_Uzytkownik_Auto_Order_By>>;
  where?: Maybe<Historia_Uzytkownik_Auto_Bool_Exp>;
};


export type Subscription_RootHistoria_Uzytkownik_Auto_AggregateArgs = {
  distinct_on?: Maybe<Array<Historia_Uzytkownik_Auto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Historia_Uzytkownik_Auto_Order_By>>;
  where?: Maybe<Historia_Uzytkownik_Auto_Bool_Exp>;
};


export type Subscription_RootHistoria_Uzytkownik_Auto_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootKarta_OrlenArgs = {
  distinct_on?: Maybe<Array<Karta_Orlen_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Karta_Orlen_Order_By>>;
  where?: Maybe<Karta_Orlen_Bool_Exp>;
};


export type Subscription_RootKarta_Orlen_AggregateArgs = {
  distinct_on?: Maybe<Array<Karta_Orlen_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Karta_Orlen_Order_By>>;
  where?: Maybe<Karta_Orlen_Bool_Exp>;
};


export type Subscription_RootKarta_Orlen_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootKlientArgs = {
  distinct_on?: Maybe<Array<Klient_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Klient_Order_By>>;
  where?: Maybe<Klient_Bool_Exp>;
};


export type Subscription_RootKlient_AggregateArgs = {
  distinct_on?: Maybe<Array<Klient_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Klient_Order_By>>;
  where?: Maybe<Klient_Bool_Exp>;
};


export type Subscription_RootKlient_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootLeasingArgs = {
  distinct_on?: Maybe<Array<Leasing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Leasing_Order_By>>;
  where?: Maybe<Leasing_Bool_Exp>;
};


export type Subscription_RootLeasing_AggregateArgs = {
  distinct_on?: Maybe<Array<Leasing_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Leasing_Order_By>>;
  where?: Maybe<Leasing_Bool_Exp>;
};


export type Subscription_RootLeasing_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMandatArgs = {
  distinct_on?: Maybe<Array<Mandat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mandat_Order_By>>;
  where?: Maybe<Mandat_Bool_Exp>;
};


export type Subscription_RootMandat_AggregateArgs = {
  distinct_on?: Maybe<Array<Mandat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mandat_Order_By>>;
  where?: Maybe<Mandat_Bool_Exp>;
};


export type Subscription_RootMandat_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOponaArgs = {
  distinct_on?: Maybe<Array<Opona_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Opona_Order_By>>;
  where?: Maybe<Opona_Bool_Exp>;
};


export type Subscription_RootOpona_AggregateArgs = {
  distinct_on?: Maybe<Array<Opona_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Opona_Order_By>>;
  where?: Maybe<Opona_Bool_Exp>;
};


export type Subscription_RootOpona_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPolisaArgs = {
  distinct_on?: Maybe<Array<Polisa_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Polisa_Order_By>>;
  where?: Maybe<Polisa_Bool_Exp>;
};


export type Subscription_RootPolisa_AggregateArgs = {
  distinct_on?: Maybe<Array<Polisa_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Polisa_Order_By>>;
  where?: Maybe<Polisa_Bool_Exp>;
};


export type Subscription_RootPolisa_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPrzebiegArgs = {
  distinct_on?: Maybe<Array<Przebieg_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przebieg_Order_By>>;
  where?: Maybe<Przebieg_Bool_Exp>;
};


export type Subscription_RootPrzebieg_AggregateArgs = {
  distinct_on?: Maybe<Array<Przebieg_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przebieg_Order_By>>;
  where?: Maybe<Przebieg_Bool_Exp>;
};


export type Subscription_RootPrzebieg_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPrzegladArgs = {
  distinct_on?: Maybe<Array<Przeglad_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Order_By>>;
  where?: Maybe<Przeglad_Bool_Exp>;
};


export type Subscription_RootPrzeglad_Koszta_DodatkoweArgs = {
  distinct_on?: Maybe<Array<Przeglad_Koszta_Dodatkowe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Koszta_Dodatkowe_Order_By>>;
  where?: Maybe<Przeglad_Koszta_Dodatkowe_Bool_Exp>;
};


export type Subscription_RootPrzeglad_Koszta_Dodatkowe_AggregateArgs = {
  distinct_on?: Maybe<Array<Przeglad_Koszta_Dodatkowe_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Koszta_Dodatkowe_Order_By>>;
  where?: Maybe<Przeglad_Koszta_Dodatkowe_Bool_Exp>;
};


export type Subscription_RootPrzeglad_Koszta_Dodatkowe_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPrzeglad_Ot_KilometryArgs = {
  distinct_on?: Maybe<Array<Przeglad_Ot_Kilometry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Ot_Kilometry_Order_By>>;
  where?: Maybe<Przeglad_Ot_Kilometry_Bool_Exp>;
};


export type Subscription_RootPrzeglad_Ot_Kilometry_AggregateArgs = {
  distinct_on?: Maybe<Array<Przeglad_Ot_Kilometry_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Ot_Kilometry_Order_By>>;
  where?: Maybe<Przeglad_Ot_Kilometry_Bool_Exp>;
};


export type Subscription_RootPrzeglad_Ot_Kilometry_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPrzeglad_AggregateArgs = {
  distinct_on?: Maybe<Array<Przeglad_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Przeglad_Order_By>>;
  where?: Maybe<Przeglad_Bool_Exp>;
};


export type Subscription_RootPrzeglad_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootStatus_AwariiArgs = {
  distinct_on?: Maybe<Array<Status_Awarii_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Awarii_Order_By>>;
  where?: Maybe<Status_Awarii_Bool_Exp>;
};


export type Subscription_RootStatus_Awarii_AggregateArgs = {
  distinct_on?: Maybe<Array<Status_Awarii_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Awarii_Order_By>>;
  where?: Maybe<Status_Awarii_Bool_Exp>;
};


export type Subscription_RootStatus_Awarii_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootStatus_SzkodyArgs = {
  distinct_on?: Maybe<Array<Status_Szkody_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Szkody_Order_By>>;
  where?: Maybe<Status_Szkody_Bool_Exp>;
};


export type Subscription_RootStatus_Szkody_AggregateArgs = {
  distinct_on?: Maybe<Array<Status_Szkody_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Status_Szkody_Order_By>>;
  where?: Maybe<Status_Szkody_Bool_Exp>;
};


export type Subscription_RootStatus_Szkody_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSzkodaArgs = {
  distinct_on?: Maybe<Array<Szkoda_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Szkoda_Order_By>>;
  where?: Maybe<Szkoda_Bool_Exp>;
};


export type Subscription_RootSzkoda_AggregateArgs = {
  distinct_on?: Maybe<Array<Szkoda_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Szkoda_Order_By>>;
  where?: Maybe<Szkoda_Bool_Exp>;
};


export type Subscription_RootSzkoda_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTypy_OponArgs = {
  distinct_on?: Maybe<Array<Typy_Opon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Typy_Opon_Order_By>>;
  where?: Maybe<Typy_Opon_Bool_Exp>;
};


export type Subscription_RootTypy_Opon_AggregateArgs = {
  distinct_on?: Maybe<Array<Typy_Opon_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Typy_Opon_Order_By>>;
  where?: Maybe<Typy_Opon_Bool_Exp>;
};


export type Subscription_RootTypy_Opon_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUzytkownikArgs = {
  distinct_on?: Maybe<Array<Uzytkownik_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Uzytkownik_Order_By>>;
  where?: Maybe<Uzytkownik_Bool_Exp>;
};


export type Subscription_RootUzytkownik_AggregateArgs = {
  distinct_on?: Maybe<Array<Uzytkownik_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Uzytkownik_Order_By>>;
  where?: Maybe<Uzytkownik_Bool_Exp>;
};


export type Subscription_RootUzytkownik_By_PkArgs = {
  id: Scalars['Int'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type AddAutoMutationVariables = Exact<{
  data: Auto_Insert_Input;
}>;


export type AddAutoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Auto_one?: Maybe<(
    { __typename?: 'Auto' }
    & Pick<Auto, 'id'>
  )> }
);

export type AddGrupaAutKlientaMutationVariables = Exact<{
  data: Grupa_Aut_Klienta_Insert_Input;
}>;


export type AddGrupaAutKlientaMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Grupa_Aut_Klienta_one?: Maybe<(
    { __typename?: 'Grupa_Aut_Klienta' }
    & Pick<Grupa_Aut_Klienta, 'id' | 'id_auto'>
  )> }
);

export type AddHistoriaUzytkownikAutoMutationVariables = Exact<{
  data: Historia_Uzytkownik_Auto_Insert_Input;
}>;


export type AddHistoriaUzytkownikAutoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Historia_Uzytkownik_Auto_one?: Maybe<(
    { __typename?: 'Historia_Uzytkownik_Auto' }
    & Pick<Historia_Uzytkownik_Auto, 'id' | 'id_auto'>
  )> }
);

export type AddKartaOrlenMutationVariables = Exact<{
  data: Karta_Orlen_Insert_Input;
}>;


export type AddKartaOrlenMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Karta_Orlen_one?: Maybe<(
    { __typename?: 'Karta_Orlen' }
    & Pick<Karta_Orlen, 'id' | 'id_auto'>
  )> }
);

export type AddMandatMutationVariables = Exact<{
  data: Mandat_Insert_Input;
}>;


export type AddMandatMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Mandat_one?: Maybe<(
    { __typename?: 'Mandat' }
    & Pick<Mandat, 'id' | 'id_auto'>
  )> }
);

export type AddOponaMutationVariables = Exact<{
  data: Opona_Insert_Input;
}>;


export type AddOponaMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Opona_one?: Maybe<(
    { __typename?: 'Opona' }
    & Pick<Opona, 'id' | 'id_auto'>
  )> }
);

export type AddPolisaMutationVariables = Exact<{
  data: Polisa_Insert_Input;
}>;


export type AddPolisaMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Polisa_one?: Maybe<(
    { __typename?: 'Polisa' }
    & Pick<Polisa, 'id' | 'id_auto'>
  )> }
);

export type AddPrzebiegMutationVariables = Exact<{
  data: Przebieg_Insert_Input;
}>;


export type AddPrzebiegMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Przebieg_one?: Maybe<(
    { __typename?: 'Przebieg' }
    & Pick<Przebieg, 'id' | 'id_auto'>
  )> }
);

export type AddPrzegladMutationVariables = Exact<{
  data: Przeglad_Insert_Input;
}>;


export type AddPrzegladMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Przeglad_one?: Maybe<(
    { __typename?: 'Przeglad' }
    & Pick<Przeglad, 'id' | 'id_auto'>
  )> }
);

export type AddSzkodaMutationVariables = Exact<{
  data: Szkoda_Insert_Input;
}>;


export type AddSzkodaMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Szkoda_one?: Maybe<(
    { __typename?: 'Szkoda' }
    & Pick<Szkoda, 'id' | 'id_auto'>
  )> }
);

export type AddUzytkownikMutationVariables = Exact<{
  data: Uzytkownik_Insert_Input;
}>;


export type AddUzytkownikMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Uzytkownik_one?: Maybe<(
    { __typename?: 'Uzytkownik' }
    & Pick<Uzytkownik, 'id'>
  )> }
);

export type UpdateAutoByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Auto_Set_Input;
}>;


export type UpdateAutoByPkMutation = (
  { __typename?: 'mutation_root' }
  & { update_Auto_by_pk?: Maybe<(
    { __typename?: 'Auto' }
    & Pick<Auto, 'id'>
  )> }
);

export type UpdateGrupaAutKlientaByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Grupa_Aut_Klienta_Set_Input;
}>;


export type UpdateGrupaAutKlientaByPkMutation = (
  { __typename?: 'mutation_root' }
  & { update_Grupa_Aut_Klienta_by_pk?: Maybe<(
    { __typename?: 'Grupa_Aut_Klienta' }
    & Pick<Grupa_Aut_Klienta, 'id_auto'>
  )> }
);

export type UpdateHistoriaByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Historia_Uzytkownik_Auto_Set_Input;
}>;


export type UpdateHistoriaByPkMutation = (
  { __typename?: 'mutation_root' }
  & { update_Historia_Uzytkownik_Auto_by_pk?: Maybe<(
    { __typename?: 'Historia_Uzytkownik_Auto' }
    & Pick<Historia_Uzytkownik_Auto, 'id' | 'id_auto'>
  )> }
);

export type UpdateKartaOrlenByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Karta_Orlen_Set_Input;
}>;


export type UpdateKartaOrlenByPkMutation = (
  { __typename?: 'mutation_root' }
  & { update_Karta_Orlen_by_pk?: Maybe<(
    { __typename?: 'Karta_Orlen' }
    & Pick<Karta_Orlen, 'id_auto'>
  )> }
);

export type UpdateMandatByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Mandat_Set_Input;
}>;


export type UpdateMandatByPkMutation = (
  { __typename?: 'mutation_root' }
  & { update_Mandat_by_pk?: Maybe<(
    { __typename?: 'Mandat' }
    & Pick<Mandat, 'id_auto'>
  )> }
);

export type UpdateOponaByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Opona_Set_Input;
}>;


export type UpdateOponaByPkMutation = (
  { __typename?: 'mutation_root' }
  & { update_Opona_by_pk?: Maybe<(
    { __typename?: 'Opona' }
    & Pick<Opona, 'id_auto'>
  )> }
);

export type UpdatePolisaByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Polisa_Set_Input;
}>;


export type UpdatePolisaByPkMutation = (
  { __typename?: 'mutation_root' }
  & { update_Polisa_by_pk?: Maybe<(
    { __typename?: 'Polisa' }
    & Pick<Polisa, 'id_auto'>
  )> }
);

export type UpdatePrzebiegiByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Przebieg_Set_Input;
}>;


export type UpdatePrzebiegiByPkMutation = (
  { __typename?: 'mutation_root' }
  & { update_Przebieg_by_pk?: Maybe<(
    { __typename?: 'Przebieg' }
    & Pick<Przebieg, 'id_auto'>
  )> }
);

export type UpdatePrzegladByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Przeglad_Set_Input;
  idPrzegladKosztaDodatkowe: Scalars['Int'];
  dataPrzegladKosztaDodatkowe: Przeglad_Koszta_Dodatkowe_Set_Input;
}>;


export type UpdatePrzegladByPkMutation = (
  { __typename?: 'mutation_root' }
  & { update_Przeglad_by_pk?: Maybe<(
    { __typename?: 'Przeglad' }
    & Pick<Przeglad, 'id_auto'>
  )>, update_Przeglad_Koszta_Dodatkowe_by_pk?: Maybe<(
    { __typename?: 'Przeglad_Koszta_Dodatkowe' }
    & Pick<Przeglad_Koszta_Dodatkowe, 'id'>
  )> }
);

export type UpdateSzkodyByPkMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Szkoda_Set_Input;
}>;


export type UpdateSzkodyByPkMutation = (
  { __typename?: 'mutation_root' }
  & { update_Szkoda_by_pk?: Maybe<(
    { __typename?: 'Szkoda' }
    & Pick<Szkoda, 'id_auto'>
  )> }
);

export type GetAllAutoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAutoQuery = (
  { __typename?: 'query_root' }
  & { Auto: Array<(
    { __typename?: 'Auto' }
    & Pick<Auto, 'id' | 'marka' | 'model' | 'rok_produkcji' | 'stan_licznika' | 'paliwo' | 'is_w_uzyciu' | 'numer_rejestracyjny' | 'numer_vin'>
  )> }
);

export type GetAllAutoAndPrzebiegiWithDateQueryVariables = Exact<{
  date_from: Scalars['date'];
  date_to: Scalars['date'];
}>;


export type GetAllAutoAndPrzebiegiWithDateQuery = (
  { __typename?: 'query_root' }
  & { Auto: Array<(
    { __typename?: 'Auto' }
    & Pick<Auto, 'id' | 'marka' | 'model' | 'rok_produkcji' | 'stan_licznika' | 'paliwo' | 'numer_rejestracyjny' | 'numer_vin' | 'is_w_uzyciu'>
    & { Last_month_Przebiegs_aggregate: (
      { __typename?: 'Przebieg_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Przebieg_aggregate_fields' }
        & { max?: Maybe<(
          { __typename?: 'Przebieg_max_fields' }
          & Pick<Przebieg_Max_Fields, 'przebieg'>
        )> }
      )> }
    ), Przebiegs_aggregate: (
      { __typename?: 'Przebieg_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'Przebieg_aggregate_fields' }
        & { min?: Maybe<(
          { __typename?: 'Przebieg_min_fields' }
          & Pick<Przebieg_Min_Fields, 'przebieg'>
        )>, max?: Maybe<(
          { __typename?: 'Przebieg_max_fields' }
          & Pick<Przebieg_Max_Fields, 'przebieg'>
        )> }
      )> }
    ) }
  )> }
);

export type GetAllKlientQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllKlientQuery = (
  { __typename?: 'query_root' }
  & { Klient: Array<(
    { __typename?: 'Klient' }
    & Pick<Klient, 'id' | 'kontakt' | 'nazwa'>
  )> }
);

export type GetAllPrzegladyOtKilometryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPrzegladyOtKilometryQuery = (
  { __typename?: 'query_root' }
  & { Przeglad_OT_Kilometry: Array<(
    { __typename?: 'Przeglad_OT_Kilometry' }
    & Pick<Przeglad_Ot_Kilometry, 'id' | 'ilosc_kilometrow_w_tysiacach'>
  )> }
);

export type GetAllStatusSzkodyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllStatusSzkodyQuery = (
  { __typename?: 'query_root' }
  & { Status_Szkody: Array<(
    { __typename?: 'Status_Szkody' }
    & Pick<Status_Szkody, 'id' | 'nazwa_statusu'>
  )> }
);

export type GetAllTypyOponQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTypyOponQuery = (
  { __typename?: 'query_root' }
  & { Typy_Opon: Array<(
    { __typename?: 'Typy_Opon' }
    & Pick<Typy_Opon, 'id' | 'nazwa_typu'>
  )> }
);

export type GetAllUzytkownikQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUzytkownikQuery = (
  { __typename?: 'query_root' }
  & { Uzytkownik: Array<(
    { __typename?: 'Uzytkownik' }
    & Pick<Uzytkownik, 'imie' | 'nazwisko' | 'miasto' | 'pesel' | 'telefon' | 'numer_prawa_jazdy' | 'id' | 'email'>
  )> }
);

export type GetAutoForAutoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetAutoForAutoQuery = (
  { __typename?: 'query_root' }
  & { Auto_by_pk?: Maybe<(
    { __typename?: 'Auto' }
    & Pick<Auto, 'gwarancja' | 'id' | 'paliwo' | 'rok_produkcji' | 'marka' | 'model' | 'numer_vin' | 'numer_rejestracyjny' | 'uwagi' | 'is_w_uzyciu'>
  )> }
);

export type GetCurrentUzytkownikForAutoQueryVariables = Exact<{
  id_auto: Scalars['Int'];
}>;


export type GetCurrentUzytkownikForAutoQuery = (
  { __typename?: 'query_root' }
  & { Historia_Uzytkownik_Auto: Array<(
    { __typename?: 'Historia_Uzytkownik_Auto' }
    & Pick<Historia_Uzytkownik_Auto, 'data_dodania_wlasciciela' | 'data_oddania_auta'>
    & { Uzytkownik: (
      { __typename?: 'Uzytkownik' }
      & Pick<Uzytkownik, 'id' | 'imie' | 'nazwisko' | 'telefon' | 'pesel' | 'miasto' | 'numer_prawa_jazdy' | 'email'>
    ) }
  )> }
);

export type GetGrupaAutKlientaForAutoQueryVariables = Exact<{
  id_auto: Scalars['Int'];
}>;


export type GetGrupaAutKlientaForAutoQuery = (
  { __typename?: 'query_root' }
  & { Grupa_Aut_Klienta: Array<(
    { __typename?: 'Grupa_Aut_Klienta' }
    & Pick<Grupa_Aut_Klienta, 'id' | 'id_auto' | 'id_klient' | 'created_at'>
    & { Auto: (
      { __typename?: 'Auto' }
      & Pick<Auto, 'id'>
    ), Klient: (
      { __typename?: 'Klient' }
      & Pick<Klient, 'id' | 'nazwa' | 'kontakt'>
    ) }
  )> }
);

export type GetHistoriaUzytkownikAutoForAutoQueryVariables = Exact<{
  id_auto: Scalars['Int'];
}>;


export type GetHistoriaUzytkownikAutoForAutoQuery = (
  { __typename?: 'query_root' }
  & { Historia_Uzytkownik_Auto: Array<(
    { __typename?: 'Historia_Uzytkownik_Auto' }
    & Pick<Historia_Uzytkownik_Auto, 'id' | 'id_auto' | 'id_uzytkownik' | 'data_dodania_wlasciciela' | 'data_oddania_auta'>
    & { Uzytkownik: (
      { __typename?: 'Uzytkownik' }
      & Pick<Uzytkownik, 'id' | 'imie' | 'nazwisko' | 'miasto'>
    ) }
  )> }
);

export type GetKartaOrlenForAutoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetKartaOrlenForAutoQuery = (
  { __typename?: 'query_root' }
  & { Karta_Orlen: Array<(
    { __typename?: 'Karta_Orlen' }
    & Pick<Karta_Orlen, 'id' | 'pin' | 'data_waznosci'>
  )> }
);

export type GetMandatForAutoQueryVariables = Exact<{
  id_auto: Scalars['Int'];
}>;


export type GetMandatForAutoQuery = (
  { __typename?: 'query_root' }
  & { Mandat: Array<(
    { __typename?: 'Mandat' }
    & Pick<Mandat, 'id' | 'id_uzytkownik' | 'id_auto' | 'data_pisma' | 'data_zdarzenia' | 'data_otrzymania' | 'data_odpowiedzi' | 'nr_sprawy' | 'nadawca' | 'obciazenie_za_mandat' | 'platnosc' | 'wysokosc_mandatu' | 'dzialanie'>
    & { Uzytkownik: (
      { __typename?: 'Uzytkownik' }
      & Pick<Uzytkownik, 'imie' | 'nazwisko'>
    ) }
  )> }
);

export type GetOponaForAutoQueryVariables = Exact<{
  id_auto: Scalars['Int'];
}>;


export type GetOponaForAutoQuery = (
  { __typename?: 'query_root' }
  & { Opona: Array<(
    { __typename?: 'Opona' }
    & Pick<Opona, 'id' | 'id_auto' | 'data_zakupu' | 'detale' | 'firma' | 'id_typy_opon' | 'koszt' | 'rozmiar'>
    & { Typy_Opon: (
      { __typename?: 'Typy_Opon' }
      & Pick<Typy_Opon, 'nazwa_typu' | 'id'>
    ) }
  )> }
);

export type GetPolisaForAutoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPolisaForAutoQuery = (
  { __typename?: 'query_root' }
  & { Polisa: Array<(
    { __typename?: 'Polisa' }
    & Pick<Polisa, 'id' | 'id_auto' | 'ac_oc' | 'data_rozpoczecia_polisy' | 'nr_polisy' | 'ubezpieczyciel'>
  )> }
);

export type GetPrzebiegForAutoQueryVariables = Exact<{
  id_auto: Scalars['Int'];
}>;


export type GetPrzebiegForAutoQuery = (
  { __typename?: 'query_root' }
  & { Przebieg: Array<(
    { __typename?: 'Przebieg' }
    & Pick<Przebieg, 'id' | 'przebieg' | 'data_przebiegu'>
  )> }
);

export type GetPrzegladyForAutoQueryVariables = Exact<{
  id_auto: Scalars['Int'];
}>;


export type GetPrzegladyForAutoQuery = (
  { __typename?: 'query_root' }
  & { Przeglad: Array<(
    { __typename?: 'Przeglad' }
    & Pick<Przeglad, 'id' | 'id_auto' | 'is_wymiana_rozrzadu' | 'id_przeglad_ot_kilometry' | 'id_przeglad_koszta_dodatkowe' | 'data_przegladu'>
    & { Przeglad_Koszta_Dodatkowe: (
      { __typename?: 'Przeglad_Koszta_Dodatkowe' }
      & Pick<Przeglad_Koszta_Dodatkowe, 'id' | 'koszt_klimatyzacja' | 'koszt_MacPhersona' | 'koszt_hamulce' | 'koszt_rozrzad' | 'koszt_sprzeglo'>
    ), Przeglad_OT_Kilometry: (
      { __typename?: 'Przeglad_OT_Kilometry' }
      & Pick<Przeglad_Ot_Kilometry, 'id' | 'ilosc_kilometrow_w_tysiacach'>
    ) }
  )> }
);

export type GetSzkodaForAutoQueryVariables = Exact<{
  id_auto: Scalars['Int'];
}>;


export type GetSzkodaForAutoQuery = (
  { __typename?: 'query_root' }
  & { Szkoda: Array<(
    { __typename?: 'Szkoda' }
    & Pick<Szkoda, 'id' | 'id_auto' | 'id_status_szkody' | 'id_uzytkownik' | 'opis_szkody' | 'uszkodzenia' | 'adres'>
    & { Status_Szkody: (
      { __typename?: 'Status_Szkody' }
      & Pick<Status_Szkody, 'nazwa_statusu' | 'id'>
    ), Uzytkownik: (
      { __typename?: 'Uzytkownik' }
      & Pick<Uzytkownik, 'imie' | 'nazwisko'>
    ) }
  )> }
);

export type GetUzytkownikFromHistoriaUzytkownikAutoForAutoQueryVariables = Exact<{
  id_auto: Scalars['Int'];
}>;


export type GetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery = (
  { __typename?: 'query_root' }
  & { Uzytkownik: Array<(
    { __typename?: 'Uzytkownik' }
    & Pick<Uzytkownik, 'imie' | 'nazwisko' | 'id'>
  )> }
);

export type GetOneAutoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetOneAutoQuery = (
  { __typename?: 'query_root' }
  & { Auto_by_pk?: Maybe<(
    { __typename?: 'Auto' }
    & Pick<Auto, 'id' | 'is_w_uzyciu' | 'marka' | 'model' | 'numer_rejestracyjny' | 'numer_vin' | 'paliwo' | 'rok_produkcji' | 'stan_licznika' | 'gwarancja' | 'uwagi'>
  )>, Karta_Orlen: Array<(
    { __typename?: 'Karta_Orlen' }
    & Pick<Karta_Orlen, 'id' | 'pin' | 'data_waznosci'>
  )>, Historia_Uzytkownik_Auto: Array<(
    { __typename?: 'Historia_Uzytkownik_Auto' }
    & { Uzytkownik: (
      { __typename?: 'Uzytkownik' }
      & Pick<Uzytkownik, 'nazwisko' | 'numer_prawa_jazdy' | 'pesel' | 'telefon'>
    ) }
  )> }
);

export type GetOneUzytkownikQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetOneUzytkownikQuery = (
  { __typename?: 'query_root' }
  & { Uzytkownik_by_pk?: Maybe<(
    { __typename?: 'Uzytkownik' }
    & Pick<Uzytkownik, 'id' | 'imie' | 'nazwisko' | 'numer_prawa_jazdy' | 'pesel' | 'telefon' | 'email'>
  )> }
);


export const AddAutoDocument = gql`
    mutation AddAuto($data: Auto_insert_input!) {
  insert_Auto_one(object: $data) {
    id
  }
}
    `;
export type AddAutoMutationFn = Apollo.MutationFunction<AddAutoMutation, AddAutoMutationVariables>;
export type AddAutoComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddAutoMutation, AddAutoMutationVariables>, 'mutation'>;

    export const AddAutoComponent = (props: AddAutoComponentProps) => (
      <ApolloReactComponents.Mutation<AddAutoMutation, AddAutoMutationVariables> mutation={AddAutoDocument} {...props} />
    );
    
export type AddAutoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddAutoMutation, AddAutoMutationVariables>
    } & TChildProps;
export function withAddAuto<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddAutoMutation,
  AddAutoMutationVariables,
  AddAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddAutoMutation, AddAutoMutationVariables, AddAutoProps<TChildProps, TDataName>>(AddAutoDocument, {
      alias: 'addAuto',
      ...operationOptions
    });
};

/**
 * __useAddAutoMutation__
 *
 * To run a mutation, you first call `useAddAutoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAutoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAutoMutation, { data, loading, error }] = useAddAutoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddAutoMutation(baseOptions?: Apollo.MutationHookOptions<AddAutoMutation, AddAutoMutationVariables>) {
        return Apollo.useMutation<AddAutoMutation, AddAutoMutationVariables>(AddAutoDocument, baseOptions);
      }
export type AddAutoMutationHookResult = ReturnType<typeof useAddAutoMutation>;
export type AddAutoMutationResult = Apollo.MutationResult<AddAutoMutation>;
export type AddAutoMutationOptions = Apollo.BaseMutationOptions<AddAutoMutation, AddAutoMutationVariables>;
export const AddGrupaAutKlientaDocument = gql`
    mutation AddGrupaAutKlienta($data: Grupa_Aut_Klienta_insert_input!) {
  insert_Grupa_Aut_Klienta_one(object: $data) {
    id
    id_auto
  }
}
    `;
export type AddGrupaAutKlientaMutationFn = Apollo.MutationFunction<AddGrupaAutKlientaMutation, AddGrupaAutKlientaMutationVariables>;
export type AddGrupaAutKlientaComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddGrupaAutKlientaMutation, AddGrupaAutKlientaMutationVariables>, 'mutation'>;

    export const AddGrupaAutKlientaComponent = (props: AddGrupaAutKlientaComponentProps) => (
      <ApolloReactComponents.Mutation<AddGrupaAutKlientaMutation, AddGrupaAutKlientaMutationVariables> mutation={AddGrupaAutKlientaDocument} {...props} />
    );
    
export type AddGrupaAutKlientaProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddGrupaAutKlientaMutation, AddGrupaAutKlientaMutationVariables>
    } & TChildProps;
export function withAddGrupaAutKlienta<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddGrupaAutKlientaMutation,
  AddGrupaAutKlientaMutationVariables,
  AddGrupaAutKlientaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddGrupaAutKlientaMutation, AddGrupaAutKlientaMutationVariables, AddGrupaAutKlientaProps<TChildProps, TDataName>>(AddGrupaAutKlientaDocument, {
      alias: 'addGrupaAutKlienta',
      ...operationOptions
    });
};

/**
 * __useAddGrupaAutKlientaMutation__
 *
 * To run a mutation, you first call `useAddGrupaAutKlientaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGrupaAutKlientaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGrupaAutKlientaMutation, { data, loading, error }] = useAddGrupaAutKlientaMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddGrupaAutKlientaMutation(baseOptions?: Apollo.MutationHookOptions<AddGrupaAutKlientaMutation, AddGrupaAutKlientaMutationVariables>) {
        return Apollo.useMutation<AddGrupaAutKlientaMutation, AddGrupaAutKlientaMutationVariables>(AddGrupaAutKlientaDocument, baseOptions);
      }
export type AddGrupaAutKlientaMutationHookResult = ReturnType<typeof useAddGrupaAutKlientaMutation>;
export type AddGrupaAutKlientaMutationResult = Apollo.MutationResult<AddGrupaAutKlientaMutation>;
export type AddGrupaAutKlientaMutationOptions = Apollo.BaseMutationOptions<AddGrupaAutKlientaMutation, AddGrupaAutKlientaMutationVariables>;
export const AddHistoriaUzytkownikAutoDocument = gql`
    mutation AddHistoriaUzytkownikAuto($data: Historia_Uzytkownik_Auto_insert_input!) {
  insert_Historia_Uzytkownik_Auto_one(object: $data) {
    id
    id_auto
  }
}
    `;
export type AddHistoriaUzytkownikAutoMutationFn = Apollo.MutationFunction<AddHistoriaUzytkownikAutoMutation, AddHistoriaUzytkownikAutoMutationVariables>;
export type AddHistoriaUzytkownikAutoComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddHistoriaUzytkownikAutoMutation, AddHistoriaUzytkownikAutoMutationVariables>, 'mutation'>;

    export const AddHistoriaUzytkownikAutoComponent = (props: AddHistoriaUzytkownikAutoComponentProps) => (
      <ApolloReactComponents.Mutation<AddHistoriaUzytkownikAutoMutation, AddHistoriaUzytkownikAutoMutationVariables> mutation={AddHistoriaUzytkownikAutoDocument} {...props} />
    );
    
export type AddHistoriaUzytkownikAutoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddHistoriaUzytkownikAutoMutation, AddHistoriaUzytkownikAutoMutationVariables>
    } & TChildProps;
export function withAddHistoriaUzytkownikAuto<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddHistoriaUzytkownikAutoMutation,
  AddHistoriaUzytkownikAutoMutationVariables,
  AddHistoriaUzytkownikAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddHistoriaUzytkownikAutoMutation, AddHistoriaUzytkownikAutoMutationVariables, AddHistoriaUzytkownikAutoProps<TChildProps, TDataName>>(AddHistoriaUzytkownikAutoDocument, {
      alias: 'addHistoriaUzytkownikAuto',
      ...operationOptions
    });
};

/**
 * __useAddHistoriaUzytkownikAutoMutation__
 *
 * To run a mutation, you first call `useAddHistoriaUzytkownikAutoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddHistoriaUzytkownikAutoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addHistoriaUzytkownikAutoMutation, { data, loading, error }] = useAddHistoriaUzytkownikAutoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddHistoriaUzytkownikAutoMutation(baseOptions?: Apollo.MutationHookOptions<AddHistoriaUzytkownikAutoMutation, AddHistoriaUzytkownikAutoMutationVariables>) {
        return Apollo.useMutation<AddHistoriaUzytkownikAutoMutation, AddHistoriaUzytkownikAutoMutationVariables>(AddHistoriaUzytkownikAutoDocument, baseOptions);
      }
export type AddHistoriaUzytkownikAutoMutationHookResult = ReturnType<typeof useAddHistoriaUzytkownikAutoMutation>;
export type AddHistoriaUzytkownikAutoMutationResult = Apollo.MutationResult<AddHistoriaUzytkownikAutoMutation>;
export type AddHistoriaUzytkownikAutoMutationOptions = Apollo.BaseMutationOptions<AddHistoriaUzytkownikAutoMutation, AddHistoriaUzytkownikAutoMutationVariables>;
export const AddKartaOrlenDocument = gql`
    mutation AddKartaOrlen($data: Karta_Orlen_insert_input!) {
  insert_Karta_Orlen_one(object: $data) {
    id
    id_auto
  }
}
    `;
export type AddKartaOrlenMutationFn = Apollo.MutationFunction<AddKartaOrlenMutation, AddKartaOrlenMutationVariables>;
export type AddKartaOrlenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddKartaOrlenMutation, AddKartaOrlenMutationVariables>, 'mutation'>;

    export const AddKartaOrlenComponent = (props: AddKartaOrlenComponentProps) => (
      <ApolloReactComponents.Mutation<AddKartaOrlenMutation, AddKartaOrlenMutationVariables> mutation={AddKartaOrlenDocument} {...props} />
    );
    
export type AddKartaOrlenProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddKartaOrlenMutation, AddKartaOrlenMutationVariables>
    } & TChildProps;
export function withAddKartaOrlen<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddKartaOrlenMutation,
  AddKartaOrlenMutationVariables,
  AddKartaOrlenProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddKartaOrlenMutation, AddKartaOrlenMutationVariables, AddKartaOrlenProps<TChildProps, TDataName>>(AddKartaOrlenDocument, {
      alias: 'addKartaOrlen',
      ...operationOptions
    });
};

/**
 * __useAddKartaOrlenMutation__
 *
 * To run a mutation, you first call `useAddKartaOrlenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddKartaOrlenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addKartaOrlenMutation, { data, loading, error }] = useAddKartaOrlenMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddKartaOrlenMutation(baseOptions?: Apollo.MutationHookOptions<AddKartaOrlenMutation, AddKartaOrlenMutationVariables>) {
        return Apollo.useMutation<AddKartaOrlenMutation, AddKartaOrlenMutationVariables>(AddKartaOrlenDocument, baseOptions);
      }
export type AddKartaOrlenMutationHookResult = ReturnType<typeof useAddKartaOrlenMutation>;
export type AddKartaOrlenMutationResult = Apollo.MutationResult<AddKartaOrlenMutation>;
export type AddKartaOrlenMutationOptions = Apollo.BaseMutationOptions<AddKartaOrlenMutation, AddKartaOrlenMutationVariables>;
export const AddMandatDocument = gql`
    mutation AddMandat($data: Mandat_insert_input!) {
  insert_Mandat_one(object: $data) {
    id
    id_auto
  }
}
    `;
export type AddMandatMutationFn = Apollo.MutationFunction<AddMandatMutation, AddMandatMutationVariables>;
export type AddMandatComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddMandatMutation, AddMandatMutationVariables>, 'mutation'>;

    export const AddMandatComponent = (props: AddMandatComponentProps) => (
      <ApolloReactComponents.Mutation<AddMandatMutation, AddMandatMutationVariables> mutation={AddMandatDocument} {...props} />
    );
    
export type AddMandatProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddMandatMutation, AddMandatMutationVariables>
    } & TChildProps;
export function withAddMandat<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddMandatMutation,
  AddMandatMutationVariables,
  AddMandatProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddMandatMutation, AddMandatMutationVariables, AddMandatProps<TChildProps, TDataName>>(AddMandatDocument, {
      alias: 'addMandat',
      ...operationOptions
    });
};

/**
 * __useAddMandatMutation__
 *
 * To run a mutation, you first call `useAddMandatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMandatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMandatMutation, { data, loading, error }] = useAddMandatMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddMandatMutation(baseOptions?: Apollo.MutationHookOptions<AddMandatMutation, AddMandatMutationVariables>) {
        return Apollo.useMutation<AddMandatMutation, AddMandatMutationVariables>(AddMandatDocument, baseOptions);
      }
export type AddMandatMutationHookResult = ReturnType<typeof useAddMandatMutation>;
export type AddMandatMutationResult = Apollo.MutationResult<AddMandatMutation>;
export type AddMandatMutationOptions = Apollo.BaseMutationOptions<AddMandatMutation, AddMandatMutationVariables>;
export const AddOponaDocument = gql`
    mutation AddOpona($data: Opona_insert_input!) {
  insert_Opona_one(object: $data) {
    id
    id_auto
  }
}
    `;
export type AddOponaMutationFn = Apollo.MutationFunction<AddOponaMutation, AddOponaMutationVariables>;
export type AddOponaComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddOponaMutation, AddOponaMutationVariables>, 'mutation'>;

    export const AddOponaComponent = (props: AddOponaComponentProps) => (
      <ApolloReactComponents.Mutation<AddOponaMutation, AddOponaMutationVariables> mutation={AddOponaDocument} {...props} />
    );
    
export type AddOponaProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddOponaMutation, AddOponaMutationVariables>
    } & TChildProps;
export function withAddOpona<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddOponaMutation,
  AddOponaMutationVariables,
  AddOponaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddOponaMutation, AddOponaMutationVariables, AddOponaProps<TChildProps, TDataName>>(AddOponaDocument, {
      alias: 'addOpona',
      ...operationOptions
    });
};

/**
 * __useAddOponaMutation__
 *
 * To run a mutation, you first call `useAddOponaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOponaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOponaMutation, { data, loading, error }] = useAddOponaMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddOponaMutation(baseOptions?: Apollo.MutationHookOptions<AddOponaMutation, AddOponaMutationVariables>) {
        return Apollo.useMutation<AddOponaMutation, AddOponaMutationVariables>(AddOponaDocument, baseOptions);
      }
export type AddOponaMutationHookResult = ReturnType<typeof useAddOponaMutation>;
export type AddOponaMutationResult = Apollo.MutationResult<AddOponaMutation>;
export type AddOponaMutationOptions = Apollo.BaseMutationOptions<AddOponaMutation, AddOponaMutationVariables>;
export const AddPolisaDocument = gql`
    mutation AddPolisa($data: Polisa_insert_input!) {
  insert_Polisa_one(object: $data) {
    id
    id_auto
  }
}
    `;
export type AddPolisaMutationFn = Apollo.MutationFunction<AddPolisaMutation, AddPolisaMutationVariables>;
export type AddPolisaComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddPolisaMutation, AddPolisaMutationVariables>, 'mutation'>;

    export const AddPolisaComponent = (props: AddPolisaComponentProps) => (
      <ApolloReactComponents.Mutation<AddPolisaMutation, AddPolisaMutationVariables> mutation={AddPolisaDocument} {...props} />
    );
    
export type AddPolisaProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddPolisaMutation, AddPolisaMutationVariables>
    } & TChildProps;
export function withAddPolisa<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddPolisaMutation,
  AddPolisaMutationVariables,
  AddPolisaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddPolisaMutation, AddPolisaMutationVariables, AddPolisaProps<TChildProps, TDataName>>(AddPolisaDocument, {
      alias: 'addPolisa',
      ...operationOptions
    });
};

/**
 * __useAddPolisaMutation__
 *
 * To run a mutation, you first call `useAddPolisaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPolisaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPolisaMutation, { data, loading, error }] = useAddPolisaMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddPolisaMutation(baseOptions?: Apollo.MutationHookOptions<AddPolisaMutation, AddPolisaMutationVariables>) {
        return Apollo.useMutation<AddPolisaMutation, AddPolisaMutationVariables>(AddPolisaDocument, baseOptions);
      }
export type AddPolisaMutationHookResult = ReturnType<typeof useAddPolisaMutation>;
export type AddPolisaMutationResult = Apollo.MutationResult<AddPolisaMutation>;
export type AddPolisaMutationOptions = Apollo.BaseMutationOptions<AddPolisaMutation, AddPolisaMutationVariables>;
export const AddPrzebiegDocument = gql`
    mutation AddPrzebieg($data: Przebieg_insert_input!) {
  insert_Przebieg_one(object: $data) {
    id
    id_auto
  }
}
    `;
export type AddPrzebiegMutationFn = Apollo.MutationFunction<AddPrzebiegMutation, AddPrzebiegMutationVariables>;
export type AddPrzebiegComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddPrzebiegMutation, AddPrzebiegMutationVariables>, 'mutation'>;

    export const AddPrzebiegComponent = (props: AddPrzebiegComponentProps) => (
      <ApolloReactComponents.Mutation<AddPrzebiegMutation, AddPrzebiegMutationVariables> mutation={AddPrzebiegDocument} {...props} />
    );
    
export type AddPrzebiegProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddPrzebiegMutation, AddPrzebiegMutationVariables>
    } & TChildProps;
export function withAddPrzebieg<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddPrzebiegMutation,
  AddPrzebiegMutationVariables,
  AddPrzebiegProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddPrzebiegMutation, AddPrzebiegMutationVariables, AddPrzebiegProps<TChildProps, TDataName>>(AddPrzebiegDocument, {
      alias: 'addPrzebieg',
      ...operationOptions
    });
};

/**
 * __useAddPrzebiegMutation__
 *
 * To run a mutation, you first call `useAddPrzebiegMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPrzebiegMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPrzebiegMutation, { data, loading, error }] = useAddPrzebiegMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddPrzebiegMutation(baseOptions?: Apollo.MutationHookOptions<AddPrzebiegMutation, AddPrzebiegMutationVariables>) {
        return Apollo.useMutation<AddPrzebiegMutation, AddPrzebiegMutationVariables>(AddPrzebiegDocument, baseOptions);
      }
export type AddPrzebiegMutationHookResult = ReturnType<typeof useAddPrzebiegMutation>;
export type AddPrzebiegMutationResult = Apollo.MutationResult<AddPrzebiegMutation>;
export type AddPrzebiegMutationOptions = Apollo.BaseMutationOptions<AddPrzebiegMutation, AddPrzebiegMutationVariables>;
export const AddPrzegladDocument = gql`
    mutation AddPrzeglad($data: Przeglad_insert_input!) {
  insert_Przeglad_one(object: $data) {
    id
    id_auto
  }
}
    `;
export type AddPrzegladMutationFn = Apollo.MutationFunction<AddPrzegladMutation, AddPrzegladMutationVariables>;
export type AddPrzegladComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddPrzegladMutation, AddPrzegladMutationVariables>, 'mutation'>;

    export const AddPrzegladComponent = (props: AddPrzegladComponentProps) => (
      <ApolloReactComponents.Mutation<AddPrzegladMutation, AddPrzegladMutationVariables> mutation={AddPrzegladDocument} {...props} />
    );
    
export type AddPrzegladProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddPrzegladMutation, AddPrzegladMutationVariables>
    } & TChildProps;
export function withAddPrzeglad<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddPrzegladMutation,
  AddPrzegladMutationVariables,
  AddPrzegladProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddPrzegladMutation, AddPrzegladMutationVariables, AddPrzegladProps<TChildProps, TDataName>>(AddPrzegladDocument, {
      alias: 'addPrzeglad',
      ...operationOptions
    });
};

/**
 * __useAddPrzegladMutation__
 *
 * To run a mutation, you first call `useAddPrzegladMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPrzegladMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPrzegladMutation, { data, loading, error }] = useAddPrzegladMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddPrzegladMutation(baseOptions?: Apollo.MutationHookOptions<AddPrzegladMutation, AddPrzegladMutationVariables>) {
        return Apollo.useMutation<AddPrzegladMutation, AddPrzegladMutationVariables>(AddPrzegladDocument, baseOptions);
      }
export type AddPrzegladMutationHookResult = ReturnType<typeof useAddPrzegladMutation>;
export type AddPrzegladMutationResult = Apollo.MutationResult<AddPrzegladMutation>;
export type AddPrzegladMutationOptions = Apollo.BaseMutationOptions<AddPrzegladMutation, AddPrzegladMutationVariables>;
export const AddSzkodaDocument = gql`
    mutation AddSzkoda($data: Szkoda_insert_input!) {
  insert_Szkoda_one(object: $data) {
    id
    id_auto
  }
}
    `;
export type AddSzkodaMutationFn = Apollo.MutationFunction<AddSzkodaMutation, AddSzkodaMutationVariables>;
export type AddSzkodaComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddSzkodaMutation, AddSzkodaMutationVariables>, 'mutation'>;

    export const AddSzkodaComponent = (props: AddSzkodaComponentProps) => (
      <ApolloReactComponents.Mutation<AddSzkodaMutation, AddSzkodaMutationVariables> mutation={AddSzkodaDocument} {...props} />
    );
    
export type AddSzkodaProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddSzkodaMutation, AddSzkodaMutationVariables>
    } & TChildProps;
export function withAddSzkoda<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddSzkodaMutation,
  AddSzkodaMutationVariables,
  AddSzkodaProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddSzkodaMutation, AddSzkodaMutationVariables, AddSzkodaProps<TChildProps, TDataName>>(AddSzkodaDocument, {
      alias: 'addSzkoda',
      ...operationOptions
    });
};

/**
 * __useAddSzkodaMutation__
 *
 * To run a mutation, you first call `useAddSzkodaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSzkodaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSzkodaMutation, { data, loading, error }] = useAddSzkodaMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddSzkodaMutation(baseOptions?: Apollo.MutationHookOptions<AddSzkodaMutation, AddSzkodaMutationVariables>) {
        return Apollo.useMutation<AddSzkodaMutation, AddSzkodaMutationVariables>(AddSzkodaDocument, baseOptions);
      }
export type AddSzkodaMutationHookResult = ReturnType<typeof useAddSzkodaMutation>;
export type AddSzkodaMutationResult = Apollo.MutationResult<AddSzkodaMutation>;
export type AddSzkodaMutationOptions = Apollo.BaseMutationOptions<AddSzkodaMutation, AddSzkodaMutationVariables>;
export const AddUzytkownikDocument = gql`
    mutation AddUzytkownik($data: Uzytkownik_insert_input!) {
  insert_Uzytkownik_one(object: $data) {
    id
  }
}
    `;
export type AddUzytkownikMutationFn = Apollo.MutationFunction<AddUzytkownikMutation, AddUzytkownikMutationVariables>;
export type AddUzytkownikComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddUzytkownikMutation, AddUzytkownikMutationVariables>, 'mutation'>;

    export const AddUzytkownikComponent = (props: AddUzytkownikComponentProps) => (
      <ApolloReactComponents.Mutation<AddUzytkownikMutation, AddUzytkownikMutationVariables> mutation={AddUzytkownikDocument} {...props} />
    );
    
export type AddUzytkownikProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddUzytkownikMutation, AddUzytkownikMutationVariables>
    } & TChildProps;
export function withAddUzytkownik<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddUzytkownikMutation,
  AddUzytkownikMutationVariables,
  AddUzytkownikProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddUzytkownikMutation, AddUzytkownikMutationVariables, AddUzytkownikProps<TChildProps, TDataName>>(AddUzytkownikDocument, {
      alias: 'addUzytkownik',
      ...operationOptions
    });
};

/**
 * __useAddUzytkownikMutation__
 *
 * To run a mutation, you first call `useAddUzytkownikMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUzytkownikMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUzytkownikMutation, { data, loading, error }] = useAddUzytkownikMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddUzytkownikMutation(baseOptions?: Apollo.MutationHookOptions<AddUzytkownikMutation, AddUzytkownikMutationVariables>) {
        return Apollo.useMutation<AddUzytkownikMutation, AddUzytkownikMutationVariables>(AddUzytkownikDocument, baseOptions);
      }
export type AddUzytkownikMutationHookResult = ReturnType<typeof useAddUzytkownikMutation>;
export type AddUzytkownikMutationResult = Apollo.MutationResult<AddUzytkownikMutation>;
export type AddUzytkownikMutationOptions = Apollo.BaseMutationOptions<AddUzytkownikMutation, AddUzytkownikMutationVariables>;
export const UpdateAutoByPkDocument = gql`
    mutation UpdateAutoByPk($id: Int!, $data: Auto_set_input!) {
  update_Auto_by_pk(pk_columns: {id: $id}, _set: $data) {
    id
  }
}
    `;
export type UpdateAutoByPkMutationFn = Apollo.MutationFunction<UpdateAutoByPkMutation, UpdateAutoByPkMutationVariables>;
export type UpdateAutoByPkComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAutoByPkMutation, UpdateAutoByPkMutationVariables>, 'mutation'>;

    export const UpdateAutoByPkComponent = (props: UpdateAutoByPkComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAutoByPkMutation, UpdateAutoByPkMutationVariables> mutation={UpdateAutoByPkDocument} {...props} />
    );
    
export type UpdateAutoByPkProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateAutoByPkMutation, UpdateAutoByPkMutationVariables>
    } & TChildProps;
export function withUpdateAutoByPk<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAutoByPkMutation,
  UpdateAutoByPkMutationVariables,
  UpdateAutoByPkProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAutoByPkMutation, UpdateAutoByPkMutationVariables, UpdateAutoByPkProps<TChildProps, TDataName>>(UpdateAutoByPkDocument, {
      alias: 'updateAutoByPk',
      ...operationOptions
    });
};

/**
 * __useUpdateAutoByPkMutation__
 *
 * To run a mutation, you first call `useUpdateAutoByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAutoByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAutoByPkMutation, { data, loading, error }] = useUpdateAutoByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAutoByPkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAutoByPkMutation, UpdateAutoByPkMutationVariables>) {
        return Apollo.useMutation<UpdateAutoByPkMutation, UpdateAutoByPkMutationVariables>(UpdateAutoByPkDocument, baseOptions);
      }
export type UpdateAutoByPkMutationHookResult = ReturnType<typeof useUpdateAutoByPkMutation>;
export type UpdateAutoByPkMutationResult = Apollo.MutationResult<UpdateAutoByPkMutation>;
export type UpdateAutoByPkMutationOptions = Apollo.BaseMutationOptions<UpdateAutoByPkMutation, UpdateAutoByPkMutationVariables>;
export const UpdateGrupaAutKlientaByPkDocument = gql`
    mutation UpdateGrupaAutKlientaByPK($id: Int!, $data: Grupa_Aut_Klienta_set_input!) {
  update_Grupa_Aut_Klienta_by_pk(pk_columns: {id: $id}, _set: $data) {
    id_auto
  }
}
    `;
export type UpdateGrupaAutKlientaByPkMutationFn = Apollo.MutationFunction<UpdateGrupaAutKlientaByPkMutation, UpdateGrupaAutKlientaByPkMutationVariables>;
export type UpdateGrupaAutKlientaByPkComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateGrupaAutKlientaByPkMutation, UpdateGrupaAutKlientaByPkMutationVariables>, 'mutation'>;

    export const UpdateGrupaAutKlientaByPkComponent = (props: UpdateGrupaAutKlientaByPkComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateGrupaAutKlientaByPkMutation, UpdateGrupaAutKlientaByPkMutationVariables> mutation={UpdateGrupaAutKlientaByPkDocument} {...props} />
    );
    
export type UpdateGrupaAutKlientaByPkProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateGrupaAutKlientaByPkMutation, UpdateGrupaAutKlientaByPkMutationVariables>
    } & TChildProps;
export function withUpdateGrupaAutKlientaByPk<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateGrupaAutKlientaByPkMutation,
  UpdateGrupaAutKlientaByPkMutationVariables,
  UpdateGrupaAutKlientaByPkProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateGrupaAutKlientaByPkMutation, UpdateGrupaAutKlientaByPkMutationVariables, UpdateGrupaAutKlientaByPkProps<TChildProps, TDataName>>(UpdateGrupaAutKlientaByPkDocument, {
      alias: 'updateGrupaAutKlientaByPk',
      ...operationOptions
    });
};

/**
 * __useUpdateGrupaAutKlientaByPkMutation__
 *
 * To run a mutation, you first call `useUpdateGrupaAutKlientaByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGrupaAutKlientaByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGrupaAutKlientaByPkMutation, { data, loading, error }] = useUpdateGrupaAutKlientaByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateGrupaAutKlientaByPkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGrupaAutKlientaByPkMutation, UpdateGrupaAutKlientaByPkMutationVariables>) {
        return Apollo.useMutation<UpdateGrupaAutKlientaByPkMutation, UpdateGrupaAutKlientaByPkMutationVariables>(UpdateGrupaAutKlientaByPkDocument, baseOptions);
      }
export type UpdateGrupaAutKlientaByPkMutationHookResult = ReturnType<typeof useUpdateGrupaAutKlientaByPkMutation>;
export type UpdateGrupaAutKlientaByPkMutationResult = Apollo.MutationResult<UpdateGrupaAutKlientaByPkMutation>;
export type UpdateGrupaAutKlientaByPkMutationOptions = Apollo.BaseMutationOptions<UpdateGrupaAutKlientaByPkMutation, UpdateGrupaAutKlientaByPkMutationVariables>;
export const UpdateHistoriaByPkDocument = gql`
    mutation UpdateHistoriaByPk($id: Int!, $data: Historia_Uzytkownik_Auto_set_input!) {
  update_Historia_Uzytkownik_Auto_by_pk(pk_columns: {id: $id}, _set: $data) {
    id
    id_auto
  }
}
    `;
export type UpdateHistoriaByPkMutationFn = Apollo.MutationFunction<UpdateHistoriaByPkMutation, UpdateHistoriaByPkMutationVariables>;
export type UpdateHistoriaByPkComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateHistoriaByPkMutation, UpdateHistoriaByPkMutationVariables>, 'mutation'>;

    export const UpdateHistoriaByPkComponent = (props: UpdateHistoriaByPkComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateHistoriaByPkMutation, UpdateHistoriaByPkMutationVariables> mutation={UpdateHistoriaByPkDocument} {...props} />
    );
    
export type UpdateHistoriaByPkProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateHistoriaByPkMutation, UpdateHistoriaByPkMutationVariables>
    } & TChildProps;
export function withUpdateHistoriaByPk<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateHistoriaByPkMutation,
  UpdateHistoriaByPkMutationVariables,
  UpdateHistoriaByPkProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateHistoriaByPkMutation, UpdateHistoriaByPkMutationVariables, UpdateHistoriaByPkProps<TChildProps, TDataName>>(UpdateHistoriaByPkDocument, {
      alias: 'updateHistoriaByPk',
      ...operationOptions
    });
};

/**
 * __useUpdateHistoriaByPkMutation__
 *
 * To run a mutation, you first call `useUpdateHistoriaByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHistoriaByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHistoriaByPkMutation, { data, loading, error }] = useUpdateHistoriaByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateHistoriaByPkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHistoriaByPkMutation, UpdateHistoriaByPkMutationVariables>) {
        return Apollo.useMutation<UpdateHistoriaByPkMutation, UpdateHistoriaByPkMutationVariables>(UpdateHistoriaByPkDocument, baseOptions);
      }
export type UpdateHistoriaByPkMutationHookResult = ReturnType<typeof useUpdateHistoriaByPkMutation>;
export type UpdateHistoriaByPkMutationResult = Apollo.MutationResult<UpdateHistoriaByPkMutation>;
export type UpdateHistoriaByPkMutationOptions = Apollo.BaseMutationOptions<UpdateHistoriaByPkMutation, UpdateHistoriaByPkMutationVariables>;
export const UpdateKartaOrlenByPkDocument = gql`
    mutation UpdateKartaOrlenByPk($id: Int!, $data: Karta_Orlen_set_input!) {
  update_Karta_Orlen_by_pk(pk_columns: {id: $id}, _set: $data) {
    id_auto
  }
}
    `;
export type UpdateKartaOrlenByPkMutationFn = Apollo.MutationFunction<UpdateKartaOrlenByPkMutation, UpdateKartaOrlenByPkMutationVariables>;
export type UpdateKartaOrlenByPkComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateKartaOrlenByPkMutation, UpdateKartaOrlenByPkMutationVariables>, 'mutation'>;

    export const UpdateKartaOrlenByPkComponent = (props: UpdateKartaOrlenByPkComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateKartaOrlenByPkMutation, UpdateKartaOrlenByPkMutationVariables> mutation={UpdateKartaOrlenByPkDocument} {...props} />
    );
    
export type UpdateKartaOrlenByPkProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateKartaOrlenByPkMutation, UpdateKartaOrlenByPkMutationVariables>
    } & TChildProps;
export function withUpdateKartaOrlenByPk<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateKartaOrlenByPkMutation,
  UpdateKartaOrlenByPkMutationVariables,
  UpdateKartaOrlenByPkProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateKartaOrlenByPkMutation, UpdateKartaOrlenByPkMutationVariables, UpdateKartaOrlenByPkProps<TChildProps, TDataName>>(UpdateKartaOrlenByPkDocument, {
      alias: 'updateKartaOrlenByPk',
      ...operationOptions
    });
};

/**
 * __useUpdateKartaOrlenByPkMutation__
 *
 * To run a mutation, you first call `useUpdateKartaOrlenByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateKartaOrlenByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateKartaOrlenByPkMutation, { data, loading, error }] = useUpdateKartaOrlenByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateKartaOrlenByPkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateKartaOrlenByPkMutation, UpdateKartaOrlenByPkMutationVariables>) {
        return Apollo.useMutation<UpdateKartaOrlenByPkMutation, UpdateKartaOrlenByPkMutationVariables>(UpdateKartaOrlenByPkDocument, baseOptions);
      }
export type UpdateKartaOrlenByPkMutationHookResult = ReturnType<typeof useUpdateKartaOrlenByPkMutation>;
export type UpdateKartaOrlenByPkMutationResult = Apollo.MutationResult<UpdateKartaOrlenByPkMutation>;
export type UpdateKartaOrlenByPkMutationOptions = Apollo.BaseMutationOptions<UpdateKartaOrlenByPkMutation, UpdateKartaOrlenByPkMutationVariables>;
export const UpdateMandatByPkDocument = gql`
    mutation UpdateMandatByPK($id: Int!, $data: Mandat_set_input!) {
  update_Mandat_by_pk(pk_columns: {id: $id}, _set: $data) {
    id_auto
  }
}
    `;
export type UpdateMandatByPkMutationFn = Apollo.MutationFunction<UpdateMandatByPkMutation, UpdateMandatByPkMutationVariables>;
export type UpdateMandatByPkComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateMandatByPkMutation, UpdateMandatByPkMutationVariables>, 'mutation'>;

    export const UpdateMandatByPkComponent = (props: UpdateMandatByPkComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateMandatByPkMutation, UpdateMandatByPkMutationVariables> mutation={UpdateMandatByPkDocument} {...props} />
    );
    
export type UpdateMandatByPkProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateMandatByPkMutation, UpdateMandatByPkMutationVariables>
    } & TChildProps;
export function withUpdateMandatByPk<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateMandatByPkMutation,
  UpdateMandatByPkMutationVariables,
  UpdateMandatByPkProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateMandatByPkMutation, UpdateMandatByPkMutationVariables, UpdateMandatByPkProps<TChildProps, TDataName>>(UpdateMandatByPkDocument, {
      alias: 'updateMandatByPk',
      ...operationOptions
    });
};

/**
 * __useUpdateMandatByPkMutation__
 *
 * To run a mutation, you first call `useUpdateMandatByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMandatByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMandatByPkMutation, { data, loading, error }] = useUpdateMandatByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateMandatByPkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMandatByPkMutation, UpdateMandatByPkMutationVariables>) {
        return Apollo.useMutation<UpdateMandatByPkMutation, UpdateMandatByPkMutationVariables>(UpdateMandatByPkDocument, baseOptions);
      }
export type UpdateMandatByPkMutationHookResult = ReturnType<typeof useUpdateMandatByPkMutation>;
export type UpdateMandatByPkMutationResult = Apollo.MutationResult<UpdateMandatByPkMutation>;
export type UpdateMandatByPkMutationOptions = Apollo.BaseMutationOptions<UpdateMandatByPkMutation, UpdateMandatByPkMutationVariables>;
export const UpdateOponaByPkDocument = gql`
    mutation UpdateOponaByPK($id: Int!, $data: Opona_set_input!) {
  update_Opona_by_pk(pk_columns: {id: $id}, _set: $data) {
    id_auto
  }
}
    `;
export type UpdateOponaByPkMutationFn = Apollo.MutationFunction<UpdateOponaByPkMutation, UpdateOponaByPkMutationVariables>;
export type UpdateOponaByPkComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateOponaByPkMutation, UpdateOponaByPkMutationVariables>, 'mutation'>;

    export const UpdateOponaByPkComponent = (props: UpdateOponaByPkComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateOponaByPkMutation, UpdateOponaByPkMutationVariables> mutation={UpdateOponaByPkDocument} {...props} />
    );
    
export type UpdateOponaByPkProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateOponaByPkMutation, UpdateOponaByPkMutationVariables>
    } & TChildProps;
export function withUpdateOponaByPk<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateOponaByPkMutation,
  UpdateOponaByPkMutationVariables,
  UpdateOponaByPkProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateOponaByPkMutation, UpdateOponaByPkMutationVariables, UpdateOponaByPkProps<TChildProps, TDataName>>(UpdateOponaByPkDocument, {
      alias: 'updateOponaByPk',
      ...operationOptions
    });
};

/**
 * __useUpdateOponaByPkMutation__
 *
 * To run a mutation, you first call `useUpdateOponaByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOponaByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOponaByPkMutation, { data, loading, error }] = useUpdateOponaByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOponaByPkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOponaByPkMutation, UpdateOponaByPkMutationVariables>) {
        return Apollo.useMutation<UpdateOponaByPkMutation, UpdateOponaByPkMutationVariables>(UpdateOponaByPkDocument, baseOptions);
      }
export type UpdateOponaByPkMutationHookResult = ReturnType<typeof useUpdateOponaByPkMutation>;
export type UpdateOponaByPkMutationResult = Apollo.MutationResult<UpdateOponaByPkMutation>;
export type UpdateOponaByPkMutationOptions = Apollo.BaseMutationOptions<UpdateOponaByPkMutation, UpdateOponaByPkMutationVariables>;
export const UpdatePolisaByPkDocument = gql`
    mutation UpdatePolisaByPK($id: Int!, $data: Polisa_set_input!) {
  update_Polisa_by_pk(pk_columns: {id: $id}, _set: $data) {
    id_auto
  }
}
    `;
export type UpdatePolisaByPkMutationFn = Apollo.MutationFunction<UpdatePolisaByPkMutation, UpdatePolisaByPkMutationVariables>;
export type UpdatePolisaByPkComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdatePolisaByPkMutation, UpdatePolisaByPkMutationVariables>, 'mutation'>;

    export const UpdatePolisaByPkComponent = (props: UpdatePolisaByPkComponentProps) => (
      <ApolloReactComponents.Mutation<UpdatePolisaByPkMutation, UpdatePolisaByPkMutationVariables> mutation={UpdatePolisaByPkDocument} {...props} />
    );
    
export type UpdatePolisaByPkProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdatePolisaByPkMutation, UpdatePolisaByPkMutationVariables>
    } & TChildProps;
export function withUpdatePolisaByPk<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdatePolisaByPkMutation,
  UpdatePolisaByPkMutationVariables,
  UpdatePolisaByPkProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdatePolisaByPkMutation, UpdatePolisaByPkMutationVariables, UpdatePolisaByPkProps<TChildProps, TDataName>>(UpdatePolisaByPkDocument, {
      alias: 'updatePolisaByPk',
      ...operationOptions
    });
};

/**
 * __useUpdatePolisaByPkMutation__
 *
 * To run a mutation, you first call `useUpdatePolisaByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePolisaByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePolisaByPkMutation, { data, loading, error }] = useUpdatePolisaByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePolisaByPkMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePolisaByPkMutation, UpdatePolisaByPkMutationVariables>) {
        return Apollo.useMutation<UpdatePolisaByPkMutation, UpdatePolisaByPkMutationVariables>(UpdatePolisaByPkDocument, baseOptions);
      }
export type UpdatePolisaByPkMutationHookResult = ReturnType<typeof useUpdatePolisaByPkMutation>;
export type UpdatePolisaByPkMutationResult = Apollo.MutationResult<UpdatePolisaByPkMutation>;
export type UpdatePolisaByPkMutationOptions = Apollo.BaseMutationOptions<UpdatePolisaByPkMutation, UpdatePolisaByPkMutationVariables>;
export const UpdatePrzebiegiByPkDocument = gql`
    mutation UpdatePrzebiegiByPK($id: Int!, $data: Przebieg_set_input!) {
  update_Przebieg_by_pk(pk_columns: {id: $id}, _set: $data) {
    id_auto
  }
}
    `;
export type UpdatePrzebiegiByPkMutationFn = Apollo.MutationFunction<UpdatePrzebiegiByPkMutation, UpdatePrzebiegiByPkMutationVariables>;
export type UpdatePrzebiegiByPkComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdatePrzebiegiByPkMutation, UpdatePrzebiegiByPkMutationVariables>, 'mutation'>;

    export const UpdatePrzebiegiByPkComponent = (props: UpdatePrzebiegiByPkComponentProps) => (
      <ApolloReactComponents.Mutation<UpdatePrzebiegiByPkMutation, UpdatePrzebiegiByPkMutationVariables> mutation={UpdatePrzebiegiByPkDocument} {...props} />
    );
    
export type UpdatePrzebiegiByPkProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdatePrzebiegiByPkMutation, UpdatePrzebiegiByPkMutationVariables>
    } & TChildProps;
export function withUpdatePrzebiegiByPk<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdatePrzebiegiByPkMutation,
  UpdatePrzebiegiByPkMutationVariables,
  UpdatePrzebiegiByPkProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdatePrzebiegiByPkMutation, UpdatePrzebiegiByPkMutationVariables, UpdatePrzebiegiByPkProps<TChildProps, TDataName>>(UpdatePrzebiegiByPkDocument, {
      alias: 'updatePrzebiegiByPk',
      ...operationOptions
    });
};

/**
 * __useUpdatePrzebiegiByPkMutation__
 *
 * To run a mutation, you first call `useUpdatePrzebiegiByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePrzebiegiByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePrzebiegiByPkMutation, { data, loading, error }] = useUpdatePrzebiegiByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePrzebiegiByPkMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePrzebiegiByPkMutation, UpdatePrzebiegiByPkMutationVariables>) {
        return Apollo.useMutation<UpdatePrzebiegiByPkMutation, UpdatePrzebiegiByPkMutationVariables>(UpdatePrzebiegiByPkDocument, baseOptions);
      }
export type UpdatePrzebiegiByPkMutationHookResult = ReturnType<typeof useUpdatePrzebiegiByPkMutation>;
export type UpdatePrzebiegiByPkMutationResult = Apollo.MutationResult<UpdatePrzebiegiByPkMutation>;
export type UpdatePrzebiegiByPkMutationOptions = Apollo.BaseMutationOptions<UpdatePrzebiegiByPkMutation, UpdatePrzebiegiByPkMutationVariables>;
export const UpdatePrzegladByPkDocument = gql`
    mutation UpdatePrzegladByPk($id: Int!, $data: Przeglad_set_input!, $idPrzegladKosztaDodatkowe: Int!, $dataPrzegladKosztaDodatkowe: Przeglad_Koszta_Dodatkowe_set_input!) {
  update_Przeglad_by_pk(pk_columns: {id: $id}, _set: $data) {
    id_auto
  }
  update_Przeglad_Koszta_Dodatkowe_by_pk(
    pk_columns: {id: $idPrzegladKosztaDodatkowe}
    _set: $dataPrzegladKosztaDodatkowe
  ) {
    id
  }
}
    `;
export type UpdatePrzegladByPkMutationFn = Apollo.MutationFunction<UpdatePrzegladByPkMutation, UpdatePrzegladByPkMutationVariables>;
export type UpdatePrzegladByPkComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdatePrzegladByPkMutation, UpdatePrzegladByPkMutationVariables>, 'mutation'>;

    export const UpdatePrzegladByPkComponent = (props: UpdatePrzegladByPkComponentProps) => (
      <ApolloReactComponents.Mutation<UpdatePrzegladByPkMutation, UpdatePrzegladByPkMutationVariables> mutation={UpdatePrzegladByPkDocument} {...props} />
    );
    
export type UpdatePrzegladByPkProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdatePrzegladByPkMutation, UpdatePrzegladByPkMutationVariables>
    } & TChildProps;
export function withUpdatePrzegladByPk<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdatePrzegladByPkMutation,
  UpdatePrzegladByPkMutationVariables,
  UpdatePrzegladByPkProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdatePrzegladByPkMutation, UpdatePrzegladByPkMutationVariables, UpdatePrzegladByPkProps<TChildProps, TDataName>>(UpdatePrzegladByPkDocument, {
      alias: 'updatePrzegladByPk',
      ...operationOptions
    });
};

/**
 * __useUpdatePrzegladByPkMutation__
 *
 * To run a mutation, you first call `useUpdatePrzegladByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePrzegladByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePrzegladByPkMutation, { data, loading, error }] = useUpdatePrzegladByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *      idPrzegladKosztaDodatkowe: // value for 'idPrzegladKosztaDodatkowe'
 *      dataPrzegladKosztaDodatkowe: // value for 'dataPrzegladKosztaDodatkowe'
 *   },
 * });
 */
export function useUpdatePrzegladByPkMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePrzegladByPkMutation, UpdatePrzegladByPkMutationVariables>) {
        return Apollo.useMutation<UpdatePrzegladByPkMutation, UpdatePrzegladByPkMutationVariables>(UpdatePrzegladByPkDocument, baseOptions);
      }
export type UpdatePrzegladByPkMutationHookResult = ReturnType<typeof useUpdatePrzegladByPkMutation>;
export type UpdatePrzegladByPkMutationResult = Apollo.MutationResult<UpdatePrzegladByPkMutation>;
export type UpdatePrzegladByPkMutationOptions = Apollo.BaseMutationOptions<UpdatePrzegladByPkMutation, UpdatePrzegladByPkMutationVariables>;
export const UpdateSzkodyByPkDocument = gql`
    mutation UpdateSzkodyByPK($id: Int!, $data: Szkoda_set_input!) {
  update_Szkoda_by_pk(pk_columns: {id: $id}, _set: $data) {
    id_auto
  }
}
    `;
export type UpdateSzkodyByPkMutationFn = Apollo.MutationFunction<UpdateSzkodyByPkMutation, UpdateSzkodyByPkMutationVariables>;
export type UpdateSzkodyByPkComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateSzkodyByPkMutation, UpdateSzkodyByPkMutationVariables>, 'mutation'>;

    export const UpdateSzkodyByPkComponent = (props: UpdateSzkodyByPkComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateSzkodyByPkMutation, UpdateSzkodyByPkMutationVariables> mutation={UpdateSzkodyByPkDocument} {...props} />
    );
    
export type UpdateSzkodyByPkProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateSzkodyByPkMutation, UpdateSzkodyByPkMutationVariables>
    } & TChildProps;
export function withUpdateSzkodyByPk<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateSzkodyByPkMutation,
  UpdateSzkodyByPkMutationVariables,
  UpdateSzkodyByPkProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateSzkodyByPkMutation, UpdateSzkodyByPkMutationVariables, UpdateSzkodyByPkProps<TChildProps, TDataName>>(UpdateSzkodyByPkDocument, {
      alias: 'updateSzkodyByPk',
      ...operationOptions
    });
};

/**
 * __useUpdateSzkodyByPkMutation__
 *
 * To run a mutation, you first call `useUpdateSzkodyByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSzkodyByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSzkodyByPkMutation, { data, loading, error }] = useUpdateSzkodyByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateSzkodyByPkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSzkodyByPkMutation, UpdateSzkodyByPkMutationVariables>) {
        return Apollo.useMutation<UpdateSzkodyByPkMutation, UpdateSzkodyByPkMutationVariables>(UpdateSzkodyByPkDocument, baseOptions);
      }
export type UpdateSzkodyByPkMutationHookResult = ReturnType<typeof useUpdateSzkodyByPkMutation>;
export type UpdateSzkodyByPkMutationResult = Apollo.MutationResult<UpdateSzkodyByPkMutation>;
export type UpdateSzkodyByPkMutationOptions = Apollo.BaseMutationOptions<UpdateSzkodyByPkMutation, UpdateSzkodyByPkMutationVariables>;
export const GetAllAutoDocument = gql`
    query GetAllAuto {
  Auto {
    id
    marka
    model
    rok_produkcji
    stan_licznika
    paliwo
    is_w_uzyciu
    numer_rejestracyjny
    numer_vin
  }
}
    `;
export type GetAllAutoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllAutoQuery, GetAllAutoQueryVariables>, 'query'>;

    export const GetAllAutoComponent = (props: GetAllAutoComponentProps) => (
      <ApolloReactComponents.Query<GetAllAutoQuery, GetAllAutoQueryVariables> query={GetAllAutoDocument} {...props} />
    );
    
export type GetAllAutoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllAutoQuery, GetAllAutoQueryVariables>
    } & TChildProps;
export function withGetAllAuto<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllAutoQuery,
  GetAllAutoQueryVariables,
  GetAllAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllAutoQuery, GetAllAutoQueryVariables, GetAllAutoProps<TChildProps, TDataName>>(GetAllAutoDocument, {
      alias: 'getAllAuto',
      ...operationOptions
    });
};

/**
 * __useGetAllAutoQuery__
 *
 * To run a query within a React component, call `useGetAllAutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAutoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllAutoQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAutoQuery, GetAllAutoQueryVariables>) {
        return Apollo.useQuery<GetAllAutoQuery, GetAllAutoQueryVariables>(GetAllAutoDocument, baseOptions);
      }
export function useGetAllAutoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAutoQuery, GetAllAutoQueryVariables>) {
          return Apollo.useLazyQuery<GetAllAutoQuery, GetAllAutoQueryVariables>(GetAllAutoDocument, baseOptions);
        }
export type GetAllAutoQueryHookResult = ReturnType<typeof useGetAllAutoQuery>;
export type GetAllAutoLazyQueryHookResult = ReturnType<typeof useGetAllAutoLazyQuery>;
export type GetAllAutoQueryResult = Apollo.QueryResult<GetAllAutoQuery, GetAllAutoQueryVariables>;
export const GetAllAutoAndPrzebiegiWithDateDocument = gql`
    query GetAllAutoAndPrzebiegiWithDate($date_from: date!, $date_to: date!) {
  Auto {
    id
    marka
    model
    rok_produkcji
    stan_licznika
    paliwo
    numer_rejestracyjny
    numer_vin
    is_w_uzyciu
    Last_month_Przebiegs_aggregate: Przebiegs_aggregate(
      where: {data_przebiegu: {_lt: $date_from}}
    ) {
      aggregate {
        max {
          przebieg
        }
      }
    }
    Przebiegs_aggregate(
      where: {_and: [{data_przebiegu: {_gte: $date_from}}, {data_przebiegu: {_lte: $date_to}}]}
    ) {
      aggregate {
        min {
          przebieg
        }
        max {
          przebieg
        }
      }
    }
  }
}
    `;
export type GetAllAutoAndPrzebiegiWithDateComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllAutoAndPrzebiegiWithDateQuery, GetAllAutoAndPrzebiegiWithDateQueryVariables>, 'query'> & ({ variables: GetAllAutoAndPrzebiegiWithDateQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetAllAutoAndPrzebiegiWithDateComponent = (props: GetAllAutoAndPrzebiegiWithDateComponentProps) => (
      <ApolloReactComponents.Query<GetAllAutoAndPrzebiegiWithDateQuery, GetAllAutoAndPrzebiegiWithDateQueryVariables> query={GetAllAutoAndPrzebiegiWithDateDocument} {...props} />
    );
    
export type GetAllAutoAndPrzebiegiWithDateProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllAutoAndPrzebiegiWithDateQuery, GetAllAutoAndPrzebiegiWithDateQueryVariables>
    } & TChildProps;
export function withGetAllAutoAndPrzebiegiWithDate<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllAutoAndPrzebiegiWithDateQuery,
  GetAllAutoAndPrzebiegiWithDateQueryVariables,
  GetAllAutoAndPrzebiegiWithDateProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllAutoAndPrzebiegiWithDateQuery, GetAllAutoAndPrzebiegiWithDateQueryVariables, GetAllAutoAndPrzebiegiWithDateProps<TChildProps, TDataName>>(GetAllAutoAndPrzebiegiWithDateDocument, {
      alias: 'getAllAutoAndPrzebiegiWithDate',
      ...operationOptions
    });
};

/**
 * __useGetAllAutoAndPrzebiegiWithDateQuery__
 *
 * To run a query within a React component, call `useGetAllAutoAndPrzebiegiWithDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAutoAndPrzebiegiWithDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAutoAndPrzebiegiWithDateQuery({
 *   variables: {
 *      date_from: // value for 'date_from'
 *      date_to: // value for 'date_to'
 *   },
 * });
 */
export function useGetAllAutoAndPrzebiegiWithDateQuery(baseOptions: Apollo.QueryHookOptions<GetAllAutoAndPrzebiegiWithDateQuery, GetAllAutoAndPrzebiegiWithDateQueryVariables>) {
        return Apollo.useQuery<GetAllAutoAndPrzebiegiWithDateQuery, GetAllAutoAndPrzebiegiWithDateQueryVariables>(GetAllAutoAndPrzebiegiWithDateDocument, baseOptions);
      }
export function useGetAllAutoAndPrzebiegiWithDateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAutoAndPrzebiegiWithDateQuery, GetAllAutoAndPrzebiegiWithDateQueryVariables>) {
          return Apollo.useLazyQuery<GetAllAutoAndPrzebiegiWithDateQuery, GetAllAutoAndPrzebiegiWithDateQueryVariables>(GetAllAutoAndPrzebiegiWithDateDocument, baseOptions);
        }
export type GetAllAutoAndPrzebiegiWithDateQueryHookResult = ReturnType<typeof useGetAllAutoAndPrzebiegiWithDateQuery>;
export type GetAllAutoAndPrzebiegiWithDateLazyQueryHookResult = ReturnType<typeof useGetAllAutoAndPrzebiegiWithDateLazyQuery>;
export type GetAllAutoAndPrzebiegiWithDateQueryResult = Apollo.QueryResult<GetAllAutoAndPrzebiegiWithDateQuery, GetAllAutoAndPrzebiegiWithDateQueryVariables>;
export const GetAllKlientDocument = gql`
    query GetAllKlient {
  Klient {
    id
    kontakt
    nazwa
  }
}
    `;
export type GetAllKlientComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllKlientQuery, GetAllKlientQueryVariables>, 'query'>;

    export const GetAllKlientComponent = (props: GetAllKlientComponentProps) => (
      <ApolloReactComponents.Query<GetAllKlientQuery, GetAllKlientQueryVariables> query={GetAllKlientDocument} {...props} />
    );
    
export type GetAllKlientProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllKlientQuery, GetAllKlientQueryVariables>
    } & TChildProps;
export function withGetAllKlient<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllKlientQuery,
  GetAllKlientQueryVariables,
  GetAllKlientProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllKlientQuery, GetAllKlientQueryVariables, GetAllKlientProps<TChildProps, TDataName>>(GetAllKlientDocument, {
      alias: 'getAllKlient',
      ...operationOptions
    });
};

/**
 * __useGetAllKlientQuery__
 *
 * To run a query within a React component, call `useGetAllKlientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllKlientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllKlientQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllKlientQuery(baseOptions?: Apollo.QueryHookOptions<GetAllKlientQuery, GetAllKlientQueryVariables>) {
        return Apollo.useQuery<GetAllKlientQuery, GetAllKlientQueryVariables>(GetAllKlientDocument, baseOptions);
      }
export function useGetAllKlientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllKlientQuery, GetAllKlientQueryVariables>) {
          return Apollo.useLazyQuery<GetAllKlientQuery, GetAllKlientQueryVariables>(GetAllKlientDocument, baseOptions);
        }
export type GetAllKlientQueryHookResult = ReturnType<typeof useGetAllKlientQuery>;
export type GetAllKlientLazyQueryHookResult = ReturnType<typeof useGetAllKlientLazyQuery>;
export type GetAllKlientQueryResult = Apollo.QueryResult<GetAllKlientQuery, GetAllKlientQueryVariables>;
export const GetAllPrzegladyOtKilometryDocument = gql`
    query GetAllPrzegladyOtKilometry {
  Przeglad_OT_Kilometry(order_by: {ilosc_kilometrow_w_tysiacach: asc}) {
    id
    ilosc_kilometrow_w_tysiacach
  }
}
    `;
export type GetAllPrzegladyOtKilometryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllPrzegladyOtKilometryQuery, GetAllPrzegladyOtKilometryQueryVariables>, 'query'>;

    export const GetAllPrzegladyOtKilometryComponent = (props: GetAllPrzegladyOtKilometryComponentProps) => (
      <ApolloReactComponents.Query<GetAllPrzegladyOtKilometryQuery, GetAllPrzegladyOtKilometryQueryVariables> query={GetAllPrzegladyOtKilometryDocument} {...props} />
    );
    
export type GetAllPrzegladyOtKilometryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllPrzegladyOtKilometryQuery, GetAllPrzegladyOtKilometryQueryVariables>
    } & TChildProps;
export function withGetAllPrzegladyOtKilometry<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllPrzegladyOtKilometryQuery,
  GetAllPrzegladyOtKilometryQueryVariables,
  GetAllPrzegladyOtKilometryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllPrzegladyOtKilometryQuery, GetAllPrzegladyOtKilometryQueryVariables, GetAllPrzegladyOtKilometryProps<TChildProps, TDataName>>(GetAllPrzegladyOtKilometryDocument, {
      alias: 'getAllPrzegladyOtKilometry',
      ...operationOptions
    });
};

/**
 * __useGetAllPrzegladyOtKilometryQuery__
 *
 * To run a query within a React component, call `useGetAllPrzegladyOtKilometryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPrzegladyOtKilometryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPrzegladyOtKilometryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPrzegladyOtKilometryQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPrzegladyOtKilometryQuery, GetAllPrzegladyOtKilometryQueryVariables>) {
        return Apollo.useQuery<GetAllPrzegladyOtKilometryQuery, GetAllPrzegladyOtKilometryQueryVariables>(GetAllPrzegladyOtKilometryDocument, baseOptions);
      }
export function useGetAllPrzegladyOtKilometryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPrzegladyOtKilometryQuery, GetAllPrzegladyOtKilometryQueryVariables>) {
          return Apollo.useLazyQuery<GetAllPrzegladyOtKilometryQuery, GetAllPrzegladyOtKilometryQueryVariables>(GetAllPrzegladyOtKilometryDocument, baseOptions);
        }
export type GetAllPrzegladyOtKilometryQueryHookResult = ReturnType<typeof useGetAllPrzegladyOtKilometryQuery>;
export type GetAllPrzegladyOtKilometryLazyQueryHookResult = ReturnType<typeof useGetAllPrzegladyOtKilometryLazyQuery>;
export type GetAllPrzegladyOtKilometryQueryResult = Apollo.QueryResult<GetAllPrzegladyOtKilometryQuery, GetAllPrzegladyOtKilometryQueryVariables>;
export const GetAllStatusSzkodyDocument = gql`
    query GetAllStatusSzkody {
  Status_Szkody {
    id
    nazwa_statusu
  }
}
    `;
export type GetAllStatusSzkodyComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllStatusSzkodyQuery, GetAllStatusSzkodyQueryVariables>, 'query'>;

    export const GetAllStatusSzkodyComponent = (props: GetAllStatusSzkodyComponentProps) => (
      <ApolloReactComponents.Query<GetAllStatusSzkodyQuery, GetAllStatusSzkodyQueryVariables> query={GetAllStatusSzkodyDocument} {...props} />
    );
    
export type GetAllStatusSzkodyProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllStatusSzkodyQuery, GetAllStatusSzkodyQueryVariables>
    } & TChildProps;
export function withGetAllStatusSzkody<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllStatusSzkodyQuery,
  GetAllStatusSzkodyQueryVariables,
  GetAllStatusSzkodyProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllStatusSzkodyQuery, GetAllStatusSzkodyQueryVariables, GetAllStatusSzkodyProps<TChildProps, TDataName>>(GetAllStatusSzkodyDocument, {
      alias: 'getAllStatusSzkody',
      ...operationOptions
    });
};

/**
 * __useGetAllStatusSzkodyQuery__
 *
 * To run a query within a React component, call `useGetAllStatusSzkodyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllStatusSzkodyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllStatusSzkodyQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllStatusSzkodyQuery(baseOptions?: Apollo.QueryHookOptions<GetAllStatusSzkodyQuery, GetAllStatusSzkodyQueryVariables>) {
        return Apollo.useQuery<GetAllStatusSzkodyQuery, GetAllStatusSzkodyQueryVariables>(GetAllStatusSzkodyDocument, baseOptions);
      }
export function useGetAllStatusSzkodyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllStatusSzkodyQuery, GetAllStatusSzkodyQueryVariables>) {
          return Apollo.useLazyQuery<GetAllStatusSzkodyQuery, GetAllStatusSzkodyQueryVariables>(GetAllStatusSzkodyDocument, baseOptions);
        }
export type GetAllStatusSzkodyQueryHookResult = ReturnType<typeof useGetAllStatusSzkodyQuery>;
export type GetAllStatusSzkodyLazyQueryHookResult = ReturnType<typeof useGetAllStatusSzkodyLazyQuery>;
export type GetAllStatusSzkodyQueryResult = Apollo.QueryResult<GetAllStatusSzkodyQuery, GetAllStatusSzkodyQueryVariables>;
export const GetAllTypyOponDocument = gql`
    query GetAllTypyOpon {
  Typy_Opon {
    id
    nazwa_typu
  }
}
    `;
export type GetAllTypyOponComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllTypyOponQuery, GetAllTypyOponQueryVariables>, 'query'>;

    export const GetAllTypyOponComponent = (props: GetAllTypyOponComponentProps) => (
      <ApolloReactComponents.Query<GetAllTypyOponQuery, GetAllTypyOponQueryVariables> query={GetAllTypyOponDocument} {...props} />
    );
    
export type GetAllTypyOponProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllTypyOponQuery, GetAllTypyOponQueryVariables>
    } & TChildProps;
export function withGetAllTypyOpon<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllTypyOponQuery,
  GetAllTypyOponQueryVariables,
  GetAllTypyOponProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllTypyOponQuery, GetAllTypyOponQueryVariables, GetAllTypyOponProps<TChildProps, TDataName>>(GetAllTypyOponDocument, {
      alias: 'getAllTypyOpon',
      ...operationOptions
    });
};

/**
 * __useGetAllTypyOponQuery__
 *
 * To run a query within a React component, call `useGetAllTypyOponQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTypyOponQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTypyOponQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTypyOponQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTypyOponQuery, GetAllTypyOponQueryVariables>) {
        return Apollo.useQuery<GetAllTypyOponQuery, GetAllTypyOponQueryVariables>(GetAllTypyOponDocument, baseOptions);
      }
export function useGetAllTypyOponLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTypyOponQuery, GetAllTypyOponQueryVariables>) {
          return Apollo.useLazyQuery<GetAllTypyOponQuery, GetAllTypyOponQueryVariables>(GetAllTypyOponDocument, baseOptions);
        }
export type GetAllTypyOponQueryHookResult = ReturnType<typeof useGetAllTypyOponQuery>;
export type GetAllTypyOponLazyQueryHookResult = ReturnType<typeof useGetAllTypyOponLazyQuery>;
export type GetAllTypyOponQueryResult = Apollo.QueryResult<GetAllTypyOponQuery, GetAllTypyOponQueryVariables>;
export const GetAllUzytkownikDocument = gql`
    query GetAllUzytkownik {
  Uzytkownik {
    imie
    nazwisko
    miasto
    pesel
    telefon
    numer_prawa_jazdy
    id
    email
  }
}
    `;
export type GetAllUzytkownikComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllUzytkownikQuery, GetAllUzytkownikQueryVariables>, 'query'>;

    export const GetAllUzytkownikComponent = (props: GetAllUzytkownikComponentProps) => (
      <ApolloReactComponents.Query<GetAllUzytkownikQuery, GetAllUzytkownikQueryVariables> query={GetAllUzytkownikDocument} {...props} />
    );
    
export type GetAllUzytkownikProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllUzytkownikQuery, GetAllUzytkownikQueryVariables>
    } & TChildProps;
export function withGetAllUzytkownik<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllUzytkownikQuery,
  GetAllUzytkownikQueryVariables,
  GetAllUzytkownikProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllUzytkownikQuery, GetAllUzytkownikQueryVariables, GetAllUzytkownikProps<TChildProps, TDataName>>(GetAllUzytkownikDocument, {
      alias: 'getAllUzytkownik',
      ...operationOptions
    });
};

/**
 * __useGetAllUzytkownikQuery__
 *
 * To run a query within a React component, call `useGetAllUzytkownikQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUzytkownikQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUzytkownikQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUzytkownikQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUzytkownikQuery, GetAllUzytkownikQueryVariables>) {
        return Apollo.useQuery<GetAllUzytkownikQuery, GetAllUzytkownikQueryVariables>(GetAllUzytkownikDocument, baseOptions);
      }
export function useGetAllUzytkownikLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUzytkownikQuery, GetAllUzytkownikQueryVariables>) {
          return Apollo.useLazyQuery<GetAllUzytkownikQuery, GetAllUzytkownikQueryVariables>(GetAllUzytkownikDocument, baseOptions);
        }
export type GetAllUzytkownikQueryHookResult = ReturnType<typeof useGetAllUzytkownikQuery>;
export type GetAllUzytkownikLazyQueryHookResult = ReturnType<typeof useGetAllUzytkownikLazyQuery>;
export type GetAllUzytkownikQueryResult = Apollo.QueryResult<GetAllUzytkownikQuery, GetAllUzytkownikQueryVariables>;
export const GetAutoForAutoDocument = gql`
    query GetAutoForAuto($id: Int!) {
  Auto_by_pk(id: $id) {
    gwarancja
    id
    paliwo
    rok_produkcji
    marka
    model
    numer_vin
    numer_rejestracyjny
    uwagi
    is_w_uzyciu
  }
}
    `;
export type GetAutoForAutoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAutoForAutoQuery, GetAutoForAutoQueryVariables>, 'query'> & ({ variables: GetAutoForAutoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetAutoForAutoComponent = (props: GetAutoForAutoComponentProps) => (
      <ApolloReactComponents.Query<GetAutoForAutoQuery, GetAutoForAutoQueryVariables> query={GetAutoForAutoDocument} {...props} />
    );
    
export type GetAutoForAutoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAutoForAutoQuery, GetAutoForAutoQueryVariables>
    } & TChildProps;
export function withGetAutoForAuto<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAutoForAutoQuery,
  GetAutoForAutoQueryVariables,
  GetAutoForAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAutoForAutoQuery, GetAutoForAutoQueryVariables, GetAutoForAutoProps<TChildProps, TDataName>>(GetAutoForAutoDocument, {
      alias: 'getAutoForAuto',
      ...operationOptions
    });
};

/**
 * __useGetAutoForAutoQuery__
 *
 * To run a query within a React component, call `useGetAutoForAutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAutoForAutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAutoForAutoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAutoForAutoQuery(baseOptions: Apollo.QueryHookOptions<GetAutoForAutoQuery, GetAutoForAutoQueryVariables>) {
        return Apollo.useQuery<GetAutoForAutoQuery, GetAutoForAutoQueryVariables>(GetAutoForAutoDocument, baseOptions);
      }
export function useGetAutoForAutoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAutoForAutoQuery, GetAutoForAutoQueryVariables>) {
          return Apollo.useLazyQuery<GetAutoForAutoQuery, GetAutoForAutoQueryVariables>(GetAutoForAutoDocument, baseOptions);
        }
export type GetAutoForAutoQueryHookResult = ReturnType<typeof useGetAutoForAutoQuery>;
export type GetAutoForAutoLazyQueryHookResult = ReturnType<typeof useGetAutoForAutoLazyQuery>;
export type GetAutoForAutoQueryResult = Apollo.QueryResult<GetAutoForAutoQuery, GetAutoForAutoQueryVariables>;
export const GetCurrentUzytkownikForAutoDocument = gql`
    query GetCurrentUzytkownikForAuto($id_auto: Int!) {
  Historia_Uzytkownik_Auto(
    where: {_and: [{id_auto: {_eq: $id_auto}}, {data_oddania_auta: {_is_null: true}}]}
    order_by: {data_dodania_wlasciciela: desc_nulls_last}
    limit: 1
  ) {
    data_dodania_wlasciciela
    data_oddania_auta
    Uzytkownik {
      id
      imie
      nazwisko
      telefon
      pesel
      miasto
      numer_prawa_jazdy
      miasto
      email
    }
  }
}
    `;
export type GetCurrentUzytkownikForAutoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCurrentUzytkownikForAutoQuery, GetCurrentUzytkownikForAutoQueryVariables>, 'query'> & ({ variables: GetCurrentUzytkownikForAutoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetCurrentUzytkownikForAutoComponent = (props: GetCurrentUzytkownikForAutoComponentProps) => (
      <ApolloReactComponents.Query<GetCurrentUzytkownikForAutoQuery, GetCurrentUzytkownikForAutoQueryVariables> query={GetCurrentUzytkownikForAutoDocument} {...props} />
    );
    
export type GetCurrentUzytkownikForAutoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCurrentUzytkownikForAutoQuery, GetCurrentUzytkownikForAutoQueryVariables>
    } & TChildProps;
export function withGetCurrentUzytkownikForAuto<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCurrentUzytkownikForAutoQuery,
  GetCurrentUzytkownikForAutoQueryVariables,
  GetCurrentUzytkownikForAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCurrentUzytkownikForAutoQuery, GetCurrentUzytkownikForAutoQueryVariables, GetCurrentUzytkownikForAutoProps<TChildProps, TDataName>>(GetCurrentUzytkownikForAutoDocument, {
      alias: 'getCurrentUzytkownikForAuto',
      ...operationOptions
    });
};

/**
 * __useGetCurrentUzytkownikForAutoQuery__
 *
 * To run a query within a React component, call `useGetCurrentUzytkownikForAutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUzytkownikForAutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUzytkownikForAutoQuery({
 *   variables: {
 *      id_auto: // value for 'id_auto'
 *   },
 * });
 */
export function useGetCurrentUzytkownikForAutoQuery(baseOptions: Apollo.QueryHookOptions<GetCurrentUzytkownikForAutoQuery, GetCurrentUzytkownikForAutoQueryVariables>) {
        return Apollo.useQuery<GetCurrentUzytkownikForAutoQuery, GetCurrentUzytkownikForAutoQueryVariables>(GetCurrentUzytkownikForAutoDocument, baseOptions);
      }
export function useGetCurrentUzytkownikForAutoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUzytkownikForAutoQuery, GetCurrentUzytkownikForAutoQueryVariables>) {
          return Apollo.useLazyQuery<GetCurrentUzytkownikForAutoQuery, GetCurrentUzytkownikForAutoQueryVariables>(GetCurrentUzytkownikForAutoDocument, baseOptions);
        }
export type GetCurrentUzytkownikForAutoQueryHookResult = ReturnType<typeof useGetCurrentUzytkownikForAutoQuery>;
export type GetCurrentUzytkownikForAutoLazyQueryHookResult = ReturnType<typeof useGetCurrentUzytkownikForAutoLazyQuery>;
export type GetCurrentUzytkownikForAutoQueryResult = Apollo.QueryResult<GetCurrentUzytkownikForAutoQuery, GetCurrentUzytkownikForAutoQueryVariables>;
export const GetGrupaAutKlientaForAutoDocument = gql`
    query GetGrupaAutKlientaForAuto($id_auto: Int!) {
  Grupa_Aut_Klienta(where: {id_auto: {_eq: $id_auto}}) {
    id
    id_auto
    id_klient
    created_at
    Auto {
      id
    }
    Klient {
      id
      nazwa
      kontakt
    }
  }
}
    `;
export type GetGrupaAutKlientaForAutoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetGrupaAutKlientaForAutoQuery, GetGrupaAutKlientaForAutoQueryVariables>, 'query'> & ({ variables: GetGrupaAutKlientaForAutoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetGrupaAutKlientaForAutoComponent = (props: GetGrupaAutKlientaForAutoComponentProps) => (
      <ApolloReactComponents.Query<GetGrupaAutKlientaForAutoQuery, GetGrupaAutKlientaForAutoQueryVariables> query={GetGrupaAutKlientaForAutoDocument} {...props} />
    );
    
export type GetGrupaAutKlientaForAutoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetGrupaAutKlientaForAutoQuery, GetGrupaAutKlientaForAutoQueryVariables>
    } & TChildProps;
export function withGetGrupaAutKlientaForAuto<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetGrupaAutKlientaForAutoQuery,
  GetGrupaAutKlientaForAutoQueryVariables,
  GetGrupaAutKlientaForAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetGrupaAutKlientaForAutoQuery, GetGrupaAutKlientaForAutoQueryVariables, GetGrupaAutKlientaForAutoProps<TChildProps, TDataName>>(GetGrupaAutKlientaForAutoDocument, {
      alias: 'getGrupaAutKlientaForAuto',
      ...operationOptions
    });
};

/**
 * __useGetGrupaAutKlientaForAutoQuery__
 *
 * To run a query within a React component, call `useGetGrupaAutKlientaForAutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGrupaAutKlientaForAutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGrupaAutKlientaForAutoQuery({
 *   variables: {
 *      id_auto: // value for 'id_auto'
 *   },
 * });
 */
export function useGetGrupaAutKlientaForAutoQuery(baseOptions: Apollo.QueryHookOptions<GetGrupaAutKlientaForAutoQuery, GetGrupaAutKlientaForAutoQueryVariables>) {
        return Apollo.useQuery<GetGrupaAutKlientaForAutoQuery, GetGrupaAutKlientaForAutoQueryVariables>(GetGrupaAutKlientaForAutoDocument, baseOptions);
      }
export function useGetGrupaAutKlientaForAutoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGrupaAutKlientaForAutoQuery, GetGrupaAutKlientaForAutoQueryVariables>) {
          return Apollo.useLazyQuery<GetGrupaAutKlientaForAutoQuery, GetGrupaAutKlientaForAutoQueryVariables>(GetGrupaAutKlientaForAutoDocument, baseOptions);
        }
export type GetGrupaAutKlientaForAutoQueryHookResult = ReturnType<typeof useGetGrupaAutKlientaForAutoQuery>;
export type GetGrupaAutKlientaForAutoLazyQueryHookResult = ReturnType<typeof useGetGrupaAutKlientaForAutoLazyQuery>;
export type GetGrupaAutKlientaForAutoQueryResult = Apollo.QueryResult<GetGrupaAutKlientaForAutoQuery, GetGrupaAutKlientaForAutoQueryVariables>;
export const GetHistoriaUzytkownikAutoForAutoDocument = gql`
    query GetHistoriaUzytkownikAutoForAuto($id_auto: Int!) {
  Historia_Uzytkownik_Auto(where: {id_auto: {_eq: $id_auto}}) {
    id
    id_auto
    id_uzytkownik
    Uzytkownik {
      id
      imie
      nazwisko
      miasto
    }
    data_dodania_wlasciciela
    data_oddania_auta
  }
}
    `;
export type GetHistoriaUzytkownikAutoForAutoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetHistoriaUzytkownikAutoForAutoQuery, GetHistoriaUzytkownikAutoForAutoQueryVariables>, 'query'> & ({ variables: GetHistoriaUzytkownikAutoForAutoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetHistoriaUzytkownikAutoForAutoComponent = (props: GetHistoriaUzytkownikAutoForAutoComponentProps) => (
      <ApolloReactComponents.Query<GetHistoriaUzytkownikAutoForAutoQuery, GetHistoriaUzytkownikAutoForAutoQueryVariables> query={GetHistoriaUzytkownikAutoForAutoDocument} {...props} />
    );
    
export type GetHistoriaUzytkownikAutoForAutoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetHistoriaUzytkownikAutoForAutoQuery, GetHistoriaUzytkownikAutoForAutoQueryVariables>
    } & TChildProps;
export function withGetHistoriaUzytkownikAutoForAuto<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetHistoriaUzytkownikAutoForAutoQuery,
  GetHistoriaUzytkownikAutoForAutoQueryVariables,
  GetHistoriaUzytkownikAutoForAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetHistoriaUzytkownikAutoForAutoQuery, GetHistoriaUzytkownikAutoForAutoQueryVariables, GetHistoriaUzytkownikAutoForAutoProps<TChildProps, TDataName>>(GetHistoriaUzytkownikAutoForAutoDocument, {
      alias: 'getHistoriaUzytkownikAutoForAuto',
      ...operationOptions
    });
};

/**
 * __useGetHistoriaUzytkownikAutoForAutoQuery__
 *
 * To run a query within a React component, call `useGetHistoriaUzytkownikAutoForAutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHistoriaUzytkownikAutoForAutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHistoriaUzytkownikAutoForAutoQuery({
 *   variables: {
 *      id_auto: // value for 'id_auto'
 *   },
 * });
 */
export function useGetHistoriaUzytkownikAutoForAutoQuery(baseOptions: Apollo.QueryHookOptions<GetHistoriaUzytkownikAutoForAutoQuery, GetHistoriaUzytkownikAutoForAutoQueryVariables>) {
        return Apollo.useQuery<GetHistoriaUzytkownikAutoForAutoQuery, GetHistoriaUzytkownikAutoForAutoQueryVariables>(GetHistoriaUzytkownikAutoForAutoDocument, baseOptions);
      }
export function useGetHistoriaUzytkownikAutoForAutoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHistoriaUzytkownikAutoForAutoQuery, GetHistoriaUzytkownikAutoForAutoQueryVariables>) {
          return Apollo.useLazyQuery<GetHistoriaUzytkownikAutoForAutoQuery, GetHistoriaUzytkownikAutoForAutoQueryVariables>(GetHistoriaUzytkownikAutoForAutoDocument, baseOptions);
        }
export type GetHistoriaUzytkownikAutoForAutoQueryHookResult = ReturnType<typeof useGetHistoriaUzytkownikAutoForAutoQuery>;
export type GetHistoriaUzytkownikAutoForAutoLazyQueryHookResult = ReturnType<typeof useGetHistoriaUzytkownikAutoForAutoLazyQuery>;
export type GetHistoriaUzytkownikAutoForAutoQueryResult = Apollo.QueryResult<GetHistoriaUzytkownikAutoForAutoQuery, GetHistoriaUzytkownikAutoForAutoQueryVariables>;
export const GetKartaOrlenForAutoDocument = gql`
    query GetKartaOrlenForAuto($id: Int!) {
  Karta_Orlen(where: {id_auto: {_eq: $id}}) {
    id
    pin
    data_waznosci
  }
}
    `;
export type GetKartaOrlenForAutoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetKartaOrlenForAutoQuery, GetKartaOrlenForAutoQueryVariables>, 'query'> & ({ variables: GetKartaOrlenForAutoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetKartaOrlenForAutoComponent = (props: GetKartaOrlenForAutoComponentProps) => (
      <ApolloReactComponents.Query<GetKartaOrlenForAutoQuery, GetKartaOrlenForAutoQueryVariables> query={GetKartaOrlenForAutoDocument} {...props} />
    );
    
export type GetKartaOrlenForAutoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetKartaOrlenForAutoQuery, GetKartaOrlenForAutoQueryVariables>
    } & TChildProps;
export function withGetKartaOrlenForAuto<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetKartaOrlenForAutoQuery,
  GetKartaOrlenForAutoQueryVariables,
  GetKartaOrlenForAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetKartaOrlenForAutoQuery, GetKartaOrlenForAutoQueryVariables, GetKartaOrlenForAutoProps<TChildProps, TDataName>>(GetKartaOrlenForAutoDocument, {
      alias: 'getKartaOrlenForAuto',
      ...operationOptions
    });
};

/**
 * __useGetKartaOrlenForAutoQuery__
 *
 * To run a query within a React component, call `useGetKartaOrlenForAutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetKartaOrlenForAutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetKartaOrlenForAutoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetKartaOrlenForAutoQuery(baseOptions: Apollo.QueryHookOptions<GetKartaOrlenForAutoQuery, GetKartaOrlenForAutoQueryVariables>) {
        return Apollo.useQuery<GetKartaOrlenForAutoQuery, GetKartaOrlenForAutoQueryVariables>(GetKartaOrlenForAutoDocument, baseOptions);
      }
export function useGetKartaOrlenForAutoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetKartaOrlenForAutoQuery, GetKartaOrlenForAutoQueryVariables>) {
          return Apollo.useLazyQuery<GetKartaOrlenForAutoQuery, GetKartaOrlenForAutoQueryVariables>(GetKartaOrlenForAutoDocument, baseOptions);
        }
export type GetKartaOrlenForAutoQueryHookResult = ReturnType<typeof useGetKartaOrlenForAutoQuery>;
export type GetKartaOrlenForAutoLazyQueryHookResult = ReturnType<typeof useGetKartaOrlenForAutoLazyQuery>;
export type GetKartaOrlenForAutoQueryResult = Apollo.QueryResult<GetKartaOrlenForAutoQuery, GetKartaOrlenForAutoQueryVariables>;
export const GetMandatForAutoDocument = gql`
    query GetMandatForAuto($id_auto: Int!) {
  Mandat(where: {id_auto: {_eq: $id_auto}}) {
    id
    id_uzytkownik
    id_auto
    data_pisma
    data_zdarzenia
    data_otrzymania
    data_odpowiedzi
    nr_sprawy
    nadawca
    obciazenie_za_mandat
    platnosc
    wysokosc_mandatu
    dzialanie
    Uzytkownik {
      imie
      nazwisko
    }
  }
}
    `;
export type GetMandatForAutoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetMandatForAutoQuery, GetMandatForAutoQueryVariables>, 'query'> & ({ variables: GetMandatForAutoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetMandatForAutoComponent = (props: GetMandatForAutoComponentProps) => (
      <ApolloReactComponents.Query<GetMandatForAutoQuery, GetMandatForAutoQueryVariables> query={GetMandatForAutoDocument} {...props} />
    );
    
export type GetMandatForAutoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetMandatForAutoQuery, GetMandatForAutoQueryVariables>
    } & TChildProps;
export function withGetMandatForAuto<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetMandatForAutoQuery,
  GetMandatForAutoQueryVariables,
  GetMandatForAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetMandatForAutoQuery, GetMandatForAutoQueryVariables, GetMandatForAutoProps<TChildProps, TDataName>>(GetMandatForAutoDocument, {
      alias: 'getMandatForAuto',
      ...operationOptions
    });
};

/**
 * __useGetMandatForAutoQuery__
 *
 * To run a query within a React component, call `useGetMandatForAutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMandatForAutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMandatForAutoQuery({
 *   variables: {
 *      id_auto: // value for 'id_auto'
 *   },
 * });
 */
export function useGetMandatForAutoQuery(baseOptions: Apollo.QueryHookOptions<GetMandatForAutoQuery, GetMandatForAutoQueryVariables>) {
        return Apollo.useQuery<GetMandatForAutoQuery, GetMandatForAutoQueryVariables>(GetMandatForAutoDocument, baseOptions);
      }
export function useGetMandatForAutoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMandatForAutoQuery, GetMandatForAutoQueryVariables>) {
          return Apollo.useLazyQuery<GetMandatForAutoQuery, GetMandatForAutoQueryVariables>(GetMandatForAutoDocument, baseOptions);
        }
export type GetMandatForAutoQueryHookResult = ReturnType<typeof useGetMandatForAutoQuery>;
export type GetMandatForAutoLazyQueryHookResult = ReturnType<typeof useGetMandatForAutoLazyQuery>;
export type GetMandatForAutoQueryResult = Apollo.QueryResult<GetMandatForAutoQuery, GetMandatForAutoQueryVariables>;
export const GetOponaForAutoDocument = gql`
    query GetOponaForAuto($id_auto: Int!) {
  Opona(where: {id_auto: {_eq: $id_auto}}) {
    id
    id_auto
    data_zakupu
    detale
    firma
    id_typy_opon
    koszt
    rozmiar
    Typy_Opon {
      nazwa_typu
      id
    }
  }
}
    `;
export type GetOponaForAutoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOponaForAutoQuery, GetOponaForAutoQueryVariables>, 'query'> & ({ variables: GetOponaForAutoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetOponaForAutoComponent = (props: GetOponaForAutoComponentProps) => (
      <ApolloReactComponents.Query<GetOponaForAutoQuery, GetOponaForAutoQueryVariables> query={GetOponaForAutoDocument} {...props} />
    );
    
export type GetOponaForAutoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOponaForAutoQuery, GetOponaForAutoQueryVariables>
    } & TChildProps;
export function withGetOponaForAuto<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOponaForAutoQuery,
  GetOponaForAutoQueryVariables,
  GetOponaForAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOponaForAutoQuery, GetOponaForAutoQueryVariables, GetOponaForAutoProps<TChildProps, TDataName>>(GetOponaForAutoDocument, {
      alias: 'getOponaForAuto',
      ...operationOptions
    });
};

/**
 * __useGetOponaForAutoQuery__
 *
 * To run a query within a React component, call `useGetOponaForAutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOponaForAutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOponaForAutoQuery({
 *   variables: {
 *      id_auto: // value for 'id_auto'
 *   },
 * });
 */
export function useGetOponaForAutoQuery(baseOptions: Apollo.QueryHookOptions<GetOponaForAutoQuery, GetOponaForAutoQueryVariables>) {
        return Apollo.useQuery<GetOponaForAutoQuery, GetOponaForAutoQueryVariables>(GetOponaForAutoDocument, baseOptions);
      }
export function useGetOponaForAutoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOponaForAutoQuery, GetOponaForAutoQueryVariables>) {
          return Apollo.useLazyQuery<GetOponaForAutoQuery, GetOponaForAutoQueryVariables>(GetOponaForAutoDocument, baseOptions);
        }
export type GetOponaForAutoQueryHookResult = ReturnType<typeof useGetOponaForAutoQuery>;
export type GetOponaForAutoLazyQueryHookResult = ReturnType<typeof useGetOponaForAutoLazyQuery>;
export type GetOponaForAutoQueryResult = Apollo.QueryResult<GetOponaForAutoQuery, GetOponaForAutoQueryVariables>;
export const GetPolisaForAutoDocument = gql`
    query GetPolisaForAuto($id: Int!) {
  Polisa(where: {id_auto: {_eq: $id}}) {
    id
    id_auto
    ac_oc
    data_rozpoczecia_polisy
    nr_polisy
    ubezpieczyciel
  }
}
    `;
export type GetPolisaForAutoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPolisaForAutoQuery, GetPolisaForAutoQueryVariables>, 'query'> & ({ variables: GetPolisaForAutoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetPolisaForAutoComponent = (props: GetPolisaForAutoComponentProps) => (
      <ApolloReactComponents.Query<GetPolisaForAutoQuery, GetPolisaForAutoQueryVariables> query={GetPolisaForAutoDocument} {...props} />
    );
    
export type GetPolisaForAutoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPolisaForAutoQuery, GetPolisaForAutoQueryVariables>
    } & TChildProps;
export function withGetPolisaForAuto<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPolisaForAutoQuery,
  GetPolisaForAutoQueryVariables,
  GetPolisaForAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPolisaForAutoQuery, GetPolisaForAutoQueryVariables, GetPolisaForAutoProps<TChildProps, TDataName>>(GetPolisaForAutoDocument, {
      alias: 'getPolisaForAuto',
      ...operationOptions
    });
};

/**
 * __useGetPolisaForAutoQuery__
 *
 * To run a query within a React component, call `useGetPolisaForAutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPolisaForAutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPolisaForAutoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPolisaForAutoQuery(baseOptions: Apollo.QueryHookOptions<GetPolisaForAutoQuery, GetPolisaForAutoQueryVariables>) {
        return Apollo.useQuery<GetPolisaForAutoQuery, GetPolisaForAutoQueryVariables>(GetPolisaForAutoDocument, baseOptions);
      }
export function useGetPolisaForAutoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPolisaForAutoQuery, GetPolisaForAutoQueryVariables>) {
          return Apollo.useLazyQuery<GetPolisaForAutoQuery, GetPolisaForAutoQueryVariables>(GetPolisaForAutoDocument, baseOptions);
        }
export type GetPolisaForAutoQueryHookResult = ReturnType<typeof useGetPolisaForAutoQuery>;
export type GetPolisaForAutoLazyQueryHookResult = ReturnType<typeof useGetPolisaForAutoLazyQuery>;
export type GetPolisaForAutoQueryResult = Apollo.QueryResult<GetPolisaForAutoQuery, GetPolisaForAutoQueryVariables>;
export const GetPrzebiegForAutoDocument = gql`
    query GetPrzebiegForAuto($id_auto: Int!) {
  Przebieg(where: {id_auto: {_eq: $id_auto}}, order_by: {data_przebiegu: desc}) {
    id
    przebieg
    data_przebiegu
  }
}
    `;
export type GetPrzebiegForAutoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPrzebiegForAutoQuery, GetPrzebiegForAutoQueryVariables>, 'query'> & ({ variables: GetPrzebiegForAutoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetPrzebiegForAutoComponent = (props: GetPrzebiegForAutoComponentProps) => (
      <ApolloReactComponents.Query<GetPrzebiegForAutoQuery, GetPrzebiegForAutoQueryVariables> query={GetPrzebiegForAutoDocument} {...props} />
    );
    
export type GetPrzebiegForAutoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPrzebiegForAutoQuery, GetPrzebiegForAutoQueryVariables>
    } & TChildProps;
export function withGetPrzebiegForAuto<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPrzebiegForAutoQuery,
  GetPrzebiegForAutoQueryVariables,
  GetPrzebiegForAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPrzebiegForAutoQuery, GetPrzebiegForAutoQueryVariables, GetPrzebiegForAutoProps<TChildProps, TDataName>>(GetPrzebiegForAutoDocument, {
      alias: 'getPrzebiegForAuto',
      ...operationOptions
    });
};

/**
 * __useGetPrzebiegForAutoQuery__
 *
 * To run a query within a React component, call `useGetPrzebiegForAutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrzebiegForAutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrzebiegForAutoQuery({
 *   variables: {
 *      id_auto: // value for 'id_auto'
 *   },
 * });
 */
export function useGetPrzebiegForAutoQuery(baseOptions: Apollo.QueryHookOptions<GetPrzebiegForAutoQuery, GetPrzebiegForAutoQueryVariables>) {
        return Apollo.useQuery<GetPrzebiegForAutoQuery, GetPrzebiegForAutoQueryVariables>(GetPrzebiegForAutoDocument, baseOptions);
      }
export function useGetPrzebiegForAutoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPrzebiegForAutoQuery, GetPrzebiegForAutoQueryVariables>) {
          return Apollo.useLazyQuery<GetPrzebiegForAutoQuery, GetPrzebiegForAutoQueryVariables>(GetPrzebiegForAutoDocument, baseOptions);
        }
export type GetPrzebiegForAutoQueryHookResult = ReturnType<typeof useGetPrzebiegForAutoQuery>;
export type GetPrzebiegForAutoLazyQueryHookResult = ReturnType<typeof useGetPrzebiegForAutoLazyQuery>;
export type GetPrzebiegForAutoQueryResult = Apollo.QueryResult<GetPrzebiegForAutoQuery, GetPrzebiegForAutoQueryVariables>;
export const GetPrzegladyForAutoDocument = gql`
    query GetPrzegladyForAuto($id_auto: Int!) {
  Przeglad(
    where: {id_auto: {_eq: $id_auto}}
    order_by: {Przeglad_OT_Kilometry: {ilosc_kilometrow_w_tysiacach: asc}}
  ) {
    id
    id_auto
    is_wymiana_rozrzadu
    id_przeglad_ot_kilometry
    id_przeglad_koszta_dodatkowe
    data_przegladu
    Przeglad_Koszta_Dodatkowe {
      id
      koszt_klimatyzacja
      koszt_MacPhersona
      koszt_hamulce
      koszt_rozrzad
      koszt_sprzeglo
    }
    Przeglad_OT_Kilometry {
      id
      ilosc_kilometrow_w_tysiacach
    }
  }
}
    `;
export type GetPrzegladyForAutoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPrzegladyForAutoQuery, GetPrzegladyForAutoQueryVariables>, 'query'> & ({ variables: GetPrzegladyForAutoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetPrzegladyForAutoComponent = (props: GetPrzegladyForAutoComponentProps) => (
      <ApolloReactComponents.Query<GetPrzegladyForAutoQuery, GetPrzegladyForAutoQueryVariables> query={GetPrzegladyForAutoDocument} {...props} />
    );
    
export type GetPrzegladyForAutoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPrzegladyForAutoQuery, GetPrzegladyForAutoQueryVariables>
    } & TChildProps;
export function withGetPrzegladyForAuto<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPrzegladyForAutoQuery,
  GetPrzegladyForAutoQueryVariables,
  GetPrzegladyForAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPrzegladyForAutoQuery, GetPrzegladyForAutoQueryVariables, GetPrzegladyForAutoProps<TChildProps, TDataName>>(GetPrzegladyForAutoDocument, {
      alias: 'getPrzegladyForAuto',
      ...operationOptions
    });
};

/**
 * __useGetPrzegladyForAutoQuery__
 *
 * To run a query within a React component, call `useGetPrzegladyForAutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrzegladyForAutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrzegladyForAutoQuery({
 *   variables: {
 *      id_auto: // value for 'id_auto'
 *   },
 * });
 */
export function useGetPrzegladyForAutoQuery(baseOptions: Apollo.QueryHookOptions<GetPrzegladyForAutoQuery, GetPrzegladyForAutoQueryVariables>) {
        return Apollo.useQuery<GetPrzegladyForAutoQuery, GetPrzegladyForAutoQueryVariables>(GetPrzegladyForAutoDocument, baseOptions);
      }
export function useGetPrzegladyForAutoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPrzegladyForAutoQuery, GetPrzegladyForAutoQueryVariables>) {
          return Apollo.useLazyQuery<GetPrzegladyForAutoQuery, GetPrzegladyForAutoQueryVariables>(GetPrzegladyForAutoDocument, baseOptions);
        }
export type GetPrzegladyForAutoQueryHookResult = ReturnType<typeof useGetPrzegladyForAutoQuery>;
export type GetPrzegladyForAutoLazyQueryHookResult = ReturnType<typeof useGetPrzegladyForAutoLazyQuery>;
export type GetPrzegladyForAutoQueryResult = Apollo.QueryResult<GetPrzegladyForAutoQuery, GetPrzegladyForAutoQueryVariables>;
export const GetSzkodaForAutoDocument = gql`
    query GetSzkodaForAuto($id_auto: Int!) {
  Szkoda(where: {id_auto: {_eq: $id_auto}}) {
    id
    id_auto
    id_status_szkody
    id_uzytkownik
    Status_Szkody {
      nazwa_statusu
      id
    }
    Uzytkownik {
      imie
      nazwisko
    }
    opis_szkody
    uszkodzenia
    adres
  }
}
    `;
export type GetSzkodaForAutoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetSzkodaForAutoQuery, GetSzkodaForAutoQueryVariables>, 'query'> & ({ variables: GetSzkodaForAutoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetSzkodaForAutoComponent = (props: GetSzkodaForAutoComponentProps) => (
      <ApolloReactComponents.Query<GetSzkodaForAutoQuery, GetSzkodaForAutoQueryVariables> query={GetSzkodaForAutoDocument} {...props} />
    );
    
export type GetSzkodaForAutoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetSzkodaForAutoQuery, GetSzkodaForAutoQueryVariables>
    } & TChildProps;
export function withGetSzkodaForAuto<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetSzkodaForAutoQuery,
  GetSzkodaForAutoQueryVariables,
  GetSzkodaForAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetSzkodaForAutoQuery, GetSzkodaForAutoQueryVariables, GetSzkodaForAutoProps<TChildProps, TDataName>>(GetSzkodaForAutoDocument, {
      alias: 'getSzkodaForAuto',
      ...operationOptions
    });
};

/**
 * __useGetSzkodaForAutoQuery__
 *
 * To run a query within a React component, call `useGetSzkodaForAutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSzkodaForAutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSzkodaForAutoQuery({
 *   variables: {
 *      id_auto: // value for 'id_auto'
 *   },
 * });
 */
export function useGetSzkodaForAutoQuery(baseOptions: Apollo.QueryHookOptions<GetSzkodaForAutoQuery, GetSzkodaForAutoQueryVariables>) {
        return Apollo.useQuery<GetSzkodaForAutoQuery, GetSzkodaForAutoQueryVariables>(GetSzkodaForAutoDocument, baseOptions);
      }
export function useGetSzkodaForAutoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSzkodaForAutoQuery, GetSzkodaForAutoQueryVariables>) {
          return Apollo.useLazyQuery<GetSzkodaForAutoQuery, GetSzkodaForAutoQueryVariables>(GetSzkodaForAutoDocument, baseOptions);
        }
export type GetSzkodaForAutoQueryHookResult = ReturnType<typeof useGetSzkodaForAutoQuery>;
export type GetSzkodaForAutoLazyQueryHookResult = ReturnType<typeof useGetSzkodaForAutoLazyQuery>;
export type GetSzkodaForAutoQueryResult = Apollo.QueryResult<GetSzkodaForAutoQuery, GetSzkodaForAutoQueryVariables>;
export const GetUzytkownikFromHistoriaUzytkownikAutoForAutoDocument = gql`
    query GetUzytkownikFromHistoriaUzytkownikAutoForAuto($id_auto: Int!) {
  Uzytkownik(where: {Historia_Uzytkownik_Autos: {id_auto: {_eq: $id_auto}}}) {
    imie
    nazwisko
    id
  }
}
    `;
export type GetUzytkownikFromHistoriaUzytkownikAutoForAutoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery, GetUzytkownikFromHistoriaUzytkownikAutoForAutoQueryVariables>, 'query'> & ({ variables: GetUzytkownikFromHistoriaUzytkownikAutoForAutoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetUzytkownikFromHistoriaUzytkownikAutoForAutoComponent = (props: GetUzytkownikFromHistoriaUzytkownikAutoForAutoComponentProps) => (
      <ApolloReactComponents.Query<GetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery, GetUzytkownikFromHistoriaUzytkownikAutoForAutoQueryVariables> query={GetUzytkownikFromHistoriaUzytkownikAutoForAutoDocument} {...props} />
    );
    
export type GetUzytkownikFromHistoriaUzytkownikAutoForAutoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery, GetUzytkownikFromHistoriaUzytkownikAutoForAutoQueryVariables>
    } & TChildProps;
export function withGetUzytkownikFromHistoriaUzytkownikAutoForAuto<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery,
  GetUzytkownikFromHistoriaUzytkownikAutoForAutoQueryVariables,
  GetUzytkownikFromHistoriaUzytkownikAutoForAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery, GetUzytkownikFromHistoriaUzytkownikAutoForAutoQueryVariables, GetUzytkownikFromHistoriaUzytkownikAutoForAutoProps<TChildProps, TDataName>>(GetUzytkownikFromHistoriaUzytkownikAutoForAutoDocument, {
      alias: 'getUzytkownikFromHistoriaUzytkownikAutoForAuto',
      ...operationOptions
    });
};

/**
 * __useGetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery__
 *
 * To run a query within a React component, call `useGetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery({
 *   variables: {
 *      id_auto: // value for 'id_auto'
 *   },
 * });
 */
export function useGetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery(baseOptions: Apollo.QueryHookOptions<GetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery, GetUzytkownikFromHistoriaUzytkownikAutoForAutoQueryVariables>) {
        return Apollo.useQuery<GetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery, GetUzytkownikFromHistoriaUzytkownikAutoForAutoQueryVariables>(GetUzytkownikFromHistoriaUzytkownikAutoForAutoDocument, baseOptions);
      }
export function useGetUzytkownikFromHistoriaUzytkownikAutoForAutoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery, GetUzytkownikFromHistoriaUzytkownikAutoForAutoQueryVariables>) {
          return Apollo.useLazyQuery<GetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery, GetUzytkownikFromHistoriaUzytkownikAutoForAutoQueryVariables>(GetUzytkownikFromHistoriaUzytkownikAutoForAutoDocument, baseOptions);
        }
export type GetUzytkownikFromHistoriaUzytkownikAutoForAutoQueryHookResult = ReturnType<typeof useGetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery>;
export type GetUzytkownikFromHistoriaUzytkownikAutoForAutoLazyQueryHookResult = ReturnType<typeof useGetUzytkownikFromHistoriaUzytkownikAutoForAutoLazyQuery>;
export type GetUzytkownikFromHistoriaUzytkownikAutoForAutoQueryResult = Apollo.QueryResult<GetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery, GetUzytkownikFromHistoriaUzytkownikAutoForAutoQueryVariables>;
export const GetOneAutoDocument = gql`
    query GetOneAuto($id: Int!) {
  Auto_by_pk(id: $id) {
    id
    is_w_uzyciu
    marka
    model
    numer_rejestracyjny
    numer_vin
    paliwo
    rok_produkcji
    stan_licznika
    gwarancja
    uwagi
  }
  Karta_Orlen(where: {id_auto: {_eq: $id}}) {
    id
    pin
    data_waznosci
  }
  Historia_Uzytkownik_Auto(where: {id_auto: {_eq: $id}}) {
    Uzytkownik {
      nazwisko
      numer_prawa_jazdy
      pesel
      telefon
    }
  }
}
    `;
export type GetOneAutoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOneAutoQuery, GetOneAutoQueryVariables>, 'query'> & ({ variables: GetOneAutoQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetOneAutoComponent = (props: GetOneAutoComponentProps) => (
      <ApolloReactComponents.Query<GetOneAutoQuery, GetOneAutoQueryVariables> query={GetOneAutoDocument} {...props} />
    );
    
export type GetOneAutoProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneAutoQuery, GetOneAutoQueryVariables>
    } & TChildProps;
export function withGetOneAuto<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneAutoQuery,
  GetOneAutoQueryVariables,
  GetOneAutoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneAutoQuery, GetOneAutoQueryVariables, GetOneAutoProps<TChildProps, TDataName>>(GetOneAutoDocument, {
      alias: 'getOneAuto',
      ...operationOptions
    });
};

/**
 * __useGetOneAutoQuery__
 *
 * To run a query within a React component, call `useGetOneAutoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneAutoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneAutoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneAutoQuery(baseOptions: Apollo.QueryHookOptions<GetOneAutoQuery, GetOneAutoQueryVariables>) {
        return Apollo.useQuery<GetOneAutoQuery, GetOneAutoQueryVariables>(GetOneAutoDocument, baseOptions);
      }
export function useGetOneAutoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneAutoQuery, GetOneAutoQueryVariables>) {
          return Apollo.useLazyQuery<GetOneAutoQuery, GetOneAutoQueryVariables>(GetOneAutoDocument, baseOptions);
        }
export type GetOneAutoQueryHookResult = ReturnType<typeof useGetOneAutoQuery>;
export type GetOneAutoLazyQueryHookResult = ReturnType<typeof useGetOneAutoLazyQuery>;
export type GetOneAutoQueryResult = Apollo.QueryResult<GetOneAutoQuery, GetOneAutoQueryVariables>;
export const GetOneUzytkownikDocument = gql`
    query GetOneUzytkownik($id: Int!) {
  Uzytkownik_by_pk(id: $id) {
    id
    imie
    nazwisko
    numer_prawa_jazdy
    pesel
    telefon
    email
  }
}
    `;
export type GetOneUzytkownikComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOneUzytkownikQuery, GetOneUzytkownikQueryVariables>, 'query'> & ({ variables: GetOneUzytkownikQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetOneUzytkownikComponent = (props: GetOneUzytkownikComponentProps) => (
      <ApolloReactComponents.Query<GetOneUzytkownikQuery, GetOneUzytkownikQueryVariables> query={GetOneUzytkownikDocument} {...props} />
    );
    
export type GetOneUzytkownikProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneUzytkownikQuery, GetOneUzytkownikQueryVariables>
    } & TChildProps;
export function withGetOneUzytkownik<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneUzytkownikQuery,
  GetOneUzytkownikQueryVariables,
  GetOneUzytkownikProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneUzytkownikQuery, GetOneUzytkownikQueryVariables, GetOneUzytkownikProps<TChildProps, TDataName>>(GetOneUzytkownikDocument, {
      alias: 'getOneUzytkownik',
      ...operationOptions
    });
};

/**
 * __useGetOneUzytkownikQuery__
 *
 * To run a query within a React component, call `useGetOneUzytkownikQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUzytkownikQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUzytkownikQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneUzytkownikQuery(baseOptions: Apollo.QueryHookOptions<GetOneUzytkownikQuery, GetOneUzytkownikQueryVariables>) {
        return Apollo.useQuery<GetOneUzytkownikQuery, GetOneUzytkownikQueryVariables>(GetOneUzytkownikDocument, baseOptions);
      }
export function useGetOneUzytkownikLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneUzytkownikQuery, GetOneUzytkownikQueryVariables>) {
          return Apollo.useLazyQuery<GetOneUzytkownikQuery, GetOneUzytkownikQueryVariables>(GetOneUzytkownikDocument, baseOptions);
        }
export type GetOneUzytkownikQueryHookResult = ReturnType<typeof useGetOneUzytkownikQuery>;
export type GetOneUzytkownikLazyQueryHookResult = ReturnType<typeof useGetOneUzytkownikLazyQuery>;
export type GetOneUzytkownikQueryResult = Apollo.QueryResult<GetOneUzytkownikQuery, GetOneUzytkownikQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Auto: ResolverTypeWrapper<Auto>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Auto_aggregate: ResolverTypeWrapper<Auto_Aggregate>;
  Auto_aggregate_fields: ResolverTypeWrapper<Auto_Aggregate_Fields>;
  Auto_avg_fields: ResolverTypeWrapper<Auto_Avg_Fields>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Auto_bool_exp: Auto_Bool_Exp;
  Auto_constraint: Auto_Constraint;
  Auto_inc_input: Auto_Inc_Input;
  Auto_insert_input: Auto_Insert_Input;
  Auto_max_fields: ResolverTypeWrapper<Auto_Max_Fields>;
  Auto_min_fields: ResolverTypeWrapper<Auto_Min_Fields>;
  Auto_mutation_response: ResolverTypeWrapper<Auto_Mutation_Response>;
  Auto_obj_rel_insert_input: Auto_Obj_Rel_Insert_Input;
  Auto_on_conflict: Auto_On_Conflict;
  Auto_order_by: Auto_Order_By;
  Auto_pk_columns_input: Auto_Pk_Columns_Input;
  Auto_select_column: Auto_Select_Column;
  Auto_set_input: Auto_Set_Input;
  Auto_stddev_fields: ResolverTypeWrapper<Auto_Stddev_Fields>;
  Auto_stddev_pop_fields: ResolverTypeWrapper<Auto_Stddev_Pop_Fields>;
  Auto_stddev_samp_fields: ResolverTypeWrapper<Auto_Stddev_Samp_Fields>;
  Auto_sum_fields: ResolverTypeWrapper<Auto_Sum_Fields>;
  Auto_update_column: Auto_Update_Column;
  Auto_var_pop_fields: ResolverTypeWrapper<Auto_Var_Pop_Fields>;
  Auto_var_samp_fields: ResolverTypeWrapper<Auto_Var_Samp_Fields>;
  Auto_variance_fields: ResolverTypeWrapper<Auto_Variance_Fields>;
  Awaria: ResolverTypeWrapper<Awaria>;
  Awaria_aggregate: ResolverTypeWrapper<Awaria_Aggregate>;
  Awaria_aggregate_fields: ResolverTypeWrapper<Awaria_Aggregate_Fields>;
  Awaria_aggregate_order_by: Awaria_Aggregate_Order_By;
  Awaria_arr_rel_insert_input: Awaria_Arr_Rel_Insert_Input;
  Awaria_avg_fields: ResolverTypeWrapper<Awaria_Avg_Fields>;
  Awaria_avg_order_by: Awaria_Avg_Order_By;
  Awaria_bool_exp: Awaria_Bool_Exp;
  Awaria_constraint: Awaria_Constraint;
  Awaria_inc_input: Awaria_Inc_Input;
  Awaria_insert_input: Awaria_Insert_Input;
  Awaria_max_fields: ResolverTypeWrapper<Awaria_Max_Fields>;
  Awaria_max_order_by: Awaria_Max_Order_By;
  Awaria_min_fields: ResolverTypeWrapper<Awaria_Min_Fields>;
  Awaria_min_order_by: Awaria_Min_Order_By;
  Awaria_mutation_response: ResolverTypeWrapper<Awaria_Mutation_Response>;
  Awaria_on_conflict: Awaria_On_Conflict;
  Awaria_order_by: Awaria_Order_By;
  Awaria_pk_columns_input: Awaria_Pk_Columns_Input;
  Awaria_select_column: Awaria_Select_Column;
  Awaria_set_input: Awaria_Set_Input;
  Awaria_stddev_fields: ResolverTypeWrapper<Awaria_Stddev_Fields>;
  Awaria_stddev_order_by: Awaria_Stddev_Order_By;
  Awaria_stddev_pop_fields: ResolverTypeWrapper<Awaria_Stddev_Pop_Fields>;
  Awaria_stddev_pop_order_by: Awaria_Stddev_Pop_Order_By;
  Awaria_stddev_samp_fields: ResolverTypeWrapper<Awaria_Stddev_Samp_Fields>;
  Awaria_stddev_samp_order_by: Awaria_Stddev_Samp_Order_By;
  Awaria_sum_fields: ResolverTypeWrapper<Awaria_Sum_Fields>;
  Awaria_sum_order_by: Awaria_Sum_Order_By;
  Awaria_update_column: Awaria_Update_Column;
  Awaria_var_pop_fields: ResolverTypeWrapper<Awaria_Var_Pop_Fields>;
  Awaria_var_pop_order_by: Awaria_Var_Pop_Order_By;
  Awaria_var_samp_fields: ResolverTypeWrapper<Awaria_Var_Samp_Fields>;
  Awaria_var_samp_order_by: Awaria_Var_Samp_Order_By;
  Awaria_variance_fields: ResolverTypeWrapper<Awaria_Variance_Fields>;
  Awaria_variance_order_by: Awaria_Variance_Order_By;
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Grupa_Aut_Klienta: ResolverTypeWrapper<Grupa_Aut_Klienta>;
  Grupa_Aut_Klienta_aggregate: ResolverTypeWrapper<Grupa_Aut_Klienta_Aggregate>;
  Grupa_Aut_Klienta_aggregate_fields: ResolverTypeWrapper<Grupa_Aut_Klienta_Aggregate_Fields>;
  Grupa_Aut_Klienta_aggregate_order_by: Grupa_Aut_Klienta_Aggregate_Order_By;
  Grupa_Aut_Klienta_arr_rel_insert_input: Grupa_Aut_Klienta_Arr_Rel_Insert_Input;
  Grupa_Aut_Klienta_avg_fields: ResolverTypeWrapper<Grupa_Aut_Klienta_Avg_Fields>;
  Grupa_Aut_Klienta_avg_order_by: Grupa_Aut_Klienta_Avg_Order_By;
  Grupa_Aut_Klienta_bool_exp: Grupa_Aut_Klienta_Bool_Exp;
  Grupa_Aut_Klienta_constraint: Grupa_Aut_Klienta_Constraint;
  Grupa_Aut_Klienta_inc_input: Grupa_Aut_Klienta_Inc_Input;
  Grupa_Aut_Klienta_insert_input: Grupa_Aut_Klienta_Insert_Input;
  Grupa_Aut_Klienta_max_fields: ResolverTypeWrapper<Grupa_Aut_Klienta_Max_Fields>;
  Grupa_Aut_Klienta_max_order_by: Grupa_Aut_Klienta_Max_Order_By;
  Grupa_Aut_Klienta_min_fields: ResolverTypeWrapper<Grupa_Aut_Klienta_Min_Fields>;
  Grupa_Aut_Klienta_min_order_by: Grupa_Aut_Klienta_Min_Order_By;
  Grupa_Aut_Klienta_mutation_response: ResolverTypeWrapper<Grupa_Aut_Klienta_Mutation_Response>;
  Grupa_Aut_Klienta_on_conflict: Grupa_Aut_Klienta_On_Conflict;
  Grupa_Aut_Klienta_order_by: Grupa_Aut_Klienta_Order_By;
  Grupa_Aut_Klienta_pk_columns_input: Grupa_Aut_Klienta_Pk_Columns_Input;
  Grupa_Aut_Klienta_select_column: Grupa_Aut_Klienta_Select_Column;
  Grupa_Aut_Klienta_set_input: Grupa_Aut_Klienta_Set_Input;
  Grupa_Aut_Klienta_stddev_fields: ResolverTypeWrapper<Grupa_Aut_Klienta_Stddev_Fields>;
  Grupa_Aut_Klienta_stddev_order_by: Grupa_Aut_Klienta_Stddev_Order_By;
  Grupa_Aut_Klienta_stddev_pop_fields: ResolverTypeWrapper<Grupa_Aut_Klienta_Stddev_Pop_Fields>;
  Grupa_Aut_Klienta_stddev_pop_order_by: Grupa_Aut_Klienta_Stddev_Pop_Order_By;
  Grupa_Aut_Klienta_stddev_samp_fields: ResolverTypeWrapper<Grupa_Aut_Klienta_Stddev_Samp_Fields>;
  Grupa_Aut_Klienta_stddev_samp_order_by: Grupa_Aut_Klienta_Stddev_Samp_Order_By;
  Grupa_Aut_Klienta_sum_fields: ResolverTypeWrapper<Grupa_Aut_Klienta_Sum_Fields>;
  Grupa_Aut_Klienta_sum_order_by: Grupa_Aut_Klienta_Sum_Order_By;
  Grupa_Aut_Klienta_update_column: Grupa_Aut_Klienta_Update_Column;
  Grupa_Aut_Klienta_var_pop_fields: ResolverTypeWrapper<Grupa_Aut_Klienta_Var_Pop_Fields>;
  Grupa_Aut_Klienta_var_pop_order_by: Grupa_Aut_Klienta_Var_Pop_Order_By;
  Grupa_Aut_Klienta_var_samp_fields: ResolverTypeWrapper<Grupa_Aut_Klienta_Var_Samp_Fields>;
  Grupa_Aut_Klienta_var_samp_order_by: Grupa_Aut_Klienta_Var_Samp_Order_By;
  Grupa_Aut_Klienta_variance_fields: ResolverTypeWrapper<Grupa_Aut_Klienta_Variance_Fields>;
  Grupa_Aut_Klienta_variance_order_by: Grupa_Aut_Klienta_Variance_Order_By;
  Historia_Uzytkownik_Auto: ResolverTypeWrapper<Historia_Uzytkownik_Auto>;
  Historia_Uzytkownik_Auto_aggregate: ResolverTypeWrapper<Historia_Uzytkownik_Auto_Aggregate>;
  Historia_Uzytkownik_Auto_aggregate_fields: ResolverTypeWrapper<Historia_Uzytkownik_Auto_Aggregate_Fields>;
  Historia_Uzytkownik_Auto_aggregate_order_by: Historia_Uzytkownik_Auto_Aggregate_Order_By;
  Historia_Uzytkownik_Auto_arr_rel_insert_input: Historia_Uzytkownik_Auto_Arr_Rel_Insert_Input;
  Historia_Uzytkownik_Auto_avg_fields: ResolverTypeWrapper<Historia_Uzytkownik_Auto_Avg_Fields>;
  Historia_Uzytkownik_Auto_avg_order_by: Historia_Uzytkownik_Auto_Avg_Order_By;
  Historia_Uzytkownik_Auto_bool_exp: Historia_Uzytkownik_Auto_Bool_Exp;
  Historia_Uzytkownik_Auto_constraint: Historia_Uzytkownik_Auto_Constraint;
  Historia_Uzytkownik_Auto_inc_input: Historia_Uzytkownik_Auto_Inc_Input;
  Historia_Uzytkownik_Auto_insert_input: Historia_Uzytkownik_Auto_Insert_Input;
  Historia_Uzytkownik_Auto_max_fields: ResolverTypeWrapper<Historia_Uzytkownik_Auto_Max_Fields>;
  Historia_Uzytkownik_Auto_max_order_by: Historia_Uzytkownik_Auto_Max_Order_By;
  Historia_Uzytkownik_Auto_min_fields: ResolverTypeWrapper<Historia_Uzytkownik_Auto_Min_Fields>;
  Historia_Uzytkownik_Auto_min_order_by: Historia_Uzytkownik_Auto_Min_Order_By;
  Historia_Uzytkownik_Auto_mutation_response: ResolverTypeWrapper<Historia_Uzytkownik_Auto_Mutation_Response>;
  Historia_Uzytkownik_Auto_on_conflict: Historia_Uzytkownik_Auto_On_Conflict;
  Historia_Uzytkownik_Auto_order_by: Historia_Uzytkownik_Auto_Order_By;
  Historia_Uzytkownik_Auto_pk_columns_input: Historia_Uzytkownik_Auto_Pk_Columns_Input;
  Historia_Uzytkownik_Auto_select_column: Historia_Uzytkownik_Auto_Select_Column;
  Historia_Uzytkownik_Auto_set_input: Historia_Uzytkownik_Auto_Set_Input;
  Historia_Uzytkownik_Auto_stddev_fields: ResolverTypeWrapper<Historia_Uzytkownik_Auto_Stddev_Fields>;
  Historia_Uzytkownik_Auto_stddev_order_by: Historia_Uzytkownik_Auto_Stddev_Order_By;
  Historia_Uzytkownik_Auto_stddev_pop_fields: ResolverTypeWrapper<Historia_Uzytkownik_Auto_Stddev_Pop_Fields>;
  Historia_Uzytkownik_Auto_stddev_pop_order_by: Historia_Uzytkownik_Auto_Stddev_Pop_Order_By;
  Historia_Uzytkownik_Auto_stddev_samp_fields: ResolverTypeWrapper<Historia_Uzytkownik_Auto_Stddev_Samp_Fields>;
  Historia_Uzytkownik_Auto_stddev_samp_order_by: Historia_Uzytkownik_Auto_Stddev_Samp_Order_By;
  Historia_Uzytkownik_Auto_sum_fields: ResolverTypeWrapper<Historia_Uzytkownik_Auto_Sum_Fields>;
  Historia_Uzytkownik_Auto_sum_order_by: Historia_Uzytkownik_Auto_Sum_Order_By;
  Historia_Uzytkownik_Auto_update_column: Historia_Uzytkownik_Auto_Update_Column;
  Historia_Uzytkownik_Auto_var_pop_fields: ResolverTypeWrapper<Historia_Uzytkownik_Auto_Var_Pop_Fields>;
  Historia_Uzytkownik_Auto_var_pop_order_by: Historia_Uzytkownik_Auto_Var_Pop_Order_By;
  Historia_Uzytkownik_Auto_var_samp_fields: ResolverTypeWrapper<Historia_Uzytkownik_Auto_Var_Samp_Fields>;
  Historia_Uzytkownik_Auto_var_samp_order_by: Historia_Uzytkownik_Auto_Var_Samp_Order_By;
  Historia_Uzytkownik_Auto_variance_fields: ResolverTypeWrapper<Historia_Uzytkownik_Auto_Variance_Fields>;
  Historia_Uzytkownik_Auto_variance_order_by: Historia_Uzytkownik_Auto_Variance_Order_By;
  Int_comparison_exp: Int_Comparison_Exp;
  Karta_Orlen: ResolverTypeWrapper<Karta_Orlen>;
  Karta_Orlen_aggregate: ResolverTypeWrapper<Karta_Orlen_Aggregate>;
  Karta_Orlen_aggregate_fields: ResolverTypeWrapper<Karta_Orlen_Aggregate_Fields>;
  Karta_Orlen_aggregate_order_by: Karta_Orlen_Aggregate_Order_By;
  Karta_Orlen_arr_rel_insert_input: Karta_Orlen_Arr_Rel_Insert_Input;
  Karta_Orlen_avg_fields: ResolverTypeWrapper<Karta_Orlen_Avg_Fields>;
  Karta_Orlen_avg_order_by: Karta_Orlen_Avg_Order_By;
  Karta_Orlen_bool_exp: Karta_Orlen_Bool_Exp;
  Karta_Orlen_constraint: Karta_Orlen_Constraint;
  Karta_Orlen_inc_input: Karta_Orlen_Inc_Input;
  Karta_Orlen_insert_input: Karta_Orlen_Insert_Input;
  Karta_Orlen_max_fields: ResolverTypeWrapper<Karta_Orlen_Max_Fields>;
  Karta_Orlen_max_order_by: Karta_Orlen_Max_Order_By;
  Karta_Orlen_min_fields: ResolverTypeWrapper<Karta_Orlen_Min_Fields>;
  Karta_Orlen_min_order_by: Karta_Orlen_Min_Order_By;
  Karta_Orlen_mutation_response: ResolverTypeWrapper<Karta_Orlen_Mutation_Response>;
  Karta_Orlen_on_conflict: Karta_Orlen_On_Conflict;
  Karta_Orlen_order_by: Karta_Orlen_Order_By;
  Karta_Orlen_pk_columns_input: Karta_Orlen_Pk_Columns_Input;
  Karta_Orlen_select_column: Karta_Orlen_Select_Column;
  Karta_Orlen_set_input: Karta_Orlen_Set_Input;
  Karta_Orlen_stddev_fields: ResolverTypeWrapper<Karta_Orlen_Stddev_Fields>;
  Karta_Orlen_stddev_order_by: Karta_Orlen_Stddev_Order_By;
  Karta_Orlen_stddev_pop_fields: ResolverTypeWrapper<Karta_Orlen_Stddev_Pop_Fields>;
  Karta_Orlen_stddev_pop_order_by: Karta_Orlen_Stddev_Pop_Order_By;
  Karta_Orlen_stddev_samp_fields: ResolverTypeWrapper<Karta_Orlen_Stddev_Samp_Fields>;
  Karta_Orlen_stddev_samp_order_by: Karta_Orlen_Stddev_Samp_Order_By;
  Karta_Orlen_sum_fields: ResolverTypeWrapper<Karta_Orlen_Sum_Fields>;
  Karta_Orlen_sum_order_by: Karta_Orlen_Sum_Order_By;
  Karta_Orlen_update_column: Karta_Orlen_Update_Column;
  Karta_Orlen_var_pop_fields: ResolverTypeWrapper<Karta_Orlen_Var_Pop_Fields>;
  Karta_Orlen_var_pop_order_by: Karta_Orlen_Var_Pop_Order_By;
  Karta_Orlen_var_samp_fields: ResolverTypeWrapper<Karta_Orlen_Var_Samp_Fields>;
  Karta_Orlen_var_samp_order_by: Karta_Orlen_Var_Samp_Order_By;
  Karta_Orlen_variance_fields: ResolverTypeWrapper<Karta_Orlen_Variance_Fields>;
  Karta_Orlen_variance_order_by: Karta_Orlen_Variance_Order_By;
  Klient: ResolverTypeWrapper<Klient>;
  Klient_aggregate: ResolverTypeWrapper<Klient_Aggregate>;
  Klient_aggregate_fields: ResolverTypeWrapper<Klient_Aggregate_Fields>;
  Klient_avg_fields: ResolverTypeWrapper<Klient_Avg_Fields>;
  Klient_bool_exp: Klient_Bool_Exp;
  Klient_constraint: Klient_Constraint;
  Klient_inc_input: Klient_Inc_Input;
  Klient_insert_input: Klient_Insert_Input;
  Klient_max_fields: ResolverTypeWrapper<Klient_Max_Fields>;
  Klient_min_fields: ResolverTypeWrapper<Klient_Min_Fields>;
  Klient_mutation_response: ResolverTypeWrapper<Klient_Mutation_Response>;
  Klient_obj_rel_insert_input: Klient_Obj_Rel_Insert_Input;
  Klient_on_conflict: Klient_On_Conflict;
  Klient_order_by: Klient_Order_By;
  Klient_pk_columns_input: Klient_Pk_Columns_Input;
  Klient_select_column: Klient_Select_Column;
  Klient_set_input: Klient_Set_Input;
  Klient_stddev_fields: ResolverTypeWrapper<Klient_Stddev_Fields>;
  Klient_stddev_pop_fields: ResolverTypeWrapper<Klient_Stddev_Pop_Fields>;
  Klient_stddev_samp_fields: ResolverTypeWrapper<Klient_Stddev_Samp_Fields>;
  Klient_sum_fields: ResolverTypeWrapper<Klient_Sum_Fields>;
  Klient_update_column: Klient_Update_Column;
  Klient_var_pop_fields: ResolverTypeWrapper<Klient_Var_Pop_Fields>;
  Klient_var_samp_fields: ResolverTypeWrapper<Klient_Var_Samp_Fields>;
  Klient_variance_fields: ResolverTypeWrapper<Klient_Variance_Fields>;
  Leasing: ResolverTypeWrapper<Leasing>;
  Leasing_aggregate: ResolverTypeWrapper<Leasing_Aggregate>;
  Leasing_aggregate_fields: ResolverTypeWrapper<Leasing_Aggregate_Fields>;
  Leasing_aggregate_order_by: Leasing_Aggregate_Order_By;
  Leasing_arr_rel_insert_input: Leasing_Arr_Rel_Insert_Input;
  Leasing_avg_fields: ResolverTypeWrapper<Leasing_Avg_Fields>;
  Leasing_avg_order_by: Leasing_Avg_Order_By;
  Leasing_bool_exp: Leasing_Bool_Exp;
  Leasing_constraint: Leasing_Constraint;
  Leasing_inc_input: Leasing_Inc_Input;
  Leasing_insert_input: Leasing_Insert_Input;
  Leasing_max_fields: ResolverTypeWrapper<Leasing_Max_Fields>;
  Leasing_max_order_by: Leasing_Max_Order_By;
  Leasing_min_fields: ResolverTypeWrapper<Leasing_Min_Fields>;
  Leasing_min_order_by: Leasing_Min_Order_By;
  Leasing_mutation_response: ResolverTypeWrapper<Leasing_Mutation_Response>;
  Leasing_on_conflict: Leasing_On_Conflict;
  Leasing_order_by: Leasing_Order_By;
  Leasing_pk_columns_input: Leasing_Pk_Columns_Input;
  Leasing_select_column: Leasing_Select_Column;
  Leasing_set_input: Leasing_Set_Input;
  Leasing_stddev_fields: ResolverTypeWrapper<Leasing_Stddev_Fields>;
  Leasing_stddev_order_by: Leasing_Stddev_Order_By;
  Leasing_stddev_pop_fields: ResolverTypeWrapper<Leasing_Stddev_Pop_Fields>;
  Leasing_stddev_pop_order_by: Leasing_Stddev_Pop_Order_By;
  Leasing_stddev_samp_fields: ResolverTypeWrapper<Leasing_Stddev_Samp_Fields>;
  Leasing_stddev_samp_order_by: Leasing_Stddev_Samp_Order_By;
  Leasing_sum_fields: ResolverTypeWrapper<Leasing_Sum_Fields>;
  Leasing_sum_order_by: Leasing_Sum_Order_By;
  Leasing_update_column: Leasing_Update_Column;
  Leasing_var_pop_fields: ResolverTypeWrapper<Leasing_Var_Pop_Fields>;
  Leasing_var_pop_order_by: Leasing_Var_Pop_Order_By;
  Leasing_var_samp_fields: ResolverTypeWrapper<Leasing_Var_Samp_Fields>;
  Leasing_var_samp_order_by: Leasing_Var_Samp_Order_By;
  Leasing_variance_fields: ResolverTypeWrapper<Leasing_Variance_Fields>;
  Leasing_variance_order_by: Leasing_Variance_Order_By;
  Mandat: ResolverTypeWrapper<Mandat>;
  Mandat_aggregate: ResolverTypeWrapper<Mandat_Aggregate>;
  Mandat_aggregate_fields: ResolverTypeWrapper<Mandat_Aggregate_Fields>;
  Mandat_aggregate_order_by: Mandat_Aggregate_Order_By;
  Mandat_arr_rel_insert_input: Mandat_Arr_Rel_Insert_Input;
  Mandat_avg_fields: ResolverTypeWrapper<Mandat_Avg_Fields>;
  Mandat_avg_order_by: Mandat_Avg_Order_By;
  Mandat_bool_exp: Mandat_Bool_Exp;
  Mandat_constraint: Mandat_Constraint;
  Mandat_inc_input: Mandat_Inc_Input;
  Mandat_insert_input: Mandat_Insert_Input;
  Mandat_max_fields: ResolverTypeWrapper<Mandat_Max_Fields>;
  Mandat_max_order_by: Mandat_Max_Order_By;
  Mandat_min_fields: ResolverTypeWrapper<Mandat_Min_Fields>;
  Mandat_min_order_by: Mandat_Min_Order_By;
  Mandat_mutation_response: ResolverTypeWrapper<Mandat_Mutation_Response>;
  Mandat_on_conflict: Mandat_On_Conflict;
  Mandat_order_by: Mandat_Order_By;
  Mandat_pk_columns_input: Mandat_Pk_Columns_Input;
  Mandat_select_column: Mandat_Select_Column;
  Mandat_set_input: Mandat_Set_Input;
  Mandat_stddev_fields: ResolverTypeWrapper<Mandat_Stddev_Fields>;
  Mandat_stddev_order_by: Mandat_Stddev_Order_By;
  Mandat_stddev_pop_fields: ResolverTypeWrapper<Mandat_Stddev_Pop_Fields>;
  Mandat_stddev_pop_order_by: Mandat_Stddev_Pop_Order_By;
  Mandat_stddev_samp_fields: ResolverTypeWrapper<Mandat_Stddev_Samp_Fields>;
  Mandat_stddev_samp_order_by: Mandat_Stddev_Samp_Order_By;
  Mandat_sum_fields: ResolverTypeWrapper<Mandat_Sum_Fields>;
  Mandat_sum_order_by: Mandat_Sum_Order_By;
  Mandat_update_column: Mandat_Update_Column;
  Mandat_var_pop_fields: ResolverTypeWrapper<Mandat_Var_Pop_Fields>;
  Mandat_var_pop_order_by: Mandat_Var_Pop_Order_By;
  Mandat_var_samp_fields: ResolverTypeWrapper<Mandat_Var_Samp_Fields>;
  Mandat_var_samp_order_by: Mandat_Var_Samp_Order_By;
  Mandat_variance_fields: ResolverTypeWrapper<Mandat_Variance_Fields>;
  Mandat_variance_order_by: Mandat_Variance_Order_By;
  Opona: ResolverTypeWrapper<Opona>;
  Opona_aggregate: ResolverTypeWrapper<Opona_Aggregate>;
  Opona_aggregate_fields: ResolverTypeWrapper<Opona_Aggregate_Fields>;
  Opona_aggregate_order_by: Opona_Aggregate_Order_By;
  Opona_arr_rel_insert_input: Opona_Arr_Rel_Insert_Input;
  Opona_avg_fields: ResolverTypeWrapper<Opona_Avg_Fields>;
  Opona_avg_order_by: Opona_Avg_Order_By;
  Opona_bool_exp: Opona_Bool_Exp;
  Opona_constraint: Opona_Constraint;
  Opona_inc_input: Opona_Inc_Input;
  Opona_insert_input: Opona_Insert_Input;
  Opona_max_fields: ResolverTypeWrapper<Opona_Max_Fields>;
  Opona_max_order_by: Opona_Max_Order_By;
  Opona_min_fields: ResolverTypeWrapper<Opona_Min_Fields>;
  Opona_min_order_by: Opona_Min_Order_By;
  Opona_mutation_response: ResolverTypeWrapper<Opona_Mutation_Response>;
  Opona_on_conflict: Opona_On_Conflict;
  Opona_order_by: Opona_Order_By;
  Opona_pk_columns_input: Opona_Pk_Columns_Input;
  Opona_select_column: Opona_Select_Column;
  Opona_set_input: Opona_Set_Input;
  Opona_stddev_fields: ResolverTypeWrapper<Opona_Stddev_Fields>;
  Opona_stddev_order_by: Opona_Stddev_Order_By;
  Opona_stddev_pop_fields: ResolverTypeWrapper<Opona_Stddev_Pop_Fields>;
  Opona_stddev_pop_order_by: Opona_Stddev_Pop_Order_By;
  Opona_stddev_samp_fields: ResolverTypeWrapper<Opona_Stddev_Samp_Fields>;
  Opona_stddev_samp_order_by: Opona_Stddev_Samp_Order_By;
  Opona_sum_fields: ResolverTypeWrapper<Opona_Sum_Fields>;
  Opona_sum_order_by: Opona_Sum_Order_By;
  Opona_update_column: Opona_Update_Column;
  Opona_var_pop_fields: ResolverTypeWrapper<Opona_Var_Pop_Fields>;
  Opona_var_pop_order_by: Opona_Var_Pop_Order_By;
  Opona_var_samp_fields: ResolverTypeWrapper<Opona_Var_Samp_Fields>;
  Opona_var_samp_order_by: Opona_Var_Samp_Order_By;
  Opona_variance_fields: ResolverTypeWrapper<Opona_Variance_Fields>;
  Opona_variance_order_by: Opona_Variance_Order_By;
  Polisa: ResolverTypeWrapper<Polisa>;
  Polisa_aggregate: ResolverTypeWrapper<Polisa_Aggregate>;
  Polisa_aggregate_fields: ResolverTypeWrapper<Polisa_Aggregate_Fields>;
  Polisa_aggregate_order_by: Polisa_Aggregate_Order_By;
  Polisa_arr_rel_insert_input: Polisa_Arr_Rel_Insert_Input;
  Polisa_avg_fields: ResolverTypeWrapper<Polisa_Avg_Fields>;
  Polisa_avg_order_by: Polisa_Avg_Order_By;
  Polisa_bool_exp: Polisa_Bool_Exp;
  Polisa_constraint: Polisa_Constraint;
  Polisa_inc_input: Polisa_Inc_Input;
  Polisa_insert_input: Polisa_Insert_Input;
  Polisa_max_fields: ResolverTypeWrapper<Polisa_Max_Fields>;
  Polisa_max_order_by: Polisa_Max_Order_By;
  Polisa_min_fields: ResolverTypeWrapper<Polisa_Min_Fields>;
  Polisa_min_order_by: Polisa_Min_Order_By;
  Polisa_mutation_response: ResolverTypeWrapper<Polisa_Mutation_Response>;
  Polisa_on_conflict: Polisa_On_Conflict;
  Polisa_order_by: Polisa_Order_By;
  Polisa_pk_columns_input: Polisa_Pk_Columns_Input;
  Polisa_select_column: Polisa_Select_Column;
  Polisa_set_input: Polisa_Set_Input;
  Polisa_stddev_fields: ResolverTypeWrapper<Polisa_Stddev_Fields>;
  Polisa_stddev_order_by: Polisa_Stddev_Order_By;
  Polisa_stddev_pop_fields: ResolverTypeWrapper<Polisa_Stddev_Pop_Fields>;
  Polisa_stddev_pop_order_by: Polisa_Stddev_Pop_Order_By;
  Polisa_stddev_samp_fields: ResolverTypeWrapper<Polisa_Stddev_Samp_Fields>;
  Polisa_stddev_samp_order_by: Polisa_Stddev_Samp_Order_By;
  Polisa_sum_fields: ResolverTypeWrapper<Polisa_Sum_Fields>;
  Polisa_sum_order_by: Polisa_Sum_Order_By;
  Polisa_update_column: Polisa_Update_Column;
  Polisa_var_pop_fields: ResolverTypeWrapper<Polisa_Var_Pop_Fields>;
  Polisa_var_pop_order_by: Polisa_Var_Pop_Order_By;
  Polisa_var_samp_fields: ResolverTypeWrapper<Polisa_Var_Samp_Fields>;
  Polisa_var_samp_order_by: Polisa_Var_Samp_Order_By;
  Polisa_variance_fields: ResolverTypeWrapper<Polisa_Variance_Fields>;
  Polisa_variance_order_by: Polisa_Variance_Order_By;
  Przebieg: ResolverTypeWrapper<Przebieg>;
  Przebieg_aggregate: ResolverTypeWrapper<Przebieg_Aggregate>;
  Przebieg_aggregate_fields: ResolverTypeWrapper<Przebieg_Aggregate_Fields>;
  Przebieg_aggregate_order_by: Przebieg_Aggregate_Order_By;
  Przebieg_arr_rel_insert_input: Przebieg_Arr_Rel_Insert_Input;
  Przebieg_avg_fields: ResolverTypeWrapper<Przebieg_Avg_Fields>;
  Przebieg_avg_order_by: Przebieg_Avg_Order_By;
  Przebieg_bool_exp: Przebieg_Bool_Exp;
  Przebieg_constraint: Przebieg_Constraint;
  Przebieg_inc_input: Przebieg_Inc_Input;
  Przebieg_insert_input: Przebieg_Insert_Input;
  Przebieg_max_fields: ResolverTypeWrapper<Przebieg_Max_Fields>;
  Przebieg_max_order_by: Przebieg_Max_Order_By;
  Przebieg_min_fields: ResolverTypeWrapper<Przebieg_Min_Fields>;
  Przebieg_min_order_by: Przebieg_Min_Order_By;
  Przebieg_mutation_response: ResolverTypeWrapper<Przebieg_Mutation_Response>;
  Przebieg_on_conflict: Przebieg_On_Conflict;
  Przebieg_order_by: Przebieg_Order_By;
  Przebieg_pk_columns_input: Przebieg_Pk_Columns_Input;
  Przebieg_select_column: Przebieg_Select_Column;
  Przebieg_set_input: Przebieg_Set_Input;
  Przebieg_stddev_fields: ResolverTypeWrapper<Przebieg_Stddev_Fields>;
  Przebieg_stddev_order_by: Przebieg_Stddev_Order_By;
  Przebieg_stddev_pop_fields: ResolverTypeWrapper<Przebieg_Stddev_Pop_Fields>;
  Przebieg_stddev_pop_order_by: Przebieg_Stddev_Pop_Order_By;
  Przebieg_stddev_samp_fields: ResolverTypeWrapper<Przebieg_Stddev_Samp_Fields>;
  Przebieg_stddev_samp_order_by: Przebieg_Stddev_Samp_Order_By;
  Przebieg_sum_fields: ResolverTypeWrapper<Przebieg_Sum_Fields>;
  Przebieg_sum_order_by: Przebieg_Sum_Order_By;
  Przebieg_update_column: Przebieg_Update_Column;
  Przebieg_var_pop_fields: ResolverTypeWrapper<Przebieg_Var_Pop_Fields>;
  Przebieg_var_pop_order_by: Przebieg_Var_Pop_Order_By;
  Przebieg_var_samp_fields: ResolverTypeWrapper<Przebieg_Var_Samp_Fields>;
  Przebieg_var_samp_order_by: Przebieg_Var_Samp_Order_By;
  Przebieg_variance_fields: ResolverTypeWrapper<Przebieg_Variance_Fields>;
  Przebieg_variance_order_by: Przebieg_Variance_Order_By;
  Przeglad: ResolverTypeWrapper<Przeglad>;
  Przeglad_Koszta_Dodatkowe: ResolverTypeWrapper<Przeglad_Koszta_Dodatkowe>;
  Przeglad_Koszta_Dodatkowe_aggregate: ResolverTypeWrapper<Przeglad_Koszta_Dodatkowe_Aggregate>;
  Przeglad_Koszta_Dodatkowe_aggregate_fields: ResolverTypeWrapper<Przeglad_Koszta_Dodatkowe_Aggregate_Fields>;
  Przeglad_Koszta_Dodatkowe_avg_fields: ResolverTypeWrapper<Przeglad_Koszta_Dodatkowe_Avg_Fields>;
  Przeglad_Koszta_Dodatkowe_bool_exp: Przeglad_Koszta_Dodatkowe_Bool_Exp;
  Przeglad_Koszta_Dodatkowe_constraint: Przeglad_Koszta_Dodatkowe_Constraint;
  Przeglad_Koszta_Dodatkowe_inc_input: Przeglad_Koszta_Dodatkowe_Inc_Input;
  Przeglad_Koszta_Dodatkowe_insert_input: Przeglad_Koszta_Dodatkowe_Insert_Input;
  Przeglad_Koszta_Dodatkowe_max_fields: ResolverTypeWrapper<Przeglad_Koszta_Dodatkowe_Max_Fields>;
  Przeglad_Koszta_Dodatkowe_min_fields: ResolverTypeWrapper<Przeglad_Koszta_Dodatkowe_Min_Fields>;
  Przeglad_Koszta_Dodatkowe_mutation_response: ResolverTypeWrapper<Przeglad_Koszta_Dodatkowe_Mutation_Response>;
  Przeglad_Koszta_Dodatkowe_obj_rel_insert_input: Przeglad_Koszta_Dodatkowe_Obj_Rel_Insert_Input;
  Przeglad_Koszta_Dodatkowe_on_conflict: Przeglad_Koszta_Dodatkowe_On_Conflict;
  Przeglad_Koszta_Dodatkowe_order_by: Przeglad_Koszta_Dodatkowe_Order_By;
  Przeglad_Koszta_Dodatkowe_pk_columns_input: Przeglad_Koszta_Dodatkowe_Pk_Columns_Input;
  Przeglad_Koszta_Dodatkowe_select_column: Przeglad_Koszta_Dodatkowe_Select_Column;
  Przeglad_Koszta_Dodatkowe_set_input: Przeglad_Koszta_Dodatkowe_Set_Input;
  Przeglad_Koszta_Dodatkowe_stddev_fields: ResolverTypeWrapper<Przeglad_Koszta_Dodatkowe_Stddev_Fields>;
  Przeglad_Koszta_Dodatkowe_stddev_pop_fields: ResolverTypeWrapper<Przeglad_Koszta_Dodatkowe_Stddev_Pop_Fields>;
  Przeglad_Koszta_Dodatkowe_stddev_samp_fields: ResolverTypeWrapper<Przeglad_Koszta_Dodatkowe_Stddev_Samp_Fields>;
  Przeglad_Koszta_Dodatkowe_sum_fields: ResolverTypeWrapper<Przeglad_Koszta_Dodatkowe_Sum_Fields>;
  Przeglad_Koszta_Dodatkowe_update_column: Przeglad_Koszta_Dodatkowe_Update_Column;
  Przeglad_Koszta_Dodatkowe_var_pop_fields: ResolverTypeWrapper<Przeglad_Koszta_Dodatkowe_Var_Pop_Fields>;
  Przeglad_Koszta_Dodatkowe_var_samp_fields: ResolverTypeWrapper<Przeglad_Koszta_Dodatkowe_Var_Samp_Fields>;
  Przeglad_Koszta_Dodatkowe_variance_fields: ResolverTypeWrapper<Przeglad_Koszta_Dodatkowe_Variance_Fields>;
  Przeglad_OT_Kilometry: ResolverTypeWrapper<Przeglad_Ot_Kilometry>;
  Przeglad_OT_Kilometry_aggregate: ResolverTypeWrapper<Przeglad_Ot_Kilometry_Aggregate>;
  Przeglad_OT_Kilometry_aggregate_fields: ResolverTypeWrapper<Przeglad_Ot_Kilometry_Aggregate_Fields>;
  Przeglad_OT_Kilometry_avg_fields: ResolverTypeWrapper<Przeglad_Ot_Kilometry_Avg_Fields>;
  Przeglad_OT_Kilometry_bool_exp: Przeglad_Ot_Kilometry_Bool_Exp;
  Przeglad_OT_Kilometry_constraint: Przeglad_Ot_Kilometry_Constraint;
  Przeglad_OT_Kilometry_inc_input: Przeglad_Ot_Kilometry_Inc_Input;
  Przeglad_OT_Kilometry_insert_input: Przeglad_Ot_Kilometry_Insert_Input;
  Przeglad_OT_Kilometry_max_fields: ResolverTypeWrapper<Przeglad_Ot_Kilometry_Max_Fields>;
  Przeglad_OT_Kilometry_min_fields: ResolverTypeWrapper<Przeglad_Ot_Kilometry_Min_Fields>;
  Przeglad_OT_Kilometry_mutation_response: ResolverTypeWrapper<Przeglad_Ot_Kilometry_Mutation_Response>;
  Przeglad_OT_Kilometry_obj_rel_insert_input: Przeglad_Ot_Kilometry_Obj_Rel_Insert_Input;
  Przeglad_OT_Kilometry_on_conflict: Przeglad_Ot_Kilometry_On_Conflict;
  Przeglad_OT_Kilometry_order_by: Przeglad_Ot_Kilometry_Order_By;
  Przeglad_OT_Kilometry_pk_columns_input: Przeglad_Ot_Kilometry_Pk_Columns_Input;
  Przeglad_OT_Kilometry_select_column: Przeglad_Ot_Kilometry_Select_Column;
  Przeglad_OT_Kilometry_set_input: Przeglad_Ot_Kilometry_Set_Input;
  Przeglad_OT_Kilometry_stddev_fields: ResolverTypeWrapper<Przeglad_Ot_Kilometry_Stddev_Fields>;
  Przeglad_OT_Kilometry_stddev_pop_fields: ResolverTypeWrapper<Przeglad_Ot_Kilometry_Stddev_Pop_Fields>;
  Przeglad_OT_Kilometry_stddev_samp_fields: ResolverTypeWrapper<Przeglad_Ot_Kilometry_Stddev_Samp_Fields>;
  Przeglad_OT_Kilometry_sum_fields: ResolverTypeWrapper<Przeglad_Ot_Kilometry_Sum_Fields>;
  Przeglad_OT_Kilometry_update_column: Przeglad_Ot_Kilometry_Update_Column;
  Przeglad_OT_Kilometry_var_pop_fields: ResolverTypeWrapper<Przeglad_Ot_Kilometry_Var_Pop_Fields>;
  Przeglad_OT_Kilometry_var_samp_fields: ResolverTypeWrapper<Przeglad_Ot_Kilometry_Var_Samp_Fields>;
  Przeglad_OT_Kilometry_variance_fields: ResolverTypeWrapper<Przeglad_Ot_Kilometry_Variance_Fields>;
  Przeglad_aggregate: ResolverTypeWrapper<Przeglad_Aggregate>;
  Przeglad_aggregate_fields: ResolverTypeWrapper<Przeglad_Aggregate_Fields>;
  Przeglad_aggregate_order_by: Przeglad_Aggregate_Order_By;
  Przeglad_arr_rel_insert_input: Przeglad_Arr_Rel_Insert_Input;
  Przeglad_avg_fields: ResolverTypeWrapper<Przeglad_Avg_Fields>;
  Przeglad_avg_order_by: Przeglad_Avg_Order_By;
  Przeglad_bool_exp: Przeglad_Bool_Exp;
  Przeglad_constraint: Przeglad_Constraint;
  Przeglad_inc_input: Przeglad_Inc_Input;
  Przeglad_insert_input: Przeglad_Insert_Input;
  Przeglad_max_fields: ResolverTypeWrapper<Przeglad_Max_Fields>;
  Przeglad_max_order_by: Przeglad_Max_Order_By;
  Przeglad_min_fields: ResolverTypeWrapper<Przeglad_Min_Fields>;
  Przeglad_min_order_by: Przeglad_Min_Order_By;
  Przeglad_mutation_response: ResolverTypeWrapper<Przeglad_Mutation_Response>;
  Przeglad_on_conflict: Przeglad_On_Conflict;
  Przeglad_order_by: Przeglad_Order_By;
  Przeglad_pk_columns_input: Przeglad_Pk_Columns_Input;
  Przeglad_select_column: Przeglad_Select_Column;
  Przeglad_set_input: Przeglad_Set_Input;
  Przeglad_stddev_fields: ResolverTypeWrapper<Przeglad_Stddev_Fields>;
  Przeglad_stddev_order_by: Przeglad_Stddev_Order_By;
  Przeglad_stddev_pop_fields: ResolverTypeWrapper<Przeglad_Stddev_Pop_Fields>;
  Przeglad_stddev_pop_order_by: Przeglad_Stddev_Pop_Order_By;
  Przeglad_stddev_samp_fields: ResolverTypeWrapper<Przeglad_Stddev_Samp_Fields>;
  Przeglad_stddev_samp_order_by: Przeglad_Stddev_Samp_Order_By;
  Przeglad_sum_fields: ResolverTypeWrapper<Przeglad_Sum_Fields>;
  Przeglad_sum_order_by: Przeglad_Sum_Order_By;
  Przeglad_update_column: Przeglad_Update_Column;
  Przeglad_var_pop_fields: ResolverTypeWrapper<Przeglad_Var_Pop_Fields>;
  Przeglad_var_pop_order_by: Przeglad_Var_Pop_Order_By;
  Przeglad_var_samp_fields: ResolverTypeWrapper<Przeglad_Var_Samp_Fields>;
  Przeglad_var_samp_order_by: Przeglad_Var_Samp_Order_By;
  Przeglad_variance_fields: ResolverTypeWrapper<Przeglad_Variance_Fields>;
  Przeglad_variance_order_by: Przeglad_Variance_Order_By;
  Status_Awarii: ResolverTypeWrapper<Status_Awarii>;
  Status_Awarii_aggregate: ResolverTypeWrapper<Status_Awarii_Aggregate>;
  Status_Awarii_aggregate_fields: ResolverTypeWrapper<Status_Awarii_Aggregate_Fields>;
  Status_Awarii_avg_fields: ResolverTypeWrapper<Status_Awarii_Avg_Fields>;
  Status_Awarii_bool_exp: Status_Awarii_Bool_Exp;
  Status_Awarii_constraint: Status_Awarii_Constraint;
  Status_Awarii_inc_input: Status_Awarii_Inc_Input;
  Status_Awarii_insert_input: Status_Awarii_Insert_Input;
  Status_Awarii_max_fields: ResolverTypeWrapper<Status_Awarii_Max_Fields>;
  Status_Awarii_min_fields: ResolverTypeWrapper<Status_Awarii_Min_Fields>;
  Status_Awarii_mutation_response: ResolverTypeWrapper<Status_Awarii_Mutation_Response>;
  Status_Awarii_obj_rel_insert_input: Status_Awarii_Obj_Rel_Insert_Input;
  Status_Awarii_on_conflict: Status_Awarii_On_Conflict;
  Status_Awarii_order_by: Status_Awarii_Order_By;
  Status_Awarii_pk_columns_input: Status_Awarii_Pk_Columns_Input;
  Status_Awarii_select_column: Status_Awarii_Select_Column;
  Status_Awarii_set_input: Status_Awarii_Set_Input;
  Status_Awarii_stddev_fields: ResolverTypeWrapper<Status_Awarii_Stddev_Fields>;
  Status_Awarii_stddev_pop_fields: ResolverTypeWrapper<Status_Awarii_Stddev_Pop_Fields>;
  Status_Awarii_stddev_samp_fields: ResolverTypeWrapper<Status_Awarii_Stddev_Samp_Fields>;
  Status_Awarii_sum_fields: ResolverTypeWrapper<Status_Awarii_Sum_Fields>;
  Status_Awarii_update_column: Status_Awarii_Update_Column;
  Status_Awarii_var_pop_fields: ResolverTypeWrapper<Status_Awarii_Var_Pop_Fields>;
  Status_Awarii_var_samp_fields: ResolverTypeWrapper<Status_Awarii_Var_Samp_Fields>;
  Status_Awarii_variance_fields: ResolverTypeWrapper<Status_Awarii_Variance_Fields>;
  Status_Szkody: ResolverTypeWrapper<Status_Szkody>;
  Status_Szkody_aggregate: ResolverTypeWrapper<Status_Szkody_Aggregate>;
  Status_Szkody_aggregate_fields: ResolverTypeWrapper<Status_Szkody_Aggregate_Fields>;
  Status_Szkody_avg_fields: ResolverTypeWrapper<Status_Szkody_Avg_Fields>;
  Status_Szkody_bool_exp: Status_Szkody_Bool_Exp;
  Status_Szkody_constraint: Status_Szkody_Constraint;
  Status_Szkody_inc_input: Status_Szkody_Inc_Input;
  Status_Szkody_insert_input: Status_Szkody_Insert_Input;
  Status_Szkody_max_fields: ResolverTypeWrapper<Status_Szkody_Max_Fields>;
  Status_Szkody_min_fields: ResolverTypeWrapper<Status_Szkody_Min_Fields>;
  Status_Szkody_mutation_response: ResolverTypeWrapper<Status_Szkody_Mutation_Response>;
  Status_Szkody_obj_rel_insert_input: Status_Szkody_Obj_Rel_Insert_Input;
  Status_Szkody_on_conflict: Status_Szkody_On_Conflict;
  Status_Szkody_order_by: Status_Szkody_Order_By;
  Status_Szkody_pk_columns_input: Status_Szkody_Pk_Columns_Input;
  Status_Szkody_select_column: Status_Szkody_Select_Column;
  Status_Szkody_set_input: Status_Szkody_Set_Input;
  Status_Szkody_stddev_fields: ResolverTypeWrapper<Status_Szkody_Stddev_Fields>;
  Status_Szkody_stddev_pop_fields: ResolverTypeWrapper<Status_Szkody_Stddev_Pop_Fields>;
  Status_Szkody_stddev_samp_fields: ResolverTypeWrapper<Status_Szkody_Stddev_Samp_Fields>;
  Status_Szkody_sum_fields: ResolverTypeWrapper<Status_Szkody_Sum_Fields>;
  Status_Szkody_update_column: Status_Szkody_Update_Column;
  Status_Szkody_var_pop_fields: ResolverTypeWrapper<Status_Szkody_Var_Pop_Fields>;
  Status_Szkody_var_samp_fields: ResolverTypeWrapper<Status_Szkody_Var_Samp_Fields>;
  Status_Szkody_variance_fields: ResolverTypeWrapper<Status_Szkody_Variance_Fields>;
  String_comparison_exp: String_Comparison_Exp;
  Szkoda: ResolverTypeWrapper<Szkoda>;
  Szkoda_aggregate: ResolverTypeWrapper<Szkoda_Aggregate>;
  Szkoda_aggregate_fields: ResolverTypeWrapper<Szkoda_Aggregate_Fields>;
  Szkoda_aggregate_order_by: Szkoda_Aggregate_Order_By;
  Szkoda_arr_rel_insert_input: Szkoda_Arr_Rel_Insert_Input;
  Szkoda_avg_fields: ResolverTypeWrapper<Szkoda_Avg_Fields>;
  Szkoda_avg_order_by: Szkoda_Avg_Order_By;
  Szkoda_bool_exp: Szkoda_Bool_Exp;
  Szkoda_constraint: Szkoda_Constraint;
  Szkoda_inc_input: Szkoda_Inc_Input;
  Szkoda_insert_input: Szkoda_Insert_Input;
  Szkoda_max_fields: ResolverTypeWrapper<Szkoda_Max_Fields>;
  Szkoda_max_order_by: Szkoda_Max_Order_By;
  Szkoda_min_fields: ResolverTypeWrapper<Szkoda_Min_Fields>;
  Szkoda_min_order_by: Szkoda_Min_Order_By;
  Szkoda_mutation_response: ResolverTypeWrapper<Szkoda_Mutation_Response>;
  Szkoda_on_conflict: Szkoda_On_Conflict;
  Szkoda_order_by: Szkoda_Order_By;
  Szkoda_pk_columns_input: Szkoda_Pk_Columns_Input;
  Szkoda_select_column: Szkoda_Select_Column;
  Szkoda_set_input: Szkoda_Set_Input;
  Szkoda_stddev_fields: ResolverTypeWrapper<Szkoda_Stddev_Fields>;
  Szkoda_stddev_order_by: Szkoda_Stddev_Order_By;
  Szkoda_stddev_pop_fields: ResolverTypeWrapper<Szkoda_Stddev_Pop_Fields>;
  Szkoda_stddev_pop_order_by: Szkoda_Stddev_Pop_Order_By;
  Szkoda_stddev_samp_fields: ResolverTypeWrapper<Szkoda_Stddev_Samp_Fields>;
  Szkoda_stddev_samp_order_by: Szkoda_Stddev_Samp_Order_By;
  Szkoda_sum_fields: ResolverTypeWrapper<Szkoda_Sum_Fields>;
  Szkoda_sum_order_by: Szkoda_Sum_Order_By;
  Szkoda_update_column: Szkoda_Update_Column;
  Szkoda_var_pop_fields: ResolverTypeWrapper<Szkoda_Var_Pop_Fields>;
  Szkoda_var_pop_order_by: Szkoda_Var_Pop_Order_By;
  Szkoda_var_samp_fields: ResolverTypeWrapper<Szkoda_Var_Samp_Fields>;
  Szkoda_var_samp_order_by: Szkoda_Var_Samp_Order_By;
  Szkoda_variance_fields: ResolverTypeWrapper<Szkoda_Variance_Fields>;
  Szkoda_variance_order_by: Szkoda_Variance_Order_By;
  Typy_Opon: ResolverTypeWrapper<Typy_Opon>;
  Typy_Opon_aggregate: ResolverTypeWrapper<Typy_Opon_Aggregate>;
  Typy_Opon_aggregate_fields: ResolverTypeWrapper<Typy_Opon_Aggregate_Fields>;
  Typy_Opon_avg_fields: ResolverTypeWrapper<Typy_Opon_Avg_Fields>;
  Typy_Opon_bool_exp: Typy_Opon_Bool_Exp;
  Typy_Opon_constraint: Typy_Opon_Constraint;
  Typy_Opon_inc_input: Typy_Opon_Inc_Input;
  Typy_Opon_insert_input: Typy_Opon_Insert_Input;
  Typy_Opon_max_fields: ResolverTypeWrapper<Typy_Opon_Max_Fields>;
  Typy_Opon_min_fields: ResolverTypeWrapper<Typy_Opon_Min_Fields>;
  Typy_Opon_mutation_response: ResolverTypeWrapper<Typy_Opon_Mutation_Response>;
  Typy_Opon_obj_rel_insert_input: Typy_Opon_Obj_Rel_Insert_Input;
  Typy_Opon_on_conflict: Typy_Opon_On_Conflict;
  Typy_Opon_order_by: Typy_Opon_Order_By;
  Typy_Opon_pk_columns_input: Typy_Opon_Pk_Columns_Input;
  Typy_Opon_select_column: Typy_Opon_Select_Column;
  Typy_Opon_set_input: Typy_Opon_Set_Input;
  Typy_Opon_stddev_fields: ResolverTypeWrapper<Typy_Opon_Stddev_Fields>;
  Typy_Opon_stddev_pop_fields: ResolverTypeWrapper<Typy_Opon_Stddev_Pop_Fields>;
  Typy_Opon_stddev_samp_fields: ResolverTypeWrapper<Typy_Opon_Stddev_Samp_Fields>;
  Typy_Opon_sum_fields: ResolverTypeWrapper<Typy_Opon_Sum_Fields>;
  Typy_Opon_update_column: Typy_Opon_Update_Column;
  Typy_Opon_var_pop_fields: ResolverTypeWrapper<Typy_Opon_Var_Pop_Fields>;
  Typy_Opon_var_samp_fields: ResolverTypeWrapper<Typy_Opon_Var_Samp_Fields>;
  Typy_Opon_variance_fields: ResolverTypeWrapper<Typy_Opon_Variance_Fields>;
  Uzytkownik: ResolverTypeWrapper<Uzytkownik>;
  Uzytkownik_aggregate: ResolverTypeWrapper<Uzytkownik_Aggregate>;
  Uzytkownik_aggregate_fields: ResolverTypeWrapper<Uzytkownik_Aggregate_Fields>;
  Uzytkownik_avg_fields: ResolverTypeWrapper<Uzytkownik_Avg_Fields>;
  Uzytkownik_bool_exp: Uzytkownik_Bool_Exp;
  Uzytkownik_constraint: Uzytkownik_Constraint;
  Uzytkownik_inc_input: Uzytkownik_Inc_Input;
  Uzytkownik_insert_input: Uzytkownik_Insert_Input;
  Uzytkownik_max_fields: ResolverTypeWrapper<Uzytkownik_Max_Fields>;
  Uzytkownik_min_fields: ResolverTypeWrapper<Uzytkownik_Min_Fields>;
  Uzytkownik_mutation_response: ResolverTypeWrapper<Uzytkownik_Mutation_Response>;
  Uzytkownik_obj_rel_insert_input: Uzytkownik_Obj_Rel_Insert_Input;
  Uzytkownik_on_conflict: Uzytkownik_On_Conflict;
  Uzytkownik_order_by: Uzytkownik_Order_By;
  Uzytkownik_pk_columns_input: Uzytkownik_Pk_Columns_Input;
  Uzytkownik_select_column: Uzytkownik_Select_Column;
  Uzytkownik_set_input: Uzytkownik_Set_Input;
  Uzytkownik_stddev_fields: ResolverTypeWrapper<Uzytkownik_Stddev_Fields>;
  Uzytkownik_stddev_pop_fields: ResolverTypeWrapper<Uzytkownik_Stddev_Pop_Fields>;
  Uzytkownik_stddev_samp_fields: ResolverTypeWrapper<Uzytkownik_Stddev_Samp_Fields>;
  Uzytkownik_sum_fields: ResolverTypeWrapper<Uzytkownik_Sum_Fields>;
  Uzytkownik_update_column: Uzytkownik_Update_Column;
  Uzytkownik_var_pop_fields: ResolverTypeWrapper<Uzytkownik_Var_Pop_Fields>;
  Uzytkownik_var_samp_fields: ResolverTypeWrapper<Uzytkownik_Var_Samp_Fields>;
  Uzytkownik_variance_fields: ResolverTypeWrapper<Uzytkownik_Variance_Fields>;
  bigint: ResolverTypeWrapper<Scalars['bigint']>;
  bigint_comparison_exp: Bigint_Comparison_Exp;
  date: ResolverTypeWrapper<Scalars['date']>;
  date_comparison_exp: Date_Comparison_Exp;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Auto: Auto;
  Int: Scalars['Int'];
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Auto_aggregate: Auto_Aggregate;
  Auto_aggregate_fields: Auto_Aggregate_Fields;
  Auto_avg_fields: Auto_Avg_Fields;
  Float: Scalars['Float'];
  Auto_bool_exp: Auto_Bool_Exp;
  Auto_inc_input: Auto_Inc_Input;
  Auto_insert_input: Auto_Insert_Input;
  Auto_max_fields: Auto_Max_Fields;
  Auto_min_fields: Auto_Min_Fields;
  Auto_mutation_response: Auto_Mutation_Response;
  Auto_obj_rel_insert_input: Auto_Obj_Rel_Insert_Input;
  Auto_on_conflict: Auto_On_Conflict;
  Auto_order_by: Auto_Order_By;
  Auto_pk_columns_input: Auto_Pk_Columns_Input;
  Auto_set_input: Auto_Set_Input;
  Auto_stddev_fields: Auto_Stddev_Fields;
  Auto_stddev_pop_fields: Auto_Stddev_Pop_Fields;
  Auto_stddev_samp_fields: Auto_Stddev_Samp_Fields;
  Auto_sum_fields: Auto_Sum_Fields;
  Auto_var_pop_fields: Auto_Var_Pop_Fields;
  Auto_var_samp_fields: Auto_Var_Samp_Fields;
  Auto_variance_fields: Auto_Variance_Fields;
  Awaria: Awaria;
  Awaria_aggregate: Awaria_Aggregate;
  Awaria_aggregate_fields: Awaria_Aggregate_Fields;
  Awaria_aggregate_order_by: Awaria_Aggregate_Order_By;
  Awaria_arr_rel_insert_input: Awaria_Arr_Rel_Insert_Input;
  Awaria_avg_fields: Awaria_Avg_Fields;
  Awaria_avg_order_by: Awaria_Avg_Order_By;
  Awaria_bool_exp: Awaria_Bool_Exp;
  Awaria_inc_input: Awaria_Inc_Input;
  Awaria_insert_input: Awaria_Insert_Input;
  Awaria_max_fields: Awaria_Max_Fields;
  Awaria_max_order_by: Awaria_Max_Order_By;
  Awaria_min_fields: Awaria_Min_Fields;
  Awaria_min_order_by: Awaria_Min_Order_By;
  Awaria_mutation_response: Awaria_Mutation_Response;
  Awaria_on_conflict: Awaria_On_Conflict;
  Awaria_order_by: Awaria_Order_By;
  Awaria_pk_columns_input: Awaria_Pk_Columns_Input;
  Awaria_set_input: Awaria_Set_Input;
  Awaria_stddev_fields: Awaria_Stddev_Fields;
  Awaria_stddev_order_by: Awaria_Stddev_Order_By;
  Awaria_stddev_pop_fields: Awaria_Stddev_Pop_Fields;
  Awaria_stddev_pop_order_by: Awaria_Stddev_Pop_Order_By;
  Awaria_stddev_samp_fields: Awaria_Stddev_Samp_Fields;
  Awaria_stddev_samp_order_by: Awaria_Stddev_Samp_Order_By;
  Awaria_sum_fields: Awaria_Sum_Fields;
  Awaria_sum_order_by: Awaria_Sum_Order_By;
  Awaria_var_pop_fields: Awaria_Var_Pop_Fields;
  Awaria_var_pop_order_by: Awaria_Var_Pop_Order_By;
  Awaria_var_samp_fields: Awaria_Var_Samp_Fields;
  Awaria_var_samp_order_by: Awaria_Var_Samp_Order_By;
  Awaria_variance_fields: Awaria_Variance_Fields;
  Awaria_variance_order_by: Awaria_Variance_Order_By;
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Grupa_Aut_Klienta: Grupa_Aut_Klienta;
  Grupa_Aut_Klienta_aggregate: Grupa_Aut_Klienta_Aggregate;
  Grupa_Aut_Klienta_aggregate_fields: Grupa_Aut_Klienta_Aggregate_Fields;
  Grupa_Aut_Klienta_aggregate_order_by: Grupa_Aut_Klienta_Aggregate_Order_By;
  Grupa_Aut_Klienta_arr_rel_insert_input: Grupa_Aut_Klienta_Arr_Rel_Insert_Input;
  Grupa_Aut_Klienta_avg_fields: Grupa_Aut_Klienta_Avg_Fields;
  Grupa_Aut_Klienta_avg_order_by: Grupa_Aut_Klienta_Avg_Order_By;
  Grupa_Aut_Klienta_bool_exp: Grupa_Aut_Klienta_Bool_Exp;
  Grupa_Aut_Klienta_inc_input: Grupa_Aut_Klienta_Inc_Input;
  Grupa_Aut_Klienta_insert_input: Grupa_Aut_Klienta_Insert_Input;
  Grupa_Aut_Klienta_max_fields: Grupa_Aut_Klienta_Max_Fields;
  Grupa_Aut_Klienta_max_order_by: Grupa_Aut_Klienta_Max_Order_By;
  Grupa_Aut_Klienta_min_fields: Grupa_Aut_Klienta_Min_Fields;
  Grupa_Aut_Klienta_min_order_by: Grupa_Aut_Klienta_Min_Order_By;
  Grupa_Aut_Klienta_mutation_response: Grupa_Aut_Klienta_Mutation_Response;
  Grupa_Aut_Klienta_on_conflict: Grupa_Aut_Klienta_On_Conflict;
  Grupa_Aut_Klienta_order_by: Grupa_Aut_Klienta_Order_By;
  Grupa_Aut_Klienta_pk_columns_input: Grupa_Aut_Klienta_Pk_Columns_Input;
  Grupa_Aut_Klienta_set_input: Grupa_Aut_Klienta_Set_Input;
  Grupa_Aut_Klienta_stddev_fields: Grupa_Aut_Klienta_Stddev_Fields;
  Grupa_Aut_Klienta_stddev_order_by: Grupa_Aut_Klienta_Stddev_Order_By;
  Grupa_Aut_Klienta_stddev_pop_fields: Grupa_Aut_Klienta_Stddev_Pop_Fields;
  Grupa_Aut_Klienta_stddev_pop_order_by: Grupa_Aut_Klienta_Stddev_Pop_Order_By;
  Grupa_Aut_Klienta_stddev_samp_fields: Grupa_Aut_Klienta_Stddev_Samp_Fields;
  Grupa_Aut_Klienta_stddev_samp_order_by: Grupa_Aut_Klienta_Stddev_Samp_Order_By;
  Grupa_Aut_Klienta_sum_fields: Grupa_Aut_Klienta_Sum_Fields;
  Grupa_Aut_Klienta_sum_order_by: Grupa_Aut_Klienta_Sum_Order_By;
  Grupa_Aut_Klienta_var_pop_fields: Grupa_Aut_Klienta_Var_Pop_Fields;
  Grupa_Aut_Klienta_var_pop_order_by: Grupa_Aut_Klienta_Var_Pop_Order_By;
  Grupa_Aut_Klienta_var_samp_fields: Grupa_Aut_Klienta_Var_Samp_Fields;
  Grupa_Aut_Klienta_var_samp_order_by: Grupa_Aut_Klienta_Var_Samp_Order_By;
  Grupa_Aut_Klienta_variance_fields: Grupa_Aut_Klienta_Variance_Fields;
  Grupa_Aut_Klienta_variance_order_by: Grupa_Aut_Klienta_Variance_Order_By;
  Historia_Uzytkownik_Auto: Historia_Uzytkownik_Auto;
  Historia_Uzytkownik_Auto_aggregate: Historia_Uzytkownik_Auto_Aggregate;
  Historia_Uzytkownik_Auto_aggregate_fields: Historia_Uzytkownik_Auto_Aggregate_Fields;
  Historia_Uzytkownik_Auto_aggregate_order_by: Historia_Uzytkownik_Auto_Aggregate_Order_By;
  Historia_Uzytkownik_Auto_arr_rel_insert_input: Historia_Uzytkownik_Auto_Arr_Rel_Insert_Input;
  Historia_Uzytkownik_Auto_avg_fields: Historia_Uzytkownik_Auto_Avg_Fields;
  Historia_Uzytkownik_Auto_avg_order_by: Historia_Uzytkownik_Auto_Avg_Order_By;
  Historia_Uzytkownik_Auto_bool_exp: Historia_Uzytkownik_Auto_Bool_Exp;
  Historia_Uzytkownik_Auto_inc_input: Historia_Uzytkownik_Auto_Inc_Input;
  Historia_Uzytkownik_Auto_insert_input: Historia_Uzytkownik_Auto_Insert_Input;
  Historia_Uzytkownik_Auto_max_fields: Historia_Uzytkownik_Auto_Max_Fields;
  Historia_Uzytkownik_Auto_max_order_by: Historia_Uzytkownik_Auto_Max_Order_By;
  Historia_Uzytkownik_Auto_min_fields: Historia_Uzytkownik_Auto_Min_Fields;
  Historia_Uzytkownik_Auto_min_order_by: Historia_Uzytkownik_Auto_Min_Order_By;
  Historia_Uzytkownik_Auto_mutation_response: Historia_Uzytkownik_Auto_Mutation_Response;
  Historia_Uzytkownik_Auto_on_conflict: Historia_Uzytkownik_Auto_On_Conflict;
  Historia_Uzytkownik_Auto_order_by: Historia_Uzytkownik_Auto_Order_By;
  Historia_Uzytkownik_Auto_pk_columns_input: Historia_Uzytkownik_Auto_Pk_Columns_Input;
  Historia_Uzytkownik_Auto_set_input: Historia_Uzytkownik_Auto_Set_Input;
  Historia_Uzytkownik_Auto_stddev_fields: Historia_Uzytkownik_Auto_Stddev_Fields;
  Historia_Uzytkownik_Auto_stddev_order_by: Historia_Uzytkownik_Auto_Stddev_Order_By;
  Historia_Uzytkownik_Auto_stddev_pop_fields: Historia_Uzytkownik_Auto_Stddev_Pop_Fields;
  Historia_Uzytkownik_Auto_stddev_pop_order_by: Historia_Uzytkownik_Auto_Stddev_Pop_Order_By;
  Historia_Uzytkownik_Auto_stddev_samp_fields: Historia_Uzytkownik_Auto_Stddev_Samp_Fields;
  Historia_Uzytkownik_Auto_stddev_samp_order_by: Historia_Uzytkownik_Auto_Stddev_Samp_Order_By;
  Historia_Uzytkownik_Auto_sum_fields: Historia_Uzytkownik_Auto_Sum_Fields;
  Historia_Uzytkownik_Auto_sum_order_by: Historia_Uzytkownik_Auto_Sum_Order_By;
  Historia_Uzytkownik_Auto_var_pop_fields: Historia_Uzytkownik_Auto_Var_Pop_Fields;
  Historia_Uzytkownik_Auto_var_pop_order_by: Historia_Uzytkownik_Auto_Var_Pop_Order_By;
  Historia_Uzytkownik_Auto_var_samp_fields: Historia_Uzytkownik_Auto_Var_Samp_Fields;
  Historia_Uzytkownik_Auto_var_samp_order_by: Historia_Uzytkownik_Auto_Var_Samp_Order_By;
  Historia_Uzytkownik_Auto_variance_fields: Historia_Uzytkownik_Auto_Variance_Fields;
  Historia_Uzytkownik_Auto_variance_order_by: Historia_Uzytkownik_Auto_Variance_Order_By;
  Int_comparison_exp: Int_Comparison_Exp;
  Karta_Orlen: Karta_Orlen;
  Karta_Orlen_aggregate: Karta_Orlen_Aggregate;
  Karta_Orlen_aggregate_fields: Karta_Orlen_Aggregate_Fields;
  Karta_Orlen_aggregate_order_by: Karta_Orlen_Aggregate_Order_By;
  Karta_Orlen_arr_rel_insert_input: Karta_Orlen_Arr_Rel_Insert_Input;
  Karta_Orlen_avg_fields: Karta_Orlen_Avg_Fields;
  Karta_Orlen_avg_order_by: Karta_Orlen_Avg_Order_By;
  Karta_Orlen_bool_exp: Karta_Orlen_Bool_Exp;
  Karta_Orlen_inc_input: Karta_Orlen_Inc_Input;
  Karta_Orlen_insert_input: Karta_Orlen_Insert_Input;
  Karta_Orlen_max_fields: Karta_Orlen_Max_Fields;
  Karta_Orlen_max_order_by: Karta_Orlen_Max_Order_By;
  Karta_Orlen_min_fields: Karta_Orlen_Min_Fields;
  Karta_Orlen_min_order_by: Karta_Orlen_Min_Order_By;
  Karta_Orlen_mutation_response: Karta_Orlen_Mutation_Response;
  Karta_Orlen_on_conflict: Karta_Orlen_On_Conflict;
  Karta_Orlen_order_by: Karta_Orlen_Order_By;
  Karta_Orlen_pk_columns_input: Karta_Orlen_Pk_Columns_Input;
  Karta_Orlen_set_input: Karta_Orlen_Set_Input;
  Karta_Orlen_stddev_fields: Karta_Orlen_Stddev_Fields;
  Karta_Orlen_stddev_order_by: Karta_Orlen_Stddev_Order_By;
  Karta_Orlen_stddev_pop_fields: Karta_Orlen_Stddev_Pop_Fields;
  Karta_Orlen_stddev_pop_order_by: Karta_Orlen_Stddev_Pop_Order_By;
  Karta_Orlen_stddev_samp_fields: Karta_Orlen_Stddev_Samp_Fields;
  Karta_Orlen_stddev_samp_order_by: Karta_Orlen_Stddev_Samp_Order_By;
  Karta_Orlen_sum_fields: Karta_Orlen_Sum_Fields;
  Karta_Orlen_sum_order_by: Karta_Orlen_Sum_Order_By;
  Karta_Orlen_var_pop_fields: Karta_Orlen_Var_Pop_Fields;
  Karta_Orlen_var_pop_order_by: Karta_Orlen_Var_Pop_Order_By;
  Karta_Orlen_var_samp_fields: Karta_Orlen_Var_Samp_Fields;
  Karta_Orlen_var_samp_order_by: Karta_Orlen_Var_Samp_Order_By;
  Karta_Orlen_variance_fields: Karta_Orlen_Variance_Fields;
  Karta_Orlen_variance_order_by: Karta_Orlen_Variance_Order_By;
  Klient: Klient;
  Klient_aggregate: Klient_Aggregate;
  Klient_aggregate_fields: Klient_Aggregate_Fields;
  Klient_avg_fields: Klient_Avg_Fields;
  Klient_bool_exp: Klient_Bool_Exp;
  Klient_inc_input: Klient_Inc_Input;
  Klient_insert_input: Klient_Insert_Input;
  Klient_max_fields: Klient_Max_Fields;
  Klient_min_fields: Klient_Min_Fields;
  Klient_mutation_response: Klient_Mutation_Response;
  Klient_obj_rel_insert_input: Klient_Obj_Rel_Insert_Input;
  Klient_on_conflict: Klient_On_Conflict;
  Klient_order_by: Klient_Order_By;
  Klient_pk_columns_input: Klient_Pk_Columns_Input;
  Klient_set_input: Klient_Set_Input;
  Klient_stddev_fields: Klient_Stddev_Fields;
  Klient_stddev_pop_fields: Klient_Stddev_Pop_Fields;
  Klient_stddev_samp_fields: Klient_Stddev_Samp_Fields;
  Klient_sum_fields: Klient_Sum_Fields;
  Klient_var_pop_fields: Klient_Var_Pop_Fields;
  Klient_var_samp_fields: Klient_Var_Samp_Fields;
  Klient_variance_fields: Klient_Variance_Fields;
  Leasing: Leasing;
  Leasing_aggregate: Leasing_Aggregate;
  Leasing_aggregate_fields: Leasing_Aggregate_Fields;
  Leasing_aggregate_order_by: Leasing_Aggregate_Order_By;
  Leasing_arr_rel_insert_input: Leasing_Arr_Rel_Insert_Input;
  Leasing_avg_fields: Leasing_Avg_Fields;
  Leasing_avg_order_by: Leasing_Avg_Order_By;
  Leasing_bool_exp: Leasing_Bool_Exp;
  Leasing_inc_input: Leasing_Inc_Input;
  Leasing_insert_input: Leasing_Insert_Input;
  Leasing_max_fields: Leasing_Max_Fields;
  Leasing_max_order_by: Leasing_Max_Order_By;
  Leasing_min_fields: Leasing_Min_Fields;
  Leasing_min_order_by: Leasing_Min_Order_By;
  Leasing_mutation_response: Leasing_Mutation_Response;
  Leasing_on_conflict: Leasing_On_Conflict;
  Leasing_order_by: Leasing_Order_By;
  Leasing_pk_columns_input: Leasing_Pk_Columns_Input;
  Leasing_set_input: Leasing_Set_Input;
  Leasing_stddev_fields: Leasing_Stddev_Fields;
  Leasing_stddev_order_by: Leasing_Stddev_Order_By;
  Leasing_stddev_pop_fields: Leasing_Stddev_Pop_Fields;
  Leasing_stddev_pop_order_by: Leasing_Stddev_Pop_Order_By;
  Leasing_stddev_samp_fields: Leasing_Stddev_Samp_Fields;
  Leasing_stddev_samp_order_by: Leasing_Stddev_Samp_Order_By;
  Leasing_sum_fields: Leasing_Sum_Fields;
  Leasing_sum_order_by: Leasing_Sum_Order_By;
  Leasing_var_pop_fields: Leasing_Var_Pop_Fields;
  Leasing_var_pop_order_by: Leasing_Var_Pop_Order_By;
  Leasing_var_samp_fields: Leasing_Var_Samp_Fields;
  Leasing_var_samp_order_by: Leasing_Var_Samp_Order_By;
  Leasing_variance_fields: Leasing_Variance_Fields;
  Leasing_variance_order_by: Leasing_Variance_Order_By;
  Mandat: Mandat;
  Mandat_aggregate: Mandat_Aggregate;
  Mandat_aggregate_fields: Mandat_Aggregate_Fields;
  Mandat_aggregate_order_by: Mandat_Aggregate_Order_By;
  Mandat_arr_rel_insert_input: Mandat_Arr_Rel_Insert_Input;
  Mandat_avg_fields: Mandat_Avg_Fields;
  Mandat_avg_order_by: Mandat_Avg_Order_By;
  Mandat_bool_exp: Mandat_Bool_Exp;
  Mandat_inc_input: Mandat_Inc_Input;
  Mandat_insert_input: Mandat_Insert_Input;
  Mandat_max_fields: Mandat_Max_Fields;
  Mandat_max_order_by: Mandat_Max_Order_By;
  Mandat_min_fields: Mandat_Min_Fields;
  Mandat_min_order_by: Mandat_Min_Order_By;
  Mandat_mutation_response: Mandat_Mutation_Response;
  Mandat_on_conflict: Mandat_On_Conflict;
  Mandat_order_by: Mandat_Order_By;
  Mandat_pk_columns_input: Mandat_Pk_Columns_Input;
  Mandat_set_input: Mandat_Set_Input;
  Mandat_stddev_fields: Mandat_Stddev_Fields;
  Mandat_stddev_order_by: Mandat_Stddev_Order_By;
  Mandat_stddev_pop_fields: Mandat_Stddev_Pop_Fields;
  Mandat_stddev_pop_order_by: Mandat_Stddev_Pop_Order_By;
  Mandat_stddev_samp_fields: Mandat_Stddev_Samp_Fields;
  Mandat_stddev_samp_order_by: Mandat_Stddev_Samp_Order_By;
  Mandat_sum_fields: Mandat_Sum_Fields;
  Mandat_sum_order_by: Mandat_Sum_Order_By;
  Mandat_var_pop_fields: Mandat_Var_Pop_Fields;
  Mandat_var_pop_order_by: Mandat_Var_Pop_Order_By;
  Mandat_var_samp_fields: Mandat_Var_Samp_Fields;
  Mandat_var_samp_order_by: Mandat_Var_Samp_Order_By;
  Mandat_variance_fields: Mandat_Variance_Fields;
  Mandat_variance_order_by: Mandat_Variance_Order_By;
  Opona: Opona;
  Opona_aggregate: Opona_Aggregate;
  Opona_aggregate_fields: Opona_Aggregate_Fields;
  Opona_aggregate_order_by: Opona_Aggregate_Order_By;
  Opona_arr_rel_insert_input: Opona_Arr_Rel_Insert_Input;
  Opona_avg_fields: Opona_Avg_Fields;
  Opona_avg_order_by: Opona_Avg_Order_By;
  Opona_bool_exp: Opona_Bool_Exp;
  Opona_inc_input: Opona_Inc_Input;
  Opona_insert_input: Opona_Insert_Input;
  Opona_max_fields: Opona_Max_Fields;
  Opona_max_order_by: Opona_Max_Order_By;
  Opona_min_fields: Opona_Min_Fields;
  Opona_min_order_by: Opona_Min_Order_By;
  Opona_mutation_response: Opona_Mutation_Response;
  Opona_on_conflict: Opona_On_Conflict;
  Opona_order_by: Opona_Order_By;
  Opona_pk_columns_input: Opona_Pk_Columns_Input;
  Opona_set_input: Opona_Set_Input;
  Opona_stddev_fields: Opona_Stddev_Fields;
  Opona_stddev_order_by: Opona_Stddev_Order_By;
  Opona_stddev_pop_fields: Opona_Stddev_Pop_Fields;
  Opona_stddev_pop_order_by: Opona_Stddev_Pop_Order_By;
  Opona_stddev_samp_fields: Opona_Stddev_Samp_Fields;
  Opona_stddev_samp_order_by: Opona_Stddev_Samp_Order_By;
  Opona_sum_fields: Opona_Sum_Fields;
  Opona_sum_order_by: Opona_Sum_Order_By;
  Opona_var_pop_fields: Opona_Var_Pop_Fields;
  Opona_var_pop_order_by: Opona_Var_Pop_Order_By;
  Opona_var_samp_fields: Opona_Var_Samp_Fields;
  Opona_var_samp_order_by: Opona_Var_Samp_Order_By;
  Opona_variance_fields: Opona_Variance_Fields;
  Opona_variance_order_by: Opona_Variance_Order_By;
  Polisa: Polisa;
  Polisa_aggregate: Polisa_Aggregate;
  Polisa_aggregate_fields: Polisa_Aggregate_Fields;
  Polisa_aggregate_order_by: Polisa_Aggregate_Order_By;
  Polisa_arr_rel_insert_input: Polisa_Arr_Rel_Insert_Input;
  Polisa_avg_fields: Polisa_Avg_Fields;
  Polisa_avg_order_by: Polisa_Avg_Order_By;
  Polisa_bool_exp: Polisa_Bool_Exp;
  Polisa_inc_input: Polisa_Inc_Input;
  Polisa_insert_input: Polisa_Insert_Input;
  Polisa_max_fields: Polisa_Max_Fields;
  Polisa_max_order_by: Polisa_Max_Order_By;
  Polisa_min_fields: Polisa_Min_Fields;
  Polisa_min_order_by: Polisa_Min_Order_By;
  Polisa_mutation_response: Polisa_Mutation_Response;
  Polisa_on_conflict: Polisa_On_Conflict;
  Polisa_order_by: Polisa_Order_By;
  Polisa_pk_columns_input: Polisa_Pk_Columns_Input;
  Polisa_set_input: Polisa_Set_Input;
  Polisa_stddev_fields: Polisa_Stddev_Fields;
  Polisa_stddev_order_by: Polisa_Stddev_Order_By;
  Polisa_stddev_pop_fields: Polisa_Stddev_Pop_Fields;
  Polisa_stddev_pop_order_by: Polisa_Stddev_Pop_Order_By;
  Polisa_stddev_samp_fields: Polisa_Stddev_Samp_Fields;
  Polisa_stddev_samp_order_by: Polisa_Stddev_Samp_Order_By;
  Polisa_sum_fields: Polisa_Sum_Fields;
  Polisa_sum_order_by: Polisa_Sum_Order_By;
  Polisa_var_pop_fields: Polisa_Var_Pop_Fields;
  Polisa_var_pop_order_by: Polisa_Var_Pop_Order_By;
  Polisa_var_samp_fields: Polisa_Var_Samp_Fields;
  Polisa_var_samp_order_by: Polisa_Var_Samp_Order_By;
  Polisa_variance_fields: Polisa_Variance_Fields;
  Polisa_variance_order_by: Polisa_Variance_Order_By;
  Przebieg: Przebieg;
  Przebieg_aggregate: Przebieg_Aggregate;
  Przebieg_aggregate_fields: Przebieg_Aggregate_Fields;
  Przebieg_aggregate_order_by: Przebieg_Aggregate_Order_By;
  Przebieg_arr_rel_insert_input: Przebieg_Arr_Rel_Insert_Input;
  Przebieg_avg_fields: Przebieg_Avg_Fields;
  Przebieg_avg_order_by: Przebieg_Avg_Order_By;
  Przebieg_bool_exp: Przebieg_Bool_Exp;
  Przebieg_inc_input: Przebieg_Inc_Input;
  Przebieg_insert_input: Przebieg_Insert_Input;
  Przebieg_max_fields: Przebieg_Max_Fields;
  Przebieg_max_order_by: Przebieg_Max_Order_By;
  Przebieg_min_fields: Przebieg_Min_Fields;
  Przebieg_min_order_by: Przebieg_Min_Order_By;
  Przebieg_mutation_response: Przebieg_Mutation_Response;
  Przebieg_on_conflict: Przebieg_On_Conflict;
  Przebieg_order_by: Przebieg_Order_By;
  Przebieg_pk_columns_input: Przebieg_Pk_Columns_Input;
  Przebieg_set_input: Przebieg_Set_Input;
  Przebieg_stddev_fields: Przebieg_Stddev_Fields;
  Przebieg_stddev_order_by: Przebieg_Stddev_Order_By;
  Przebieg_stddev_pop_fields: Przebieg_Stddev_Pop_Fields;
  Przebieg_stddev_pop_order_by: Przebieg_Stddev_Pop_Order_By;
  Przebieg_stddev_samp_fields: Przebieg_Stddev_Samp_Fields;
  Przebieg_stddev_samp_order_by: Przebieg_Stddev_Samp_Order_By;
  Przebieg_sum_fields: Przebieg_Sum_Fields;
  Przebieg_sum_order_by: Przebieg_Sum_Order_By;
  Przebieg_var_pop_fields: Przebieg_Var_Pop_Fields;
  Przebieg_var_pop_order_by: Przebieg_Var_Pop_Order_By;
  Przebieg_var_samp_fields: Przebieg_Var_Samp_Fields;
  Przebieg_var_samp_order_by: Przebieg_Var_Samp_Order_By;
  Przebieg_variance_fields: Przebieg_Variance_Fields;
  Przebieg_variance_order_by: Przebieg_Variance_Order_By;
  Przeglad: Przeglad;
  Przeglad_Koszta_Dodatkowe: Przeglad_Koszta_Dodatkowe;
  Przeglad_Koszta_Dodatkowe_aggregate: Przeglad_Koszta_Dodatkowe_Aggregate;
  Przeglad_Koszta_Dodatkowe_aggregate_fields: Przeglad_Koszta_Dodatkowe_Aggregate_Fields;
  Przeglad_Koszta_Dodatkowe_avg_fields: Przeglad_Koszta_Dodatkowe_Avg_Fields;
  Przeglad_Koszta_Dodatkowe_bool_exp: Przeglad_Koszta_Dodatkowe_Bool_Exp;
  Przeglad_Koszta_Dodatkowe_inc_input: Przeglad_Koszta_Dodatkowe_Inc_Input;
  Przeglad_Koszta_Dodatkowe_insert_input: Przeglad_Koszta_Dodatkowe_Insert_Input;
  Przeglad_Koszta_Dodatkowe_max_fields: Przeglad_Koszta_Dodatkowe_Max_Fields;
  Przeglad_Koszta_Dodatkowe_min_fields: Przeglad_Koszta_Dodatkowe_Min_Fields;
  Przeglad_Koszta_Dodatkowe_mutation_response: Przeglad_Koszta_Dodatkowe_Mutation_Response;
  Przeglad_Koszta_Dodatkowe_obj_rel_insert_input: Przeglad_Koszta_Dodatkowe_Obj_Rel_Insert_Input;
  Przeglad_Koszta_Dodatkowe_on_conflict: Przeglad_Koszta_Dodatkowe_On_Conflict;
  Przeglad_Koszta_Dodatkowe_order_by: Przeglad_Koszta_Dodatkowe_Order_By;
  Przeglad_Koszta_Dodatkowe_pk_columns_input: Przeglad_Koszta_Dodatkowe_Pk_Columns_Input;
  Przeglad_Koszta_Dodatkowe_set_input: Przeglad_Koszta_Dodatkowe_Set_Input;
  Przeglad_Koszta_Dodatkowe_stddev_fields: Przeglad_Koszta_Dodatkowe_Stddev_Fields;
  Przeglad_Koszta_Dodatkowe_stddev_pop_fields: Przeglad_Koszta_Dodatkowe_Stddev_Pop_Fields;
  Przeglad_Koszta_Dodatkowe_stddev_samp_fields: Przeglad_Koszta_Dodatkowe_Stddev_Samp_Fields;
  Przeglad_Koszta_Dodatkowe_sum_fields: Przeglad_Koszta_Dodatkowe_Sum_Fields;
  Przeglad_Koszta_Dodatkowe_var_pop_fields: Przeglad_Koszta_Dodatkowe_Var_Pop_Fields;
  Przeglad_Koszta_Dodatkowe_var_samp_fields: Przeglad_Koszta_Dodatkowe_Var_Samp_Fields;
  Przeglad_Koszta_Dodatkowe_variance_fields: Przeglad_Koszta_Dodatkowe_Variance_Fields;
  Przeglad_OT_Kilometry: Przeglad_Ot_Kilometry;
  Przeglad_OT_Kilometry_aggregate: Przeglad_Ot_Kilometry_Aggregate;
  Przeglad_OT_Kilometry_aggregate_fields: Przeglad_Ot_Kilometry_Aggregate_Fields;
  Przeglad_OT_Kilometry_avg_fields: Przeglad_Ot_Kilometry_Avg_Fields;
  Przeglad_OT_Kilometry_bool_exp: Przeglad_Ot_Kilometry_Bool_Exp;
  Przeglad_OT_Kilometry_inc_input: Przeglad_Ot_Kilometry_Inc_Input;
  Przeglad_OT_Kilometry_insert_input: Przeglad_Ot_Kilometry_Insert_Input;
  Przeglad_OT_Kilometry_max_fields: Przeglad_Ot_Kilometry_Max_Fields;
  Przeglad_OT_Kilometry_min_fields: Przeglad_Ot_Kilometry_Min_Fields;
  Przeglad_OT_Kilometry_mutation_response: Przeglad_Ot_Kilometry_Mutation_Response;
  Przeglad_OT_Kilometry_obj_rel_insert_input: Przeglad_Ot_Kilometry_Obj_Rel_Insert_Input;
  Przeglad_OT_Kilometry_on_conflict: Przeglad_Ot_Kilometry_On_Conflict;
  Przeglad_OT_Kilometry_order_by: Przeglad_Ot_Kilometry_Order_By;
  Przeglad_OT_Kilometry_pk_columns_input: Przeglad_Ot_Kilometry_Pk_Columns_Input;
  Przeglad_OT_Kilometry_set_input: Przeglad_Ot_Kilometry_Set_Input;
  Przeglad_OT_Kilometry_stddev_fields: Przeglad_Ot_Kilometry_Stddev_Fields;
  Przeglad_OT_Kilometry_stddev_pop_fields: Przeglad_Ot_Kilometry_Stddev_Pop_Fields;
  Przeglad_OT_Kilometry_stddev_samp_fields: Przeglad_Ot_Kilometry_Stddev_Samp_Fields;
  Przeglad_OT_Kilometry_sum_fields: Przeglad_Ot_Kilometry_Sum_Fields;
  Przeglad_OT_Kilometry_var_pop_fields: Przeglad_Ot_Kilometry_Var_Pop_Fields;
  Przeglad_OT_Kilometry_var_samp_fields: Przeglad_Ot_Kilometry_Var_Samp_Fields;
  Przeglad_OT_Kilometry_variance_fields: Przeglad_Ot_Kilometry_Variance_Fields;
  Przeglad_aggregate: Przeglad_Aggregate;
  Przeglad_aggregate_fields: Przeglad_Aggregate_Fields;
  Przeglad_aggregate_order_by: Przeglad_Aggregate_Order_By;
  Przeglad_arr_rel_insert_input: Przeglad_Arr_Rel_Insert_Input;
  Przeglad_avg_fields: Przeglad_Avg_Fields;
  Przeglad_avg_order_by: Przeglad_Avg_Order_By;
  Przeglad_bool_exp: Przeglad_Bool_Exp;
  Przeglad_inc_input: Przeglad_Inc_Input;
  Przeglad_insert_input: Przeglad_Insert_Input;
  Przeglad_max_fields: Przeglad_Max_Fields;
  Przeglad_max_order_by: Przeglad_Max_Order_By;
  Przeglad_min_fields: Przeglad_Min_Fields;
  Przeglad_min_order_by: Przeglad_Min_Order_By;
  Przeglad_mutation_response: Przeglad_Mutation_Response;
  Przeglad_on_conflict: Przeglad_On_Conflict;
  Przeglad_order_by: Przeglad_Order_By;
  Przeglad_pk_columns_input: Przeglad_Pk_Columns_Input;
  Przeglad_set_input: Przeglad_Set_Input;
  Przeglad_stddev_fields: Przeglad_Stddev_Fields;
  Przeglad_stddev_order_by: Przeglad_Stddev_Order_By;
  Przeglad_stddev_pop_fields: Przeglad_Stddev_Pop_Fields;
  Przeglad_stddev_pop_order_by: Przeglad_Stddev_Pop_Order_By;
  Przeglad_stddev_samp_fields: Przeglad_Stddev_Samp_Fields;
  Przeglad_stddev_samp_order_by: Przeglad_Stddev_Samp_Order_By;
  Przeglad_sum_fields: Przeglad_Sum_Fields;
  Przeglad_sum_order_by: Przeglad_Sum_Order_By;
  Przeglad_var_pop_fields: Przeglad_Var_Pop_Fields;
  Przeglad_var_pop_order_by: Przeglad_Var_Pop_Order_By;
  Przeglad_var_samp_fields: Przeglad_Var_Samp_Fields;
  Przeglad_var_samp_order_by: Przeglad_Var_Samp_Order_By;
  Przeglad_variance_fields: Przeglad_Variance_Fields;
  Przeglad_variance_order_by: Przeglad_Variance_Order_By;
  Status_Awarii: Status_Awarii;
  Status_Awarii_aggregate: Status_Awarii_Aggregate;
  Status_Awarii_aggregate_fields: Status_Awarii_Aggregate_Fields;
  Status_Awarii_avg_fields: Status_Awarii_Avg_Fields;
  Status_Awarii_bool_exp: Status_Awarii_Bool_Exp;
  Status_Awarii_inc_input: Status_Awarii_Inc_Input;
  Status_Awarii_insert_input: Status_Awarii_Insert_Input;
  Status_Awarii_max_fields: Status_Awarii_Max_Fields;
  Status_Awarii_min_fields: Status_Awarii_Min_Fields;
  Status_Awarii_mutation_response: Status_Awarii_Mutation_Response;
  Status_Awarii_obj_rel_insert_input: Status_Awarii_Obj_Rel_Insert_Input;
  Status_Awarii_on_conflict: Status_Awarii_On_Conflict;
  Status_Awarii_order_by: Status_Awarii_Order_By;
  Status_Awarii_pk_columns_input: Status_Awarii_Pk_Columns_Input;
  Status_Awarii_set_input: Status_Awarii_Set_Input;
  Status_Awarii_stddev_fields: Status_Awarii_Stddev_Fields;
  Status_Awarii_stddev_pop_fields: Status_Awarii_Stddev_Pop_Fields;
  Status_Awarii_stddev_samp_fields: Status_Awarii_Stddev_Samp_Fields;
  Status_Awarii_sum_fields: Status_Awarii_Sum_Fields;
  Status_Awarii_var_pop_fields: Status_Awarii_Var_Pop_Fields;
  Status_Awarii_var_samp_fields: Status_Awarii_Var_Samp_Fields;
  Status_Awarii_variance_fields: Status_Awarii_Variance_Fields;
  Status_Szkody: Status_Szkody;
  Status_Szkody_aggregate: Status_Szkody_Aggregate;
  Status_Szkody_aggregate_fields: Status_Szkody_Aggregate_Fields;
  Status_Szkody_avg_fields: Status_Szkody_Avg_Fields;
  Status_Szkody_bool_exp: Status_Szkody_Bool_Exp;
  Status_Szkody_inc_input: Status_Szkody_Inc_Input;
  Status_Szkody_insert_input: Status_Szkody_Insert_Input;
  Status_Szkody_max_fields: Status_Szkody_Max_Fields;
  Status_Szkody_min_fields: Status_Szkody_Min_Fields;
  Status_Szkody_mutation_response: Status_Szkody_Mutation_Response;
  Status_Szkody_obj_rel_insert_input: Status_Szkody_Obj_Rel_Insert_Input;
  Status_Szkody_on_conflict: Status_Szkody_On_Conflict;
  Status_Szkody_order_by: Status_Szkody_Order_By;
  Status_Szkody_pk_columns_input: Status_Szkody_Pk_Columns_Input;
  Status_Szkody_set_input: Status_Szkody_Set_Input;
  Status_Szkody_stddev_fields: Status_Szkody_Stddev_Fields;
  Status_Szkody_stddev_pop_fields: Status_Szkody_Stddev_Pop_Fields;
  Status_Szkody_stddev_samp_fields: Status_Szkody_Stddev_Samp_Fields;
  Status_Szkody_sum_fields: Status_Szkody_Sum_Fields;
  Status_Szkody_var_pop_fields: Status_Szkody_Var_Pop_Fields;
  Status_Szkody_var_samp_fields: Status_Szkody_Var_Samp_Fields;
  Status_Szkody_variance_fields: Status_Szkody_Variance_Fields;
  String_comparison_exp: String_Comparison_Exp;
  Szkoda: Szkoda;
  Szkoda_aggregate: Szkoda_Aggregate;
  Szkoda_aggregate_fields: Szkoda_Aggregate_Fields;
  Szkoda_aggregate_order_by: Szkoda_Aggregate_Order_By;
  Szkoda_arr_rel_insert_input: Szkoda_Arr_Rel_Insert_Input;
  Szkoda_avg_fields: Szkoda_Avg_Fields;
  Szkoda_avg_order_by: Szkoda_Avg_Order_By;
  Szkoda_bool_exp: Szkoda_Bool_Exp;
  Szkoda_inc_input: Szkoda_Inc_Input;
  Szkoda_insert_input: Szkoda_Insert_Input;
  Szkoda_max_fields: Szkoda_Max_Fields;
  Szkoda_max_order_by: Szkoda_Max_Order_By;
  Szkoda_min_fields: Szkoda_Min_Fields;
  Szkoda_min_order_by: Szkoda_Min_Order_By;
  Szkoda_mutation_response: Szkoda_Mutation_Response;
  Szkoda_on_conflict: Szkoda_On_Conflict;
  Szkoda_order_by: Szkoda_Order_By;
  Szkoda_pk_columns_input: Szkoda_Pk_Columns_Input;
  Szkoda_set_input: Szkoda_Set_Input;
  Szkoda_stddev_fields: Szkoda_Stddev_Fields;
  Szkoda_stddev_order_by: Szkoda_Stddev_Order_By;
  Szkoda_stddev_pop_fields: Szkoda_Stddev_Pop_Fields;
  Szkoda_stddev_pop_order_by: Szkoda_Stddev_Pop_Order_By;
  Szkoda_stddev_samp_fields: Szkoda_Stddev_Samp_Fields;
  Szkoda_stddev_samp_order_by: Szkoda_Stddev_Samp_Order_By;
  Szkoda_sum_fields: Szkoda_Sum_Fields;
  Szkoda_sum_order_by: Szkoda_Sum_Order_By;
  Szkoda_var_pop_fields: Szkoda_Var_Pop_Fields;
  Szkoda_var_pop_order_by: Szkoda_Var_Pop_Order_By;
  Szkoda_var_samp_fields: Szkoda_Var_Samp_Fields;
  Szkoda_var_samp_order_by: Szkoda_Var_Samp_Order_By;
  Szkoda_variance_fields: Szkoda_Variance_Fields;
  Szkoda_variance_order_by: Szkoda_Variance_Order_By;
  Typy_Opon: Typy_Opon;
  Typy_Opon_aggregate: Typy_Opon_Aggregate;
  Typy_Opon_aggregate_fields: Typy_Opon_Aggregate_Fields;
  Typy_Opon_avg_fields: Typy_Opon_Avg_Fields;
  Typy_Opon_bool_exp: Typy_Opon_Bool_Exp;
  Typy_Opon_inc_input: Typy_Opon_Inc_Input;
  Typy_Opon_insert_input: Typy_Opon_Insert_Input;
  Typy_Opon_max_fields: Typy_Opon_Max_Fields;
  Typy_Opon_min_fields: Typy_Opon_Min_Fields;
  Typy_Opon_mutation_response: Typy_Opon_Mutation_Response;
  Typy_Opon_obj_rel_insert_input: Typy_Opon_Obj_Rel_Insert_Input;
  Typy_Opon_on_conflict: Typy_Opon_On_Conflict;
  Typy_Opon_order_by: Typy_Opon_Order_By;
  Typy_Opon_pk_columns_input: Typy_Opon_Pk_Columns_Input;
  Typy_Opon_set_input: Typy_Opon_Set_Input;
  Typy_Opon_stddev_fields: Typy_Opon_Stddev_Fields;
  Typy_Opon_stddev_pop_fields: Typy_Opon_Stddev_Pop_Fields;
  Typy_Opon_stddev_samp_fields: Typy_Opon_Stddev_Samp_Fields;
  Typy_Opon_sum_fields: Typy_Opon_Sum_Fields;
  Typy_Opon_var_pop_fields: Typy_Opon_Var_Pop_Fields;
  Typy_Opon_var_samp_fields: Typy_Opon_Var_Samp_Fields;
  Typy_Opon_variance_fields: Typy_Opon_Variance_Fields;
  Uzytkownik: Uzytkownik;
  Uzytkownik_aggregate: Uzytkownik_Aggregate;
  Uzytkownik_aggregate_fields: Uzytkownik_Aggregate_Fields;
  Uzytkownik_avg_fields: Uzytkownik_Avg_Fields;
  Uzytkownik_bool_exp: Uzytkownik_Bool_Exp;
  Uzytkownik_inc_input: Uzytkownik_Inc_Input;
  Uzytkownik_insert_input: Uzytkownik_Insert_Input;
  Uzytkownik_max_fields: Uzytkownik_Max_Fields;
  Uzytkownik_min_fields: Uzytkownik_Min_Fields;
  Uzytkownik_mutation_response: Uzytkownik_Mutation_Response;
  Uzytkownik_obj_rel_insert_input: Uzytkownik_Obj_Rel_Insert_Input;
  Uzytkownik_on_conflict: Uzytkownik_On_Conflict;
  Uzytkownik_order_by: Uzytkownik_Order_By;
  Uzytkownik_pk_columns_input: Uzytkownik_Pk_Columns_Input;
  Uzytkownik_set_input: Uzytkownik_Set_Input;
  Uzytkownik_stddev_fields: Uzytkownik_Stddev_Fields;
  Uzytkownik_stddev_pop_fields: Uzytkownik_Stddev_Pop_Fields;
  Uzytkownik_stddev_samp_fields: Uzytkownik_Stddev_Samp_Fields;
  Uzytkownik_sum_fields: Uzytkownik_Sum_Fields;
  Uzytkownik_var_pop_fields: Uzytkownik_Var_Pop_Fields;
  Uzytkownik_var_samp_fields: Uzytkownik_Var_Samp_Fields;
  Uzytkownik_variance_fields: Uzytkownik_Variance_Fields;
  bigint: Scalars['bigint'];
  bigint_comparison_exp: Bigint_Comparison_Exp;
  date: Scalars['date'];
  date_comparison_exp: Date_Comparison_Exp;
  mutation_root: {};
  query_root: {};
  subscription_root: {};
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
};

export type AutoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auto'] = ResolversParentTypes['Auto']> = {
  Awaria?: Resolver<Array<ResolversTypes['Awaria']>, ParentType, ContextType, RequireFields<AutoAwariaArgs, never>>;
  Awaria_aggregate?: Resolver<ResolversTypes['Awaria_aggregate'], ParentType, ContextType, RequireFields<AutoAwaria_AggregateArgs, never>>;
  Grupa_Aut_Klienta?: Resolver<Array<ResolversTypes['Grupa_Aut_Klienta']>, ParentType, ContextType, RequireFields<AutoGrupa_Aut_KlientaArgs, never>>;
  Grupa_Aut_Klienta_aggregate?: Resolver<ResolversTypes['Grupa_Aut_Klienta_aggregate'], ParentType, ContextType, RequireFields<AutoGrupa_Aut_Klienta_AggregateArgs, never>>;
  Historia_Uzytkownik_Autos?: Resolver<Array<ResolversTypes['Historia_Uzytkownik_Auto']>, ParentType, ContextType, RequireFields<AutoHistoria_Uzytkownik_AutosArgs, never>>;
  Historia_Uzytkownik_Autos_aggregate?: Resolver<ResolversTypes['Historia_Uzytkownik_Auto_aggregate'], ParentType, ContextType, RequireFields<AutoHistoria_Uzytkownik_Autos_AggregateArgs, never>>;
  Karta_Orlens?: Resolver<Array<ResolversTypes['Karta_Orlen']>, ParentType, ContextType, RequireFields<AutoKarta_OrlensArgs, never>>;
  Karta_Orlens_aggregate?: Resolver<ResolversTypes['Karta_Orlen_aggregate'], ParentType, ContextType, RequireFields<AutoKarta_Orlens_AggregateArgs, never>>;
  Leasings?: Resolver<Array<ResolversTypes['Leasing']>, ParentType, ContextType, RequireFields<AutoLeasingsArgs, never>>;
  Leasings_aggregate?: Resolver<ResolversTypes['Leasing_aggregate'], ParentType, ContextType, RequireFields<AutoLeasings_AggregateArgs, never>>;
  Mandats?: Resolver<Array<ResolversTypes['Mandat']>, ParentType, ContextType, RequireFields<AutoMandatsArgs, never>>;
  Mandats_aggregate?: Resolver<ResolversTypes['Mandat_aggregate'], ParentType, ContextType, RequireFields<AutoMandats_AggregateArgs, never>>;
  Oponas?: Resolver<Array<ResolversTypes['Opona']>, ParentType, ContextType, RequireFields<AutoOponasArgs, never>>;
  Oponas_aggregate?: Resolver<ResolversTypes['Opona_aggregate'], ParentType, ContextType, RequireFields<AutoOponas_AggregateArgs, never>>;
  Polisas?: Resolver<Array<ResolversTypes['Polisa']>, ParentType, ContextType, RequireFields<AutoPolisasArgs, never>>;
  Polisas_aggregate?: Resolver<ResolversTypes['Polisa_aggregate'], ParentType, ContextType, RequireFields<AutoPolisas_AggregateArgs, never>>;
  Przebiegs?: Resolver<Array<ResolversTypes['Przebieg']>, ParentType, ContextType, RequireFields<AutoPrzebiegsArgs, never>>;
  Przebiegs_aggregate?: Resolver<ResolversTypes['Przebieg_aggregate'], ParentType, ContextType, RequireFields<AutoPrzebiegs_AggregateArgs, never>>;
  Przeglads?: Resolver<Array<ResolversTypes['Przeglad']>, ParentType, ContextType, RequireFields<AutoPrzegladsArgs, never>>;
  Przeglads_aggregate?: Resolver<ResolversTypes['Przeglad_aggregate'], ParentType, ContextType, RequireFields<AutoPrzeglads_AggregateArgs, never>>;
  gwarancja?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_w_uzyciu?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  marka?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  numer_rejestracyjny?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  numer_vin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paliwo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rok_produkcji?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stan_licznika?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uwagi?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auto_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auto_aggregate'] = ResolversParentTypes['Auto_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Auto_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Auto']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auto_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auto_aggregate_fields'] = ResolversParentTypes['Auto_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Auto_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Auto_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Auto_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Auto_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Auto_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Auto_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Auto_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Auto_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Auto_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Auto_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Auto_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auto_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auto_avg_fields'] = ResolversParentTypes['Auto_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rok_produkcji?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stan_licznika?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auto_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auto_max_fields'] = ResolversParentTypes['Auto_max_fields']> = {
  gwarancja?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marka?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numer_rejestracyjny?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numer_vin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paliwo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rok_produkcji?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stan_licznika?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uwagi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auto_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auto_min_fields'] = ResolversParentTypes['Auto_min_fields']> = {
  gwarancja?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  marka?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numer_rejestracyjny?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numer_vin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paliwo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rok_produkcji?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stan_licznika?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uwagi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auto_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auto_mutation_response'] = ResolversParentTypes['Auto_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Auto']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auto_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auto_stddev_fields'] = ResolversParentTypes['Auto_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rok_produkcji?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stan_licznika?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auto_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auto_stddev_pop_fields'] = ResolversParentTypes['Auto_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rok_produkcji?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stan_licznika?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auto_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auto_stddev_samp_fields'] = ResolversParentTypes['Auto_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rok_produkcji?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stan_licznika?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auto_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auto_sum_fields'] = ResolversParentTypes['Auto_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rok_produkcji?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stan_licznika?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auto_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auto_var_pop_fields'] = ResolversParentTypes['Auto_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rok_produkcji?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stan_licznika?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auto_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auto_var_samp_fields'] = ResolversParentTypes['Auto_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rok_produkcji?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stan_licznika?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auto_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auto_variance_fields'] = ResolversParentTypes['Auto_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rok_produkcji?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stan_licznika?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AwariaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Awaria'] = ResolversParentTypes['Awaria']> = {
  Auto?: Resolver<ResolversTypes['Auto'], ParentType, ContextType>;
  Status_Awarii?: Resolver<ResolversTypes['Status_Awarii'], ParentType, ContextType>;
  Uzytkownik?: Resolver<ResolversTypes['Uzytkownik'], ParentType, ContextType>;
  adres?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_auto?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_status_awarii?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_uzytkownik?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  opis_szkody?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Awaria_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Awaria_aggregate'] = ResolversParentTypes['Awaria_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Awaria_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Awaria']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Awaria_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Awaria_aggregate_fields'] = ResolversParentTypes['Awaria_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Awaria_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Awaria_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Awaria_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Awaria_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Awaria_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Awaria_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Awaria_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Awaria_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Awaria_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Awaria_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Awaria_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Awaria_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Awaria_avg_fields'] = ResolversParentTypes['Awaria_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_status_awarii?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Awaria_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Awaria_max_fields'] = ResolversParentTypes['Awaria_max_fields']> = {
  adres?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_status_awarii?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  opis_szkody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Awaria_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Awaria_min_fields'] = ResolversParentTypes['Awaria_min_fields']> = {
  adres?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_status_awarii?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  opis_szkody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Awaria_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Awaria_mutation_response'] = ResolversParentTypes['Awaria_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Awaria']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Awaria_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Awaria_stddev_fields'] = ResolversParentTypes['Awaria_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_status_awarii?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Awaria_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Awaria_stddev_pop_fields'] = ResolversParentTypes['Awaria_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_status_awarii?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Awaria_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Awaria_stddev_samp_fields'] = ResolversParentTypes['Awaria_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_status_awarii?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Awaria_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Awaria_sum_fields'] = ResolversParentTypes['Awaria_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_status_awarii?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Awaria_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Awaria_var_pop_fields'] = ResolversParentTypes['Awaria_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_status_awarii?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Awaria_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Awaria_var_samp_fields'] = ResolversParentTypes['Awaria_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_status_awarii?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Awaria_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Awaria_variance_fields'] = ResolversParentTypes['Awaria_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_status_awarii?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Grupa_Aut_KlientaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grupa_Aut_Klienta'] = ResolversParentTypes['Grupa_Aut_Klienta']> = {
  Auto?: Resolver<ResolversTypes['Auto'], ParentType, ContextType>;
  Klient?: Resolver<ResolversTypes['Klient'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_auto?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_klient?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Grupa_Aut_Klienta_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grupa_Aut_Klienta_aggregate'] = ResolversParentTypes['Grupa_Aut_Klienta_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Grupa_Aut_Klienta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Grupa_Aut_Klienta_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grupa_Aut_Klienta_aggregate_fields'] = ResolversParentTypes['Grupa_Aut_Klienta_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Grupa_Aut_Klienta_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Grupa_Aut_Klienta_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grupa_Aut_Klienta_avg_fields'] = ResolversParentTypes['Grupa_Aut_Klienta_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_klient?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Grupa_Aut_Klienta_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grupa_Aut_Klienta_max_fields'] = ResolversParentTypes['Grupa_Aut_Klienta_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_klient?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Grupa_Aut_Klienta_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grupa_Aut_Klienta_min_fields'] = ResolversParentTypes['Grupa_Aut_Klienta_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_klient?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Grupa_Aut_Klienta_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grupa_Aut_Klienta_mutation_response'] = ResolversParentTypes['Grupa_Aut_Klienta_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Grupa_Aut_Klienta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Grupa_Aut_Klienta_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grupa_Aut_Klienta_stddev_fields'] = ResolversParentTypes['Grupa_Aut_Klienta_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_klient?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Grupa_Aut_Klienta_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grupa_Aut_Klienta_stddev_pop_fields'] = ResolversParentTypes['Grupa_Aut_Klienta_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_klient?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Grupa_Aut_Klienta_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grupa_Aut_Klienta_stddev_samp_fields'] = ResolversParentTypes['Grupa_Aut_Klienta_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_klient?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Grupa_Aut_Klienta_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grupa_Aut_Klienta_sum_fields'] = ResolversParentTypes['Grupa_Aut_Klienta_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_klient?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Grupa_Aut_Klienta_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grupa_Aut_Klienta_var_pop_fields'] = ResolversParentTypes['Grupa_Aut_Klienta_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_klient?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Grupa_Aut_Klienta_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grupa_Aut_Klienta_var_samp_fields'] = ResolversParentTypes['Grupa_Aut_Klienta_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_klient?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Grupa_Aut_Klienta_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grupa_Aut_Klienta_variance_fields'] = ResolversParentTypes['Grupa_Aut_Klienta_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_klient?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historia_Uzytkownik_AutoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Historia_Uzytkownik_Auto'] = ResolversParentTypes['Historia_Uzytkownik_Auto']> = {
  Auto?: Resolver<ResolversTypes['Auto'], ParentType, ContextType>;
  Uzytkownik?: Resolver<ResolversTypes['Uzytkownik'], ParentType, ContextType>;
  data_dodania_wlasciciela?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  data_oddania_auta?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_auto?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_uzytkownik?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historia_Uzytkownik_Auto_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Historia_Uzytkownik_Auto_aggregate'] = ResolversParentTypes['Historia_Uzytkownik_Auto_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Historia_Uzytkownik_Auto']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historia_Uzytkownik_Auto_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Historia_Uzytkownik_Auto_aggregate_fields'] = ResolversParentTypes['Historia_Uzytkownik_Auto_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Historia_Uzytkownik_Auto_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historia_Uzytkownik_Auto_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Historia_Uzytkownik_Auto_avg_fields'] = ResolversParentTypes['Historia_Uzytkownik_Auto_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historia_Uzytkownik_Auto_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Historia_Uzytkownik_Auto_max_fields'] = ResolversParentTypes['Historia_Uzytkownik_Auto_max_fields']> = {
  data_dodania_wlasciciela?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  data_oddania_auta?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historia_Uzytkownik_Auto_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Historia_Uzytkownik_Auto_min_fields'] = ResolversParentTypes['Historia_Uzytkownik_Auto_min_fields']> = {
  data_dodania_wlasciciela?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  data_oddania_auta?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historia_Uzytkownik_Auto_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Historia_Uzytkownik_Auto_mutation_response'] = ResolversParentTypes['Historia_Uzytkownik_Auto_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Historia_Uzytkownik_Auto']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historia_Uzytkownik_Auto_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Historia_Uzytkownik_Auto_stddev_fields'] = ResolversParentTypes['Historia_Uzytkownik_Auto_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historia_Uzytkownik_Auto_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Historia_Uzytkownik_Auto_stddev_pop_fields'] = ResolversParentTypes['Historia_Uzytkownik_Auto_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historia_Uzytkownik_Auto_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Historia_Uzytkownik_Auto_stddev_samp_fields'] = ResolversParentTypes['Historia_Uzytkownik_Auto_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historia_Uzytkownik_Auto_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Historia_Uzytkownik_Auto_sum_fields'] = ResolversParentTypes['Historia_Uzytkownik_Auto_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historia_Uzytkownik_Auto_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Historia_Uzytkownik_Auto_var_pop_fields'] = ResolversParentTypes['Historia_Uzytkownik_Auto_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historia_Uzytkownik_Auto_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Historia_Uzytkownik_Auto_var_samp_fields'] = ResolversParentTypes['Historia_Uzytkownik_Auto_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Historia_Uzytkownik_Auto_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Historia_Uzytkownik_Auto_variance_fields'] = ResolversParentTypes['Historia_Uzytkownik_Auto_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Karta_OrlenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Karta_Orlen'] = ResolversParentTypes['Karta_Orlen']> = {
  Auto?: Resolver<ResolversTypes['Auto'], ParentType, ContextType>;
  data_waznosci?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_auto?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pin?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Karta_Orlen_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Karta_Orlen_aggregate'] = ResolversParentTypes['Karta_Orlen_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Karta_Orlen_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Karta_Orlen']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Karta_Orlen_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Karta_Orlen_aggregate_fields'] = ResolversParentTypes['Karta_Orlen_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Karta_Orlen_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Karta_Orlen_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Karta_Orlen_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Karta_Orlen_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Karta_Orlen_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Karta_Orlen_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Karta_Orlen_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Karta_Orlen_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Karta_Orlen_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Karta_Orlen_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Karta_Orlen_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Karta_Orlen_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Karta_Orlen_avg_fields'] = ResolversParentTypes['Karta_Orlen_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Karta_Orlen_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Karta_Orlen_max_fields'] = ResolversParentTypes['Karta_Orlen_max_fields']> = {
  data_waznosci?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Karta_Orlen_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Karta_Orlen_min_fields'] = ResolversParentTypes['Karta_Orlen_min_fields']> = {
  data_waznosci?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Karta_Orlen_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Karta_Orlen_mutation_response'] = ResolversParentTypes['Karta_Orlen_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Karta_Orlen']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Karta_Orlen_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Karta_Orlen_stddev_fields'] = ResolversParentTypes['Karta_Orlen_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Karta_Orlen_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Karta_Orlen_stddev_pop_fields'] = ResolversParentTypes['Karta_Orlen_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Karta_Orlen_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Karta_Orlen_stddev_samp_fields'] = ResolversParentTypes['Karta_Orlen_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Karta_Orlen_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Karta_Orlen_sum_fields'] = ResolversParentTypes['Karta_Orlen_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Karta_Orlen_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Karta_Orlen_var_pop_fields'] = ResolversParentTypes['Karta_Orlen_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Karta_Orlen_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Karta_Orlen_var_samp_fields'] = ResolversParentTypes['Karta_Orlen_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Karta_Orlen_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Karta_Orlen_variance_fields'] = ResolversParentTypes['Karta_Orlen_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KlientResolvers<ContextType = any, ParentType extends ResolversParentTypes['Klient'] = ResolversParentTypes['Klient']> = {
  Grupa_Aut_Klienta?: Resolver<Array<ResolversTypes['Grupa_Aut_Klienta']>, ParentType, ContextType, RequireFields<KlientGrupa_Aut_KlientaArgs, never>>;
  Grupa_Aut_Klienta_aggregate?: Resolver<ResolversTypes['Grupa_Aut_Klienta_aggregate'], ParentType, ContextType, RequireFields<KlientGrupa_Aut_Klienta_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  kontakt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nazwa?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Klient_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Klient_aggregate'] = ResolversParentTypes['Klient_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Klient_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Klient']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Klient_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Klient_aggregate_fields'] = ResolversParentTypes['Klient_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Klient_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Klient_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Klient_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Klient_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Klient_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Klient_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Klient_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Klient_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Klient_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Klient_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Klient_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Klient_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Klient_avg_fields'] = ResolversParentTypes['Klient_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Klient_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Klient_max_fields'] = ResolversParentTypes['Klient_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  kontakt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nazwa?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Klient_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Klient_min_fields'] = ResolversParentTypes['Klient_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  kontakt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nazwa?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Klient_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Klient_mutation_response'] = ResolversParentTypes['Klient_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Klient']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Klient_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Klient_stddev_fields'] = ResolversParentTypes['Klient_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Klient_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Klient_stddev_pop_fields'] = ResolversParentTypes['Klient_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Klient_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Klient_stddev_samp_fields'] = ResolversParentTypes['Klient_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Klient_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Klient_sum_fields'] = ResolversParentTypes['Klient_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Klient_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Klient_var_pop_fields'] = ResolversParentTypes['Klient_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Klient_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Klient_var_samp_fields'] = ResolversParentTypes['Klient_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Klient_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Klient_variance_fields'] = ResolversParentTypes['Klient_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeasingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leasing'] = ResolversParentTypes['Leasing']> = {
  Auto?: Resolver<ResolversTypes['Auto'], ParentType, ContextType>;
  data_zakonczenia?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  data_zawarcia_umowy?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_auto?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nr_umowy_leasingu?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  okres_trwania_w_miesiacach?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Leasing_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leasing_aggregate'] = ResolversParentTypes['Leasing_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Leasing_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Leasing']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Leasing_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leasing_aggregate_fields'] = ResolversParentTypes['Leasing_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Leasing_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Leasing_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Leasing_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Leasing_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Leasing_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Leasing_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Leasing_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Leasing_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Leasing_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Leasing_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Leasing_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Leasing_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leasing_avg_fields'] = ResolversParentTypes['Leasing_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  okres_trwania_w_miesiacach?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Leasing_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leasing_max_fields'] = ResolversParentTypes['Leasing_max_fields']> = {
  data_zakonczenia?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  data_zawarcia_umowy?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nr_umowy_leasingu?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  okres_trwania_w_miesiacach?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Leasing_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leasing_min_fields'] = ResolversParentTypes['Leasing_min_fields']> = {
  data_zakonczenia?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  data_zawarcia_umowy?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nr_umowy_leasingu?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  okres_trwania_w_miesiacach?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Leasing_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leasing_mutation_response'] = ResolversParentTypes['Leasing_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Leasing']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Leasing_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leasing_stddev_fields'] = ResolversParentTypes['Leasing_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  okres_trwania_w_miesiacach?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Leasing_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leasing_stddev_pop_fields'] = ResolversParentTypes['Leasing_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  okres_trwania_w_miesiacach?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Leasing_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leasing_stddev_samp_fields'] = ResolversParentTypes['Leasing_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  okres_trwania_w_miesiacach?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Leasing_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leasing_sum_fields'] = ResolversParentTypes['Leasing_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  okres_trwania_w_miesiacach?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Leasing_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leasing_var_pop_fields'] = ResolversParentTypes['Leasing_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  okres_trwania_w_miesiacach?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Leasing_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leasing_var_samp_fields'] = ResolversParentTypes['Leasing_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  okres_trwania_w_miesiacach?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Leasing_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Leasing_variance_fields'] = ResolversParentTypes['Leasing_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  okres_trwania_w_miesiacach?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MandatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mandat'] = ResolversParentTypes['Mandat']> = {
  Auto?: Resolver<ResolversTypes['Auto'], ParentType, ContextType>;
  Uzytkownik?: Resolver<ResolversTypes['Uzytkownik'], ParentType, ContextType>;
  data_odpowiedzi?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  data_otrzymania?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  data_pisma?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  data_zdarzenia?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  dzialanie?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_auto?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_uzytkownik?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nadawca?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nr_sprawy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  obciazenie_za_mandat?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  platnosc?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wysokosc_mandatu?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mandat_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mandat_aggregate'] = ResolversParentTypes['Mandat_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Mandat_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Mandat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mandat_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mandat_aggregate_fields'] = ResolversParentTypes['Mandat_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Mandat_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Mandat_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Mandat_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Mandat_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Mandat_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Mandat_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Mandat_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Mandat_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Mandat_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Mandat_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Mandat_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mandat_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mandat_avg_fields'] = ResolversParentTypes['Mandat_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  obciazenie_za_mandat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  platnosc?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wysokosc_mandatu?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mandat_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mandat_max_fields'] = ResolversParentTypes['Mandat_max_fields']> = {
  data_odpowiedzi?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  data_otrzymania?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  data_pisma?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  data_zdarzenia?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  dzialanie?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nadawca?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nr_sprawy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  obciazenie_za_mandat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  platnosc?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wysokosc_mandatu?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mandat_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mandat_min_fields'] = ResolversParentTypes['Mandat_min_fields']> = {
  data_odpowiedzi?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  data_otrzymania?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  data_pisma?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  data_zdarzenia?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  dzialanie?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nadawca?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nr_sprawy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  obciazenie_za_mandat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  platnosc?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wysokosc_mandatu?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mandat_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mandat_mutation_response'] = ResolversParentTypes['Mandat_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Mandat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mandat_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mandat_stddev_fields'] = ResolversParentTypes['Mandat_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  obciazenie_za_mandat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  platnosc?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wysokosc_mandatu?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mandat_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mandat_stddev_pop_fields'] = ResolversParentTypes['Mandat_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  obciazenie_za_mandat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  platnosc?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wysokosc_mandatu?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mandat_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mandat_stddev_samp_fields'] = ResolversParentTypes['Mandat_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  obciazenie_za_mandat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  platnosc?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wysokosc_mandatu?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mandat_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mandat_sum_fields'] = ResolversParentTypes['Mandat_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  obciazenie_za_mandat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  platnosc?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wysokosc_mandatu?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mandat_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mandat_var_pop_fields'] = ResolversParentTypes['Mandat_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  obciazenie_za_mandat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  platnosc?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wysokosc_mandatu?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mandat_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mandat_var_samp_fields'] = ResolversParentTypes['Mandat_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  obciazenie_za_mandat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  platnosc?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wysokosc_mandatu?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mandat_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mandat_variance_fields'] = ResolversParentTypes['Mandat_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  obciazenie_za_mandat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  platnosc?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wysokosc_mandatu?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OponaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opona'] = ResolversParentTypes['Opona']> = {
  Auto?: Resolver<ResolversTypes['Auto'], ParentType, ContextType>;
  Typy_Opon?: Resolver<ResolversTypes['Typy_Opon'], ParentType, ContextType>;
  data_zakupu?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  detale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firma?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_auto?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_typy_opon?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  koszt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rozmiar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opona_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opona_aggregate'] = ResolversParentTypes['Opona_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Opona_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Opona']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opona_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opona_aggregate_fields'] = ResolversParentTypes['Opona_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Opona_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Opona_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Opona_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Opona_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Opona_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Opona_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Opona_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Opona_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Opona_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Opona_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Opona_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opona_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opona_avg_fields'] = ResolversParentTypes['Opona_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_typy_opon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opona_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opona_max_fields'] = ResolversParentTypes['Opona_max_fields']> = {
  data_zakupu?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  detale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firma?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_typy_opon?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rozmiar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opona_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opona_min_fields'] = ResolversParentTypes['Opona_min_fields']> = {
  data_zakupu?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  detale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firma?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_typy_opon?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rozmiar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opona_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opona_mutation_response'] = ResolversParentTypes['Opona_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Opona']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opona_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opona_stddev_fields'] = ResolversParentTypes['Opona_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_typy_opon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opona_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opona_stddev_pop_fields'] = ResolversParentTypes['Opona_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_typy_opon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opona_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opona_stddev_samp_fields'] = ResolversParentTypes['Opona_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_typy_opon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opona_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opona_sum_fields'] = ResolversParentTypes['Opona_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_typy_opon?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opona_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opona_var_pop_fields'] = ResolversParentTypes['Opona_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_typy_opon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opona_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opona_var_samp_fields'] = ResolversParentTypes['Opona_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_typy_opon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opona_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opona_variance_fields'] = ResolversParentTypes['Opona_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_typy_opon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PolisaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Polisa'] = ResolversParentTypes['Polisa']> = {
  Auto?: Resolver<ResolversTypes['Auto'], ParentType, ContextType>;
  ac_oc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data_rozpoczecia_polisy?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_auto?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nr_polisy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ubezpieczyciel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Polisa_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Polisa_aggregate'] = ResolversParentTypes['Polisa_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Polisa_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Polisa']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Polisa_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Polisa_aggregate_fields'] = ResolversParentTypes['Polisa_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Polisa_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Polisa_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Polisa_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Polisa_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Polisa_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Polisa_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Polisa_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Polisa_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Polisa_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Polisa_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Polisa_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Polisa_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Polisa_avg_fields'] = ResolversParentTypes['Polisa_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Polisa_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Polisa_max_fields'] = ResolversParentTypes['Polisa_max_fields']> = {
  ac_oc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data_rozpoczecia_polisy?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nr_polisy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ubezpieczyciel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Polisa_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Polisa_min_fields'] = ResolversParentTypes['Polisa_min_fields']> = {
  ac_oc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data_rozpoczecia_polisy?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nr_polisy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ubezpieczyciel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Polisa_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Polisa_mutation_response'] = ResolversParentTypes['Polisa_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Polisa']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Polisa_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Polisa_stddev_fields'] = ResolversParentTypes['Polisa_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Polisa_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Polisa_stddev_pop_fields'] = ResolversParentTypes['Polisa_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Polisa_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Polisa_stddev_samp_fields'] = ResolversParentTypes['Polisa_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Polisa_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Polisa_sum_fields'] = ResolversParentTypes['Polisa_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Polisa_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Polisa_var_pop_fields'] = ResolversParentTypes['Polisa_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Polisa_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Polisa_var_samp_fields'] = ResolversParentTypes['Polisa_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Polisa_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Polisa_variance_fields'] = ResolversParentTypes['Polisa_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrzebiegResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przebieg'] = ResolversParentTypes['Przebieg']> = {
  Auto?: Resolver<ResolversTypes['Auto'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  data_przebiegu?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  data_przegladu?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_auto?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  przebieg?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  przebieg_z_poczatku_miesiaca?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przebieg_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przebieg_aggregate'] = ResolversParentTypes['Przebieg_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Przebieg_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Przebieg']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przebieg_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przebieg_aggregate_fields'] = ResolversParentTypes['Przebieg_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Przebieg_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Przebieg_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Przebieg_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Przebieg_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Przebieg_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Przebieg_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Przebieg_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Przebieg_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Przebieg_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Przebieg_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Przebieg_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przebieg_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przebieg_avg_fields'] = ResolversParentTypes['Przebieg_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  przebieg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  przebieg_z_poczatku_miesiaca?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przebieg_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przebieg_max_fields'] = ResolversParentTypes['Przebieg_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  data_przebiegu?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  data_przegladu?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  przebieg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  przebieg_z_poczatku_miesiaca?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przebieg_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przebieg_min_fields'] = ResolversParentTypes['Przebieg_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  data_przebiegu?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  data_przegladu?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  przebieg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  przebieg_z_poczatku_miesiaca?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przebieg_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przebieg_mutation_response'] = ResolversParentTypes['Przebieg_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Przebieg']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przebieg_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przebieg_stddev_fields'] = ResolversParentTypes['Przebieg_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  przebieg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  przebieg_z_poczatku_miesiaca?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przebieg_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przebieg_stddev_pop_fields'] = ResolversParentTypes['Przebieg_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  przebieg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  przebieg_z_poczatku_miesiaca?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przebieg_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przebieg_stddev_samp_fields'] = ResolversParentTypes['Przebieg_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  przebieg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  przebieg_z_poczatku_miesiaca?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przebieg_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przebieg_sum_fields'] = ResolversParentTypes['Przebieg_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  przebieg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  przebieg_z_poczatku_miesiaca?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przebieg_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przebieg_var_pop_fields'] = ResolversParentTypes['Przebieg_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  przebieg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  przebieg_z_poczatku_miesiaca?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przebieg_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przebieg_var_samp_fields'] = ResolversParentTypes['Przebieg_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  przebieg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  przebieg_z_poczatku_miesiaca?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przebieg_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przebieg_variance_fields'] = ResolversParentTypes['Przebieg_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  przebieg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  przebieg_z_poczatku_miesiaca?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrzegladResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad'] = ResolversParentTypes['Przeglad']> = {
  Auto?: Resolver<ResolversTypes['Auto'], ParentType, ContextType>;
  Przeglad_Koszta_Dodatkowe?: Resolver<ResolversTypes['Przeglad_Koszta_Dodatkowe'], ParentType, ContextType>;
  Przeglad_OT_Kilometry?: Resolver<ResolversTypes['Przeglad_OT_Kilometry'], ParentType, ContextType>;
  data_przegladu?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_auto?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_przeglad_koszta_dodatkowe?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_przeglad_ot_kilometry?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_wymiana_rozrzadu?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Koszta_DodatkoweResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_Koszta_Dodatkowe'] = ResolversParentTypes['Przeglad_Koszta_Dodatkowe']> = {
  Przeglads?: Resolver<Array<ResolversTypes['Przeglad']>, ParentType, ContextType, RequireFields<Przeglad_Koszta_DodatkowePrzegladsArgs, never>>;
  Przeglads_aggregate?: Resolver<ResolversTypes['Przeglad_aggregate'], ParentType, ContextType, RequireFields<Przeglad_Koszta_DodatkowePrzeglads_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  koszt_MacPhersona?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_hamulce?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_klimatyzacja?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_rozrzad?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  koszt_sprzeglo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Koszta_Dodatkowe_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_Koszta_Dodatkowe_aggregate'] = ResolversParentTypes['Przeglad_Koszta_Dodatkowe_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Przeglad_Koszta_Dodatkowe']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Koszta_Dodatkowe_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_Koszta_Dodatkowe_aggregate_fields'] = ResolversParentTypes['Przeglad_Koszta_Dodatkowe_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Przeglad_Koszta_Dodatkowe_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Koszta_Dodatkowe_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_Koszta_Dodatkowe_avg_fields'] = ResolversParentTypes['Przeglad_Koszta_Dodatkowe_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_MacPhersona?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_hamulce?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_klimatyzacja?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_rozrzad?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_sprzeglo?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Koszta_Dodatkowe_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_Koszta_Dodatkowe_max_fields'] = ResolversParentTypes['Przeglad_Koszta_Dodatkowe_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_MacPhersona?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_hamulce?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_klimatyzacja?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_rozrzad?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_sprzeglo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Koszta_Dodatkowe_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_Koszta_Dodatkowe_min_fields'] = ResolversParentTypes['Przeglad_Koszta_Dodatkowe_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_MacPhersona?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_hamulce?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_klimatyzacja?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_rozrzad?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_sprzeglo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Koszta_Dodatkowe_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_Koszta_Dodatkowe_mutation_response'] = ResolversParentTypes['Przeglad_Koszta_Dodatkowe_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Przeglad_Koszta_Dodatkowe']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Koszta_Dodatkowe_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_Koszta_Dodatkowe_stddev_fields'] = ResolversParentTypes['Przeglad_Koszta_Dodatkowe_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_MacPhersona?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_hamulce?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_klimatyzacja?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_rozrzad?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_sprzeglo?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Koszta_Dodatkowe_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_Koszta_Dodatkowe_stddev_pop_fields'] = ResolversParentTypes['Przeglad_Koszta_Dodatkowe_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_MacPhersona?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_hamulce?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_klimatyzacja?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_rozrzad?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_sprzeglo?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Koszta_Dodatkowe_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_Koszta_Dodatkowe_stddev_samp_fields'] = ResolversParentTypes['Przeglad_Koszta_Dodatkowe_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_MacPhersona?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_hamulce?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_klimatyzacja?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_rozrzad?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_sprzeglo?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Koszta_Dodatkowe_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_Koszta_Dodatkowe_sum_fields'] = ResolversParentTypes['Przeglad_Koszta_Dodatkowe_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_MacPhersona?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_hamulce?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_klimatyzacja?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_rozrzad?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  koszt_sprzeglo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Koszta_Dodatkowe_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_Koszta_Dodatkowe_var_pop_fields'] = ResolversParentTypes['Przeglad_Koszta_Dodatkowe_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_MacPhersona?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_hamulce?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_klimatyzacja?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_rozrzad?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_sprzeglo?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Koszta_Dodatkowe_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_Koszta_Dodatkowe_var_samp_fields'] = ResolversParentTypes['Przeglad_Koszta_Dodatkowe_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_MacPhersona?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_hamulce?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_klimatyzacja?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_rozrzad?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_sprzeglo?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Koszta_Dodatkowe_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_Koszta_Dodatkowe_variance_fields'] = ResolversParentTypes['Przeglad_Koszta_Dodatkowe_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_MacPhersona?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_hamulce?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_klimatyzacja?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_rozrzad?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  koszt_sprzeglo?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Ot_KilometryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_OT_Kilometry'] = ResolversParentTypes['Przeglad_OT_Kilometry']> = {
  Przeglads?: Resolver<Array<ResolversTypes['Przeglad']>, ParentType, ContextType, RequireFields<Przeglad_Ot_KilometryPrzegladsArgs, never>>;
  Przeglads_aggregate?: Resolver<ResolversTypes['Przeglad_aggregate'], ParentType, ContextType, RequireFields<Przeglad_Ot_KilometryPrzeglads_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ilosc_kilometrow_w_tysiacach?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Ot_Kilometry_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_OT_Kilometry_aggregate'] = ResolversParentTypes['Przeglad_OT_Kilometry_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Przeglad_OT_Kilometry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Ot_Kilometry_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_OT_Kilometry_aggregate_fields'] = ResolversParentTypes['Przeglad_OT_Kilometry_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Przeglad_Ot_Kilometry_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Ot_Kilometry_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_OT_Kilometry_avg_fields'] = ResolversParentTypes['Przeglad_OT_Kilometry_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ilosc_kilometrow_w_tysiacach?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Ot_Kilometry_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_OT_Kilometry_max_fields'] = ResolversParentTypes['Przeglad_OT_Kilometry_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ilosc_kilometrow_w_tysiacach?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Ot_Kilometry_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_OT_Kilometry_min_fields'] = ResolversParentTypes['Przeglad_OT_Kilometry_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ilosc_kilometrow_w_tysiacach?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Ot_Kilometry_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_OT_Kilometry_mutation_response'] = ResolversParentTypes['Przeglad_OT_Kilometry_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Przeglad_OT_Kilometry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Ot_Kilometry_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_OT_Kilometry_stddev_fields'] = ResolversParentTypes['Przeglad_OT_Kilometry_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ilosc_kilometrow_w_tysiacach?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Ot_Kilometry_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_OT_Kilometry_stddev_pop_fields'] = ResolversParentTypes['Przeglad_OT_Kilometry_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ilosc_kilometrow_w_tysiacach?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Ot_Kilometry_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_OT_Kilometry_stddev_samp_fields'] = ResolversParentTypes['Przeglad_OT_Kilometry_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ilosc_kilometrow_w_tysiacach?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Ot_Kilometry_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_OT_Kilometry_sum_fields'] = ResolversParentTypes['Przeglad_OT_Kilometry_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ilosc_kilometrow_w_tysiacach?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Ot_Kilometry_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_OT_Kilometry_var_pop_fields'] = ResolversParentTypes['Przeglad_OT_Kilometry_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ilosc_kilometrow_w_tysiacach?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Ot_Kilometry_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_OT_Kilometry_var_samp_fields'] = ResolversParentTypes['Przeglad_OT_Kilometry_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ilosc_kilometrow_w_tysiacach?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Ot_Kilometry_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_OT_Kilometry_variance_fields'] = ResolversParentTypes['Przeglad_OT_Kilometry_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ilosc_kilometrow_w_tysiacach?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_aggregate'] = ResolversParentTypes['Przeglad_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Przeglad_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Przeglad']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_aggregate_fields'] = ResolversParentTypes['Przeglad_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Przeglad_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Przeglad_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Przeglad_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Przeglad_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Przeglad_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Przeglad_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Przeglad_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Przeglad_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Przeglad_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Przeglad_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Przeglad_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_avg_fields'] = ResolversParentTypes['Przeglad_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_przeglad_koszta_dodatkowe?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_przeglad_ot_kilometry?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_max_fields'] = ResolversParentTypes['Przeglad_max_fields']> = {
  data_przegladu?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_przeglad_koszta_dodatkowe?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_przeglad_ot_kilometry?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_min_fields'] = ResolversParentTypes['Przeglad_min_fields']> = {
  data_przegladu?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_przeglad_koszta_dodatkowe?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_przeglad_ot_kilometry?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_mutation_response'] = ResolversParentTypes['Przeglad_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Przeglad']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_stddev_fields'] = ResolversParentTypes['Przeglad_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_przeglad_koszta_dodatkowe?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_przeglad_ot_kilometry?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_stddev_pop_fields'] = ResolversParentTypes['Przeglad_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_przeglad_koszta_dodatkowe?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_przeglad_ot_kilometry?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_stddev_samp_fields'] = ResolversParentTypes['Przeglad_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_przeglad_koszta_dodatkowe?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_przeglad_ot_kilometry?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_sum_fields'] = ResolversParentTypes['Przeglad_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_przeglad_koszta_dodatkowe?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_przeglad_ot_kilometry?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_var_pop_fields'] = ResolversParentTypes['Przeglad_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_przeglad_koszta_dodatkowe?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_przeglad_ot_kilometry?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_var_samp_fields'] = ResolversParentTypes['Przeglad_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_przeglad_koszta_dodatkowe?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_przeglad_ot_kilometry?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Przeglad_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Przeglad_variance_fields'] = ResolversParentTypes['Przeglad_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_przeglad_koszta_dodatkowe?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_przeglad_ot_kilometry?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_AwariiResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Awarii'] = ResolversParentTypes['Status_Awarii']> = {
  Awaria?: Resolver<Array<ResolversTypes['Awaria']>, ParentType, ContextType, RequireFields<Status_AwariiAwariaArgs, never>>;
  Awaria_aggregate?: Resolver<ResolversTypes['Awaria_aggregate'], ParentType, ContextType, RequireFields<Status_AwariiAwaria_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nazwa_statusu?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Awarii_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Awarii_aggregate'] = ResolversParentTypes['Status_Awarii_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Status_Awarii_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Status_Awarii']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Awarii_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Awarii_aggregate_fields'] = ResolversParentTypes['Status_Awarii_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Status_Awarii_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Status_Awarii_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Status_Awarii_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Status_Awarii_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Status_Awarii_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Status_Awarii_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Status_Awarii_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Status_Awarii_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Status_Awarii_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Status_Awarii_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Status_Awarii_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Awarii_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Awarii_avg_fields'] = ResolversParentTypes['Status_Awarii_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Awarii_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Awarii_max_fields'] = ResolversParentTypes['Status_Awarii_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nazwa_statusu?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Awarii_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Awarii_min_fields'] = ResolversParentTypes['Status_Awarii_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nazwa_statusu?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Awarii_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Awarii_mutation_response'] = ResolversParentTypes['Status_Awarii_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Status_Awarii']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Awarii_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Awarii_stddev_fields'] = ResolversParentTypes['Status_Awarii_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Awarii_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Awarii_stddev_pop_fields'] = ResolversParentTypes['Status_Awarii_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Awarii_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Awarii_stddev_samp_fields'] = ResolversParentTypes['Status_Awarii_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Awarii_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Awarii_sum_fields'] = ResolversParentTypes['Status_Awarii_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Awarii_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Awarii_var_pop_fields'] = ResolversParentTypes['Status_Awarii_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Awarii_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Awarii_var_samp_fields'] = ResolversParentTypes['Status_Awarii_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Awarii_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Awarii_variance_fields'] = ResolversParentTypes['Status_Awarii_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_SzkodyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Szkody'] = ResolversParentTypes['Status_Szkody']> = {
  Szkodas?: Resolver<Array<ResolversTypes['Szkoda']>, ParentType, ContextType, RequireFields<Status_SzkodySzkodasArgs, never>>;
  Szkodas_aggregate?: Resolver<ResolversTypes['Szkoda_aggregate'], ParentType, ContextType, RequireFields<Status_SzkodySzkodas_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nazwa_statusu?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Szkody_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Szkody_aggregate'] = ResolversParentTypes['Status_Szkody_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Status_Szkody_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Status_Szkody']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Szkody_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Szkody_aggregate_fields'] = ResolversParentTypes['Status_Szkody_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Status_Szkody_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Status_Szkody_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Status_Szkody_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Status_Szkody_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Status_Szkody_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Status_Szkody_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Status_Szkody_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Status_Szkody_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Status_Szkody_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Status_Szkody_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Status_Szkody_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Szkody_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Szkody_avg_fields'] = ResolversParentTypes['Status_Szkody_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Szkody_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Szkody_max_fields'] = ResolversParentTypes['Status_Szkody_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nazwa_statusu?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Szkody_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Szkody_min_fields'] = ResolversParentTypes['Status_Szkody_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nazwa_statusu?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Szkody_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Szkody_mutation_response'] = ResolversParentTypes['Status_Szkody_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Status_Szkody']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Szkody_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Szkody_stddev_fields'] = ResolversParentTypes['Status_Szkody_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Szkody_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Szkody_stddev_pop_fields'] = ResolversParentTypes['Status_Szkody_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Szkody_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Szkody_stddev_samp_fields'] = ResolversParentTypes['Status_Szkody_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Szkody_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Szkody_sum_fields'] = ResolversParentTypes['Status_Szkody_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Szkody_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Szkody_var_pop_fields'] = ResolversParentTypes['Status_Szkody_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Szkody_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Szkody_var_samp_fields'] = ResolversParentTypes['Status_Szkody_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Status_Szkody_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status_Szkody_variance_fields'] = ResolversParentTypes['Status_Szkody_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SzkodaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Szkoda'] = ResolversParentTypes['Szkoda']> = {
  Status_Szkody?: Resolver<ResolversTypes['Status_Szkody'], ParentType, ContextType>;
  Uzytkownik?: Resolver<ResolversTypes['Uzytkownik'], ParentType, ContextType>;
  adres?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_auto?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_status_szkody?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id_uzytkownik?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  opis_szkody?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uszkodzenia?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Szkoda_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Szkoda_aggregate'] = ResolversParentTypes['Szkoda_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Szkoda_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Szkoda']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Szkoda_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Szkoda_aggregate_fields'] = ResolversParentTypes['Szkoda_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Szkoda_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Szkoda_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Szkoda_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Szkoda_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Szkoda_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Szkoda_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Szkoda_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Szkoda_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Szkoda_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Szkoda_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Szkoda_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Szkoda_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Szkoda_avg_fields'] = ResolversParentTypes['Szkoda_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_status_szkody?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Szkoda_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Szkoda_max_fields'] = ResolversParentTypes['Szkoda_max_fields']> = {
  adres?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_status_szkody?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  opis_szkody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uszkodzenia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Szkoda_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Szkoda_min_fields'] = ResolversParentTypes['Szkoda_min_fields']> = {
  adres?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_status_szkody?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  opis_szkody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uszkodzenia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Szkoda_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Szkoda_mutation_response'] = ResolversParentTypes['Szkoda_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Szkoda']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Szkoda_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Szkoda_stddev_fields'] = ResolversParentTypes['Szkoda_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_status_szkody?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Szkoda_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Szkoda_stddev_pop_fields'] = ResolversParentTypes['Szkoda_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_status_szkody?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Szkoda_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Szkoda_stddev_samp_fields'] = ResolversParentTypes['Szkoda_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_status_szkody?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Szkoda_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Szkoda_sum_fields'] = ResolversParentTypes['Szkoda_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_status_szkody?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Szkoda_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Szkoda_var_pop_fields'] = ResolversParentTypes['Szkoda_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_status_szkody?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Szkoda_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Szkoda_var_samp_fields'] = ResolversParentTypes['Szkoda_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_status_szkody?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Szkoda_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Szkoda_variance_fields'] = ResolversParentTypes['Szkoda_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_auto?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_status_szkody?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id_uzytkownik?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Typy_OponResolvers<ContextType = any, ParentType extends ResolversParentTypes['Typy_Opon'] = ResolversParentTypes['Typy_Opon']> = {
  Oponas?: Resolver<Array<ResolversTypes['Opona']>, ParentType, ContextType, RequireFields<Typy_OponOponasArgs, never>>;
  Oponas_aggregate?: Resolver<ResolversTypes['Opona_aggregate'], ParentType, ContextType, RequireFields<Typy_OponOponas_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nazwa_typu?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Typy_Opon_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Typy_Opon_aggregate'] = ResolversParentTypes['Typy_Opon_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Typy_Opon_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Typy_Opon']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Typy_Opon_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Typy_Opon_aggregate_fields'] = ResolversParentTypes['Typy_Opon_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Typy_Opon_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Typy_Opon_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Typy_Opon_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Typy_Opon_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Typy_Opon_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Typy_Opon_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Typy_Opon_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Typy_Opon_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Typy_Opon_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Typy_Opon_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Typy_Opon_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Typy_Opon_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Typy_Opon_avg_fields'] = ResolversParentTypes['Typy_Opon_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Typy_Opon_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Typy_Opon_max_fields'] = ResolversParentTypes['Typy_Opon_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nazwa_typu?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Typy_Opon_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Typy_Opon_min_fields'] = ResolversParentTypes['Typy_Opon_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nazwa_typu?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Typy_Opon_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Typy_Opon_mutation_response'] = ResolversParentTypes['Typy_Opon_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Typy_Opon']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Typy_Opon_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Typy_Opon_stddev_fields'] = ResolversParentTypes['Typy_Opon_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Typy_Opon_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Typy_Opon_stddev_pop_fields'] = ResolversParentTypes['Typy_Opon_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Typy_Opon_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Typy_Opon_stddev_samp_fields'] = ResolversParentTypes['Typy_Opon_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Typy_Opon_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Typy_Opon_sum_fields'] = ResolversParentTypes['Typy_Opon_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Typy_Opon_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Typy_Opon_var_pop_fields'] = ResolversParentTypes['Typy_Opon_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Typy_Opon_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Typy_Opon_var_samp_fields'] = ResolversParentTypes['Typy_Opon_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Typy_Opon_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Typy_Opon_variance_fields'] = ResolversParentTypes['Typy_Opon_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UzytkownikResolvers<ContextType = any, ParentType extends ResolversParentTypes['Uzytkownik'] = ResolversParentTypes['Uzytkownik']> = {
  Awaria?: Resolver<Array<ResolversTypes['Awaria']>, ParentType, ContextType, RequireFields<UzytkownikAwariaArgs, never>>;
  Awaria_aggregate?: Resolver<ResolversTypes['Awaria_aggregate'], ParentType, ContextType, RequireFields<UzytkownikAwaria_AggregateArgs, never>>;
  Historia_Uzytkownik_Autos?: Resolver<Array<ResolversTypes['Historia_Uzytkownik_Auto']>, ParentType, ContextType, RequireFields<UzytkownikHistoria_Uzytkownik_AutosArgs, never>>;
  Historia_Uzytkownik_Autos_aggregate?: Resolver<ResolversTypes['Historia_Uzytkownik_Auto_aggregate'], ParentType, ContextType, RequireFields<UzytkownikHistoria_Uzytkownik_Autos_AggregateArgs, never>>;
  Mandats?: Resolver<Array<ResolversTypes['Mandat']>, ParentType, ContextType, RequireFields<UzytkownikMandatsArgs, never>>;
  Mandats_aggregate?: Resolver<ResolversTypes['Mandat_aggregate'], ParentType, ContextType, RequireFields<UzytkownikMandats_AggregateArgs, never>>;
  Szkodas?: Resolver<Array<ResolversTypes['Szkoda']>, ParentType, ContextType, RequireFields<UzytkownikSzkodasArgs, never>>;
  Szkodas_aggregate?: Resolver<ResolversTypes['Szkoda_aggregate'], ParentType, ContextType, RequireFields<UzytkownikSzkodas_AggregateArgs, never>>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  imie?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  miasto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nazwisko?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numer_prawa_jazdy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pesel?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  telefon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Uzytkownik_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Uzytkownik_aggregate'] = ResolversParentTypes['Uzytkownik_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Uzytkownik_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Uzytkownik']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Uzytkownik_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Uzytkownik_aggregate_fields'] = ResolversParentTypes['Uzytkownik_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['Uzytkownik_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Uzytkownik_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['Uzytkownik_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Uzytkownik_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['Uzytkownik_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['Uzytkownik_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['Uzytkownik_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Uzytkownik_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['Uzytkownik_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['Uzytkownik_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['Uzytkownik_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Uzytkownik_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Uzytkownik_avg_fields'] = ResolversParentTypes['Uzytkownik_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pesel?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Uzytkownik_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Uzytkownik_max_fields'] = ResolversParentTypes['Uzytkownik_max_fields']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  imie?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  miasto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nazwisko?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numer_prawa_jazdy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pesel?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  telefon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Uzytkownik_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Uzytkownik_min_fields'] = ResolversParentTypes['Uzytkownik_min_fields']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  imie?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  miasto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nazwisko?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numer_prawa_jazdy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pesel?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  telefon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Uzytkownik_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Uzytkownik_mutation_response'] = ResolversParentTypes['Uzytkownik_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Uzytkownik']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Uzytkownik_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Uzytkownik_stddev_fields'] = ResolversParentTypes['Uzytkownik_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pesel?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Uzytkownik_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Uzytkownik_stddev_pop_fields'] = ResolversParentTypes['Uzytkownik_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pesel?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Uzytkownik_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Uzytkownik_stddev_samp_fields'] = ResolversParentTypes['Uzytkownik_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pesel?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Uzytkownik_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Uzytkownik_sum_fields'] = ResolversParentTypes['Uzytkownik_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pesel?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Uzytkownik_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Uzytkownik_var_pop_fields'] = ResolversParentTypes['Uzytkownik_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pesel?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Uzytkownik_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Uzytkownik_var_samp_fields'] = ResolversParentTypes['Uzytkownik_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pesel?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Uzytkownik_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Uzytkownik_variance_fields'] = ResolversParentTypes['Uzytkownik_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pesel?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigintScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['bigint'], any> {
  name: 'bigint';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['date'], any> {
  name: 'date';
}

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_Auto?: Resolver<Maybe<ResolversTypes['Auto_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_AutoArgs, 'where'>>;
  delete_Auto_by_pk?: Resolver<Maybe<ResolversTypes['Auto']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Auto_By_PkArgs, 'id'>>;
  delete_Awaria?: Resolver<Maybe<ResolversTypes['Awaria_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_AwariaArgs, 'where'>>;
  delete_Awaria_by_pk?: Resolver<Maybe<ResolversTypes['Awaria']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Awaria_By_PkArgs, 'id'>>;
  delete_Grupa_Aut_Klienta?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Grupa_Aut_KlientaArgs, 'where'>>;
  delete_Grupa_Aut_Klienta_by_pk?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Grupa_Aut_Klienta_By_PkArgs, 'id'>>;
  delete_Historia_Uzytkownik_Auto?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Historia_Uzytkownik_AutoArgs, 'where'>>;
  delete_Historia_Uzytkownik_Auto_by_pk?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Historia_Uzytkownik_Auto_By_PkArgs, 'id'>>;
  delete_Karta_Orlen?: Resolver<Maybe<ResolversTypes['Karta_Orlen_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Karta_OrlenArgs, 'where'>>;
  delete_Karta_Orlen_by_pk?: Resolver<Maybe<ResolversTypes['Karta_Orlen']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Karta_Orlen_By_PkArgs, 'id'>>;
  delete_Klient?: Resolver<Maybe<ResolversTypes['Klient_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_KlientArgs, 'where'>>;
  delete_Klient_by_pk?: Resolver<Maybe<ResolversTypes['Klient']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Klient_By_PkArgs, 'id'>>;
  delete_Leasing?: Resolver<Maybe<ResolversTypes['Leasing_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_LeasingArgs, 'where'>>;
  delete_Leasing_by_pk?: Resolver<Maybe<ResolversTypes['Leasing']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Leasing_By_PkArgs, 'id'>>;
  delete_Mandat?: Resolver<Maybe<ResolversTypes['Mandat_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_MandatArgs, 'where'>>;
  delete_Mandat_by_pk?: Resolver<Maybe<ResolversTypes['Mandat']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Mandat_By_PkArgs, 'id'>>;
  delete_Opona?: Resolver<Maybe<ResolversTypes['Opona_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_OponaArgs, 'where'>>;
  delete_Opona_by_pk?: Resolver<Maybe<ResolversTypes['Opona']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Opona_By_PkArgs, 'id'>>;
  delete_Polisa?: Resolver<Maybe<ResolversTypes['Polisa_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_PolisaArgs, 'where'>>;
  delete_Polisa_by_pk?: Resolver<Maybe<ResolversTypes['Polisa']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Polisa_By_PkArgs, 'id'>>;
  delete_Przebieg?: Resolver<Maybe<ResolversTypes['Przebieg_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_PrzebiegArgs, 'where'>>;
  delete_Przebieg_by_pk?: Resolver<Maybe<ResolversTypes['Przebieg']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Przebieg_By_PkArgs, 'id'>>;
  delete_Przeglad?: Resolver<Maybe<ResolversTypes['Przeglad_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_PrzegladArgs, 'where'>>;
  delete_Przeglad_Koszta_Dodatkowe?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Przeglad_Koszta_DodatkoweArgs, 'where'>>;
  delete_Przeglad_Koszta_Dodatkowe_by_pk?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Przeglad_Koszta_Dodatkowe_By_PkArgs, 'id'>>;
  delete_Przeglad_OT_Kilometry?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Przeglad_Ot_KilometryArgs, 'where'>>;
  delete_Przeglad_OT_Kilometry_by_pk?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Przeglad_Ot_Kilometry_By_PkArgs, 'id'>>;
  delete_Przeglad_by_pk?: Resolver<Maybe<ResolversTypes['Przeglad']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Przeglad_By_PkArgs, 'id'>>;
  delete_Status_Awarii?: Resolver<Maybe<ResolversTypes['Status_Awarii_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Status_AwariiArgs, 'where'>>;
  delete_Status_Awarii_by_pk?: Resolver<Maybe<ResolversTypes['Status_Awarii']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Status_Awarii_By_PkArgs, 'id'>>;
  delete_Status_Szkody?: Resolver<Maybe<ResolversTypes['Status_Szkody_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Status_SzkodyArgs, 'where'>>;
  delete_Status_Szkody_by_pk?: Resolver<Maybe<ResolversTypes['Status_Szkody']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Status_Szkody_By_PkArgs, 'id'>>;
  delete_Szkoda?: Resolver<Maybe<ResolversTypes['Szkoda_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_SzkodaArgs, 'where'>>;
  delete_Szkoda_by_pk?: Resolver<Maybe<ResolversTypes['Szkoda']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Szkoda_By_PkArgs, 'id'>>;
  delete_Typy_Opon?: Resolver<Maybe<ResolversTypes['Typy_Opon_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Typy_OponArgs, 'where'>>;
  delete_Typy_Opon_by_pk?: Resolver<Maybe<ResolversTypes['Typy_Opon']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Typy_Opon_By_PkArgs, 'id'>>;
  delete_Uzytkownik?: Resolver<Maybe<ResolversTypes['Uzytkownik_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UzytkownikArgs, 'where'>>;
  delete_Uzytkownik_by_pk?: Resolver<Maybe<ResolversTypes['Uzytkownik']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Uzytkownik_By_PkArgs, 'id'>>;
  insert_Auto?: Resolver<Maybe<ResolversTypes['Auto_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_AutoArgs, 'objects'>>;
  insert_Auto_one?: Resolver<Maybe<ResolversTypes['Auto']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Auto_OneArgs, 'object'>>;
  insert_Awaria?: Resolver<Maybe<ResolversTypes['Awaria_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_AwariaArgs, 'objects'>>;
  insert_Awaria_one?: Resolver<Maybe<ResolversTypes['Awaria']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Awaria_OneArgs, 'object'>>;
  insert_Grupa_Aut_Klienta?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Grupa_Aut_KlientaArgs, 'objects'>>;
  insert_Grupa_Aut_Klienta_one?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Grupa_Aut_Klienta_OneArgs, 'object'>>;
  insert_Historia_Uzytkownik_Auto?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Historia_Uzytkownik_AutoArgs, 'objects'>>;
  insert_Historia_Uzytkownik_Auto_one?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Historia_Uzytkownik_Auto_OneArgs, 'object'>>;
  insert_Karta_Orlen?: Resolver<Maybe<ResolversTypes['Karta_Orlen_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Karta_OrlenArgs, 'objects'>>;
  insert_Karta_Orlen_one?: Resolver<Maybe<ResolversTypes['Karta_Orlen']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Karta_Orlen_OneArgs, 'object'>>;
  insert_Klient?: Resolver<Maybe<ResolversTypes['Klient_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_KlientArgs, 'objects'>>;
  insert_Klient_one?: Resolver<Maybe<ResolversTypes['Klient']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Klient_OneArgs, 'object'>>;
  insert_Leasing?: Resolver<Maybe<ResolversTypes['Leasing_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_LeasingArgs, 'objects'>>;
  insert_Leasing_one?: Resolver<Maybe<ResolversTypes['Leasing']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Leasing_OneArgs, 'object'>>;
  insert_Mandat?: Resolver<Maybe<ResolversTypes['Mandat_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_MandatArgs, 'objects'>>;
  insert_Mandat_one?: Resolver<Maybe<ResolversTypes['Mandat']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Mandat_OneArgs, 'object'>>;
  insert_Opona?: Resolver<Maybe<ResolversTypes['Opona_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_OponaArgs, 'objects'>>;
  insert_Opona_one?: Resolver<Maybe<ResolversTypes['Opona']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Opona_OneArgs, 'object'>>;
  insert_Polisa?: Resolver<Maybe<ResolversTypes['Polisa_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_PolisaArgs, 'objects'>>;
  insert_Polisa_one?: Resolver<Maybe<ResolversTypes['Polisa']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Polisa_OneArgs, 'object'>>;
  insert_Przebieg?: Resolver<Maybe<ResolversTypes['Przebieg_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_PrzebiegArgs, 'objects'>>;
  insert_Przebieg_one?: Resolver<Maybe<ResolversTypes['Przebieg']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Przebieg_OneArgs, 'object'>>;
  insert_Przeglad?: Resolver<Maybe<ResolversTypes['Przeglad_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_PrzegladArgs, 'objects'>>;
  insert_Przeglad_Koszta_Dodatkowe?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Przeglad_Koszta_DodatkoweArgs, 'objects'>>;
  insert_Przeglad_Koszta_Dodatkowe_one?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Przeglad_Koszta_Dodatkowe_OneArgs, 'object'>>;
  insert_Przeglad_OT_Kilometry?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Przeglad_Ot_KilometryArgs, 'objects'>>;
  insert_Przeglad_OT_Kilometry_one?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Przeglad_Ot_Kilometry_OneArgs, 'object'>>;
  insert_Przeglad_one?: Resolver<Maybe<ResolversTypes['Przeglad']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Przeglad_OneArgs, 'object'>>;
  insert_Status_Awarii?: Resolver<Maybe<ResolversTypes['Status_Awarii_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Status_AwariiArgs, 'objects'>>;
  insert_Status_Awarii_one?: Resolver<Maybe<ResolversTypes['Status_Awarii']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Status_Awarii_OneArgs, 'object'>>;
  insert_Status_Szkody?: Resolver<Maybe<ResolversTypes['Status_Szkody_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Status_SzkodyArgs, 'objects'>>;
  insert_Status_Szkody_one?: Resolver<Maybe<ResolversTypes['Status_Szkody']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Status_Szkody_OneArgs, 'object'>>;
  insert_Szkoda?: Resolver<Maybe<ResolversTypes['Szkoda_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_SzkodaArgs, 'objects'>>;
  insert_Szkoda_one?: Resolver<Maybe<ResolversTypes['Szkoda']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Szkoda_OneArgs, 'object'>>;
  insert_Typy_Opon?: Resolver<Maybe<ResolversTypes['Typy_Opon_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Typy_OponArgs, 'objects'>>;
  insert_Typy_Opon_one?: Resolver<Maybe<ResolversTypes['Typy_Opon']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Typy_Opon_OneArgs, 'object'>>;
  insert_Uzytkownik?: Resolver<Maybe<ResolversTypes['Uzytkownik_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UzytkownikArgs, 'objects'>>;
  insert_Uzytkownik_one?: Resolver<Maybe<ResolversTypes['Uzytkownik']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Uzytkownik_OneArgs, 'object'>>;
  update_Auto?: Resolver<Maybe<ResolversTypes['Auto_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_AutoArgs, 'where'>>;
  update_Auto_by_pk?: Resolver<Maybe<ResolversTypes['Auto']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Auto_By_PkArgs, 'pk_columns'>>;
  update_Awaria?: Resolver<Maybe<ResolversTypes['Awaria_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_AwariaArgs, 'where'>>;
  update_Awaria_by_pk?: Resolver<Maybe<ResolversTypes['Awaria']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Awaria_By_PkArgs, 'pk_columns'>>;
  update_Grupa_Aut_Klienta?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Grupa_Aut_KlientaArgs, 'where'>>;
  update_Grupa_Aut_Klienta_by_pk?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Grupa_Aut_Klienta_By_PkArgs, 'pk_columns'>>;
  update_Historia_Uzytkownik_Auto?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Historia_Uzytkownik_AutoArgs, 'where'>>;
  update_Historia_Uzytkownik_Auto_by_pk?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Historia_Uzytkownik_Auto_By_PkArgs, 'pk_columns'>>;
  update_Karta_Orlen?: Resolver<Maybe<ResolversTypes['Karta_Orlen_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Karta_OrlenArgs, 'where'>>;
  update_Karta_Orlen_by_pk?: Resolver<Maybe<ResolversTypes['Karta_Orlen']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Karta_Orlen_By_PkArgs, 'pk_columns'>>;
  update_Klient?: Resolver<Maybe<ResolversTypes['Klient_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_KlientArgs, 'where'>>;
  update_Klient_by_pk?: Resolver<Maybe<ResolversTypes['Klient']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Klient_By_PkArgs, 'pk_columns'>>;
  update_Leasing?: Resolver<Maybe<ResolversTypes['Leasing_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_LeasingArgs, 'where'>>;
  update_Leasing_by_pk?: Resolver<Maybe<ResolversTypes['Leasing']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Leasing_By_PkArgs, 'pk_columns'>>;
  update_Mandat?: Resolver<Maybe<ResolversTypes['Mandat_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_MandatArgs, 'where'>>;
  update_Mandat_by_pk?: Resolver<Maybe<ResolversTypes['Mandat']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Mandat_By_PkArgs, 'pk_columns'>>;
  update_Opona?: Resolver<Maybe<ResolversTypes['Opona_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_OponaArgs, 'where'>>;
  update_Opona_by_pk?: Resolver<Maybe<ResolversTypes['Opona']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Opona_By_PkArgs, 'pk_columns'>>;
  update_Polisa?: Resolver<Maybe<ResolversTypes['Polisa_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_PolisaArgs, 'where'>>;
  update_Polisa_by_pk?: Resolver<Maybe<ResolversTypes['Polisa']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Polisa_By_PkArgs, 'pk_columns'>>;
  update_Przebieg?: Resolver<Maybe<ResolversTypes['Przebieg_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_PrzebiegArgs, 'where'>>;
  update_Przebieg_by_pk?: Resolver<Maybe<ResolversTypes['Przebieg']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Przebieg_By_PkArgs, 'pk_columns'>>;
  update_Przeglad?: Resolver<Maybe<ResolversTypes['Przeglad_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_PrzegladArgs, 'where'>>;
  update_Przeglad_Koszta_Dodatkowe?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Przeglad_Koszta_DodatkoweArgs, 'where'>>;
  update_Przeglad_Koszta_Dodatkowe_by_pk?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Przeglad_Koszta_Dodatkowe_By_PkArgs, 'pk_columns'>>;
  update_Przeglad_OT_Kilometry?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Przeglad_Ot_KilometryArgs, 'where'>>;
  update_Przeglad_OT_Kilometry_by_pk?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Przeglad_Ot_Kilometry_By_PkArgs, 'pk_columns'>>;
  update_Przeglad_by_pk?: Resolver<Maybe<ResolversTypes['Przeglad']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Przeglad_By_PkArgs, 'pk_columns'>>;
  update_Status_Awarii?: Resolver<Maybe<ResolversTypes['Status_Awarii_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Status_AwariiArgs, 'where'>>;
  update_Status_Awarii_by_pk?: Resolver<Maybe<ResolversTypes['Status_Awarii']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Status_Awarii_By_PkArgs, 'pk_columns'>>;
  update_Status_Szkody?: Resolver<Maybe<ResolversTypes['Status_Szkody_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Status_SzkodyArgs, 'where'>>;
  update_Status_Szkody_by_pk?: Resolver<Maybe<ResolversTypes['Status_Szkody']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Status_Szkody_By_PkArgs, 'pk_columns'>>;
  update_Szkoda?: Resolver<Maybe<ResolversTypes['Szkoda_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_SzkodaArgs, 'where'>>;
  update_Szkoda_by_pk?: Resolver<Maybe<ResolversTypes['Szkoda']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Szkoda_By_PkArgs, 'pk_columns'>>;
  update_Typy_Opon?: Resolver<Maybe<ResolversTypes['Typy_Opon_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Typy_OponArgs, 'where'>>;
  update_Typy_Opon_by_pk?: Resolver<Maybe<ResolversTypes['Typy_Opon']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Typy_Opon_By_PkArgs, 'pk_columns'>>;
  update_Uzytkownik?: Resolver<Maybe<ResolversTypes['Uzytkownik_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UzytkownikArgs, 'where'>>;
  update_Uzytkownik_by_pk?: Resolver<Maybe<ResolversTypes['Uzytkownik']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Uzytkownik_By_PkArgs, 'pk_columns'>>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  Auto?: Resolver<Array<ResolversTypes['Auto']>, ParentType, ContextType, RequireFields<Query_RootAutoArgs, never>>;
  Auto_aggregate?: Resolver<ResolversTypes['Auto_aggregate'], ParentType, ContextType, RequireFields<Query_RootAuto_AggregateArgs, never>>;
  Auto_by_pk?: Resolver<Maybe<ResolversTypes['Auto']>, ParentType, ContextType, RequireFields<Query_RootAuto_By_PkArgs, 'id'>>;
  Awaria?: Resolver<Array<ResolversTypes['Awaria']>, ParentType, ContextType, RequireFields<Query_RootAwariaArgs, never>>;
  Awaria_aggregate?: Resolver<ResolversTypes['Awaria_aggregate'], ParentType, ContextType, RequireFields<Query_RootAwaria_AggregateArgs, never>>;
  Awaria_by_pk?: Resolver<Maybe<ResolversTypes['Awaria']>, ParentType, ContextType, RequireFields<Query_RootAwaria_By_PkArgs, 'id'>>;
  Grupa_Aut_Klienta?: Resolver<Array<ResolversTypes['Grupa_Aut_Klienta']>, ParentType, ContextType, RequireFields<Query_RootGrupa_Aut_KlientaArgs, never>>;
  Grupa_Aut_Klienta_aggregate?: Resolver<ResolversTypes['Grupa_Aut_Klienta_aggregate'], ParentType, ContextType, RequireFields<Query_RootGrupa_Aut_Klienta_AggregateArgs, never>>;
  Grupa_Aut_Klienta_by_pk?: Resolver<Maybe<ResolversTypes['Grupa_Aut_Klienta']>, ParentType, ContextType, RequireFields<Query_RootGrupa_Aut_Klienta_By_PkArgs, 'id'>>;
  Historia_Uzytkownik_Auto?: Resolver<Array<ResolversTypes['Historia_Uzytkownik_Auto']>, ParentType, ContextType, RequireFields<Query_RootHistoria_Uzytkownik_AutoArgs, never>>;
  Historia_Uzytkownik_Auto_aggregate?: Resolver<ResolversTypes['Historia_Uzytkownik_Auto_aggregate'], ParentType, ContextType, RequireFields<Query_RootHistoria_Uzytkownik_Auto_AggregateArgs, never>>;
  Historia_Uzytkownik_Auto_by_pk?: Resolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto']>, ParentType, ContextType, RequireFields<Query_RootHistoria_Uzytkownik_Auto_By_PkArgs, 'id'>>;
  Karta_Orlen?: Resolver<Array<ResolversTypes['Karta_Orlen']>, ParentType, ContextType, RequireFields<Query_RootKarta_OrlenArgs, never>>;
  Karta_Orlen_aggregate?: Resolver<ResolversTypes['Karta_Orlen_aggregate'], ParentType, ContextType, RequireFields<Query_RootKarta_Orlen_AggregateArgs, never>>;
  Karta_Orlen_by_pk?: Resolver<Maybe<ResolversTypes['Karta_Orlen']>, ParentType, ContextType, RequireFields<Query_RootKarta_Orlen_By_PkArgs, 'id'>>;
  Klient?: Resolver<Array<ResolversTypes['Klient']>, ParentType, ContextType, RequireFields<Query_RootKlientArgs, never>>;
  Klient_aggregate?: Resolver<ResolversTypes['Klient_aggregate'], ParentType, ContextType, RequireFields<Query_RootKlient_AggregateArgs, never>>;
  Klient_by_pk?: Resolver<Maybe<ResolversTypes['Klient']>, ParentType, ContextType, RequireFields<Query_RootKlient_By_PkArgs, 'id'>>;
  Leasing?: Resolver<Array<ResolversTypes['Leasing']>, ParentType, ContextType, RequireFields<Query_RootLeasingArgs, never>>;
  Leasing_aggregate?: Resolver<ResolversTypes['Leasing_aggregate'], ParentType, ContextType, RequireFields<Query_RootLeasing_AggregateArgs, never>>;
  Leasing_by_pk?: Resolver<Maybe<ResolversTypes['Leasing']>, ParentType, ContextType, RequireFields<Query_RootLeasing_By_PkArgs, 'id'>>;
  Mandat?: Resolver<Array<ResolversTypes['Mandat']>, ParentType, ContextType, RequireFields<Query_RootMandatArgs, never>>;
  Mandat_aggregate?: Resolver<ResolversTypes['Mandat_aggregate'], ParentType, ContextType, RequireFields<Query_RootMandat_AggregateArgs, never>>;
  Mandat_by_pk?: Resolver<Maybe<ResolversTypes['Mandat']>, ParentType, ContextType, RequireFields<Query_RootMandat_By_PkArgs, 'id'>>;
  Opona?: Resolver<Array<ResolversTypes['Opona']>, ParentType, ContextType, RequireFields<Query_RootOponaArgs, never>>;
  Opona_aggregate?: Resolver<ResolversTypes['Opona_aggregate'], ParentType, ContextType, RequireFields<Query_RootOpona_AggregateArgs, never>>;
  Opona_by_pk?: Resolver<Maybe<ResolversTypes['Opona']>, ParentType, ContextType, RequireFields<Query_RootOpona_By_PkArgs, 'id'>>;
  Polisa?: Resolver<Array<ResolversTypes['Polisa']>, ParentType, ContextType, RequireFields<Query_RootPolisaArgs, never>>;
  Polisa_aggregate?: Resolver<ResolversTypes['Polisa_aggregate'], ParentType, ContextType, RequireFields<Query_RootPolisa_AggregateArgs, never>>;
  Polisa_by_pk?: Resolver<Maybe<ResolversTypes['Polisa']>, ParentType, ContextType, RequireFields<Query_RootPolisa_By_PkArgs, 'id'>>;
  Przebieg?: Resolver<Array<ResolversTypes['Przebieg']>, ParentType, ContextType, RequireFields<Query_RootPrzebiegArgs, never>>;
  Przebieg_aggregate?: Resolver<ResolversTypes['Przebieg_aggregate'], ParentType, ContextType, RequireFields<Query_RootPrzebieg_AggregateArgs, never>>;
  Przebieg_by_pk?: Resolver<Maybe<ResolversTypes['Przebieg']>, ParentType, ContextType, RequireFields<Query_RootPrzebieg_By_PkArgs, 'id'>>;
  Przeglad?: Resolver<Array<ResolversTypes['Przeglad']>, ParentType, ContextType, RequireFields<Query_RootPrzegladArgs, never>>;
  Przeglad_Koszta_Dodatkowe?: Resolver<Array<ResolversTypes['Przeglad_Koszta_Dodatkowe']>, ParentType, ContextType, RequireFields<Query_RootPrzeglad_Koszta_DodatkoweArgs, never>>;
  Przeglad_Koszta_Dodatkowe_aggregate?: Resolver<ResolversTypes['Przeglad_Koszta_Dodatkowe_aggregate'], ParentType, ContextType, RequireFields<Query_RootPrzeglad_Koszta_Dodatkowe_AggregateArgs, never>>;
  Przeglad_Koszta_Dodatkowe_by_pk?: Resolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe']>, ParentType, ContextType, RequireFields<Query_RootPrzeglad_Koszta_Dodatkowe_By_PkArgs, 'id'>>;
  Przeglad_OT_Kilometry?: Resolver<Array<ResolversTypes['Przeglad_OT_Kilometry']>, ParentType, ContextType, RequireFields<Query_RootPrzeglad_Ot_KilometryArgs, never>>;
  Przeglad_OT_Kilometry_aggregate?: Resolver<ResolversTypes['Przeglad_OT_Kilometry_aggregate'], ParentType, ContextType, RequireFields<Query_RootPrzeglad_Ot_Kilometry_AggregateArgs, never>>;
  Przeglad_OT_Kilometry_by_pk?: Resolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry']>, ParentType, ContextType, RequireFields<Query_RootPrzeglad_Ot_Kilometry_By_PkArgs, 'id'>>;
  Przeglad_aggregate?: Resolver<ResolversTypes['Przeglad_aggregate'], ParentType, ContextType, RequireFields<Query_RootPrzeglad_AggregateArgs, never>>;
  Przeglad_by_pk?: Resolver<Maybe<ResolversTypes['Przeglad']>, ParentType, ContextType, RequireFields<Query_RootPrzeglad_By_PkArgs, 'id'>>;
  Status_Awarii?: Resolver<Array<ResolversTypes['Status_Awarii']>, ParentType, ContextType, RequireFields<Query_RootStatus_AwariiArgs, never>>;
  Status_Awarii_aggregate?: Resolver<ResolversTypes['Status_Awarii_aggregate'], ParentType, ContextType, RequireFields<Query_RootStatus_Awarii_AggregateArgs, never>>;
  Status_Awarii_by_pk?: Resolver<Maybe<ResolversTypes['Status_Awarii']>, ParentType, ContextType, RequireFields<Query_RootStatus_Awarii_By_PkArgs, 'id'>>;
  Status_Szkody?: Resolver<Array<ResolversTypes['Status_Szkody']>, ParentType, ContextType, RequireFields<Query_RootStatus_SzkodyArgs, never>>;
  Status_Szkody_aggregate?: Resolver<ResolversTypes['Status_Szkody_aggregate'], ParentType, ContextType, RequireFields<Query_RootStatus_Szkody_AggregateArgs, never>>;
  Status_Szkody_by_pk?: Resolver<Maybe<ResolversTypes['Status_Szkody']>, ParentType, ContextType, RequireFields<Query_RootStatus_Szkody_By_PkArgs, 'id'>>;
  Szkoda?: Resolver<Array<ResolversTypes['Szkoda']>, ParentType, ContextType, RequireFields<Query_RootSzkodaArgs, never>>;
  Szkoda_aggregate?: Resolver<ResolversTypes['Szkoda_aggregate'], ParentType, ContextType, RequireFields<Query_RootSzkoda_AggregateArgs, never>>;
  Szkoda_by_pk?: Resolver<Maybe<ResolversTypes['Szkoda']>, ParentType, ContextType, RequireFields<Query_RootSzkoda_By_PkArgs, 'id'>>;
  Typy_Opon?: Resolver<Array<ResolversTypes['Typy_Opon']>, ParentType, ContextType, RequireFields<Query_RootTypy_OponArgs, never>>;
  Typy_Opon_aggregate?: Resolver<ResolversTypes['Typy_Opon_aggregate'], ParentType, ContextType, RequireFields<Query_RootTypy_Opon_AggregateArgs, never>>;
  Typy_Opon_by_pk?: Resolver<Maybe<ResolversTypes['Typy_Opon']>, ParentType, ContextType, RequireFields<Query_RootTypy_Opon_By_PkArgs, 'id'>>;
  Uzytkownik?: Resolver<Array<ResolversTypes['Uzytkownik']>, ParentType, ContextType, RequireFields<Query_RootUzytkownikArgs, never>>;
  Uzytkownik_aggregate?: Resolver<ResolversTypes['Uzytkownik_aggregate'], ParentType, ContextType, RequireFields<Query_RootUzytkownik_AggregateArgs, never>>;
  Uzytkownik_by_pk?: Resolver<Maybe<ResolversTypes['Uzytkownik']>, ParentType, ContextType, RequireFields<Query_RootUzytkownik_By_PkArgs, 'id'>>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  Auto?: SubscriptionResolver<Array<ResolversTypes['Auto']>, "Auto", ParentType, ContextType, RequireFields<Subscription_RootAutoArgs, never>>;
  Auto_aggregate?: SubscriptionResolver<ResolversTypes['Auto_aggregate'], "Auto_aggregate", ParentType, ContextType, RequireFields<Subscription_RootAuto_AggregateArgs, never>>;
  Auto_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Auto']>, "Auto_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAuto_By_PkArgs, 'id'>>;
  Awaria?: SubscriptionResolver<Array<ResolversTypes['Awaria']>, "Awaria", ParentType, ContextType, RequireFields<Subscription_RootAwariaArgs, never>>;
  Awaria_aggregate?: SubscriptionResolver<ResolversTypes['Awaria_aggregate'], "Awaria_aggregate", ParentType, ContextType, RequireFields<Subscription_RootAwaria_AggregateArgs, never>>;
  Awaria_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Awaria']>, "Awaria_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAwaria_By_PkArgs, 'id'>>;
  Grupa_Aut_Klienta?: SubscriptionResolver<Array<ResolversTypes['Grupa_Aut_Klienta']>, "Grupa_Aut_Klienta", ParentType, ContextType, RequireFields<Subscription_RootGrupa_Aut_KlientaArgs, never>>;
  Grupa_Aut_Klienta_aggregate?: SubscriptionResolver<ResolversTypes['Grupa_Aut_Klienta_aggregate'], "Grupa_Aut_Klienta_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGrupa_Aut_Klienta_AggregateArgs, never>>;
  Grupa_Aut_Klienta_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Grupa_Aut_Klienta']>, "Grupa_Aut_Klienta_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGrupa_Aut_Klienta_By_PkArgs, 'id'>>;
  Historia_Uzytkownik_Auto?: SubscriptionResolver<Array<ResolversTypes['Historia_Uzytkownik_Auto']>, "Historia_Uzytkownik_Auto", ParentType, ContextType, RequireFields<Subscription_RootHistoria_Uzytkownik_AutoArgs, never>>;
  Historia_Uzytkownik_Auto_aggregate?: SubscriptionResolver<ResolversTypes['Historia_Uzytkownik_Auto_aggregate'], "Historia_Uzytkownik_Auto_aggregate", ParentType, ContextType, RequireFields<Subscription_RootHistoria_Uzytkownik_Auto_AggregateArgs, never>>;
  Historia_Uzytkownik_Auto_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Historia_Uzytkownik_Auto']>, "Historia_Uzytkownik_Auto_by_pk", ParentType, ContextType, RequireFields<Subscription_RootHistoria_Uzytkownik_Auto_By_PkArgs, 'id'>>;
  Karta_Orlen?: SubscriptionResolver<Array<ResolversTypes['Karta_Orlen']>, "Karta_Orlen", ParentType, ContextType, RequireFields<Subscription_RootKarta_OrlenArgs, never>>;
  Karta_Orlen_aggregate?: SubscriptionResolver<ResolversTypes['Karta_Orlen_aggregate'], "Karta_Orlen_aggregate", ParentType, ContextType, RequireFields<Subscription_RootKarta_Orlen_AggregateArgs, never>>;
  Karta_Orlen_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Karta_Orlen']>, "Karta_Orlen_by_pk", ParentType, ContextType, RequireFields<Subscription_RootKarta_Orlen_By_PkArgs, 'id'>>;
  Klient?: SubscriptionResolver<Array<ResolversTypes['Klient']>, "Klient", ParentType, ContextType, RequireFields<Subscription_RootKlientArgs, never>>;
  Klient_aggregate?: SubscriptionResolver<ResolversTypes['Klient_aggregate'], "Klient_aggregate", ParentType, ContextType, RequireFields<Subscription_RootKlient_AggregateArgs, never>>;
  Klient_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Klient']>, "Klient_by_pk", ParentType, ContextType, RequireFields<Subscription_RootKlient_By_PkArgs, 'id'>>;
  Leasing?: SubscriptionResolver<Array<ResolversTypes['Leasing']>, "Leasing", ParentType, ContextType, RequireFields<Subscription_RootLeasingArgs, never>>;
  Leasing_aggregate?: SubscriptionResolver<ResolversTypes['Leasing_aggregate'], "Leasing_aggregate", ParentType, ContextType, RequireFields<Subscription_RootLeasing_AggregateArgs, never>>;
  Leasing_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Leasing']>, "Leasing_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLeasing_By_PkArgs, 'id'>>;
  Mandat?: SubscriptionResolver<Array<ResolversTypes['Mandat']>, "Mandat", ParentType, ContextType, RequireFields<Subscription_RootMandatArgs, never>>;
  Mandat_aggregate?: SubscriptionResolver<ResolversTypes['Mandat_aggregate'], "Mandat_aggregate", ParentType, ContextType, RequireFields<Subscription_RootMandat_AggregateArgs, never>>;
  Mandat_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Mandat']>, "Mandat_by_pk", ParentType, ContextType, RequireFields<Subscription_RootMandat_By_PkArgs, 'id'>>;
  Opona?: SubscriptionResolver<Array<ResolversTypes['Opona']>, "Opona", ParentType, ContextType, RequireFields<Subscription_RootOponaArgs, never>>;
  Opona_aggregate?: SubscriptionResolver<ResolversTypes['Opona_aggregate'], "Opona_aggregate", ParentType, ContextType, RequireFields<Subscription_RootOpona_AggregateArgs, never>>;
  Opona_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Opona']>, "Opona_by_pk", ParentType, ContextType, RequireFields<Subscription_RootOpona_By_PkArgs, 'id'>>;
  Polisa?: SubscriptionResolver<Array<ResolversTypes['Polisa']>, "Polisa", ParentType, ContextType, RequireFields<Subscription_RootPolisaArgs, never>>;
  Polisa_aggregate?: SubscriptionResolver<ResolversTypes['Polisa_aggregate'], "Polisa_aggregate", ParentType, ContextType, RequireFields<Subscription_RootPolisa_AggregateArgs, never>>;
  Polisa_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Polisa']>, "Polisa_by_pk", ParentType, ContextType, RequireFields<Subscription_RootPolisa_By_PkArgs, 'id'>>;
  Przebieg?: SubscriptionResolver<Array<ResolversTypes['Przebieg']>, "Przebieg", ParentType, ContextType, RequireFields<Subscription_RootPrzebiegArgs, never>>;
  Przebieg_aggregate?: SubscriptionResolver<ResolversTypes['Przebieg_aggregate'], "Przebieg_aggregate", ParentType, ContextType, RequireFields<Subscription_RootPrzebieg_AggregateArgs, never>>;
  Przebieg_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Przebieg']>, "Przebieg_by_pk", ParentType, ContextType, RequireFields<Subscription_RootPrzebieg_By_PkArgs, 'id'>>;
  Przeglad?: SubscriptionResolver<Array<ResolversTypes['Przeglad']>, "Przeglad", ParentType, ContextType, RequireFields<Subscription_RootPrzegladArgs, never>>;
  Przeglad_Koszta_Dodatkowe?: SubscriptionResolver<Array<ResolversTypes['Przeglad_Koszta_Dodatkowe']>, "Przeglad_Koszta_Dodatkowe", ParentType, ContextType, RequireFields<Subscription_RootPrzeglad_Koszta_DodatkoweArgs, never>>;
  Przeglad_Koszta_Dodatkowe_aggregate?: SubscriptionResolver<ResolversTypes['Przeglad_Koszta_Dodatkowe_aggregate'], "Przeglad_Koszta_Dodatkowe_aggregate", ParentType, ContextType, RequireFields<Subscription_RootPrzeglad_Koszta_Dodatkowe_AggregateArgs, never>>;
  Przeglad_Koszta_Dodatkowe_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Przeglad_Koszta_Dodatkowe']>, "Przeglad_Koszta_Dodatkowe_by_pk", ParentType, ContextType, RequireFields<Subscription_RootPrzeglad_Koszta_Dodatkowe_By_PkArgs, 'id'>>;
  Przeglad_OT_Kilometry?: SubscriptionResolver<Array<ResolversTypes['Przeglad_OT_Kilometry']>, "Przeglad_OT_Kilometry", ParentType, ContextType, RequireFields<Subscription_RootPrzeglad_Ot_KilometryArgs, never>>;
  Przeglad_OT_Kilometry_aggregate?: SubscriptionResolver<ResolversTypes['Przeglad_OT_Kilometry_aggregate'], "Przeglad_OT_Kilometry_aggregate", ParentType, ContextType, RequireFields<Subscription_RootPrzeglad_Ot_Kilometry_AggregateArgs, never>>;
  Przeglad_OT_Kilometry_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Przeglad_OT_Kilometry']>, "Przeglad_OT_Kilometry_by_pk", ParentType, ContextType, RequireFields<Subscription_RootPrzeglad_Ot_Kilometry_By_PkArgs, 'id'>>;
  Przeglad_aggregate?: SubscriptionResolver<ResolversTypes['Przeglad_aggregate'], "Przeglad_aggregate", ParentType, ContextType, RequireFields<Subscription_RootPrzeglad_AggregateArgs, never>>;
  Przeglad_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Przeglad']>, "Przeglad_by_pk", ParentType, ContextType, RequireFields<Subscription_RootPrzeglad_By_PkArgs, 'id'>>;
  Status_Awarii?: SubscriptionResolver<Array<ResolversTypes['Status_Awarii']>, "Status_Awarii", ParentType, ContextType, RequireFields<Subscription_RootStatus_AwariiArgs, never>>;
  Status_Awarii_aggregate?: SubscriptionResolver<ResolversTypes['Status_Awarii_aggregate'], "Status_Awarii_aggregate", ParentType, ContextType, RequireFields<Subscription_RootStatus_Awarii_AggregateArgs, never>>;
  Status_Awarii_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Status_Awarii']>, "Status_Awarii_by_pk", ParentType, ContextType, RequireFields<Subscription_RootStatus_Awarii_By_PkArgs, 'id'>>;
  Status_Szkody?: SubscriptionResolver<Array<ResolversTypes['Status_Szkody']>, "Status_Szkody", ParentType, ContextType, RequireFields<Subscription_RootStatus_SzkodyArgs, never>>;
  Status_Szkody_aggregate?: SubscriptionResolver<ResolversTypes['Status_Szkody_aggregate'], "Status_Szkody_aggregate", ParentType, ContextType, RequireFields<Subscription_RootStatus_Szkody_AggregateArgs, never>>;
  Status_Szkody_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Status_Szkody']>, "Status_Szkody_by_pk", ParentType, ContextType, RequireFields<Subscription_RootStatus_Szkody_By_PkArgs, 'id'>>;
  Szkoda?: SubscriptionResolver<Array<ResolversTypes['Szkoda']>, "Szkoda", ParentType, ContextType, RequireFields<Subscription_RootSzkodaArgs, never>>;
  Szkoda_aggregate?: SubscriptionResolver<ResolversTypes['Szkoda_aggregate'], "Szkoda_aggregate", ParentType, ContextType, RequireFields<Subscription_RootSzkoda_AggregateArgs, never>>;
  Szkoda_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Szkoda']>, "Szkoda_by_pk", ParentType, ContextType, RequireFields<Subscription_RootSzkoda_By_PkArgs, 'id'>>;
  Typy_Opon?: SubscriptionResolver<Array<ResolversTypes['Typy_Opon']>, "Typy_Opon", ParentType, ContextType, RequireFields<Subscription_RootTypy_OponArgs, never>>;
  Typy_Opon_aggregate?: SubscriptionResolver<ResolversTypes['Typy_Opon_aggregate'], "Typy_Opon_aggregate", ParentType, ContextType, RequireFields<Subscription_RootTypy_Opon_AggregateArgs, never>>;
  Typy_Opon_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Typy_Opon']>, "Typy_Opon_by_pk", ParentType, ContextType, RequireFields<Subscription_RootTypy_Opon_By_PkArgs, 'id'>>;
  Uzytkownik?: SubscriptionResolver<Array<ResolversTypes['Uzytkownik']>, "Uzytkownik", ParentType, ContextType, RequireFields<Subscription_RootUzytkownikArgs, never>>;
  Uzytkownik_aggregate?: SubscriptionResolver<ResolversTypes['Uzytkownik_aggregate'], "Uzytkownik_aggregate", ParentType, ContextType, RequireFields<Subscription_RootUzytkownik_AggregateArgs, never>>;
  Uzytkownik_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Uzytkownik']>, "Uzytkownik_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUzytkownik_By_PkArgs, 'id'>>;
};

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type Resolvers<ContextType = any> = {
  Auto?: AutoResolvers<ContextType>;
  Auto_aggregate?: Auto_AggregateResolvers<ContextType>;
  Auto_aggregate_fields?: Auto_Aggregate_FieldsResolvers<ContextType>;
  Auto_avg_fields?: Auto_Avg_FieldsResolvers<ContextType>;
  Auto_max_fields?: Auto_Max_FieldsResolvers<ContextType>;
  Auto_min_fields?: Auto_Min_FieldsResolvers<ContextType>;
  Auto_mutation_response?: Auto_Mutation_ResponseResolvers<ContextType>;
  Auto_stddev_fields?: Auto_Stddev_FieldsResolvers<ContextType>;
  Auto_stddev_pop_fields?: Auto_Stddev_Pop_FieldsResolvers<ContextType>;
  Auto_stddev_samp_fields?: Auto_Stddev_Samp_FieldsResolvers<ContextType>;
  Auto_sum_fields?: Auto_Sum_FieldsResolvers<ContextType>;
  Auto_var_pop_fields?: Auto_Var_Pop_FieldsResolvers<ContextType>;
  Auto_var_samp_fields?: Auto_Var_Samp_FieldsResolvers<ContextType>;
  Auto_variance_fields?: Auto_Variance_FieldsResolvers<ContextType>;
  Awaria?: AwariaResolvers<ContextType>;
  Awaria_aggregate?: Awaria_AggregateResolvers<ContextType>;
  Awaria_aggregate_fields?: Awaria_Aggregate_FieldsResolvers<ContextType>;
  Awaria_avg_fields?: Awaria_Avg_FieldsResolvers<ContextType>;
  Awaria_max_fields?: Awaria_Max_FieldsResolvers<ContextType>;
  Awaria_min_fields?: Awaria_Min_FieldsResolvers<ContextType>;
  Awaria_mutation_response?: Awaria_Mutation_ResponseResolvers<ContextType>;
  Awaria_stddev_fields?: Awaria_Stddev_FieldsResolvers<ContextType>;
  Awaria_stddev_pop_fields?: Awaria_Stddev_Pop_FieldsResolvers<ContextType>;
  Awaria_stddev_samp_fields?: Awaria_Stddev_Samp_FieldsResolvers<ContextType>;
  Awaria_sum_fields?: Awaria_Sum_FieldsResolvers<ContextType>;
  Awaria_var_pop_fields?: Awaria_Var_Pop_FieldsResolvers<ContextType>;
  Awaria_var_samp_fields?: Awaria_Var_Samp_FieldsResolvers<ContextType>;
  Awaria_variance_fields?: Awaria_Variance_FieldsResolvers<ContextType>;
  Grupa_Aut_Klienta?: Grupa_Aut_KlientaResolvers<ContextType>;
  Grupa_Aut_Klienta_aggregate?: Grupa_Aut_Klienta_AggregateResolvers<ContextType>;
  Grupa_Aut_Klienta_aggregate_fields?: Grupa_Aut_Klienta_Aggregate_FieldsResolvers<ContextType>;
  Grupa_Aut_Klienta_avg_fields?: Grupa_Aut_Klienta_Avg_FieldsResolvers<ContextType>;
  Grupa_Aut_Klienta_max_fields?: Grupa_Aut_Klienta_Max_FieldsResolvers<ContextType>;
  Grupa_Aut_Klienta_min_fields?: Grupa_Aut_Klienta_Min_FieldsResolvers<ContextType>;
  Grupa_Aut_Klienta_mutation_response?: Grupa_Aut_Klienta_Mutation_ResponseResolvers<ContextType>;
  Grupa_Aut_Klienta_stddev_fields?: Grupa_Aut_Klienta_Stddev_FieldsResolvers<ContextType>;
  Grupa_Aut_Klienta_stddev_pop_fields?: Grupa_Aut_Klienta_Stddev_Pop_FieldsResolvers<ContextType>;
  Grupa_Aut_Klienta_stddev_samp_fields?: Grupa_Aut_Klienta_Stddev_Samp_FieldsResolvers<ContextType>;
  Grupa_Aut_Klienta_sum_fields?: Grupa_Aut_Klienta_Sum_FieldsResolvers<ContextType>;
  Grupa_Aut_Klienta_var_pop_fields?: Grupa_Aut_Klienta_Var_Pop_FieldsResolvers<ContextType>;
  Grupa_Aut_Klienta_var_samp_fields?: Grupa_Aut_Klienta_Var_Samp_FieldsResolvers<ContextType>;
  Grupa_Aut_Klienta_variance_fields?: Grupa_Aut_Klienta_Variance_FieldsResolvers<ContextType>;
  Historia_Uzytkownik_Auto?: Historia_Uzytkownik_AutoResolvers<ContextType>;
  Historia_Uzytkownik_Auto_aggregate?: Historia_Uzytkownik_Auto_AggregateResolvers<ContextType>;
  Historia_Uzytkownik_Auto_aggregate_fields?: Historia_Uzytkownik_Auto_Aggregate_FieldsResolvers<ContextType>;
  Historia_Uzytkownik_Auto_avg_fields?: Historia_Uzytkownik_Auto_Avg_FieldsResolvers<ContextType>;
  Historia_Uzytkownik_Auto_max_fields?: Historia_Uzytkownik_Auto_Max_FieldsResolvers<ContextType>;
  Historia_Uzytkownik_Auto_min_fields?: Historia_Uzytkownik_Auto_Min_FieldsResolvers<ContextType>;
  Historia_Uzytkownik_Auto_mutation_response?: Historia_Uzytkownik_Auto_Mutation_ResponseResolvers<ContextType>;
  Historia_Uzytkownik_Auto_stddev_fields?: Historia_Uzytkownik_Auto_Stddev_FieldsResolvers<ContextType>;
  Historia_Uzytkownik_Auto_stddev_pop_fields?: Historia_Uzytkownik_Auto_Stddev_Pop_FieldsResolvers<ContextType>;
  Historia_Uzytkownik_Auto_stddev_samp_fields?: Historia_Uzytkownik_Auto_Stddev_Samp_FieldsResolvers<ContextType>;
  Historia_Uzytkownik_Auto_sum_fields?: Historia_Uzytkownik_Auto_Sum_FieldsResolvers<ContextType>;
  Historia_Uzytkownik_Auto_var_pop_fields?: Historia_Uzytkownik_Auto_Var_Pop_FieldsResolvers<ContextType>;
  Historia_Uzytkownik_Auto_var_samp_fields?: Historia_Uzytkownik_Auto_Var_Samp_FieldsResolvers<ContextType>;
  Historia_Uzytkownik_Auto_variance_fields?: Historia_Uzytkownik_Auto_Variance_FieldsResolvers<ContextType>;
  Karta_Orlen?: Karta_OrlenResolvers<ContextType>;
  Karta_Orlen_aggregate?: Karta_Orlen_AggregateResolvers<ContextType>;
  Karta_Orlen_aggregate_fields?: Karta_Orlen_Aggregate_FieldsResolvers<ContextType>;
  Karta_Orlen_avg_fields?: Karta_Orlen_Avg_FieldsResolvers<ContextType>;
  Karta_Orlen_max_fields?: Karta_Orlen_Max_FieldsResolvers<ContextType>;
  Karta_Orlen_min_fields?: Karta_Orlen_Min_FieldsResolvers<ContextType>;
  Karta_Orlen_mutation_response?: Karta_Orlen_Mutation_ResponseResolvers<ContextType>;
  Karta_Orlen_stddev_fields?: Karta_Orlen_Stddev_FieldsResolvers<ContextType>;
  Karta_Orlen_stddev_pop_fields?: Karta_Orlen_Stddev_Pop_FieldsResolvers<ContextType>;
  Karta_Orlen_stddev_samp_fields?: Karta_Orlen_Stddev_Samp_FieldsResolvers<ContextType>;
  Karta_Orlen_sum_fields?: Karta_Orlen_Sum_FieldsResolvers<ContextType>;
  Karta_Orlen_var_pop_fields?: Karta_Orlen_Var_Pop_FieldsResolvers<ContextType>;
  Karta_Orlen_var_samp_fields?: Karta_Orlen_Var_Samp_FieldsResolvers<ContextType>;
  Karta_Orlen_variance_fields?: Karta_Orlen_Variance_FieldsResolvers<ContextType>;
  Klient?: KlientResolvers<ContextType>;
  Klient_aggregate?: Klient_AggregateResolvers<ContextType>;
  Klient_aggregate_fields?: Klient_Aggregate_FieldsResolvers<ContextType>;
  Klient_avg_fields?: Klient_Avg_FieldsResolvers<ContextType>;
  Klient_max_fields?: Klient_Max_FieldsResolvers<ContextType>;
  Klient_min_fields?: Klient_Min_FieldsResolvers<ContextType>;
  Klient_mutation_response?: Klient_Mutation_ResponseResolvers<ContextType>;
  Klient_stddev_fields?: Klient_Stddev_FieldsResolvers<ContextType>;
  Klient_stddev_pop_fields?: Klient_Stddev_Pop_FieldsResolvers<ContextType>;
  Klient_stddev_samp_fields?: Klient_Stddev_Samp_FieldsResolvers<ContextType>;
  Klient_sum_fields?: Klient_Sum_FieldsResolvers<ContextType>;
  Klient_var_pop_fields?: Klient_Var_Pop_FieldsResolvers<ContextType>;
  Klient_var_samp_fields?: Klient_Var_Samp_FieldsResolvers<ContextType>;
  Klient_variance_fields?: Klient_Variance_FieldsResolvers<ContextType>;
  Leasing?: LeasingResolvers<ContextType>;
  Leasing_aggregate?: Leasing_AggregateResolvers<ContextType>;
  Leasing_aggregate_fields?: Leasing_Aggregate_FieldsResolvers<ContextType>;
  Leasing_avg_fields?: Leasing_Avg_FieldsResolvers<ContextType>;
  Leasing_max_fields?: Leasing_Max_FieldsResolvers<ContextType>;
  Leasing_min_fields?: Leasing_Min_FieldsResolvers<ContextType>;
  Leasing_mutation_response?: Leasing_Mutation_ResponseResolvers<ContextType>;
  Leasing_stddev_fields?: Leasing_Stddev_FieldsResolvers<ContextType>;
  Leasing_stddev_pop_fields?: Leasing_Stddev_Pop_FieldsResolvers<ContextType>;
  Leasing_stddev_samp_fields?: Leasing_Stddev_Samp_FieldsResolvers<ContextType>;
  Leasing_sum_fields?: Leasing_Sum_FieldsResolvers<ContextType>;
  Leasing_var_pop_fields?: Leasing_Var_Pop_FieldsResolvers<ContextType>;
  Leasing_var_samp_fields?: Leasing_Var_Samp_FieldsResolvers<ContextType>;
  Leasing_variance_fields?: Leasing_Variance_FieldsResolvers<ContextType>;
  Mandat?: MandatResolvers<ContextType>;
  Mandat_aggregate?: Mandat_AggregateResolvers<ContextType>;
  Mandat_aggregate_fields?: Mandat_Aggregate_FieldsResolvers<ContextType>;
  Mandat_avg_fields?: Mandat_Avg_FieldsResolvers<ContextType>;
  Mandat_max_fields?: Mandat_Max_FieldsResolvers<ContextType>;
  Mandat_min_fields?: Mandat_Min_FieldsResolvers<ContextType>;
  Mandat_mutation_response?: Mandat_Mutation_ResponseResolvers<ContextType>;
  Mandat_stddev_fields?: Mandat_Stddev_FieldsResolvers<ContextType>;
  Mandat_stddev_pop_fields?: Mandat_Stddev_Pop_FieldsResolvers<ContextType>;
  Mandat_stddev_samp_fields?: Mandat_Stddev_Samp_FieldsResolvers<ContextType>;
  Mandat_sum_fields?: Mandat_Sum_FieldsResolvers<ContextType>;
  Mandat_var_pop_fields?: Mandat_Var_Pop_FieldsResolvers<ContextType>;
  Mandat_var_samp_fields?: Mandat_Var_Samp_FieldsResolvers<ContextType>;
  Mandat_variance_fields?: Mandat_Variance_FieldsResolvers<ContextType>;
  Opona?: OponaResolvers<ContextType>;
  Opona_aggregate?: Opona_AggregateResolvers<ContextType>;
  Opona_aggregate_fields?: Opona_Aggregate_FieldsResolvers<ContextType>;
  Opona_avg_fields?: Opona_Avg_FieldsResolvers<ContextType>;
  Opona_max_fields?: Opona_Max_FieldsResolvers<ContextType>;
  Opona_min_fields?: Opona_Min_FieldsResolvers<ContextType>;
  Opona_mutation_response?: Opona_Mutation_ResponseResolvers<ContextType>;
  Opona_stddev_fields?: Opona_Stddev_FieldsResolvers<ContextType>;
  Opona_stddev_pop_fields?: Opona_Stddev_Pop_FieldsResolvers<ContextType>;
  Opona_stddev_samp_fields?: Opona_Stddev_Samp_FieldsResolvers<ContextType>;
  Opona_sum_fields?: Opona_Sum_FieldsResolvers<ContextType>;
  Opona_var_pop_fields?: Opona_Var_Pop_FieldsResolvers<ContextType>;
  Opona_var_samp_fields?: Opona_Var_Samp_FieldsResolvers<ContextType>;
  Opona_variance_fields?: Opona_Variance_FieldsResolvers<ContextType>;
  Polisa?: PolisaResolvers<ContextType>;
  Polisa_aggregate?: Polisa_AggregateResolvers<ContextType>;
  Polisa_aggregate_fields?: Polisa_Aggregate_FieldsResolvers<ContextType>;
  Polisa_avg_fields?: Polisa_Avg_FieldsResolvers<ContextType>;
  Polisa_max_fields?: Polisa_Max_FieldsResolvers<ContextType>;
  Polisa_min_fields?: Polisa_Min_FieldsResolvers<ContextType>;
  Polisa_mutation_response?: Polisa_Mutation_ResponseResolvers<ContextType>;
  Polisa_stddev_fields?: Polisa_Stddev_FieldsResolvers<ContextType>;
  Polisa_stddev_pop_fields?: Polisa_Stddev_Pop_FieldsResolvers<ContextType>;
  Polisa_stddev_samp_fields?: Polisa_Stddev_Samp_FieldsResolvers<ContextType>;
  Polisa_sum_fields?: Polisa_Sum_FieldsResolvers<ContextType>;
  Polisa_var_pop_fields?: Polisa_Var_Pop_FieldsResolvers<ContextType>;
  Polisa_var_samp_fields?: Polisa_Var_Samp_FieldsResolvers<ContextType>;
  Polisa_variance_fields?: Polisa_Variance_FieldsResolvers<ContextType>;
  Przebieg?: PrzebiegResolvers<ContextType>;
  Przebieg_aggregate?: Przebieg_AggregateResolvers<ContextType>;
  Przebieg_aggregate_fields?: Przebieg_Aggregate_FieldsResolvers<ContextType>;
  Przebieg_avg_fields?: Przebieg_Avg_FieldsResolvers<ContextType>;
  Przebieg_max_fields?: Przebieg_Max_FieldsResolvers<ContextType>;
  Przebieg_min_fields?: Przebieg_Min_FieldsResolvers<ContextType>;
  Przebieg_mutation_response?: Przebieg_Mutation_ResponseResolvers<ContextType>;
  Przebieg_stddev_fields?: Przebieg_Stddev_FieldsResolvers<ContextType>;
  Przebieg_stddev_pop_fields?: Przebieg_Stddev_Pop_FieldsResolvers<ContextType>;
  Przebieg_stddev_samp_fields?: Przebieg_Stddev_Samp_FieldsResolvers<ContextType>;
  Przebieg_sum_fields?: Przebieg_Sum_FieldsResolvers<ContextType>;
  Przebieg_var_pop_fields?: Przebieg_Var_Pop_FieldsResolvers<ContextType>;
  Przebieg_var_samp_fields?: Przebieg_Var_Samp_FieldsResolvers<ContextType>;
  Przebieg_variance_fields?: Przebieg_Variance_FieldsResolvers<ContextType>;
  Przeglad?: PrzegladResolvers<ContextType>;
  Przeglad_Koszta_Dodatkowe?: Przeglad_Koszta_DodatkoweResolvers<ContextType>;
  Przeglad_Koszta_Dodatkowe_aggregate?: Przeglad_Koszta_Dodatkowe_AggregateResolvers<ContextType>;
  Przeglad_Koszta_Dodatkowe_aggregate_fields?: Przeglad_Koszta_Dodatkowe_Aggregate_FieldsResolvers<ContextType>;
  Przeglad_Koszta_Dodatkowe_avg_fields?: Przeglad_Koszta_Dodatkowe_Avg_FieldsResolvers<ContextType>;
  Przeglad_Koszta_Dodatkowe_max_fields?: Przeglad_Koszta_Dodatkowe_Max_FieldsResolvers<ContextType>;
  Przeglad_Koszta_Dodatkowe_min_fields?: Przeglad_Koszta_Dodatkowe_Min_FieldsResolvers<ContextType>;
  Przeglad_Koszta_Dodatkowe_mutation_response?: Przeglad_Koszta_Dodatkowe_Mutation_ResponseResolvers<ContextType>;
  Przeglad_Koszta_Dodatkowe_stddev_fields?: Przeglad_Koszta_Dodatkowe_Stddev_FieldsResolvers<ContextType>;
  Przeglad_Koszta_Dodatkowe_stddev_pop_fields?: Przeglad_Koszta_Dodatkowe_Stddev_Pop_FieldsResolvers<ContextType>;
  Przeglad_Koszta_Dodatkowe_stddev_samp_fields?: Przeglad_Koszta_Dodatkowe_Stddev_Samp_FieldsResolvers<ContextType>;
  Przeglad_Koszta_Dodatkowe_sum_fields?: Przeglad_Koszta_Dodatkowe_Sum_FieldsResolvers<ContextType>;
  Przeglad_Koszta_Dodatkowe_var_pop_fields?: Przeglad_Koszta_Dodatkowe_Var_Pop_FieldsResolvers<ContextType>;
  Przeglad_Koszta_Dodatkowe_var_samp_fields?: Przeglad_Koszta_Dodatkowe_Var_Samp_FieldsResolvers<ContextType>;
  Przeglad_Koszta_Dodatkowe_variance_fields?: Przeglad_Koszta_Dodatkowe_Variance_FieldsResolvers<ContextType>;
  Przeglad_OT_Kilometry?: Przeglad_Ot_KilometryResolvers<ContextType>;
  Przeglad_OT_Kilometry_aggregate?: Przeglad_Ot_Kilometry_AggregateResolvers<ContextType>;
  Przeglad_OT_Kilometry_aggregate_fields?: Przeglad_Ot_Kilometry_Aggregate_FieldsResolvers<ContextType>;
  Przeglad_OT_Kilometry_avg_fields?: Przeglad_Ot_Kilometry_Avg_FieldsResolvers<ContextType>;
  Przeglad_OT_Kilometry_max_fields?: Przeglad_Ot_Kilometry_Max_FieldsResolvers<ContextType>;
  Przeglad_OT_Kilometry_min_fields?: Przeglad_Ot_Kilometry_Min_FieldsResolvers<ContextType>;
  Przeglad_OT_Kilometry_mutation_response?: Przeglad_Ot_Kilometry_Mutation_ResponseResolvers<ContextType>;
  Przeglad_OT_Kilometry_stddev_fields?: Przeglad_Ot_Kilometry_Stddev_FieldsResolvers<ContextType>;
  Przeglad_OT_Kilometry_stddev_pop_fields?: Przeglad_Ot_Kilometry_Stddev_Pop_FieldsResolvers<ContextType>;
  Przeglad_OT_Kilometry_stddev_samp_fields?: Przeglad_Ot_Kilometry_Stddev_Samp_FieldsResolvers<ContextType>;
  Przeglad_OT_Kilometry_sum_fields?: Przeglad_Ot_Kilometry_Sum_FieldsResolvers<ContextType>;
  Przeglad_OT_Kilometry_var_pop_fields?: Przeglad_Ot_Kilometry_Var_Pop_FieldsResolvers<ContextType>;
  Przeglad_OT_Kilometry_var_samp_fields?: Przeglad_Ot_Kilometry_Var_Samp_FieldsResolvers<ContextType>;
  Przeglad_OT_Kilometry_variance_fields?: Przeglad_Ot_Kilometry_Variance_FieldsResolvers<ContextType>;
  Przeglad_aggregate?: Przeglad_AggregateResolvers<ContextType>;
  Przeglad_aggregate_fields?: Przeglad_Aggregate_FieldsResolvers<ContextType>;
  Przeglad_avg_fields?: Przeglad_Avg_FieldsResolvers<ContextType>;
  Przeglad_max_fields?: Przeglad_Max_FieldsResolvers<ContextType>;
  Przeglad_min_fields?: Przeglad_Min_FieldsResolvers<ContextType>;
  Przeglad_mutation_response?: Przeglad_Mutation_ResponseResolvers<ContextType>;
  Przeglad_stddev_fields?: Przeglad_Stddev_FieldsResolvers<ContextType>;
  Przeglad_stddev_pop_fields?: Przeglad_Stddev_Pop_FieldsResolvers<ContextType>;
  Przeglad_stddev_samp_fields?: Przeglad_Stddev_Samp_FieldsResolvers<ContextType>;
  Przeglad_sum_fields?: Przeglad_Sum_FieldsResolvers<ContextType>;
  Przeglad_var_pop_fields?: Przeglad_Var_Pop_FieldsResolvers<ContextType>;
  Przeglad_var_samp_fields?: Przeglad_Var_Samp_FieldsResolvers<ContextType>;
  Przeglad_variance_fields?: Przeglad_Variance_FieldsResolvers<ContextType>;
  Status_Awarii?: Status_AwariiResolvers<ContextType>;
  Status_Awarii_aggregate?: Status_Awarii_AggregateResolvers<ContextType>;
  Status_Awarii_aggregate_fields?: Status_Awarii_Aggregate_FieldsResolvers<ContextType>;
  Status_Awarii_avg_fields?: Status_Awarii_Avg_FieldsResolvers<ContextType>;
  Status_Awarii_max_fields?: Status_Awarii_Max_FieldsResolvers<ContextType>;
  Status_Awarii_min_fields?: Status_Awarii_Min_FieldsResolvers<ContextType>;
  Status_Awarii_mutation_response?: Status_Awarii_Mutation_ResponseResolvers<ContextType>;
  Status_Awarii_stddev_fields?: Status_Awarii_Stddev_FieldsResolvers<ContextType>;
  Status_Awarii_stddev_pop_fields?: Status_Awarii_Stddev_Pop_FieldsResolvers<ContextType>;
  Status_Awarii_stddev_samp_fields?: Status_Awarii_Stddev_Samp_FieldsResolvers<ContextType>;
  Status_Awarii_sum_fields?: Status_Awarii_Sum_FieldsResolvers<ContextType>;
  Status_Awarii_var_pop_fields?: Status_Awarii_Var_Pop_FieldsResolvers<ContextType>;
  Status_Awarii_var_samp_fields?: Status_Awarii_Var_Samp_FieldsResolvers<ContextType>;
  Status_Awarii_variance_fields?: Status_Awarii_Variance_FieldsResolvers<ContextType>;
  Status_Szkody?: Status_SzkodyResolvers<ContextType>;
  Status_Szkody_aggregate?: Status_Szkody_AggregateResolvers<ContextType>;
  Status_Szkody_aggregate_fields?: Status_Szkody_Aggregate_FieldsResolvers<ContextType>;
  Status_Szkody_avg_fields?: Status_Szkody_Avg_FieldsResolvers<ContextType>;
  Status_Szkody_max_fields?: Status_Szkody_Max_FieldsResolvers<ContextType>;
  Status_Szkody_min_fields?: Status_Szkody_Min_FieldsResolvers<ContextType>;
  Status_Szkody_mutation_response?: Status_Szkody_Mutation_ResponseResolvers<ContextType>;
  Status_Szkody_stddev_fields?: Status_Szkody_Stddev_FieldsResolvers<ContextType>;
  Status_Szkody_stddev_pop_fields?: Status_Szkody_Stddev_Pop_FieldsResolvers<ContextType>;
  Status_Szkody_stddev_samp_fields?: Status_Szkody_Stddev_Samp_FieldsResolvers<ContextType>;
  Status_Szkody_sum_fields?: Status_Szkody_Sum_FieldsResolvers<ContextType>;
  Status_Szkody_var_pop_fields?: Status_Szkody_Var_Pop_FieldsResolvers<ContextType>;
  Status_Szkody_var_samp_fields?: Status_Szkody_Var_Samp_FieldsResolvers<ContextType>;
  Status_Szkody_variance_fields?: Status_Szkody_Variance_FieldsResolvers<ContextType>;
  Szkoda?: SzkodaResolvers<ContextType>;
  Szkoda_aggregate?: Szkoda_AggregateResolvers<ContextType>;
  Szkoda_aggregate_fields?: Szkoda_Aggregate_FieldsResolvers<ContextType>;
  Szkoda_avg_fields?: Szkoda_Avg_FieldsResolvers<ContextType>;
  Szkoda_max_fields?: Szkoda_Max_FieldsResolvers<ContextType>;
  Szkoda_min_fields?: Szkoda_Min_FieldsResolvers<ContextType>;
  Szkoda_mutation_response?: Szkoda_Mutation_ResponseResolvers<ContextType>;
  Szkoda_stddev_fields?: Szkoda_Stddev_FieldsResolvers<ContextType>;
  Szkoda_stddev_pop_fields?: Szkoda_Stddev_Pop_FieldsResolvers<ContextType>;
  Szkoda_stddev_samp_fields?: Szkoda_Stddev_Samp_FieldsResolvers<ContextType>;
  Szkoda_sum_fields?: Szkoda_Sum_FieldsResolvers<ContextType>;
  Szkoda_var_pop_fields?: Szkoda_Var_Pop_FieldsResolvers<ContextType>;
  Szkoda_var_samp_fields?: Szkoda_Var_Samp_FieldsResolvers<ContextType>;
  Szkoda_variance_fields?: Szkoda_Variance_FieldsResolvers<ContextType>;
  Typy_Opon?: Typy_OponResolvers<ContextType>;
  Typy_Opon_aggregate?: Typy_Opon_AggregateResolvers<ContextType>;
  Typy_Opon_aggregate_fields?: Typy_Opon_Aggregate_FieldsResolvers<ContextType>;
  Typy_Opon_avg_fields?: Typy_Opon_Avg_FieldsResolvers<ContextType>;
  Typy_Opon_max_fields?: Typy_Opon_Max_FieldsResolvers<ContextType>;
  Typy_Opon_min_fields?: Typy_Opon_Min_FieldsResolvers<ContextType>;
  Typy_Opon_mutation_response?: Typy_Opon_Mutation_ResponseResolvers<ContextType>;
  Typy_Opon_stddev_fields?: Typy_Opon_Stddev_FieldsResolvers<ContextType>;
  Typy_Opon_stddev_pop_fields?: Typy_Opon_Stddev_Pop_FieldsResolvers<ContextType>;
  Typy_Opon_stddev_samp_fields?: Typy_Opon_Stddev_Samp_FieldsResolvers<ContextType>;
  Typy_Opon_sum_fields?: Typy_Opon_Sum_FieldsResolvers<ContextType>;
  Typy_Opon_var_pop_fields?: Typy_Opon_Var_Pop_FieldsResolvers<ContextType>;
  Typy_Opon_var_samp_fields?: Typy_Opon_Var_Samp_FieldsResolvers<ContextType>;
  Typy_Opon_variance_fields?: Typy_Opon_Variance_FieldsResolvers<ContextType>;
  Uzytkownik?: UzytkownikResolvers<ContextType>;
  Uzytkownik_aggregate?: Uzytkownik_AggregateResolvers<ContextType>;
  Uzytkownik_aggregate_fields?: Uzytkownik_Aggregate_FieldsResolvers<ContextType>;
  Uzytkownik_avg_fields?: Uzytkownik_Avg_FieldsResolvers<ContextType>;
  Uzytkownik_max_fields?: Uzytkownik_Max_FieldsResolvers<ContextType>;
  Uzytkownik_min_fields?: Uzytkownik_Min_FieldsResolvers<ContextType>;
  Uzytkownik_mutation_response?: Uzytkownik_Mutation_ResponseResolvers<ContextType>;
  Uzytkownik_stddev_fields?: Uzytkownik_Stddev_FieldsResolvers<ContextType>;
  Uzytkownik_stddev_pop_fields?: Uzytkownik_Stddev_Pop_FieldsResolvers<ContextType>;
  Uzytkownik_stddev_samp_fields?: Uzytkownik_Stddev_Samp_FieldsResolvers<ContextType>;
  Uzytkownik_sum_fields?: Uzytkownik_Sum_FieldsResolvers<ContextType>;
  Uzytkownik_var_pop_fields?: Uzytkownik_Var_Pop_FieldsResolvers<ContextType>;
  Uzytkownik_var_samp_fields?: Uzytkownik_Var_Samp_FieldsResolvers<ContextType>;
  Uzytkownik_variance_fields?: Uzytkownik_Variance_FieldsResolvers<ContextType>;
  bigint?: GraphQLScalarType;
  date?: GraphQLScalarType;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
