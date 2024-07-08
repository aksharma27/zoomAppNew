//create in-memory object that will store the state of a room


type UserId = string;   //  type alis : userId is refered to a string, where ever uwe use userId, the variable will be of string type : 
// let upvotes : string, is same as
//let upvotes : UserId
//interface chat will have the shape of our chat object
export interface Chat {
    userId: string;
    name: string;
    message: string;
    upvotes: UserId[];    //total number of upvotes + we need to store who have upvoted what
}

export abstract class Store {
    constructor() {

    }

    //functions : 
    initRoom(roomId: string) {

    }

    getChats(room: string, limit: number, offset: number) {

    }

    //add chat for room : 
    addChat(room: string, limit: number, offset: number) {

    }

    upVote(room: string, chatId: string) {

    }
}