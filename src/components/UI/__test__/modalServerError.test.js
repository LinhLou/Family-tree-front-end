import { render } from "@testing-library/react";
import ModalServerError from "../modalServerError";

test('show correctly modal',()=>{
  const {getByTestId}=render(
    <ModalServerError />
  )
  expect(getByTestId('modalServerError')).toBeInTheDocument()
  expect(getByTestId('modalServerError').textContent).toContain('Server connection error!')
})