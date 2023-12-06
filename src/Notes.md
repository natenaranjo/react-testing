## React Testing Tutorial - 16 - What to test

### What to test?

1. Test component renders
2. Test component renders with props
3. Test component renders in different states
4. Test component reacts to events

### What not to test?

1. Implementation details
2. Third party code
3. Code that is not important from a user point of view

## React Testing Tutorial - 17 - RTL Queries

### RTL Queries

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

### getBy... queries

> getBy.. class of queries return the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found.

## React Testing Tutorial - 18 - getByRole

### getByRole

> getByRole queries for elements with the given role

Role refers to the ARIA (Accessible Rich Internet Applications) role which provides semantic meaning to content to ensure people using assistive technologies are able to use them.

By default, many semantic elements in HTML have a role.

If you're working with elements that do not have a default role or if you want to specify a different role, the role attribute can be used to add the desired role.

> To use an anchor element as a button in the navbar, you can add role='button'.

## React Testing Tutorial - 19 - getByRole Options

### getByRole Options

name // underline this.

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

## React Testing Tutorial - 20 - getByLabelText

### getByLabelText
