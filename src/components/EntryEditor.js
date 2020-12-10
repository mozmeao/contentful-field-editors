import * as React from "react";
import {
  TextInput,
  Textarea,
  DisplayText,
  Paragraph,
  SectionHeading,
  FieldGroup,
  RadioButtonField,
  Typography,
} from "@contentful/forma-36-react-components";
import "@contentful/forma-36-react-components/dist/styles.css";
import "@contentful/forma-36-fcss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.sdk.entry.fields.title.getValue(),
      body: props.sdk.entry.fields.body.getValue(),
      abstract: props.sdk.entry.fields.abstract.getValue(),
      hasAbstract: props.sdk.entry.fields.hasAbstract.getValue(),
    };
  }

  onTitleChangeHandler = (event: React.ChangeEvent) => {
    this.props.sdk.entry.fields.title.setValue(event.target.value);
  };

  onBodyChangeHandler = (event: React.ChangeEvent) => {
    this.props.sdk.entry.fields.body.setValue(event.target.value);
  };

  onAbstractChangeHandler = (event: React.ChangeEvent) => {
    this.props.sdk.entry.fields.abstract.setValue(event.target.value);
  };

  onHasAbstractChangeHandler = (event: React.ChangeEvent) => {
    const hasAbstract = event.target.value === "yes";
    this.setState({ hasAbstract });
    this.props.sdk.entry.fields.hasAbstract.setValue(hasAbstract);
  };

  render() {
    return (
      <div className="f36-margin--l">
        <Typography>
          <DisplayText>Entry extension demo</DisplayText>
          <Paragraph>
            This demo uses a single UI Extension to render all UI for an entry.
          </Paragraph>
          <SectionHeading>Title</SectionHeading>
          <TextInput
            onChange={this.onTitleChangeHandler}
            value={this.state.title}
          />
          <SectionHeading>Body</SectionHeading>
          <Textarea
            onChange={this.onBodyChangeHandler}
            value={this.state.body}
          />
          <SectionHeading>Has abstract?</SectionHeading>
          <FieldGroup row={false}>
            <RadioButtonField
              labelText="Yes"
              checked={this.state.hasAbstract}
              value="yes"
              onChange={this.onHasAbstractChangeHandler}
              name="abstractOption"
              id="yesCheckbox"
            />
            <RadioButtonField
              labelText="No"
              checked={!this.state.hasAbstract}
              value="no"
              onChange={this.onHasAbstractChangeHandler}
              name="abstractOption"
              id="noCheckbox"
            />
          </FieldGroup>
        </Typography>
        {this.state.hasAbstract && (
          <Typography>
            <SectionHeading>Abstract</SectionHeading>
            <Textarea
              onChange={this.onAbstractChangeHandler}
              value={this.state.abstract}
            />
          </Typography>
        )}
      </div>
    );
  }
}

export default App;
