<template>
    <div class="flex flex-col w-100 web-row">
        <div class="logo-section">
            <div>
                <p id="logo"><span class="pinkhover">Bad Taste</span></p>
            </div>
            <div class="info borderbox">
                <p class="subheader">Brand strategy and web studio defining your online presence. Based in Brooklyn, NY.</p>
                <p><a href="mailto:jordan@jordanfurr.com">Email</a></p>
                <p><a href="https://www.instagram.com/bad_taste___/" target="_">Instagram</a></p>
            </div>
        </div>
        <div class="info-col">
            <div class="info-section">
                <p class="subtitle">WORK</p>
                <div class="site-list">
                    <a href="https://drink-wall.com/" target="_">drink-wall</a>
                    <a href="https://upschool.org/" target="_">UP School</a>
                    <a href="https://starlaces.org/" target="_">STAR Laces</a>
                    <a href="https://www.hopeaccelerator.com/" target="_">Hope Accelerator</a>
                    <a href="https://samewave7.com/" target="_">SAMEWAVE7</a>
                    <a href="https://earnestproject.com/" target="_">Earnest Project</a>
                    <a href="https://ezrafurr.com/" target="_">Ezra</a>
                    <a href="https://spintheupwheel.netlify.app/" target="_">Tool Library</a>
                    <a href="https://jordanfurr.com/" target="_">Jordan Furr</a>
                    <a href="https://harmonpsychotherapy.com/" target="_">Harmon Psychotherapy & Consulting</a>
                    <a href="https://www.theupsideofuncertainty.com/" target="_">The Upside of Uncertainty</a>
                    <a href="https://centerforexpandingcompassion.org/" target="_">Center for Expanding Compassion</a>
                    <a href="https://madewithharmony.com/" target="_">Made with Harmony</a>
                </div>
            </div>
            <div class="info-section">
                <p class="subtitle">TECHNOLOGIES</p>
                <div class="service-list">
                    <ul>
                        <li>
                            <p>React/Next.js</p>
                        </li>
                        <li>
                            <p>Vue/Nuxt.js</p>
                        </li>
                        <li>
                            <p>Wordpress</p>
                        </li>
                        <li>
                            <p>Shopify</p>
                        </li>
                        <li>
                            <p>Sanity</p>
                        </li>
                        <li>
                            <p>Figma</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="info-col">
            <div class="info-section">
                <p class="subtitle">INFLUENCE</p>
                <div>
                    <p>"We all need a splash of bad taste—it’s hearty, it’s healthy, it’s physical. I think we could use
                        more of it. No taste is what I’m against." Diana Vreeland</p>
                </div>
            </div>
            <div class="info-section">
                <p class="subtitle">MANIFESTO</p>
                <div>
                    <p>A website is a platform, a reflection, a statement, a gallery, a journey, an expression, an
                        archive, an autobiography.</p>
                </div>
            </div>
            <div class="info-section">
                <p class="subtitle">WORDS FROM CLIENTS</p>
                <div>
                    <p class="mb3">The way our site is organized is so much better than we could have dreamed. It puts
                        us in a really good place.</p>
                    <p class="mb3"> Excellent listeners and
                        creatives. Every one of my ideas are upleveled in their hands. </p>
                </div>
            </div>
        </div>


    </div>
</template>


<script>
export default {
    data() {
        return {
            copied: false
        }
    },
    mounted() {
        window.scrollTo(0, 0);
    },
    methods: {
        emailCopy() {
            const email = 'jordan@jordanfurr.com';
            navigator.clipboard.writeText(email)
                .then(() => {
                    this.copied = true;
                    setTimeout(() => {
                        this.copied = false;
                    }, 1000);
                })
                .catch(error => {
                    console.error('Could not copy:', error);
                });
        }
    }
};
</script>
