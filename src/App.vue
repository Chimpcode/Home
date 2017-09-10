<template>
    <div class="background">
        <section class="jumbotron">
            <h3>We write Software</h3>

            <effect-background>
            </effect-background>

        </section>
        <div class="">
        </div>
    </div>

</template>

<script>
    import EffectBackground from './components/EffectBackground.vue'
    export default {
        components: {
            EffectBackground
        },
        data () {
            return {

            }
        }
    }
</script>

<style lang="stylus">
.background
    background-color: #000
    height: 100%
    font-family: 'Quicksand', sans-serif;
.jumbotron > h3
    text-align:center
    color: #fff
    line-height: 600px
</style>
