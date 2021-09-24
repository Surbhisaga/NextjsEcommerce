const initialState = [
    {
        name: "Williamson",
        designation: "Web Developer",
        image: "images/img-1.jpg",
        about: "Williamson Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate"
    },
    {
        name: "Kristiana",
        designation: "App Developer",
        image: "images/img-2.jpg",
        about: "Kristiana Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate"
    },
    {
        name: "Steve Thomas",
        designation: "App Developer",
        image: "images/img-3.jpg",
        about: "Steve Thomas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate"
    },
    {
        name: "John",
        designation: "web Developer",
        image: "images/img-1.jpg",
        about: "john Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate"
    },
]


export const ourTeamReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}