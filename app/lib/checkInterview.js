const db = require('../models');

function checkInterview(interview_id, user_id, arrAnswers) {
    let points = 0;
    db.Interview.findById(id)
        .then(interview => {
            interview.dataValues.forEach((item, i, arr) => {
                if (item.question.text_right_answer === arrAnswers[i]) {
                    points = points + item.question.points;
                }
            });
            let completed_interview = {
                interview_id: interview_id,
                user_id: user_id,
                points: points,
            };
            db.Completed_interview.create(completed_interview)
        })

}

checkInterview(1, []);
