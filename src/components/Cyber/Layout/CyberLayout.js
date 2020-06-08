import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import { connect } from 'react-redux';
import { actions as logoutActions } from '../../../redux/modules/logout';
import { Redirect, withRouter } from 'react-router-dom';
import { toggleCyberNav } from '../../../redux/modules/cyberNav';
import { showAlert } from '../../../redux/modules/alert';

class CyberLayout extends Component {
  render() {
    const {
      language,
      loginPass,
      logoutAction,
      cyberNav,
      toggleCyberNav,
      history,
      showAlert,
    } = this.props;
    const { isNavOpen, navWidth } = cyberNav;
    const hasUserData = loginPass.data['_id'];
    const isInPanelRoute = history.location.pathname.includes('/panel');
    const navItemData = [
      {
        fname: 'panel.navItem.dashboard',
        icon: '?',
        id: 0,
        lname: 'panel',
      },
      {
        fname: 'panel.navItem.consumer',
        icon: 'Ã',
        id: 1,
        lname: 'List/TrackUserList',
      },
      {
        fname: 'panel.navItem.requestTrack',
        icon: 'º',
        id: 2,
        lname: 'List/TrackRequestList',
      },

      {
        fname: 'panel.navItem.business.list',
        icon: '¢',
        id: 3,
        lname: 'List/TrackBusinessList',
      },
      {
        fname: 'panel.navItem.services',
        icon: 'ª',
        id: 4,
        lname: 'services',
      },
      {
        fname: 'panel.navItem.posts',
        icon: '³',
        id: 5,
        lname: 'List/TrackPostList',
      },
      {
        fname: 'panel.navItem.reviewList',
        icon: 'N',
        id: 6,
        lname: 'List/TrackReviewList',
      },
      {
        fname: 'panel.navItem.comments',
        icon: 'e',
        id: 7,
        lname: 'List/TrackCommentList',
      },
      {
        fname: 'panel.navItem.trackReport.title',
        icon: 'K',
        id: 8,
        lname: 'trackReport',
        child: [
          {
            fname: 'panel.navItem.trackReport.trespass',
            icon: 'ó',
            id: 9,
            lname: 'panel/List/Trespass',
          },
          {
            fname: 'panel.navItem.trackReport.smsTracker',
            icon: 'ó',
            id: 10,
            lname: 'panel/List/SmsTracker',
          },
        ],
      },
      {
        fname: 'panel.navItem.mediaListReview.title',
        icon: 'i',
        id: 11,
        lname: 'mediaListReview',
        child: [
          {
            fname: 'panel.navItem.mediaListReview.cover',
            icon: 'i',
            id: 12,
            lname: 'panel/List/Cover',
          },
          {
            fname: 'panel.navItem.mediaListReview.logo',
            icon: 'i',
            id: 13,
            lname: 'panel/List/Logo',
          },
        ],
      },
      {
        fname: 'panel.navItem.createBusiness.title',
        icon: 'Ý',
        id: 14,
        lname: 'createBusiness',
        child: [
          {
            fname: 'panel.navItem.createBusiness.user',
            icon: 'Ý',
            id: 15,
            lname: 'panel/List/User',
          },
          {
            fname: 'panel.navItem.createBusiness.business',
            icon: 'Ý',
            id: 16,
            lname: 'panel/List/Business',
          },
        ],
      },
      {
        fname: 'panel.navItem.usersNotification',
        icon: 'k',
        id: 17,
        lname: 'usersNotification',
      },
      {
        fname: 'panel.navItem.statistic.title',
        icon: '©',
        id: 18,
        lname: 'statistic',
        child: [
          {
            fname: 'panel.navItem.statistic.business',
            icon: '©',
            id: 19,
            lname: 'panel/List/BusinessStatistic',
          },
          {
            fname: 'panel.navItem.statistic.post',
            icon: '©',
            id: 20,
            lname: 'panel/List/PostStatistic',
          },
        ],
      },
    ];

    return isInPanelRoute ? (
      hasUserData ? (
        <div>
          <Header
            language={language}
            navWidth={navWidth}
            logoutAction={logoutAction}
            cyberMenu={navItemData}
            showAlert={showAlert}
          />
          <Nav
            language={language}
            isNavOpen={isNavOpen}
            navWidth={navWidth}
            toggleNav={toggleCyberNav}
            navItems={navItemData}
            cyberMenu={navItemData}
          />
        </div>
      ) : (
        <Redirect to="/" />
      )
    ) : (
      <></>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      language: state.language,
      loginPass: state.login,
      cyberNav: state.cyberNav,
      logout: state.logout,
    }),
    {
      logoutAction: logoutActions.load,
      toggleCyberNav,
      showAlert,
    }
  )(CyberLayout)
);
