import userEvent from '@testing-library/user-event'
import { useForm, FormProvider } from 'react-hook-form';
import { render } from '@testing-library/react';

const renderWithReactHookForm = (ui, { defaultValues = {}, toPassBack = [] } = {})=>{
    let reactHookFormMethods = {};
  
    const Wrapper = ({ children }) => {
      const methods = useForm({ defaultValues });
      toPassBack.forEach(ele=>reactHookFormMethods[ele]=methods[ele]);
      return <FormProvider {...methods}>{children}</FormProvider>;
    };
  
    return {
      user: userEvent.setup(),
      ...render(ui, { wrapper: Wrapper }),
      reactHookFormMethods,
    };
}

export default renderWithReactHookForm