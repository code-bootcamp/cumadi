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

export type IComment = {
  __typename?: 'Comment';
  commentId: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  post: IPost;
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ICreatePaymentInput = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
  seriesList: Array<Scalars['String']>;
};

export type ICreatePostInput = {
  content: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
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

export type IIAnswerServiceReturn = {
  __typename?: 'IAnswerServiceReturn';
  answerAuthor: IUser;
  answerId: Scalars['String'];
  comment: IComment;
  content: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type IICheckPaymentListReturn = {
  __typename?: 'ICheckPaymentListReturn';
  seriesId?: Maybe<Array<Scalars['String']>>;
  status: Scalars['Boolean'];
};

export type IIFetchSeriesReturn = {
  __typename?: 'IFetchSeriesReturn';
  category: ISeriesCategory;
  createdAt: Scalars['DateTime'];
  image: Scalars['String'];
  introduction: Scalars['String'];
  paid: Scalars['Boolean'];
  post?: Maybe<Array<IPost>>;
  price?: Maybe<Scalars['Int']>;
  seriesId: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ILike = {
  __typename?: 'Like';
  likeId: Scalars['String'];
  post: IPost;
  user: IUser;
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
  createPaymentFreeSeries: IPayment;
  createPaymentSeries: IPayment;
  createPost: IPost;
  createPostComment: IComment;
  createPostCommentAnswer: IIAnswerServiceReturn;
  createPostMemo: IMemo;
  createSeries: ISeries;
  createSeriesCategory: ISeriesCategory;
  createSeriesReview: ISeriesReview;
  createUser: IUser;
  deletePost: Scalars['Boolean'];
  deletePostComment: Scalars['Boolean'];
  deletePostCommentAnswer: Scalars['Boolean'];
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
  updatePostComment: IComment;
  updatePostCommentAnswer: IIAnswerServiceReturn;
  updateSeries: ISeries;
  updateSeriesReview: ISeriesReview;
  updateUser: IUser;
  updateUserPassword: Scalars['Boolean'];
  uploadImage: Scalars['String'];
};


export type IMutationCreatePaymentFreeSeriesArgs = {
  seriesList: Array<Scalars['String']>;
};


export type IMutationCreatePaymentSeriesArgs = {
  createPaymentInput: ICreatePaymentInput;
};


export type IMutationCreatePostArgs = {
  createPostInput: ICreatePostInput;
};


export type IMutationCreatePostCommentArgs = {
  content: Scalars['String'];
  postId: Scalars['String'];
};


export type IMutationCreatePostCommentAnswerArgs = {
  commentId: Scalars['String'];
  content: Scalars['String'];
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


export type IMutationDeletePostCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeletePostCommentAnswerArgs = {
  answerId: Scalars['String'];
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


export type IMutationUpdatePostCommentArgs = {
  commentId: Scalars['String'];
  updateContent: Scalars['String'];
};


export type IMutationUpdatePostCommentAnswerArgs = {
  answerId: Scalars['String'];
  newContent: Scalars['String'];
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
  currentPassword: Scalars['String'];
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
  createdAt: IPayment;
  impUid: Scalars['String'];
  paymentId: Scalars['String'];
  status: IPayment_Status_Enum;
  user: IUser;
};

export type IPaymentDetail = {
  __typename?: 'PaymentDetail';
  createdAt: Scalars['DateTime'];
  payment: IPayment;
  paymentDetailId: Scalars['String'];
  series: ISeries;
  user: IUser;
};

export type IPost = {
  __typename?: 'Post';
  comments?: Maybe<Array<IComment>>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  description: Scalars['String'];
  image: Scalars['String'];
  likes?: Maybe<Array<ILike>>;
  postId: Scalars['String'];
  series?: Maybe<ISeries>;
  tags?: Maybe<Array<ITag>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  checkPaymentList: IICheckPaymentListReturn;
  fetchFreeSeries: Array<ISeries>;
  fetchLikeCountByPost: Scalars['Int'];
  fetchPaymentDetailByUser: Array<IPaymentDetail>;
  fetchPost: IPost;
  fetchPostCommentAnswer?: Maybe<IIAnswerServiceReturn>;
  fetchPostCommentAnswers: Array<IIAnswerServiceReturn>;
  fetchPostComments: Array<IComment>;
  fetchPostMemos: Array<IMemo>;
  fetchPostViewOfMine: Array<IStatistics>;
  fetchPosts: Array<IPost>;
  fetchPostsCount: Scalars['String'];
  fetchPostsCountOfMine: Scalars['String'];
  fetchPostsOfMine: Array<IPost>;
  fetchPostsViewOfMine: Array<IStatistics>;
  fetchRatingBySeries: Scalars['Float'];
  fetchSeries: IIFetchSeriesReturn;
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


export type IQueryCheckPaymentListArgs = {
  seriesId: Array<Scalars['String']>;
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


export type IQueryFetchPostCommentAnswerArgs = {
  commentId: Scalars['String'];
};


export type IQueryFetchPostCommentAnswersArgs = {
  postId: Scalars['String'];
};


export type IQueryFetchPostCommentsArgs = {
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
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
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
  image?: Maybe<Scalars['String']>;
  introduction?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  userId: Scalars['String'];
};
