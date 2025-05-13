/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
};

export type MutationCreateUserArgs = {
  input: UserCreateInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last',
}

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  reservation: Reservation;
  reservationId: Scalars['String']['output'];
  status: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type PaymentCreateManyUserInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  method: Scalars['String']['input'];
  reservationId: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

export type PaymentCreateManyUserInputEnvelope = {
  data: Array<PaymentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PaymentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaymentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PaymentCreateWithoutUserInput>>;
  createMany?: InputMaybe<PaymentCreateManyUserInputEnvelope>;
};

export type PaymentCreateNestedOneWithoutReservationInput = {
  connect?: InputMaybe<PaymentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PaymentCreateOrConnectWithoutReservationInput>;
  create?: InputMaybe<PaymentCreateWithoutReservationInput>;
};

export type PaymentCreateOrConnectWithoutReservationInput = {
  create: PaymentCreateWithoutReservationInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentCreateOrConnectWithoutUserInput = {
  create: PaymentCreateWithoutUserInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentCreateWithoutReservationInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  method: Scalars['String']['input'];
  status: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutPaymentInput;
};

export type PaymentCreateWithoutUserInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  method: Scalars['String']['input'];
  reservation: ReservationCreateNestedOneWithoutPaymentInput;
  status: Scalars['String']['input'];
};

export type PaymentListRelationFilter = {
  every?: InputMaybe<PaymentWhereInput>;
  none?: InputMaybe<PaymentWhereInput>;
  some?: InputMaybe<PaymentWhereInput>;
};

export type PaymentNullableScalarRelationFilter = {
  is?: InputMaybe<PaymentWhereInput>;
  isNot?: InputMaybe<PaymentWhereInput>;
};

