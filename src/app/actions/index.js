import { ACTIONS } from '../enums';

import contentCreator from './content';

export default (dispatch) => ({
    ...contentCreator(dispatch)
});