
class Comment {
    constructor (text) {
        this.id= Comment.id++;
        this.text= text;
    }
}

Comment.id= 1
export default Comment;


