<template>
    <div id="app">
        <Nav/>
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from './components/partial/Nav';

export default {
    name: 'Main',
    components: {Nav},
}
</script>