import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { Form } from '../Form';

afterEach(cleanup)

test('Form test', async () => {
    const { getByRole, getByLabelText, getByText } = render(<Form />)
    const usernameInput = getByLabelText('Username')
    const passwordInput = getByLabelText('Password')
    const submit = getByRole('button', {name: 'Submit'})
    expect(usernameInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submit).toBeInTheDocument()

    fireEvent.change(usernameInput, { target: { value: 'John' } })
    expect(usernameInput.value).toBe('John')

    fireEvent.change(passwordInput, { target: { value: 'Chon' } })
    expect(passwordInput.value).toBe('Chon')

    fireEvent.click(submit)

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

    fireEvent.change(usernameInput, { target: { value: 'John' } })
    expect(usernameInput.value).toBe('John')

    fireEvent.change(passwordInput, { target: { value: 'fail' } })
    expect(passwordInput.value).toBe('fail')

    fireEvent.click(submit)

    await waitFor(() => getByText('Error'))
   
})
