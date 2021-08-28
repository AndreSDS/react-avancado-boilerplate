import { render, screen } from '@testing-library/react'

import { Button } from '.'

const { container } = render(<Button />)

describe('<Button />', () => {
  it('should render a heading', () => {
    expect(
      screen.getByRole('heading', { name: /Olá Button/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
