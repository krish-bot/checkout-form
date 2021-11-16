<template>
	<div>
		<div class="nav-contain d-block d-md-flex">
			<div class="d-flex flex-column align-items-start col-12 col-md-8">
				<h3 class="mt-3 pb-3 border-bottom col-12">Getting your order</h3>
				<h5 class="mt-3">Shipping information</h5>
				<div class="mt-3 col-12 col-md-6">
					<label class="">First Name<span class="mandatory">*</span></label>
					<div class="col-md-9">
						<input type="text" class="form-control" v-model="form.firstName" @keyup="validate($event,'firstName','alpha')"/>
					</div>
                    <p v-if="error.firstName != ''" class="error-msg">{{this.error.firstName}}</p>
				</div>
				<div class="mt-3 col-12 col-md-6">
					<label class="">Last Name<span class="mandatory">*</span></label>
					<div class="col-md-9">
						<input type="text" class="form-control" v-model="form.lastName" @keyup="validate($event,'lastName','alpha')"/>
					</div>
                    <p v-if="error.lastName != ''" class="error-msg">{{this.error.lastName}}</p>
				</div>
				<div class="mt-3 col-12 col-md-6">
					<label >Address<span class="mandatory">*</span></label>
					<div class="col-md-9">
						<textarea class="form-control" v-model="form.address" @keyup="validate($event,'address')"/>
					</div>
                    <p v-if="error.address != ''" class="error-msg">{{this.error.address}}</p>
				</div>
				<div class="mt-3 col-12 col-md-6">
					<label>City<span class="mandatory">*</span></label>
					<div class="col-md-9">
						<input type="text" class="form-control" v-model="form.city" @keyup="validate($event,'city','alpha')"/>
					</div>
                    <p v-if="error.city != ''" class="error-msg">{{this.error.city}}</p>
				</div>
				<div class="mt-3 col-md-6">
					<div class="row">
						<div class="col-6 col-md-5">
							<label>State<span class="mandatory">*</span></label>
							<input type="text" class="form-control" v-model="form.state" @keyup="validate($event,'state','alpha')"/>
                            <p v-if="error.state != ''" class="error-msg">{{this.error.state}}</p>
                        </div>
						<div class="col-6 col-md-4">
							<label>ZIP Code<span class="mandatory">*</span></label>
							<input type="text" class="form-control" v-model="form.zipCode" @keyup="validate($event,'zipCode','numeric')"/>
                            <p v-if="error.zipCode != ''" class="error-msg">{{this.error.zipCode}}</p>
                        </div>
					</div>

				</div>
				<div class="mt-3 col-12 col-md-6">
					<input type="checkbox" class="" id="check" v-model="saveForLater"/>
					<label for="check">&nbsp; Save this as my billing address</label>
				</div>

				<p class="pb-3 border-bottom col-12 col-md-9"></p>

				<h5 class="mt-3">Contact information</h5>

				<div class="mt-3 col-12">
					<label>Email Address<span class="mandatory">*</span></label>
					<div class="col-md-6">
						<input type="text" class="form-control" v-model="form.mail" @keyup="validate($event,'mail','mail')"/>
					</div>
                    <p v-if="error.mail != ''" class="error-msg">{{this.error.mail}}</p>
				</div>
				<div class="mt-3 col-12">
					<label>Phone Number<span class="mandatory">*</span></label>
					<div class="col-md-6">
						<input type="text" class="form-control" v-model="form.phone" @keyup="validate($event,'phone','numeric')"/>
					</div>
                    <p v-if="error.phone != ''" class="error-msg">{{this.error.phone}}</p>
				</div>
				<div class="mt-3 col-12">
					<input type="checkbox" class="" id="check" v-model="furtherUpdates"/>
					<label for="check">&nbsp; Text me updates about my Best Buy Order.</label>
				</div>
				<div class="col-12 mt-3">
					<button class="btn btn-primary py-1 col-12 col-md-6" @click.prevent="submitForm">Continue to Payment Information</button>
				</div>
				<p class="pb-3 border-bottom col-12 col-md-0"></p>
			</div>

			<div class="col-12 col-md-4">
				<h3 class="mt-3">Order Summary</h3>
				<div class="ms-md-2 border mt-3">
					<div class="p-2">
						<p class="h6">Shipping</p>
						<div class="d-flex justify-content-between">
							<img src="../assets/laptop.jpg" width="100" height="80" alt="---"/>
							<div class="d-flex flex-column">
								<span class="px-2 card-content text-wrap">Microsoft + Surface G0 - 10" Touch-Screen -</span>
								<a class="px-2 card-content" href="#">Add gift options</a>
							</div>
							<div class="text-end">
								<p class="text-strong m-0 card-content">$399.00</p>
								<p class="m-0 card-content">Qty 1</p>
								<a href="#" class="card-content">Remove</a>
							</div>
						</div>
						<p class="h6 mt-2">Digital Delivery</p>
						<div class="d-flex justify-content-between">
							<img src="../assets/laptop.jpg" width="100" height="80" alt="---"/>
							<div class="d-flex flex-column">
								<span class="px-2 card-content text-wrap">Microsoft + Surface G0 - 10" Touch-Screen -</span>
							</div>
							<div class="text-end">
								<p class="text-strong m-0 card-content text-danger">FREE</p>
								<p class="m-0 card-content">Qty 1</p>
								<a href="#" class="card-content">Remove</a>
							</div>
						</div>
					</div>
					<p class="pb-3 border-bottom col-12 col-md-0"></p>
					<div class="p-2">
						<div class="d-flex justify-content-between">
							<div class="text-start">
								<p class="text-strong m-0 card-content">Item Subtotal</p>
								<p class="m-0 card-content">Shipping</p>
								<a href="#" class="card-content">Estimated Sales Tax</a>
							</div>
							<div class="text-end">
								<p class="text-strong m-0 card-content">$399.00</p>
								<p class="m-0 card-content text-danger">FREE</p>
								<a href="#" class="card-content">Not Calculated</a>
							</div>
						</div>
						<p class="pb-3 border-bottom col-12 col-md-0"></p>
						<div class="d-flex justify-content-between">
							<span class="h4">Total</span>
							<span class="h4">$399.00</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<p class="pb-3 border-bottom col-12 col-md-9"></p>
	</div>
