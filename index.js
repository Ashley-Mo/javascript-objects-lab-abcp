var recipes={name:"cake",needs:"flour"};
function updateObjectWithKeyAndValue(object, key, value){
  object.key='value';
}

function updateObjectWithKeyAndValue(object, key, value){
 var copy = Object.assign({}, object);
 object.key='value';
}