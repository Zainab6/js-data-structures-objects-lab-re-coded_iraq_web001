// Write your solution in this file!

const driver = {}; 
driver.name = 'Sam';
function updateDriverWithKeyAndValue(driver,key,value) {
  driver.address = '11 Broadway';
  return driver;
}

function destructivelyUpdateDriverWithKeyAndValue(drive,key,value){
  driver.address = '12 Broadway';
}

const newDriver = DeleteFromDriverByKey(driver,name,'Sam');
