<template>
<section class="register">
  <section class="register-hierarchy">
    <hierarchy-view
      path="/" :tree-data="treeData"
      @chdir="chdir" :cwd="cwd"
    ></hierarchy-view>
  </section>
  <section class="register-grid">
    <data-grid
      :keys="['name','type','data']"
      :data="gridData[cwd]"
      :operations="[{msg:'startEditing',tip:'edit'}]"
      @startEditing="startEditing"
    ></data-grid>
  </section>
  <input-line
    :init="editInit"
    :showing="editing"
  ></input-line>
</section>
</template>

<script>
import HierarchyView from './HierarchyView.vue'
import DataGrid from './DataGrid.vue'
import InputLine from './InputLine.vue'
import { mapGetters, mapMutations } from 'vuex'
import * as types from '../store/mutation-types'

export default {
  components: {
    'hierarchy-view': HierarchyView,
    'data-grid': DataGrid,
    'input-line': InputLine
  },
  data: function(){
    return {
      cwd: "/",
      stage: [],
      editInit: "",
      gridData: {
        "/":{
          "a":{
            name:"a",
            type:"bad",
            data:"l"
          }
        }
      },
      treeData: {
        xx:{},
        mm:{}
      }
    }
  },
  computed: {
    editing:function(){
      return this.stage[0] == 'editing'
    },
    ...mapGetters({
      registry: 'registryRoot'
    })
  },
  methods: {
    chdir (path){
      this.cwd = path
    },
    startEditing ({name,data}){
      this.editInit = data
      this.stage = ['editing', this.cwd, name]
    },
    endInputLine (content){
      switch(this.stage[0]){
        case 'editing':
          this.gridData[this.stage[1]][this.stage[2]].data=content
      }
    },
    ...mapMutations({
      addKeyGroup:types.REGR__NEW_DIR,
      removeKeyGroup:types.REGR__REMOVE_DIR,
      addKey:types.REGR__NEW_FILE,
      editKey:types.REGR__EDIT_FILE,
      removeKey:types.REGR__REMOVE_FILE
    })
  }
}
</script>

<style lang="scss">
  .register {
    .register-hierarchy {
      position:fixed;
      left:0px;
      top:50px;
      width:260px;
      height:100%;
      overflow-y: scroll;
    }

    .register-grid {
      position:relative;
      margin-left: 280px;
    }
  }
</style>
