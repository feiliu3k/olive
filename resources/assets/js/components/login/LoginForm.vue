<template>
    <form class="form-horizontal" @submit.prevent="login">
        <div class="form-group row" :class="{'has-error' : errors.has('email')}">
            <label for="email" class="col-md-4 col-form-label text-md-right">邮件</label>

            <div class="col-md-6">
                <input v-model="email"
                       v-validate data-vv-rules="required|email" data-vv-as="邮件"
                       id="email" type="email" class="form-control" name="email" required>
                <span class="text-muted" v-show="errors.has('email')">{{errors.first('email')}}</span>
            </div>
        </div>

        <div class="form-group row" :class="{'has-error' : errors.has('password') || bag.has('password:auth') }">
            <label for="password" class="col-md-4 col-form-label text-md-right">密码</label>

            <div class="col-md-6">
                <input v-model="password"
                       v-validate data-vv-rules="required|min:6" data-vv-as="密码"
                       id="password" type="password" class="form-control" name="password" required>
                <span class="text-muted" v-show="errors.has('password')">{{errors.first('password')}}</span>
                <span class="text-muted" v-if="mismatchError">{{bag.first('password:auth')}}</span>
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    登录
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    import { ErrorBag } from 'vee-validate'

    export default {
        name: "login-form",
        data() {
            return {
                email: '',
                password: '',
                bag: new ErrorBag()
            }
        },
        computed: {
          mismatchError() {
              return this.bag.has('password:auth') && !this.errors.has('password')
          }
        },
        methods: {
            login() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        let formData = {
                            email: this.email,
                            password: this.password
                        }
                        this.$store.dispatch('loginRequest', formData).then(response => {
                            this.$router.push({name: 'profile'})
                        }).catch(error => {
                            if (error.response.status === 421) {
                                this.bag.add('password', '邮箱与密码不相符！', 'auth')
                            }
                        })
                    }
                })

            }
        }
    }
</script>
