webpackJsonp([1],{21:function(t,o,e){function i(t){e(50)}var a=e(6)(e(32),e(43),i,"data-v-106dfbf6",null);t.exports=a.exports},32:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=e(9),a=e(8),d=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t};o.default={name:"todos",data:function(){return{newTodo:""}},computed:e.i(i.a)({todos:"allTodos"}),methods:d({addTodo:function(){var t=this.newTodo&&this.newTodo.trim();t&&(this.$store.commit(a.f,{content:t}),this.newTodo="")}},e.i(i.b)({removeTodo:a.g,toggleComplete:a.h}))}},33:function(t,o,e){o=t.exports=e(1)(),o.push([t.i,'.todos[data-v-106dfbf6]{background:#fff;margin:60px auto 40px;position:relative;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);max-width:540px}.todos input[data-v-106dfbf6]::-moz-placeholder,.todos input[data-v-106dfbf6]::-webkit-input-placeholder,.todos input[data-v-106dfbf6]::input-placeholder{font-style:italic;font-weight:300;color:#e6e6e6}.todos .new-todo[data-v-106dfbf6]{padding:16px 16px 16px 60px;border:none;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03);position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;color:inherit;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.todos h1[data-v-106dfbf6]{width:100%;font-size:100px;font-weight:100;text-align:center;color:rgba(175,47,47,.2);margin:0}.todo-list[data-v-106dfbf6]{margin:0;padding:0;list-style:none}.todo-list li[data-v-106dfbf6]{position:relative;font-size:24px;border-bottom:1px solid #ededed}.todo-list li[data-v-106dfbf6]:last-child{border-bottom:none}.todo-list li .toggle[data-v-106dfbf6]{text-align:center;width:40px;height:40px;position:absolute;top:0;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;appearance:none;background:none}.todo-list li .toggle[data-v-106dfbf6]:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\')}.todo-list li .toggle[data-v-106dfbf6]:checked:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\')}.todo-list li .destroy[data-v-106dfbf6]{display:none;position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0;font-size:30px;color:#cc9a9a;margin-bottom:11px;transition:color .2s ease-out}.todo-list li .destroy[data-v-106dfbf6]:hover{color:#af5b5e}.todo-list li .destroy[data-v-106dfbf6]:after{content:"\\D7"}.todo-list li:hover .destroy[data-v-106dfbf6]{display:block}.todo-list li label[data-v-106dfbf6]{word-break:break-all;padding:15px 60px 15px 15px;margin-left:45px;display:block;line-height:1.2;transition:color .4s}.todo-list li.completed label[data-v-106dfbf6]{color:#d9d9d9;text-decoration:line-through}',""])},43:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"todos"},[e("header",{staticClass:"header"},[e("h1",[t._v("todos")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"new-todo",attrs:{autofocus:"",autocomplete:"off",placeholder:"What needs to be done?"},domProps:{value:t.newTodo},on:{keypress:function(o){if(!("button"in o)&&t._k(o.keyCode,"enter",13))return null;t.addTodo(o)},input:function(o){o.target.composing||(t.newTodo=o.target.value)}}})]),t._v(" "),e("section",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"main"},[e("ul",{staticClass:"todo-list"},t._l(t.todos,function(o){return e("li",{key:o.id,staticClass:"todo",class:{completed:o.complete}},[e("div",{staticClass:"view"},[e("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{value:o.complete},on:{click:function(e){t.toggleComplete({id:o.id})}}}),t._v(" "),e("label",[t._v(t._s(o.content))]),t._v(" "),e("button",{staticClass:"destroy",on:{click:function(e){t.removeTodo({id:o.id})}}})])])}))])])},staticRenderFns:[]}},50:function(t,o,e){var i=e(33);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(7)("3fbcf22f",i,!0)}});
//# sourceMappingURL=1.build.js.map