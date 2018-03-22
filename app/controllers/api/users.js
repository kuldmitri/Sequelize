module.exports = app => {
    const db = app.db;

    return {
        /**
         * Search locations
         * @request GET /api/v1/access-accounts
         * @param req
         * @param res
         */
        list(req, res) {
            const query = {
                include: [
                    {
                        model: db.User,
                        as: 'user',
                        required: true,
                        attributes: [
                            'id',
                            'email',
                            'first_name',
                            'last_name',
                        ],
                        include: [
                            {
                                model: db.Account,
                                as: 'account',
                                attributes: [
                                    'id',
                                    'name',
                                    'type',
                                ],
                            },
                        ],
                    },
                    {
                        model: db.Account,
                        as: 'account',
                        required: true,
                        attributes: [
                            'id',
                            'name',
                            'type',
                        ],
                    },
                ],
                order: [
                    [db.Sequelize.col('"user.first_name"'), 'ASC'],
                    [db.Sequelize.col('"user.last_name"'), 'ASC'],
                ],
            };

            db.UserLinkedAccount.findAndCountAll(query)
                .then(result => {
                    res.set('X-Total-Count', result.count);
                    res.send(result.rows);
                })
                .catch(err => {
                    req.log.error(err, 'Error loading user account access items');
                    res.status(500).send('Cannot load user account access items');
                });
        },
    };
};
