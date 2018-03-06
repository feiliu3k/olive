<template>
    <form @submit.prevent="updateProfile">
        <div class="form-group row" :class="{'has-error' : errors.has('name')}">
            <label for="name" class="col-form-label text-md-right">用户名</label>

            <input v-model="name"
                   v-validate data-vv-rules="required|min:4" data-vv-as="用户名"
                   id="name" type="text" class="form-control" name="name" required autofocus>
            <span class="help-block" v-show="errors.has('name')">{{errors.first('name')}}</span>
        </div>

        <div class="form-group row" :class="{'has-error' : errors.has('email')}">
            <label for="email" class="col-form-label text-md-right">邮件</label>

            <input v-model="email"
                   v-validate data-vv-rules="required|email" data-vv-as="邮件"
                   id="email" type="email" class="form-control" name="email" required>
            <span class="help-block" v-show="errors.has('email')">{{errors.first('email')}}</span>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    更新用户资料
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    import jwtToken from './../../helpers/jwt'
    import { ErrorBag } from 'vee-validate'
    import * as types from './../../store/mutation-type'


    export default {
        name: "edit-profile-form",
        created() {
            this.$store.dispatch('setAuthUser');
        },
        computed: {
            name: {
                get() {
                    return this.$store.state.AuthUser.name
                },
                set(value) {
                    this.$store.commit({
                        type: types.UPDATE_PROFILE_NAME,
                        value: value
                    })
                }
            },
            email: {
                get() {
                    return this.$store.state.AuthUser.email
                },
                set(value) {
                    this.$store.commit({
                        type: types.UPDATE_PROFILE_EMAIL,
                        value: value
                    })
                }
            }
        },
        methods: {
            updateProfile() {
                const formData = {
                    name: this.name,
                    email: this.email
                }
                this.$store.dispatch('updateProfileRequest',formData).then(response => {
                    this.$router.push({name: 'profile'})
                }).catch(error => {

                })
            }
        }

    }
</script>