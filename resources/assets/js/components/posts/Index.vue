<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card card-default">
                <div class="card-header">Post list</div>
                <div class="card-body">
                    <div v-for="post in posts" :key="post.id" class="bs-callout bs-callout-danger">
                        <h4><router-link :to="{name: 'posts', params:{id: post.id}} ">{{ post.title }}</router-link></h4>
                        <p>{{ post.body }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            axios.get('/api/posts').then(response =>{
                this.posts = response.data.data
            }).catch(errors => {
                console.log(errors.response)
            })
        },
        data() {
            return {
                posts : []
            }
        }
    }
</script>
