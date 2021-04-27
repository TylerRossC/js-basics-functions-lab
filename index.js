function distanceFromHqInBlocks(street){
    //returns a distance in blocks expect(distanceFromHqInBlocks(43)).to.equal(1)
    //expect(distanceFromHqInBlocks(50)).to.equal(8)
        if (street > 42){
            return street - 42;}
        //calculates distances below 42nd street  expect(distanceFromHqInBlocks(34)).to.equal(8)
        else {
            return 42 - street;}
}
function distanceFromHqInFeet(street){
//returns a distance in feet  expect(distanceFromHqInFeet(43)).to.equal(264)
   return distanceFromHqInBlocks(street) * 264;
}
function distanceTravelledInFeet(st1, st2){
//returns the distance travelled in feet  expect(distanceTravelledInFeet(50, 60)).to.equal(2640)
//returns distance when destination is below distance expect(distanceTravelledInFeet(34, 28)).to.equal(1584)
    //if (st1 > st2){
        //return (st1 - st2) * 264}
    //else{
        //return (st2 - st1) * 264}
    return Math.abs(st1 - st2) * 264;  //optimized code from ^ 
}
function calculatesFarePrice(start, destination){
//gives customers a free sample expect(calculatesFarePrice(43, 44)).to.equal(0)
//charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)  expect(calculatesFarePrice(34, 32)).to.equal(2.56)
//charges 25 dollars for a distance over 2000 feet expect(calculatesFarePrice(50, 58)).to.equal(25)
//does not allow rides over 2500 feet expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far')
    let distance = distanceTravelledInFeet(start, destination)
        if (distance <= 400){
            return 0;}
        else if (distance > 400 && distance < 2000){
            return (distance - 400) * .02;}
        else if (distance > 2000 && distance < 2500){
            return 25;}
        else{
            return 'cannot travel that far';}
        
}
