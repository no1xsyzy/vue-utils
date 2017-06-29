<template>
  <ul class="hierarchy-view" :class="{
    'branch':hasChildren,
    'leaf':!hasChildren,
    'collapsed':hasChildren&&collapsed,
    'expanded':hasChildren&&!collapsed,
    'workingDir':isWorking
  }">
    <li><span class="toggler" @click="toggleCollapse"></span>
      <span class="path" @click="$emit('chdir',path)">{{ path }}</span></li>
    <div v-show="hasChildren && !collapsed">
      <hierarchy-view
        v-for="(child, subpath) in treeData"
        :tree-data="child"
        :path="path+subpath+'/'"
        :key="path+subpath"
        :cwd="cwd"
        @chdir="(path)=>$emit('chdir',path)"
      ></hierarchy-view>
    </div>
  </ul>
</template>

<script>

export default {
  name:"hierarchy-view",
  props:{
    path: String,
    treeData: Object,
    cwd: String
  },
  data: function(){
    return {
      collapsed: this.cwd.indexOf(this.path) === -1
    }
  },
  computed:{
    hasChildren: function(){
      for(let i in this.treeData){
        return true
      }
      return false
    },
    isWorking: function(){
      return this.cwd == this.path
    }
  },
  methods:{
    toggleCollapse:function(){
      this.collapsed = this.hasChildren && !this.collapsed;
      if(this.cwd.indexOf(this.path)!==-1
          && this.cwd.length>this.path.length)
        {
          this.$emit('chdir', this.path)
        }
    }
  }
}
</script>

<style lang="scss">
  .hierarchy-view {
    display: block;
    list-style-type: none;
    margin: 0;
    padding: 0 0 0 10px;
    border-radius:4px;
    &.leaf>li>span.toggler:before{
      content: "[ ] ";
      font-family: Menlo, Consolas, monospace;
    }
    &.branch{
      &>li span.toggler{
        cursor: pointer;
      }
      &.collapsed>li>span.toggler:before{
        content: "[+] ";
        font-family: Menlo, Consolas, monospace;
      }
      &.expanded>li>span.toggler:before{
        content: "[-] ";
        font-family: Menlo, Consolas, monospace;
      }
    }
    span.path{
      cursor: pointer;
    }
  }
</style>
