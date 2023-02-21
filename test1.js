function SubmitAnswer() {
    var radios = document.getElementsByName("answer");
    var isChecked = false;
    for(var i=0;i<radios.length;i++){
        if(radios[i].checked){
            isChecked = true;
            break;
        }
    }
    if(!isChecked){
        alert("请选择一个选项！");
        return;
    }
    var score = 0;
    for(var i=0;i<radios.length;i++){
        if(radios[i].checked && radios[i].value == "right"){
            score++;
            console.log("score: " + score);
            alert("恭喜你，回答正确！");
        }
        else if(radios[i].checked && radios[i].value == "wrong"){
            alert("很遗憾，回答错误！请调整心态继续下一题！");
        }
    }
    window.location.href = "nextPage.html";
    // window.location.href = "nextQuestion.html?score=" + score;
}