import {combineReducers} from'redux'

import NavMeun from './NavMeun'
import interNet from './interNet'
import resize from './resize'
//合并reducers
const index =combineReducers({
    NavMeun,
    interNet,
    resize
});

export default index