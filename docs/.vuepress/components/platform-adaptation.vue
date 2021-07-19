<!--是否支持全平台-->
<template>
  <div >
  <a-table :columns="columns" :data-source="data" bordered width="300" :pagination="false" center>
    <template slot="name" slot-scope="text">
      <a>{{ text }}</a>
    </template>
  </a-table>
  </div>
</template>
<script>
const columns = [
  {
    width: 200,
    title: 'App',
    dataIndex: 'app',
    align: 'center'
  },
  {
    width: 200,
    title: 'H5',
    dataIndex: 'h5',
    align: 'center'
  },
  {
    width: 200,
    title: '微信小程序',
    dataIndex: 'mp',
    align: 'center'
  },
  {
    width: 200,
    title: '支付宝小程序',
    dataIndex: 'alipay',
    align: 'center'
  },
  {
    width: 200,
    title: '百度小程序',
    dataIndex: 'baidu',
    align: 'center'
  },{
    width: 200,
    title: '头条',
    dataIndex: 'headline',
    align: 'center'
  },{
    width: 200,
    title: 'QQ小程序',
    dataIndex: 'qq',
    align: 'center'
  }
];
import  {getModuleConfigByPage} from  '../../../docs/.vuepress/components/lib/platform-adaptation';
export default {
  data() {
    return {
      data: [],
      columns,
    };
  },
  props:{
    module: {
      type: String,
      default: ''
    }
  },
  methods: {
  },
  created(){
    this.data.push(getModuleConfigByPage(this.module))
  }
};
</script>
