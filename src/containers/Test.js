import React, { Component } from 'react';
import { Button, Container, Stepper, Step, Text, Table, Icon, Select } from "../components/kit";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getQueryParam } from "../utils";

const titles = ['home.home', 'home.home', 'about', 'form.username', 'form.gender'];

class Test extends Component {

  handleClick = () => {
    this._stepper.setStep(2);
  };

  render() {
    const { language } = this.props;
    const tableColumns = [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Last Name', accessor: 'lastName' },
      { Header: 'Age', accessor: 'age' }
    ];
    const tableDefaultPageSize = getQueryParam('pageSize') || 10;
    const page = Number(getQueryParam('page')) || 1;
    const tableData = [
      { name: 'Hamed', lastName: 'Navvabian', age: 1 },
      { name: 'Hamed', lastName: 'Navvabian', age: 2 },
      { name: 'Hamed', lastName: 'Navvabian', age: 3 },
      { name: 'Hamed', lastName: 'Navvabian', age: 4 },
      { name: 'Hamed', lastName: 'Navvabian', age: 5 },
      { name: 'Hamed', lastName: 'Navvabian', age: 6 },
      { name: 'Hamed', lastName: 'Navvabian', age: 7 },
      { name: 'Hamed', lastName: 'Navvabian', age: 8 },
      { name: 'Hamed', lastName: 'Navvabian', age: 9 },
      { name: 'Hamed', lastName: 'Navvabian', age: 10 },
      { name: 'Hamed', lastName: 'Navvabian', age: 11 },
      { name: 'Hamed', lastName: 'Navvabian', age: 12 },
      { name: 'Hamed', lastName: 'Navvabian', age: 13 },
      { name: 'Hamed', lastName: 'Navvabian', age: 14 },
      { name: 'Hamed', lastName: 'Navvabian', age: 15 },
      { name: 'Hamed', lastName: 'Navvabian', age: 16 },
      { name: 'Hamed', lastName: 'Navvabian', age: 17 },
      { name: 'Hamed', lastName: 'Navvabian', age: 18 },
      { name: 'Hamed', lastName: 'Navvabian', age: 19 },
      { name: 'Hamed', lastName: 'Navvabian', age: 20 },
      { name: 'Hamed', lastName: 'Navvabian', age: 21 },
      { name: 'Hamed', lastName: 'Navvabian', age: 22 }
    ];

    return (
      <Container>
        <Select data={[1,2,3,4]} optionalInput name="testSelect" onChange={selected => console.log(selected, 'selected inside select on test')}/>
        <Icon name="scooter-pin-status path1" type="urid" size={28} />
        <Icon name="close" size={28} />
        <div className="my-4">
          <Table
            data={tableData.slice((page - 1) * tableDefaultPageSize, page * tableDefaultPageSize)}
            columns={tableColumns}
            grayHeader
            evenOdd
            total={tableData.length}
            defaultPageSize={tableDefaultPageSize}
            showPagination
            language={language}
          />
        </div>
        <Stepper titles={titles} initialStep={4} ref={ref => this._stepper = ref} language={language} isDone={false}>
          <Step step={0}>
            This is step 0
          </Step>
          <Step step={1}>
            This is step 1
          </Step>
          <Step step={2}>
            This is step 2
          </Step>
          <Step step={3}>
            This is step 3
          </Step>
          <Step step={4}>
            This is step 4
          </Step>
        </Stepper>
        <Button size="lg" type="primary" onClick={this.handleClick}>
          <Text>2</Text>
        </Button>
      </Container>
    );
  }
}

export default connect(
  state => ({
    language: state.language
  })
)(withRouter(Test));

