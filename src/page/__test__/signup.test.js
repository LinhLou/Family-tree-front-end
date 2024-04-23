import renderWithRouterAndRedux from "../../utils/test-utils/renderWithRouterAndRedux";
import Signup from "../signup";

test("show correctly sign up page", ()=>{
  const { getByLabelText, getByText, getByRole } = renderWithRouterAndRedux(<Signup />);

  expect(getByLabelText('email')).toBeInTheDocument();
  expect(getByLabelText('username')).toBeInTheDocument();
  expect(getByLabelText('password')).toBeInTheDocument();
  expect(getByLabelText('repeat password')).toBeInTheDocument();
  expect(getByText("Sign up")).toBeInTheDocument();
  expect(getByText("Already registered?")).toBeInTheDocument();
  expect(getByRole("linkToLogin").closest('a').href).toContain('/login');
  
})