function Tipka(props){

    function handleClick(){
    // Pozivamo iz props-a
    props.akcija()
    }
   
    return(
    <div className="tipkaOkvir">
    <button onClick={handleClick}>{props.natpis}</button>
    </div>
    )
   }
   export default Tipka
   