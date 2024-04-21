import { render } from "@testing-library/react";
import Modal from "../modal";

test('show correctly modal',()=>{
  const {getByText, getAllByRole}=render(
    <Modal>
      This is a modal!
    </Modal>
  )
  expect(getByText('This is a modal!')).toBeInTheDocument()
  expect(getAllByRole('button')[0]).toHaveAttribute('data-bs-dismiss')
  expect(getAllByRole('button')[1]).toHaveAttribute('data-bs-dismiss')
})