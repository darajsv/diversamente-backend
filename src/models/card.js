module.exports = (sequelize, DataTypes) => {
    const card = sequelize.define(
        "Card",
        {
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            image: DataTypes.STRING,
            createdAt: {
                type: DataTypes.DATE,
                field: "created_at",
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: "updated_at",
            }
        },
        {
            tableName: "cards",
        }
    );
    return card;
}