function Klub(props) {
    return (
        <div className="">
            <img src={props.url} alt="{props.ime}" />
            <p>{props.ime}</p>
        </div>
    );
}

export default Klub;
