<template>
    <div>
        <v-app >
            <div class="all blue-grey darken-4" id="intro">
                <v-toolbar class="elevation-0 cc-toolbar" :dark="true" style="background: transparent">
                    <v-toolbar-title class="toolbar-title">
                        Chimpcode
                    </v-toolbar-title>
                    <span class="dot-title"> &#x25cf;</span>
                    <v-spacer></v-spacer>
                    <v-btn flat dark class="opts">Con&oacute;cenos</v-btn>
                    <v-btn flat dark class="opts">Nuestros Proyectos</v-btn>
                    <v-btn flat dark class="opts">Cont&aacute;ctanos</v-btn>
                    <v-btn outline style="color: #22dea1" flat dark class="opts" @click.native.stop="sidebar = !sidebar">Se parte de nosotros</v-btn>
                </v-toolbar>
                <sidebar :open="sidebar" @update-sidebar-open="onSidebarChange" transition="slide-x-transition"></sidebar>
                <main>
                    <v-container>
                        <cc-logo id="logo"></cc-logo>
                    </v-container>
                </main>
                <v-footer class="pa-3 cc-footer">

                    <v-spacer></v-spacer>
                    Made with
                    &nbsp;
                    <v-icon style="color: #c50b56;">favorite</v-icon>
                    &nbsp;
                    by chimpcode team
                    &nbsp;
                    &nbsp;
                    <div>© {{ new Date().getFullYear() }}</div>
                </v-footer>

            </div>
            <v-container fluid style="padding:0px !important" class="brand-font">
                <v-layout row wrap>
                    <v-flex xs12 sm6 class="primary py-3 px-5 block-content">
                        <div class="vertical-center">
                        <h5><strong>Lorem ipsum dolor sit amet</strong></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                            id est laborum</p>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm6 class="pa-3">
                        <h3 class="vertical-center text-xs-center px-5" style="line-height: 58px;">100% Software personalizado</h3>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container fluid style="padding:0px !important" class="brand-font">
                <v-layout row wrap>
                    <v-flex xs12 sm6 class="py-3 px-5 block-content">
                        <div class="vertical-center">
                        <h5><strong>Lorem ipsum dolor sit amet</strong></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                            id est laborum</p>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm6 class="primary pa-3">
                        <h3 class="vertical-center text-xs-center px-5" style="line-height: 58px;">100% Software personalizado</h3>
                    </v-flex>
                </v-layout>
            </v-container>

        </v-app>
    </div>
</template>

<script>
    import { VueTyper } from 'vue-typer'
    import 'particles.js'
    import CCLogo from './components/Logo'
    import CCConsole from './components/ConsoleEffect'
    // import FormBody from './components/FormBody'
    import Sidebar from './components/Sidebar'

    export default {
        components: {
            CCLogo,
            VueTyper,
            CCConsole,
            Sidebar
        },

        data () {
            return {
                sidebar: false,
                dialog_form: false
            }
        },

        methods: {
            goToForm: function () {
                window.scrollTo(0,1000);
                // document.animate({

                // })
            },
            onClickCloseDialog: function (value) {
                this.dialog_form = value
            },
            onSidebarChange: function(value) {
                this.sidebar = value
            }
        },

        mounted () {
            // particlesJS.load('particles-js', '../public/particlesjs-config1.json', function() {
            //     console.log('callback - particles.js config loaded');
            // });
        }
    }
</script>

<style lang="scss">
    .cc-toolbar > div.toolbar__content{
        height: 104px;
    }
    .toolbar-title {
        font-family: Quicksand,Roboto,serif;
        color: white;
        letter-spacing: -1px;
        font-size: 30px;
    }
    .dot-title {
        color: #22dea1;
        font-size:14px;
        font-weight: bold;
        margin-bottom: -19px;
        margin-left: 3px;
    }

    .vue-typer {
        font-size: 60px;
        font-weight: 100;
        font-family: Quicksand,Roboto,serif;

        .custom.char {
            color: white;
        }

        .custom.caret {
            background-color: white;
        }
    }

    .vue-typer.char {
        color: white;

    }

    .all {
        //background: linear-gradient(#2f6c89, #108555);
        //background-image: linear-gradient(#088283, #0f110f 90%), url(../public/noise.gif);
        //background-image: linear-gradient(#249987, #0f110f 90%);
        //background-image: linear-gradient(#1bc08f, #112026);
        //background: linear-gradient(rgb(52,151,154), #0f110f);
        //background: linear-gradient(rgb(52,151,154), #000000);
        //background-image: linear-gradient(#22dea1, #1f1f26);
        // background: #1f1f26;
        //#249987

        background: url("../public/coding_3.jpg") repeat center center fixed;
        // background: url("../public/noise.gif") repeat;
        // background-blend-mode: multiply;
        background-blend-mode: overlay;
    }
    //#ab1b5e

    .dialog_background {
        background: #0f1215
        // background: url("../public/noise.gif") repeat;
        // background-blend-mode: multiply;
    }

    .cc-footer {
        background-color: #1b1b21 !important;
        color: white;
        font-family: Quicksand,Roboto,serif;
        font-weight: 500;
        position: absolute;
        bottom: 0px;
        width: 100%;
    }
    .opts {
        font-weight: 400;
    }

    .block-content{
        height: 500px
    }
    .vertical-center {
        position: relative;
        top: 40%;
    }
    #logo {
        margin-top: 120px;
    }

    #particles-js {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    #noise {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.05;
        background: url(../public/noise.gif) repeat;
        z-index:0;
    }

    #intro {
        min-height: 100vh;
    }

    .promotion-text {
        font-family: Quicksand,Roboto,serif;
        color: white;
    }
    .icon-ref {
        width: auto;
        height: 100px;
    }

</style>
