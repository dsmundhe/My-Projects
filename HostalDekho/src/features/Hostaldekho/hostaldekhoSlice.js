import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colleges: [
    {
      name: "College of Engineering",
      location: "Pune",
      ranking: 1,
      logo: "https://i.pinimg.com/564x/79/f5/db/79f5db918853c4e20ee5bfdc7b830ca8.jpg",
    },
    {
      name: "Indian Institute of Technology",
      location: "Mumbai",
      ranking: 2,
      logo: " https://i.pinimg.com/564x/d9/25/63/d92563980132485db206a553bd9a0f23.jpg",
    },
    {
      name: "National Institute of Technology",
      location: "Surathkal",
      ranking: 3,
      logo: "https://i.pinimg.com/564x/a5/8b/3a/a58b3ae3b73d18f21e73cb2fdffa9dfc.jpg",
    },
    {
      name: "Anna University",
      location: "Chennai",
      ranking: 4,
      logo: " https://i.pinimg.com/564x/bb/b2/69/bbb269fd28c363384e43c4b7d6b0b3f3.jpg",
    },
    {
      name: "Delhi Technological University",
      location: "Delhi",
      ranking: 5,
      logo: " https://i.pinimg.com/564x/4a/a2/45/4aa2454d46917090226a072b31b3f2a7.jpg",
    },
    {
      name: "College of Engineering",
      location: "Pune",
      ranking: 1,
      logo: " https://i.pinimg.com/564x/80/6e/33/806e338e2d1e249796179de5164bb1c8.jpg",
    },
    {
      name: "Indian Institute of Technology",
      location: "Mumbai",
      ranking: 2,
      logo: " https://i.pinimg.com/564x/9f/81/8d/9f818d4c9c9af1b672ab737b4e4ebd5f.jpg",
    },
    {
      name: "National Institute of Technology",
      location: "Surathkal",
      ranking: 3,
      logo: " https://i.pinimg.com/564x/ec/8b/ba/ec8bba63285020f82381dd25ba819ae6.jpg",
    },
    {
      name: "Anna University",
      location: "Chennai",
      ranking: 4,
      logo: " https://i.pinimg.com/564x/24/83/b0/2483b0adce8f18ec74d217c9bb2ce394.jpg",
    },
    {
      name: "Delhi Technological University",
      location: "Delhi",
      ranking: 5,
      logo: " https://i.pinimg.com/564x/df/03/07/df0307f47c7b936b4d905e1ec8dbb9a8.jpg",
    },
  ],
  signup: [],

  hostels: [
    {
      id: 1,
      name: "Sunny Hostel",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      photo:
        "https://i.pinimg.com/564x/88/82/98/8882981dae16006fab9aec142a5d3a17.jpg",
    },
    {
      id: 2,
      name: "Mountain View Hostel",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      photo:
        "https://i.pinimg.com/564x/31/8a/8c/318a8c35dce69054524cedc48f8d4db3.jpg",
    },
    {
      id: 3,
      name: "City Center Hostel",
      city: "Nagpur",
      state: "Maharashtra",
      country: "India",
      photo:
        "https://i.pinimg.com/564x/aa/55/60/aa556009f265d53b3de21a28cad01d57.jpg",
    },
    {
      id: 4,
      name: "Beachside Hostel",
      city: "Alibag",
      state: "Maharashtra",
      country: "India",
      photo:
        "https://i.pinimg.com/736x/a2/05/3d/a2053db002138560eacf9896ea492a23.jpg",
    },
    {
      id: 5,
      name: "Forest Retreat Hostel",
      city: "Nashik",
      state: "Maharashtra",
      country: "India",
      photo:
        "https://i.pinimg.com/736x/7e/80/fd/7e80fd223b504097f7f23e3799f9f330.jpg",
    },
    {
      id: 6,
      name: "Lakeside Hostel",
      city: "Aurangabad",
      state: "Maharashtra",
      country: "India",
      photo:
        "https://i.pinimg.com/736x/3c/41/1b/3c411bd5e7f7fa19b9b6bca48640bf43.jpg",
    },
    {
      id: 7,
      name: "Urban Jungle Hostel",
      city: "Thane",
      state: "Maharashtra",
      country: "India",
      photo:
        "https://i.pinimg.com/564x/5b/b3/92/5bb3923e251b85a01597b91daa776c0b.jpg",
    },
    {
      id: 8,
      name: "Historical Hostel",
      city: "Kolhapur",
      state: "Maharashtra",
      country: "India",
      photo:
        "https://i.pinimg.com/564x/ec/18/65/ec1865fd65d19f320d97b6db13b35eb1.jpg",
    },
    {
      id: 9,
      name: "Riverside Hostel",
      city: "Ratnagiri",
      state: "Maharashtra",
      country: "India",
      photo:
        "https://i.pinimg.com/564x/c8/e7/22/c8e7229652a5e70cbde207bcf2b89859.jpg",
    },
    {
      id: 10,
      name: "Hilltop Hostel",
      city: "Mahabaleshwar",
      state: "Maharashtra",
      country: "India",
      photo:
        "https://i.pinimg.com/564x/ca/1b/10/ca1b10982fec28bb83029da1be025d23.jpg",
    },
  ],
  view: [],
};

export const hostaldekhoSlice = createSlice({
  name: "hostaldekho",
  initialState,
  reducers: {
    addval: (state, action) => {
      state.signup.push(action.payload);
    },
    setViewData: (state, action) => {
      state.view.push(action.payload);
    },
  },
});

export const { addval, setViewData } = hostaldekhoSlice.actions;
export default hostaldekhoSlice.reducer;
