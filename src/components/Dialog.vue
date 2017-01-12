<template>
	<div id="dialogmain">
		<div id="dialogcontainer">
		</div>
		<div id="dialogframe">
		</div>
		<dialog></dialog>
	</div>

</template>

<script>
	export default{
	  name: 'custdialog',
	  data: function () {
	    return {
	      title: '',
	      content: '',
	      btnLeft: '',
	      btnRight: ''
	    }
	  }
	}

</script>

<style scoped>
	#dialogmain{
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		align-items: center;
		padding: auto;
		justify-content: center;
		align-items: center;
		text-align: center;
		vertical-align: middle;
	}
	#dialogcontainer{
		position: absolute;
		top: 0;
		background-color: #333333;
		opacity: 0.3;
		float: left;
		width: 100%;
		height: 100%;
	}
	#dialogframe{
		z-index: 100;
		height: 10em;
		width: 20em;
		margin: 0 auto;
		border-color: #999999;
		background-color: #ffffff;
		border-radius: 1em;
		vertical-align: middle;
	}
</style>