<template>
    <div class="flex flex-col w-100 web-row">
        <div class="logo-section">
            <div>
                <p id="logo">Bad Taste</p>
            </div>
            <div class="info borderbox">
                <p class="subheader">Bad Taste specializes in creating unique, tailored websites for a diverse range of clients. Bad Taste is the web development & design practice of <a href="https://jordanfurr.com/" target="_">Jordan Furr</a>, based in Brooklyn, NY.</p>
                <p><a href="mailto:jordan@jordanfurr.com">jordan@jordanfurr.com</a></p>
                <p><a href="https://www.instagram.com/badtaste.dev/" target="_">Instagram</a></p>
            </div>
        </div>
        <div class="info-col">
            <div class="info-section">
                <p class="subtitle">COLLABORATIONS</p>
                <div class="site-list">
                    <a href="https://starlaces.org/" target="_">STAR Laces</a>
                    <a href="https://earnestproject.com/" target="_">Earnest Project</a>
                    <a href="https://harmonpsychotherapy.com/" target="_">Harmon Psychotherapy & Consulting</a>
                    <a href="https://spintheupwheel.netlify.app/" target="_">UP Tool Library</a>
                    <a href="https://www.theupsideofuncertainty.com/" target="_">The Upside of Uncertainty</a>
                    <a href="https://centerforexpandingcompassion.org/" target="_">Center for Expanding Compassion</a>
                    <a href="https://madewithharmony.com/" target="_">Made with Harmony</a>
                    <a href="https://uncertaintyscience.com/" target="_">Uncertainty Science Initiative</a>
                </div>
            </div>
            <div class="info-section">
                <p class="subtitle">SERVICES</p>
                <div class="service-list">
                    <p>Nuxt</p>
                    <p>Vue.js</p>
                    <p>Wordpress</p>
                    <p>Shopify</p>
                    <p>Figma</p>
                </div>
            </div>
        </div>
        <div class="info-col">
            <div class="info-section">
                <p class="subtitle">INFLUENCE</p>
                <div class="influencer">
                    <p>"We all need a splash of bad taste—it’s hearty, it’s healthy, it’s physical. I think we could use
                        more of it. No taste is what I’m against." Diana Vreeland</p>
                    <!---
                    <br>
                    <p class="influence">Frequencies</p>
                    <p>Invention</p>
                    <p>Humanity</p>
                    <p>Freshness</p>
                    <p>Discernment</p>
                    <p>Beauty</p>
                    --->
                </div>
                <!---
                <div class="influencer">
                    <p class="influence">Diana Vreeland</p>
                    <p>"We all need a splash of bad taste—it’s hearty, it’s healthy, it’s physical. I think we could use
                        more of it. No taste is what I’m against."</p>
                    
                </div>
                --->
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
