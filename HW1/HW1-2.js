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
    this.length = 0
  }

  push = (ele) => {
	  var node=new newNode(ele)
	  console.log(node)
	  node.next=this.top
	  this.top=node
    this.length++
  }

  pop()
  {
	  var temp=this.top
	  this.top=this.top.next
	  temp=null
    this.length--
  }

  display()
  {
    
      var temp=this.top
      while(temp!=null)
      {
        console.log(temp.data)
        temp=temp.next
      }
  }

  peek(){
    console.log(this.length)
  }
  
}
  
const top = new Stack()
top.push('Milk')
top.push('Eggs')
top.display()
top.peek()
top.pop()
top.display()