import React from 'react'
import { mount } from 'enzyme'
import Footer from '../../components/Footer'

describe('<Footer/>', () => {
    const footer = mount( < Footer / > );

    test('Render FooterComponent ', () => {

        expect(footer.length).toEqual(1);
    });

    test('Render msg ', () => {
        expect(footer.find(".Footer a").text).toEqual("by Antonio Bielma")
    })



});