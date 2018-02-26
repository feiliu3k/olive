<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <a class="navbar-brand" href="/">
                OLIVE
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                    <li><router-link class="nav-link" to="/">Home</router-link></li>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    <li><router-link v-if="!user.authenticated" class="nav-link" to="/login">登录</router-link></li>
                    <li><router-link v-if="!user.authenticated" class="nav-link" to="/register">注册</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapstate} from 'vuex'
    export default {
        name: "top-menu",
        computed: {
            ...mapState({
                user: state => state.AuthUser
            })
        }
    }
</script>
