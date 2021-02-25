<script>
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

    const routes = {
        "/": Home,
        "/about": About,
        "/contact": Contact,
        "/lessons/letters": Letters,
        "/lessons/words": Words,
        "/lessons/sentences": Sentences,
        "/lessons/readings": Readings,
        "/account/login": Login,
        "/account/register": Register,
        "/account/profile": Profile,
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
    }
    .main-content {
        max-height: 87vh;
        max-width: 1100px;
        margin: 0 auto;
        position: relative;
        overflow: auto;
    }
    .pages {
        padding: 32px 16px;
    }
    header {
        width: 100%;
        margin: auto;
        box-shadow: 0 1px 0 rgb(205, 199, 199);
        padding: 0 8px;
        position: sticky;
        top: 0;
        z-index: 102;
        background: white;
    }
    .main-footer {
        width: 100%;
        margin: auto;
        background: darkgreen;
        color: rgb(245, 241, 241);
        position: absolute;
        bottom: 0;
    }
</style>
