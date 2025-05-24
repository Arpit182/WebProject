const cricketQuizArray = [
    {
      question: "Who holds the record for the most runs in a single ODI match?",
      options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "Martin Guptill"],
      correctOption: "Martin Guptill"
    },
    {
      question: "Which country won the 2019 ICC Cricket World Cup?",
      options: ["Australia", "India", "New Zealand", "England"],
      correctOption: "England"
    },
    {
      question: "Who is known as the 'Master Blaster' in cricket?",
      options: ["Shane Warne", "Virat Kohli", "Brian Lara", "Sachin Tendulkar"],
      correctOption: "Sachin Tendulkar"
    },
    {
      question: "Which bowler has the most wickets in Test cricket?",
      options: ["Shane Warne", "Muttiah Muralitharan", "James Anderson", "Glenn McGrath"],
      correctOption: "Muttiah Muralitharan"
    },
    {
      question: "Who was the captain of the Indian cricket team during the 2007 ICC T20 World Cup win?",
      options: ["Sourav Ganguly", "Virat Kohli", "MS Dhoni", "Rahul Dravid"],
      correctOption: "MS Dhoni"
    },
    {
      question: "What is the highest team total in a T20 International match?",
      options: ["273/3", "260/6", "240/5", "200/3"],
      correctOption: "273/3"
    },
    {
      question: "Which player holds the record for the fastest century in ODI cricket?",
      options: ["Shahid Afridi", "AB de Villiers", "Brian Lara", "Sanath Jayasuriya"],
      correctOption: "AB de Villiers"
    },
    {
      question: "Who is the highest run scorer in ICC World Cup history?",
      options: ["Sachin Tendulkar", "Ricky Ponting", "Virat Kohli", "Jacques Kallis"],
      correctOption: "Sachin Tendulkar"
    },
    {
      question: "Which bowler has taken the most wickets in a single World Cup?",
      options: ["Muttiah Muralitharan", "Shane Warne", "Lasith Malinga", "Glenn McGrath"],
      correctOption: "Muttiah Muralitharan"
    },
    {
      question: "Which cricketer is known as the 'Little Master'?",
      options: ["Sunil Gavaskar", "Sachin Tendulkar", "Mohammad Azharuddin", "Rahul Dravid"],
      correctOption: "Sunil Gavaskar"
    },
    {
      question: "Which team has won the most number of ICC Champions Trophy titles?",
      options: ["India", "Australia", "Pakistan", "England"],
      correctOption: "India"
    },
    {
      question: "In which year did India win their first-ever ICC T20 World Cup?",
      options: ["2007", "2009", "2011", "2013"],
      correctOption: "2007"
    },
    {
      question: "Which cricketer has hit the most sixes in ODI cricket?",
      options: ["Shahid Afridi", "Chris Gayle", "MS Dhoni", "Sanath Jayasuriya"],
      correctOption: "Shahid Afridi"
    },
    {
      question: "Who was the first cricketer to score a double century in an ODI match?",
      options: ["Chris Gayle", "Virender Sehwag", "Sachin Tendulkar", "Matthew Hayden"],
      correctOption: "Virender Sehwag"
    },
    {
      question: "Which country is known as the birthplace of cricket?",
      options: ["Australia", "India", "England", "South Africa"],
      correctOption: "England"
    },
    {
      question: "Which bowler took a hat-trick in the 2003 Cricket World Cup?",
      options: ["Shane Bond", "Chaminda Vaas", "Lasith Malinga", "Shaun Pollock"],
      correctOption: "Chaminda Vaas"
    },
    {
      question: "Who is the only cricketer to have scored 100 international centuries?",
      options: ["Brian Lara", "Virat Kohli", "Sachin Tendulkar", "Ricky Ponting"],
      correctOption: "Sachin Tendulkar"
    },
    {
      question: "Which cricketer has the highest individual score in an ODI?",
      options: ["Chris Gayle", "Martin Guptill", "Virender Sehwag", "Rohit Sharma"],
      correctOption: "Rohit Sharma"
    },
    {
      question: "Which cricketer is known as the 'Universe Boss'?",
      options: ["Shahid Afridi", "Chris Gayle", "AB de Villiers", "Ben Stokes"],
      correctOption: "Chris Gayle"
    },
    {
      question: "Who was the first player to reach 10000 runs in ODI cricket?",
      options: ["Sachin Tendulkar", "Brian Lara", "Ricky Ponting", "Inzamam-ul-Haq"],
      correctOption: "Sachin Tendulkar"
    },
    {
      question: "Who took the first-ever 10-wicket haul in Test cricket?",
      options: ["Muttiah Muralitharan", "Jim Laker", "Anil Kumble", "Shane Warne"],
      correctOption: "Jim Laker"
    }
  ];
  const set=new Set();
  function Randomquestion(){
    while(set.size!=10){
      const index=Math.floor(Math.random()*20);
      set.add(cricketQuizArray[index]);    
    }
    return [...set];
  }
 const form=document.querySelector('form');
 const original_answer={};
 const problem=Randomquestion();
 problem.forEach((obj,index) => {
  const div_element=document.createElement('div');
  div_element.className='question';
  const para=document.createElement('p');
  para.textContent=`${index+1}.${obj['question']}`;
  original_answer[`q${index+1}`]=obj['correctOption'];
  div_element.appendChild(para);
  obj['options'].forEach((data)=>{
    const label=document.createElement('label');
    const input=document.createElement('input');
    input.type="radio";
    input.name=`q${index+1}`;
    input.value=data;
    label.appendChild(input);
    label.appendChild(document.createTextNode(data));
    div_element.appendChild(label);
    div_element.appendChild(document.createElement("br"));
  })
  form.appendChild(div_element);
 });
 const button=document.createElement("button");
 button.type="submit";
 button.className="submit-btn";
 button.textContent="Submit";
 form.appendChild(button);

 form.addEventListener(('submit'),(event)=>{
    event.preventDefault();
    const data=new FormData(form);
    let result=0;
 for(let[key,value] of data.entries()){
  if(value===original_answer[key])
     result++ ;
}
 const out=document.getElementById("out");
 out.innerText=`${result} out of ${set.size} is correct`;
 form.reset();
 //console.log(original_answer);
 
 });
 

