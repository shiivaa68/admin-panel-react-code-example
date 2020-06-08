// @flow
import React, { PureComponent } from 'react';
import { Step, Stepper } from '../../kit';

type Props = {
  user: Object,
  info: Object,
  language: Object
};

export default class CareerRoad extends PureComponent<Props> {
  generateTitles = () => {
    const { info, user } = this.props;
    if (info.deterRank === -1 || info.deterRank === 0) {
      return user.rank.slice(0, 5);
    }
    if (info.deterRank === 1) {
      return user.rank.slice(1, 6);
    }
    if (user.rank.length === info.deterRank) {
      return user.rank.slice(user.rank.length - 5, user.rank.length);
    }

    if (user.rank.length - 1 === info.deterRank) {
      return user.rank.slice(info.deterRank - 4, info.deterRank + 1);
    }

    if (user.rank.length - 2 === info.deterRank) {
      return user.rank.slice(info.deterRank - 3, info.deterRank + 2);
    }

    return user.rank.slice(info.deterRank - 2, info.deterRank + 3);

  };

  getInitialStep = () => {
    const { info, user } = this.props;
    if (info.deterRank === -1) {
      return -1;
    }
    if (info.deterRank === 0) {
      return 0;
    }

    if (info.deterRank === 1) {
      return 2;
    }
    if (user.rank.length === info.deterRank) {
      return 4;
    }

    if (user.rank.length - 1 === info.deterRank) {
      return 4;
    }

    if (user.rank.length - 2 === info.deterRank) {
      return 3;
    }
    return 3;
  };

  generateDotTitles = () => {
    const { info, user } = this.props;
    if (info.deterRank === -1 || info.deterRank === 0) {
      return [1, 2, 3, 4, 5];
    }

    if (info.deterRank === 1) {
      return [2, 3, 4, 5, 6];
    }

    if (user.rank.length === info.deterRank) {
      return [user.rank.length - 4, user.rank.length - 3, user.rank.length - 2, user.rank.length - 1, user.rank.length];
    }

    if (user.rank.length - 1 === info.deterRank) {
      return [user.rank.length - 5, user.rank.length - 4, user.rank.length - 3, user.rank.length - 2, user.rank.length - 1];
    }

    if (user.rank.length - 2 === info.deterRank) {
      return [info.deterRank - 3, info.deterRank - 2, info.deterRank - 1, info.deterRank, info.deterRank + 1];
    }
    return [info.deterRank - 2, info.deterRank - 1, info.deterRank, info.deterRank + 1, info.deterRank + 2];

  };

  render() {
    const { language, info, user } = this.props;
    return (
      <Stepper
        titles={this.generateTitles()}
        initialStep={this.getInitialStep()}
        ref={ref => this._stepper = ref}
        language={language}
        isDone={info.deterRank === user.rank.length}
        dotTitle={this.generateDotTitles()}
        alwaysDisabled
      >
        <Step step={0}/>
        <Step step={1}/>
        <Step step={2}/>
        <Step step={3}/>
        <Step step={4}/>
      </Stepper>
    );
  }
}
