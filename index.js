// Write your solution in this file!
function updateDriverWithvalueAndValue(driver, key, value) {
  return Object.assign({}, driver {[key]:, value});
}

function destructivelyUpdateDriverWithvalueAndValue(driver, key, value) {
  return Object.assign(driver,{[key]:, value});
}

function deleteFromDriverByKey(driver, key) {
delete driver.key;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.key;
}
