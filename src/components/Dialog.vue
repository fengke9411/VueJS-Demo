<template>
	<div id="dialogcontainer">
		
		<div id="dialogframe">
		</div>

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
	#dialogcontainer{
		position: absolute;
		top: 0;
		background-color: #333333;
		opacity: 0.3;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
		float: left;
		width: 100%;
		height: 100%;
	}
	#dialogframe{
		height: 10em;
		width: 20em;
		opacity: 1;
		border-color: #999999;
		background-color: #ffffff;
		border-radius: 1em;
	}
</style>