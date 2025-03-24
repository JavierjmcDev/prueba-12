export default function ItemListHistory({description, time}) {
    return <li className="flex items-center gap-6">
        <span className="">{time}</span>
        <span>
            {description}
        </span>
    </li>

}