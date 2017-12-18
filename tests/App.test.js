import { shallow } from 'vue-test-utils';
import App from '../src/components/App';

describe('App.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(App, { // Create a shallow instance of the component
      data: {}
    });
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot();
  });
});
