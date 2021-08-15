function bullseye(type, target, actual, green, red){
  if(type=='Within'){
    // Green Upper
    const gu = target * (1+green)
    // Green lower
    const gl = target - (target*green)
    // Red Upper
    const ru =  target * (1+ red)
    // REd lower
    const rl = target - (target*red)

    if(actual >= ru){
      return "RED"
    }else if (actual <= rl){
      return "RED"
    }else if(actual <= gu && actual >= gl){
      return "GREEN"
    }else{
      return "YELLOW"
    }
  }
  return "Not Supported"
}

module.exports = bullseye