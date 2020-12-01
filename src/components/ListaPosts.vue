<template>
  <div>
        <post v-for="(post, index) in posts" :key="index"
        :autor="post.autor.username"
        :fecha="post.fecha"
        :mensaje="post.mensaje"
        :likes="post.likes.length"
        :idPost="post._id"
        :postURL="postURL"
        @eliminar="getPosts"
        @like="getPosts"></post>
    </div>
</template>

<script>
import Post from '@/components/Post';
export default {
    name: "ListaPosts",
    components: {
        Post,
    },
    props: {
        URL: String
    },
    data() {
        return {
            posts: [],
            postURL: "https://node-api-doctadevs.vercel.app/posts"
        }
    },
    methods: {
        getPosts(){
            fetch(this.postURL)
            .then(response => response.json())
            .then(data => {
                this.posts = data.body;
            })
            .catch(err => console.log(err));
        }
    },    

    created() {
        this.getPosts()
    },
    
}
</script>

<style>

</style>