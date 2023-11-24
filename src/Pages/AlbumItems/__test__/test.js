import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'
import AlbumItems from '../AlbumItems'

describe('AlbumItems', () => {
    test('renders correctly', () => {
        const component = renderer.create(<App />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    test('render albumItems', () => {
        const AlbumItemsComponent = renderer.create(<AlbumItems />)
        const tree = AlbumItemsComponent.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
