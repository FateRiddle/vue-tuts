
if(点击全选){
  if(全选){
    所有单选都取消选中
  } else {
    所有单选都选中
  }
}

for(每个单选框){
  if(点击单选){
    if(未选中 && 其他三个都选中){
      全选
    } else if (已选中 && 其他三个都选中) {
      取消全选
    }
  }
}

let array = [ false, false, false, true ]

let all = array.every(a => a)

array = [ true, true, true, true ]

all = array.every(a => a)

all = array.every(function(a){return a === true})
