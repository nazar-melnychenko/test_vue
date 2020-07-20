import {fetchQuestionsAPI} from "../../api/api";

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
		progress: 0,
	},
	mutations: {
		setQuestions(state, questions){
			state.questions = questions;
			state.totalQuestion = questions.length;
			state.isDataLoad = true;
		},
		setNextQuestion(state, answer){
			state.progress = Math.ceil(state.numberQuestion / state.totalQuestion * 100);
			if (answer === state.questions[state.numberQuestion - 1].correct_answers) {
				state.points = ++state.points;
			}
			state.numberQuestion = ++ state.numberQuestion;
		},
		setFinish(state, answer){
			state.progress = Math.ceil(state.numberQuestion / state.totalQuestion * 100);
			if (answer === state.questions[state.numberQuestion - 1].correct_answers) {
				state.points = ++state.points;
			}
			state.numberQuestion = ++ state.numberQuestion;
			state.isFinish = true;
		},
	},
	actions: {
		 fetchQuestions({commit}){
			 fetchQuestionsAPI().then(data => commit('setQuestions', data))
		},
		nextQuestions({commit}, answer){
			commit('setNextQuestion', answer);
		},

		setFinish({commit}, answer){
			commit('setFinish', answer);
		}
	},
	getters: {
		isFinish(state){
			return state.isFinish
		},
		isDataLoad(state){
			return state.isDataLoad
		},
		getQuestion(state){
			return state.questions
		},
		getTotalQuestion(state){
			return state.totalQuestion
		},
		getNumberQuestion(state){
			return state.numberQuestion
		},
		getPoints(state){
			return state.points
		},
		getProgress(state){
			return state.progress
		},

	}
};