import * as types from '../mutation-types'

const state = {
  root: {},
  data: {
    "/":[]
  }
}

const getters = {
  registryRoot: state => state.root,
  listFiles: (state, path) => {

  }
}

const actions = {}

const mutations = {
  [types.REGR__NEW_DIR](state, {name}){
    var path = name.split("/");
    if(path[0]==="")path.splice(0,1);
    var now = state.root;
    for(crumb of path){
      if(!(crumb in now.children)){
        Vue.set(now.children, crumb, { data:{}, children:{} })
      }
      now = now.children[crumb]
    }
  }

  [types.REGR__REMOVE_DIR](state, {name}){
    var path = name.split("/");
    if(path[0]==="")path.splice(0,1);
    var target = path.splice(-1);
    var ended = true;
    var now = state.root;
    for(crumb of path){
      now = now.children[crumb]
      if(now === undefined)break;
    }
    if(now !== undefined){
      delete now.children[target];
    }
    var toDelete = [];
    for(i in state.data)
      if(i.indexOf(name) in [0,1])
        toDelete.push(i);
    for(i in toDelete)
      delete state.data[toDelete[i]];
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
