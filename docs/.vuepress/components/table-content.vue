<template>
  <a-table :columns="columns" :data-source="data" bordered width="300">
    <template slot="name" slot-scope="text">
      <a>{{ text }}</a>
    </template>
  </a-table>
</template>
<script>
const columns = [
  {
    width: 200,
    title: '参数',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    width: 600,
    title: '说明',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    width: 200,
    title: '类型',
    dataIndex: 'address',
  },
  {
    width: 200,
    title: '默认值',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
<style>
thead tr th {
  text-align: center !important;
}
</style>