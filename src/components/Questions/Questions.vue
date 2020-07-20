<template>
	<div class="questionsWrapper">
		<b-spinner v-if="!isDataLoad" label="Loading..."></b-spinner>
		<template v-else>
			<h1>На скільки ти кіберспортивний експерт</h1>
			<p class="number">Запитання № {{getNumberQuestion}}</p>
			<p class="question">{{getQuestion[getNumberQuestion -1 ].question}}</p>
			<template v-for="(answers, i) in getQuestion[getNumberQuestion - 1 ].answers">
				<div class="answers">
					<input :id="i" type="radio" :value="answers" v-model="answer"/>
					<label :for="i">{{answers}}</label>
				</div>
			</template>
			<b-progress :value="getProgress" variant="success" striped></b-progress>
			<br/>
			<div class="footer">
				<button v-if="getTotalQuestion === getNumberQuestion"
				        @click="handleFinish"
				        :disabled="!answer">Завершити</button>
				<button v-else
				        :disabled="!answer"
				        @click="hendleNextQuestions">Продовжити</button>
			</div>
			<div class="message">Щоб продовжити, виберіть одну з відповідей!</div>
		</template>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from "vuex";

	export default {
		name: "Questions",
		data() {
			return {
				answer: ''
			}
		},
		computed: {
			...mapGetters([
				'getQuestion',
			  'isDataLoad',
			  'getTotalQuestion',
			  'getNumberQuestion',
			  'getProgress',
			]),
		},
		methods: {
			...mapActions(['fetchQuestions', 'nextQuestions', 'setFinish']),
			hendleNextQuestions() {
				this.nextQuestions(this.answer);
				this.answer = '';

			},
			handleFinish() {
				this.setFinish(this.answer);
			}
		},
		mounted() {
			this.fetchQuestions();
		}
	}
</script>

<style scoped lang="sass">
	.questionsWrapper
		border: 2px solid #ffffff
		padding: 20px
		border-radius: 10px
		max-width: 650px
		margin: 0 10px

		h1
			text-align: center
			color: #555555

		.number
			font-weight: bold
			font-style: italic

		.question
			line-height: 25px

		.answers
			padding: 7px
			display: flex
			align-items: center

			input
				margin-right: 10px

			input,
			label
				cursor: pointer

		.footer
			text-align: right

			span
				margin-right: 10px

			button
				padding: 7px 10px
				line-height: 1
				border: transparent
				border-radius: 4px
				background-color: #191327
				color: #fff
				font-size: 14px
				font-weight: bold
				cursor: pointer
				outline: none

				&:disabled
					color: #4d4d4d
					background-color: #d5d5d5
					cursor: not-allowed

		.message
			font-size: 12px
			font-style: italic
			font-weight: bold
			color: rgba(168, 0, 0, 0.6)
			text-align: center
			margin-top: 10px


</style>