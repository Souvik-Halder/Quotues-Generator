const newQuote=()=>{
    const  fetchText=async()=> {
        let response = await fetch(`https://api.quotable.io/random`);
         let text=document.getElementById('quote_para');
         let author=document.getElementById('author');
        // console.log(response.status); // 200
        // console.log(response.statusText); // OK
    
        if (response.status === 200) {
            let data = await response.text();
            const objdata=JSON.parse(data);console.log()
            const arrdata=[objdata];
            const realtimeData=arrdata.map((val)=> {
             text.innerHTML=val.content;
             author.innerHTML=val.author;
            }
                )
                .join("");
               
        }
        
    }
    
fetchText();
}
const readLoud=()=>{
    let text=document.getElementById('quote_para');
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text.innerHTML));
    let author=document.getElementById('author');
    window.speechSynthesis.speak(new SpeechSynthesisUtterance('Author'+author.innerHTML));
}
const copyText=()=>{
    let text=document.getElementById('quote_para').innerHTML;
    navigator.clipboard.writeText(text);
}
const postTwitter=()=>{
    let text=document.getElementById('quote_para').innerHTML;
   let urlText= `https://twitter.com/intent/tweet?text=${text}`;
   window.open(urlText);
}