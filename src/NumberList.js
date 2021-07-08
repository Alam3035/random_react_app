function ListItems(props) {
    const value = props.value;
    return (
        <li>
            {value}
        </li>
    )
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <ListItems key={number.toString()}
            value={number} />
    )

    return (
        <div className="numberlist">
            <ul>
                {numbers.map((number) =>
                <ListItems key={number.toString()}
                            value={number} />
                )}
            </ul>
        </div>
    )
}

export default NumberList;