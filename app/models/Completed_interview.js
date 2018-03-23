module.exports = (sequelize, DataTypes) =>
    sequelize.define('Completed_interview',
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            interview_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
            },
            user_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
            },
            points: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
        },
        {
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );

