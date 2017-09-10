<template lang="html">
    <div class="">
        <div id="container">
            <div class="commmand-cursor">
                <span class="char_terminal">
                    &gt;
                </span>
                <span class="el">
                    _
                </span>
                <span class="">
                    <v-btn round outline class="teal--text">{{ button_name }}</v-btn>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import anime from 'animejs'
export default {
    name: "cc-console",
    data() {
        return {
            button_name:"Enroll me"
        }
    },
    methods: {
        someAnimation: function () {
            var example = anime({
                targets: '.el',
                opacity: 0,
                delay: 50,
                easing: 'linear',
                backgroundColor: '#000',
                loop: true
            });
        }
    },
    mounted: function () {
        this.someAnimation()
    }
}
</script>

<style lang="stylus">
.el
    background-color:#112026
    color:white
.commmand-cursor > span
    color: #088283
    font-size:32px
#container
    width: 20%
    margin: 0 auto


</style>
