import React from "react";
import { storiesOf } from "@storybook/react";
import {
  FormContainer,
  Input,
  Label,
  Submit,
  Select,
  TextArea,
} from "../components/Formation";
import "../index.css";
const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return (
    <>
      <FormContainer endpoint="example.com">
        <Input type="text" placeholder="Name" name="name" />
        <Label name="big car" label="Car" />
        <Input type="checkbox" label="Cars" name="Big car" />
        <Input type="radio" label="Figures" name="Middle Finger" />
        <Label name="places" label="Pick A place you'd like to visit" />
        <Select
          name="places"
          optionArray={[
            ["pta", "Pretoria"],
            ["jhb", "Johannesburg"],
          ]}
        />
        <Label name="textarea" label="write us a message" />
        <TextArea name="message" placeholder="Write message" />
        <Submit />
      </FormContainer>
    </>
  );
});
