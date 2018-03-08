const mirrorKeys = (obj) => {
    const res = {};
    Object.keys(obj).forEach((key) => {
        res[key] = key;
    });
    return res;
};

export const ACTIONS = mirrorKeys({
    GET_CONTENT_TYPES: null,
    GET_OVERVIEW_CONTENT: null,
    GET_PORTFOLIO_CONTENT: null,
    GET_VIDEO_CONTENT: null
});