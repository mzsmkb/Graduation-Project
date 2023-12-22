<template>
    <a-upload v-model:file-list="fileList" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
      <a-button>
        Upload
      </a-button>
    </a-upload>

</template>

<script>

export default{
  name:'UpLoads',
  data(){
    return{
      msg:"这是一个上传的组件",

      fileList:'',
    }
  },

}

</script>


<style>

</style>
