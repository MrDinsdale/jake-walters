import { ACTIONS } from '../enums';
import pathOr from 'ramda/src/pathOr';

const initialState = {};

// const transformType = ( data, type = 'images' ) => {
//     const media = pathOr('undefined', [ type ], data);
//     const name = pathOr('undefined', [ 'title', '0', 'text' ], data);

//     return (type === 'video_url') ?
//         { video: transformVideoData(media), name } :
//         { images: media, name };
// }

// const transformVideoData = ( data ) => {
//     let formattedData = {
//         embed_url: data.embed_url,
//         html: data.html,
//         thumbnail_url: data.thumbnail_url,
//         title: data.title
//     };

//     return formattedData;
// };

// const transformSingletonContent = ( data, type ) => {
//     return transformType(pathOr('undefined', [ 'data', '0', 'data' ], data), type);
// };

// const transformRepeatableContent = ( data, type ) => {
//     let sectionContent = [];

//     if (data.data) {
//         data.data.map((item, index) => {
//             sectionContent.push(transformType(item.data, type));
//         });
//     }

//     return sectionContent;
// };

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_CONTENT_TYPES:
            return { ...state }
        // case ACTIONS.GET_OVERVIEW_CONTENT:
        //     return { ...state, content: { ...state.content, overview: transformSingletonContent(action) } }
        // case ACTIONS.GET_PORTFOLIO_CONTENT:
        //     return { ...state, content: { ...state.content, portfolios: transformRepeatableContent(action) } }
        // case ACTIONS.GET_VIDEO_CONTENT:
        //     return { ...state, content: { ...state.content, videos: transformRepeatableContent(action, 'video_url') } }
    default:
        return state;
    }
};
