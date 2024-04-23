import renderWithRouterAndRedux from "../../../../utils/test-utils/renderWithRouterAndRedux";
import VerifyEmailForm from "../VerifyEmailForm";
import apiUser from "../../../../services/api/apiUser";
import apiUserMockedFaile from "../../../../services/api/__mocks__/apiUserMockedFailed"
import apiUserMockedSuccess from "../../../../services/api/__mocks__/apiUserMockedSuccess";
import { Modal } from "bootstrap";

jest.mock('bootstrap');
beforeEach(() => {
  Modal.mockClear();
});

test('show correctly email input and button submit in verify form', ()=>{
  const { getByLabelText, getByText,queryByRole } = renderWithRouterAndRedux(<VerifyEmailForm/>);

  expect(getByLabelText('email')).toBeInTheDocument();
  expect(getByText('Send')).toBeInTheDocument();
  expect(queryByRole('error-message')).not.toBeInTheDocument();
})

test('show success modal when submited successfully', async()=>{
  apiUser.verifyEmail = jest.fn().mockImplementationOnce(apiUserMockedSuccess.verifyEmail);
  const { user, getByLabelText, getByText } = renderWithRouterAndRedux(<VerifyEmailForm/>);

  const emailInput =  getByLabelText('email');
  const sendBtn = getByText('Send');

  await user.type(emailInput,'example@gm.com');
  await user.click(sendBtn);
  const mockModalInstance = Modal.mock.instances[0];
  const mockModalShow = mockModalInstance.show;
  const argumentModalInstance = mockModalInstance.constructor.mock.calls[0][0];
  expect(Modal).toHaveBeenCalledTimes(1)
  expect(mockModalShow).toHaveBeenCalledTimes(1);
  expect(argumentModalInstance).toHaveTextContent("A link has been sent to your email to reset your password!");
})

test('show failed modal when submited failed', async()=>{
  apiUser.verifyEmail = jest.fn().mockImplementationOnce(apiUserMockedFaile.verifyEmail);
  const { user, getByLabelText, getByText } = renderWithRouterAndRedux(<VerifyEmailForm/>);

  const emailInput =  getByLabelText('email');
  const sendBtn = getByText('Send');

  await user.type(emailInput,'example@gm.com');
  await user.click(sendBtn);

  const mockModalInstance = Modal.mock.instances[0];
  const mockModalShow = mockModalInstance.show;
  const argumentModalIntance = mockModalInstance.constructor.mock.calls[0][0];
  expect(Modal).toHaveBeenCalledTimes(1);
  expect(mockModalShow).toHaveBeenCalledTimes(1);
  expect(argumentModalIntance).toHaveTextContent('Server connection error!')

})