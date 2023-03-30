module.exports = (sequelize, DataTypes) => {
  const planOptions = {
    tableName: 'Plans',
    underscored: true,
    timestamps: false,
  };

  const Plan = sequelize.define('Plan', {
    planId: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    coverage: { type: DataTypes.STRING },

    price: { type: DataTypes.DOUBLE },
  }, planOptions);

  Plan.associate = (models) => {
    Plan.belongsTo(models.Patient, { foreignKey: 'planId' })
  }

  return Plan;
};