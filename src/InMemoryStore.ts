import { Chat, Store } from "./store/store";

export interface Room {
    roomId: string;
    chats: Chat[];
}

export class InMemoryStore implements Store {
    private store: Map<string, Room>;
    constructor() {
        this.store = new Map<string, Room>();
    }

    //functions : 
    //initRoom : roomId as input
    initRoom(roomId: string) {
        this.store.set(roomId, {
            roomId,
            chats: []
        });
    }

    //get all the chats for the room
    getChats(roomId: string, limit: number, offset: number) {
        const room = this.store.get(roomId);
        if (!room) {
            return [];  //if no room, then create an empty room object
        }
        //else return the room chats found : 
        return room.chats
    }

    //add chat for room : 
    addChat(room: string, limit: number, offset: number) {

    }

    upVote(room: string, chatId: string) {

    }
}