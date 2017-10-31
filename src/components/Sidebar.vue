<template>
<transition name="slide">
  <div id="sidebar" v-if="isOpen === true">
    <div>
      <div class="close-icon">
        <v-btn flat icon @click.native.stop="updateSidebar"><v-icon>cancel</v-icon></v-btn>
      </div>

      <div class="sidebar-title">Se parte de nosotros e inicia una 
        <span class="emphasis">nueva aventura.</span>
      </div>

      <div class="text-xs-center my-3">
        <img src="../../public/spacecraft.svg" width="80px"/>
      </div>

      <div class="mx-4 my-0 px-4" v-for="(item, index) in inputs" :key="index">
        <v-text-field
          dark
          name="input-1"
          class="input-sidebar"
          :label="item.label"
          v-model="item.value"
          id="input"
        ></v-text-field>
      </div>

      <div class="mb-4 ml-5 mt-4 label-item">Te desempe&ntilde;as como </div>

      <div class="mx-4 my-0 px-4 pt-2" v-for="(item, index) in skills" :key="index">
        <v-checkbox class="checkbox-item" color="primary" v-bind:label="item.label" v-model="item.value" dark :hide-details="true"></v-checkbox>
      </div>
    </div>
    <div class="text-xs-center mt-5">
      <v-btn class="primary black--text" @click.native.stop="send_info()"> enviar</v-btn>
    </div>
    
  </div> 
</transition>
</template>

<script>
export default {
  name: 'sidebar',
  props: {
    open: { type: Boolean, default: true }
  },
  data() {
    return {
      inputs: [
        {label: 'Nombres'},{label: 'Email'},{label: 'Telefono'}
      ],
      skills: [
        {label: 'Frontend developer', value: false},
        {label: 'Backend developer', value: false},
        {label: 'UI/UX developer', value: false},
        {label: 'FullStack developer', value: false},
        {label: 'Beginner', value: false}
      ]
    }
  },
  computed: {
    isOpen: function() {
        return this.open
    }
  },
  methods:{
      updateSidebar: function(event){
         this.$emit("update-sidebar-open", false) ;
      },
      send_info: function() {
        if(this.inputs[0].value !== undefined && 
           this.inputs[1].value !== undefined && 
           this.inputs[2].value !== undefined) 
        {
          let submit_request = {
            name: this.inputs[0].value,
            email: this.inputs[1].value,
            phonenumber: this.inputs[2].value
          }

          this.$http.post('http://localhost:8079/developers', submit_request)
          .then(function(result) {
            this.emit_snackbar(result.message)
          })
          .catch(function(err) {
            // err
            this.emit_snackbar("Ah ocurrido un problema, por favor intenta de nuevo")
          })
        } else {
          console.log("undefined fields")
        }
        

      },
      emit_snackbar: function(message) {
        this.$emit("on-info-submission", message)
      }
  }
}
</script>

<style lang="stylus">
#sidebar
  font-family: Quicksand,Roboto,serif
  position: fixed
  width: 400px
  top: 0px
  bottom: 0px
  right: 0px

  z-index: 9999
  padding: 16px
  background: #111F32

.brand-font
  font-family: Quicksand,Roboto,serif

.close-icon i
  color: #FF3851 !important
.sidebar-title
  font-family: Quicksand,Roboto,serif
  color: #b9b9b99e
  font-size:18px
  text-align: center
  margin: 18px

.emphasis
  font-family: Quicksand,Roboto,serif
  color: #ffffffa6
  font-weight: 600

.input-sidebar label
  font-size: 12px

.input-sidebar input
  font-family: Quicksand,Roboto,serif
.checkbox-item
  padding-top: 0px
.label-item
  font-size: 16px
  font-weight: 500
  color: #b9b9b99e

.slide-enter-active 
  transition: all 1s ease
.slide-leave-active 
  transition: all .8s ease
.slide-enter, .slide-leave-to
  transform: translateX(400px)
 
</style>
