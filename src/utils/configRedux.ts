//#region State

import {PayloadAction} from '@reduxjs/toolkit';

/* The `interface DefaultStateProps` defines the structure of an object that represents the state of an
application. It has three properties: */
export interface DefaultStateProps {
  isLoading: boolean;
  isError: boolean;
  response: any;
}
/* The line `const DefaultState: DefaultStateProps = { isLoading: false, isError: false, response:
undefined };` is creating a constant variable named `DefaultState` and assigning it an object value. */
const DefaultState: DefaultStateProps = {
  isLoading: false,
  isError: false,
  response: undefined,
};
/**
 * The function sets the initial state with isLoading set to true, isError set to false, and response
 * set to undefined.
 * @param {DefaultStateProps} state - The `state` parameter is an object that represents the current
 * state of the application. It typically contains various properties and their corresponding values.
 * @returns an object that includes the properties of the input state object, as well as additional
 * properties `isLoading`, `isError`, and `response`. The values of `isLoading` and `isError` are set
 * to `true` and `false` respectively, and the value of `response` is set to `undefined`.
 */
const DefaultStateStart = (state: DefaultStateProps) => {
  return {
    ...state,
    isLoading: true,
    isError: false,
    response: undefined,
  };
};
/**
 * The function `DefaultStateCancel` returns a new state object by merging the existing state with a
 * default state.
 * @param {DefaultStateProps} state - The `state` parameter is an object that represents the current
 * state of the application.
 * @returns a new object that combines the properties of the input state object and the DefaultState
 * object.
 */
const DefaultStateCancel = (state?: DefaultStateProps) => {
  return {
    ...state,
    ...DefaultState,
  };
};
/**
 * The function takes in a state object and a value, and returns a new state object with isLoading and
 * isError set to false, and the response set to the given value.
 * @param {DefaultStateProps} state - The `state` parameter is an object that represents the current
 * state of the application. It typically contains various properties that store data or flags related
 * to the state of the application.
 * @param {any} value - The "value" parameter in the above code represents the value that will be
 * assigned to the "response" property in the returned object. It can be any data type or value that
 * you want to assign to the "response" property.
 * @returns an object with the following properties:
 */
const DefaultStateSuccess = (state: DefaultStateProps, value: any) => {
  return {
    ...state,
    isLoading: false,
    isError: false,
    response: value,
  };
};
/**
 * The function `DefaultStateError` updates the state object by setting `isLoading` to false, `isError`
 * to true, and `response` to the provided value.
 * @param {DefaultStateProps} state - The `state` parameter is an object that represents the default
 * state of a component or application. It typically contains properties such as `isLoading`,
 * `isError`, and `response` that are used to manage the state of an asynchronous operation, such as
 * fetching data from an API.
 * @param {any} value - The `value` parameter in the `DefaultStateError` function represents the error
 * response value that will be stored in the `response` property of the state object.
 * @returns an object with the following properties:
 */
const DefaultStateError = (state: DefaultStateProps, value: any) => {
  return {
    ...state,
    isLoading: false,
    isError: true,
    response: value,
  };
};

/* The `reducerDefault` constant is an object that defines different functions for handling different
actions in a Redux reducer. Each property of the object represents a specific action type, and the
corresponding value is a function that updates the state based on that action. */
const reducerDefault = {
  start: (state: any) => DefaultStateStart(state),
  cancel: () => DefaultStateCancel(),
  success: (state: DefaultStateProps, action: PayloadAction<any>) =>
    DefaultStateSuccess(state, action.payload),
  error: (state: DefaultStateProps, action: PayloadAction<any>) =>
    DefaultStateError(state, action.payload),
};

/* The line `export const State = { ... }` is exporting an object named `State` that contains several
properties. Each property represents a different state of the application and is assigned a
corresponding function. */
export const State = {
  Default: DefaultState,
  Start: DefaultStateStart,
  Cancel: DefaultStateCancel,
  Success: DefaultStateSuccess,
  Error: DefaultStateError,
};
export const Reducers = {
  Default: reducerDefault,
};
//#endregion State
