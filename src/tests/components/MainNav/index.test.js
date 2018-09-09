import { shallow } from 'enzyme';
import MainNav from '../../../components/MainNav';

describe('MainNav', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MainNav />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});