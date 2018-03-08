import { ACTIONS } from '../enums';

import Prismic from 'prismic-javascript';
import PrismicConfiguration from '../../../prismic-configuration';

// const fetchContentType = (dispatch, contentType, action) => {
//     Prismic.api(PrismicConfiguration.apiEndpoint).then(api => {
//         api.query([
//             Prismic.Predicates.at('document.type', contentType)
//         ]).then(function(response) {
//             dispatch({
//                 type: action,
//                 data: response.results
//             });
//         });
//     });
// }

export default (dispatch) => ({
    getContentTypes: () => {
        Prismic.api(PrismicConfiguration.apiEndpoint).then(function(api) {
            return api.query([
                Prismic.Predicates.at('document.type', 'portfolio_collection'),
                { 'fetchLinks' : 'portfolio.images' }
            ]);
        }).then(function(response) {
            console.log(response);
            dispatch({
                type: ACTIONS.GET_CONTENT_TYPES,
                data: response.results
            });
        });
    },

    // getOverviewContent: () => {
    //     fetchContentType( dispatch, 'overview', ACTIONS.GET_OVERVIEW_CONTENT );
    // },

    // getPortfolioContent: () => {
    //     fetchContentType( dispatch, 'portfolio', ACTIONS.GET_PORTFOLIO_CONTENT );
    // },

    // getVideoContent: () => {
    //     fetchContentType( dispatch, 'video', ACTIONS.GET_VIDEO_CONTENT );
    // }
});