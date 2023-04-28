import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from './App'

describe('App start', () => {
    test('renders learn react link', () => {
        render(<App />)
        const linkElement = screen.getByText(/huashengdong.com/i)
        expect(linkElement).toBeInTheDocument()
    })

    test('renders correctly', () => {
        const component = renderer.create(<App />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
