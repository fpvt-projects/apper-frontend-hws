class newNode 
{
  constructor (data, next) 
  {
    this.data = data
    this.next = null
  }

}

class Stack
{
  constructor () 
  {
    this.top = null
  }

  push = (ele) => {
    if(typeof ele === 'string'){
      var node=new newNode(ele)
      node.next=this.top
      this.top=node
      return "Pushed"
    } else {
      return "Not a String"
    }
      
  }

  pop = () => {
      var temp=this.top
      if(temp === null) {
        return "Empty Stack"
      } else {
        this.top=this.top.next
        temp=null
        return "Popped"
      }
  }

  check = () => {
      var checkArr = []
      var temp=this.top
      while(temp!=null)
      {
        checkArr.push(temp.data)
        temp=temp.next
      }
        return checkArr
  }

  peek(){
    var temp=this.top
    return (temp.data)
  }
  
}
  
const top = new Stack()
console.log(top.push('Milk'))
console.log(top.push('Eggs'))
console.log(top.push(1))
console.log(top.check())
console.log(top.peek())
console.log(top.pop())
console.log(top.check())
console.log(top.pop())
console.log(top.check())
console.log(top.pop())


