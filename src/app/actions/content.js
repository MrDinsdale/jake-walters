import { ACTIONS } from '../enums';
import { createClient, getEntries } from 'contentful'

const client = createClient({
    space: 'ma9u86wyitvr',
    accessToken: '43025ec1d81e816e508b5fb4f81bbb13747b20fd6201937ff6ee7c6cc9099c75'
});

const fetchCustomType = (action, type, dispatch) => {
    client.getEntries({ 'content_type': type }).then(entries => {
        entries.items.forEach(entry => {
            if(entry.fields) {
                return dispatch({
                    type: action,
                    data: entry.fields
                });
            }
            return null;
        });
    })
}

export default (dispatch) => ({
    getContentTypes: () => {
        Promise.all([
            fetchCustomType(ACTIONS.GET_OVERVIEW_CONTENT, 'overview', dispatch),
            fetchCustomType(ACTIONS.GET_PORTFOLIO_CONTENT, 'portfolioCollection', dispatch),
            fetchCustomType(ACTIONS.GET_VIDEO_CONTENT, 'motionCollection', dispatch)
        ]).then(() => {
            return dispatch({
                type: ACTIONS.GET_CONTENT_TYPES,
                data: null
            })
        })
    }
});
