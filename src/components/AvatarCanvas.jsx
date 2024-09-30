import avatarImage from '../assets/Avatar-nobg.png'

const AvatarCanvas = () => {
    return (
            <div className="avatar-container">
                <img src={avatarImage} alt="" className='avatar-image'/>
            </div>
    );
}
export default AvatarCanvas;