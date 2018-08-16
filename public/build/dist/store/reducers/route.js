import { LOCATION_CHANGE } from 'react-router-redux';
var initialState = {
    location: null
};
export default (function (state, action) {
    if (state === void 0) { state = initialState; }
    if (action.type === LOCATION_CHANGE) {
        return { location: action.payload };
    }
    return state;
});
//# sourceMappingURL=route.js.map