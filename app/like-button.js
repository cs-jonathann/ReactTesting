export default function LikeButton(){
    function handleClick() {
        setLikes(likes + 1);
      }

      return  <button onClick={handleClick}>Like ({likes})</button>
}