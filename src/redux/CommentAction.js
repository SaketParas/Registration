const POST = 'POST';
const COMMENT_DATA = 'COMMENT_DATA';

const addTopic = (all) => {
    console.log(all)
    return{
        type: POST,
          all 
        }
}
const addComment = (all) => {
    console.log(all)
    return{
        type: COMMENT_DATA,
          all 
        }
}

export {addTopic,addComment}