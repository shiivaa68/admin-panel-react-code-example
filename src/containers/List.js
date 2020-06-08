import React from 'react';
import {
  CyberContainer,
  Table,
  Loading,
  Modal,
  Button,
  Text,
} from '../components/kit';
import { connect } from 'react-redux';
import { getQueryParam, setNewQueryParams } from '../utils';
import listView from '../Table/List';
import _ from 'lodash';
import styled from 'styled-components';
import { actions as loadTrackRequestList } from '../redux/modules/trackRequestList';
import { actions as loadWatchTrackBlockUser } from '../redux/modules/TrackBlockModal';
import { actions as loadWatchResponseStatus } from '../redux/modules/ResponseStatusModal';
import { actions as loadTrackUserList } from '../redux/modules/TrackUserList';
import { actions as loadTrackPostList } from '../redux/modules/TrackPostList';
import { actions as loadCountBusiness } from '../redux/modules/CountBusinessModal';
import { actions as loadSubmitPostModal } from '../redux/modules/SubmitPostModal';
import { showAlert } from '../redux/modules/alert';
import { actions as loadTrackBusinessList } from '../redux/modules/TrackBusinessList';
import { actions as loadRejectStatusModal } from '../redux/modules/RejectStatusModal';
import { actions as loadUploadImgPostModal } from '../redux/modules/UploadImgPostModal';
import { actions as loadSubmitCreatePostModal } from '../redux/modules/SubmitCreatePostModal';
import { actions as loadTrackReviewList } from '../redux/modules/TrackReviewList';
import { actions as loadSubmitReviewModal } from '../redux/modules/SubmitReviewModal';
import { actions as loadTrackCommentList } from '../redux/modules/TrackCommentList';
import { actions as loadSubmitCommentModal } from '../redux/modules/SubmitCommentModal';
import { actions as loadCreatePostModal } from '../redux/modules/CreatePostModal';

const CustomDivFilter = styled.div`
  z-index: 999;
`;

let delayTimer;

class List extends React.PureComponent {
  _modals = {};

  state = {
    userId: '',
    curPage: '',
    firstTime: true,
  };

  getLimit = () => getQueryParam('pageSize') || 10;

  getPage = () => getQueryParam('page') || 1;

  componentDidMount() {
    const { pageName } = this.props.match.params;
    const lm = this.getLimit();
    const pg = this.getPage();
    let query = getQueryParam();
    if (query.page) {
      delete query.page;
    }
    if (query.pageSize) {
      delete query.pageSize;
    }
    query = { ...query, lm, pg, so: -1 };
    this.setState({
      curPage: pageName,
      firstTime: false,
    });
    let load = `load${pageName}`;
    console.log(load);
    this.props[load](query);
  }

  componentDidUpdate(prevProps) {
    const lm = this.getLimit();
    const pg = this.getPage();
    let query = getQueryParam();
    if (query.page) {
      delete query.page;
    }
    if (query.pageSize) {
      delete query.pageSize;
    }
    query = { ...query, lm, pg, so: -1 };
    if (!_.isEqual(prevProps.match.params, this.props.match.params)) {
      let load = `load${this.props.match.params.pageName}`;
      this.props[load](query);
    }
    this.setState({
      firstTime: false,
    });
  }

  handleInformation = action => {
    const lm = this.getLimit();
    const pg = this.getPage();
    let query = getQueryParam();
    if (query.page) {
      delete query.page;
    }
    if (query.pageSize) {
      delete query.pageSize;
    }

    this.setState(
      {
        firstTime: true,
      },
      () => {
        if (action === 'allList') {
          this.props.history.push(this.props.history.location.pathname);
          this.props[`load${this.props.match.params.pageName}`]({
            sb: 'createdAt',
            so: -1,
            lm: 10,
            pg: 1,
          });
        } else {
          this.props[`load${this.props.match.params.pageName}`]({
            ...query,
            sb: 'createdAt',
            so: -1,
            lm,
            pg,
          });
        }
      }
    );
  };

