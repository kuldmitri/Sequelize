module.exports = (sequelize, DataTypes) =>
    sequelize.define('Notification_for_admin',
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            text: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            completed_task_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
        },
        {
            tableName:'notifications_for_admin',
            timestamps: true,
            underscored: true,
        }
    );
