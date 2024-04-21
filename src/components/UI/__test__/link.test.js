import { screen } from "@testing-library/react";
import LinkTest from '../link';
import renderWithRouterAndRedux from "../../../utils/test-utils/renderWithRouterAndRedux";

test('show correctly link', () => {
  renderWithRouterAndRedux(
    <LinkTest path={'/login'}>Log in</LinkTest>
  );
  expect(screen.getByText("Log in")).toBeInTheDocument();
  expect(screen.getByText("Log in").closest('a').href).toContain('/login');
});