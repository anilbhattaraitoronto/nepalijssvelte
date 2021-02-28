<script>
    export let blog;
</script>

<div class="blog">
    <div class="image-container">
        <img src={blog.imageurl} alt={blog.title} class="post-image" />
        <h3>{blog.title}</h3>
    </div>

    <p>{blog.summary}</p>
    <div class="content">
        {@html blog.content}
    </div>
    <p>Posted: {new Date(blog.posted_date).toDateString()}</p>
    <p>Updated: {new Date(blog.updated_date).toDateString()}</p>
</div>

<style>
    .blog {
        margin-bottom: 25px;
        border-bottom: 1px solid rgb(157, 150, 150);
    }
    .image-container {
        position: relative;
        width: 100%;
        margin: auto;
    }
    h3 {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(43, 42, 42, 0.598);
        padding: 20px;
        color: rgb(241, 213, 53);
        text-transform: uppercase;
        width: 100%;
        margin: auto;
        text-align: center;
    }
    .post-image {
        display: block;
        width: 100%;
        max-width: 600px;
        margin: auto;
    }
</style>
