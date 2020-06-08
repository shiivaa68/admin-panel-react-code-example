import { all, takeEvery } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import { watchRehydrate } from './modules/rehydrate';
import { CHANGE_LANGUAGE, handleChangeLanguage } from './modules/language';
import {
  actionTypes as sessionStart,
  watchSessionStart,
} from './modules/sessionStart';
import { actionTypes as login, watchLogin } from './modules/login';
import { actionTypes as logout, watchLogout } from './modules/logout';
import {
  actionTypes as trackRequestList,
  loadTrackRequestList,
} from './modules/trackRequestList';
import {
  actionTypes as trackBlockUser,
  watchTrackBlockUser,
} from './modules/TrackBlockModal';
import {
  actionTypes as responseStatus,
  watchResponseStatus,
} from './modules/ResponseStatusModal';
import {
  actionTypes as trackUserList,
  loadTrackUserList,
} from './modules/TrackUserList';
import {
  actionTypes as TrackPostList,
  loadTrackPostList,
} from './modules/TrackPostList';
import {
  actionTypes as SubmitPost,
  watchTrackSubmitPost,
} from './modules/SubmitPostModal';
import {
  actionTypes as getTrackRequest,
  watchGetTrackRequest,
} from './modules/getTrackRequest';
import {
  actionTypes as CountBusiness,
  watchCountBusiness,
} from './modules/CountBusinessModal';
import {
  actionTypes as trackBusinessList,
  loadTrackBusinessList,
} from './modules/TrackBusinessList';
import {
  actionTypes as RejectStatus,
  watchRejectStatus,
} from './modules/RejectStatusModal';
import {
  actionTypes as UploadImgPost,
  watchUploadImgPost,
} from './modules/UploadImgPostModal';
import {
  actionTypes as SubmitCreatePost,
  watchSubmitCreatePost,
} from './modules/SubmitCreatePostModal';
import {
  actionTypes as TrackReviewList,
  loadTrackReviewList,
} from './modules/TrackReviewList';
import {
  actionTypes as SubmitReview,
  watchTrackSubmitReview,
} from './modules/SubmitReviewModal';
import {
  actionTypes as TrackCommentList,
  loadTrackCommentList,
} from './modules/TrackCommentList';
import {
  actionTypes as SubmitComment,
  watchTrackSubmitComment,
} from './modules/SubmitCommentModal';
import { actionTypes as services, watchGetServices } from './modules/services';
import {
  actionTypes as CreatePost,
  watchTrackCreatePost,
} from './modules/CreatePostModal';

export default function* root(store) {
  yield all([
    takeEvery(REHYDRATE, watchRehydrate, store),
    takeEvery(CHANGE_LANGUAGE, handleChangeLanguage),
    takeEvery(sessionStart.load, watchSessionStart),
    takeEvery(login.load, watchLogin),
    takeEvery(logout.load, watchLogout),
    takeEvery(trackRequestList.load, loadTrackRequestList),
    takeEvery(trackBlockUser.load, watchTrackBlockUser),
    takeEvery(responseStatus.load, watchResponseStatus),
    takeEvery(trackUserList.load, loadTrackUserList),
    takeEvery(TrackPostList.load, loadTrackPostList),
    takeEvery(SubmitPost.load, watchTrackSubmitPost),
    takeEvery(getTrackRequest.load, watchGetTrackRequest),
    takeEvery(CountBusiness.load, watchCountBusiness),
    takeEvery(trackBusinessList.load, loadTrackBusinessList),
    takeEvery(RejectStatus.load, watchRejectStatus),
    takeEvery(UploadImgPost.load, watchUploadImgPost),
    takeEvery(SubmitCreatePost.load, watchSubmitCreatePost),
    takeEvery(TrackReviewList.load, loadTrackReviewList),
    takeEvery(SubmitReview.load, watchTrackSubmitReview),
    takeEvery(TrackCommentList.load, loadTrackCommentList),
    takeEvery(SubmitComment.load, watchTrackSubmitComment),
    takeEvery(services.load, watchGetServices),
    takeEvery(CreatePost.load, watchTrackCreatePost),
  ]);
}
