<script>
    import { onMount } from "svelte";
    import Router from "svelte-spa-router";
    import Navbar from "./components/ui/Navbar.svelte";
    import Home from "./components/pages/Home.svelte";
    import Letters from "./components/pages/lessons/letters/Letters.svelte";
    import Words from "./components/pages/lessons/words/Words.svelte";
    import Sentences from "./components/pages/lessons/sentences/sentences.svelte";
    import Readings from "./components/pages/lessons/readings/Readings.svelte";
    import Login from "./components/auth/Login.svelte";
    import Register from "./components/auth/Register.svelte";
    import Profile from "./components/auth/Profile.svelte";
    import ResetPw from "./components/auth/ResetPW.svelte";
    import ForgotPw from "./components/auth/ForgotPW.svelte";
    import Footer from "./components/ui/Footer.svelte";
    import Privacy from "./components/pages/staticPages/Privacy.svelte";
    import Toc from "./components/pages/staticPages/TOC.svelte";
    import About from "./components/pages/staticPages/About.svelte";
    import Contact from "./components/pages/staticPages/Contact.svelte";

    //import stores

    import { siteData, posts } from "./stores/siteData.js";
    import Blogs from "./components/pages/blogs/Blogs.svelte";
    import AddBlog from "./components/pages/blogs/AddBlog.svelte";

    onMount(function () {
        Promise.all([
            fetch("https://nepalreviewed.com/posts/api/posts")
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        return;
                    }
                })
                .then((data) => {
                    $posts = data;
                    console.log($posts);
                }),
        ]).catch((err) => console.log("error is", err));
    });

    const routes = {
        "/": Home,
        "/blogs": Blogs,
        "/about": About,
        "/contact": Contact,
        "/lessons/letters": Letters,
        "/lessons/words": Words,
        "/lessons/sentences": Sentences,
        "/lessons/readings": Readings,
        "/account/login": Login,
        "/account/register": Register,
        "/account/profile": Profile,
        "/account/addblog": AddBlog,
        "/account/resetpassword": ResetPw,
        "/account/forgotpassword": ForgotPw,
        "/staticpages/privacy": Privacy,
        "/staticpages/toc": Toc,
    };
</script>

<div class="app-wrapper">
    <header>
        <Navbar />
    </header>

    <main class="main-content">
        <nav class="sticky-sidebar">
            <a href="#/" title="Home">🏠</a>
            <a href="#/blogs" title="Blogs">📖</a>
        </nav>
        <main class="pages">
            <Router {routes} />
        </main>
    </main>
    <footer class="main-footer">
        <Footer />
    </footer>
</div>

<style>
    .app-wrapper {
        position: relative;
        min-height: 100vh;
        background: darkgreen;
    }
    .main-content {
        min-height: 80vh;
        max-width: 1100px;
        margin: auto;
        position: relative;
        background: white;
    }
    .pages {
        padding: 32px 16px;

        min-height: 80vh;
        overflow: auto;
    }
    header {
        width: 100%;
        margin: auto;
        padding: 0 8px;
        position: sticky;
        top: 0;
        z-index: 102;
        background: darkgreen;
    }
    .sticky-sidebar {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        position: absolute;
        right: 0;
        top: 190px;
        background: rgba(241, 244, 241, 0.81);
        min-height: 200px;
        width: 60px;
        padding: 0 3px;
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
        transition: 250ms all ease-in-out;
        transform: scale(0);
        border: 1px solid rgb(231, 233, 228);
    }
    .sticky-sidebar > a {
        text-transform: uppercase;
        z-index: 150;
        padding: 2px;
        border-radius: 8px;
        background: white;
        font-size: 16px;
        transition: 200ms all ease-in-out;
    }
    .sticky-sidebar > a:hover {
        transform: scale(1.1);
        text-decoration: none;
    }
    .main-footer {
        width: 100%;
        margin: 4px auto 0;
        background: darkgreen;
        color: rgb(245, 241, 241);
    }
    @media (min-width: 1000px) {
        .sticky-sidebar {
            transform: scale(1) translateY(-50%);
        }
    }
</style>
