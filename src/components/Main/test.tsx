import { render, screen } from '@testing-library/react'

import { Main } from '.'

const main = render(<Main />)

describe('<Main />', () => {
  it('should render a heading', () => {
    const { container } = main

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
