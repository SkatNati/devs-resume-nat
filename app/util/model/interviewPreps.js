const mongoose = require("mongoose");
const { Schema } = mongoose;

const interviewPrepSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    jobTitle: {
      type: String,
    },
    email: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    summary: {
      type: String,
    },

    // company
    jobInfo: {
      companyName: {
        type: String,
      },
      jobDescription: {
        type: String,
      },
    },

    extractedCvText: {
      parsedText: String,
      fileName: String,
    },

    company: {
      type: String,
    },
    summary: {
      type: String,
    },
    skills: {
      type: [String],
      required: false,
    },
    behavioralQuestions: {
      type: [String],
      required: false,
    },
    technicalQuestions: {
      type: [String],
      required: false,
    },
    projectDescription: {
      type: [String],
      required: false,
    },

    additionalProject: {
      type: [String],
      required: false,
    },

    questionsForInterviewers: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.interviewPrep ||
  mongoose.model("interviewPrep", interviewPrepSchema);
