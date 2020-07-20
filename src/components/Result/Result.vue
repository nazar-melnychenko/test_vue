<template>
	<div class="resultWrapper">
		<h1>Результат</h1>
		<p>Привильних відповідей: <b>{{points}}</b> з <b>{{totalQuestion}}</b></p>
		<p>Що становить: <b>{{points / totalQuestion * 100}}%</b></p>
	</div>
</template>

<script>
	export default {
		name: "Result",
		 props:{
			 totalQuestion: '',
			 points: '',
			 getPercent: ''
		 },
	}
</script>

<style scoped lang="sass">
.resultWrapper
	border: 2px solid #ffffff
	padding: 20px
	border-radius: 10px
	max-width: 500px
	width: 100%
	margin: 0 10px
	text-align: center

	h1
		text-align: center
		color: #555555
</style>