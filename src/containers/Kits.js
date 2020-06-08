import React from 'react';
import {
  Text,
  Button,
  Card,
  Toggle,
  Radio,
  TextInput,
  CheckBox,
  Select,
  DatePicker,
  Pagination,
  Container,
  Tabs,
  Tab,
  HintCard,
  Accordion,
  Stepper,
  Step, Uploader
} from '../components/kit';
import Lang from "./Lang";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Kits extends React.Component {

  state = {
    toggle: true
  };

  toggle = () => this.setState({ toggle: !this.state.toggle });

  render() {
    const { language } = this.props;
    const tabTitles = [
      { text: 'home.home', iconName: 'review-info' },
      { text: 'home.home', iconName: 'register' },
      { text: 'home.home', iconName: 'user' }
    ];
    const titles = ['home.home', 'home.home', 'about', 'form.username', 'form.gender'];

    return (
      <Container>
        <Uploader />
        <Tabs initialTab={0} titles={tabTitles}>
          <Tab tabIndex={0}>
            <HintCard article={<div>This is article</div>} aside={<div>this is aside</div>} />
          </Tab>
          <Tab tabIndex={1}>
            <Accordion title="home.home">
              <Text>home.home</Text>
            </Accordion>
          </Tab>
          <Tab tabIndex={2}>
            <Container>
              <Stepper titles={titles} initialStep={4} ref={ref => this._stepper = ref} language={language}
                       isDone={false}>
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
              <Button size="lg" type="primary" onClick={() => this._stepper.setStep(2)}>
                <Text>2</Text>
              </Button>
            </Container>
          </Tab>
        </Tabs>
        <div className="d-flex align-items-center justify-content-center m-5">
          <Pagination
            perPage={10}
            total={151}
          />
        </div>
        <div className="text-center">
          <DatePicker/>
        </div>
        <Container>
          <Select
            searchable
            data={['dog', 'pig', 'moose', 'cat', 'wolf', 'donkey', 'horse', 'jaguar']}
            title="home.newestProducts"
            placeholder="placeholder"
          />
        </Container>
        <Lang/>
        <Text type="h1">kits.main</Text>
        <div>
          <Button size="lg" type="primary" filled>
            <Text>kits.buttonTitle</Text>
          </Button>
          <Button size="lg" type="secondary" filled>
            <Text>kits.buttonTitle</Text>
          </Button>
          <Button size="lg" type="primary">
            <Text>kits.buttonTitle</Text>
          </Button>
          <Button size="lg" type="secondary">
            <Text>kits.buttonTitle</Text>
          </Button>
        </div>
        <div>
          <Button size="lg" type="primary" filled disabled>
            <Text>kits.buttonTitle</Text>
          </Button>
          <Button size="lg" type="secondary" filled disabled>
            <Text>kits.buttonTitle</Text>
          </Button>
          <Button size="lg" type="primary" disabled>
            <Text>kits.buttonTitle</Text>
          </Button>
          <Button size="lg" type="secondary" disabled>
            <Text>kits.buttonTitle</Text>
          </Button>
        </div>
        <div>
          <Button size="sm" type="primary" filled>
            <Text>kits.buttonTitle</Text>
          </Button>
          <Button size="sm" type="secondary" filled>
            <Text>kits.buttonTitle</Text>
          </Button>
          <Button size="sm" type="primary">
            <Text>kits.buttonTitle</Text>
          </Button>
          <Button size="sm" type="secondary">
            <Text>kits.buttonTitle</Text>
          </Button>
        </div>
        <div>
          <Button size="sm" type="primary" filled disabled>
            <Text>kits.buttonTitle</Text>
          </Button>
          <Button size="sm" type="secondary" filled disabled>
            <Text>kits.buttonTitle</Text>
          </Button>
          <Button size="sm" type="primary" disabled>
            <Text>kits.buttonTitle</Text>
          </Button>
          <Button size="sm" type="secondary" disabled>
            <Text>kits.buttonTitle</Text>
          </Button>
        </div>
        <div>
          <Card>
            <div style={{ width: 330, height: 140 }}/>
          </Card>
        </div>
        <div>
          <div style={{ width: 500, display: 'inline-block' }}>
            <TextInput title="home" placeholder="kits.main"/>
          </div>
          <div style={{ width: 500, display: 'inline-block' }}>
            <TextInput title="home" error="kits.inputError" disabled/>
          </div>
          <div style={{ width: 500, display: 'inline-block' }}>
            <TextInput value="..."/>
          </div>
          <div style={{ width: 500, display: 'inline-block' }}>
            <TextInput type="textarea"/>
          </div>
        </div>
        <div>
          <Toggle onClick={this.toggle} on={this.state.toggle}/>
          <Toggle on disabled/>
        </div>
        <br/><br/><br/>
        <div>
          <form action="">
            <Radio name="test1" title="hello"/>
            <Radio name="test2" title="home" checked/>
            <Radio name="test3" title="home" disabled/>
            <Radio name="test4" title="home" disabled checked/>
          </form>
        </div>
        <CheckBox title="hello"/>
        <CheckBox title="home" checked/>
        <CheckBox title="home" disabled/>
        <CheckBox title="home" disabled checked/>
      </Container>
    );
  }
}

export default connect(
  state => ({
    language: state.language
  })
)(withRouter(Kits));
