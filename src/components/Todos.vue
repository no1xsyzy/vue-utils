<template>
<section class="todos">
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
      v-model="newTodo" @keypress.enter="addTodo">
  </header>
  <section class="main" v-show="todos.length">
    <ul class="todo-list">
      <li v-for="todo in todos" class="todo" :key="todo.id" :class="{'completed': todo.complete}">
        <div class="view">
          <input class="toggle" type="checkbox"
            :value="todo.complete" @click="toggleComplete({id:todo.id})">
          <label>{{ todo.content }}</label>
          <button class="destroy" @click="removeTodo({id:todo.id})"></button>
        </div>
      </li>
    </ul>
  </section>
</section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import * as types from '../store/mutation-types'

export default {
  name: 'todos',
  data() {
    return {
      newTodo: ''
    }
  },

  computed: mapGetters({
    todos: "allTodos",
  }),

  methods: {
    addTodo: function() {
      var content = this.newTodo && this.newTodo.trim()
      if (!content) {
        return
      }
      this.$store.commit(types.TODO__ADD_NEW_TODO, {
        content
      })
      this.newTodo = ''
    },

    ...mapMutations({
      removeTodo: types.TODO__DELETE_TODO,
      toggleComplete: types.TODO__TOGGLE_COMPLETE
    })
  },
}
</script>

<style lang="scss" scoped>
.todos {
    background: #fff;
    margin: 60px auto 40px;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    max-width: 540px;

    input::-moz-placeholder,
    input::-webkit-input-placeholder,
    input::input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
    }

    .new-todo {
        padding: 16px 16px 16px 60px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        color: inherit;
        padding: 6px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1 {
        width: 100%;
        font-size: 100px;
        font-weight: 100;
        text-align: center;
        color: rgba(175, 47, 47, 0.2);
        margin: 0;
    }

}
.todo-list {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
        position: relative;
        font-size: 24px;
        border-bottom: 1px solid #ededed;
        &:last-child {
            border-bottom: none;
        }

        .toggle {
            text-align: center;
            width: 40px;
            height: 40px;
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
            border: none;
            -webkit-appearance: none;
            appearance: none;
            background: none;
            &:after {
                content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
            }
            &:checked:after {
                content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
            }
        }

        .destroy {
            display: none;
            position: absolute;
            top: 0;
            right: 10px;
            bottom: 0;
            width: 40px;
            height: 40px;
            margin: auto 0;
            font-size: 30px;
            color: #cc9a9a;
            margin-bottom: 11px;
            transition: color 0.2s ease-out;
            &:hover {
                color: #af5b5e;
            }
            &:after {
                content: '×';
            }
        }
        &:hover .destroy {
            display: block;
        }

        label {
            word-break: break-all;
            padding: 15px 60px 15px 15px;
            margin-left: 45px;
            display: block;
            line-height: 1.2;
            transition: color 0.4s;
        }

        &.completed label {
            color: #d9d9d9;
            text-decoration: line-through;
        }

    }
}
</style>