</template>
<script>

export default{
    name: "CheckoutForm",
    data(){
        return{ 
            form:{
                firstName:'',
                lastName: '',
                address:'',
                city:'',
                state:'',
                zipCode:'',
                mail:'',
                phone:'',
            },
            furtherUpdates:false,
            saveForLater:false,
            error:{
                firstName:'',
                lastName: '',
                address:'',
                city:'',
                state:'',
                zipCode:'',
                mail:'',
                phone:'',
            },
        }
    },
    methods:{
        validate: function(e,toValidate,type){
			let TABKEY = 9
            let alphaValidation  = /^[A-Za-z\s]+$/
            let numberValidation = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g
            let mailValidation   = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
            if(this.form[toValidate] == '' && e.keyCode != TABKEY){
                this.error[toValidate] = `**${toValidate} is required`
            }
            else if(type == 'alpha'){
                if(!this.form[toValidate].match(alphaValidation) && e.keyCode != TABKEY ){
                    this.error[toValidate] = '**Must be alphabetic'
                }
                else{
                    this.error[toValidate] = ''
                }
            }
            else if(type == 'numeric'){
                if(!this.form[toValidate].match(numberValidation) && e.keyCode != TABKEY){
                    this.error[toValidate] = '**Must be numeric'
                }
                else{
                    this.error[toValidate] = ''
                }
            }
            else if(type == 'mail'){
                if(!this.form[toValidate].match(mailValidation) && e.keyCode != TABKEY){
                    this.error[toValidate] = '**Invalid mail Id'
                }
                else{
                    this.error[toValidate] = ''
                }
            }else{
                this.error[toValidate] = ''
            }
        },
        submitForm: function(){
            let errorOccured = []
            Object.keys(this.form).map( formData => this.validate(formData))
            Object.keys(this.error).map(key => this.error[key] == '' ? '':errorOccured.push(true))
            if(errorOccured.length > 0){
                return false
            }else{
                this.$router.push( {
					path: this.$route.query.redirect || '/greetings-form'
				})
            }
        }
    }
}
</script>

<style lang="scss">
@import '../sass/abstracts/_variable.scss';
@import '../sass/abstracts/_forms.scss';
@import '../sass/mixins/_breakpoints.scss';

.nav-contain{	
	padding:0 1rem !important;
	@include media-min-lg{
		padding:0 13rem !important ;
	}
}

.mandatory{
	color:rgb(248, 133, 1);
}
.card-content{
	font-size: 13px;
}
.error-msg{
    font-size: 11px;
    font-weight: 600;
    color: rgb(233, 75, 13);
    margin: 0;
}
</style>

