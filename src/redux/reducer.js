import { combineReducers } from 'redux';
import language from './modules/language';
import alert from './modules/alert';
import cyberNav from './modules/cyberNav';
import sessionStart from './modules/sessionStart';
import login from './modules/login';
import logout from './modules/logout';
import TrackRequestList from './modules/trackRequestList';
import trackBlockUser from './modules/TrackBlockModal';
import responseStatus from './modules/ResponseStatusModal';
import TrackUserList from './modules/TrackUserList';
import TrackPostList from './modules/TrackPostList';
import SubmitPost from './modules/SubmitPostModal';
import trackRequests from './modules/getTrackRequest';
import CountBusiness from './modules/CountBusinessModal';
import TrackBusinessList from './modules/TrackBusinessList';
import RejectStatusModal from './modules/RejectStatusModal';
import UploadImgPostModal from './modules/UploadImgPostModal';
import SubmitCreatePostModal from './modules/SubmitCreatePostModal';
import TrackReviewList from './modules/TrackReviewList';
import SubmitReview from './modules/SubmitReviewModal';
import TrackCommentList from './modules/TrackCommentList';
import SubmitComment from './modules/SubmitCommentModal';
import services from './modules/services';
import CreatePostModal from './modules/CreatePostModal';

export default combineReducers({
  language,
  alert,
  sessionStart,
  cyberNav,
  login,
  logout,
  TrackRequestList,
  trackBlockUser,
  responseStatus,
  TrackUserList,
  TrackPostList,
  SubmitPost,
  trackRequests,
  CountBusiness,
  TrackBusinessList,
  RejectStatusModal,
  UploadImgPostModal,
  SubmitCreatePostModal,
  TrackReviewList,
  SubmitReview,
  TrackCommentList,
  SubmitComment,
  services,
  CreatePostModal,
});
