# react-formation

React-Formation is a npm package that handles forms. The package with generate the UI for the form and handle submission and form validation.

## Installation

You can install React-Formation with NPM, using the command:

```npm i @sizwe/react-formation```

After the package has been installed you can import it into your app.
```
import {
  FormContainer,
  Input,
  Label,
  Submit,
  Select,
  TextArea,
} from "@sizwe/react-formation";

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
      <FormContainer endpoint="example.com">
        <Input type="text" placeholder="Name" name="name" />
        <Label name="films" label="Saw" />
        <Input type="checkbox" label="Tired?" name="tired" />
        <Input type="radio" label="Radio" name="radio" />
        <Label name="places" label="Pick a place" />
        <Select
          name="places"
          optionArray={[
            ["pta", "Pretoria"],
            ["jhb", "Johannesburg"],
          ]}
        />
        <Label name="textarea" label="Write a message" />
        <TextArea name="message" placeholder="Write your message here" />
        <Submit />
      </FormContainer>
    </div>
  );
}

export default App;

```
1. The package can submit to a endpint by filling in endpoint prop on the FormContainer component,`<FormContainer endpoint="example.com">`
2. The form and its fields can be customized by passing in the styleObject prop: 
```
        <TextArea
          name="message"
          placeholder="write message here"
          styleObject={{ backgroundColor: "red" }}
        />
```
3. The package handles your form validations:
```
        <Input
          type="text"
          name="name"
          label="Name"
          required={true}
        />
```


