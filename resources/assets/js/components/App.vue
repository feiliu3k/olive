<template>
    <div>
        <top-menu></top-menu>
        <Notification></Notification>    
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import TopMenu from './common/TopMenu'
    import Notification from './common/Notification'
    import jwtToken from './../helpers/jwt'
    import Cookie from 'js-cookie'
    export default {
        name: "app",
        created() {
            if (jwtToken.getToken()) {
                this.$store.dispatch('setAuthUser')
            } else if (Cookie.get('auth_id')) {
                this.$store.dispatch('refreshToken')
            }
        },
        components: {
            TopMenu,
            Notification
        }
    }
</script>
