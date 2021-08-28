import { render, screen } from '@testing-library/react'

import { Main } from '.'

const { container } = render(<Main />)

describe('<Main />', () => {
  it('should render a heading', () => {
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
