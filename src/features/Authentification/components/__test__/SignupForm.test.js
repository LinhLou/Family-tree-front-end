import SignupForm from "../SignupForm";
import renderWithRouterAndRedux from "../../../../utils/test-utils/renderWithRouterAndRedux";
import apiUser from "../../../../services/api/apiUser";
import apiUserMockedFaile from "../../../../services/api/__mocks__/apiUserMockedFailed";
import apiUserMockedSuccess from "../../../../services/api/__mocks__/apiUserMockedSuccess";
import { Modal } from "bootstrap";

jest.mock('bootstrap');

beforeEach(() => {
  Modal.mockClear();
});

test('show correctly all input of Sign up form',()=>{
  const {getByText, getByLabelText, queryAllByRole} = renderWithRouterAndRedux(<SignupForm/>);
  expect(getByLabelText("email")).toBeInTheDocument();
  expect(getByLabelText("username")).toBeInTheDocument();
  expect(getByLabelText("password")).toBeInTheDocument();
  expect(getByLabelText("repeat password")).toBeInTheDocument();
  expect(getByText("Sign up")).toBeInTheDocument();
  expect(queryAllByRole("error-message")).toHaveLength(0);

})

test("show correctly error message when validating form at client side",async()=>{

  const { user,getByText,getAllByText, getByLabelText }= renderWithRouterAndRedux(<SignupForm/>)
  const submitBtn = getByText('Sign up');

  await user.click(submitBtn);
  expect(getByText("email is required")).toBeInTheDocument();
  expect(getByText("username is required")).toBeInTheDocument();
  expect(getAllByText("password is required")).toHaveLength(2);

  await user.type(getByLabelText("email"),"example.cm");
  await user.click(submitBtn);
  expect(getByText('Invalid email')).toBeInTheDocument();

  await user.type(getByLabelText("password"),'124');
  await user.click(submitBtn);
  expect(getByText('Password must contain at least 5 characters')).toBeInTheDocument();

  await user.type(getByLabelText("password"),'12456');
  await user.type(getByLabelText("repeat password"),'1245');
  await user.click(submitBtn);
  expect(getByText('Invalid password')).toBeInTheDocument();
})

test("show correctly error message when sigup with email aldready registered", async ()=>{

  apiUser.signupUser = jest.fn().mockImplementationOnce(apiUserMockedFaile.signupUser);

  const { user,getByText, getByLabelText }= renderWithRouterAndRedux(<SignupForm/>)
  const submitBtn = getByText('Sign up');
  const emailInput = getByLabelText("email");
  const usernameInput = getByLabelText("username");
  const passwordInput = getByLabelText("password");
  const repeatPasswordInput = getByLabelText("repeat password");

  await user.type(emailInput, "example@gmail.com");
  await user.type(usernameInput, "example");
  await user.type(passwordInput, "12345");
  await user.type(repeatPasswordInput, "12345");
  await user.click(submitBtn);

  expect(getByText("This email is aldready registered!")).toBeInTheDocument()
})

test("show modal and link to login when signup successfully", async()=>{

  apiUser.signupUser = jest.fn().mockImplementationOnce(apiUserMockedSuccess.signupUser);

  const { user,getByText, getByLabelText }= renderWithRouterAndRedux(<SignupForm/>)
  const submitBtn = getByText('Sign up');
  const emailInput = getByLabelText("email");
  const usernameInput = getByLabelText("username");
  const passwordInput = getByLabelText("password");
  const repeatPasswordInput = getByLabelText("repeat password");


  await user.type(emailInput, "example@gmail.com");
  await user.type(usernameInput, "example");
  await user.type(passwordInput, "12345");
  await user.type(repeatPasswordInput, "12345");
  await user.click(submitBtn);

  const mockModalInstance = Modal.mock.instances[0];
  const mockModalShow = mockModalInstance.show;
  const argumentModalInstance = mockModalInstance.constructor.mock.calls[0][0];
  expect(Modal).toHaveBeenCalledTimes(1);
  expect(mockModalShow).toHaveBeenCalledTimes(1);
  expect(argumentModalInstance).toHaveTextContent('Your account has been successfully created!')
  expect(argumentModalInstance).toContainHTML('<a class="link-primary fs-6" href="/login"><p data-bs-dismiss="modal">Log in</p></a>')

})