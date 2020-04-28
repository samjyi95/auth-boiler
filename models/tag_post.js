'use strict';
module.exports = (sequelize, DataTypes) => {
  const tag_post = sequelize.define('tag_post', {
    tagId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {});
  tag_post.associate = function(models) {
    // associations can be defined here
  };
  return tag_post;
};