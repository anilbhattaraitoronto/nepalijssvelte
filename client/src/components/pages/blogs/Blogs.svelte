<script>
    import BlogItem from "./BlogItem.svelte";
    import { posts } from "../../../stores/siteData.js";
</script>

<main>
    {#if $posts}
        {#each $posts as blog}
            <BlogItem {blog} />
        {/each}
    {/if}
</main>

<style>
    main {
        max-width: 600px;
        margin: auto;
    }
</style>
