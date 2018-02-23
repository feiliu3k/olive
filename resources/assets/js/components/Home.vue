<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-header">Post list</div>

                    <div v-for="post in posts" :key="post.id" class="bs-callout bs-callout-danger">
                        <h4>{{ post.title }}</h4>
                        <hr>
                        <p>{{ post.body }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            axios.get('/api/posts').then(response =>{
                this.posts = response.data.data
            })
        },
        data() {
            return {
                posts : []
            }
        }
    }
</script>
