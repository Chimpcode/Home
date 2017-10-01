<template>
    <div>
    <v-toolbar dark class="custom-teal" >
        <v-btn icon @click.native="onClickButton" dark>
            <v-icon class="black--text">close</v-icon>
        </v-btn>
        <v-toolbar-title class="toolbar-title-form">Inscr&iacute;bete</v-toolbar-title>
    </v-toolbar>
    <main class="">
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm10 offset-sm1>

                    <div class="terminal">
                            <h4 class="form-title">S&eacute; parte de nuestra familia!</h4>
                            <div class="form-container">
                                <label class="label-form" for="Name">nombre: </label>
                                <input class="input-form" type="text" name="Name"
                                        placeholder="_" v-model="pedido.name" autofocus/>
                            </div>
                            <div class="form-container">
                                <label class="label-form" for="Email">e-mail: </label>
                                <input class="input-form" type="email" name="Email"
                                        placeholder="_" v-model="pedido.email"/>
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
                            <div class="form-container">
                                <label class="label-form">Ultima experiencia...</label><br>
                            </div>
                            <div class="form-container">
                                <label class="label-form" for="empresa_anterior">Empresa: </label>
                                <input class="input-form" type="text" name="empresa_anterior"
                                        placeholder="_" v-model="pedido.empresa_anterior"/>
                            </div>
                            <div class="form-container">
                                <label class="label-form" for="labor_realizado">Labor realizado: </label>
                                <input class="input-form" type="text" name="labor_realizado"
                                        placeholder="_" v-model="pedido.labor_realizado"/>
                            </div>
                            <div class="form-container">
                                <label class="label-form">Fecha: </label>
                                <input class="input-form-date" 
                                        type="text" 
                                        size="2"
                                        maxlength="2"
                                        name="pedido_fecha_dd"
                                        placeholder="dd" v-model="pedido.fecha_dd"/>
                                <span class="teal-text"> / </span>
                                <input class="input-form-date"
                                        type="text" 
                                        size="2"
                                        maxlength="2"
                                        name="pedido_fecha_mm"
                                        placeholder="mm" v-model="pedido.fecha_mm"/>
                                <span class="teal-text"> / </span>
                                <input class="input-form-date" 
                                        name="pedido_fecha_yy"
                                        placeholder="yy" 
                                        type="text" 
                                        size="2"
                                        maxlength="2"
                                        v-model="pedido.fecha_yy"/>
                            </div>

                            <div class="submit-button-container">
                                <button type="button" name="button" class="submit-button" v-on:click="submit">ENTER</button>
                            </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </main>
    </div>
</template>

<script>

    import ccInput from './ccInput'

    export default {
        name: "FormBody",
        props: {
            dialog: Boolean
        },
        components: {
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
            onClickButton: function() {
                this.$emit('clicked', false)
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

    @require '../stylus/main'

    .custom-teal{
        background-color: #22dea1 !important
    }
    .teal-text{
        color: #22dea1
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
        background: url("../../public/noise.gif") repeat;
        background-blend-mode: multiply;
        //#249987

    }
    //#ab1b5e

    .form-border
        border: 1px #34979a solid;
        border-radius: 3px;
        padding: 20px;
    .form-container
        margin-top: 12px
        width: 100%

    .terminal
        padding: 3em
        margin: 2em
        border-radius: 10px

    .terminal-background
        background-color: rgba(0, 0, 0, 0.51)

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
    .input-form-date{
        padding: 3px
        outline: none
        width: 32px
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
    .toolbar-title-form
        font-family: 'Share Tech Mono', monospace;
        text-shadow: 1px 2px 0px rgba(255,255,255,.5);
        font-size: 24px;
        color: black

    ::-webkit-input-placeholder
        color: #1fb785
</style>
