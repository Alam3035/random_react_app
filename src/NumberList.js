function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
        <li key={number.toString()}>
            {number}
        </li>
    )

    return (
        <div className="numberlist">
            <ul>{listItems}</ul>
        </div>
    )
}

export default NumberList;