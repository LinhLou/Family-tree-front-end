import renderWithRouterAndRedux from "../../../../utils/test-utils/renderWithRouterAndRedux";
import ResetPasswordForm from "../ResetPasswordForm";
import apiUser from "../../../../services/api/apiUser";
import apiUserMockedFailed from '../../../../services/api/__mocks__/apiUserMockedFailed';
import apiUserMockedSuccess from "../../../../services/api/__mocks__/apiUserMockedSuccess";
import { Modal } from 'bootstrap';

jest.mock('bootstrap')

beforeEach(() => {
  Modal.mockClear();
});

test('show correctly all input in the Reset Password Form',()=>{
  const { getByText, getByLabelText } = renderWithRouterAndRedux(<ResetPasswordForm/>)
  expect(getByLabelText("password")).toBeInTheDocument()
  expect(getByLabelText("repeat password")).toBeInTheDocument()
  expect(getByText("Send")).toBeInTheDocument()
})

test("show correctly message error when validating form at client side", async()=>{

  const { user, getAllByText, getByText, getByLabelText } = renderWithRouterAndRedux(<ResetPasswordForm/>)
  const resetBtn = getByText("Send")
  const passwordInput = getByLabelText("password")
  const repeatPasswordInput = getByLabelText("repeat password")

  await user.click(resetBtn)
  expect(getAllByText("password is required")).toHaveLength(2)


  await user.type(passwordInput, '1234')
  await user.type(repeatPasswordInput, '12345')
  await user.click(resetBtn)
  expect(getByText("Password must contain at least 5 characters")).toBeInTheDocument()

  await user.type(passwordInput, '123456')
  await user.type(repeatPasswordInput, '12345')
  await user.click(resetBtn)
  expect(getByText("Invalid password")).toBeInTheDocument()
  expect(Modal).not.toHaveBeenCalled();
})


test("show success modal when submit successfully", async()=>{

  apiUser.resetPassword = jest.fn().mockImplementationOnce(apiUserMockedSuccess.resetPassword)
  
  const { user, getByText, getByLabelText } = renderWithRouterAndRedux(<ResetPasswordForm/>);
  const resetBtn = getByText("Send");
  const passwordInput = getByLabelText("password");
  const repeatPasswordInput = getByLabelText("repeat password");

  await user.type(passwordInput, '123456')
  await user.type(repeatPasswordInput, '123456')
  await user.click(resetBtn)
  expect(Modal).toHaveBeenCalledTimes(1);
  const mockModalInstance = Modal.mock.instances[0];
  const mockShow = mockModalInstance.show;
  const argumentOfConstructor = mockModalInstance.constructor.mock.calls[0][0];
  expect(mockShow).toHaveBeenCalled();
  expect(mockShow).toHaveBeenCalledTimes(1);
  expect(argumentOfConstructor).toHaveTextContent("Your password has been successfully reset!")

})

test("show failed modal when submit failed", async()=>{

  apiUser.resetPassword = jest.fn().mockImplementationOnce(apiUserMockedFailed.resetPassword);
  
  const { user, getByText, getByLabelText } = renderWithRouterAndRedux(<ResetPasswordForm/>)
  const resetBtn = getByText("Send")
  const passwordInput = getByLabelText("password")
  const repeatPasswordInput = getByLabelText("repeat password");

  await user.type(passwordInput, '123456');
  await user.type(repeatPasswordInput, '123456');
  await user.click(resetBtn);
  expect(Modal).toHaveBeenCalledTimes(1);
  const mockModalInstance = Modal.mock.instances[0];
  const mockShow = mockModalInstance.show;
  const argumentOfConstructor = mockModalInstance.constructor.mock.calls[0][0];
  expect(mockShow).toHaveBeenCalled();
  expect(mockShow).toHaveBeenCalledTimes(1);
  expect(argumentOfConstructor).toHaveTextContent("Server connection error!");

})