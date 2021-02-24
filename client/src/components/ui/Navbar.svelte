<header>
    <h1>
        <a href="#/">LN 🏡</a>
    </h1>
    <nav>
        <div class="drop-down-nav">
            <span class="link">Lessons</span>
            <ul>
                <li>
                    <a href="#/lessons/letters" class="main-link">Letters</a>
                </li>
                <li><a href="#/lessons/words" class="main-link">Words</a></li>
                <li>
                    <a href="#/lessons/sentences" class="main-link">Sentences</a
                    >
                </li>
                <li>
                    <a href="#/lessons/readings" class="main-link">Readings</a>
                </li>
            </ul>
        </div>
        <div class="drop-down-nav">
            <span class="link">Account</span>
            <ul>
                <li>
                    <a href="#/account/login" class="main-link">Login</a>
                </li>
                <li>
                    <a href="#/account/register" class="main-link">Register</a>
                </li>
                <li>
                    <a href="#/account/profile" class="main-link">Profile</a>
                </li>
                <li>
                    <a href="#/account/resetpassword" class="main-link"
                        >Reset PW</a
                    >
                </li>
                <li>
                    <a href="#/account/forgotpassword" class="main-link"
                        >Forgot PW</a
                    >
                </li>
            </ul>
        </div>
    </nav>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1000px;
        margin: auto;
    }
    nav {
        display: flex;
        justify-content: flex-end;
    }
    .drop-down-nav {
        position: relative;
        width: 100px;
        text-align: center;
    }
    .drop-down-nav > ul {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 16px;
        left: 0;
        right: 0;
        /* width: 100%; */
        margin: auto;
        transform: scale(0);
        transition: 200ms all ease-in-out;
        background: white;
        z-index: 20;
        padding: 20px 0;
        box-shadow: 0 1px 0 lightgray;
        overflow: auto;
        max-height: 300px;
    }
    .drop-down-nav:hover > ul {
        transform: scale(1);
    }
    li {
        list-style: none;
        text-align: center;
        padding-top: 16px;
    }
    .link {
        display: inline-block;
        color: darkgreen;
        border-right: 1px solid rgb(211, 209, 209);
        padding: 0 4px;
        border-top-right-radius: 4px;
        cursor: pointer;
        width: 100px;
    }
    .link:hover {
        text-decoration: underline;
    }
    li > a {
        color: rgb(8, 43, 8);
    }
    h1::after {
        content: "learn nepali";
        display: block;
        font-size: 0.4em;
        text-align: center;
        font-weight: 100;
        font-style: italic;
        margin-top: -8px;
        word-spacing: 6px;
        letter-spacing: 2px;
    }
    h1 > a {
        transition: 250ms all ease-in-out;
    }
    h1 > a:hover {
        text-decoration: none;
        color: darkblue;
    }
</style>
