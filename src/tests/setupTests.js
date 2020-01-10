// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import DotENV from 'dotenv';
DotENV.config({ path: '.env.test' });