<template>
    <div>
        <!-- <div id="noise2">
        </div> -->
        <v-app class="all blue-grey darken-4">
            <v-toolbar class="elevation-5" :dark="true" style="background: transparent">
                <v-toolbar-title class="toolbar-title">
                    <!--<img src="../public/logoccwhite.png" style="width: auto; height: 40px"/>-->
                    Chimpcode
                </v-toolbar-title>
                <v-spacer></v-spacer>


                <v-btn flat dark class="opts">para clientes</v-btn>
                <v-btn flat dark class="opts">Se parte de nosotros</v-btn>

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
            <main class="">
                <v-container>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 offset-sm3>

                            <div class="terminal">
                                    <h4 class="form-title">S&eacute; parte de nuestra familia!</h4>
                                    <div class="form-container">
                                        <label class="label-form" for="Name">nombre: </label>
                                        <input class="input-form" type="text" name="Name" v-model="pedido.name" autofocus/>
                                    </div>
                                    <div class="form-container">
                                        <label class="label-form" for="Email">e-m@il: </label>
                                        <input class="input-form" type="email" name="Email" v-model="pedido.email"/>
                                    </div>
                                    <div class="form-container">
                                        <label class="label-form">Are you a...</label><br>
                                    </div>
                                    <div class="form-container kind-alternatives" v-for="(kind, i) in kind_data" :key='i'>

                                        <label for="">{{ kind.name }}...</label>
                                        <span class="checkbox-form" v-on:click="checkKind(kind.name, i)">
                                            [ {{ kind.value === true? 'x': '_' }} ]
                                        </span>
                                        <!-- <label class="label-form" for="Kind">Are you a...
                                            <br>(1) Frontend Developer
                                            <br>(2) Backend Developer
                                            <br>(3) UI/UX Designer
                                            <br>(4) FullStack Developer
                                            <br>(5) Beginner
                                            <br>:
                                        </label>
                                        <input class="input-form" type="number" name="Kind" value=""/> -->
                                    </div>
                                    <div class="submit-button-container">
                                        <button type="button" name="button" class="submit-button" v-on:click="submit">ENTER</button>
                                    </div>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>

            </main>

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

    import ccInput from './components/ccInput'
    import { VueTyper } from 'vue-typer'
    import 'particles.js'
    import CCLogo from './components/Logo'
    import CCConsole from './components/ConsoleEffect'

    export default {
        components: {
            CCLogo,
            VueTyper,
            CCConsole,
            ccInput
        },

        data () {
            return {
                pedido: {
                    name:"",
                    email:"",
                    kind: []
                },
                kind_data: [
                    { name: "(1) Frontend Developer", value: false },
                    { name: "(2) Backend Developer", value: false },
                    { name: "(3) UI/UX Designer", value: false },
                    { name: "(4) FullStack Developer", value: false },
                    { name: "(5) Beginner", value: false }
                ]
            }
        },
        methods: {
            checkKind: function (kindName, index) {
                this.kind_data[index].value = !this.kind_data[index].value
            },
            submit: function () {
                var self = this
                this.kind_data.map(function (kind) {
                    if (kind.value === true) {
                        self.pedido.kind.push(kind.name)
                    }
                })
                console.log(this.pedido);
            }
        },
        mounted () {
            // particlesJS.load('particles-js', '../public/particlesjs-config1.json', function() {
            //     console.log('callback - particles.js config loaded');
            // });
        }
    }
</script>

<style lang="stylus">

    @require './stylus/main'
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

        // background-color: rgba(#1f1f26, 0.57);
        background: url("../public/noise.gif") repeat;
        background-blend-mode: multiply;
        //#249987

    }
    //#ab1b5e

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

    .in-front-of {
        // position: absolute;
        z-index:1;
    }
    #noise2 {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.05;
        background: url(../public/noise.gif) repeat;
        z-index:3;
    }

    .promotion-text {
        font-family: Quicksand,Roboto,serif;
        color: white;
    }
    .icon-ref {
        width: auto;
        height: 100px;
    }
    .form-border
        border: 1px #34979a solid;
        border-radius: 3px;
        padding: 20px;
    .form-container
        margin-top: 12px
        width: 100%
    .terminal
        background-color: rgba(0, 0, 0, 0.51)
        padding: 3em
        margin: 2em
        border-radius: 10px
    .terminal > h4
        text-align: center
    .form-container > label, input, h4
        color: #22dea1
        font-family: 'Share Tech Mono', monospace;
    .form-container > label, input
        font-size: 24px
    .form-container > label
        width: 30%
    .input-form
        padding: 3px
        width: 70%
    .input-form:focus
        outline: none
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
    .checkbox-form
        color: #22dea1
    .kind-alternatives
        padding-left: 2em
    .kind-alternatives > label, span
        font-size: 18px
    .submit-button-container
        padding-top: 60px
        text-align: center;
    .submit-button
        font-family: 'Share Tech Mono', monospace;
        width: 150px;
        box-shadow: 3px 3px 0px #8ed9d2;
        background: #22dea1;
        text-transform: uppercase;
        color: #31220b;
        text-shadow: 1px 2px 0px rgba(255,255,255,.5);
        font-size: 24px;
        height: 48px;
        text-align: center;

</style>
