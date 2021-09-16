const Question = require("../models/Question");

const questionResolver = {
  Query: {
    questions: async () => {
      return Question.find();
    },
    question: async (_, { id }) => {
      return Question.findById(id);
    },
  },
  Mutation: {
    createQuestion(_, { question }) {
      const newQuestion = new Question(question);
      return newQuestion.save();
    },
    updateQuestion(_, { id, question }) {
      return Question.findByIdAndUpdate(id, question, {
        new: true,
      });
    },
    deleteQuestion(_, { id }) {
      return Question.findByIdAndRemove(id);
    },
  },
};

module.exports = questionResolver;
