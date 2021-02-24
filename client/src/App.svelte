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

    const routes = {
        "/": Home,
        "/lessons/letters": Letters,
        "/lessons/words": Words,
        "/lessons/sentences": Sentences,
        "/lessons/readings": Readings,
        "/account/login": Login,
        "/account/register": Register,
        "/account/profile": Profile,
        "/account/resetpassword": ResetPw,
        "/account/forgotpassword": ForgotPw,
    };
</script>

<header>
    <Navbar />
</header>

<main>
    <Router {routes} />
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }
    header {
        width: 100%;
        margin: auto;
        box-shadow: 0 1px 0 gray;
        padding: 0 8px;
    }
</style>
