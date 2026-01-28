const maxPackagesGreedy = (warehouse, packages) => {
  // get wh volume
  // sort packages by volume
  // initializate conts
  // iterate against every package
  // validate if current volume + next package is less or equal than wh volume
  // check if package fits in wh
  // increment package volume in current volume
  // count package

  const whVolume = warehouse.height * warehouse.length * warehouse.breadth


  const sortedPackages = [...packages].sort((a,b) => {
    const volumeA = a.height * a.length * a.breadth
    const volumeB = b.height * b.length * b.breadth

    return volumeA - volumeB
  })

  let currentVolume = 0
  let packageCount = 0

  for(const currentPackage of packages){
    const packageVolume = currentPackage.height * currentPackage.length * currentPackage.breadth

    if(currentVolume + packageVolume <= whVolume){
      if(currentPackage.height <= warehouse.height && currentPackage.length <= warehouse.length &&
        currentPackage.breadth <= warehouse.breadth
      ){
        currentVolume += packageVolume
        packageCount++
      }
    }
  }

  return packageCount
};

export { maxPackagesGreedy };
