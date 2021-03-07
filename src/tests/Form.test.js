import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { Form } from '../Form';
import userEvent from '@testing-library/user-event'


afterEach(cleanup)

test('Form test', async () => {
    const { getByRole, getByLabelText, getByText } = render(<Form />)
    const usernameInput = getByLabelText('Username')
    const passwordInput = getByLabelText('Password')
    const submit = getByRole('button', {name: 'Submit'})
    expect(usernameInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submit).toBeInTheDocument()

    userEvent.type(usernameInput,'John')
    expect(usernameInput).toHaveValue('John')

    userEvent.type(passwordInput,'Chon')
    expect(passwordInput).toHaveValue('Chon')

    userEvent.click(submit)

    await waitFor(() => getByText('John'))
    await waitFor(() => getByText('Chon'))


})

test('Form test error', async () => {
    const { getByRole, getByLabelText, getByText } = render(<Form />)
    const usernameInput = getByLabelText('Username')
    const passwordInput = getByLabelText('Password')
    const submit = getByRole('button', {name: 'Submit'})
    expect(usernameInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submit).toBeInTheDocument()

    userEvent.type(usernameInput,'John')
    expect(usernameInput).toHaveValue('John')

    userEvent.type(passwordInput,'fail')
    expect(passwordInput).toHaveValue('fail')

    userEvent.click(submit)

    await waitFor(() => getByText('Error'))
   
})
