## React Testing Tutorial - 16 - What to test

### _What to test?_

1. Test component renders
2. Test component renders with props
3. Test component renders in different states
4. Test component reacts to events

### _What not to test?_

1. Implementation details
2. Third party code
3. Code that is not important from a user point of view

## React Testing Tutorial - 17 - RTL Queries

### _RTL Queries_

- Every test we write generally involves the following basic steps
  1. Render the component
  2. Find an element rendered by the component
  3. Assert against the element found in step 2 which will pass or fail the test

To render the component, we use the render method from RTL
For assertion, we use expect passing in a value and combine it with a matcher function from jest or jest-dom
Queries are the methods that Testing Library provides to find elements on the page.

To find a single element on the page, we have

- getBy..
- queryBy..
- findBy..

To find multiple elements on the page, we have

- getAllBy..
- queryAllBy..
- findAllBy..

> The two dots at the end of each represent needs to be followed by the suffix.

The suffix can be one of Role, LabelText, PlaceHolderText, Text, DisplayValue, AltText, Title, and finally TestId.

### _getBy... queries_

> getBy.. class of queries return the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found.

## React Testing Tutorial - 18 - getByRole

### _getByRole_

> getByRole queries for elements with the given role

Role refers to the ARIA (Accessible Rich Internet Applications) role which provides semantic meaning to content to ensure people using assistive technologies are able to use them.

By default, many semantic elements in HTML have a role.

If you're working with elements that do not have a default role or if you want to specify a different role, the role attribute can be used to add the desired role.

> To use an anchor element as a button in the navbar, you can add role='button'.

```js
const jobLocationElement = screen.getByRole("combobox");
expect(jobLocationElement).toBeInTheDocument();
```

## React Testing Tutorial - 19 - getByRole Options

### _getByRole Options_

_name_

The accessible name is for simple cases equal to

1. the label of a form element
2. the text content of a button or
3. the value of the aria-label attribute

Other Options that can be used:

- name
- level
- hidden
- selected
- checked

```js
const nameElement = screen.getByRole("textbox", {
  name: "Name",
});
expect(nameElement).toBeInTheDocument();
```

## React Testing Tutorial - 20 - getByLabelText

### _getByLabelText_

getByLabelText will search for the label that matches the given text, then fin dthe element associated with that label.

```js
const nameElement2 = screen.getByLabelText("Name");
expect(nameElement2).toBeInTheDocument();
```

## React Testing Tutorial - 21 - getByPlaceholderText

### _getByPlaceholderText_

getByPlaceholderText will search for all elements with a placeholder attribute and find one that matches the given text.

```js
const nameElement3 = screen.getByPlaceholderText("Fullname");
expect(nameElement3).toBeInTheDocument();
```

## React Testing Tutorial - 22 - getByText

### _getByText_

getByText will search for all elements that have a text node with textContent matching the given text.

Typically, you'd use this to find paragraph, div or span elements.

```js
const paragraphElement = screen.getByText("All fields are mandatory");
expect(paragraphElement).toBeInTheDocument();
```

## React Testing Tutorial - 23 - getByDisplayValue

### _getByDisplayValue_

getByDisplayValue returns the input, textarea, or select element that has the matching display value.

```ts
const nameElement4 = screen.getByDisplayValue("John Doe");
expect(nameElement4).toBeInTheDocument();
```

## React Testing Tutorial - 24 - getByAltText

### _getByAltText_

getByAltText will return the element that has the given alt text

```js

```