export type PaymentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PaymentWhereInput = {
  AND?: InputMaybe<Array<PaymentWhereInput>>;
  NOT?: InputMaybe<Array<PaymentWhereInput>>;
  OR?: InputMaybe<Array<PaymentWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  method?: InputMaybe<StringFilter>;
  reservation?: InputMaybe<ReservationScalarRelationFilter>;
  reservationId?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PaymentWhereUniqueInput = {
  AND?: InputMaybe<Array<PaymentWhereInput>>;
  NOT?: InputMaybe<Array<PaymentWhereInput>>;
  OR?: InputMaybe<Array<PaymentWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<StringFilter>;
  reservation?: InputMaybe<ReservationScalarRelationFilter>;
  reservationId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Place = {
  __typename?: 'Place';
  _count: PlaceCount;
  category: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Array<PlaceImage>>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  provider: User;
  providerId: Scalars['String']['output'];
  reservations?: Maybe<Array<Reservation>>;
  reviews?: Maybe<Array<Review>>;
  tags?: Maybe<Array<Tag>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PlaceCount = {
  __typename?: 'PlaceCount';
  images: Scalars['Int']['output'];
  reservations: Scalars['Int']['output'];
  reviews: Scalars['Int']['output'];
  tags: Scalars['Int']['output'];
};

export type PlaceCreateNestedManyWithoutProviderInput = {
  connect?: InputMaybe<Array<PlaceWhereUniqueInput>>;
};

export type PlaceCreateNestedOneWithoutReservationsInput = {
  connect?: InputMaybe<PlaceWhereUniqueInput>;
};

export type PlaceCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<PlaceWhereUniqueInput>;
};

export type PlaceImage = {
  __typename?: 'PlaceImage';
  id: Scalars['ID']['output'];
  place: Place;
  placeId: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type PlaceImageListRelationFilter = {
  every?: InputMaybe<PlaceImageWhereInput>;
  none?: InputMaybe<PlaceImageWhereInput>;
  some?: InputMaybe<PlaceImageWhereInput>;
};

export type PlaceImageWhereInput = {
  AND?: InputMaybe<Array<PlaceImageWhereInput>>;
  NOT?: InputMaybe<Array<PlaceImageWhereInput>>;
  OR?: InputMaybe<Array<PlaceImageWhereInput>>;
  id?: InputMaybe<StringFilter>;
  place?: InputMaybe<PlaceScalarRelationFilter>;
  placeId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type PlaceListRelationFilter = {
  every?: InputMaybe<PlaceWhereInput>;
  none?: InputMaybe<PlaceWhereInput>;
  some?: InputMaybe<PlaceWhereInput>;
};

export type PlaceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlaceScalarRelationFilter = {
  is?: InputMaybe<PlaceWhereInput>;
  isNot?: InputMaybe<PlaceWhereInput>;
};

export type PlaceWhereInput = {
  AND?: InputMaybe<Array<PlaceWhereInput>>;
  NOT?: InputMaybe<Array<PlaceWhereInput>>;
  OR?: InputMaybe<Array<PlaceWhereInput>>;
  category?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<PlaceImageListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  provider?: InputMaybe<UserScalarRelationFilter>;
  providerId?: InputMaybe<StringFilter>;
  reservations?: InputMaybe<ReservationListRelationFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PlaceWhereUniqueInput = {
  AND?: InputMaybe<Array<PlaceWhereInput>>;
  NOT?: InputMaybe<Array<PlaceWhereInput>>;
  OR?: InputMaybe<Array<PlaceWhereInput>>;
  category?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<PlaceImageListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  provider?: InputMaybe<UserScalarRelationFilter>;
  providerId?: InputMaybe<StringFilter>;
  reservations?: InputMaybe<ReservationListRelationFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Query = {
  __typename?: 'Query';
  user: User;
  users: Array<User>;
};

export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type RefreshToken = {
  __typename?: 'RefreshToken';
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type RefreshTokenCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type RefreshTokenCreateManyUserInputEnvelope = {
  data: Array<RefreshTokenCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RefreshTokenCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<RefreshTokenCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<RefreshTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<RefreshTokenCreateManyUserInputEnvelope>;
};

export type RefreshTokenCreateOrConnectWithoutUserInput = {
  create: RefreshTokenCreateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type RefreshTokenListRelationFilter = {
  every?: InputMaybe<RefreshTokenWhereInput>;
  none?: InputMaybe<RefreshTokenWhereInput>;
  some?: InputMaybe<RefreshTokenWhereInput>;
};

export type RefreshTokenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RefreshTokenWhereInput = {
  AND?: InputMaybe<Array<RefreshTokenWhereInput>>;
  NOT?: InputMaybe<Array<RefreshTokenWhereInput>>;
  OR?: InputMaybe<Array<RefreshTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RefreshTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<RefreshTokenWhereInput>>;
  NOT?: InputMaybe<Array<RefreshTokenWhereInput>>;
  OR?: InputMaybe<Array<RefreshTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Reservation = {
  __typename?: 'Reservation';
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  payment?: Maybe<Payment>;
  place: Place;
  placeId: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type ReservationCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  placeId: Scalars['String']['input'];
  status: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReservationCreateManyUserInputEnvelope = {
  data: Array<ReservationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReservationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ReservationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ReservationCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<ReservationCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReservationCreateManyUserInputEnvelope>;
};

export type ReservationCreateNestedOneWithoutPaymentInput = {
  connect?: InputMaybe<ReservationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ReservationCreateOrConnectWithoutPaymentInput>;
  create?: InputMaybe<ReservationCreateWithoutPaymentInput>;
};

export type ReservationCreateOrConnectWithoutPaymentInput = {
  create: ReservationCreateWithoutPaymentInput;
  where: ReservationWhereUniqueInput;
};

export type ReservationCreateOrConnectWithoutUserInput = {
  create: ReservationCreateWithoutUserInput;
  where: ReservationWhereUniqueInput;
};

export type ReservationCreateWithoutPaymentInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  place: PlaceCreateNestedOneWithoutReservationsInput;
  status: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutReservationsInput;
};

export type ReservationCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<PaymentCreateNestedOneWithoutReservationInput>;
  place: PlaceCreateNestedOneWithoutReservationsInput;
  status: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReservationListRelationFilter = {
  every?: InputMaybe<ReservationWhereInput>;
  none?: InputMaybe<ReservationWhereInput>;
  some?: InputMaybe<ReservationWhereInput>;
};

export type ReservationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReservationScalarRelationFilter = {
  is?: InputMaybe<ReservationWhereInput>;
  isNot?: InputMaybe<ReservationWhereInput>;
};

export type ReservationWhereInput = {
  AND?: InputMaybe<Array<ReservationWhereInput>>;
  NOT?: InputMaybe<Array<ReservationWhereInput>>;
  OR?: InputMaybe<Array<ReservationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  payment?: InputMaybe<PaymentNullableScalarRelationFilter>;
  place?: InputMaybe<PlaceScalarRelationFilter>;
  placeId?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReservationWhereUniqueInput = {
  AND?: InputMaybe<Array<ReservationWhereInput>>;
  NOT?: InputMaybe<Array<ReservationWhereInput>>;
  OR?: InputMaybe<Array<ReservationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<PaymentNullableScalarRelationFilter>;
  place?: InputMaybe<PlaceScalarRelationFilter>;
  placeId?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Review = {
  __typename?: 'Review';
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  place: Place;
  placeId: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type ReviewCreateManyUserInput = {
  comment: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  placeId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
};

export type ReviewCreateManyUserInputEnvelope = {
  data: Array<ReviewCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReviewCreateManyUserInputEnvelope>;
};

export type ReviewCreateOrConnectWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateWithoutUserInput = {
  comment: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  place: PlaceCreateNestedOneWithoutReviewsInput;
  rating: Scalars['Int']['input'];
};

export type ReviewListRelationFilter = {
  every?: InputMaybe<ReviewWhereInput>;
  none?: InputMaybe<ReviewWhereInput>;
  some?: InputMaybe<ReviewWhereInput>;
};

export type ReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  place?: InputMaybe<PlaceScalarRelationFilter>;
  placeId?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReviewWhereUniqueInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  place?: InputMaybe<PlaceScalarRelationFilter>;
  placeId?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Role = {
  __typename?: 'Role';
  _count: RoleCount;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  users?: Maybe<Array<User>>;
};

export type RoleCount = {
  __typename?: 'RoleCount';
  users: Scalars['Int']['output'];
};

export type RoleCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoleCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<RoleCreateWithoutUsersInput>>;
};

export type RoleCreateOrConnectWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateWithoutUsersInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type RoleListRelationFilter = {
  every?: InputMaybe<RoleWhereInput>;
  none?: InputMaybe<RoleWhereInput>;
  some?: InputMaybe<RoleWhereInput>;
};

export type RoleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type RoleWhereUniqueInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<UserListRelationFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  place: Place;
  placeId: Scalars['String']['output'];
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  place?: InputMaybe<PlaceScalarRelationFilter>;
  placeId?: InputMaybe<StringFilter>;
};

export type User = {
  __typename?: 'User';
  Payment?: Maybe<Array<Payment>>;
  Place?: Maybe<Array<Place>>;
  Role?: Maybe<Array<Role>>;
  _count: UserCount;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Array<UserImage>>;
  isVerified: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  reservations?: Maybe<Array<Reservation>>;
  reviews?: Maybe<Array<Review>>;
  tokens?: Maybe<Array<RefreshToken>>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  Payment: Scalars['Int']['output'];
  Place: Scalars['Int']['output'];
  Role: Scalars['Int']['output'];
  images: Scalars['Int']['output'];
  reservations: Scalars['Int']['output'];
  reviews: Scalars['Int']['output'];
  tokens: Scalars['Int']['output'];
};

export type UserCreateInput = {
  Payment?: InputMaybe<PaymentCreateNestedManyWithoutUserInput>;
  Place?: InputMaybe<PlaceCreateNestedManyWithoutProviderInput>;
  Role?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<UserImageCreateNestedManyWithoutUserInput>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  reservations?: InputMaybe<ReservationCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  tokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
};

export type UserCreateNestedOneWithoutPaymentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPaymentInput>;
  create?: InputMaybe<UserCreateWithoutPaymentInput>;
};

export type UserCreateNestedOneWithoutReservationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReservationsInput>;
  create?: InputMaybe<UserCreateWithoutReservationsInput>;
};

export type UserCreateOrConnectWithoutPaymentInput = {
  create: UserCreateWithoutPaymentInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReservationsInput = {
  create: UserCreateWithoutReservationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutPaymentInput = {
  Place?: InputMaybe<PlaceCreateNestedManyWithoutProviderInput>;
  Role?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<UserImageCreateNestedManyWithoutUserInput>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  reservations?: InputMaybe<ReservationCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  tokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutReservationsInput = {
  Payment?: InputMaybe<PaymentCreateNestedManyWithoutUserInput>;
  Place?: InputMaybe<PlaceCreateNestedManyWithoutProviderInput>;
  Role?: InputMaybe<RoleCreateNestedManyWithoutUsersInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<UserImageCreateNestedManyWithoutUserInput>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  tokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
};

export type UserImage = {
  __typename?: 'UserImage';
  id: Scalars['ID']['output'];
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type UserImageCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type UserImageCreateManyUserInputEnvelope = {
  data: Array<UserImageCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserImageCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserImageCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserImageCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserImageCreateManyUserInputEnvelope>;
};

export type UserImageCreateOrConnectWithoutUserInput = {
  create: UserImageCreateWithoutUserInput;
  where: UserImageWhereUniqueInput;
};

export type UserImageCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type UserImageListRelationFilter = {
  every?: InputMaybe<UserImageWhereInput>;
  none?: InputMaybe<UserImageWhereInput>;
  some?: InputMaybe<UserImageWhereInput>;
};

export type UserImageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserImageWhereInput = {
  AND?: InputMaybe<Array<UserImageWhereInput>>;
  NOT?: InputMaybe<Array<UserImageWhereInput>>;
  OR?: InputMaybe<Array<UserImageWhereInput>>;
  id?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserImageWhereUniqueInput = {
  AND?: InputMaybe<Array<UserImageWhereInput>>;
  NOT?: InputMaybe<Array<UserImageWhereInput>>;
  OR?: InputMaybe<Array<UserImageWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export enum UserOrderByRelevanceFieldEnum {
  Email = 'email',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  Password = 'password',
  Phone = 'phone',
  Username = 'username',
}

export type UserOrderByRelevanceInput = {
  fields: Array<UserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserOrderByWithRelationInput = {
  Payment?: InputMaybe<PaymentOrderByRelationAggregateInput>;
  Place?: InputMaybe<PlaceOrderByRelationAggregateInput>;
  Role?: InputMaybe<RoleOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<UserOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<UserImageOrderByRelationAggregateInput>;
  isVerified?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrderInput>;
  reservations?: InputMaybe<ReservationOrderByRelationAggregateInput>;
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  tokens?: InputMaybe<RefreshTokenOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  FirstName = 'firstName',
  Id = 'id',
  IsVerified = 'isVerified',
  LastName = 'lastName',
  Password = 'password',
  Phone = 'phone',
  UpdatedAt = 'updatedAt',
  Username = 'username',
}

export type UserScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Payment?: InputMaybe<PaymentListRelationFilter>;
  Place?: InputMaybe<PlaceListRelationFilter>;
  Role?: InputMaybe<RoleListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<UserImageListRelationFilter>;
  isVerified?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  reservations?: InputMaybe<ReservationListRelationFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  tokens?: InputMaybe<RefreshTokenListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Payment?: InputMaybe<PaymentListRelationFilter>;
  Place?: InputMaybe<PlaceListRelationFilter>;
  Role?: InputMaybe<RoleListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<UserImageListRelationFilter>;
  isVerified?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  reservations?: InputMaybe<ReservationListRelationFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  tokens?: InputMaybe<RefreshTokenListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserFragmentFragment = {
  __typename?: 'User';
  id: string;
  firstName: string;
  lastName?: string | null;
  email: string;
  phone?: string | null;
  username: string;
} & { ' $fragmentName'?: 'UserFragmentFragment' };

export type CreateUserMutationVariables = Exact<{
  input: UserCreateInput;
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser: { __typename?: 'User' } & {
    ' $fragmentRefs'?: { UserFragmentFragment: UserFragmentFragment };
  };
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  user: { __typename?: 'User' } & {
    ' $fragmentRefs'?: { UserFragmentFragment: UserFragmentFragment };
  };
};

export const UserFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'userFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserFragmentFragment, unknown>;
export const CreateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UserCreateInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'userFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'userFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const GetUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'userFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'userFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
