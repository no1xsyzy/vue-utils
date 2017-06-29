<template>
  <table class="data-grid">
    <thead><tr>
      <th v-for="key in keys">{{ key }}</th>
      <th>Ops</th>
    </tr></thead>
    <tbody>
      <tr v-for="datum in data">
        <td v-for="key in keys">{{ datum[key] }}</td>
        <td>
          <span v-for="op in operations">
            <a href=""
              @click.prevent="$emit(op.msg, datum)"
              v-html="op.tip"></a>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "data-grid",
  props: {
    keys: Array,
    data: Object,
    operations: Array
  }
}
</script>

<style lang="scss">
  .data-grid {
    width: 100%;
    height: 100%;
  }
</style>
