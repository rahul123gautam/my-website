import React from "react";
export default function Project(){
    const Sort=()=>{
         window.open("https://rahul123gautam.github.io/Sorting-Visualizer-using-chartjs/");
    }
    const Guess=()=>{
        window.open("https://rahul123gautam.github.io/Guess-My-Number/");
   }
    return(
        <div id="all-projects">
            <h2 className="style-project-h2" >💻Projects💻</h2>
            <div className="project" onClick={Sort}>
                    <div className="original-project one"></div>
                    <h2 className="style-project-h2">Sorting Algorithm with ChartJs</h2>
                    <p>All basic Sorting Algorithm Bubble, Selection, Insertion, Merge
                        <br/> and Quick sort are implemented and shown using Chart.Js</p>
                    <p><span className="style-project-h2">Tech stack:</span> HTML, CSS, JAVASCRIPT</p>
            </div>

            <div className="project" onClick={Guess}>
                    <div className="original-project two"></div>
                    <h2 className="style-project-h2">Guess My Number</h2>
                    <p>Making for fun using math.random() in javascript</p>
                    <p><span className="style-project-h2">Tech stack:</span> HTML, CSS, JAVASCRIPT</p>
            </div>
        </div>
    )
}