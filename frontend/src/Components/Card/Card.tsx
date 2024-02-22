
import './Card.css'

type Props = {}

const Card = (props: Props) => {
    return (
        <div className='card'>
            <img
                src='https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg'
                alt='Image'
            ></img>
            <div className='details'>
                <h2>Apple</h2>
                <p>$110</p>
            </div>
            <p className='info'>
                sfdddddddddddddfddddddddddddddddddddddddddddddddddddddddddd
            </p>
        </div>
    )
}

export default Card;