class Reminder {
  id: number
  isComplete: boolean
  
  constructor(public title: string) {
    this.id = Date.now()
    this.isComplete=false
  }
}


export default Reminder