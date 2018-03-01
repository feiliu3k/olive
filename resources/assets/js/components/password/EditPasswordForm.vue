<template>
    <form @submit.prevent="updatePassword">
        <div class="form-group row" :class="{'has-error' : errors.has('password')}">
            <label for="password" class="col-form-label text-md-right">密码</label>

            <input v-model="password"
                   v-validate data-vv-rules="required|min:6" data-vv-as="密码"
                   id="password" type="password" class="form-control" name="password" required>
            <span class="help-block" v-show="errors.has('password')">{{errors.first('password')}}</span>
        </div>

        <div class="form-group row" :class="{'has-error' : errors.has('password-confirm')}">
            <label for="password-confirm" class="col-form-label text-md-right">确认密码</label>

            <input id="password-confirm"
                   v-validate data-vv-rules="required|min:6|confirmed:password" data-vv-as="确认密码"
                   type="password" class="form-control" name="password_confirmation" required>
            <span class="help-block" v-show="errors.has('password_confirmation')">{{errors.first('password_confirmation')}}</span>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    修改密码
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "edit-password-form",
        data() {
            return {
                password: ''
            }
        },
        methods: {
            updatePassword() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        let formData = {
                            password: this.password
                        }
                        this.$store.dispatch('updatePasswordRequest', formData).then(response => {
                            //this.$router.push({name: 'profile'})
                        }).catch(error => {
                            //
                        })
                    }
                })

            }
        }
    }
</script>
