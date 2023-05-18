export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type ICreatePaymentInput = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
  seriesList: Array<Scalars['String']>;
};

export type ICreatePostInput = {
  content: Scalars['String'];
  seriesId?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type ICreateSeriesInput = {
  categoryId: Scalars['String'];
  image: Scalars['String'];
  introduction: Scalars['String'];
  paid: Scalars['Boolean'];
  posts?: InputMaybe<Array<Scalars['String']>>;
  price: Scalars['Int'];
  title: Scalars['String'];
};

export type ICreateSeriesReviewInput = {
  content: Scalars['String'];
  rating: Scalars['Float'];
  seriesId: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
};

export type IFetchStatisticsInput = {
  endDate: Scalars['String'];
  postId: Scalars['String'];
  startDate: Scalars['String'];
};

export type IMemo = {
  __typename?: 'Memo';
  author: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  memoId: Scalars['String'];
  parse: Scalars['String'];
  title: Scalars['String'];
  user: IUser;
};

export type IMutation = {
  __typename?: 'Mutation';
  createPaymentSeries: IPayment;
  createPost: IPost;
  createPostMemo: IMemo;
  createSeries: ISeries;
  createSeriesCategory: ISeriesCategory;
  createSeriesReview: ISeriesReview;
  createUser: IUser;
  deletePost: Scalars['Boolean'];
  deletePostMemo: Scalars['Boolean'];
  deleteSeries: Scalars['Boolean'];
  deleteSeriesInCart: Scalars['Boolean'];
  deleteSeriesReview: Scalars['Boolean'];
  insertSeriesInCart: ISeries;
  loginUser: Scalars['String'];
  logoutUser: Scalars['Boolean'];
  resignUser: Scalars['Boolean'];
  restoreAccessToken: Scalars['String'];
  togglePostPick: Scalars['Boolean'];
  updatePost: IPost;
  updateSeries: ISeries;
  updateSeriesReview: ISeriesReview;
  updateUser: IUser;
  updateUserPassword: Scalars['Boolean'];
  uploadImage: Scalars['String'];
};


export type IMutationCreatePaymentSeriesArgs = {
  createPaymentInput: ICreatePaymentInput;
};


export type IMutationCreatePostArgs = {
  createPostInput: ICreatePostInput;
};


export type IMutationCreatePostMemoArgs = {
  parse: Scalars['String'];
  postId: Scalars['String'];
};


export type IMutationCreateSeriesArgs = {
  createSeriesInput: ICreateSeriesInput;
};


export type IMutationCreateSeriesCategoryArgs = {
  name: Scalars['String'];
};


export type IMutationCreateSeriesReviewArgs = {
  createSeriesReviewInput: ICreateSeriesReviewInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeletePostArgs = {
  postId: Scalars['String'];
};


export type IMutationDeletePostMemoArgs = {
  memoId: Scalars['String'];
};


export type IMutationDeleteSeriesArgs = {
  seriesId: Scalars['String'];
};


export type IMutationDeleteSeriesInCartArgs = {
  seriesId: Scalars['String'];
};


export type IMutationDeleteSeriesReviewArgs = {
  reviewId: Scalars['String'];
};


export type IMutationInsertSeriesInCartArgs = {
  seriesId: Scalars['String'];
};


export type IMutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationTogglePostPickArgs = {
  postId: Scalars['String'];
};


export type IMutationUpdatePostArgs = {
  postId: Scalars['String'];
  updatePostInput: IUpdatePostInput;
};


export type IMutationUpdateSeriesArgs = {
  seriesId: Scalars['String'];
  updateSeriesInput: IUpdateSeriesInput;
};


export type IMutationUpdateSeriesReviewArgs = {
  reviewId: Scalars['String'];
  updateSeriesReviewInput: IUpdateSeriesReviewInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateUserPasswordArgs = {
  newPassword: Scalars['String'];
};


export type IMutationUploadImageArgs = {
  file: Scalars['Upload'];
};

export enum IPayment_Status_Enum {
  Payment = 'PAYMENT'
}

export type IPayment = {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  impUid: Scalars['String'];
  paymentId: Scalars['String'];
  status: IPayment_Status_Enum;
  user: IUser;
};

export type IPaymentDetail = {
  __typename?: 'PaymentDetail';
  payment: IPayment;
  paymentDetailId: Scalars['String'];
  series: ISeries;
  user: IUser;
};

export type IPost = {
  __typename?: 'Post';
  content: Scalars['String'];
  deletedAt: Scalars['DateTime'];
  postId: Scalars['String'];
  series?: Maybe<ISeries>;
  tags?: Maybe<Array<ITag>>;
  title: Scalars['String'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchFreeSeries: Array<ISeries>;
  fetchLikeCountByPost: Scalars['Int'];
  fetchPaymentDetailByUser: Array<IPaymentDetail>;
  fetchPost: IPost;
  fetchPostMemos: Array<IMemo>;
  fetchPostViewOfMine: Array<IStatistics>;
  fetchPosts: Array<IPost>;
  fetchPostsCount: Scalars['String'];
  fetchPostsCountOfMine: Scalars['String'];
  fetchPostsOfMine: Array<IPost>;
  fetchPostsViewOfMine: Array<IStatistics>;
  fetchRatingBySeries: Scalars['Float'];
  fetchSeries: ISeries;
  fetchSeriesAll: Array<ISeries>;
  fetchSeriesByCategory: Array<ISeries>;
  fetchSeriesByUser: Array<ISeries>;
  fetchSeriesCategories: Array<ISeriesCategory>;
  fetchSeriesCategory: ISeriesCategory;
  fetchSeriesReviews: Array<ISeriesReview>;
  fetchSeriesReviewsBySeries: Array<ISeriesReview>;
  fetchShoppingCart: Array<ISeries>;
  fetchUserLoggedIn: IUser;
  isVaildCreateReviewByUser: Scalars['Boolean'];
};


export type IQueryFetchFreeSeriesArgs = {
  categoryId?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchLikeCountByPostArgs = {
  postId?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchPostArgs = {
  postId: Scalars['String'];
};


export type IQueryFetchPostViewOfMineArgs = {
  fetchStatisticsInput: IFetchStatisticsInput;
};


export type IQueryFetchPostsViewOfMineArgs = {
  endDate: Scalars['String'];
  startDate: Scalars['String'];
};


export type IQueryFetchRatingBySeriesArgs = {
  seriesId: Scalars['String'];
};


export type IQueryFetchSeriesArgs = {
  seriesId: Scalars['String'];
};


export type IQueryFetchSeriesByCategoryArgs = {
  categoryId?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchSeriesCategoryArgs = {
  categoryId: Scalars['String'];
};


export type IQueryFetchSeriesReviewsBySeriesArgs = {
  seriesId: Scalars['String'];
};


export type IQueryIsVaildCreateReviewByUserArgs = {
  seriesId: Scalars['String'];
};

export type ISeries = {
  __typename?: 'Series';
  category: ISeriesCategory;
  createdAt: Scalars['DateTime'];
  image: Scalars['String'];
  introduction: Scalars['String'];
  paid: Scalars['Boolean'];
  price?: Maybe<Scalars['Int']>;
  seriesId: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ISeriesCategory = {
  __typename?: 'SeriesCategory';
  categoryId: Scalars['String'];
  name: Scalars['String'];
};

export type ISeriesReview = {
  __typename?: 'SeriesReview';
  content: Scalars['String'];
  rating: Scalars['Float'];
  reviewId: Scalars['String'];
  series: ISeries;
  user: IUser;
};

export type IStatistics = {
  __typename?: 'Statistics';
  date: Scalars['DateTime'];
  post: IPost;
  statisticId: Scalars['String'];
  view: Scalars['Int'];
};

export type ITag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  posts: IPost;
  tagId: Scalars['String'];
};

export type IUpdatePostInput = {
  content?: InputMaybe<Scalars['String']>;
  seriesId?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateSeriesInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  introduction?: InputMaybe<Scalars['String']>;
  paid?: InputMaybe<Scalars['Boolean']>;
  posts?: InputMaybe<Array<Scalars['String']>>;
  price?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateSeriesReviewInput = {
  content?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
};

export type IUpdateUserInput = {
  image?: InputMaybe<Scalars['String']>;
  introduction?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  deleatedAt: Scalars['DateTime'];
  email: Scalars['String'];
  image: Scalars['String'];
  introduction: Scalars['String'];
  nickname: Scalars['String'];
  userId: Scalars['String'];
};
