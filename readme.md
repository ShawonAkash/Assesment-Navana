<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instructions</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&family=Raleway:wght@400;700;800&display=swap"
        rel="stylesheet" />
    <style>
        body {
            font-family: 'Raleway', sans-serif;
            color: #404040;
        }

        h1 {
            font-size: clamp(2rem, 4vw, 2.6rem);
        }


        h2 {
            font-size: clamp(1.8rem, 3vw, 2.4rem);
            font-weight: 800;
            color: #7aa700;
            padding: 1em;
        }

        h3 {
            font-size: clamp(1.4rem, 2.6vw, 2rem);
            margin-block: 0;
            margin-top: 1em;
        }

        h4 {
            font-size: clamp(1.2rem, 1.8vw, 1.4rem);
            padding-top: 0.6em;
            margin-block: 0;
            margin-top: 1em;
        }

        .center {
            text-align: center;
        }

        p,
        li {
            font-size: clamp(0.9rem, 1.4vw, 1.2rem);
            color: #808080;
        }

        p span {
            color: #404040;
            font-weight: 800;
        }

        a {
            text-decoration: none;
            color: #7aa700;
            font-weight: bold;
        }

        a:hover,
        a:active {
            color: #0056a7;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .content {
            width: min(90%, 850px);
            padding: 2em 0 12em 0;
        }

        section {
            padding-bottom: 4em;
        }

        img {
            width: 100%;
            align-self: center;
            margin: 2em 0;
        }

        video {
            width: 100%;
            padding-bottom: 2em;
        }
    </style>

</head>

<body>
    <div class="container">
        <div class="content">
            <h1 class="center">Front-end Internship Test</h1>
            <p class="center">Please complete <span>Any ONE</span> of the following tests:</p>

            <h2 class="center">
                EITHER
            </h2>

            <section>
                <h3>Test 1</h3>
                <p>
                    Go to <b>'test1'</b> folder.<br><br>
                    Using the code provide, create a web page where the layout changes when the buttons are clicked.
                    Create layout 1 and 2 to complete the test.<br><br>
                    <i>*You can try layout 3 for bonus points.</i>
                </p>

                <h4>Design</h4>
                <p><a href="https://www.figma.com/file/yaPKtWTCyUxRp6MXyh3kk1/Front-end-Intern-Test-1?node-id=0%3A1">Click
                        Here</a> for Figma design link</p>

                <h4>RULES</h4>
                <ul>
                    <li>You can't add or remove any html elements</li>
                    <li>You can add or remove classes, ids or onClick methods</li>
                    <li>You can add or edit any CSS or JS</li>
                </ul>

                <h4>Layout 1</h4>
                <img src="./assets/test1-layout1.jpg" />

                <h4>Layout 2</h4>
                <img src="./assets/test1-layout2.jpg" />

                <h4>*Bonus (Layout 3)</h4>
                <img src="./assets/test1-layout3.jpg" />
            </section>

            <h2 class="center">
                OR
            </h2>

            <section>
                <h3>Test 2</h3>
                <p>
                    Go to <b>'test2'</b> folder.<br><br>
                    Using the resources provided, create an animation like the one in the video:
                </p>

                <video class="video" poster="./assets/test2.JPG" autoplay loop muted controls>
                    <!-- HTML 5 browsers will play one of these -->
                    <source src="./assets/test2.mp4" type="video/mp4" />
                    </source>
                    <img src="./assets/test2.JPG" title="Your browser does not support the video tag">
                </video>

                <h4>Design</h4>
                <p><a href="https://www.figma.com/file/5uHfC0bOAn39SGnNuy0xvd/Front-end-Intern-Test-2?node-id=4%3A2">Click
                        Here</a> for Figma design link</p>

                <p>
                    To complete the test make the animated text and images appear <span>at least once</span> after
                    the page loads.
                </p>

                <h4>RULES</h4>
                <ul>
                    <li>You can change the html, css and js as required</li>
                    <li>You can add or remove classes or ids</li>
                    <li>You can use any libraries or framework as required</li>
                </ul>

                <h4>*Bonus</h4>
                <p>
                    <i>*You can try making the animation loop infinitely for bonus points.</i>
                </p>

            </section>

            <section>

                <h3>Submision</h3>
                <p>
                    Please submit your code and whatever resources you used in a .zip file.
                </p>

            </section>

            <section>
                <h3>Scoring</h3>
                <p>
                    You'll be assessed based on the following criteria:
                </p>
                <ul>
                    <li>Problem solving skills</li>
                    <li>Design and styling sense</li>
                    <li>Overall effort given</li>
                </ul>

            </section>
        </div>
    </div>

</body>

</html>
