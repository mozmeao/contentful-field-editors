import React, { useState } from 'react';
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

function EntryEditor({sdk: {entry: {fields}}}) {
  const [title] = useState(fields.title.getValue());
  const [body] = useState(fields.body.getValue());
  const [abstract] = useState(fields.abstract.getValue());
  const [hasAbstract, setHasAbstract] = useState(fields.hasAbstract.getValue());

  const onTitleChangeHandler = (event: React.ChangeEvent) => {
    fields.title.setValue(event.target.value);
  };

  const onBodyChangeHandler = (event: React.ChangeEvent) => {
    fields.body.setValue(event.target.value);
  };

  const onAbstractChangeHandler = (event: React.ChangeEvent) => {
    fields.abstract.setValue(event.target.value);
  };

  const onHasAbstractChangeHandler = (event: React.ChangeEvent) => {
    const hasAbstract = event.target.value === "yes";
    setHasAbstract(hasAbstract);
    fields.hasAbstract.setValue(hasAbstract);
  };


  return (
    <div className="f36-margin--l">
      <Typography>
        <DisplayText>Entry extension demo</DisplayText>
        <Paragraph>
          This demo uses a single UI Extension to render all UI for an entry.
          </Paragraph>
        <SectionHeading>Title</SectionHeading>
        <TextInput
          onChange={onTitleChangeHandler}
          value={title}
        />
        <SectionHeading>Body</SectionHeading>
        <Textarea
          onChange={onBodyChangeHandler}
          value={body}
        />
        <SectionHeading>Has abstract?</SectionHeading>
        <FieldGroup row={false}>
          <RadioButtonField
            labelText="Yes"
            checked={hasAbstract}
            value="yes"
            onChange={onHasAbstractChangeHandler}
            name="abstractOption"
            id="yesCheckbox"
          />
          <RadioButtonField
            labelText="No"
            checked={!hasAbstract}
            value="no"
            onChange={onHasAbstractChangeHandler}
            name="abstractOption"
            id="noCheckbox"
          />
        </FieldGroup>
      </Typography>
      {hasAbstract && (
        <Typography>
          <SectionHeading>Abstract</SectionHeading>
          <Textarea
            onChange={onAbstractChangeHandler}
            value={abstract}
          />
        </Typography>
      )}
    </div>
  )
}

export default EntryEditor;
