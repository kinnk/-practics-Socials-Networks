
let state = {
    ProfilePage:
    {
        UserProfile: 
        [
            {
                id:1, 
                name:'Niclas Kim', 
                ava:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Monsieur_Sarazin.jpg/800px-Monsieur_Sarazin.jpg', 
                status : 'online'
            }
        ],
        Posts:
        [
            {id:1, ava:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Monsieur_Sarazin.jpg/800px-Monsieur_Sarazin.jpg', User: 'Niclas Kim', text:'First post in my profile'},
            {id:2, ava:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Monsieur_Sarazin.jpg/800px-Monsieur_Sarazin.jpg', User: 'Niclas Kim', text: 'Second post, LOL'},
            {id:3, ava:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Monsieur_Sarazin.jpg/800px-Monsieur_Sarazin.jpg', User: 'Niclas Kim', text: '3 post, LOL'},
        ],
    },
    MessagesPage:
    {
        Dialogs: 
        [
            {id: 1, name: 'Victor'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sam'},
            {id: 5, name: 'Diana'},
            {id: 6, name: 'Yana'},
        ],
        Messages: 
        [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Whatsup'},
            {id: 3, message: 'aloha'},
            {id: 4, message: 'Lets play'},
            {id: 5, message: 'Lern'},
        ]
    },
}

export default state;