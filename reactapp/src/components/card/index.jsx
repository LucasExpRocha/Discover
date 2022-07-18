import './styles.css'

export function Card(props){
    return (
        <div className='containerCard'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}