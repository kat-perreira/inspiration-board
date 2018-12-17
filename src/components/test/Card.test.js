import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(
      <Card
      text="this is test text string"
      emoji="test emoji"
      />);

      expect(wrapper).toMatchSnapshot();
    });


    test('renders without crashing even with no text or emoji data', () => {

      const wrapper = shallow(
        <Card
        text=""
        emoji=""
        deleteCardCallback={() => {}}
        />);

        expect(wrapper).toMatchSnapshot();
      });





    });
