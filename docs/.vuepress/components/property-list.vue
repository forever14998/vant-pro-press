<!--属性列表-->
<template>
  <div class="property">
    <div v-for="(item,index) in listData" :key="index">

      <div style="font-size: 2rem">{{ item.title }}</div>

      <a-table :columns="item.columns" :data-source="item.list" bordered width="300" :pagination="false">
        <template slot="name" slot-scope="text">
          <a>{{ text }}</a>
        </template>
      </a-table>

    </div>
  </div>
</template>

<script>
import {getApiListModule} from '../../../docs/.vuepress/components/lib/property-list';

export default {
  data() {
    return {
      listData: []
    };
  },
  props: {
    module: {
      type: String,
      default: ''
    }
  },
  created() {
    this.listData = getApiListModule(this.module);
  }
}
</script>
