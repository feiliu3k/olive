<template>
    <div class="card card-default">
        <div class="card-body">
            <edit-password-form></edit-password-form>
        </div>
    </div>
</template>

<script>
    import EditPasswordForm from './EditPasswordForm'
    export default {
        name: "edit-password",
        components: {
            EditPasswordForm
        }
    }
</script>
