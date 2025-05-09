{
    //     <div id="container">
    //     <h1 id="heading" class ="mainheading">Welcome back to react Session</h1>
    //     <p id="subheading">It's Module-3 (React)</p>
    // </div>
}
// let element = React.createElement("div",{id: "container"},[
//     React.createElement(
//         "h1",
//         {id:"heading", className:"mainnheading"},
//         "Welcome Back"
//     ),
//     React.createElement("p",{id:"subheading", style:{color:"red", fontSize:"32px"}},"It's Module-3(React)"),
// ]);
let age = 20;
let message;
if(age>18){
    message="You can Drive";
}else{
    message= "You  can't Drive";
}

let element = (
    <React.Fragment>
    <div id="container"  style={{color:"red", fontSize:"32px"}} > This is MainContainer  </div>

        <h1 id="heading" className="mainheading"
        style={{background:"yellow",textDecoration:"underline"}}>
             Welcome back to React Session
             </h1>
        <p id="subheading" 
        style={{color:"blue", fontSize:"32px"}} >
            It's Module-3 (React)</p>

            <h1>{message}</h1>
            <img src="" alt=""/>
            <input type="text" placeholder="Enter your text"/>
</React.Fragment>
    );
let rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(element);
