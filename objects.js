module.exports = {
    user: {
        name: 'name',
        surname: 'surname',
        middle_name: 'middle_name',

        date_birth: new Date(1921, 12, 12),

        mobile_operator_id: 1,
        telephone: 'telephone',
        registration_IMEI: '',

        city_id: 2,
        sales_point_id: 2,
        place_of_work_id: 2,

        points: 0,
        number_of_proposed_tasks: 0,
        number_of_completed_tasks: 0,
        number_of_invited_users: 0,
    },
    notification_for_admin: {
        text: 'text',
        type: 'type',
        user_id: 2,
        completed_task_id: 2,
    },
    interview: {
        name: 'name',
        type: '',
        lifetime: new Date(1921, 12, 12),
        questions: [
            {
                text: 'text1',
                type: 'type',
                right_answer: 'rightAnswer',
                count_right_answer: 2,
                points: 2,
                answers: [
                    {text: 'text', is_true: true},
                    {text: 'text', is_true: false},
                    {text: 'text', is_true: true},
                    {text: 'text', is_true: false},
                ]
            },
            {
                text: 'text2',
                type: 'type',
                right_answer: 'rightAnswer',
                count_right_answer: 2,
                points: 2,
                answers: [
                    {text: 'text', is_true: false},
                    {text: 'text', is_true: true},
                    {text: 'text', is_true: false},
                    {text: 'text', is_true: true},
                ]
            },
        ]
    }
};



