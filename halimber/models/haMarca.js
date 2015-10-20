var crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {
	var Model = sequelize.define('haMarca', {
		id:{ type: DataTypes.INTEGER, autoIncrement:true, primaryKey: true },
		marca:{type: DataTypes.STRING }
}, {
	tableName: 'ha_marca',
	classMethods: {
		associate: function(models) { 
			Model.hasMany(models.haProducto,{as:'haProducto', foreignKey:'ha_marca_id'})
		}
	},
	instanceMethods:{
	},
	getterMethods:{
	},
	setterMethods:{
	}
});

return Model
}