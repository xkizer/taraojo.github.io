import React from 'react';

class App extends React.Component {
    render() {
        return <footer class='footer'>
            <div class="footer__social-links">
                <a href="https://twitter.com/tara_ojo">
                    <img src="#" alt="Twitter"/>
                </a>
                <a href="https://uk.linkedin.com/in/taraojo">
                    <img src="#" alt="LinkedIn"/>
                </a>
                <a href="https://github.com/taraojo">
                    <img src="#" alt="Github"/>
                </a>
                <a href="mailto:tara.ojo@gmail.com">
                    <img src="#" alt="Email"/>
                </a>
            </div>

            <div class="footer__site-links">
                <a href="#">
                    Home
                </a>
                <a href="#">
                    Work
                </a>
                <a href="#">
                    Thoughts
                </a>
                <a href="#">
                    About
                </a>
                <a href="#">
                    Contact
                </a>
            </div>

            <div class="footer__copyright">
                &copy; 2016 Tara Ojo
            </div>
        </footer>
    }
}

export default App