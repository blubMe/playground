const f = {
  queryText: function(obj,val) {
    return document.querySelector(obj).textContent=val
  },
  queryStyle: function(obj,sty){
    return document.querySelector(obj).setAttribute("class", sty)
  }
}

const navigate = navigator.connection.effectiveType
console.log(navigator)
console.log(navigate)

const check = () => {
  f.queryText('#networkQuery','Checking your speed...')
  res()
}

const res = () => {
  if(navigate === '4g'){
    return f.queryText('#networkQuery','DAMN DAT SO FAST BRO !!! GO PLAY SOME MUSIC ON YOUTUBE') & f.queryStyle('#network','fast')
  } else if(navigate === '3g'){
    return f.queryText('#networkQuery','WELL WELL ITS MEDIUM SPEED, SOME LOADING BAR WAIT FOR U') & f.queryStyle('#network','med')
  } else if(navigate === '2g'){
    return f.queryText('#networkQuery','Thats, oh god i feel you bro. Stay calm i will call your internet provider') & f.queryStyle('#network','slow')
  } return f.queryText('#networkQuery','ma bad ma bad, my robot is struggle rn')
}
