<template>
    <div>
        <v-layout>
            <v-flex text-xs-center xs12>
                <img src="../../public/logocchd.png" style="height: auto; width: 200px;"/>
            </v-flex>
        </v-layout>
        <v-layout style="margin-top: -40px;">
            <v-flex text-xs-center xs12>
                <span class="chimp-name"> Chimpcode</span>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: "cc-logo"

    }

</script>

<style>
    .chimp-name {
        color: white;
        font-size: 80px;
        font-weight: 500;
        font-family: Quicksand,Roboto,serif;
        text-shadow: 0 4px #06100b;
        letter-spacing: -5px;
    }

</style>