import { rerenderTree } from '../render';

export let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 15 },
            { id: 2, message: 'It is my first post', likesCount: 25 }
        ],
        newPostText: ''

    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Lena', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
            { id: 2, name: 'Pit', avatar: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg' },
            { id: 3, name: 'Alex', avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg' },
            { id: 4, name: 'Andrew', avatar: 'https://www.meme-arsenal.com/memes/72ff843ad361bc91b5adfae9b25a7cbf.jpg' },
            { id: 5, name: 'Sun', avatar: 'https://xochu-vse-znat.ru/wp-content/uploads/2017/11/vbyb.jpg' },
            { id: 6, name: 'Mam', avatar: 'https://cdn140.picsart.com/330959057057201.jpg?type=webp&to=min&r=640' },
            { id: 7, name: 'Dad', avatar: 'https://demiart.ru/forum/journal_uploads13/j2406363_1591724080_0.jpg' },
        ],
        messages: [
            { id: 1, message: 'Hello', avatarUser: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
            { id: 2, message: 'Hello', avatarUser: 'https://w7.pngwing.com/pngs/336/946/png-transparent-avatar-user-medicine-surgery-patient-avatar-face-heroes-head.png' },
            { id: 3, message: 'How are you?', avatarUser: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
            { id: 4, message: 'I am fine', avatarUser: 'https://w7.pngwing.com/pngs/336/946/png-transparent-avatar-user-medicine-surgery-patient-avatar-face-heroes-head.png' },
            { id: 5, message: 'And you?', avatarUser: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
            { id: 6, message: 'I am great', avatarUser: 'https://w7.pngwing.com/pngs/336/946/png-transparent-avatar-user-medicine-surgery-patient-avatar-face-heroes-head.png' },
            { id: 7, message: 'Super', avatarUser: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
        ],
        newMessageText: ''
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 8,
        message: state.dialogsPage.newMessageText,
        avatarUser: 'https://w7.pngwing.com/pngs/336/946/png-transparent-avatar-user-medicine-surgery-patient-avatar-face-heroes-head.png'
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderTree(state);
}

export let updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderTree(state);
}
