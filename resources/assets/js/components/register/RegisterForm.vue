<template>
    <form class="form-horizontal" @submit.prevent="register">
        <div class="form-group row" :class="{'has-error' : errors.has('name')}">
            <label for="name" class="col-md-4 col-form-label text-md-right">用户名</label>

            <div class="col-md-6">
                <input v-model="name"
                       v-validate data-vv-rules="required|min:4" data-vv-as="用户名"
                       id="name" type="text" class="form-control" name="name" required autofocus>
                <span class="help-block" v-show="errors.has('name')">{{errors.first('name')}}</span>
            </div>
        </div>

        <div class="form-group row" :class="{'has-error' : errors.has('email')}">
            <label for="email" class="col-md-4 col-form-label text-md-right">邮件</label>

            <div class="col-md-6">
                <input v-model="email"
                       v-validate data-vv-rules="required|email" data-vv-as="邮件"
                       id="email" type="email" class="form-control" name="email" required>
                <span class="help-block" v-show="errors.has('email')">{{errors.first('email')}}</span>
            </div>
        </div>

        <div class="form-group row" :class="{'has-error' : errors.has('password')}">
            <label for="password" class="col-md-4 col-form-label text-md-right">密码</label>

            <div class="col-md-6">
                <input v-model="password"
                       v-validate data-vv-rules="required|min:6" data-vv-as="密码"
                       id="password" type="password" class="form-control" name="password" required>
                <span class="help-block" v-show="errors.has('password')">{{errors.first('password')}}</span>
            </div>
        </div>

        <div class="form-group row" :class="{'has-error' : errors.has('password-confirm')}">
            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">确认密码</label>

            <div class="col-md-6">
                <input id="password-confirm"
                       v-validate data-vv-rules="required|min:6|confirmed:password" data-vv-as="确认密码"
                       type="password" class="form-control" name="password_confirmation" required>
                <span class="help-block" v-show="errors.has('password_confirmation')">{{errors.first('password_confirmation')}}</span>
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    注册
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "register-form",
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            register() {
                let formData ={
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
                axios.post('/api/register', formData).then(response => {
                    this.$router.push({
                        name: 'confirm'
                    }).catch(errors => {
                        console.log(errors.response)
                    })
                })
            }
        }
    }
</script>
