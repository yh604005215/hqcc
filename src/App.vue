<template>
  <div id="app">
    <div class="row">
      <yh-button>豪哥牛逼</yh-button>
      <yh-button type="primary">豪哥牛逼</yh-button>
      <yh-button type="success">豪哥牛逼</yh-button>
      <yh-button type="info">豪哥牛逼</yh-button>
      <yh-button type="warning">豪哥牛逼</yh-button>
      <yh-button type="danger">豪哥牛逼</yh-button>
    </div>
    <div class="row">
      <yh-button plain>豪哥牛逼</yh-button>
      <yh-button plain type="primary">豪哥牛逼</yh-button>
      <yh-button plain type="success">豪哥牛逼</yh-button>
      <yh-button plain type="info">豪哥牛逼</yh-button>
      <yh-button plain type="warning">豪哥牛逼</yh-button>
      <yh-button plain type="danger">豪哥牛逼</yh-button>
    </div>
    <div class="row">
      <yh-button round>豪哥牛逼</yh-button>
      <yh-button round type="primary">豪哥牛逼</yh-button>
      <yh-button round type="success">豪哥牛逼</yh-button>
      <yh-button round type="info">豪哥牛逼</yh-button>
      <yh-button round type="warning">豪哥牛逼</yh-button>
      <yh-button round type="danger">豪哥牛逼</yh-button>
    </div>
    <div class="row">
      <yh-button circle>豪</yh-button>
      <yh-button circle type="primary">豪</yh-button>
      <yh-button circle type="success">豪</yh-button>
      <yh-button circle type="info">豪</yh-button>
      <yh-button circle type="warning">豪</yh-button>
      <yh-button circle type="danger">豪</yh-button>
    </div>
     <div class="row">
      <yh-button icon="yh-icon-user" circle></yh-button>
      <yh-button icon="yh-icon-user" circle type="primary"></yh-button>
      <yh-button icon="yh-icon-user" circle type="success"></yh-button>
      <yh-button icon="yh-icon-user" circle type="info"></yh-button>
      <yh-button icon="yh-icon-user" circle type="warning"></yh-button>
      <yh-button icon="yh-icon-user" circle type="danger"></yh-button>
    </div>
    <div class="row">
      <yh-button disabled @click="fn1" icon="yh-icon-check">豪哥牛逼</yh-button>
      <yh-button disabled @click="fn1" icon="yh-icon-check" type="primary">豪哥牛逼</yh-button>
      <yh-button disabled @click="fn1" icon="yh-icon-check" type="success">豪哥牛逼</yh-button>
      <yh-button @click="fn1" icon="yh-icon-check" type="info">豪哥牛逼</yh-button>
      <yh-button disabled @click="fn1" icon="yh-icon-check" type="warning">豪哥牛逼</yh-button>
      <yh-button disabled @click="fn1" icon="yh-icon-check" type="danger">豪哥牛逼</yh-button>
    </div>
     <div class="row">
      <yh-button disabled plain>豪哥牛逼</yh-button>
      <yh-button disabled plain type="primary">豪哥牛逼</yh-button>
      <yh-button disabled plain type="success">豪哥牛逼</yh-button>
      <yh-button disabled plain type="info">豪哥牛逼</yh-button>
      <yh-button disabled plain type="warning">豪哥牛逼</yh-button>
      <yh-button disabled plain type="danger">豪哥牛逼</yh-button>
    </div>
    <div class="row">
      <yh-button
      :loading="loading"
      @click="fn1"
      size='mini'
      >豪哥</yh-button>
      <yh-button size="medium">中等按钮</yh-button>
      <yh-button size="small">小型按钮</yh-button>
      <yh-button size="mini">超小按钮</yh-button>
    </div>
    <div class="row">
      <yh-button native-type="submit">豪哥</yh-button>
      <yh-button autofocus>豪哥</yh-button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    fn1 () {
      this.loading = true
      setTimeout(() => {
        alert('登录成功')
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
.row{
  .yh-button{
    margin: 10px;
  }
}
</style>
