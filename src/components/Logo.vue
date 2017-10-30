<template>
    <div>
        <v-layout>
            <v-flex text-xs-center xs12>
                <img src="../../public/logocchd.png" style="height: auto; width: 200px;"/>
            </v-flex>
        </v-layout>
        <v-layout style="margin-top: 40px;">
            <v-flex text-xs-center xs12>
                <span class="chimp-phrase"> We make what f**kng customers want</span>
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
    .chimp-phrase {
        color: #22dea1;
        font-size: 60px;
        font-weight: 500;
        font-family: Quicksand,Roboto,serif;
        text-shadow: 0 4px #06100b;
        letter-spacing: -2px;

        text-shadow: #22dea1 0 0 26px;
    }

</style>