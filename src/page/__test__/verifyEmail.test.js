import renderWithRouterAndRedux from "../../utils/test-utils/renderWithRouterAndRedux";
import VerifyEmail from "../verifyEmail";

test('show correctly verify email page', ()=>{
  const { getByLabelText, getByText } = renderWithRouterAndRedux(<VerifyEmail />);

  expect(getByLabelText("email")).toBeInTheDocument();
  expect(getByText("Send")).toBeInTheDocument();
  expect(getByText("Reset your password")).toBeInTheDocument();
  expect(getByText("Enter your email address and we will send you instructions to reset your password.")).toBeInTheDocument();
})