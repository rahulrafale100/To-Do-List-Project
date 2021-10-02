//Creating your own Modules

exports.getDate = function () {  //No need to write module.export
  var date = new Date();
  var option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var day = date.toLocaleDateString("en-US", option);
  return day;
};
exports.getDay = function () {
  let date = new Date();
  let option = {
    weekday: "long",
  };
  let day = date.toLocaleDateString("en-US", option);
  return day;
};
