<template>
  <div>
    <NavBar></NavBar>
    <div>
      <div>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from './components/core/Navbar'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

