<template lang="">
    <div>
        <Header/>
        <router-view></router-view>
    </div>
</template>
<script>
import Header from "@/views/Header"
// import CheckoutForm from "@/components/checkOut"

export default {
    name:'CheckOut',
    components:{
        Header,
        // CheckoutForm
    }
}
</script>
<style lang="">
    
</style>