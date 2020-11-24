




const input=document.getElementById('input');
input.addEventListener('change',function(){
    console.log(input.value);
    plot(input.value);
})


function plot(value){
    let contentsBounds = document.body.getBoundingClientRect();
    console.log(contentsBounds);
    let width = 800;
    let height = 300;
    let ratio = contentsBounds.width / width;
    width *= ratio;
    height *= ratio;    
    functionPlot({
        target: "#root",
       title:"graph",
        width,
        height,
        yAxis: { domain: [-1, 9] },
        grid: true,
        data: [
          
            {fn: value}
           
          
          
        ]
      });
      
}

