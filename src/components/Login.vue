
<template>
	<div id ="login">
		<img id="close" src="../assets/ic_acc.png" />
		<img id="avatar" src="../assets/ic_acc.png" />
		{{userName}}
		<div class="inputblock">
			<img src="../assets/ic_acc.png">
			<input v-model="userName" />
		</div>

		<div class="inputblock">
			<img src="../assets/ic_pwd.png">
			<input v-model="userPwd" />
		</div>
	
	</div>
</template>


<script>
	export default {
	  name: '#login',
	  data: () => {
	    return {
	      userName: '',
	      userPwd: ''
	    }
	  }
	}
</script>

<style scoped>
	#login{
		padding: 10;
		background-color: '#454233'
	}

</style>