class CardSwipe extends HTMLElement {

  constructor() {
    super()
    this.swipeDirection=null
    this.swipe=false
    this.loaded=false
    const _this=this
    if(window.innerWidth > window.innerHeight){
      _this.interact=false;
    }else{
      _this.interact=true;
    }
    this.coords=[]
  }

  connectedCallback(){
    this.style.cssText="display:block;visibility:hidden;"
    this.loaded=true
    this.createCards()
  }

  createCards(){
    const cardWrapper=document.createElement('div')
    cardWrapper.style.cssText="height:100%;width:100%;display:flex;align-items:center;justify-content:center;"
    const cardStyles=this.getAttribute('card-styles')
    const cardOne=this._styleSwipeCards(document.createElement('div'),cardStyles)
    const cardTwo=this._styleSwipeCards(document.createElement('div'),cardStyles)
    cardOne.className="swipecard"
    cardTwo.className="swipecard"
    cardOne.style.zIndex=1
    cardTwo.style.zIndex=0
    const _this=this
    cardWrapper.appendChild(cardOne)
    cardWrapper.appendChild(cardTwo)
    const i=setInterval(function(){
      if(_this.children){
        cardOne.appendChild(_this.children[0])
        _this.realizeCards(cardWrapper)
        _this.interact ? _this.actionizeCard(_this.querySelectorAll('.swipecard')[0]) : false
        clearInterval(i)
      }
    },1)
    this.style.visibility=""
  }

  generateCard(){
    const c=document.createElement('div')
    c.className="swipecard"
    const card=this._styleSwipeCards(c,this.getAttribute('card-styles'))
    card.style.position="absolute"
    return card
  }

  _styleSwipeCards(cardContainer,cardStyles){
    cardContainer.style.cssText=cardStyles
    cardContainer.style.display="flex"
    cardContainer.style.alignItems="center"
    cardContainer.style.justifyContent="center"
    cardContainer.style.position="absolute"
    cardContainer.style.zIndex=0
    return cardContainer
  }

  realizeCards(cardWrapper){
    this.innerHTML=cardWrapper.outerHTML
  }

  actionizeCard(card){
    const cardWrapper=this
    const card_wrap=card.parentElement
    const card_wrap_height=card_wrap.clientHeight
    const card_wrap_width=card_wrap.clientWidth
    const cardLeft=this.style.left
    const maxT=card_wrap_height * .72
    const maxL=card_wrap_width * .68
    const abs=Math.abs
    let sX=false
    let sY=false
    card.addEventListener('touchmove',function(e){
      const x=e.changedTouches[0].clientX;
      const y=e.changedTouches[0].clientY;
      const dX=x - sX
      const dY=y - sY
      !sX ? sX=x : dX<0 ? card.style.left=`${-abs(dX)}px` : card.style.left=`${abs(dX)}px`
      !sY ? sY=y : sY<0 ? card.style.top=`${-abs(dY)}px` : card.style.top=`${dY}px`
      return false;
    })
    card.addEventListener('touchend',function(){
      sX=false
      sY=false
      const T=parseInt(this.style.top)
      const B=T + this.clientHeight
      const L=parseInt(this.style.left)
      const R=L + this.clientWidth
      const top_down=T>0 && T>maxT
      const bottom_up=T<0 && -T>maxT
      const left_right=L>0 && L>maxL
      const right_left=L<0 && L<-maxL
      this.style.transition="left .1s, top .1s, opacity 1s"
      const c=top_down || bottom_up || left_right || right_left
      if(top_down){
        this.style.top=card_wrap_height + 'px'
        cardWrapper.direction="bottom"
      }
      if(bottom_up){
        this.style.top=-card_wrap_height + 'px'
        cardWrapper.direction="top"
      }
      if(left_right){
        this.style.left=card_wrap_width + 'px'
        cardWrapper.direction="left"
      }
      if(right_left){
        this.style.left=-card_wrap_width + 'px'
        cardWrapper.direction="right"
      }
      if(!c){
        this.style.top=""
        this.style.left=""
      }else{
        cardWrapper.swipe=true
      }
      return false
      // console.log('T:',T)
      // console.log('L:',L)
      // console.log('maxT:',maxT)
      // console.log('maxL:',maxL)
      // console.log('top_down:',top_down)
      // console.log('bottom_up:',bottom_up)
      // console.log('left_right:',left_right)
      // console.log('right_left:',right_left)
    })
    card.addEventListener('transitionend',function(e){
      const _this=this
      this.style.transition=""
      if(cardWrapper.swipe){
        _this.outerHTML=""
        const cardContainer=cardWrapper.children[0]
        const currentCard=cardContainer.children[0]
        currentCard.style.zIndex=1
        const currentCardContents=cardWrapper.generateNext()
        currentCard.appendChild(currentCardContents)
        cardWrapper.actionizeCard(currentCard)
        currentCard.parentElement.appendChild(cardWrapper.generateCard())
      }
    })
  }

  generateNext(){
    const node=document.createElement('div')
    node.className="node"
    node.style.cssText="height:90%;width:90%;background:#F3F6F8;border-radius:1em;"
    const _this=this
    let word
    if(this.coords.length==0){
      word=wordnet.pyramid[0][0][0]
      this.coords=[0,0]
    }else{
      word=_this.wordnetTraverse()
    }
    // const title=document.createElement('div')
    // title.style.cssText="display:flex;align-items:center;justify-content:center;height:30%;width:100%;background:white;"
    // title.textContent=word.word
    // node.appendChild(title)
    console.log('word:',word)
    const cardStyles=`
    <style>
    .frame{
      display:flex;
      align-items:center;
      justify-content:center;
    }
    </style>
    <div class="frame" style="height:15%;width:100%;background:;font-size:5em;font-family: 'Spicy Rice', cursive;">${word.word=word.word[0].toUpperCase() + word.word.slice(1,word.word.length)}</div>
    <div class="frame" style="height:40 %;width:100%;background:;">
      <img style="height:70vw;width:70vw;border-radius:1em;" src="${word.image || 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/04/usertesting-730x356.jpg'}"></img>
    </div>
    <div class="frame" style="text-align:center;height:33.3%;width:100%;background:;">
      <span style="margin:10%;font-size:3em;font-family: 'Cabin', sans-serif;">${word.definition || "testing"}</span>
    </div>
    `
    node.innerHTML=cardStyles
    return node
  }

  wordnetTraverse(){
    const grid=wordnet.pyramid
    const oldCoords=this.coords
    console.log('oldCoords:',this.coords)
    let newCoords
    this.direction=="left" ? newCoords=[this.coords[1],this.coords[0] - 1] : false
    this.direction=="right" ? newCoords=[this.coords[1],this.coords[0] + 1] : false
    this.direction=="top" ? newCoords=[this.coords[1] + 1,this.coords[0]] : false
    this.direction=="bottom" ? newCoords=[this.coords[1] - 1,this.coords[0]] : false
    let currentWord=grid[newCoords[0]][newCoords[1]]
    if(currentWord==undefined || currentWord.length==0){
      currentWord=grid[oldCoords[1]][oldCoords[0]][0]
      return currentWord
    }else{
      this.coords[0]=newCoords[1]
      this.coords[1]=newCoords[0]
      console.log('newCoords:',this.coords)
      return currentWord[0]
    }
  }

}
customElements.define("card-swipe", CardSwipe)
