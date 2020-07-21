import {fetchQuestionsAPI} from "../../api/api";

const nextStep = (state, answer) => {
	if (answer === state.questions[state.numberQuestion - 1].correct_answers) {
		state.points = ++state.points;
	}
	state.numberQuestion = ++state.numberQuestion;
};

export default {
	state: {
		questions: [
			{
				"question": '',
				"answers": [],
				"correct_answers": ''
			},
		],
		numberQuestion: 1,
		totalQuestion: 0,
		points: 0,
		isFinish: false,
		isDataLoad: false,
	},
	mutations: {
		setQuestions(state, questions) {
			state.questions = questions;
			state.totalQuestion = questions.length;
			state.isDataLoad = true;
		},
		setNextQuestion(state, answer) {
			nextStep(state, answer);
		},
		setFinish(state, answer) {
			nextStep(state, answer);
			state.isFinish = true;
		}
	},
	actions: {
		fetchQuestions({commit}) {
			fetchQuestionsAPI().then(data => commit('setQuestions', data))
		},
		nextQuestions({commit}, payload) {
			commit('setNextQuestion', payload);
		},

		setFinish({commit}, payload) {
			commit('setFinish', payload);
		}
	},
	getters: {
		isFinish(state) {
			return state.isFinish
		},
		isDataLoad(state) {
			return state.isDataLoad
		},
		getQuestion(state) {
			return state.questions[state.numberQuestion - 1]
		},
		getTotalQuestion(state) {
			return state.totalQuestion
		},
		getNumberQuestion(state) {
			return state.numberQuestion
		},
		getPoints(state) {
			return state.points
		},
		getProgress(state) {
			return (state.numberQuestion - 1) / state.totalQuestion * 100;
		},
	}
};