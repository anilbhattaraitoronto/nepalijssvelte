<header>
    <h1>
        <a href="#/">LN 🏡</a>
    </h1>
    <nav>
        <a href="#/blogs" class="link" id="blog-link">Blogs</a>
        <div class="drop-down-nav">
            <span class="link">Lessons ▾</span>
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
            <span class="link">Account ▾</span>
            <ul>
                <li>
                    <a href="#/account/login" class="main-link">Login</a>
                </li>
                <li>
                    <a href="#/account/register" class="main-link">Register</a>
                </li>
                <li>
                    <a href="#/account/forgotpassword" class="main-link"
                        >Forgot PW</a
                    >
                </li>
                <li>
                    <a href="#/account/profile" class="main-link">Profile</a>
                </li>
                <li>
                    <a href="#/account/resetpassword" class="main-link"
                        >Reset PW</a
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
        max-width: 1100px;
        margin: auto;
        padding: 10px 0;
        z-index: 100;
    }
    nav {
        display: flex;
        justify-content: flex-end;
    }
    .drop-down-nav {
        position: relative;
        width: 100px;
        text-align: center;
        z-index: 30;
    }
    .drop-down-nav > ul {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 16px;
        left: 0;
        right: 0;

        margin: auto;
        transform: scale(0);
        transition: 200ms all ease-in-out;
        background: darkgreen;
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
        padding: 16px 0;
    }
    .link {
        display: block;
        color: rgb(255, 255, 138);
        cursor: pointer;
        max-width: 100px;
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 1px;
    }
    #blog-link {
        padding-right: 12px;
    }

    li > a {
        color: rgb(231, 236, 231);
    }

    h1::after {
        content: "learn nepali";
        display: block;
        font-size: 0.4em;

        font-weight: 100;
        font-style: italic;
        margin-top: -4px;
        word-spacing: 6px;
        letter-spacing: 1px;
        color: rgb(219, 213, 213);
    }
    h1 > a {
        transition: 250ms all ease-in-out;
        color: rgb(255, 255, 138);
    }
    h1 > a:hover {
        text-decoration: none;
        color: rgb(169, 174, 169);
    }
</style>
