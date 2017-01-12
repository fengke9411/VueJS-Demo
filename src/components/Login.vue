
<template>
	<div id ="login">

	<div id="headclose">
		<img class="input_lefticon" src="../assets/ic_close.png">
	</div>

	<div style="text-align:center">
		<img id="avatar" src="../assets/iv_defaultavatar.png">
	</div>

		<div class="inputblock">
			<div class="imgwarp">
			<img class="input_lefticon" src="../assets/ic_acc.png">
			</div>
			<input class="input" placeholder="请输入账号" v-model="userName" />
			<div class="imgwarp">

			</div>
		</div>
		<hr/>
		<div class="inputblock">
			<div class="imgwarp">
			<img class="input_lefticon" src="../assets/ic_pwd.png">
			</div>
			<input class="input" v-bind:value="userPwd" v-bind:type="inputtype" placeholder="请输入登录密码" v-on:input="userPwd = $event.target.value" />
			<div class="imgwarp">
			<img id="switchBtn" class="input_lefticon" v-bind:src="switchsrc" v-on:click="switchBtnClick">
			</div>
		</div>
		<hr/>
	
			<input id="button" type="button" name="login" value="登  录" v-on:click="btnClick" />
	</div>
</template>


<script>
	// import dialog from './dialog'
	// import showdialog from '../store/actions'
	// import store from '../store/store'
	export default {
	  name: 'login',
	  props: ['message', 'icon'],
	  componemt: {
	    // dialog
	  },
	  data: () => {
	    return {
	      userName: '',
	      userPwd: '',
	      counter: 0,
	      pressed: false,
	      switchsrc: require('../assets/ic_show.png'),
	      inputtype: 'password'
	    }
	  },
	  computed: {
	    stateA () {
	      console.log('store.state.stateA = ' + this.$store.state.stateA)
	      return this.$store.state.stateA
	    }
	  },
	  created: () => {
	    console.log('hello created...')
	  },
	  mounted: () => {
	    console.log('hello mounted...')
	  },
	  updated: () => {
	    console.log('hello updated...')
	  },
	  methods: {
	    btnClick: function () {
	      this.pressed = !this.pressed
	      console.log('userName = ' + this.userName + '  pwd = ' + this.userPwd + '  pressed = ' + this.pressed)
	      // this.$emit('show-dialog', 'hello')
	      this.$store.dispatch('increment')
	      this.$store.dispatch('testPromise').then(() => {
	      // dosomething
	        this.$store.commit('showdialog', this.counter ++)
	      })
	      this.$store.commit('showdialog', this.counter ++)
	      console.log('commit = ' + this.$store.state.stateA)
	      console.log('route path = ' + this.$router.app)
	      // this.$el.parentNode.innerHTML = dialog.$el
	      // console.log('parentNode = ' + this.$el.parentNode.parentNode.innerHTML)
	    },
	    switchBtnClick: function () {
	      // 通过模块化的方式引用图片路径，这样引用的图片就可以成功打包进bundle文件夹里了
	      console.log('userName = ' + this.userName + '  pwd = ' + this.userPwd + '  pressed = ' + this.pressed)
	      this.pressed = !this.pressed
	      if (this.pressed) {
	        this.inputtype = 'text'
	        this.switchsrc = require('../assets/ic_hidden.png')
	      } else {
	        this.inputtype = 'password'
	        this.switchsrc = require('../assets/ic_show.png')
	      }
	      console.log('userName = ' + this.userName + '  pwd = ' + this.userPwd + '  pressed = ' + this.pressed)
	      // this.$el.ownerDocument.getElementById('switchBtn').src = switchsrc
	      // this.$el.ownerDocument.getElementById('switchBtn').src = require('../assets/ic_hidden.png')
	      // console.log(this.$el.ownerDocument.getElementById('switchBtn'))
	      console.log('parentNode = ' + this.el)
	    }
	  }

	}
</script>

<style scoped>
	#login{
		display: flex;
		flex-direction: column;
		padding: 10;
		background-color: '#454233';
		align-items: stretch;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	/*@media screen and (max-width:960px) {
		#login{
			width: 100%;
			height: 100%;
		}
	}
	@media screen and (min-width:960px) {
		#login{
			justify-content: center;
			width: 80%;
			height: 100%;
	}
	}*/
	#headclose{
		display: flex;
		justify-content: flex-start;
		align-content: left;
		margin: 0.5em 0.5em 0.5em 0.5em;
	}
	#avatar{
		width: 6em;
		height: 6em;
		margin-bottom: 3em;
		margin-top: 2em;
		border-radius: 3em;
	}
	.inputblock{
		display: flex;
		margin: 0 0.5em 0 0.5em;
		align-content: center;
		flex-direction: row;
		align-items: center;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
	}
	.imgwarp{
		display: flex;
		justify-content: center;	/*主轴对齐*/
		align-items: center;			/*侧轴对齐*/
		/*flex: 1;*/
		flex-direction: row;
		width: 1.2em;
	}
	.input_lefticon{
		width: 1.2em;
		height: 1.2em;
	}
	.input{
		flex: 1;
		padding: 0 0 0 0.5em;
		font-size: 1.0em;
		border: 0;
		border-style: none;
		outline: none;
	}

	#button{
		margin: 1em 1em 1em 1em;
/*		height: 2.5em;*/
		background-color: #55a4f6;
		color: white;
		border-style: none;
		outline: none;
		padding: 0.8em 0 0.8em 0;
		font-size: 1.2em;
		border-radius: 0.2em;
		box-shadow:0em 0.05em 0.1em #999999;
	}
	#button:hover{
		background-color: #cccccc;
		box-shadow:0em 0.05em 0.05em #999999;
	}


	hr{
		size: 1;
		/*border: none;*/
		border-top-width: 0;
		border-left-style: none;
		color: #666666;
		margin: 0.5em 0.5em 0.5em 0.5em;
	}
</style>