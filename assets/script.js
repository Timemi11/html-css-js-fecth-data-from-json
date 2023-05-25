function appeadData(d) {
  // Summary
  let divbox = document.getElementsByClassName("boxScore");
  //interal loop
  for (let i = 0; i < d.length; i++) {
    let image = divbox[i].getElementsByTagName("img")[0];
    let p = divbox[i].getElementsByTagName("p")[0];
    let p1 = divbox[i].getElementsByTagName("span")[0];
    let span = divbox[i].getElementsByTagName("span")[1];
    // set attribute , textcontent and insert data display to html 
    image.setAttribute("src", d[i].icon);
    p.textContent = d[i].category;
    p1.textContent = d[i].score;
    span.textContent = " / 100";
  }
  // End Summary
  //Total Score
  let ttsc = document.querySelector(".totalscore");
  let hd = ttsc.getElementsByTagName("h1")[0];
  let p = ttsc.getElementsByTagName("p")[0];
  hd.textContent = totalScore(d);
  p.textContent = "of 100";
  // End
}
function totalScore(d) {
  let totalSC = 0;
  for (let i = 0; i < d.length; i++) {
    totalSC += d[i].score;
  }
  let actualSC = Math.round((totalSC / 400) * 100);
  return actualSC;
}
fetch('./data.json').then(response => {
  return response.json();
}).then(data => {
  appeadData(data);
}).catch(err => {
  // Do something for an error here
});


