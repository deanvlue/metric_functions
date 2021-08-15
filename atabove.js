function atavobe(type, target, actual, green, red){
  //measure current result at the threshold or above 
  //it has to be upper than lower target only
  if(type=='At or Above'){
    // Green lower
    const gl = target - (target*green)
    // REd lower
    const rl = target - (target*red)

    if(actual >= rl && actual < gl){
      return "RED"
    }else if(actual >= gl ){
      return "GREEN"
    }else{
      return "YELLOW"
    }
  }
  return "Not Supported"
}

module.exports = atavobe