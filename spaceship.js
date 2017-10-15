class CrewMember {
  constructor(position, currentShip){
    this.position = position
    if (currentShip) {
      this.currentShip = currentShip
    } else {
      this.currentShip = 'Looking for a Rig'
    }
  }

  engageWarpDrive(){
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    }
  }

  setsInvisibility(){
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    }
  }

  chargePhasers(){
    if (this.position === 'Gunner') {
      if (this.currentShip !== 'Looking for a Rig') {
        this.currentShip.phasersCharge = 'charged!'
      } else {
        return 'had no effect'
      }
    }
  }

  engageWarpDrive(){
    if (this.position === 'Pilot') {
      if (this.currentShip !== 'Looking for a Rig') {
        this.currentShip.warpDrive = 'engaged!'
      } else {
        return 'had no effect'
      }
    }
  }

  setsInvisibility(){
    if (this.position === 'Defender') {
      if (this.currentShip !== 'Looking for a Rig') {
        this.currentShip.cloaked = true
      } else {
        return 'had no effect'
      }
    }
  }
}

class Spaceship{
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
    this.crew = crew
    if (crew.length === 0) {
      this.docked = true
    } else {
      this.docked = false
    }
    crew.forEach((member) => {
      member.currentShip = this
    })
  }
}
