<template>
    <div>
        <!-- <div id="noise">

        </div> -->
        <v-app class="all blue-grey darken-4">
            <v-toolbar class="elevation-5" :dark="true" style="background: transparent">
                <v-toolbar-title class="toolbar-title">
                    <!--<img src="../public/logoccwhite.png" style="width: auto; height: 40px"/>-->
                    Chimpcode
                </v-toolbar-title>
                <v-spacer></v-spacer>


                <v-btn flat dark class="opts">para clientes</v-btn>
                <v-btn flat dark class="opts" @click.native.stop="dialog_form = !dialog_form">Se parte de nosotros</v-btn>

                <v-btn outline style="color: #22dea1">
                    Ingresa
                    &nbsp;
                    <v-icon class="fa fa-github"></v-icon>
                </v-btn>

                <!--
                <v-btn icon>
                    <v-icon>more_vert</v-icon>
                </v-btn>
                -->
            </v-toolbar>

            <main>
                <v-container fluid>
                    <cc-logo id="logo"></cc-logo>

                    <v-layout style="margin-top: 200px;" text-xs-center>
                        <v-flex xs4>
                            <img class="icon-ref" src="../public/programming.png"/>
                        </v-flex>
                        <v-flex xs4>
                            <img class="icon-ref" src="../public/fork.png"/>
                        </v-flex>
                        <v-flex xs4>
                            <img class="icon-ref" src="../public/innovative.png"/>
                        </v-flex>

                    </v-layout>

                    <v-layout class="promotion-text" style="margin-top: 10px;" text-xs-center>
                        <v-flex xs4 class="text-xs-center px-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur.
                        </v-flex>
                        <v-flex xs4 class="text-xs-center px-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur.
                        </v-flex>
                        <v-flex xs4 class="text-xs-center px-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur.
                        </v-flex>

                    </v-layout>



                </v-container>

            </main>
            <v-dialog v-model="dialog_form" 
                    fullscreen 
                    transition="dialog-bottom-transition" 
                    :overlay="false">

                    <div>
                        <form-body 
                            class="dialog_background" 
                            :dialog="dialog_form" 
                            @clicked="onClickCloseDialog">
                        </form-body>
                    </div>
                <!-- <v-card>
                    <v-card-text> HOLA </v-card-text>
                </v-card> -->
            </v-dialog>

            <v-footer class="pa-3" style="background-color: #1b1b21; color: white; font-family: Quicksand,Roboto,serif; font-weight: 500;">

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
        </v-app>
    </div>
</template>

<script>
    import { VueTyper } from 'vue-typer'
    import 'particles.js'
    import CCLogo from './components/Logo'
    import CCConsole from './components/ConsoleEffect'
    import FormBody from './components/FormBody'

    export default {
        components: {
            CCLogo,
            VueTyper,
            CCConsole,
            FormBody
        },

        data () {
            return {
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
    .toolbar-title {
        font-family: Quicksand,Roboto,serif;
        color: #22dea1;
        //font-size: 20px;
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

        background: url("../public/noise.gif") repeat;
        background-blend-mode: multiply;
    }
    //#ab1b5e

    .dialog_background {
        background: #0f1215
        // background: url("../public/noise.gif") repeat;
        // background-blend-mode: multiply;
    }

    .opts {
        font-weight: 400;
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

    .promotion-text {
        font-family: Quicksand,Roboto,serif;
        color: white;
    }
    .icon-ref {
        width: auto;
        height: 100px;
    }

</style>
