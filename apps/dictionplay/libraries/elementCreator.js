const elementCreator={
  createElement:function(name,type,num,mom){
    const bases=this.generateBase(name,type,num)
    console.log('bases:',bases)
  },
  generateBase:function(name,type,num){
    let elms=[]
    const _this=this
    python.range(num).forEach(function(currentValue){
      let e=document.createElement(type)
      e=_this.nameHandler(e,name)
      e=_this.typeHandler(e,type)
      elms.push(e)
    })
    return elms
  },
  nameHandler:function(elm,name){
    let sel=this.nameRouter(name)
    sel==undefined ? name :
  },
  nameRouter:{
    ".":function(e,name){
      e.id=name
      return e
    },
    "#":function(e,name){
      e.className=name
      return e
    }
  },
  typeHandler:function(elm,type){

  }
}

function C(attrs){
  const name=attrs.id || attrs.class || attrs.name
  const type=attrs.type || attrs.element
  const num=attrs.num || attrs.number
  const mom=attrs.mom || attrs.append || attrs.appendTo
  return elementCreator.createElement(name,type,num,mom)
}

window.create=C