  handleSearch = prop => {
    const { props } = this;
    const lm = this.getLimit();
    const pg = this.getPage();

    if (!this.state.firstTime) {
      if (prop.sorted.length && prop.filtered.length === 0) {
        return props[`load${props.match.params.pageName}`]({
          sb: prop.sorted[0].id,
          so: prop.sorted[0].desc ? 1 : -1,
        });
      }
      if (prop.filtered.length > 0) {
        let body = {
          [`${prop.filtered[prop.filtered.length - 1].id}`]: `${
            prop.filtered[prop.filtered.length - 1].value
          }`,
        };
        clearTimeout(delayTimer);
        return (delayTimer = setTimeout(function() {
          props[`load${props.match.params.pageName}`](body, lm);
          props.history.push(props.history.location.pathname);
          props.history.push(
            `${props.history.location.pathname}?${setNewQueryParams({
              [`${prop.filtered[prop.filtered.length - 1].id}`]: `${
                prop.filtered[prop.filtered.length - 1].value
              }`,
            })}`
          );
        }, 2000));
      }
      props.history.push(props.history.location.pathname);
      return props[`load${props.match.params.pageName}`]({
        sb: 'createdAt',
        so: -1,
        lm,
        pg,
      });
    }
  };

  render() {
    const { cyberNav, showAlert } = this.props;
    const { pageName } = this.props.match.params;
    const modals = require(`../Table/Modal/${pageName}Modals`).default;
    const data = this.props[pageName].data;
    const page = Number(getQueryParam('page')) || 1;
    const pageSize = Number(getQueryParam('pageSize')) || 10;

    return (
      <CyberContainer navWidth={cyberNav.navWidth} className="pt-5">
        <Loading loading={this.props[pageName].loading}>
          <CustomDivFilter className="d-flex align-items-center justify-content-center pt-2 position-absolute">
            <Button
              type="primary"
              filled
              size="lg"
              onClick={() => this.handleInformation('allList')}
            >
              <Text color="white" size="sm">
                panel.listView
              </Text>
            </Button>
          </CustomDivFilter>
          <Table
            data={data.data}
            columns={listView[`${this.props.match.params.pageName}Columns`]({
              pageSize,
              page,
              handleSearch: (row, text) => this.handleSearch(row, text),
              modals: this._modals,
            })}
            total={data.count}
            perPage={pageSize}
            onPageSizeChange={this.handleInformation}
            onPaginationChange={this.handleInformation}
            searchable={false}
            loading={this.props[pageName].loading}
            onFetchData={state => this.handleSearch(state)}
          />
          {Object.keys(modals).map(modalKey => {
            const ModalChildren = modals[modalKey];
            return (
              <Modal
                ref={ref => (this._modals[`_${modalKey}`] = ref)}
                secondary
                backdrop
                className="modal-dialog-centered"
                key={modalKey}
              >
                <ModalChildren
                  data={this.props[pageName].data}
                  showAlert={showAlert}
                  modalAction={payload => this.props[modalKey](payload)}
                />
              </Modal>
            );
          })}
        </Loading>
      </CyberContainer>
    );
  }
}

export default connect(
  state => ({
    cyberNav: state.cyberNav,
    TrackRequestList: state.TrackRequestList,
    TrackUserList: state.TrackUserList,
    TrackPostList: state.TrackPostList,
    TrackBusinessList: state.TrackBusinessList,
    TrackReviewList: state.TrackReviewList,
    TrackCommentList: state.TrackCommentList,
  }),
  {
    loadTrackRequestList: loadTrackRequestList.load,
    TrackBlockModal: loadWatchTrackBlockUser.load,
    ResponseStatusModal: loadWatchResponseStatus.load,
    loadTrackUserList: loadTrackUserList.load,
    loadTrackPostList: loadTrackPostList.load,
    loadCountBusiness: loadCountBusiness.load,
    SubmitPostModal: loadSubmitPostModal.load,
    loadTrackBusinessList: loadTrackBusinessList.load,
    RejectStatusModal: loadRejectStatusModal.load,
    UploadImgPostModal: loadUploadImgPostModal.load,
    SubmitCreatePostModal: loadSubmitCreatePostModal.load,
    loadTrackReviewList: loadTrackReviewList.load,
    SubmitReviewModal: loadSubmitReviewModal.load,
    loadTrackCommentList: loadTrackCommentList.load,
    SubmitCommentModal: loadSubmitCommentModal.load,
    CreatePostModal: loadCreatePostModal.load,
    showAlert,
  }
)(List);
