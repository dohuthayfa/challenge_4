// model[x][y]
// desgin model with x and y 6*5
let model =[]
for(let x =0; x<7;x++){ // x-Axial = 6  
    let colum=[]        // colum = 6 
} 
for (let y =0; y<6 ;y++){ // go to all row than next colum from 0 to 5 
    colum.push(0)

}
model.push(colum)


//React components 

ley render =[]
for (let x =0; x < this.model.length; x++){
let colum =[]
for(let y =0; y < this.model[x].length; y ++){
    if (this.model[x][y]==1){





// checking

if(this.check(condtion, this.state.turn? 1:2)=== true){
    return this.winnder(this.state.turn? 1:2)
}
else if (this.horizontal(condation, this.state.turn? 1:2)== true){
    return this.winnder(this.state.turn? 1:2) 
}
else if (this.vertical(condation, this.state.turn? 1:2)==2)
return this.winnder(this.state.turn? 1:2)

 else if(this.eDiagonal(condation, this.state.turn? 1: 2) === true){
    return this.winnder(this.state.turn? 1: 2)
    } else {
    this.setState(prev => {
    return {
    board: this.fromModel(),
    turn: !prev.turn
    }
    })
    }

 