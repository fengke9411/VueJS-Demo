
<template>
	<div id="login">
		<input v-model="userName" />
		<input v-model="userPwd" />
	</div>


</template>


<script>
	var vue = new Vue({
		el:"#login",
		data:{
			userName:"",
			userPwd:""
		},
		created:function(){
			console.log("view is created!")
		},
		mounted:function(){
			console.log("view is mounted!")
		},
		updated:function(){
			console.log("view is updated!")
		},
		destoryed:function(){
			console.log("view is destoryed!")
		}

	});

</script>

<style>
	
</style>