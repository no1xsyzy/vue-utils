<template>
  <overlay :showing="showing">
    <div>
      <input v-model="content" @keypress.enter="$emit('submit',content)" />
    </div>
  </overlay>
</template>

<script>
import Overlay from './Overlay.vue'
export default {
  name:"input-line",
  components: {
    "overlay": Overlay
  },
  props: {
    init: String,
    showing: Boolean
  },
  data: function(){
    return {
      content: ""
    }
  },
  watch: {
    showing: function(val, oldVal){
      if(val&&!oldVal){
        this.content = this.init
      }
    }
  },
}
</script>
