class pyramidGrid extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback(){
    this.style.display="block";
    this.drawGrid()
    this.styleGrid()
    // this.personifyGrid()
  }
  drawGrid(){
    return =`
    <div class="grid-wrapper">
      <div class=""
    </div>
    `
  }
  // drawGrid(){
  //   const gridBlocksNum=this.gridBlocksNum()
  //   const gridSize=(gridBlocksNum * 100) + "%"
  //   console.log('gridSize:',gridSize)
  //   this.innerHTML=`
  //   <style>
  //   #grid-wrapper{
  //     height:100%;
  //     width:100%;
  //     background:pink;
  //   }
  //   .grid{
  //     height:${gridSize};
  //     width:${gridSize};
  //     background:orange;
  //   }
  //   </style>
  //   <div id="grid-wrapper">
  //     <div class="grid">
  //
  //     </div>
  //   </div>
  //   `
  // }
  // gridBlocksNum(){
  //   const squares=this.getAttribute('squares')
  //   let oddSquare=Math.floor(Math.sqrt(squares))**2
  //   oddSquare % 2 == 0 ? oddSquare=((oddSquare - 1)**2) : false
  //   return oddSquare
  // }
  styleGrid(){

  }
  personifyGrid(){

  }
}

customElements.define("pyramid-grid", pyramidGrid);
